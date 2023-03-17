import React, { useRef, useEffect, useState } from 'react';
import { color, motion, useAnimationControls, useInView, useScroll, useTransform } from 'framer-motion';
import useMeasure from 'react-use-measure';
import { mergeRefs } from 'react-merge-refs';

import { getRandomIntInclusive } from './../../../services/Utilities';

import Monitor from '../../ui/Monitor';
import Notification from '../../ui/Notification';
import { AnimatedPostit, Postit, getPostitAnimationParameters } from '../../ui/Postit';
import { AnimatedTicket } from '../../ui/Ticket';

import './Home.scss';



function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

const Home = () => {
    const [postits, setPostits] = useState(null);
    const [refBoundsPostitSection, boundsPostitSection] = useMeasure();

    const refPostitSection = useRef(null);
    const postitIsInView = useInView(refPostitSection, { amount: 0.4 });

    useEffect(() => {
        console.log("Element is in view: ", postitIsInView);
    }, [postitIsInView]);

    useEffect(() => {
        if (boundsPostitSection.width > 0) {
            const arr = [];
            for (let i = 0; i < 100; i++) {
                let animationParams = getPostitAnimationParameters(boundsPostitSection);
                arr.push({
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
                            }
                        }
                    },
                    rotate: animationParams.rotate
                });
            }
            setPostits(arr);
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
            
            <section id="notification">
                <Notification title="Test Notification" subtitle="This is a test for a notification" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non nunc ultrices, condimentum neque eu, luctus tellus. Cras vel imperdiet tortor. Donec ultricies felis non eros imperdiet, sit amet laoreet quam lobortis. Proin nec ipsum auctor, ullamcorper nisi at, gravida tellus. Integer sagittis velit non magna lobortis ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed auctor bibendum massa id fermentum. Donec placerat justo vel nisi auctor, a dapibus magna volutpat. Suspendisse potenti." />
            </section>
            <section id="notification2">
                <Notification title="Test Notification" subtitle="This is a test for a notification" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non nunc ultrices, condimentum neque eu, luctus tellus. Cras vel imperdiet tortor. Donec ultricies felis non eros imperdiet, sit amet laoreet quam lobortis. Proin nec ipsum auctor, ullamcorper nisi at, gravida tellus. Integer sagittis velit non magna lobortis ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed auctor bibendum massa id fermentum. Donec placerat justo vel nisi auctor, a dapibus magna volutpat. Suspendisse potenti." />
            </section>
            <section id="postit" ref={mergeRefs([refPostitSection, refBoundsPostitSection])}>
                {
                    postits &&
                        <motion.div className="postits__container" variants={postitsContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: '10% 0px 0px 0px' }}>
                            <motion.div>
                                {
                                    postits.map((postit, index) => 
                                        <motion.div className="postits__postit-container" variants={postit.variant} style={{ rotate: postit.rotate, position: 'absolute' }} key={index}>
                                            <Postit container={refBoundsPostitSection} containerIsInView={postitIsInView}>{postit.text}</Postit>
                                        </motion.div>
                                    )
                                }
                            </motion.div>
                        </motion.div>
                }
            </section>
            {/* <section id="postit" ref={mergeRefs([refPostitSection, refBoundsPostitSection])}>
                {
                    (arr).map((item, index) =>
                        <AnimatedPostit container={boundsPostitSection} containerInView={postitIsInView} key={index}>{ `Test Postit ${item}` }</AnimatedPostit>
                    )
                }
                <AnimatedPostit container={boundsPostitSection} containerInView={postitIsInView} title={ `Test Postit ${1}` } key={1} />
                <AnimatedPostit container={bounds} title={ `Test Postit ${2}` } parallaxY={y2} key={2} />
            </section> */}
            {/* <section id="postit" ref={refPostitSection}>
                {
                    (arr).map((item, index) =>
                        <AnimatedPostit container={bounds} title={ `Test Postit ${item}` } key={index} />
                    )
                }
            </section> */}
            <section id="jira">
                <AnimatedTicket title="Test Ticket" />
            </section>
        </>
    );
}

export default Home;