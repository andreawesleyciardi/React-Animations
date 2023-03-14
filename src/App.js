import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import Loader from './components/ui/Loader';

import './App.scss';

const Home = React.lazy(() => import('./components/features/home/Home'));

function App() {
    return (
        <Routes>
            <Route path="/" element={
                <Navigate to="/home" />
            } />
            <Route path="home" exact element={
                <React.Suspense fallback={<Loader />}>
                    <Home />
                </React.Suspense>
            } />
        </Routes>
    );
}

export default App;