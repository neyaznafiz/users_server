const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())



app.get('/', (req, res) => {
    res.send('The user server is running')  
})

app.all('*', (req, res) => {
    res.send('No route found.')
})

app.listen(port, () => {
    console.log('Listening to port', port);
})

// others error handler
process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
      process.exit(1);
    });
  });