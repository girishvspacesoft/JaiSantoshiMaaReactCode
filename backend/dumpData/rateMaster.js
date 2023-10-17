const mongoose = require("mongoose");
const path = require("path");
const { db } = require("../database/db");
const csv = require("csvtojson");
const RateMaster = require("../models/RateMaster");
const { groupBy, map } = require("lodash");

mongoose.Promise = global.Promise;

mongoose.set("strictQuery", true);

async function init() {
  mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await RateMaster.deleteMany({});
    console.log("Removed existing RateMasters");
    const filePath = path.resolve(process.cwd(), "dumpData", "rateMaster.csv");
    const data = await csv().fromFile(filePath);
    const mainData = groupBy(data, "customerName");
    let rateList = [];
    for (const key in mainData) {
      if (Object.hasOwnProperty.call(mainData, key)) {
        const element = mainData[key];
        const rate = {
          customer: "UNKNOWN",
          customerName: key,
          rates: map(
            element,
            ({ article, station, stationName, rate, ddCharges }) => ({
              article,
              station,
              stationName,
              rate,
              ddCharges,
            })
          ),
          createdBy: "System",
        };
        rateList = [...rateList, rate];
      }
    }
    console.log(rateList.length + " records");
    await RateMaster.insertMany(rateList, {
      ordered: false,
      silent: true,
    });
    console.log("Finished creating RateMasters");
    mongoose.connection.close();
    console.log("Database connection closed");
    process.exit();
  } catch (e) {
    console.log(e);
    process.exit();
  }
}

init();
