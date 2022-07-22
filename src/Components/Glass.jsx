import React from 'react';
import glass1 from '../Assets/image/glass1.jpg'
import glass2 from '../Assets/image/glass2.jpg'
import glass3 from '../Assets/image/glass3.jpg'
import glass4 from '../Assets/image/glass4.jpg'
import glass5 from '../Assets/image/glass5.jpg' 
function Glass() {
  return (
    <>
    <div className='container-xxl ms-auto me-auto'>
        <h2 className='ms-5 mb-5'>Up to 60% off | Glassware & dinnerware sets from local shops</h2>
        <div className='d-flex justify-content-center border pt-4 pb-4'>
          <a href="/glass"><img src={glass1} className="me-3"></img></a>
          <a href="/glass"><img src={glass2} className="me-3"></img></a>
          <a href="/glass"> <img src={glass3} className="me-3"></img></a>
          <a href="/glass"> <img src={glass4} className="me-3"></img></a>
          <a href="/glass"><img src={glass5} className="me-3"></img></a>
           
           
        </div>
        <div className='d-flex justify-content-center mb-5 mt-5'> <a href='#' className='btn btn-dark'>View More</a></div>
    </div>
    </>
  )
}

export default Glass 