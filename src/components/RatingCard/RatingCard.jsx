import { useState } from 'react'
import { ratingNumbers } from '../../utils/ratingNumbers/ratingNumbers'
import { ThanksCard } from '../ThanksCard/ThanksCard'
import starIcon from '../../assets/icon-star.svg'

export const RatingCard = () => {
  const [rating, setRating] = useState(null)
  const [submit, setSubmit] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (rating) {
      setSubmit(!submit)
    }
  }

  const handleClick = (e) => {
    const { target } = e
    setRating(target.value)
  }

  const radioRatingNumbers = ratingNumbers.map(number => (
    <li key={number} className='RatingCard-itemRatingList'>
      <input type='button' id={`radio${number}`} value={number} onClick={handleClick} className='RatingCard-ratingButton' />
    </li>
  ))

  const ratingClassName = submit ? 'RatingCard RatingCard--displayNone' : 'RatingCard'

  return (
    <>
      <section className={ratingClassName}>
        <div className='RatingCard-iconContainer'>
          <img src={starIcon} alt='Star icon' className='RatingCard-icon' />
        </div>

        <div className='RatingCard-content'>
          <div className='RatingCard-texts'>
            <h2 className='RatingCard-heading2'>How did we do?</h2>

            <p className='RatingCard-paragraph'>
              Please let us know how we did with your support request. All feedback is appreciated
              to help us improve our offering!
            </p>
          </div>

          <form action='#' onSubmit={handleSubmit} className='RatingCard-formRating'>
            <ul className='RatingCard-numbersRatingList'>
              {radioRatingNumbers}
            </ul>
            <button className='RatingCard-button'>Submit</button>
          </form>
        </div>
      </section>

      {submit && <ThanksCard rating={rating} />}
    </>
  )
}
