import React from 'react';
import '../styles/utils.css';
import video from './video.gif';
import sun from './sun.gif';
import shopping from './shopping-cart.gif';
import calender from './calendar.gif';
import money from './money-bag.gif';


const Utils = () => {
  return (
    <div className='utils'>
    <h3 className='util-head'>Utilities</h3>
    <div className="grid-container">
        <div className='grid-item'><a href='https://beefilm.netlify.app/'><img src={video}/></a><span>Beefilms</span></div>
        <div className='grid-item'><a href='https://velvety-kheer-7a4e66.netlify.app/'><img src={sun}/></a><span>We Weather</span></div>
        <div className='grid-item'><a href='https://ecommerce087439.netlify.app/'><img src={shopping}/></a><span>WeComm</span></div>
        <div className='grid-item'><a href='https://charming-salmiakki-e67ea2.netlify.app/'><img src={calender}/></a><span>WeCalender</span></div>
        <div className='grid-item'><a href='https://wetrack111.netlify.app/'><img src={money}/></a><span>WeFinance</span></div>
    </div>
    </div>
  )
}

export default Utils