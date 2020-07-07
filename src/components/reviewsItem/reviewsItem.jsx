import React from 'react';

const ReviewsItem = (props) => {

  const {reviews} = props;

  return (
    <React.Fragment>
      {reviews.map((curr, i) => (

        <li key={i + curr.id} className="reviews__item">
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src={curr.avatar} width={54} height={54} alt="Reviews avatar" />
            </div>
            <span className="reviews__user-name">
              {curr.name}
            </span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{width: `${(Math.round(curr.rating) * 100) / 5}%`}} />
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="reviews__text">
              {curr.text}
            </p>
            <time className="reviews__time" dateTime="2019-04-24">{curr.date}</time>
          </div>
        </li>
      ))}

    </React.Fragment>
  );
};

export default ReviewsItem;
