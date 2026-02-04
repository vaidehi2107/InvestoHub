const mongoose = require("mongoose");
const Stock = require("./models/stock");
const User = require("./models/user");

mongoose.connect("mongodb://127.0.0.1:27017/marketSim");

async function seed() {
  await Stock.deleteMany({});
  await User.deleteMany({});

  await Stock.insertMany([
  { symbol: "TCS", name: "Tata Consultancy Services", price: 3800 },
  { symbol: "INFY", name: "Infosys", price: 1600 },
  { symbol: "WIPRO", name: "Wipro", price: 480 },
  { symbol: "HCL", name: "HCL Technologies", price: 1450 },
  { symbol: "TECHM", name: "Tech Mahindra", price: 1250 },

  { symbol: "RELI", name: "Reliance Industries", price: 2900 },
  { symbol: "ONGC", name: "ONGC", price: 260 },
  { symbol: "IOC", name: "Indian Oil Corporation", price: 165 },
  { symbol: "BPCL", name: "BPCL", price: 520 },

  { symbol: "HDFC", name: "HDFC Bank", price: 1500 },
  { symbol: "ICICI", name: "ICICI Bank", price: 980 },
  { symbol: "SBI", name: "State Bank of India", price: 720 },
  { symbol: "AXIS", name: "Axis Bank", price: 1120 },
  { symbol: "KOTAK", name: "Kotak Mahindra Bank", price: 1850 },

  { symbol: "ITC", name: "ITC Limited", price: 420 },
  { symbol: "HUL", name: "Hindustan Unilever", price: 2550 },
  { symbol: "NESTLE", name: "Nestle India", price: 24500 },
  { symbol: "DABUR", name: "Dabur India", price: 540 },

  { symbol: "MARUTI", name: "Maruti Suzuki", price: 10800 },
  { symbol: "TATAMOT", name: "Tata Motors", price: 960 },
  { symbol: "M&M", name: "Mahindra & Mahindra", price: 1750 },
  { symbol: "BAJAJ", name: "Bajaj Auto", price: 7600 },

  { symbol: "LT", name: "Larsen & Toubro", price: 3650 },
  { symbol: "ADANI", name: "Adani Enterprises", price: 3150 },
  { symbol: "ULTRACEM", name: "UltraTech Cement", price: 10300 },
  { symbol: "JSW", name: "JSW Steel", price: 880 }
  ]);


  await User.create({ name: "Demo User" });

  console.log("Seeded DB");
  mongoose.connection.close();
}

seed();
