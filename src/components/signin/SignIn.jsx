import React,{useState} from 'react'
import './SignIn.css'
import { Link, useHistory } from "react-router-dom"
import { useQuery } from "@apollo/client";
import { usersDATA } from '../../graphql/queries/graphql.queries';
function SignIn(props) {
  const InitialValues={username:"",password:""};
  const [errors,setErrors]=useState("");
  const [Data,setData]=useState(InitialValues);
  const State=useHistory();  
  const handlechange=(e)=>{
    const {name,value}=e.target;
    setData({...Data,[name]:value.trim()});
  };
    const {loading,error,data}=useQuery(usersDATA);
    if (loading) return 'loading...';
    if (error) return `Error! ${error.message}`;
  const getData=(e)=>{
    e.preventDefault();
    const index=data.users.findIndex((user) => user.username===Data.username && user.password === Data.password);
    if ( index!== -1){
      alert("login done!");
      props.changestate(false);
      localStorage.setItem('users',JSON.stringify(data.users[index]));
      setErrors("");
      State.push('/');
    } else {
      setErrors("Invalid username or password!");
    }
  }
  return (
    <div className='signin_container'>
        <div className='wrapper'>
            <div className='signup_box'>
                <header className='signup_header'>Hello, Friend!</header> 
                <div className='signup_content'>
                  <p> Add your details and Start the journey with us </p>
                </div>
                  <Link to="/signup" className='signup_button'>Sign Up</Link>
            </div>
            <div className='form_box'>
             <header className='form_header'>Sign in</header>
             <p className='errorMessage'>{errors}</p>
             <form className='form_elements' onSubmit={getData}>
                <label className='form_label' >Username:</label>
                <input className='form_inputs' type='text' placeholder='username' name='username' value={Data.username} onChange={handlechange}></input>
                <label className='form_label' 
                >Password:</label>
                <input className='form_inputs' type='password' placeholder='password' name='password'  value={Data.password} onChange={handlechange}></input>
                <a href='#' className='forgot'>forgot password?</a>
                <button className='form_button'>Sign in</button>
                </form>
                <p className='form_choice'> or </p>
                <div className='form_icons'> 
                    <a href='#'><i class="fa-brands fa-google"></i></a>
                    <a href='#'><i class="fa-brands fa-twitter"></i></a>
                    <a href='#'><i class="fa-brands fa-facebook"></i></a>
                 </div>
            </div>
        </div>
    </div>
  )
}
export default SignIn
