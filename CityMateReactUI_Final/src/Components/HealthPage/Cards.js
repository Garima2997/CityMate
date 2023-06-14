import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <p className='cards__header'>Chandigarh is India's first well planned city. The city has superlative medical care available. Hospitals are equipped with digitized radiography, ECG, ultrasound, picture archiving communication system. All requisite facilities are provided for by hospitals in the same premises. They promise provision of every facility from diagnostic to surgical to recovery phase.

Pharmacy, ambulance, blood bank and diagnostic facilities are provided 24*7. Majority of these medical facilities also are recognized by international organizations like Joint Commission International (JCI) and Hazard Analysis and Critical Control Point (HACCP). Availability of medical facilities in totality has given the hospitals a dedicated and returning patient-base.

Read on to find out about the leading hospitals and pharmacy in Chandigarh.

</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./images/healthimages/img-1.jpeg'
              text='Explore the hospital facilities in the city'
              label='Hospital'
              path='/userhospital'
            />
            <CardItem
              src='./images/healthimages/img-2.jpg'
              text='Explore the pharmacy facilities in the city'
              label='Pharmacy'
              path='/userpharmacy'
            />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;