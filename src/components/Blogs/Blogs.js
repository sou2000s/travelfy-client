import React from 'react';
import useTitle from '../../hooks/useTitle';
import Footer from '../Footer/Footer';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div >
        <div className="grid md:grid-cols-3 mt-4 md:ml-10 gap-10 mb-7">
    
    
          <div className="md:w-96  border-2 p-2 border-black rounded-md">
            <h1 className="text-2xl">How does NodeJS handle multiple requests at the same time?</h1>
            <p className='mt-4'>
              Node js single thread only accept the request and pass it to his co-worker or assistant  and they go to another server or database and came back with response. This co-wroker made by libuv  it is created by c language its creat multiple thread. After the response help of event loop give back a call back function and we send this to according to their need. Thats how node js handle multiple request. 
            </p>
          </div>
          <div className="md:w-96  border-2 p-2 border-black rounded-md">
            <h1 className="text-2xl">What is the difference between javascript and NodeJS?</h1>
            <p className='mt-4'>
                <strong>1</strong>.Javascript is a programming language that is used for writing script for client site on the website But Node Js is a javascript tuntime environment <br />
                <strong>2</strong>.Javascript is used for client site but node js mostly used for server-side. <br />
                <strong>3</strong>.Javascript is capable for add HTML and play with the DOM but node js does not capable for html tags. <br />
                <strong>4</strong>.Javascript is used for frontend development but node js used is server-side development . I think the new update introduce multiple thread in node js so in near future node js also can do machie learning and robotics.
            </p>
          </div>
          <div className="md:w-96  border-2 p-2 border-black rounded-md">
            <h1 className="text-2xl">Difference between SQL and NoSQL?</h1>
            <p className='mt-4'>
              1.SQL database are not suited for hierarchial data storage. but NoSQL database are best suited for hierarchial data storage. <br />
              2.SQL vertically scalable but NoSQL horizontally scalable <br />
              3.SQL have fixed schema but  NoSQL have dynamic schema . <br />
              4.SQL databases are best suited for complex queries but NoSQL are not good at complex queries.
            </p>
          </div>
          <div className="md:w-96  border-2 p-2 border-black rounded-md">
            <h1 className="text-2xl">What is JWT, How its works?</h1>
            <p className='mt-4'>
            JSON Web Token is an open industry standard used to share information between two entities, usually a client (like your app’s frontend) and a server (your app’s backend) <br />

            Http is stateless its did not remember any type of information so when we  visit a static page then its okay client req the html page from server and server send the html page but when we have to show user specific data or we have to check is the user is the authority to see the data. Heres comes jwt token. When we login or register its generete a token and send it to the client site and store it into seesion storage or localstorage (less secure) or http only cookie(not best but best than other options) and then when the user send req to the server the token also came with that and chekc that is the user have the authority to see the data which he/she want  to see. This is how its works.
            </p>
          </div>
          
          </div>
         

         <Footer/>
        </div>
    );
};

export default Blogs;