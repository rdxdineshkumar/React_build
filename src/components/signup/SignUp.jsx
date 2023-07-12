import React, { useEffect, useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import './SignUp.css'
import {  useMutation, useQuery } from '@apollo/client'
import { create_user } from '../../graphql/mutations/graphql.mutations'
import { usersDATA } from '../../graphql/queries/graphql.queries'

function SignUp() {
  const InitialValues = { username: "", email: "", createpassword: "", confirmpassword: "" };
  const [FormValues, setFormValues] = useState(InitialValues);
  const [FormErrors, setFormErrors] = useState({});
  const [isSubmit, setisSubmit] = useState(false);  
  const { data } = useQuery(usersDATA);
  const [Create] = useMutation(create_user,{refetchQueries:[{query:usersDATA}]});
  const navigate = useHistory();
  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...FormValues, [name]: value.trim() });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(FormValues));
    setisSubmit(true);
  }
  useEffect(() => {
    //console.log(FormErrors);
    if (Object.keys(FormErrors).length === 0 && isSubmit) {
      // console.log(FormValues);
      const { username, email, confirmpassword } = FormValues;
      Create({
        variables: {
          username,
          email,
          password: confirmpassword
        }
      })
      alert("you succesfully Registered!");
      navigate.push('/signin');
      setisSubmit(false);
    }
  },[FormErrors]);
  const validate = (values) => {
    const errors = {};
    const index = data.users.findIndex((user) => user.email === values.email);
    const name1 = /^[A-Za-z0-9]{5,15}$/;
    const email1 = /^(?=.*[a-z])(?=.*[@.]).{8,32}$/
    const password1 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[@.&%#!?.,]).{8,15}$/
    if (!values.username)
      errors.username = 'username is required!';
    else if (!name1.test(values.username))
      errors.username = 'enter valid username!';
    if (!values.email)
      errors.email = 'email is required!';
    else if (!email1.test(values.email))
      errors.email = 'enter valid mail address!';
    else if (index !== -1) {
      errors.exist = "User already exist! Use different one";
    }
    if (!values.createpassword)
      errors.createpassword = 'password is requried!';
    else if (!password1.test(values.createpassword))
      errors.createpassword = 'your password is weak!'
    if (!values.confirmpassword)
      errors.confirmpassword = 'password is requried!';
    else if (values.createpassword !== values.confirmpassword)
      errors.confirmpassword = 'password not match!'

    return errors;
  }
  return (
    <div className='form2_signup_container'>
      <div className='form2_signup_wrapper'>
        <div className='form2_signin_box'>
          <header className='form2_signin_header'>Welcome!</header>
          <div className='form2_signin_content'>
            <p> To keep connnected with us please login with your credentials </p>
          </div>
          <Link to='/signin' className='form2_signin_button'>Sign In</Link>
        </div>
        <div className='form2_signup_form_box'>
          <header className='form2_signup_form_header'>Sign Up</header>
          <form className='form2_signup_form_elements' onSubmit={handlesubmit}>
            <p className='exist_user'>{FormErrors.exist}</p>
            <div className='forms'>
              <label className='form2_signup_form_label'>Username:</label>
            </div>
            <input className='form2_signup_form_inputs' type='text' placeholder='username' name='username' value={FormValues.username} onChange={handlechange} ></input>
            <div className='error_container'><span className='errors'>{FormErrors.username}</span></div>
            <div className='forms'>
              <label className='form2_signup_form_label'>Email:</label>
            </div>
            <input className='form2_signup_form_inputs' type='email' placeholder='email' name='email' value={FormValues.email} onChange={handlechange}></input>
            <div className='error_container'><span className='errors'>{FormErrors.email}</span></div>
            <div className='forms'>
              <label className='form2_signup_form_label'>Create Password:</label>
            </div>
            <input className='form2_signup_form_inputs' type='password' placeholder='create password' name='createpassword' value={FormValues.createpassword} onChange={handlechange}></input>
            <div className='error_container'><span className='errors'>{FormErrors.createpassword}</span></div>
            <div className='forms'>
              <label className='form2_signup_form_label'>Confirm Password:</label>
            </div>
            <input className='form2_signup_form_inputs' type='password' placeholder='confirm password' name='confirmpassword' value={FormValues.confirmpassword} onChange={handlechange}></input>
            <div className='error_container'><span className='errors'>{FormErrors.confirmpassword}</span> </div>
            <button className='form2_signup_form_button'>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
