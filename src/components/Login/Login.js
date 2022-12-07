import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Footer from '../Footer/Footer';
import {FcGoogle} from 'react-icons/fc'
const Login = () => {
    useTitle('login')  
    const {login , googleAuthentication} = useContext(AuthContext)


    const location = useLocation()
    const from = location.state?.from?.pathname || "/" 
 
    const navigate = useNavigate()
    
     const handleLogin = e => {
        e.preventDefault()
    const form = e.target;
    const password = form.password.value;
    const email = form.email.value;
   login(email , password)
   .then(res=>{
    const currentuser = {
      email: res.user.email
  }
  
   fetch('https://travelfy.vercel.app/jwt' , {
      method: "POST",
      headers : {
          'content-type': 'application/json'
      },
      body: JSON.stringify(currentuser)
   })
   .then(res => res.json())
   .then(data => {
    toast.success('welcome back')
    localStorage.setItem('token' , data.token)
   })
    navigate(from, { replace: true })
   })
   .catch(error => console.log(error.message))
      

   

    }



    const handleGoogleLogin = () => {
      googleAuthentication()
      .then(res => {
        const currentUser = {
          email: res.user.email
        }
        fetch('https://travelfy.vercel.app/jwt' , {
          method: "POST",
          headers : {
              'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
       })
       .then(res => res.json())
       .then(data => {
        toast.success('welcome back')
        localStorage.setItem('token' , data.token)
       })
       navigate(from, { replace: true })
      })
      .catch(error => console.log(error.message))
    }
    return (
        <div>
             <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              
             
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <FcGoogle className='md:ml-36 ml-24 mt-3 text-xl hover:cursor-pointer ' onClick={handleGoogleLogin}/>
                <label className="label">
                  <Link to='/register'  className="label-text-alt link link-hover">
                  Dont have acount? Register
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>

      </div>
         <Footer/>
        </div>
    );
};

export default Login;