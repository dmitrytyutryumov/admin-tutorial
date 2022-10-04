import Chance from 'chance'
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
      icon: require('../../static/images/se.png'),
    },
    {
      country: 'France',
      language: 'French',
      icon: require('../../static/images/fr.png'),
    },
    {
      country: 'Greece',
      language: 'Greek',
      icon: require('../../static/images/gr.png'),
    },
    {
      country: 'Ireland',
      language: 'English',
      icon: require('../../static/images/ie.png'),
    },
    {
      country: 'Iceland',
      language: 'Icelandic',
      icon: require('../../static/images/is.png'),
    },
    {
      country: 'Italy',
      language: 'Italian',
      icon: require('../../static/images/it.png'),
    },
    {
      country: 'Luxemburg',
      language: 'French',
      icon: require('../../static/images/lu.png'),
    },
    {
      country: 'Malta',
      language: 'Maltese',
      icon: require('../../static/images/mt.png'),
    },
    {
      country: 'Portugal',
      language: 'Portuguese',
      icon: require('../../static/images/pt.png'),
    },
    {
      country: 'Sweden',
      language: 'Swedish',
      icon: require('../../static/images/se.png'),
    },
    {
      country: 'Uruguay',
      language: 'Spanish',
      icon: require('../../static/images/uy.png'),
    },
  ],
})

chance.mixin({
  user: function () {
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

const getUsers = (usersNumber = 20) => {
  return Array.from({ length: usersNumber }).map(() => chance.user())
}

const getColumns = () => {
  return [
    'Name',
    'Language',
    'Country',
    'Game Name',
    'Bought',
    'Bank Balance',
    'Rating',
    'Total Winnings',
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
}
export { chance, getUsers, getColumns }
