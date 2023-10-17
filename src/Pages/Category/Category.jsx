import StyleCategory from "./Category.module.css";
import CategoryJson from "../../datasets/category.json";
import CategoryCard from "../../Components/Category/Card/CategoryCard";
import { useState, useEffect } from "react";
import CategoryButton from "../../Components/Category/CategoryButton/CategoryButton";
import React from "react";
import { useNavigate } from 'react-router-dom';

const Category = () => {
  const navigate = useNavigate();
  const [reL, setreL]=useState();
  const cardSelectedStored = localStorage.getItem("card");
  const [cardSelected,setCardSelected] = useState(JSON.parse(cardSelectedStored));
  const [showButton, setShowButton] = useState();
  const Category_Data = JSON.parse(JSON.stringify(CategoryJson));
 
  // const cardSelected = JSON.parse(JSON.stringify(cardSelectedJsonStored));
  // const cardSelected=cardSelectedq.card1;
  // const [cardSelected, setCardSelected] = useState(localStorage.getItem("card") || "");  
  
  // setCardSelected(JSON.parse(cardSelectedStored));
  // console.log(jsonObject);
  const reload = () => {
    window.location.reload();
  };

  // const ToggleButton = () => {
    
  //   setShowButton(prevShowButton => !prevShowButton);
  //   // useEffect(reload());
    
  //   // navigate('/category');
  //   // window.location.reload();
  //   // return null;
    
  // // useEffect(() => {
    
  // //   navigate('/');
  // // }, []);  
  // };


  const ToggleButton = () => {
    setShowButton(prevShowButton => !prevShowButton);
  };

  useEffect(() => {
    if (cardSelected.card1.trueFalse) {
      setShowButton(true);
      setShowButton(prevShowButton => !prevShowButton);
    } else {
      setShowButton(false);
      setShowButton(prevShowButton => !prevShowButton);
    }
  }, [cardSelected,ToggleButton]);




  const [card1, setCard1] = useState(`showButton && <CategoryButton title={cardSelected.card1.type} onClick={ToggleButton} />`);
 

  

  return (
    <>
    {/* {console.log("xkgjgjhg",cardSelected.card1.trueFalse)} */}




      <div className={`${StyleCategory.container}`}>
        <div className={`${StyleCategory.FiftyPercent}`}>
          <div className={`${StyleCategory.leftSide}`}>
            <div className={StyleCategory["super-app-text"]}>Super app</div>
            <div className={StyleCategory["text1"]}>
              Choose your
              <br /> entertainment
              <br /> category
            </div>
            <div>
              <div>
                {/* <CategoryButton title={"sj"} />
                {
                (cardSelected.card1.trueFalse===true)?(
                  <CategoryButton title={cardSelected.card1.type} />
                )

                :(
                  null
                )
                   } */}
                      {/* {card1CLicked } */}
                      {card1}

              </div>
              <br />
              <div>
                <img src="./images/Vector (2).svg"  alt=""/>
                <span className={StyleCategory["text2"]}>
                  &nbsp;Minimum 3 category required
                </span>
              </div>
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
                card={"card1"}
                // onClick={() => {console.log("jhj")}}
                onChange={ToggleButton}                 
              />
              &nbsp; &nbsp; &nbsp;
              <CategoryCard
                type={Category_Data.card2.type}
                color={Category_Data.card2.color}
                image={Category_Data.card2.image}
                card={"card2"}
                // onClick={
                //   handelCard1
                // }
                
              />
              &nbsp; &nbsp; &nbsp;
              <CategoryCard
                type={Category_Data.card3.type}
                color={Category_Data.card3.color}
                image={Category_Data.card3.image}
                card={"card3"}
                onClick={() => {
                  // visibleButton.push("romance");
                }}
              />
            </div>
            <br />
            <div className={`${StyleCategory.Flex}`}>
              <CategoryCard
                type={Category_Data.card4.type}
                color={Category_Data.card4.color}
                image={Category_Data.card4.image}
                card={"card4"}
                onClick={() => {
                  // visibleButton.push("thriller");
                }}
              />
              &nbsp; &nbsp; &nbsp;
              <CategoryCard
                type={Category_Data.card5.type}
                color={Category_Data.card5.color}
                image={Category_Data.card5.image}
                card={"card5"}
                onClick={() => {
                  // visibleButton.push("western");
                }}
              />
              &nbsp; &nbsp; &nbsp;
              <CategoryCard
                type={Category_Data.card6.type}
                color={Category_Data.card6.color}
                image={Category_Data.card6.image}
                card={"card6"}
                onClick={() => {
                  // visibleButton.push("horror");
                }}
              />
            </div>
            <br />
            <div className={`${StyleCategory.Flex}`}>
              <CategoryCard
                type={Category_Data.card7.type}
                color={Category_Data.card7.color}
                image={Category_Data.card7.image}
                card={"card7"}
                onClick={() => {
                  // visibleButton.push("fantasy");
                }}
              />
              &nbsp; &nbsp; &nbsp;
              <CategoryCard
                type={Category_Data.card8.type}
                color={Category_Data.card8.color}
                image={Category_Data.card8.image}
                card={"card8"}
                onClick={() => {
                  // visibleButton.push("music");
                }}
              />
              &nbsp; &nbsp; &nbsp;
              <CategoryCard
                type={Category_Data.card9.type}
                color={Category_Data.card9.color}
                image={Category_Data.card9.image}
                card={"card9"}
                onClick={() => {
                  // visibleButton.push("fiction");
                }}
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