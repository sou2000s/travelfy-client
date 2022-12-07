import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";
import {FcGoogle} from 'react-icons/fc'
import toast from "react-hot-toast";
import Footer from "../Footer/Footer";
const Register = () => {
  useTitle('Register')
  const {createUser,setUserNameAndProfile , setUserProfile , googleAuthentication} = useContext(AuthContext)
  const navigate = useNavigate()
 const handleRegister = e =>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    console.log(name , password , photoURL , email);

    createUser(email , password)
    .then((res) => {
      const currentuser = {
        email: res.user.email
      }
      handleUserProfile(name , photoURL)
      form.reset()
      toast.success("welcome")
      navigate('/')

      fetch('https://travelfy.vercel.app/jwt' , {
      method: "POST",
      headers : {
          'content-type': 'application/json'
      },
      body: JSON.stringify(currentuser)
   })
   .then(res => res.json())
   .then(data => {
    
      localStorage.setItem('token' , data.token)
   })

    })
    .catch(err => console.log(err.message))
 }

 const handleUserProfile = (name , photoURL) =>{
  const profile = {
    displayName : name,
    photoURL: photoURL
    
  }
  setUserNameAndProfile(profile)
  .then(()=>{
    setUserProfile(profile)
  })
  .catch(err => console.log(err.message))
 }


 const handleGoogleAuthentication = () =>{
  googleAuthentication()
  .then((res)=> {
    navigate('/')
     toast.success(`welcome ${res.user.displayName}`)
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
    
      localStorage.setItem('token' , data.token)
   })
    
  })
  .catch(error => console.log(error.message))
 }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="PhotoURL"
                  className="input input-bordered"
                />
              </div>
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
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-success" type="submit">Regisret</button>
              </div>
              <Link to='/login'>Allready have account? Login</Link>
              <FcGoogle onClick={handleGoogleAuthentication} className="text-3xl hover:cursor-pointer ml-24 md:ml-[130px] mt-4"></FcGoogle>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Register;
