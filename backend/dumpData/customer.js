const mongoose = require("mongoose");
const path = require("path");
const { db } = require("../database/db");
const csv = require("csvtojson");
const Customer = require("../models/Customer");
const { groupBy } = require("lodash");

mongoose.Promise = global.Promise;

mongoose.set("strictQuery", true);

async function init() {
  mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await Customer.deleteMany({});
    console.log("Removed existing Customers");
    const filePath = path.resolve(process.cwd(), "dumpData", "customer.csv");
    const data = await csv().fromFile(filePath);
    const mainData = groupBy(data, "name");
    let customers = [];
    for (const key in mainData) {
      if (Object.hasOwnProperty.call(mainData, key)) {
        const element = mainData[key];
        customers = [...customers, element[0]];
      }
    }
    console.log(customers.length + " records");
    await Customer.insertMany(customers, {
      ordered: false,
      silent: true,
    });
    console.log("Finished creating customers");
    mongoose.connection.close();
    console.log("Database connection closed");
    process.exit();
  } catch (e) {
    console.log(e);
    console.log(
      "eeeeeeeeeeeeeeeeeeeeeerrrrrrrrrrrrrrrrrrrooooooooooooooooooooorrrrrrrrrrrrrrrrrrrrrr"
    );
    console.log(e.message);
    process.exit();
  }
}

init();
