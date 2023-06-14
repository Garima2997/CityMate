import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'  id="card" >
      <h1>Check out your favourite entertaining places</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/r5.jpg'
              text='Explore your favourite Restaurants and Cafe here'
              label='Restaurants Lounge,Cafe'
              path='/userrestaurant'
            />
            <CardItem
              src='images/r7.jpg'
              text='You can find here all the malls of chandigarh'
              label='Malls'
              path='/usermalls'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/r8.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Public places,Amusement parks,etc'
              path='/userparks'
            />
           
            `
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;