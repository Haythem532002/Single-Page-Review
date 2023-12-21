import React, { useState } from 'react';
import people from './data';
import './App.css'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex]=useState(0);
  function handleClick() {
    if(index===people.length-1){
      setIndex(0);
    } else {
      setIndex(Math.floor(Math.random() * 4))
    }
  }
  function handleBack() {
    if (index === 0) {
      setIndex(3);
    } else {
      setIndex(index - 1);
    }
  }
  function handleForward() {
    if (index === 3) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  return <section className='review'>
    <div className='image'>
      <FaQuoteRight className='quote'></FaQuoteRight>
      <img src={people[index].image} alt='' />
    </div>
    <h2>{people[index].name}</h2>
    <p className='job'>{people[index].job}</p>
    <p className='text'>{people[index].text}</p>
    <button className='navigate' onClick={handleBack}><FaChevronLeft></FaChevronLeft></button>
    <button className='navigate' onClick={handleForward}><FaChevronRight></FaChevronRight></button> <br></br>
    <button className='surprise' onClick={handleClick} >Surprise Me</button>
  </section>
};

export default Review;
