const _ = require('lodash')

module.exports = {
  '#text': data => [
    {
      typing: true,
      text: data.text
    }
  ],
  '#choice': data => [
    {
      typing: true,
      text: data.text,
      quick_replies: data.choices.map(choice => `<${choice.payload}> ${choice.text}`)
    }
  ]
  // '#welcome': data => [
  //   {
  //     typing: true,
  //     text: _.sample(['Hey there!', 'Hello {{user.first_name}}', 'Good day :)'])
  //   },
  //   {
  //     text: "This is just a regular Hello World, I don't do anything ;)",
  //     typing: '2s'
  //   },
  //   {
  //     text: "Make sure to check out the 'index.js' file to see how I work",
  //     typing: true
  //   },
  //   {
  //     wait: '5s'
  //   },
  //   {
  //     text: 'You can say goodbye now',
  //     typing: '1s'
  //   }
  // ]
}
