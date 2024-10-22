import React from 'react'
import Terms from './components/Terms'
import { myLenis } from '../utils'
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/footer';

const page = () => {

    myLenis();
  
    return (
    <div>
        <Navbar />
        <Terms />
        <Footer />
    </div>
  )
}

export default page
