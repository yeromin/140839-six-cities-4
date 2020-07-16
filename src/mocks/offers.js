const mockData = {
  offerCard: [
    {
      city: `amsterdam`,
      cityCoordinates: [52.38333, 4.9],
      price: 190,
      pricePer: `Night`,
      currency: `$`,
      title: `Apartment in 3-star hotel (#6) Long-Stay discount`,
      id: `23423`,
      type: `apartment`,
      rating: 1,
      badge: `Premium`,
      thumbnail: `https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`,
      images: [
        `https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`,
        `https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80`,
        `https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80`,
        `https://images.unsplash.com/photo-1533044309907-0fa3413da946?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80`,
        `https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80`,
        `https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80`
      ],
      bedrooms: 2,
      people: 3,
      facilities: [`1111Wi-Fi`, `Dishwasher`, `Cabel TV`, `Fridge`],
      description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. \n The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
      ownerAvatar: `../img/avatar-angelina.jpg`,
      hostBadge: `superhost`,
      location: [52.3909553943508, 4.86320698],
      locationNearby: [[52.3909553943508, 4.85309666406198], [52.369553943508, 4.85309666406198], [52.3809553943508, 4.939309666406198]],
      reviews: [
        {
          text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          rating: 3,
          name: `Alex`,
          avatar: `../img/avatar-max.jpg`,
          id: 0,
          date: `April 24 2018`
        },
        {
          text: `It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
          rating: 5,
          name: `Lena`,
          avatar: `../img/avatar-angelina.jpg`,
          id: 3,
          date: `December 2 2000`
        },
        {
          text: `It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
          rating: 5,
          name: `Lena`,
          avatar: `../img/avatar-angelina.jpg`,
          id: 3,
          date: `May 12 2020`
        },
        {
          text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          rating: 3,
          name: `Alex`,
          avatar: `../img/avatar-max.jpg`,
          id: 0,
          date: `April 24 2001`
        },
        {
          text: `It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
          rating: 5,
          name: `Lena`,
          avatar: `../img/avatar-angelina.jpg`,
          id: 3,
          date: `December 2 2007`
        },
        {
          text: `It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
          rating: 5,
          name: `Lena`,
          avatar: `../img/avatar-angelina.jpg`,
          id: 3,
          date: `May 12 2009`
        },
        {
          text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          rating: 3,
          name: `Alex`,
          avatar: `../img/avatar-max.jpg`,
          id: 0,
          date: `April 24 2013`
        },
        {
          text: `It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
          rating: 5,
          name: `Lena`,
          avatar: `../img/avatar-angelina.jpg`,
          id: 3,
          date: `December 2 2010`
        },
        {
          text: `It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
          rating: 5,
          name: `Lena`,
          avatar: `../img/avatar-angelina.jpg`,
          id: 3,
          date: `May 12 2012`
        },
        {
          text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          rating: 3,
          name: `Alex`,
          avatar: `../img/avatar-max.jpg`,
          id: 0,
          date: `April 24 2003`
        },
        {
          text: `It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
          rating: 5,
          name: `Lena`,
          avatar: `../img/avatar-angelina.jpg`,
          id: 3,
          date: `December 2 2010`
        },
        {
          text: `It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
          rating: 5,
          name: `Lena`,
          avatar: `../img/avatar-angelina.jpg`,
          id: 3,
          date: `May 12 2012`
        }
      ]
    },
    {
      city: `amsterdam`,
      cityCoordinates: [52.38333, 4.9],
      price: 100,
      pricePer: `Night`,
      currency: `€`,
      title: `Einzelzimmer in Munich Innenstadt`,
      id: `5234`,
      type: `apartment`,
      rating: 2.3,
      badge: `Premium`,
      thumbnail: `https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`,
      images: [
        `https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`,
        `https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80`,
        `https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`,
        `https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`,
        `https://images.unsplash.com/photo-1567225477277-c8162eb4991d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`,
        `https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`,
      ],
      bedrooms: 1,
      people: 4,
      facilities: [`Dishwasher`, `Cabel TV`, `Fridge`, `222Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`],
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      ownerAvatar: `../img/avatar-angelina.jpg`,
      hostBadge: `superhost`,
      location: [52.369553943508, 4.85309666406198],
      locationNearby: [[52.3909553943508, 4.85309666406198], [52.369553943508, 4.85309666406198], [52.3809553943508, 4.939309666406198]],
      reviews: [
        {
          text: `is the best five star hotel and Ukraine, I spent 10 days during quarantine.
          The front desk staff was absolutely magnificent. Oleksandra and Veronika Gave me first class accommodations, upgraded me to a magnificent room free of charge, always very polite and constantly made sure that my stay was absolutely magnificent.`,
          rating: 5,
          name: `Paul`,
          avatar: `../img/avatar-max.jpg`,
          id: 0,
          date: `October 11 2019`
        },
        {
          text: `Half a year later and still Hilton hotel did not refund the money thats was overcharged. Most likely people like Volcan Amac steal money from customers this way.
          Lovely hotel but reception was rude, lazy and impolite. Check your credit card payment, I was overcharged eur 80 on a eur 400 per night room and despite promises and  credit invoice it was never returned.`,
          rating: 4,
          name: `Angela`,
          avatar: `../img/avatar-angelina.jpg`,
          id: 2,
          date: `September 5 2019`
        }
      ]
    },
    {
      city: `Paris`,
      cityCoordinates: [48.864716, 2.349014],
      price: 100,
      pricePer: `Night`,
      currency: `€`,
      title: `Einzelzimmer in Munich Innenstadt`,
      id: `56234`,
      type: `apartment`,
      rating: 2.3,
      badge: `Premium`,
      thumbnail: `https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`,
      images: [
        `https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`,
        `https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80`,
        `https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`,
        `https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`,
        `https://images.unsplash.com/photo-1567225477277-c8162eb4991d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`,
        `https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`,
      ],
      bedrooms: 1,
      people: 4,
      facilities: [`Dishwasher`, `Cabel TV`, `Fridge`, `222Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`],
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      ownerAvatar: `../img/avatar-angelina.jpg`,
      hostBadge: `superhost`,
      location: [48.863716, 2.389014],
      locationNearby: [[48.864716, 2.349014], [48.874716, 2.359014], [48.844716, 2.339014]],
      reviews: [
        {
          text: `is the best five star hotel and Ukraine, I spent 10 days during quarantine.
          The front desk staff was absolutely magnificent. Oleksandra and Veronika Gave me first class accommodations, upgraded me to a magnificent room free of charge, always very polite and constantly made sure that my stay was absolutely magnificent.`,
          rating: 5,
          name: `Paul`,
          avatar: `../img/avatar-max.jpg`,
          id: 0,
          date: `October 11 2019`
        },
        {
          text: `Half a year later and still Hilton hotel did not refund the money thats was overcharged. Most likely people like Volcan Amac steal money from customers this way.
          Lovely hotel but reception was rude, lazy and impolite. Check your credit card payment, I was overcharged eur 80 on a eur 400 per night room and despite promises and  credit invoice it was never returned.`,
          rating: 4,
          name: `Angela`,
          avatar: `../img/avatar-angelina.jpg`,
          id: 2,
          date: `September 5 2019`
        }
      ]
    },
    {
      city: `Paris`,
      cityCoordinates: [48.864716, 2.349014],
      price: 200,
      pricePer: `Night`,
      currency: `€`,
      title: `Cozy room for singles, couples or friends`,
      id: `55234524`,
      type: `house`,
      rating: 3.2,
      badge: `Premium`,
      thumbnail: `https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
      images: [
        `https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`,
        `https://images.unsplash.com/photo-1497366412874-3415097a27e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
        `https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
        `https://images.unsplash.com/photo-1547340964-f765a5906c59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
        `https://images.unsplash.com/photo-1521483756775-c37af386fce9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
        `https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
      ],
      bedrooms: 4,
      people: 1,
      facilities: [`333Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
      description: `Our spacious 150 square meters apartment is located in the beautiful historical part of Kiev, the most central location. It is a newly renovated apartment with all the new and fresh amenities for your comfortable stay.Flat located on 5th floor (please note there is no elevator), from the windows you can spot hotel "Ukraine" which is located on the Maidan square. 2 mins walk to the National Opera House, 5 mins walk to Khreshatyk Street and Arena City.`,
      ownerAvatar: `../img/avatar-angelina.jpg`,
      hostBadge: `superhost`,
      location: [48.833716, 2.386014],
      locationNearby: [[48.864716, 2.349014], [48.874716, 2.359014], [48.844716, 2.339014]],
      reviews: [
        {
          text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          rating: 3,
          name: `Alla`,
          avatar: `../img/avatar-angelina.jpg`,
          id: 0,
          date: `January 17 2002`
        },
        {
          text: `Good enogh`,
          rating: 1,
          name: `Alex`,
          avatar: `../img/avatar-max.jpg`,
          id: 1,
          date: `October 1 2018`
        },
        {
          text: `Good enogh`,
          rating: 1,
          name: `Alex`,
          avatar: `../img/avatar-max.jpg`,
          id: 1,
          date: `March 12 2020`
        }
      ]
    },
    {
      city: `Cologne`,
      cityCoordinates: [50.935173, 6.953101],
      price: 200,
      pricePer: `Night`,
      currency: `€`,
      title: `Cozy room for singles, couples or friends`,
      id: `52324`,
      type: `house`,
      rating: 3.2,
      badge: `Premium`,
      thumbnail: `https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
      images: [
        `https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`,
        `https://images.unsplash.com/photo-1497366412874-3415097a27e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
        `https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
        `https://images.unsplash.com/photo-1547340964-f765a5906c59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
        `https://images.unsplash.com/photo-1521483756775-c37af386fce9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
        `https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
      ],
      bedrooms: 4,
      people: 1,
      facilities: [`333Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
      description: `Our spacious 150 square meters apartment is located in the beautiful historical part of Kiev, the most central location. It is a newly renovated apartment with all the new and fresh amenities for your comfortable stay.Flat located on 5th floor (please note there is no elevator), from the windows you can spot hotel "Ukraine" which is located on the Maidan square. 2 mins walk to the National Opera House, 5 mins walk to Khreshatyk Street and Arena City.`,
      ownerAvatar: `../img/avatar-angelina.jpg`,
      hostBadge: `superhost`,
      location: [50.935173, 6.953101],
      locationNearby: [[50.935173, 6.953101], [50.945173, 6.963101], [50.93573, 6.95301]],
      reviews: [
        {
          text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          rating: 3,
          name: `Alla`,
          avatar: `../img/avatar-angelina.jpg`,
          id: 0,
          date: `January 17 2002`
        },
        {
          text: `Good enogh`,
          rating: 1,
          name: `Alex`,
          avatar: `../img/avatar-max.jpg`,
          id: 1,
          date: `October 1 2018`
        },
        {
          text: `Good enogh`,
          rating: 1,
          name: `Alex`,
          avatar: `../img/avatar-max.jpg`,
          id: 1,
          date: `March 12 2020`
        }
      ]
    },
    {
      city: `Brussels`,
      cityCoordinates: [50.8505, 4.3488],
      price: 200,
      pricePer: `Night`,
      currency: `€`,
      title: `Cozy room for singles, couples or friends`,
      id: `5523454`,
      type: `house`,
      rating: 3.2,
      badge: `Premium`,
      thumbnail: `https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
      images: [
        `https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`,
        `https://images.unsplash.com/photo-1497366412874-3415097a27e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
        `https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
        `https://images.unsplash.com/photo-1547340964-f765a5906c59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
        `https://images.unsplash.com/photo-1521483756775-c37af386fce9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
        `https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
      ],
      bedrooms: 4,
      people: 1,
      facilities: [`333Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
      description: `Our spacious 150 square meters apartment is located in the beautiful historical part of Kiev, the most central location. It is a newly renovated apartment with all the new and fresh amenities for your comfortable stay.Flat located on 5th floor (please note there is no elevator), from the windows you can spot hotel "Ukraine" which is located on the Maidan square. 2 mins walk to the National Opera House, 5 mins walk to Khreshatyk Street and Arena City.`,
      ownerAvatar: `../img/avatar-angelina.jpg`,
      hostBadge: `superhost`,
      location: [50.850521, 4.348812],
      locationNearby: [[50.820521, 4.318812], [50.8505213, 4.328822], [50.850621, 4.348612]],
      reviews: [
        {
          text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          rating: 3,
          name: `Alla`,
          avatar: `../img/avatar-angelina.jpg`,
          id: 0,
          date: `January 17 2002`
        },
        {
          text: `Good enogh`,
          rating: 1,
          name: `Alex`,
          avatar: `../img/avatar-max.jpg`,
          id: 1,
          date: `October 1 2018`
        },
        {
          text: `Good enogh`,
          rating: 1,
          name: `Alex`,
          avatar: `../img/avatar-max.jpg`,
          id: 1,
          date: `March 12 2020`
        }
      ]
    },
    {
      city: `Hamburg`,
      cityCoordinates: [53.551086, 9.993682],
      price: 200,
      pricePer: `Night`,
      currency: `€`,
      title: `Cozy room for singles, couples or friends`,
      id: `234524`,
      type: `house`,
      rating: 3.2,
      badge: `Premium`,
      thumbnail: `https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
      images: [
        `https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`,
        `https://images.unsplash.com/photo-1497366412874-3415097a27e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
        `https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
        `https://images.unsplash.com/photo-1547340964-f765a5906c59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
        `https://images.unsplash.com/photo-1521483756775-c37af386fce9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
        `https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
      ],
      bedrooms: 4,
      people: 1,
      facilities: [`333Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
      description: `Our spacious 150 square meters apartment is located in the beautiful historical part of Kiev, the most central location. It is a newly renovated apartment with all the new and fresh amenities for your comfortable stay.Flat located on 5th floor (please note there is no elevator), from the windows you can spot hotel "Ukraine" which is located on the Maidan square. 2 mins walk to the National Opera House, 5 mins walk to Khreshatyk Street and Arena City.`,
      ownerAvatar: `../img/avatar-angelina.jpg`,
      hostBadge: `superhost`,
      location: [53.551086, 9.993682],
      locationNearby: [[53.531086, 9.973682], [53.551086, 9.993682], [53.561086, 9.973682]],
      reviews: [
        {
          text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          rating: 3,
          name: `Alla`,
          avatar: `../img/avatar-angelina.jpg`,
          id: 0,
          date: `January 17 2002`
        },
        {
          text: `Good enogh`,
          rating: 1,
          name: `Alex`,
          avatar: `../img/avatar-max.jpg`,
          id: 1,
          date: `October 1 2018`
        },
        {
          text: `Good enogh`,
          rating: 1,
          name: `Alex`,
          avatar: `../img/avatar-max.jpg`,
          id: 1,
          date: `March 12 2020`
        }
      ]
    },
    // {
    //   city: `Dusseldorf`,
    //   cityCoordinates: [51.2217, 6.7762],
    //   price: 200,
    //   pricePer: `Night`,
    //   currency: `€`,
    //   title: `Cozy room for singles, couples or friends`,
    //   id: `5523`,
    //   type: `house`,
    //   rating: 3.2,
    //   badge: `Premium`,
    //   thumbnail: `https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
    //   images: [
    //     `https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`,
    //     `https://images.unsplash.com/photo-1497366412874-3415097a27e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
    //     `https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
    //     `https://images.unsplash.com/photo-1547340964-f765a5906c59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
    //     `https://images.unsplash.com/photo-1521483756775-c37af386fce9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
    //     `https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
    //   ],
    //   bedrooms: 4,
    //   people: 1,
    //   facilities: [`333Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    //   description: `Our spacious 150 square meters apartment is located in the beautiful historical part of Kiev, the most central location. It is a newly renovated apartment with all the new and fresh amenities for your comfortable stay.Flat located on 5th floor (please note there is no elevator), from the windows you can spot hotel "Ukraine" which is located on the Maidan square. 2 mins walk to the National Opera House, 5 mins walk to Khreshatyk Street and Arena City.`,
    //   ownerAvatar: `../img/avatar-angelina.jpg`,
    //   hostBadge: `superhost`,
    //   location: [51.2217, 6.7762],
    //   locationNearby: [[51.2317, 6.8762], [51.2117, 6.7662], [51.2267, 6.7722]],
    //   reviews: [
    //     {
    //       text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    //       rating: 3,
    //       name: `Alla`,
    //       avatar: `../img/avatar-angelina.jpg`,
    //       id: 0,
    //       date: `January 17 2002`
    //     },
    //     {
    //       text: `Good enogh`,
    //       rating: 1,
    //       name: `Alex`,
    //       avatar: `../img/avatar-max.jpg`,
    //       id: 1,
    //       date: `October 1 2018`
    //     },
    //     {
    //       text: `Good enogh`,
    //       rating: 1,
    //       name: `Alex`,
    //       avatar: `../img/avatar-max.jpg`,
    //       id: 1,
    //       date: `March 12 2020`
    //     }
    //   ]
    // },
    {
      city: `Amsterdam`,
      cityCoordinates: [52.38333, 4.9],
      price: 200,
      pricePer: `Night`,
      currency: `€`,
      title: `Cozy room for singles, couples or friends`,
      id: `55234524900`,
      type: `house`,
      rating: 3.2,
      badge: `Premium`,
      thumbnail: `https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
      images: [
        `https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`,
        `https://images.unsplash.com/photo-1497366412874-3415097a27e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
        `https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
        `https://images.unsplash.com/photo-1547340964-f765a5906c59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
        `https://images.unsplash.com/photo-1521483756775-c37af386fce9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
        `https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
      ],
      bedrooms: 4,
      people: 1,
      facilities: [`333Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
      description: `Our spacious 150 square meters apartment is located in the beautiful historical part of Kiev, the most central location. It is a newly renovated apartment with all the new and fresh amenities for your comfortable stay.Flat located on 5th floor (please note there is no elevator), from the windows you can spot hotel "Ukraine" which is located on the Maidan square. 2 mins walk to the National Opera House, 5 mins walk to Khreshatyk Street and Arena City.`,
      ownerAvatar: `../img/avatar-angelina.jpg`,
      hostBadge: `superhost`,
      location: [52.3909553943508, 4.929309666406198],
      locationNearby: [[52.3909553943508, 4.85309666406198], [52.369553943508, 4.85309666406198], [52.3809553943508, 4.939309666406198]],
      reviews: [
        {
          text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          rating: 3,
          name: `Alla`,
          avatar: `../img/avatar-angelina.jpg`,
          id: 0,
          date: `January 17 2002`
        },
        {
          text: `Good enogh`,
          rating: 1,
          name: `Alex`,
          avatar: `../img/avatar-max.jpg`,
          id: 1,
          date: `October 1 2018`
        },
        {
          text: `Good enogh`,
          rating: 1,
          name: `Alex`,
          avatar: `../img/avatar-max.jpg`,
          id: 1,
          date: `March 12 2020`
        }
      ]
    },
    {
      city: `amsterdam`,
      cityCoordinates: [52.38333, 4.9],
      price: 2500,
      pricePer: `Month`,
      currency: `$`,
      title: `Amazing Apartment ✨ Center Munich`,
      id: `4624234`,
      type: `house`,
      rating: 3.8,
      badge: `LUXURY`,
      thumbnail: `https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
      images: [
        `https://images.unsplash.com/photo-1569350080887-dd38c27caad0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
        `https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
        `https://images.unsplash.com/photo-1467987506553-8f3916508521?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
        `https://images.unsplash.com/photo-1528754704377-60e053a66165?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
        `https://images.unsplash.com/photo-1533008093099-e2681382639a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
        `https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
        `https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
      ],
      bedrooms: 3,
      people: 2,
      facilities: [`444Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
      description: `Designers Spacious 2 Level Penthouse with pedestal jumbo jacuzzi hot tub perfectly located next to Khreschatyk facing Arena City. Has 1 king-size bed 1 single bed and 2 sleeping sofas will easily accommodate up to 6 guests. Fully equipped with bathroom amenities and kitchen cutleries. Satellite dish with multiple multilingual channels. Free High speed WiFi internet for browsing and video conference business meetings. Flexible cancellation policy and friendly responsive host! Welcome Aboard!!!`,
      ownerAvatar: `../img/avatar-max.jpg`,
      hostBadge: null,
      location: [52.3809553943508, 4.939309666406198],
      locationNearby: [[52.3909553943503, 4.85309666406195], [52.369553943503, 4.85309666406193], [52.3809553943504, 4.939309666406194]],
      reviews: null
    },
  ]
};

export default mockData;
