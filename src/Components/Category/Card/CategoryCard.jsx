import StyleCategoryCard from "../../../styles/CategoryCard.module.scss";
import { useState, useEffect } from "react";

const CategoryCard = (props) => {
  const { type, color, image, card } = props;

  const loading = "/images/loading1.svg";

  const [borderColor, setBorderColor] = useState(StyleCategoryCard.inactive);
  const [selected, setSelected] = useState(() => {
    const value = JSON.parse(localStorage.getItem("card")) || {
      card1: { trueFalse: false, type: "Action" },
      card2: { trueFalse: false, type: "Drama" },
      card3: { trueFalse: false, type: "Romance" },
      card4: { trueFalse: false, type: "Thriller" },
      card5: { trueFalse: false, type: "Western" },
      card6: { trueFalse: false, type: "Horror" },
      card7: { trueFalse: false, type: "Fantasy" },
      card8: { trueFalse: false, type: "Music" },
      card9: { trueFalse: false, type: "Fiction" },
    };
    return value;
  });

  useEffect(() => {
    localStorage.setItem("card", JSON.stringify(selected));
  }, [selected])

  // const [selected, setSelected] = useState({
  //   card1: { trueFalse: false, type: "Action" },
  //   card2: { trueFalse: false, type: "Drama" },
  //   card3: { trueFalse: false, type: "Romance" },
  //   card4: { trueFalse: false, type: "Thriller" },
  //   card5: { trueFalse: false, type: "Western" },
  //   card6: { trueFalse: false, type: "Horror" },
  //   card7: { trueFalse: false, type: "Fantasy" },
  //   card8: { trueFalse: false, type: "Music" },
  //   card9: { trueFalse: false, type: "Fiction" },
  // });

  // const handleCardClick = () => {
  //   setBorderColor(borderColor === "black" ? "red" : "black");
  // };

  const handleClick = () => {
    borderColor === StyleCategoryCard.inactive
      ? setBorderColor(StyleCategoryCard.active)
      : setBorderColor(StyleCategoryCard.inactive);
    handelCardClick();
  };

  const handelCardClick = () => {
    if (card === "card1") {
      if (selected.card1.trueFalse === false) {
        setSelected({
          ...selected,
          card1: {
            ...selected.card1,
            trueFalse: true,
          },
        });
        // console.log("inside",selected.card1);
      } else {
        setSelected({
          ...selected,
          card1: {
            ...selected.card1,
            trueFalse: false,
          },
        });
        // console.log("inside",selected.card1);
      }
    }
    // card2
    if (card === "card2") {
      if (selected.card1.trueFalse === false) {
        setSelected({
          ...selected,
          card1: {
            ...selected.card1,
            trueFalse: true,
          },
        });
      } else {
        setSelected({
          ...selected,
          card1: {
            ...selected.card1,
            trueFalse: false,
          },
        });
      }
    }
    // card3
    if (card === "card3") {
      if (selected.card1.trueFalse === false) {
        setSelected({
          ...selected,
          card1: {
            ...selected.card1,
            trueFalse: true,
          },
        });
      } else {
        setSelected({
          ...selected,
          card1: {
            ...selected.card1,
            trueFalse: false,
          },
        });
      }
    }
    // card4
    if (card === "card4") {
      if (selected.card1.trueFalse === false) {
        setSelected({
          ...selected,
          card1: {
            ...selected.card1,
            trueFalse: true,
          },
        });
      } else {
        setSelected({
          ...selected,
          card1: {
            ...selected.card1,
            trueFalse: false,
          },
        });
      }
    }
    // card5
    if (card === "card5") {
      if (selected.card1.trueFalse === false) {
        setSelected({
          ...selected,
          card1: {
            ...selected.card1,
            trueFalse: true,
          },
        });
      } else {
        setSelected({
          ...selected,
          card1: {
            ...selected.card1,
            trueFalse: false,
          },
        });
      }
    }
    // card6
    if (card === "card6") {
      if (selected.card1.trueFalse === false) {
        setSelected({
          ...selected,
          card1: {
            ...selected.card1,
            trueFalse: true,
          },
        });
      } else {
        setSelected({
          ...selected,
          card1: {
            ...selected.card1,
            trueFalse: false,
          },
        });
      }
    }
    // card7
    if (card === "card7") {
      if (selected.card1.trueFalse === false) {
        setSelected({
          ...selected,
          card1: {
            ...selected.card1,
            trueFalse: true,
          },
        });
      } else {
        setSelected({
          ...selected,
          card1: {
            ...selected.card1,
            trueFalse: false,
          },
        });
      }
    }
    // card8
    if (card === "card8") {
      if (selected.card1.trueFalse === false) {
        setSelected({
          ...selected,
          card1: {
            ...selected.card1,
            trueFalse: true,
          },
        });
      } else {
        setSelected({
          ...selected,
          card1: {
            ...selected.card1,
            trueFalse: false,
          },
        });
      }
    }
    // card9
    if (card === "card9") {
      if (selected.card1.trueFalse === false) {
        setSelected({
          ...selected,
          card1: {
            ...selected.card1,
            trueFalse: true,
          },
        });
      } else {
        setSelected({
          ...selected,
          card1: {
            ...selected.card1,
            trueFalse: false,
          },
        });
      }
    }
  };

  // Dynamically update the CSS variable
  // document.documentElement.style.setProperty("--background-color", color);
  // document.documentElement.style.setProperty("--image", `url(${image})`);

  return (
    <>
      {/* <div className={`${StyleCategoryCard.container}`}>
        <div className={`${StyleCategoryCard.padding}`}>
          {type}
          <br/>
          <div className={`${StyleCategoryCard.imageDiv}`}></div>
        </div>
      </div> */}
      <div
        style={{ backgroundColor: `${color}` }}
        className={`${StyleCategoryCard.container} ${borderColor}`}
        onClick={handleClick}
        // style={{ borderColor }}
      >
        <div className={`${StyleCategoryCard.padding}`}>
          {type}
          <br />
          <div
            style={{ backgroundImage: `url(${image}),url(${loading})` }}
            className={`${StyleCategoryCard.imageDiv}`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default CategoryCard ;
