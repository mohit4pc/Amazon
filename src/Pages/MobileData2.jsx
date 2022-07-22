import React from 'react'
import iphone2 from '../Assets/image/iphone2.jpg'
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../Styles/Mobile.css'

function MobileData2() {
  return (
    <>
    <div className='container d-flex'>
        <div className="img">
            <img src={iphone2} alt="" width="450px" />
        </div>
        <div className='mohit'></div>
        <div className="data mt-5">
            <h1>Apple iPhone SE (128 GB) - Starlight (3rd Generation)</h1>
            <h3>₹48,900.00</h3>
            <p><b>Model Name :-</b>	IPhone</p>
            <p><b>Network :-</b> Service Provider	Unlocked for All Carriers</p>
            <p><b>Brand :-</b>	Apple</p>
            <p><b>Form Factor :-</b>	Smartphone</p>
            <p> <b>Memory Storage Capacity :-</b> 	128 GB</p>
        </div>
        
    </div>
    <div className='d-flex justify-content-center gap-4 ms-5'>
    <a href='tel:+917206977025' className='buy-btn'><CallIcon className='me-2' />Call Now</a>
    <a href='https://wa.me/+917206977025' className='buy-btn'><WhatsAppIcon className='me-2' />Whatsapp Now</a>
    </div>
</>  
  )
}

export default MobileData2