import React from 'react';
import '../Styles/Detail.css';
import man from '../Assets/image/mohit.webp'

function Detail() {
  return (
    <div className="row d-flex justify-content-start align-items-center rows ms-5">
      <div className="w-75 d-flex ms-5">
        <div className="card">
          <div className="text-center">
            <img src="https://i.imgur.com/Dh7U4bp.png" width="200px" />
            <span className="d-block mt-3">Subscribe to our newsletter in order not to miss new arrivals <br /> promotions and discounts of our store</span>
            <div className="mx-5">
              <div className="input-group mb-3 mt-4">
                <input type="text" className="form-control" placeholder="Enter email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-success border-rad" type="button" id="button-addon2">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-25' style={{ marginLeft: "-16rem" }}><img src={man}></img></div>




    </div>
  )
}

export default Detail