import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Footer from '../Footer/Footer';
import ReviewCard from '../ReviewCard/ReviewCard'
const TourDetails = () => {
    useTitle('TourDetsils')

    const data = useLoaderData()
    
    const [reviews , setreviews] = useState([])
    const [refresh , setRefresh] = useState(false)

    const {user } = useContext(AuthContext)
     
     
    const {name , price , description , TotalDay,TourPlan , image , _id} = data.data;

    const handlePostReview = e =>{
        e.preventDefault()
        if(!user?.email){
        toast.error("login first")
            return;
        }
      const form = e.target;
        const review = {
            email: user?.email,
            text: form.reviewText.value,
            tourName: form.tourName.value,
            tourId : _id,
            customerName: user?.displayName,
            customerImage: user?.photoURL,
           
        }


        fetch('https://travelfy.vercel.app/postreview' , {
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if(data.result.acknowledged){
               toast.success('review adeded')
               setreviews([...reviews , review])
                form.reset()
            };
        })
    }

        
           useEffect(()=>{
            fetch(`https://travelfy.vercel.app/reviews?name=${name}`)
            .then(res => res.json())
             .then(data => {
                setreviews(data.result)
                setRefresh(!refresh)
            })
           } , [name , refresh])
        

     

    return (
        <div>
         <h1 className='text-4xl text-center mb-14'>Tour Details</h1>
            <div className='md:w-96 w-80 text-center mx-auto my-auto  '>
                 <img src={image} alt="" className=' rounded' />
                 <h1 className='text-4xl'>  {name}</h1>
                 <h1 ><span className='text-2xl text-orange-600'>Price:</span>  {price} K</h1>
                 <p><span className='text-3xl text-orange-600'>Description </span>: {description}</p>
                 <h1 className='pt-4 '><span className="text-3xl text-orange-600">Tour plan</span> : {
                    TourPlan?.map(plan => <span className=''>{plan}</span>)
                 }</h1>
                 <p className='pt-5 '><span className='text-2xl text-orange-600'>Total Day</span> : {TotalDay}</p>

                 <button className='btn btn-success mt-5'>Buy Now</button>
            </div>

            <div className='mt-24 text-center mb-24'>
                 <h1 className='text-3xl'>Reviews</h1>

                 <div>
                     {!user?.email  && <Link to='/login'>Login first to post review. Login</Link>}
                    <form onSubmit={handlePostReview}>
                          <input type="text"  name='tourName' Value={name} />
                          <br />
                          <textarea name="reviewText" placeholder='write your review' className='border-2 border-black' id="" cols="30" rows="10"></textarea> 
                          <br />
                          <button type='submit' className='btn btn-warning'>Post review</button>
                    </form>
                 </div>
            </div>



            <div className=' mb-20 grid md:grid-cols-3 gap-24 ml-8 md:ml-36'>
                    {!reviews?.length ? <p className='text-center'>No Review available Be The First Person </p> :reviews.map(review => <ReviewCard key={review._id} review={review}/>) }
            </div>

            <Footer/>
        </div>
    );
};

export default TourDetails;

// <ReviewCard key={review._id} review={review}/>)

//  {/* {reviews.map(review =>  } */}