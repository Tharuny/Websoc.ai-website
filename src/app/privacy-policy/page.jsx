import React from 'react'
import Policy from './components/Policy'
import { myLenis } from '../utils'
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/footer';

const page = () => {

    myLenis();

  return (
    <div>
      <Navbar />
      <Policy />
      <Footer />
    </div>
  )
}

export default page
