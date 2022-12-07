import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';

const Tours = () => {
    useTitle('Tours')
    const data = useLoaderData()
    console.log(data);
    const {loading } = useContext(AuthContext)
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    return (
        <div >
        <h1 className='text-center mb-11 text-3xl  md:text-6xl'>Tours</h1>
        <div className='grid md:grid-cols-3 md:ml-36 gap-32 mb-24 mt-20'>
            {
 
               data.data.map(tour => <Card key={tour._id} tour={tour}></Card>)
            }
        </div>
             

          <Footer/>

        </div>
    );
};

export default Tours;