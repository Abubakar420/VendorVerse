/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-return-assign */
// Init
import React from 'react';
import BlurLinearIcon from '@mui/icons-material/BlurLinear';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

// Component
export default function Header() {
  return (
    <div className="MainHeaderDiv">
      <div className="HeaderSubDiv">
        {/* header logo */}
        <div
          className="HeaderIconDiv"
          onClick={() => (window.location.href = '/')}
          style={{ cursor: 'pointer' }}
        >
          <BlurLinearIcon
            className="rotateIcon"
            style={{
              fontSize: '35px',
              color: '#C181F8',
            }}
          />
          <h1>VendorVerse</h1>
        </div>
        {/* pages */}
        <div className="HeaderPagesDiv">
          <div className="homeIconDiv" onClick={() => (window.location.href = '/')}>
            <HomeOutlinedIcon
              className="HomeIconsHeader"
              style={{
                color: '#C5C9D1',
                fontSize: '19px',
              }}
            />
            <h1>Home</h1>
          </div>
          <div
            className="homeIconDiv"
            onClick={() => (window.location.href = '/products')}
            style={{ cursor: 'pointer' }}
          >
            <FormatListNumberedOutlinedIcon
              style={{
                color: '#C5C9D1',
                fontSize: '19px',
              }}
            />
            <h1>Services</h1>
          </div>
          <div className="homeIconDiv" onClick={() => (window.location.href = '/login')}>
            <LogoutOutlinedIcon
              style={{
                color: '#C5C9D1',
                fontSize: '19px',
              }}
            />
            <h1>Login</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
