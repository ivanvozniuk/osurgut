const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

const options = {
  useNewUrlParser: true,
};

mongoose.connect(uri, options).then(
  () => {
    console.log(`>>> Mongoose connect from ${uri}`);
  },
  err => {
    console.log(`<<< Mongoose error: ${err}`);
  },
);
