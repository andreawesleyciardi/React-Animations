import React, { useRef, useEffect } from 'react';
import { color, motion, useAnimationControls, useInView, useScroll, useTransform } from 'framer-motion';
import useMeasure from 'react-use-measure';
import { mergeRefs } from 'react-merge-refs';

import Monitor from '../../ui/Monitor';
import Notification from '../../ui/Notification';
import { AnimatedPostit } from '../../ui/Postit';
import { AnimatedTicket } from '../../ui/Ticket';

import './Home.scss';



const Home = () => {
    const [refBoundsPostitSection, boundsPostitSection] = useMeasure();
    const refPostitSection = useRef(null);
    const postitIsInView = useInView(refPostitSection, { margin: '10% 0px 0px 0px' });

    useEffect(() => {
        console.log("Element is in view: ", postitIsInView);
    }, [postitIsInView])

    const arr = [];
    for (let i = 0; i < 150; i++) {
        arr.push(i);
    }

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
                    (arr).map((item, index) =>
                        <AnimatedPostit container={boundsPostitSection} containerInView={postitIsInView} title={ `Test Postit ${item}` } key={index} />
                    )
                }
                {/* <AnimatedPostit container={boundsPostitSection} containerInView={postitIsInView} title={ `Test Postit ${1}` } key={1} /> */}
                {/* <AnimatedPostit container={bounds} title={ `Test Postit ${2}` } parallaxY={y2} key={2} /> */}
            </section>
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