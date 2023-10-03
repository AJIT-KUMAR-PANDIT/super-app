import StyleCategoryCard from "../../../styles/CategoryCard.module.scss";

const CategoryCard = (props) => {
  const { type, color, image } = props;

  // Dynamically update the CSS variable
  document.documentElement.style.setProperty("--background-color", color);
  document.documentElement.style.setProperty("--image", `url(${image})`);
console.log(image);
console.log(`url(${image})`);
  return (
    <div className={`${StyleCategoryCard.container}`}>
      {type}
      <div className={`${StyleCategoryCard.imageDiv}`}>dhjdf defaultdf</div>
    </div>
  );
};

export default CategoryCard;
