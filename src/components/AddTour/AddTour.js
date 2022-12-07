import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';
import Footer from '../Footer/Footer';

const AddTour = () => {
 useTitle('AddTour')
 const handleAddTour = e =>{
    e.preventDefault()
    const form = e.target;
    const tourName = form.tourName.value;
    const image = form.image.value;
    const price = form.price.value
    const description = form.description.value
    const tourPlan = form.tourPlan.value;
    const TotalDay = form.TotalDay.value
    const addededTour = {
        name: tourName,
        image: image,
        price: price,
        description: description,
        TourPlan: [tourPlan],
        TotalDay: TotalDay

    }


    fetch('https://travelfy.vercel.app/addtour' , {
        method: 'POST',
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(addededTour)
    })
    .then(res => res.json())
    .then(data => {
        if(data.data.acknowledged){
            toast.success('tour adeded')
            form.reset()
        }
    })
 }

    return (
        <div className='text-center mt-10'>
              <h1 className='text-4xl mb-10'>Add Tour</h1> 
             <form onSubmit={handleAddTour} className="mb-10">
             <input type="text" name='tourName' placeholder="Tour Name"  className="input input-bordered input-primary w-full max-w-xs" /> 
             <br />
             <input type="text"  name='price' placeholder="price"  className="input input-bordered input-primary w-full mt-9 max-w-xs" /> 
             <br />
             <input type="text"  name='image' placeholder="Imageurl"  className="input input-bordered input-primary w-full mt-9 max-w-xs" /> 
             <br />
             <input type="text"   name='TotalDay' placeholder="TotalDay"  className="input input-bordered input-primary mt-9 w-full max-w-xs" /> 
             <br />
             <div className='flex flex-col md:flex-row   md:justify-center '>
             <textarea name='description' className="textarea mt-9 textarea-primary" placeholder="Description"></textarea>
            
            <textarea name='tourPlan' className="textarea ml-11 mt-9 textarea-primary md:mr-0 mr-11" placeholder="Tour Plan"></textarea>
             </div> 
           
                 <button type='submit' className='btn btn-primary mt-9'>Add tour</button>
             </form>

            <Footer></Footer>

        </div>
    );
};

export default AddTour;