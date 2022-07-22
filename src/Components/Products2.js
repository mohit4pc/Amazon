import React from 'react';
import fresh from '../Assets/image/Fresh.jpg';
import mobile from '../Assets/image/Mobile.jpg';
import Fashion from '../Assets/image/Fashion.jpg';
import Electronic from '../Assets/image/Electronic.jpg';
import pay from '../Assets/image/pay.jpg';
import m1 from '../Assets/image/1.jpg';
import m2 from '../Assets/image/2.jpg';
import m3 from '../Assets/image/3.jpg';
import m4 from '../Assets/image/4.jpg';
import '../Styles/Products.css';
import laptop from '../Assets/image/laptop.jpg'

function Products() {
    return (
        <>
        <section className='products border' style={{marginTop:"17rem"}}>
            <div className='container-xxl d-flex products-div w-100' style={{paddingRight: "40px"}}>
                <div className='book-travel-ticket w-25'>
                    <h4>Shop by Category</h4>
                    <div className='box1 d-flex gap-3' style={{paddingTop:"1.4rem"}}>
                        <div className='flight'>
                            <img src={fresh}  width="130px"/>
                            <p>Flight tickets</p>
                        </div>
                        <div className='bus'>
                        <img src={mobile}  width="130px"/>
                            <p>Bus Tickets</p>
                        </div>
                    </div>
                    <div className='box1 d-flex gap-3' style={{paddingTop:"1.4rem"}}>
                        <div className='train'>
                        <img src={Fashion}  width="130px"/>
                            <p>Trains tickets</p>
                        </div>
                        <div className='flight'>
                        <img src={Electronic}  width="130px"/>
                            <p>Essential travel products</p>
                        </div>
                    </div>
                    <a href='#' className="btn btn-dark mt-4">Explore more from Amazon Pay</a>
                </div>
                <div className='Clearance-store me-3 w-25 ms-3' style={{padding:"2px", paddingTop: "18px"}}>
                    <div className='box2'>
                        <h5 className='ps-3 ' style={{fontSize:"1.5rem"}}>Pay your credit card bills on Amazon</h5>
                        <img src={pay} width="330px"/>
                    </div>
                    <a href='#' className="btn btn-dark ms-4">See more</a>
                </div>
                <div className='home w-25'>
                <h4 className=' pb-3'>Top picks for your home</h4>
                    <div className='box1 d-flex gap-3'>
                        <div className='flight'>
                            <img src={m1} width='140px' height="110px"/>
                            <p>ACs</p>
                        </div>
                        <div className='bus'>
                        <img src={m2} width='140px' height="110px"/>
                            <p>Refrigerators</p>
                        </div>
                    </div>
                    <div className='box1 d-flex gap-3'>
                        <div className='train'>
                        <img src={m3} width='140px' height="110px" />
                            <p>Microwaves</p>
                        </div>
                        <div className='flight'>
                        <img src={m4} width='140px' height="110px" />
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