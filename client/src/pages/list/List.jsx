import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import './list.scss';
import { useLocation } from 'react-router-dom';

export default function List() {
  const location = useLocation();
  // const [destination, setDestination] = use;
  console.log(location);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input type="text" />
            </div>
            <div className="lsItem">
              <label htmlFor="">Check-in Date</label>
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  );
}
