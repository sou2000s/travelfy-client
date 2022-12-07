import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Card from "../Card/Card";
import KeyFocusCards from "../KeyFocusCards/KeyFocusCards";
import accomondationIcon from '../../pictures/icons/icons8-accommodation-64.png'
import TransportationIcon from '../../pictures/icons/icons8-public-transportation-48.png'
import expertIcon from '../../pictures/icons/icons8-expert-64.png'
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Home = () => {
    useTitle("Home") 
    const data = useLoaderData()
    console.log(data);

  return (
    <div>
      <div className="hero min-h-screen bg-base-300">
        <div className="hero-content flex-col lg:flex-row">
  
          <div>
            <p className="md:py-6 py-0 text-4xl  md:text-5xl">
              Hello From Souparna! I Travel The World To Find Myself. Lets Join Me And Find Your Self With  Me.  
            </p>
            <Link to='/tours' className="btn btn-primary">Book Your Tour With Me</Link>
          </div>
        </div>
      </div>

           <h1 className="text-center  text-3xl md:text-6xl mt-24">My Favourite Tours</h1>
          

            <div className="md:flex md:flex-row-reverse mt-10 flex-col-reverse md:justify-evenly ">
                {
                    data.result.map(tour => <Card key={tour._id} tour={tour}></Card>)
                }
            </div>
           
              <div className="text-center mt-12 ">
              <Link to="/tours " className="btn btn-accent ">Show All</Link>
              </div>
          

          <div className="mt-28">
          <h1 className="text-center text-5xl">My Key Focus</h1>
           <p className="text-center mt-5 text-2xl">My thoughtful team of knowledgeable experts are here to take care of every need, from the second you contact us to when you return</p>
          <div className="grid md:grid-cols-3 gap-8 md:ml-36 mt-7">
                 <KeyFocusCards heading="Accommodation" icon={accomondationIcon} text="We try to provide the best accomodation that is possible to provide."></KeyFocusCards>
                 <KeyFocusCards heading="Transportation" icon={TransportationIcon} text="We provide the best transport for our visitors so that they can enjoy their trip.."></KeyFocusCards>
                 <KeyFocusCards heading="Expert Trip Planning" icon={expertIcon} text="Our thoughful team plans every trip based on the customer budgets.."></KeyFocusCards>
          </div>
          </div>
      
       <div className="mt-20 mb-14 md:ml-0  flex justify-center">
               <Contact/>
       </div>
          
     <Footer/>

    </div>
  );
};

export default Home;
