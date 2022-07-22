import React from 'react';
import glass1 from '../Assets/image/glass1.jpg'
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../Styles/Mobile.css'

function glass() {
    return (
        <>
            <div className='container d-flex' style={{marginLeft:"1rem"}}>
                <div className="img p-5">
                    <img src={glass1} alt="" width="450px" />
                </div>
                <div className='mohit'></div>
                <div className="data mt-5">
                    <h1>nogaiya glass 30 ml Shot Glass Set for Drink, Vodka, Tequila, Whisky, Liquor, Set of 6 Pcs</h1>
                    <h3>-43% ₹399.00</h3>
                    <p><s>M.R.P.: ₹699.00</s></p>
                    <p><b>Model Name :-</b>		Nogaiya glass</p>
                    <p><b>Special Feature :-</b> Dishwasher Safe</p>
                    <p><b>Colour :-</b>	Clear</p>
                   <p><b>Capacity</b>	30 Milliliters</p> 
                </div>
                
            </div>
            <div className='d-flex justify-content-center gap-4 ms-5'>
            <a href='tel:+917206977025' className='buy-btn'><CallIcon className='me-2' />Call Now</a>
            <a href='https://wa.me/+917206977025' className='buy-btn'><WhatsAppIcon className='me-2' />Whatsapp Now</a>
            </div>
        </>
    )
}

export default glass