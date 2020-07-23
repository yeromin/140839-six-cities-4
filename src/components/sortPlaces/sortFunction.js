const sortOffers = (sortType, offers) => {

  // make a copy of the original array.
  // TODO: do not rerender Map!!!
  const preparedOffers = offers.slice(0);
  switch (sortType) {
    case `popular`:
      return preparedOffers;

    case `low-to-high`:
      return preparedOffers.sort((a, b) => a.price - b.price);

    case `high-to-low`:
      return preparedOffers.sort((a, b) => a.price - b.price).reverse();

    case `top-rated-first`:
      return preparedOffers.sort((a, b) => a.rating - b.rating).reverse();

    default:
      return preparedOffers;
  }
};

export default sortOffers;
