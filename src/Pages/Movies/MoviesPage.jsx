import React from 'react';

import Movies from '../../Components/Movies/Movies';
import { useNavigate } from 'react-router-dom';
import superText from '../../assets/fonts/SingleDay-Regular.ttf';

const MoviesPage = () => {
  
  const MoviesData = JSON.parse(localStorage.getItem('category'));
 
  const navigate = useNavigate();
  const User ='/images/HomePageBack.png';


  const handleClick = () => {
    navigate('/home');
  };

// const superText = {
//   @fontFace {
//     fontFamily: "SingleDay-Regular";
//     src: url("../../assets/fonts/SingleDay-Regular.ttf") format("truetype");
//     fontWeight: normal;
//     fontStyle: normal;
//   }
// }


  const Img = {
    position: 'absolute',
    right: '30px',
    top: '20px',
    cursor: 'pointer',
  };

  const head = {
    color: '#72DB73',
    fontFamily: {superText},
    fontSize: '47.333px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '139.688%',
    margin: '0',
    marginLeft: '20px',
  };
  const subhead = {
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: '30.424px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '139.688%' ,
    letterSpacing: '0.608px',
    marginLeft: '40px',
  };
  return (
    <>
      <img
        style={Img}
        height="70px"
        src={User}
        alt="user"
        onClick={handleClick}
      />
      <div
        style={{
          background: 'black',
          minHeight: '100vh',
          width: '100%',
          overflowX: 'hidden',
        }}
      >
        <h3 style={head}>Super app</h3>
        <p style={subhead}>Entertainment according to your choice</p>
        {MoviesData.map((movie, index) => (
          <Movies key={index} genre={movie} />
        ))}
      </div>
    </>
  );
};

export default MoviesPage;
