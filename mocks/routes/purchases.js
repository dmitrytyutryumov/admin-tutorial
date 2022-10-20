const Chance = require('chance')
const chance = new Chance()

chance.mixin({
  games: [
    'Downfall',
    'Ghosts',
    'Shogi',
    'Daldos',
    'Guess Who?',
    'Rithmomachy',
    'Checkers',
    'Hijara',
    'Agon',
  ],
})

chance.mixin({
  countries: [
    {
      country: 'Spanish',
      language: 'Spanish',
      icon: 'https://flags.fmcdn.net/data/flags/mini/se.png',
    },
    {
      country: 'France',
      language: 'French',
      icon: 'https://flags.fmcdn.net/data/flags/mini/fr.png',
    },
    {
      country: 'Greece',
      language: 'Greek',
      icon: 'https://flags.fmcdn.net/data/flags/mini/gr.png',
    },
    {
      country: 'Ireland',
      language: 'English',
      icon: 'https://flags.fmcdn.net/data/flags/mini/ie.png',
    },
    {
      country: 'Iceland',
      language: 'Icelandic',
      icon: 'https://flags.fmcdn.net/data/flags/mini/is.png',
    },
    {
      country: 'Italy',
      language: 'Italian',
      icon: 'https://flags.fmcdn.net/data/flags/mini/it.png',
    },
    {
      country: 'Luxemburg',
      language: 'French',
      icon: 'https://flags.fmcdn.net/data/flags/mini/lu.png',
    },
    {
      country: 'Malta',
      language: 'Maltese',
      icon: 'https://flags.fmcdn.net/data/flags/mini/mt.png',
    },
    {
      country: 'Portugal',
      language: 'Portuguese',
      icon: 'https://flags.fmcdn.net/data/flags/mini/pt.png',
    },
    {
      country: 'Sweden',
      language: 'Swedish',
      icon: 'https://flags.fmcdn.net/data/flags/mini/se.png',
    },
    {
      country: 'Uruguay',
      language: 'Spanish',
      icon: 'https://flags.fmcdn.net/data/flags/mini/uy.png',
    },
  ],
})

chance.mixin({
  purchase: function () {
    const country = chance.pickone(chance.countries)
    const game = chance.pickone(chance.games)
    const montlyWinnings = Array.from({ length: 12 }).map(() =>
      chance.floating({ min: 100, max: 1000, fixed: 3 })
    )
    const toDollar = (value) => `$${value}`

    return {
      name: chance.name(),
      language: country.language,
      country: [country.icon, country.country],
      gameName: game,
      bought: chance.bool(),
      bankBalance: toDollar(chance.floating({ min: 100, max: 1000, fixed: 3 })),
      rating: chance.integer({ min: 1, max: 5 }),
      totalWinnings: toDollar(
        montlyWinnings
          .reduce((month, nextMonth) => month + nextMonth, 0)
          .toFixed(3)
      ),
      jan: toDollar(montlyWinnings[0]),
      feb: toDollar(montlyWinnings[1]),
      mar: toDollar(montlyWinnings[2]),
      apr: toDollar(montlyWinnings[3]),
      may: toDollar(montlyWinnings[4]),
      jun: toDollar(montlyWinnings[5]),
      jul: toDollar(montlyWinnings[6]),
      aug: toDollar(montlyWinnings[7]),
      sep: toDollar(montlyWinnings[8]),
      oct: toDollar(montlyWinnings[9]),
      nov: toDollar(montlyWinnings[10]),
      dec: toDollar(montlyWinnings[11]),
    }
  },
})

const getPurchases = (purchasesNumber = 20) => {
  return Array.from({ length: purchasesNumber }).map(() => chance.purchase())
}

const getColumns = () => {
  return [
    { verbose: 'Name', id: 'name' },
    { verbose: 'Language', id: 'language' },
    { verbose: 'Country', id: 'country' },
    { verbose: 'Game Name', id: 'gameName' },
    { verbose: 'Bought', id: 'bought' },
    { verbose: 'Bank Balance', id: 'bankBalance' },
    { verbose: 'Rating', id: 'rating' },
    { verbose: 'Total Winnings', id: 'totalWinnings' },
    { verbose: 'Jan', id: 'jan' },
    { verbose: 'Feb', id: 'feb' },
    { verbose: 'Mar', id: 'mar' },
    { verbose: 'Apr', id: 'apr' },
    { verbose: 'May', id: 'may' },
    { verbose: 'Jun', id: 'jun' },
    { verbose: 'Jul', id: 'jul' },
    { verbose: 'Aug', id: 'aug' },
    { verbose: 'Sep', id: 'sep' },
    { verbose: 'Oct', id: 'oct' },
    { verbose: 'Nov', id: 'nov' },
    { verbose: 'Dec', id: 'dec' },
  ]
}

module.exports = [
  {
    id: 'get-purchases', // route id
    url: '/api/purchases', // url in express format
    method: ['GET'], // HTTP methods
    variants: [
      {
        id: 'success', // id of the variant
        type: 'json', // variant type
        options: {
          status: 200,
          body: getPurchases(),
        },
      },
    ],
  },
  {
    id: 'get-purchases-meta', // route id
    url: '/api/purchases/meta', // url in express format
    method: ['GET'], // HTTP methods
    variants: [
      {
        id: 'success', // id of the variant
        type: 'json', // variant type
        options: {
          status: 200,
          body: getColumns(),
        },
      },
    ],
  },
]
