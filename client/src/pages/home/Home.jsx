import React from 'react';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import './home.scss';

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <div className="homeContainer">
        <Featured></Featured>
        <h1 className="homeTitle">Browse by property type</h1>
      </div>
    </div>
  );
}
