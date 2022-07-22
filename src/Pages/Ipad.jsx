import React from 'react'
import ipad from '../Assets/image/ipad.jpg'
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../Styles/Mobile.css'

function MobileData2() {
  return (
    <>
    <div className='container d-flex'>
        <div className="img">
            <img src={ipad} alt="" width="450px" />
        </div>
        <div className='mohit'></div>
        <div className="data mt-5">
            <h1>iPad with A13 Bionic chip (Wi-Fi + Cellular, 64GB) - Space Grey (9th Generation)</h1>
            <h3>₹42,900.00</h3>
            <p><b>Model Name :-</b>10.2-inch iPad Wi‑Fi + Cellular 64GB - Space Grey</p>
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