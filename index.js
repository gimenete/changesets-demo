
import express from "express"
import { sendDiscordNotification } from './notification.js'
const app = express()
const port = +process.env.PORT || 9000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})


const testMessage = process.env.TEST_MESSAGE;
if (testMessage) {
  sendDiscordNotification(testMessage);
}
