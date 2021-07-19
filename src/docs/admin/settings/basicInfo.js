module.exports = {
  openapi: "3.0.3", // present supported openapi version
  info: {
    title: "Stayfolio Admin API", // short title.
    description: [
      "Stayfolio Admin API DOCS - swagger example",
      "Token for dev.stayfolio.co.kr: <br />JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJzZWNyZXQiOiJSYVdPckdFdmZIcmk1N2h6SmI4NiIsImV4cCI6MTY1NTgwMjY4OCwiaWF0IjoiMjAyMS0wNi0yMSAxODoxMToyOCArMDkwMCJ9.S29zECoVapdQHzIxsTUT8u7bwRQGJ0yx-WMMEtW2kd4",
      "Token for sta.stayfolio.co.kr: <br />JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJzZWNyZXQiOiJSYVdPckdFdmZIcmk1N2h6SmI4NiIsImV4cCI6MTY1NTgwMjU5NiwiaWF0IjoiMjAyMS0wNi0yMSAxODowOTo1NiArMDkwMCJ9.99vVDy-6Sxp-qhrN5WgaNt1NH1G8Pc8IC82cDumBtV8",
      "Token for admin.stayfolio.com: <br />JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJzZWNyZXQiOiI3MWI5NEliTUhPMWcwOTdHc0k5bSIsImV4cCI6MTY1NTgwMjgwMywiaWF0IjoiMjAyMS0wNi0yMSAxODoxMzoyMyArMDkwMCJ9.BZ2rqFzVtr_xMcjKakO01z50wyYg8k9N_OlEwnS9c58",
    ].join("<br /><br />"), //  desc.
    version: "1.0.0", // version number
    contact: {
      name: "stayfolio", // your name
      email: "stayfolio@stayfolio.com", // your email
      url: "https://stayfolio.com", // your website
    },
  },
  security: [
    {
      JWTauth: [],
    }
  ]
};