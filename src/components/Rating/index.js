import './index.css'

const Rating = props => {
  const {ratingdetails, updateRating} = props
  const {imageUrl, ratingId} = ratingdetails

  const onClickrating = () => {
    updateRating(ratingId)
  }

  return (
    <li className="category-u">
      <img
        src={imageUrl}
        alt={`rating ${ratingId}`}
        className="image"
        onClick={onClickrating}
      />
      <p className="category-r"> & up</p>
    </li>
  )
}

export default Rating
