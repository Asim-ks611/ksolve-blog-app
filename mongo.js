// mongodb://localhost:27017
const mongoose = require("mongoose");
const MONGO_URL = `mongodb://localhost:27017/advBlogApp`;

//////////////////////
mongoose.connection.once("open", () => {
  console.log(`MongoDB connection is ready`);
});
mongoose.connection.on("error", (err) => {
  console.error(err);
});

function mongoConnect() {
   mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

async function mongoDisconnect(){
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect, 
  mongoDisconnect,
};