/* eslint-disable react/no-danger */
/* eslint-disable react/button-has-type */
/* eslint-disable no-return-assign */
import React from 'react';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import BoltIcon from '@mui/icons-material/Bolt';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';

export default function HeroSection() {
  const cardData = [
    {
      icon: <GroupOutlinedIcon style={{ fontSize: '40px', color: '#C084FC' }} />,
      title: 'Multi-Vendor Platform',
      description: 'Access a wide range of services\nfrom various specialized vendors',
    },
    {
      icon: <ShoppingBagOutlinedIcon style={{ fontSize: '40px', color: '#F472B6' }} />,
      title: 'Easy Booking',
      description: 'Seamlessly browse, select, and\nbook services with flexible\nscheduling.',
    },
    {
      icon: <LocalPoliceOutlinedIcon style={{ fontSize: '40px', color: '#F87171' }} />,
      title: 'Secure & Reliable',
      description: 'Trustworthy vendors and secure transactions for peace of mind.',
    },
  ];

  return (
    <div className="HerosectionMainDiv">
      <div className="HeroSectionSubDiv">
        <div className="HeroSecContentDiv">
          <h1>
            Welcome to <br />
            <span>VendorVerse</span>
          </h1>
          <p>
            Discover a universe of services from trusted vendors. Book, manage, and
            <br />
            enjoy with ease. Your one-stop platform for quality and convenience.
          </p>
          <div className="HeroSectionBtnsDiv">
            <button
              className="heroSectionBtn1"
              onClick={() => (window.location.href = '/products')}
            >
              <ShoppingBagOutlinedIcon />
              Explore Services
            </button>
            <button className="heroSectionBtn2" onClick={() => (window.location.href = '/login')}>
              <BoltIcon />
              Get Started
            </button>
          </div>
        </div>

        {/* cards */}
        <div className="homeCardsMainDiv">
          {cardData.map((card, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index} className="heroCard1">
              {card.icon}
              <h2>{card.title}</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: card.description.replace(/\n/g, '<br />'),
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
