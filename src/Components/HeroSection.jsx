import React from 'react';
import '../Styles/HeroSection.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

function HeroSection() {
  return (
    <div className='container-xxl hero-section'>
        <div className='data'>
            <KeyboardArrowLeftIcon />
            <ChevronRightIcon />
        </div>
    </div>
  )
}

export default HeroSection