const fs = require("fs");
const mongoose = require("mongoose");
const app = require('./app');
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const Task = require("./taskroutes");

dotenv.config({ path: "<PATHNAME>" });

// const DB = process.DATABASE.replace(
//   "<PASSWORD>",
//   process.env.DATABASE_PASSWORD
// );

const DB = `mongodb://127.0.0.1:27017/?zlib=disabled&gssapiServiceName=mongodb`
mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(con => {
  console.log('DB connected successfully');
});

app.use(bodyParser.json());
app.use("/task", Task);



app.use((req, res) => {
  res.send("not found")
})

const port = process.env.PORT || 3000 ;
app.listen(port, () =>{
  console.log(`App is running on port ${port}....`)
});