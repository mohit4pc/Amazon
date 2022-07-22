import React from 'react';
import navLogo from '../Assets/image/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import '../Styles/Navbar.css'
function Navbar() {
  return (
    <>
    <div className='container-xxl bg-dark d-flex w-100' style={{height:"58px"}}>
        <div className='nav-logo w-25'>
                <a href="/"><img src={navLogo} width="110px" style={{margin:"10px 15px"}}></img></a>
        </div>
        <div className='nav-search-bar  d-flex mt-2'>
            <input type="text" className='w-100 h-50'/><button className='btn  p-2 '><SearchIcon/></button>
        </div>
        <div className='nav-user w-25 text-white d-flex justify-content-center align-items-center gap-4'>
            <div>
                <p>Hello Guest</p>
                <p>Sign in</p>
            </div>
            <div>
                <p>Your</p>
                <p>Shop</p>
            </div>
            <div className='d-flex gap-2 align-item-center'>
                <ShoppingBagIcon />
                <p className='mt-1'>0</p>
            </div>
        </div>
    </div>
    </> 
  )
}

export default Navbar