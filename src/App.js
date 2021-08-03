import React, { useState, useCallback } from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Success from './components/Success';
import Message from './components/Message';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [vals, setOnSuccess] = useState({
    name: '',
    clicks: 0,
    score: 0,
  });
  
  const submitForm = useCallback((vals) => {
    setOnSuccess({
      ...vals,
      name: vals.name,
      clicks: vals.clicks,
      score: vals.score
    });
    // console.log(vals);
    setIsSubmitted(true);
  }, [setIsSubmitted]);

  return (
    <div className="App">
      <Header />

      <div className="container">
        {!isSubmitted ? (
          <Form submitForm={submitForm} />
        ) : (
          <Success restartApp={submitForm} vals={vals} />
        )}
      </div>
      
      <Footer />
      <Message />
    </div>
  );
}

export default App;
