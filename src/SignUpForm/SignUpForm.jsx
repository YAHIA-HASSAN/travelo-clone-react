import React from 'react';
import FormLogo from "../FormLogo/FormLogo"; 
import './SignUpForm.css'

const SignUpForm = () => {
  return (
    <div className='display-center'>
      <form name="signUp-form" action="./userProfile.html" method="get" id="signUp-form">
        <FormLogo />
        <div className='form-input'>
          <input type="text" name="fname" placeholder="First name" required />
          <input type="text" name="lname" placeholder="Last name" required />
          <input type="tel" name="phoneNo" placeholder="Phone: 01xxxxxxxxx" required />
          <input type="email" name="email" placeholder="E-mail" required />
          <input type="email" name="confirm-email" placeholder="Confirm E-mail" required />
          <input type="password" name="password" placeholder="Password" required />
          <input type="password" name="confirm-password" placeholder="Confirm Password" required />
        </div>
        <div className="buttons">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
