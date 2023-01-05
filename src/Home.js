import React from 'react'
import About from './About'
import Contact from './Contact'
import Product from './Product'

function Home() {
  return (
   <>
   <section className='home'>
   <div className="top-banner">
   <div className="container">
   <div className="row">
   <div className="col-md-12 text-center">
   <h1 className='text-center capitalize'>Fresh Food Avalable On Here</h1>
   <h5 className='text-center capitalize'>Check All The Food Riceipe </h5>
   <h5 style={{color:"red"}}>Plese Click To Product Page For Filter Products</h5>
   </div>
   </div>
   </div>
   </div>
   
   
   </section>
   <Product/>
   <About/>
   <Contact/>
   </>
  )
}

export default Home