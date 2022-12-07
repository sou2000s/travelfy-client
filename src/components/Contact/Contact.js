import React from 'react';
import toast from 'react-hot-toast';

const Contact = () => {

    const handleContact = e =>{
        e.preventDefault()
         const message = {
            email: e.target.email.value,
            Usermessage:e.target.message.value,
         }
        fetch(' https://travelfy.vercel.app/enquire' , {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(message)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('we will contact you soon')
                e.target.reset()
            }
        }) 
        
    }
    return (
        <div className='broder border-2 rounded-xl border-green-400 w-72 md:w-96 p-3'>
              <h1 className='text-5xl'>Contact Me</h1>
              <p>Feel free to ask any question and anything you want to know</p>
            <form onSubmit={handleContact} >
            <input type="emial" placeholder="email" name='email' className="input mt-4 input-bordered input-success w-full max-w-xs" />
            <br />
            <textarea className="textarea textarea-success w-64 md:w-80 mt-4" name='message' placeholder="Message"></textarea>
             <br />
            <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    );
};

export default Contact;