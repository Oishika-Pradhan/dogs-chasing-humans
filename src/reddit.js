require('dotenv').config()

const Snoowrap = require('snoowrap')

const reddit = new Snoowrap({
  userAgent: `/u/${process.env.REDDIT_USERNAME}`,
  clientId: process.env.REDDIT_APP_KEY,
  clientSecret: process.env.REDDIT_APP_SECRET,
  username: process.env.REDDIT_USERNAME,
  password: process.env.REDDIT_PASSWORD
})

reddit.config({ requestDelay: 100, continueAfterRatelimitError: true })

module.exports = { reddit }
