import express from 'express'
import { parse } from './services/parser.js'
const app = express()
const port = 3000

/*
|----------------------------------
| App Configuration
|---------------------------------- */
app.set('view engine', 'ejs')

/*--------------------------------- */

app.get('/', async (req, res) => {
  res.render('index', {
    feed: await parse()
  })
})

app.listen(port, () => {
  console.log(`RSS app listening on port ${port}`)
})
