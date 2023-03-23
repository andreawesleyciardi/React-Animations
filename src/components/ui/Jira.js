import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useMeasure from 'react-use-measure';

import './Jira.scss';



const Jira = ({tickets, children}) => {
    const todoRef = useRef(null);
    const inprogressRef = useRef(null);
    const qaRef = useRef(null);
    const doneRef = useRef(null);
    
    return (
        <motion.div className="jira">
            <div className="jira__header">
                <div className="jira__header-left">
                    <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path fill="currentColor" fillRule="evenodd" d="M4 5.01C4 4.451 4.443 4 5.01 4h1.98C7.549 4 8 4.443 8 5.01v1.98C8 7.549 7.557 8 6.99 8H5.01C4.451 8 4 7.557 4 6.99V5.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C8 13.549 7.557 14 6.99 14H5.01C4.451 14 4 13.557 4 12.99v-1.98zm6-6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C14 7.549 13.557 8 12.99 8h-1.98C10.451 8 10 7.557 10 6.99V5.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zm6-6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C20 7.549 19.557 8 18.99 8h-1.98C16.451 8 16 7.557 16 6.99V5.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zm-12 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C8 19.549 7.557 20 6.99 20H5.01C4.451 20 4 19.557 4 18.99v-1.98zm6 0c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zm6 0c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98z"></path></svg>
                    <div className="jira__header--logo">
                        
                    </div>
                    <div className="jira__header--nav">
                        <button type="button" className="jira__header--nav-item">Your work <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M8.292 10.293a1.009 1.009 0 000 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 000-1.419.987.987 0 00-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 00-1.406 0z" fill="currentColor" fillRule="evenodd"></path></svg></button>
                        <button type="button" className="jira__header--nav-item">Projects <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M8.292 10.293a1.009 1.009 0 000 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 000-1.419.987.987 0 00-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 00-1.406 0z" fill="currentColor" fillRule="evenodd"></path></svg></button>
                        <button type="button" className="jira__header--nav-item">Dashboards <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M8.292 10.293a1.009 1.009 0 000 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 000-1.419.987.987 0 00-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 00-1.406 0z" fill="currentColor" fillRule="evenodd"></path></svg></button>
                        <button type="button" className="jira__header--nav-item">Apps <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M8.292 10.293a1.009 1.009 0 000 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 000-1.419.987.987 0 00-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 00-1.406 0z" fill="currentColor" fillRule="evenodd"></path></svg></button>
                    </div>
                </div>
                <div className="jira__header-right">
                    <div className="jira__header-search">
                        <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M16.436 15.085l3.94 4.01a1 1 0 01-1.425 1.402l-3.938-4.006a7.5 7.5 0 111.423-1.406zM10.5 16a5.5 5.5 0 100-11 5.5 5.5 0 000 11z" fill="currentColor" fillRule="evenodd"></path></svg>
                        <input type="text" placeholder="Search" />
                    </div>
                    <div className="jira__icons"><svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M6.485 17.669a2 2 0 002.829 0l-2.829-2.83a2 2 0 000 2.83zm4.897-12.191l-.725.725c-.782.782-2.21 1.813-3.206 2.311l-3.017 1.509c-.495.248-.584.774-.187 1.171l8.556 8.556c.398.396.922.313 1.171-.188l1.51-3.016c.494-.988 1.526-2.42 2.311-3.206l.725-.726a5.048 5.048 0 00.64-6.356 1.01 1.01 0 10-1.354-1.494c-.023.025-.046.049-.066.075a5.043 5.043 0 00-2.788-.84 5.036 5.036 0 00-3.57 1.478z" fill="currentColor" fillRule="evenodd"></path></svg></div>
                    <div className="jira__icons"><svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fillRule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"></circle><circle fill="inherit" cx="12" cy="18" r="1"></circle><path d="M15.89 9.05a3.975 3.975 0 00-2.957-2.942C10.321 5.514 8.017 7.446 8 9.95l.005.147a.992.992 0 00.982.904c.552 0 1-.447 1.002-.998a2.004 2.004 0 014.007-.002c0 1.102-.898 2-2.003 2H12a1 1 0 00-1 .987v2.014a1.001 1.001 0 002.004 0v-.782c0-.217.145-.399.35-.472A3.99 3.99 0 0015.89 9.05" fill="inherit"></path></g></svg></div>
                    <div className="jira__icons"><svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M11.701 16.7a5.002 5.002 0 110-10.003 5.002 5.002 0 010 10.004m8.368-3.117a1.995 1.995 0 01-1.346-1.885c0-.876.563-1.613 1.345-1.885a.48.48 0 00.315-.574 8.947 8.947 0 00-.836-1.993.477.477 0 00-.598-.195 2.04 2.04 0 01-1.29.08 1.988 1.988 0 01-1.404-1.395 2.04 2.04 0 01.076-1.297.478.478 0 00-.196-.597 8.98 8.98 0 00-1.975-.826.479.479 0 00-.574.314 1.995 1.995 0 01-1.885 1.346 1.994 1.994 0 01-1.884-1.345.482.482 0 00-.575-.315c-.708.2-1.379.485-2.004.842a.47.47 0 00-.198.582A2.002 2.002 0 014.445 7.06a.478.478 0 00-.595.196 8.946 8.946 0 00-.833 1.994.48.48 0 00.308.572 1.995 1.995 0 011.323 1.877c0 .867-.552 1.599-1.324 1.877a.479.479 0 00-.308.57 8.99 8.99 0 00.723 1.79.477.477 0 00.624.194c.595-.273 1.343-.264 2.104.238.117.077.225.185.302.3.527.8.512 1.58.198 2.188a.473.473 0 00.168.628 8.946 8.946 0 002.11.897.474.474 0 00.57-.313 1.995 1.995 0 011.886-1.353c.878 0 1.618.567 1.887 1.353a.475.475 0 00.57.313 8.964 8.964 0 002.084-.883.473.473 0 00.167-.631c-.318-.608-.337-1.393.191-2.195.077-.116.185-.225.302-.302.772-.511 1.527-.513 2.125-.23a.477.477 0 00.628-.19 8.925 8.925 0 00.728-1.793.478.478 0 00-.314-.573" fill="currentColor" fillRule="evenodd"></path></svg></div>
                    <div className="jira__icons"><div className="jira__user">AC</div></div>
                </div>
            </div>
            
            <div className="jira__navbar">
                <motion.div className="jira__navbar--top">
                    <svg className="jira__navbar--top-logo" width="128px" height="128px" viewBox="0 0 128 128" version="1.1" style={{ background: '#FF5630' }}><defs><rect id="path-1" x="0" y="0" width="128" height="128"/></defs><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="project_avatar_website"><g id="website"><g><mask id="mask-2" fill="white"><use /></mask><use id="Rectangle" fill="#FF5630" /><path d="M96.814,25.996 L31.104,25.996 C24.242,25.996 18.627,31.61 18.627,38.473 L18.627,50.502 L109.291,50.502 L109.291,38.472 C109.29,31.61 103.676,25.996 96.814,25.996 Z" id="Shape" fill="#FFFFFF" fillRule="nonzero"/><path d="M18.627,50.224 L18.627,87.681 L18.627,88.496 C18.627,95.358 24.241,100.973 31.104,100.973 L96.814,100.973 C103.676,100.973 109.291,95.359 109.291,88.496 L109.291,87.681 L109.291,50.224 L18.627,50.224 Z" id="Shape" fill="#253858" fillRule="nonzero"/><circle id="Oval" fill="#FF4E4A" fillRule="nonzero" cx="33.598" cy="38.67" r="4.575"/><circle id="Oval" fill="#FFB115" fillRule="nonzero" cx="48.01" cy="38.67" r="4.575"/><circle id="Oval" fill="#00C7E6" fillRule="nonzero" cx="62.421" cy="38.67" r="4.575"/><path d="M56.339,76.324 L60.503,76.55 L57.316,82.928 C56.799,83.962 57.196,85.219 58.213,85.769 L58.213,85.769 C59.278,86.345 60.608,85.926 61.149,84.843 L64.374,78.388 L66.856,81.278 C67.777,82.351 69.537,81.724 69.572,80.31 L69.94,65.517 C69.975,64.122 68.366,63.321 67.274,64.189 L55.462,73.572 C54.349,74.456 54.92,76.247 56.339,76.324 Z" id="Shape" fill="#FFFFFF" fillRule="nonzero"/></g></g></g></g></svg>
                    <div className="jira__navbar--top-project">
                        <h3>PORTFOLIO</h3>
                        <p>Andrea Ciardi</p>
                    </div>
                </motion.div>
                <motion.div className="jira__navbar--section" id="jira__navbar--planning">
                    <h4>PLANNING</h4>
                    <div className="jira__navbar--highlight">
                        <div className="jira__navbar--item active">
                            <div><svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor"><path d="M3.507 15H16.5c-.007 0-.007-10-.007-10H3.5c.007 0 .007 10 .007 10zM1.5 4.994C1.5 3.893 2.263 3 3.192 3h13.616c.934 0 1.692.895 1.692 1.994v10.012c0 1.101-.763 1.994-1.692 1.994H3.192c-.934 0-1.692-.895-1.692-1.994V4.994zM6.5 5v10h2V5h-2zm5 0v10h2V5h-2z"></path><path d="M20.5 5h.006c1.101 0 1.994.895 1.994 1.994v12.012A1.995 1.995 0 0120.506 21H8.494A1.995 1.995 0 016.5 19.006V19h13c.555 0 1-.448 1-1V5z"></path></g></svg></div>
                            <p>Board</p>
                        </div>
                        <div className="jira__navbar--item">
                            <div><svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M6 2h10a3 3 0 010 6H6a3 3 0 110-6zm0 2a1 1 0 100 2h10a1 1 0 000-2H6zm4 5h8a3 3 0 010 6h-8a3 3 0 010-6zm0 2a1 1 0 000 2h8a1 1 0 000-2h-8zm-4 5h6a3 3 0 010 6H6a3 3 0 010-6zm0 2a1 1 0 000 2h6a1 1 0 000-2H6z" fill="currentColor" fillRule="evenodd"></path></svg></div>
                            <p>Roadmap</p>
                        </div>
                        <div className="jira__navbar--item">
                            <div><svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor"><path d="M5 19.002C5 19 17 19 17 19v-2.002C17 17 5 17 5 17v2.002zm-2-2.004C3 15.894 3.895 15 4.994 15h12.012c1.101 0 1.994.898 1.994 1.998v2.004A1.997 1.997 0 0117.006 21H4.994A1.998 1.998 0 013 19.002v-2.004z"></path><path d="M5 15h12v-2H5v2zm-2-4h16v6H3v-6z"></path><path d="M7 11.002C7 11 19 11 19 11V8.998C19 9 7 9 7 9v2.002zM5 8.998C5 7.894 5.895 7 6.994 7h12.012C20.107 7 21 7.898 21 8.998v2.004A1.997 1.997 0 0119.006 13H6.994A1.998 1.998 0 015 11.002V8.998z"></path><path d="M5 5v2h12V5H5zm-2-.002C3 3.894 3.895 3 4.994 3h12.012C18.107 3 19 3.898 19 4.998V9H3V4.998z"></path></g></svg></div>
                            <p>Backlog</p>
                        </div>
                        <div className="jira__navbar--item active selected">
                            <div><svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor"><path d="M4 18h16.008C20 18 20 6 20 6H3.992C4 6 4 18 4 18zM2 5.994C2 4.893 2.898 4 3.99 4h16.02C21.108 4 22 4.895 22 5.994v12.012A1.997 1.997 0 0120.01 20H3.99A1.994 1.994 0 012 18.006V5.994z"></path><path d="M8 6v12h2V6zm6 0v12h2V6z"></path></g></svg></div>
                            <p>Active sprints</p>
                        </div>
                        <div className="jira__navbar--item">
                            <div><svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor"><path d="M21 17H4.995C4.448 17 4 16.548 4 15.991V6a1 1 0 10-2 0v9.991A3.004 3.004 0 004.995 19H21a1 1 0 000-2zm-3-8v3a1 1 0 002 0V8a1 1 0 00-1-1h-4a1 1 0 000 2h3z"></path><path d="M13.293 13.707a1 1 0 001.414 0l4-4a1 1 0 10-1.414-1.414L14 11.586l-2.293-2.293a1 1 0 00-1.414 0l-4 4a1 1 0 001.414 1.414L11 11.414l2.293 2.293z"></path></g></svg></div>
                            <p>Reports</p>
                        </div>
                    </div>
                    <div>
                        <div className="jira__navbar--item">
                            <div><svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fillRule="evenodd"><path d="M5 12.991c0 .007 14.005.009 14.005.009C18.999 13 19 5.009 19 5.009 19 5.002 4.995 5 4.995 5 5.001 5 5 12.991 5 12.991zM3 5.01C3 3.899 3.893 3 4.995 3h14.01C20.107 3 21 3.902 21 5.009v7.982c0 1.11-.893 2.009-1.995 2.009H4.995A2.004 2.004 0 013 12.991V5.01zM19 19c-.005 1.105-.9 2-2.006 2H7.006A2.009 2.009 0 015 19h14zm1-3a2.002 2.002 0 01-1.994 2H5.994A2.003 2.003 0 014 16h16z" fillRule="nonzero"></path><path d="M10.674 11.331c.36.36.941.36 1.3 0l2.758-2.763a.92.92 0 00-1.301-1.298l-2.108 2.11-.755-.754a.92.92 0 00-1.3 1.3l1.406 1.405z"></path></g></svg></div>
                            <p>Issues</p>
                        </div>
                        <div className="jira__navbar--item">
                            <div><svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fillRule="evenodd"><path d="M5 17.991c0 .007 14.005.009 14.005.009-.006 0-.005-7.991-.005-7.991C19 10.002 4.995 10 4.995 10 5.001 10 5 17.991 5 17.991zM3 10.01C3 8.899 3.893 8 4.995 8h14.01C20.107 8 21 8.902 21 10.009v7.982c0 1.11-.893 2.009-1.995 2.009H4.995A2.004 2.004 0 013 17.991V10.01z"></path><path d="M7 8.335c0-.002 2.002-.002 2.002-.002C9 8.333 9 6.665 9 6.665c0 .002-2.002.002-2.002.002C7 6.667 7 8.335 7 8.335zm-2-1.67C5 5.745 5.898 5 6.998 5h2.004C10.106 5 11 5.749 11 6.665v1.67C11 9.255 10.102 10 9.002 10H6.998C5.894 10 5 9.251 5 8.335v-1.67zm10 1.67c0-.002 2.002-.002 2.002-.002C17 8.333 17 6.665 17 6.665c0 .002-2.002.002-2.002.002.002 0 .002 1.668.002 1.668zm-2-1.67C13 5.745 13.898 5 14.998 5h2.004C18.106 5 19 5.749 19 6.665v1.67c0 .92-.898 1.665-1.998 1.665h-2.004C13.894 10 13 9.251 13 8.335v-1.67z"></path></g></svg></div>
                            <p>Components</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="jira__navbar--section" id="jira__navbar--development">
                    <h4>DEVELOPMENT</h4>
                    <div>
                        <div className="jira__navbar--item">
                            <div><svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M14.155 4.055a1 1 0 00-1.271.62l-4.83 14.046a1 1 0 001.891.65l4.83-14.045a1 1 0 00-.62-1.271m-6.138 8.21l-2.58-2.501L8.236 7.05a.999.999 0 10-1.392-1.436l-3.54 3.432a1 1 0 000 1.436l3.32 3.219a1 1 0 101.393-1.436m12.219 1.568l-3.32-3.22a.999.999 0 10-1.393 1.437l2.58 2.5-2.799 2.715a.999.999 0 101.392 1.436l3.54-3.432a1 1 0 000-1.436" fill="currentColor" fillRule="evenodd"></path></svg></div>
                            <p>Code</p>
                        </div>
                        <div className="jira__navbar--item">
                            <div><svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fillRule="evenodd"><path d="M6 12h8v-2H6v2zM4 8.99C4 8.445 4.456 8 5.002 8h9.996C15.55 8 16 8.451 16 8.99V14H4V8.99z" fillRule="nonzero"></path><path d="M6 7.005C6 5.898 6.898 5 7.998 5h2.004C11.106 5 12 5.894 12 7.005V10H6V7.005zm4 0V7H7.999c.005 0 .002.003.002.005V8h2v-.995z"></path><path d="M4.5 17h13.994l1.002-3H4.14l.36 3zm-2.495-4.012A.862.862 0 012.883 12h18.393c.55 0 .857.417.681.944l-1.707 5.112c-.174.521-.758.944-1.315.944H3.725a1.149 1.149 0 01-1.118-.988l-.602-5.024z" fillRule="nonzero"></path></g></svg></div>
                            <p>Releases</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="jira__navbar--section" id="jira__navbar--operations">
                    <h4>OPERATIONS</h4>
                    <div>
                        <div className="jira__navbar--item">
                            <div><svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fillRule="evenodd"><path d="M11.208 9.32L9.29 11.253a1 1 0 000 1.409.982.982 0 001.397 0l1.29-1.301 1.336 1.347a.982.982 0 001.397.001 1.002 1.002 0 00.001-1.408l-1.965-1.98a1.08 1.08 0 00-1.538-.001z"></path><path d="M11 10.007l.001 9.986c0 .557.448 1.008 1 1.007.553 0 1-.45 1-1.007L13 10.006C13 9.451 12.552 9 12 9s-1.001.451-1 1.007z"></path><path d="M7.938 5.481a4.8 4.8 0 00-.777-.063C4.356 5.419 2 7.62 2 10.499 2 13.408 4.385 16 7.1 16h2.881v-1.993H7.1c-1.657 0-3.115-1.663-3.115-3.508 0-1.778 1.469-3.087 3.104-3.087h.012c.389 0 .686.051.97.15l.17.063c.605.248.875-.246.875-.246l.15-.267c.73-1.347 2.201-2.096 3.716-2.119a4.14 4.14 0 014.069 3.644l.046.34s.071.525.665.525c.013 0 .012.005.023.005h.254c1.136 0 1.976.959 1.976 2.158 0 1.207-.987 2.342-2.07 2.342h-3.964V16h3.964C20.105 16 22 13.955 22 11.665c0-1.999-1.312-3.663-3.138-4.074-.707-2.707-3.053-4.552-5.886-4.591-1.975.021-3.901.901-5.038 2.481z"></path></g></svg></div>
                            <p>Deployments</p>
                        </div>
                    </div>
                    <div>
                        <div className="jira__navbar--item">
                            <div><svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fillRule="evenodd"><rect x="8" y="6" width="8" height="2" rx="1"></rect><rect x="8" y="9" width="8" height="2" rx="1"></rect><rect x="8" y="12" width="4" height="2" rx="1"></rect><path d="M7 4v16h10V4H7zm-2-.01C5 2.892 5.897 2 7.006 2h9.988C18.102 2 19 2.898 19 3.99v16.02c0 1.099-.897 1.99-2.006 1.99H7.006A2.003 2.003 0 015 20.01V3.99z" fillRule="nonzero"></path></g></svg></div>
                            <p>Project pages</p>
                        </div>
                    </div>
                    <div>
                        <div className="jira__navbar--item">
                            <div><svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fillRule="evenodd"><path d="M5.376 6.455l5.248-3.104c.792-.469 1.963-.467 2.752 0l5.248 3.104C19.416 6.923 20 7.962 20 8.895v6.21c0 .936-.587 1.973-1.376 2.44l-5.248 3.104c-.792.469-1.963.467-2.752 0l-5.248-3.104C4.584 17.077 4 16.038 4 15.105v-6.21c0-.936.587-1.973 1.376-2.44zm6.99-1.314c-.165-.098-.566-.098-.733 0L6.385 8.245c-.166.098-.367.454-.367.65v6.21c0 .195.2.551.367.65l5.248 3.104c.166.098.567.098.734 0l5.248-3.104c.166-.098.367-.454.367-.65v-6.21c0-.195-.2-.551-.367-.65l-5.248-3.104z"></path><path d="M12 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"></path></g></svg></div>
                            <p>Add-ons</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="jira__main">
                <div className="jira__main--header">
                    <motion.div className="jira__main--header-breadcrumb">
                        <p>Projects<span>/</span>Portfolio</p>
                    </motion.div>
                    <motion.div className="jira__main--header-splitted">
                        <div className="jira__main--header-splitted--left">
                            <motion.p>Portfolio Andrea Ciardi</motion.p>
                        </div>
                        <div className="jira__main--header-splitted--right">
                            <div className="jira__icons"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3789 4.62256C9.99914 4.62173 9.65331 4.84087 9.49192 5.18458L6.11523 12.3762C5.97308 12.679 5.9956 13.0334 6.17494 13.3157C6.35428 13.598 6.66553 13.7691 7 13.7691H8.79182L6.40251 18.1304C6.17135 18.5523 6.28163 19.0798 6.66249 19.3738C7.04335 19.6677 7.58152 19.6408 7.93117 19.3103L16.8269 10.902C17.1178 10.6269 17.2117 10.2023 17.0637 9.83032C16.9157 9.45832 16.5558 9.21418 16.1555 9.21418H14.547L17.0353 6.24031C17.2787 5.94947 17.3319 5.5441 17.1717 5.20034C17.0116 4.85658 16.6671 4.63646 16.2879 4.63562L10.3789 4.62256Z" stroke="currentColor" strokeWidth="1.95489" strokeLinejoin="round"></path></svg></div>
                            <div className="jira__icons jira__main--header-days"><svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1"><defs><path d="M26,17 L26,23.1728 L30.37,27.5428 C31.148,28.3208 31.148,29.5928 30.37,30.3708 C29.592,31.1488 28.32,31.1488 27.542,30.3708 L22.602,25.4328 C22.232,25.0688 22,24.5668 22,24.0088 L22,17 L22,11 C22,10.4477153 22.4477153,10 23,10 L25,10 C25.5522847,10 26,10.4477153 26,11 L26,17 Z M24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 Z M24,40 C32.836556,40 40,32.836556 40,24 C40,15.163444 32.836556,8 24,8 C15.163444,8 8,15.163444 8,24 C8,32.836556 15.163444,40 24,40 Z" id="path-1"/></defs><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Artboard" transform="translate(-307.000000, -353.000000)"><g id="global/time" transform="translate(303.000000, 349.000000)"><mask id="mask-2" fill="white"></mask><path stroke="#42526E" strokeWidth="2" d="M25,23.5870136 L25,11 L23,11 L23,24.0088 C23,24.2774737 23.1086918,24.5284813 23.3089636,24.7255501 L28.2491068,29.6636932 C28.6365825,30.0511689 29.2754175,30.0511689 29.6628932,29.6636932 C30.0503689,29.2762175 30.0503689,28.6373825 29.6628932,28.2499068 L25,23.5870136 Z M24,43 C34.4934102,43 43,34.4934102 43,24 C43,13.5065898 34.4934102,5 24,5 C13.5065898,5 5,13.5065898 5,24 C5,34.4934102 13.5065898,43 24,43 Z M24,41 C14.6111593,41 7,33.3888407 7,24 C7,14.6111593 14.6111593,7 24,7 C33.3888407,7 41,14.6111593 41,24 C41,33.3888407 33.3888407,41 24,41 Z"/><g id="Neutral-/-N500-AAA" mask="url(#mask-2)" fill="#42526E" fillRule="evenodd"><polygon id="N500" points="0 48 48 48 48 0 0 0"/></g></g></g></g></svg><p>4 days remaining</p></div>
                            <div className="jira__icons jira__main--header-complete-sprint"><p>Complete sprint</p></div>
                            <div className="jira__icons"><svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fillRule="evenodd"><path d="M6 15a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 110-2 1 1 0 010 2zm12-4a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 110-2 1 1 0 010 2zm0 14a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 110-2 1 1 0 010 2z" fillRule="nonzero"></path><path d="M7 13.562l8.66 5 1-1.732-8.66-5z"></path><path d="M7 10.83l1 1.732 8.66-5-1-1.732z"></path></g></svg></div>
                        </div>
                    </motion.div>
                    <motion.div className="jira__main--header-bottom">
                        <div className="jira__main--header-bottom-left">
                            <div className="jira__main--search-board">
                                <p>Search this board</p>
                                <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M16.436 15.085l3.94 4.01a1 1 0 01-1.425 1.402l-3.938-4.006a7.5 7.5 0 111.423-1.406zM10.5 16a5.5 5.5 0 100-11 5.5 5.5 0 000 11z" fill="currentColor" fillRule="evenodd"></path></svg>
                            </div>
                            <div className="jira__user">AC</div>
                            <div className="jira__main-quick-filters">
                                <p>Quick filters</p>
                                <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M8.292 10.293a1.009 1.009 0 000 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 000-1.419.987.987 0 00-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 00-1.406 0z" fill="currentColor" fillRule="evenodd"></path></svg>
                            </div>
                        </div>
                        <div className="jira__main--header-bottom-right">
                            <div className="jira__main-insights">
                                <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor"><path d="M21 17H4.995C4.448 17 4 16.548 4 15.991V6a1 1 0 10-2 0v9.991A3.004 3.004 0 004.995 19H21a1 1 0 000-2zm-3-8v3a1 1 0 002 0V8a1 1 0 00-1-1h-4a1 1 0 000 2h3z"></path><path d="M13.293 13.707a1 1 0 001.414 0l4-4a1 1 0 10-1.414-1.414L14 11.586l-2.293-2.293a1 1 0 00-1.414 0l-4 4a1 1 0 001.414 1.414L11 11.414l2.293 2.293z"></path></g></svg>
                                <p>Insights</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="jira__main--grid">
                    <motion.div className="jira__main--grid-header jira__main--grid-header--todo">
                        <p>TO DO</p>
                    </motion.div>
                    <motion.div className="jira__main--grid-header jira__main--grid-header--inprogress">
                        <p>IN PROGRESS</p>
                    </motion.div>
                    <motion.div className="jira__main--grid-header jira__main--grid-header--qa">
                        <p>UNDER QA</p>
                    </motion.div>
                    <motion.div className="jira__main--grid-header jira__main--grid-header--done">
                        <p>DONE</p>
                    </motion.div>

                    <motion.div className="jira__main--grid-column jira__main--grid-column--todo" ref={todoRef}>
                        <Ticket title="Test Title Ticket" points="5" code="001" />
                    </motion.div>
                    <motion.div className="jira__main--grid-column jira__main--grid-column--inprogress" ref={inprogressRef}>
                        
                    </motion.div>
                    <motion.div className="jira__main--grid-column jira__main--grid-column--qa" ref={qaRef}>
                        
                    </motion.div>
                    <motion.div className="jira__main--grid-column jira__main--grid-column--done" ref={doneRef}>
                        
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

const Ticket = ({title, type, code, points, assignee}) => {
    return (
        <motion.div className="jira__ticket">
            <p className="jira__ticket--title">{title ?? '-'}</p>
            <div className="jira__ticket--left">
                {
                    type == 'task' ?
                        <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="subtask"><g id="Subtask" transform="translate(1.000000, 1.000000)"><rect id="Rectangle-36" fill="#4BAEE8" x="0" y="0" width="14" height="14" rx="2"/><rect id="Rectangle-80" stroke="#FFFFFF" x="3" y="3" width="5" height="5" rx="0.800000012"/><rect id="Rectangle-80-Copy" stroke="#FFFFFF" fill="#FFFFFF" x="6" y="6" width="5" height="5" rx="0.800000012"/></g></g></g></svg>
                    :
                        <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="story"><g id="Story" transform="translate(1.000000, 1.000000)"><rect id="Rectangle-36" fill="#63BA3C" x="0" y="0" width="14" height="14" rx="2"/><path d="M9,3 L5,3 C4.448,3 4,3.448 4,4 L4,10.5 C4,10.776 4.224,11 4.5,11 C4.675,11 4.821,10.905 4.91,10.769 L4.914,10.77 L6.84,8.54 C6.92,8.434 7.08,8.434 7.16,8.54 L9.086,10.77 L9.09,10.769 C9.179,10.905 9.325,11 9.5,11 C9.776,11 10,10.776 10,10.5 L10,4 C10,3.448 9.552,3 9,3" id="Page-1" fill="#FFFFFF"/></g></g></g></svg>
                }
                <svg version="1.1" id="Warstwa_1" x="0px" y="0px" viewBox="0 0 16 16"><g id="icon_x2F_16px_x2F_medium-priority-"><g><path className="st0" d="M3,4h10c0.6,0,1,0.4,1,1s-0.4,1-1,1H3C2.4,6,2,5.6,2,5S2.4,4,3,4z M3,10h10c0.6,0,1,0.4,1,1s-0.4,1-1,1H3    c-0.6,0-1-0.4-1-1S2.4,10,3,10z" fill="#FFAB00"/></g></g></svg>
                <div className="jira__ticket--points"><p>{points ?? '-'}</p></div>
            </div>
            <div className="jira__ticket--right">
                <div className="jira__ticket--code">{`POR-${code ?? '000'}`}</div>
                <div className="jira__user">{assignee ?? 'AC'}</div>
            </div>
        </motion.div>
    );
}

export { Jira };