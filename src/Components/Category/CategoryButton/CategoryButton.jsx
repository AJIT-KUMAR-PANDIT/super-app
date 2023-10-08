import StyleCategoryButton from "./CategoryButton.module.css";

const CategoryButton = ({ title, onClick, isVisible }) => {
  return (
    <div className={`${StyleCategoryButton.container}`}>
      <div className={`${StyleCategoryButton.flex}`}>
        <div>
          {title}
          </div>
        &nbsp; &nbsp; &nbsp;
        <div className={`${StyleCategoryButton.close}`}>&#x2715;</div>
      </div>
    </div>
  )
}

export default CategoryButton