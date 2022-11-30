const getUser = () => {
  return {
    id: 1,
    fullName: 'User Auth',
  }
}

module.exports = [
  {
    id: 'auth-register', // route id
    url: '/api/register', // url in express format
    method: ['POST'], // HTTP methods
    variants: [
      {
        id: 'success', // id of the variant
        type: 'json', // variant type
        options: {
          status: 200,
          body: getUser(),
        },
      },
    ],
  },
  {
    id: 'auth-login', // route id
    url: '/api/login', // url in express format
    method: ['POST'], // HTTP methods
    variants: [
      {
        id: 'success', // id of the variant
        type: 'json', // variant type
        options: {
          status: 200,
          body: getUser(),
        },
      },
      {
        id: 'denied', // id of the variant
        type: 'status', // variant type
        options: {
          status: 403,
        },
      },
    ],
  },
  {
    id: 'auth-get-user', // route id
    url: '/api/user/:id', // url in express format
    method: ['GET'], // HTTP methods
    variants: [
      {
        id: 'success', // id of the variant
        type: 'json', // variant type
        options: {
          status: 200,
          body: getUser(),
        },
      },
    ],
  },
]
