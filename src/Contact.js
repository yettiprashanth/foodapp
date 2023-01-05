
import React from 'react'

function Contact() {
  return (
    <>
    <section className="contact">
    <div className="container " style={{color:"red"}}>
    <div className="row py-5">
   
   
    <div className="ct-form justify-content-center py-5">
     <h5 className='text-center'>GET IN TOUCH</h5>
    <div className="col-md-12">
    <form className="row g-2 m-4">
  <div className="col-md-6 mt-0 ">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="fast name" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6 mt-0">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="last name" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-md-6 mt-0 ">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6 mt-0">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
  <div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">type your massage here</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
  <div className="col-12 col-md-4 col-md-6 submit-btn">
    <button type="submit" className="btn btn-primary">SUBMIT</button>
  </div>
  <h6 className='text-center ' style={{color:"red"}}>Thank You For Submit</h6>
</form>


    </div>
    </div>
    </div> 
    </div>
    <div className="row mt-5 mb-2">
<div className="col-md-4 col-12 col-sm-6 text-white"><i className="fa-solid fa-phone-volume me-2"></i>Phone:8309771325</div>
<div className="col-md-4 col-12 col-sm-6 text-white"><i className="fa-solid fa-envelope-open-text me-2"></i>Email:yettiprasanthkumar@93gmail.com</div>
<div className="col-md-4 col-12 col-sm-6 text-white"><i className="fa-solid fa-location-dot me-2" ></i>Adrass:kothagudem Sujathanagar Telangana State</div>
</div>
   </section>
    </>
  )
}

export default Contact