import React, { useState } from 'react';
import './App.css';
import FeedbackForm from './Components/FeedbackForm/FeedbackForm';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {

  const [displayForm, setDisplayForm] = useState(false);

  const handleFormSubmit = () => {
    // Perform your form submission logic here

    // Once the form is submitted successfully, set displayForm to false
    setDisplayForm(false);
  };

  const toggleFeedbackForm = () => {
    setDisplayForm(!displayForm);
  };
  

  return (
   <div>
    <Navbar onFeedbackButtonClick={toggleFeedbackForm}/>
    <FeedbackForm displayForm = {displayForm} onSubmit={handleFormSubmit}/>
    <Home />
   </div>
  );
}

export default App;
