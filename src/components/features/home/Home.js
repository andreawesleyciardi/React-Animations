import React, { useRef, useEffect } from 'react';

import Monitor from '../../ui/Monitor';
import Notification from '../../ui/Notification';
import { AnimatedTicket } from '../../ui/Ticket';

import './Home.scss';



const Home = () => {
    

    return (
        <>
            <section id="monitor">
                <Monitor><p>TEST TEXT</p></Monitor>
            </section>
            <section id="notification">
                <Notification title="Test Notification" subtitle="This is a test for a notification" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non nunc ultrices, condimentum neque eu, luctus tellus. Cras vel imperdiet tortor. Donec ultricies felis non eros imperdiet, sit amet laoreet quam lobortis. Proin nec ipsum auctor, ullamcorper nisi at, gravida tellus. Integer sagittis velit non magna lobortis ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed auctor bibendum massa id fermentum. Donec placerat justo vel nisi auctor, a dapibus magna volutpat. Suspendisse potenti." />
            </section>
            <section id="jira">
                <AnimatedTicket title="Test Ticket" />
            </section>
        </>
    );
}

export default Home;