import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import StoryFirst from './components/storyFirst';
import StoryThird from './components/storyThird';
import ImpactFirst from './components/impactFirst';
import ImpactSecond from './components/impactSecond';
import ImpactThird from './components/impactThird';
import ImpactForth from './components/impactForth';
import ImpactFifth from './components/impactFifth';
import MovementFirst from './components/movementFirst';
import MovementSecond from './components/movementSecond';
import MovementThird from './components/movementThird';
import MovementForth from './components/movementForth';
import JoinHeader from './components/joinHeader';
import JoinSecond from './components/joinSecond';
import JoinThird from './components/joinThird';
import JoinForth from './components/joinForth';
import JoinFifth from './components/joinFifth';
import JoinSixth from './components/joinSixth';
import JoinSeven from './components/joinSeven';
import JoinEightlast from './components/joinEightLast';
import DonationPage from './components/DonatePage';
import ImageCarousel from './components/Image';
import Lives from './components/Lives';
import Impact from './components/Impact';
import Stories from './components/Stories';
import WhatWeDo from './components/WhatWeDo';
import Footer from './components/Footer';
import GiveFooter from './components/giveFooter';
import GiveFooterLast from './components/giveFooterLast';
function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const location = useLocation();
  const hideHeaderPaths = ['/donation', '/join-header'];
  const shouldHideHeader = hideHeaderPaths.includes(location.pathname);
  return (
    <div className="App">
      {!shouldHideHeader && <Header />}
      <Routes>
        {/* Main Home Route */}
        <Route
          path="/"
          element={
            <>
              <ImageCarousel />
              <Lives />
              <Impact />
              <Stories />
              <WhatWeDo />
              <Footer />
            </>
          }
        />
        {/* Donation Page */}
        <Route
          path="/donation"
          element={
            <>
              <DonationPage />
              <GiveFooter />
              <GiveFooterLast />
            </>
          }
        />
        {/* Join Header Page */}
        <Route
          path="/join-header"
          element={
            <>
              <JoinHeader />
              <JoinSecond />
              <JoinThird />
              <JoinForth />
              <JoinFifth />
              <JoinSixth />
              <JoinSeven />
              <JoinEightlast />
            </>
          }
        />
        {/* Join Movement Page */}
        <Route path="/movementFirst" 
        element={
          <>
          <MovementFirst /> 
          <MovementSecond/>
          <MovementThird/>
          <MovementForth/>
          </>
        }
        />
        
      
      {}
      <Route path="/impactFirst"
      element={
        <>
        <ImpactFirst/>
        <ImpactSecond/>
        <ImpactThird/>
        <ImpactForth/>
        <ImpactFifth/>
        <Footer/>
        </>
      }
      />
      {}
      <Route path="/storyFirst"
      element={
        <>  
        <StoryFirst/>
        <StoryThird/>
        <Footer/>
        </>
      }
      />
      </Routes>
      
    </div>
  );
}

export default App;
