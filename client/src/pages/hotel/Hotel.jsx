import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import './hotel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCircleXmark, faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Hotel() {
  const photos = [
    {
      src: 'https://ac-a.static.booking.cn/xdata/images/hotel/max500/134688969.jpg?k=c16cd8478f07dd8561b920aab637cf6917c59431261e6581987bd58ca25ab7e1&o=&hp=1',
      id: 1,
    },
    {
      src: 'https://ac-a.static.booking.cn/xdata/images/hotel/max300/133589030.jpg?k=48bbe30f1b71778802c0d3bc0bba2448e210462ff873178d4478eab37336a850&o=&hp=1',
      id: 2,
    },
    {
      src: 'https://ac-a.static.booking.cn/xdata/images/hotel/max500/134695912.jpg?k=f16e4b081e33b6f796ea303ad5c6dac159dc2ffd84b37d094c558f2f9adf9bc5&o=&hp=1',
      id: 3,
    },

    {
      src: 'https://ac-a.static.booking.cn/xdata/images/hotel/max300/134895026.jpg?k=0358011388c8a88adb653e09294b0a947b5dad60a3c8a0b8fa9f27109740a6eb&o=&hp=1',
      id: 4,
    },
    {
      src: 'https://ac-a.static.booking.cn/xdata/images/hotel/max300/130511682.jpg?k=07a820097808b69c4491e89711c759ade79a65ff39edbe14c2708fbe11986a85&o=&hp=1',
      id: 5,
    },
    {
      src: 'https://ac-a.static.booking.cn/xdata/images/hotel/max300/134894574.jpg?k=99ac72ce2944fc72b4f930763fb085373b1b634c34979da27de7a79dc517a078&o=&hp=1',
      id: 6,
    },
  ];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = index => {
    console.log(index);
    setSlideNumber(index);
    setOpen(true);
  };

  const handleMove = direction => {
    let newSlideNumber;
    if (direction === 'l') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };
  return (
    <div>
      <Navbar></Navbar>
      <Header type="list"></Header>
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove('l')}></FontAwesomeIcon>
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove('r')}></FontAwesomeIcon>
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
            <span>No 99, Danba Road, Putuo, 200062 Shanghai, China</span>
          </div>
          <div className="hotelDistance">
            <span>Great location – 500m from center</span>
          </div>
          <div className="hotelPriceHighLight">
            <span>Great for Two Travelers</span>
          </div>
          <div className="hotelImages">
            {photos.map((photo, index) => (
              <div className="hotelImgWrapper" key={photos[index].id}>
                <img onClick={() => handleOpen(index)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Hyatt Place Shanghai Tianshan Plaza</h1>
              <p className="hotelDesc">
                Located in the center of Changning District, Hyatt Place Shanghai Tianshan Plaza features 150 spacious rooms. Loushanguan
                Road Subway Station is just a 5-minute walk from the hotel. Free WiFi is provided throughout the entire property. Free
                parking is also possible on site. L'Avenue Shopping Mall is a 5-minute walk from Hyatt Place Shanghai Tianshan Plaza.
                Zhongshan Park is 1.2 mi away. Jing'an Temple and Shanghai Zoo are both 3.1 mi from the property. It takes 30 minutes to
                reach Shanghai Hongqiao International Airport and 60 minutes to arrive Shanghai Pudong International Airport by car from the
                property. The modern guest rooms here feature a flat-screen cable TV, a working desk and a well-stocked mini-bar. You can
                also find ironing facilities and a personal safe in the room. For guests' convenience, power converters are provided in the
                room. Each private bathroom comes with bathrobes, a hairdryer, slippers and free toiletries. Guests can take a leisure swim
                in the indoor pool or maintain their workout at the 24-hour fitness center. A business center with well-equipped meeting
                facilities is available for business needs. Dry cleaning service and grocery shopping service are accessible at the property
                as well. Daily buffet breakfast is served at the Gallery Market. The restaurant also offers an a la carte menu for lunch and
                dinner. Couples in particular like the location – they rated it 8.7 for a two-person trip.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 1-night stay!</h1>
              <span>Top Location: Highly rated by recent guests (8.8)</span>
              <h2>
                <b>$945</b> (1 night)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList></MailList>
        <Footer></Footer>
      </div>
    </div>
  );
}
