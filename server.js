// defines env
const path = require('path');
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({
    path: path.resolve(__dirname, '.env')
  });
}

const express = require('express')
const app = express()
 
const PORT = process.env.PORT || 3001;

// static production
if (process.env.NODE_ENV === 'production') {
    const clientBuildPath = path.join(__dirname, '..', 'menu', 'build');
    console.log(`Client build path: ${clientBuildPath}\n`);
    app.use(express.static(clientBuildPath));
  }


// catch all to serve up react
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../menu_checkbox/menu/build/index.html'));
  });


app.get('/', function (req, res) {
  res.send('Server working')
})
 
app.listen(PORT, ()=>{
    console.log(`server listening on ${PORT}`)
})