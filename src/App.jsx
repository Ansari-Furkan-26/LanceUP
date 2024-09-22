import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componet/navbar'; //  have a Navbar component
import Footer from './componet/footer'; //  have a footer component
import SignIn from './page/signup'; //  you have a SignIn component
import Home from './page/Home'; //  you have a Home Page
import Registeration from './page/registeration'; //  you have a registeration component
import Courselist from './page/Courselist'; //  you have a Courselist component
import Event from './page/Event'; //  you have a Courselist component
import BidderShortlist from './page/BidderShortlist'; //  you have a Courselist component
import JobList from './page/JobList'; //  you have a JobList component

const App = () => {
  return (
    <Router>
      <div className="bg-black min-h-screen">
        {/* Navbar visible on all routes */}
        <Navbar />

        {/* Define routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignIn />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Registeration" element={<Registeration />} />
          <Route path="/Courselist" element={<Courselist />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/BidderShortlist" element={<BidderShortlist />} />
          <Route path="/JobList" element={<JobList />} />
        </Routes>
        
        {/* Footer visible on all routes */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
