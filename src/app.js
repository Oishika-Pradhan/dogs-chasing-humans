const { reddit } = require('./reddit')
const snoostorm = require('snoostorm')

const client = new snoostorm(reddit)

const streamConfig = {
  subreddit: 'Dogfree',
  results: 5
}

const comments = client.CommentStream(streamConfig)

comments.on('comment', comment => {
  if (comment.body.includes(`I don't like dogs`)) {
    reddit
      .getComment(comment.id)
      .reply(`I *understand*. They chase humans.`)
      .catch(err => {
        console.log(err)
      })
  }
})
