import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
const Navbar = () => {
    const [open, setOpen] = useState(false);
      
    const {user ,logout} = useContext(AuthContext)
    const handleLogout = ()=>{
        logout()
        .then(()=>{})
        .catch(error=> console.log(error.message))
    }
      
    const handleNavbar = () =>{
        setOpen(!open)
    }


    
    return (
        <div className='text-center bg-orange-500 text-[#190e0e] '> 
       
            <ul className={`md:flex md:static   absolute text-xl justify-center bg-orange-500 md:w-full w-52 z-[20] md:p-0  ease-in-out duration-500  ${open ? "top-[31px]" : "top-[-300px]"}`}>
            <li className='ml-5 md:mt-0 mt-4'><Link to='/'>Home</Link></li>
            <li className='ml-5 md:mt-0 mt-4'><Link to='/tours'>Tours</Link></li>
            <li className='ml-5 md:mt-0 mt-4'> <Link to='/blogs'>Blogs</Link></li>
            {
                user?.email ? <>
                 <li className='ml-5 md:mt-0 mt-4' ><Link  to='/addtour'>Add Tour</Link></li>
            <li className='ml-5 md:mt-0 mt-4'> <Link  to='/myreview'>My review</Link></li>
            <li className='ml-5 md:mt-0 mt-4'><Link  onClick={handleLogout}>Logout</Link></li>
            </> : 
            <>  
            <li className='ml-5 md:mt-0 mt-4'><Link  to='/register'>Register</Link></li>
            <li className='ml-5 md:mt-0 mt-4'><Link  to='/login'>Login</Link></li>
            </>
            }

           
            </ul>
         
                
            <div onClick={handleNavbar} className="md:hidden text-3xl">
                 {
                    open ? <AiOutlineClose/> : <GiHamburgerMenu/>
                 }
             </div>
           
           
            

         



        </div>

     
      
   
    );
};

export default Navbar;