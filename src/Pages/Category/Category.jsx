import StyleCategory from "./Category.module.css";
import CategoryJson from "../../datasets/category.json";
import CategoryCard from "../../Components/Category/Card/CategoryCard";
// import { useState } from "react";

const Category = () => {
  const Category_Data = JSON.parse(JSON.stringify(CategoryJson));
  // const [isActive, setIsActive] = useState(false);

  // const handleToggle = () => {
  //   setIsActive(prevIsActive => !prevIsActive);
  // };
  return (
    <>
      <div className={`${StyleCategory.container}`}>
        <div className={`${StyleCategory.FiftyPercent}`}>
          <div className={`${StyleCategory.leftSide}`}>
            <div className={StyleCategory["super-app-text"]}>Super app</div>
            <div className={StyleCategory["text1"]}>
              Choose your
              <br /> entertainment
              <br /> category
            </div>
          </div>
        </div>
        <div className={`${StyleCategory.FiftyPercent}`}>
          <div className={`${StyleCategory.rightSide}`}>
            <div className={`${StyleCategory.Flex}`}>
              <CategoryCard
                type={Category_Data.card1.type}
                color={Category_Data.card1.color}
                image={Category_Data.card1.image}

              //  onClick={handleToggle}

                // onClick={() => {
                //   // className=`${StyleCategory.active}`
                // }}
              />
              &nbsp; &nbsp; &nbsp;
              <CategoryCard
                type={Category_Data.card2.type}
                color={Category_Data.card2.color}
                image={Category_Data.card2.image}
              />
              &nbsp; &nbsp; &nbsp;
              <CategoryCard
                type={Category_Data.card3.type}
                color={Category_Data.card3.color}
                image={Category_Data.card3.image}
              />
            </div>
            <br />
            <div className={`${StyleCategory.Flex}`}>
              <CategoryCard
                type={Category_Data.card4.type}
                color={Category_Data.card4.color}
                image={Category_Data.card4.image}
              />
              &nbsp; &nbsp; &nbsp;
              <CategoryCard
                type={Category_Data.card5.type}
                color={Category_Data.card5.color}
                image={Category_Data.card5.image}
              />
              &nbsp; &nbsp; &nbsp;
              <CategoryCard
                type={Category_Data.card6.type}
                color={Category_Data.card6.color}
                image={Category_Data.card6.image}
              />
            </div>
            <br />
            <div className={`${StyleCategory.Flex}`}>
              <CategoryCard
                type={Category_Data.card7.type}
                color={Category_Data.card7.color}
                image={Category_Data.card7.image}
              />
              &nbsp; &nbsp; &nbsp;
              <CategoryCard
                type={Category_Data.card8.type}
                color={Category_Data.card8.color}
                image={Category_Data.card8.image}
              />
              &nbsp; &nbsp; &nbsp;
              <CategoryCard
                type={Category_Data.card9.type}
                color={Category_Data.card9.color}
                image={Category_Data.card9.image}
              />
            </div>
          
          <button className={`${StyleCategory.nextButton}`}>Next Page</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
