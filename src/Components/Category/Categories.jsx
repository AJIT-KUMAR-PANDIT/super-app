import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import stylesCategories from './Categories.module.css';

const Categories = () => {


  const action = '/images/category/image2.svg';
  const drama = '/images/category/image3.svg';
  const romance = '/images/category/image4.svg';
  const thirller = '/images/category/image6.svg';
  const western = '/images/category/image7.svg';
  const horror = '/images/category/image8.svg';
  const fantasy = '/images/category/image9.svg';
  const music = '/images/category/image10.svg';
  const fiction = '/images/category/image11.svg';
  const errorOccur = '/images/Vector (2).svg';



  const defaultCategory = [
    {
      id: 1,
      name: 'Action',
      color: '#FF5209',
      image: <img src={action} alt="action" />,
    },
    {
      id: 2,
      name: 'Drama',
      color: '#D7A4FF',
      image: <img src={drama} alt="drama" />,
    },
    {
      id: 3,
      name: 'Romance',
      color: '#148A08',
      image: <img src={romance} alt="romance" />,
    },
    {
      id: 4,
      name: 'Thriller',
      color: '#84C2FF',
      image: <img src={thirller} alt="thirller" />,
    },
    {
      id: 5,
      name: 'Western',
      color: '#902500',
      image: <img src={western} alt="western" />,
    },
    {
      id: 6,
      name: 'Horror',
      color: '#7358FF',
      image: <img src={horror} alt="horror" />,
    },
    {
      id: 7,
      name: 'Fantasy',
      color: '#FF4ADE',
      image: <img src={fantasy} alt="fantasy" />,
    },
    {
      id: 8,
      name: 'Music',
      color: '#E61E32',
      image: <img src={music} alt="music" />,
    },
    {
      id: 9,
      name: 'Fiction',
      color: '#6CD061',
      image: <img src={fiction} alt="fiction" />,
    },
  ];
  const [category, setCategory] = useState([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleButton = () => {
    if (category.length < 3) {
      setError(true);
      return;
    } else {
      setError(false);
      localStorage.setItem('category', JSON.stringify([...category]));
      navigate('/home');
    }
  };

  const Cards = ({ cardData, ids, category, setCategory }) => {
    const [borderSelect, setBorderSelect] = useState();
    const handleClick = (e) => {
      if (category.includes(cardData.name)) {
        const idx = category.indexOf(cardData.name);
        category.splice(idx, 1);
        setCategory([...category]);
      } else {
        setCategory([...category, cardData.name]);
      }
      setBorderSelect(!borderSelect);
    };
    useEffect(() => {
      setBorderSelect(category.includes(cardData.name) === true);
    }, [category, cardData.name]);

    return (
      <div
        onClick={(e) => {
          handleClick(e);
        }}
        key={ids}
        style={{
          background: cardData['color'],
          padding: '16px',
          borderRadius: '12px',
          border: `${borderSelect ? '4px solid #11B800' : ''}`,
        }}
      >
        <h4 className={stylesCategories.genreText}>{cardData.name}</h4>
        {cardData.image}
      </div>
    );
  };
  const handleremoveHide = (defaultCategoryName) => {
    const removeHide = category.filter(
      (cardData) => cardData !== defaultCategoryName
    );

    setCategory([...removeHide]);
  };

  return (
    <div className={stylesCategories.container}>
      <div className={stylesCategories.SelectedCard}>
        <h4 className={stylesCategories.logo}>Super app</h4>
        <p className={stylesCategories.description}>Choose your entertainment category</p>
        <div className={stylesCategories.Movies}>
          {category.map((defaultCategoryName) => (
            <div key={defaultCategoryName} className={stylesCategories.addMovies}>
              {defaultCategoryName}
              <span
                className={stylesCategories.removeHide}
                onClick={() => handleremoveHide(defaultCategoryName)}
              >
                X
              </span>
            </div>
          ))}
        </div>

        {error && category.length < 3 ? (
          <p className={stylesCategories.error}>
            <img src={errorOccur} alt="errorOccur"></img> Minimum 3 category required
          </p>
        ) : (
          <></>
        )}
      </div>
      <div className={stylesCategories.genre}>
        {defaultCategory.map((cardData, ids) => (
          <Cards
            key={ids}
            cardData={cardData}
            category={category}
            setCategory={setCategory}
          />
        ))}
      </div>
      <button className={stylesCategories.nextButton} onClick={handleButton}>
        Next Page
      </button>
    </div>
  );
};

export default Categories;
