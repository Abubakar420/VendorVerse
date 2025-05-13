// Init
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Button, FormControl, MenuItem, Select } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HourglassDisabledOutlinedIcon from '@mui/icons-material/HourglassDisabledOutlined';
import ProductImg1 from '../assets/imgs/ProductImg1.jpg';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const cardItems = [
    {
      title: 'Deep Tissue Massage ',
      subtitle: 'Wellness by Zen Therapy',
      price: '$70',
      duration: '60 min',
      location: 'Downtown',
      image: ProductImg1,
    },
    {
      title: 'Home Cleaning',
      subtitle: 'Home by Sparkle Cleaners',
      price: '$120',
      duration: '90 min',
      location: 'Uptown',
      image: ProductImg1,
    },
    {
      title: 'Web Design',
      subtitle: 'Consultation Business by Creative Solutions',
      price: '$95',
      duration: '45 min',
      location: 'Midtown',
      image: ProductImg1,
    },
    {
      title: 'Personal Training Session',
      subtitle: 'Fitness by FitFlex Gym',
      price: '$60',
      duration: '30 min',
      location: 'West End',
      image: ProductImg1,
    },
    {
      title: 'Gourmet Meal Prep',
      subtitle: 'Food by HealthyEats Co.',
      price: '$45',
      duration: '20 min',
      location: 'Food Street',
      image: ProductImg1,
    },
    {
      title: 'Advanced Yoga Class',
      subtitle: 'Wellness by Serene Poses Studio',
      price: '$45',
      duration: '20 min',
      location: 'Food Street',
      image: ProductImg1,
    },
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const filteredItems = cardItems.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType
      ? item.subtitle.toLowerCase().startsWith(selectedType.toLowerCase())
      : true;
    const matchesLocation = selectedLocation
      ? item.location.toLowerCase() === selectedLocation.toLowerCase()
      : true;
    return matchesSearch && matchesType && matchesLocation;
  });

  const handleClick = (item) => {
    toast.success(`${item.title} added to cart! You can adjust details in your cart.`);
  };
  return (
    <>
      <Header />
      <div className="ProductsMainDiv" style={{ padding: '40px 5%' }}>
        <div className="productsHeadingDiv" style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ fontSize: '36px', margin: '3% 0 0 0 ' }}>Explore Our Services</h1>
          <p style={{ color: '#9ca3af' }}>Find and book the perfect service for your needs.</p>
        </div>

        <div className="searchBarMaindiv" style={{ marginBottom: '30px' }}>
          <div
            className="SearchBarSubDiv"
            style={{ display: 'flex', gap: '1%', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <div
              className="SearchIconWrapper"
              style={{
                display: 'flex',
                alignItems: 'center',
                background: '#334155',
                padding: '8px 12px',
                borderRadius: '8px',
                flex: '1 1 300px',
              }}
            >
              <SearchOutlinedIcon
                style={{ fontSize: '28px', color: 'white', marginRight: '10px' }}
              />
              <input
                type="search"
                placeholder="Search Services.."
                value={searchTerm}
                onChange={handleSearchChange}
                className="SearchInputField"
                style={{
                  border: 'none',
                  background: 'transparent',
                  color: 'white',
                  fontSize: '16px',
                  outline: 'none',
                  width: '100%',
                }}
              />
            </div>

            <FormControl sx={{ minWidth: 160, background: '#334155', borderRadius: '8px' }}>
              <Select
                displayEmpty
                value={selectedType}
                onChange={handleTypeChange}
                inputProps={{ 'aria-label': 'All' }}
                sx={{
                  color: 'white',
                  '& .MuiSvgIcon-root': { color: 'white' },
                  borderRadius: '8px',
                }}
                MenuProps={{
                  PaperProps: { sx: { backgroundColor: '#334155', color: 'white' } },
                }}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Wellness">Wellness</MenuItem>
                <MenuItem value="Home">Home</MenuItem>
                <MenuItem value="Business">Business</MenuItem>
                <MenuItem value="Fitness">Fitness</MenuItem>
                <MenuItem value="Food">Food</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 160, background: '#334155', borderRadius: '8px' }}>
              <Select
                displayEmpty
                value={selectedLocation}
                onChange={handleLocationChange}
                inputProps={{ 'aria-label': 'All' }}
                sx={{
                  color: 'white',
                  '& .MuiSvgIcon-root': { color: 'white' },
                  borderRadius: '8px',
                }}
                MenuProps={{
                  PaperProps: { sx: { backgroundColor: '#334155', color: 'white' } },
                }}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Downtown">Downtown</MenuItem>
                <MenuItem value="Uptown">Uptown</MenuItem>
                <MenuItem value="Midtown">Midtown</MenuItem>
                <MenuItem value="West End">West End</MenuItem>
                <MenuItem value="Food Street">Food Street</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div
          className="ProductsCardsDiv"
          style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}
        >
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <Card
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                sx={{
                  bgcolor: '#312255',
                  width: '32%',
                  borderRadius: '12px',
                  position: 'relative',
                  transition: 'box-shadow 0.3s ease',
                  '&:hover': { boxShadow: '0 8px 20px #7331AE' },
                  '&:hover .ProductImage': { transform: 'scale(1.1)' },
                  '&:hover .CardHeading': { color: '#C084FC' },
                  '&:hover .CardButton': { transform: 'scale(1.05)' },
                }}
              >
                <CardMedia
                  component="img"
                  alt={item.title}
                  image={item.image}
                  className="ProductImage"
                  sx={{ height: '220px', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    width: '46px',
                    padding: '10px',
                    borderRadius: '46%',
                    fontSize: '14px',
                    fontWeight: 400,
                    color: 'rgb(216, 180, 254)',
                    background: '#3A5156',
                    textAlign: 'center',
                    top: '10px',
                    right: '10px',
                  }}
                >
                  {item.price}
                </div>
                <div style={{ background: '#312255', padding: '4% 6%' }}>
                  <Typography
                    variant="h5"
                    component="div"
                    className="CardHeading"
                    sx={{
                      mb: 0.5,
                      fontSize: '24px',
                      lineHeight: '32px',
                      fontWeight: 600,
                      color: 'white',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: '14px', color: 'rgb(156, 163, 175)' }}
                  >
                    {item.subtitle}
                  </Typography>
                </div>
                <div style={{ padding: '0 6% 6%' }}>
                  <p
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      color: 'rgb(209, 213, 219)',
                      fontSize: '14px',
                      marginBottom: '13px',
                    }}
                  >
                    <CalendarMonthIcon style={{ color: '#C084FC' }} />
                    {item.duration}
                  </p>
                  <p
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      color: 'rgb(209, 213, 219)',
                      fontSize: '14px',
                    }}
                  >
                    <LocationOnOutlinedIcon style={{ color: '#C084FC' }} />
                    {item.location}
                  </p>
                  <Button
                    onClick={() => handleClick(item)}
                    className="CardButton"
                    sx={{
                      width: '100%',
                      background: 'linear-gradient(to right, #AD54F1, #EA489B)',
                      padding: '8px 0',
                      color: 'white',
                      fontSize: '14px',
                      borderRadius: '10px',
                      mt: 1,
                      transition: 'transform 0.3s ease',
                      textTransform: 'capitalize',
                    }}
                  >
                    <ShoppingCartOutlinedIcon />
                    Add to Cart
                  </Button>
                </div>
              </Card>
            ))
          ) : (
            <Typography
              sx={{
                width: '100%',
                textAlign: 'center',
                color: 'white',
                mt: 4,
                fontSize: '18px',
                height: '45vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '20px',
                alignItems: 'center',
              }}
            >
              <HourglassDisabledOutlinedIcon style={{ fontSize: '50px' }} />
              No services match your criteria.
              <br />
              Try adjusting your search or filters.
            </Typography>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
