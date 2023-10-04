import StyleCategoryCard from "../../../styles/CategoryCard.module.scss";
// import loading from "/images/loading1.svg";

const CategoryCard = (props) => {
  const { type, color, image } = props;

  const loading= "/images/loading1.svg";

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
        className={`${StyleCategoryCard.container}`}
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

export default CategoryCard;
