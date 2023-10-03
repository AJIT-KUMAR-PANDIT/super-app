import StyleCategory from "./Category.module.css";
import CategoryJson from "../../datasets/category.json";
import CategoryCard from "../../Components/Category/Card/CategoryCard";

const Category = () => {
  // Parse the JSON data
  const Category_Data = JSON.parse(JSON.stringify(CategoryJson));


  return (
    <>
      <div className={`${StyleCategory.container}`}>
        <div className={`${StyleCategory.FiftyPercent}`}>
          <div className={StyleCategory["super-app-text"]}>Super app</div>
          <div className={StyleCategory["text1"]}>Choose your<br/> entertainment<br/> category</div>
        </div>
        <div className={`${StyleCategory.FiftyPercent},${StyleCategory.Flex}`}>
          <CategoryCard type={Category_Data.card1.type} color={Category_Data.card1.color} image={Category_Data.card1.image} />
          <CategoryCard type={Category_Data.card2.type} color={Category_Data.card2.color} image={Category_Data.card2.image} />
          <CategoryCard type={Category_Data.card3.type} color={Category_Data.card3.color} image={Category_Data.card3.image} />
        </div>
      </div>
    </>
  );
};

export default Category;
