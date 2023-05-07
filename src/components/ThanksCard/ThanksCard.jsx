import thanksIcon from '../../assets/illustration-thank-you.svg'

export const ThanksCard = ({ rating }) => {
  return (
    <section className='ThanksCard'>
      <div className='ThanksCard-iconContainer'>
        <img src={thanksIcon} alt='Thanks icon' className='ThanksCard-icon' />

        <span className='ThanksCard-selectRating'>
          You selected {rating} out of 5
        </span>
      </div>

      <div className='ThanksCard-content'>
        <h2 className='ThanksCard-heading2'>Thank you!</h2>
        <p className='ThanksCard-paragraph'>
          We appreciate you taking the time to give a rating. If you ever need more support,
          don’t hesitate to get in touch!
        </p>
      </div>
    </section>
  )
}
