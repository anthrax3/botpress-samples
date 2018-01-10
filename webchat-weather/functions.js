const _ = require('lodash')
const axios = require('axios')

module.exports = {
  parseCity: async (state, event) => {
    let city = _.get(event, 'nlp.parameters.geo-city') || ''
    city = city.replace(/ city/i, '')

    if (city.length) {
      const response = await axios
        .get('http://api.openweathermap.org/data/2.5/weather', {
          params: {
            q: city,
            units: 'metric',
            APPID: process.env.WEATHER_API_KEY
          }
        })
        .catch(err => 'not available')

      return Object.assign({}, state, {
        validCity: true,
        city: city,
        temperature: response.data.main.temp + '°C'
      })
    }

    return Object.assign({}, state, { validCity: false })
  }
}
