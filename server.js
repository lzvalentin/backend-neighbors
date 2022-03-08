const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

const app = express();
const allRoutes = require('./controllers/index');
const sequelize = require('./config/connection');

//LOCAL
app.use(cors());


//DEPLOYED
// app.use(cors({
//   origin:"heroku deployed react app URL here"
// }))



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(allRoutes);


// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });




  sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
      console.log(`App listening at http://localhost:${PORT} 🚀`);
    });
  });
  
  