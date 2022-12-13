import './index.css'

import Category from '../Category'

import Rating from '../Rating'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    updatedCategory,
    updateRating,
    onChangeSearch,

    removeFilter,
  } = props

  const clickFilter = () => {
    removeFilter()
  }

  const onKeydown = event => {
    if (event.key === 'Enter') {
      onChangeSearch(event.target.value)
    }
  }

  return (
    <div className="filters-group-container">
      <input type="search" onKeyDown={onKeydown} placeholder="search" />
      <ul>
        {categoryOptions.map(each => (
          <Category
            categorydetails={each}
            key={each.categoryId}
            updatedCategory={updatedCategory}
          />
        ))}
      </ul>
      <h1 className="heading">Rating</h1>

      <ul>
        {ratingsList.map(each => (
          <Rating
            ratingdetails={each}
            key={each.ratingId}
            updateRating={updateRating}
          />
        ))}
      </ul>
      <button className="button-c" type="button" onClick={clickFilter}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
