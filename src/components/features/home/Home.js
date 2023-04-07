import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import useMeasure from 'react-use-measure';
import { mergeRefs } from 'react-merge-refs';

import { getRandomIntInclusive } from './../../../services/Utilities';

import Editor from '../../ui/Editor';
import Monitor from '../../ui/Monitor';
import Notification from '../../ui/Notification';
import { Postit, getPostitAnimationParameters } from '../../ui/Postit';
import { AnimatedTicket } from '../../ui/Ticket';
import { Jira } from '../../ui/Jira';

import './Home.scss';



function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

const Home = () => {
    const [postits, setPostits] = useState(null);
    const [refBoundsPostitSection, boundsPostitSection] = useMeasure();

    const refPostitSection = useRef(null);
    const postitIsInView = useInView(refPostitSection, { amount: 0.2 });
    const postitIsHalfInView = useInView(refPostitSection, { amount: 0.5, once: true });
    const [postitIsFinish, setPostitIsFinish] = useState(false);
    
    const { scrollYProgress } = useScroll({ target: refBoundsPostitSection });
    const y = [
        useParallax(scrollYProgress, -300),
        useParallax(scrollYProgress, -900),
        useParallax(scrollYProgress, -1800)
    ];

    useEffect(() => {
        if (postitIsHalfInView == true) {
            setTimeout(() => {
                setPostitIsFinish(true);
            }, 2000);
        }
    }, [postitIsHalfInView]);

    useEffect(() => {
        if (boundsPostitSection.width > 0) {
            const totalPostits = 119;
            const arrs = [];
            for (let x = 0; x < 3; x++) {
                arrs.push({
                    parallaxY: y,
                    postits: []
                });
                for (let i = 0; i < (totalPostits / 3); i++) {
                    let animationParams = getPostitAnimationParameters(boundsPostitSection);
                    arrs[x].postits.push({
                        text: `Post-it ${i + 1}`,
                        variant : {
                            hidden: {
                                x: `${getRandomIntInclusive(1, 100)}vw`,
                                scale: 5,
                                opacity: 0
                            },
                            show: {
                                x: animationParams.x,
                                y: animationParams.y,
                                scale: 1,
                                opacity: 1,
                                transition: {
                                    duration: 1.5
                                },
                                transitionEnd: () => {debugger;}
                            }
                        },
                        rotate: animationParams.rotate
                    });
                }
            }
            setPostits(arrs);
        }
    }, [boundsPostitSection]);

    const postitsContainer = {
        hidden: {  },
        show: {
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    return (
        <>
            <section id="editor">
                <Editor />
            </section>
            <section id="notification">
                <Notification title="Test Notification" subtitle="This is a test for a notification" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non nunc ultrices, condimentum neque eu, luctus tellus. Cras vel imperdiet tortor. Donec ultricies felis non eros imperdiet, sit amet laoreet quam lobortis. Proin nec ipsum auctor, ullamcorper nisi at, gravida tellus. Integer sagittis velit non magna lobortis ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed auctor bibendum massa id fermentum. Donec placerat justo vel nisi auctor, a dapibus magna volutpat. Suspendisse potenti." />
            </section>
            <section id="notification2">
                {/* <Notification title="Test Notification" subtitle="This is a test for a notification" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non nunc ultrices, condimentum neque eu, luctus tellus. Cras vel imperdiet tortor. Donec ultricies felis non eros imperdiet, sit amet laoreet quam lobortis. Proin nec ipsum auctor, ullamcorper nisi at, gravida tellus. Integer sagittis velit non magna lobortis ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed auctor bibendum massa id fermentum. Donec placerat justo vel nisi auctor, a dapibus magna volutpat. Suspendisse potenti." /> */}
            </section>
            <section id="postit" ref={mergeRefs([refPostitSection, refBoundsPostitSection])}>
                {
                    postits &&
                        <motion.div className="postits__container" variants={postitsContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: '10% 0px 0px 0px' }}>
                            {
                                postits.map((group, index) => 
                                    <motion.div style={{ y: (postitIsHalfInView ? y[index] : 0) }} key={index}>
                                        <div>
                                            {
                                                group.postits.map((postit, indexGroup) => 
                                                    <motion.div className="postits__postit-container" variants={postit.variant} style={{ rotate: postit.rotate, position: 'absolute', zIndex: '10' }} key={`${index}-${indexGroup}`}>
                                                        <Postit container={refBoundsPostitSection} className="postits__postit-container">{postit.text}</Postit>
                                                    </motion.div>
                                                )
                                            }
                                        </div>
                                    </motion.div>
                                )
                            }
                        </motion.div>
                }
            </section>
            {
                postitIsFinish
                &&
                    <motion.section id="jira" initial={{ opacity: 0, height: '0px' }} animate={{ opacity: 1, height: '100vh' }} transition={{ duration: 3 }}>
                        <Jira />
                    </motion.section>
            }
        </>
    );
}

export default Home;