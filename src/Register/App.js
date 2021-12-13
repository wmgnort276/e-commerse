import React, { useState,useEffect } from 'react';
import FormSignup from './RegistForm';

const App = () => {

  const [isSubmitted, setIsSubmitted] = useState(false);


  function submitForm() {
    setIsSubmitted(true);
    
  }
  return (
    <>
      <div className='form-container'>

        {!isSubmitted ? (

          <FormSignup submitForm={submitForm} />

        ) : (

          <h1>Home page</h1>

        )}

      </div>

    </>
    
  );
};

export default App;