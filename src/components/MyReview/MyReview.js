import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";
import Footer from "../Footer/Footer";

const MyReview = () => {
  useTitle('Myreview')
  const { user , logout } = useContext(AuthContext);
  const [userReview, setUserReview] = useState([]);
  const [review , setReview] = useState({})
  const [refresh , setRefresh] = useState(false)


  useEffect(() => {
    if(!user?.email) return ;
    fetch(`https://travelfy.vercel.app/userReview?email=${user?.email}`,{
      headers:{
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        if(res.status === 401 || res.status === 403){
          return logout()
        }
        return res.json()
      } )
      .then((data) => setUserReview(data.data));
  }, [user?.email , refresh , logout]);
console.log(userReview);

 const handleDelete = id =>{
    fetch(`https://travelfy.vercel.app/reviews/${id}`,{
        method:"DELETE"
    })
    .then(res => res.json())
    .then(data => {
     
       if(data.deletedCount){
        const remaining = userReview.filter(review => review._id !== id)
        toast.success('review deleted')
        setUserReview(remaining)
        
       }
    })

 }

const hanleReview = (review ) =>{
    setReview(review)
    console.log(review);
}
 
const habdleUpdateUserReview = e =>{
  e.preventDefault()
  console.log(e.target);
  const text = e.target.text.value;
  // console.log(text);
 
 const updatedReview = {
  text: text
 }
  fetch(`https://travelfy.vercel.app/review/${review._id}` , {
    method:"PUT",
    headers:{
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updatedReview)
  })
  .then(res =>res.json())
  .then(data =>{
    if(data.result.modifiedCount){
      
       setRefresh(!refresh)
       e.target.reset()
      
     
     }
     console.log(data);
  })
}


  return (
    <div >
    <div className="grid  md:grid-cols-3 md:gap-20 ml-3 gap-3 md:ml-36 mb-96">
    {userReview.length === 0 ? (
        <p>You dont post any review</p>
      ) : (
        userReview?.map((review) => (
          <div className="card w-60 md:mt-20 mt-6  ml-8 md:w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
              <h2 className="card-title">{review.tourName}</h2>
              <p>{review.text}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary" onClick={()=>handleDelete(review._id)}>Delete</button>
                <label htmlFor="my-modal-3" className="btn" onClick={()=>hanleReview(review)}>Edit</label>
              </div>
            </div>
          </div>
        ))
      )}
                   {/*  <button htmlFor="my-modal" className="btn" onClick={()=>hanleReview(review)}>Edit</button> */}
      {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <form onSubmit={habdleUpdateUserReview} className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <textarea className="textarea textarea-accent w-72"  placeholder=""  name="text"></textarea>
    <br />
    <button type="submit" className="btn btn-outline btn-success">update</button>
   
  </form>
</div>
    </div>
      
      

    <Footer />
    </div>
  );
};

export default MyReview;
