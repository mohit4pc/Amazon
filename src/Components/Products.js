import React from 'react';
import flight from '../Assets/image/flight.jpg';
import bus from '../Assets/image/bus.jpg';
import Trains from '../Assets/image/train.jpg';
import travel from '../Assets/image/travel.jpg';
import Desktop from '../Assets/image/Desktop.jpg';
import ac from '../Assets/image/ac.jpg';
import r from '../Assets/image/r.jpg';
import m from '../Assets/image/m.jpg';
import w from '../Assets/image/w.jpg';
import '../Styles/Products.css';
import laptop from '../Assets/image/laptop.jpg'

function Products() {
    return (
        <>
        <section className='products'>
            <div className='container-xxl d-flex products-div w-100' style={{paddingRight: "40px"}}>
                <div className='book-travel-ticket w-25'>
                    <h4>Amazon Pay | Book your travel tickets</h4>
                    <div className='box1 d-flex gap-3' style={{paddingTop:"1.4rem"}}>
                        <div className='flight'>
                            <img src={flight}  width="130px"/>
                            <p>Flight tickets</p>
                        </div>
                        <div className='bus'>
                        <img src={bus}  width="130px"/>
                            <p>Bus Tickets</p>
                        </div>
                    </div>
                    <div className='box1 d-flex gap-3' style={{paddingTop:"1.4rem"}}>
                        <div className='train'>
                        <img src={Trains}  width="130px"/>
                            <p>Trains tickets</p>
                        </div>
                        <div className='flight'>
                        <img src={travel}  width="130px"/>
                            <p>Essential travel products</p>
                        </div>
                    </div>
                    <a href='#' className="btn btn-dark">Explore more from Amazon Pay</a>
                </div>
                <div className='Clearance-store me-3 w-25 ms-3' style={{padding:"2px", paddingTop: "18px"}}>
                    <div className='box2'>
                        <h5 className='ps-3 ' style={{fontSize:"1.5rem"}}>Up to 70% off | Clearance store</h5>
                        <img src={Desktop} width="330px"/>
                    </div>
                    <a href='#' className="btn btn-dark ms-4">See more</a>
                </div>
                <div className='home w-25'>
                <h4 className=' pb-3'>Top picks for your home</h4>
                    <div className='box1 d-flex gap-3'>
                        <div className='flight'>
                            <img src={ac} width='140px' height="110px"/>
                            <p>ACs</p>
                        </div>
                        <div className='bus'>
                        <img src={r} width='140px' height="110px"/>
                            <p>Refrigerators</p>
                        </div>
                    </div>
                    <div className='box1 d-flex gap-3'>
                        <div className='train'>
                        <img src={m} width='140px' height="110px" />
                            <p>Microwaves</p>
                        </div>
                        <div className='flight'>
                        <img src={w} width='140px' height="110px" />
                            <p>Washing machines</p>
                        </div>
                    </div>
                    <a href='#' className="btn btn-dark">See more</a>
                </div>
                <div className='Sign-in w-25'>
                    <div className='data'>
                    <h5>Sign in for your best experience</h5>
                    <button className='btn btn-dark'>Sign in securely</button>
                    </div>
                    <div className='img pt-3'>
                        <img src={laptop} width='270px' />
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default Products