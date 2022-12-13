import './index.css'

const Category = props => {
  const {categorydetails, updatedCategory} = props
  const {name, categoryId} = categorydetails

  const clickedCategory = () => {
    updatedCategory(categoryId)
  }
  return (
    <li className="category">
      <button type="button" onClick={clickedCategory} className="button-s">
        <p className="category-p">{name}</p>
      </button>
    </li>
  )
}

export default Category
