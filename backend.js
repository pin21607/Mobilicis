const express = require('express');
const router = express.Router();
const cors = require('cors');
const mongoose = require('mongoose');


// Connect to MongoDB database 

// mongoose.connect('mongodb://localhost:27017/', 
//                     {
//                         dbName: "Mobilicis_db", 
//                         useNewUrlParser: true , 
//                         useUnifiedTopology: true, 
//                     },
//                     (err)=>
//                         err ? console.log(err) : console.log("Connected to Database")
//                     );

// Connect to MongoDB database 
(async () => {
    try {
      await mongoose.connect('mongodb://127.0.0.1:27017/Mobilicis_db', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to Database');
    } catch (err) {
      console.log(err);
    }
  })();
  

// Create schema for user data
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  income: Number,
  phone_price: Number,
  car: String,
  city: String
});

// Create model for user data
const User = mongoose.model('User', userSchema);

// Enable CORS for API requests
router.use(cors());

// // API endpoint to fetch users with income lower than $5 USD and have a car of brand “BMW” or “Mercedes”
// router.get('/api/users1', async (req, res) => {
//   try {
//     const users = await User.find({ income: { $lt: 5 }, car: { $in: ['BMW', 'Mercedes'] } });
//     res.json(users);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// // API endpoint to fetch male users with phone price greater than 10,000
// router.get('/api/users2', async (req, res) => {
//     try {
//       const users = await User.find({ gender: 'Male', phone_price: { $gt: 10000 } });
//       res.json(users);
//     } catch (err) {
//       res.json({ message: err });
//     }
//   });

// // API endpoint to fetch users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name
// router.get('/api/users3', async (req, res) => {
//     try {
//       const users = await User.find({ lastName: /^M/, quote: { $gt: 15 }, email: /M$/ });
//       res.json(users);
//     } catch (err) {
//       res.json({ message: err });
//     }
//   });

// // API endpoint to fetch users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit
// router.get('/api/users4', async (req, res) => {
//     try {
//       const users = await User.find({ car: { $in: ['BMW', 'Mercedes', 'Audi'] }, email: { $not: /\d/ } });
//       res.json(users);
//     } catch (err) {
//       res.json({ message: err });
//     }
//   });

// // API endpoint to show the data of top 10 cities which have the highest number of users and their average income
// router.get('/api/users5', async (req, res) => {
//     try {
//       const cities = await User.aggregate([
//         { $group: { _id: '$city', count: { $sum: 1 }, avgIncome: { $avg: '$income' } } },
//         { $sort: { count: -1 } },
//         { $limit: 10 }
//       ]);
//       res.json(cities);
//     } catch (err) {
//       res.json({ message: err });
//     }
//   });

router.get('/api/users1', async (req, res) => {
    try {
      const users = await User.find({ income: { $lt: 5 }, car: { $in: ['BMW', 'Mercedes'] } });
      res.json({ data: users });
    } catch (err) {
      res.json({ message: err });
    }
  });
  
  router.get('/api/users2', async (req, res) => {
    try {
      const users = await User.find({ gender: 'Male', phone_price: { $gt: 10000 } });
      res.json({ data: users });
    } catch (err) {
      res.json({ message: err });
    }
  });
  
  router.get('/api/users3', async (req, res) => {
    try {
      const users = await User.find({ lastName: /^M/, quote: { $gt: 15 }, email: /M$/ });
      res.json({ data: users });
    } catch (err) {
      res.json({ message: err });
    }
  });
  
  router.get('/api/users4', async (req, res) => {
    try {
      const users = await User.find({ car: { $in: ['BMW', 'Mercedes', 'Audi'] }, email: { $not: /\d/ } });
      res.json({ data: users });
    } catch (err) {
      res.json({ message: err });
    }
  });
  
  router.get('/api/users5', async (req, res) => {
    try {
      const cities = await User.aggregate([
        { $group: { _id: '$city', count: { $sum: 1 }, avgIncome: { $avg: '$income' } } },
        { $sort: { count: -1 } },
        { $limit: 10 }
      ]);
      res.json({ data: cities });
    } catch (err) {
      res.json({ message: err });
    }
  });
  

