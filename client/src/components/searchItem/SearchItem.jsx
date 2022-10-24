import React from 'react';
import './searchItem.scss';

export default function SearchItem() {
  return (
    <div className="searchItem">
      <img
        src="https://ac-a.static.booking.cn/xdata/images/hotel/square600/130482272.webp?k=1084c3d7fd22a99700e610cf2d817280377a4bbb94512b8c9663de75c9169487&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Hyatt Place Shanghai Tianshan Plaza</h1>
        <span className="siDistance">6.9 km from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">Studio Apartment with Air conditioning</span>
        <span className="siFeatures">Entire studio · 1 bathroom · 21m² 1 full bed</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
}
