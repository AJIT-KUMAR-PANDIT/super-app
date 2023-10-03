import StyleCategory from './Category.module.css';
import CategoryJson from '../../datasets/category.json';
import CategoryCard from '../../Components/Category/Card/CategoryCard';

const Category = () => {

// Parse the JSON data
const Category_Data = JSON.parse(JSON.stringify(CategoryJson));

const type=Category_Data.card1.type;
const color=Category_Data.card1.color;
const image=Category_Data.card1.image;



  return (
    <>
    <CategoryCard type={type} color={color} image={image}/>
    </>
  )
}

export default Category