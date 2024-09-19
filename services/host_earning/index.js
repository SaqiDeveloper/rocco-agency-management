const asyncErrorHandler = require("../../utils/asyncErrorHandler");
const { STATUS_CODES, TEXTS } = require("../../config/constants");
const { User } = require("../../models");

const timeReward = (time, diamonds) => {
  let per = 0;
  if (time >= 45) {
    if (diamonds > 0 && diamonds <= 99999) {
      per = 45;
    } else if (diamonds > 10000 && diamonds <= 999999) {
      per = 48;
    } else if (diamonds > 1000000 && diamonds <= 5000000) {
      per = 50;
    } else if (diamonds > 5000000 && diamonds <= 10000000) {
      per = 52;
    } else if (diamonds > 10000000 && diamonds <= 20000000) {
      per = 54;
    } else {
      per = 55;
    }
  }

  return (per / 100) * diamonds;
};

const getComission = (actualReceiving) => {
  let commision = 0;

  if (actualReceiving > 0 && actualReceiving <= 99999) {
    commision = 45;
  } else if (actualReceiving > 100000 && actualReceiving <= 999999) {
    commision = 53;
  } else if (actualReceiving > 1000000 && actualReceiving <= 3000000) {
    commision = 57;
  } else if (actualReceiving > 3000000 && actualReceiving <= 8000000) {
    commision = 60;
  } else if (actualReceiving > 8000000 && actualReceiving <= 15000000) {
    commision = 63;
  } else if (actualReceiving > 15000000 && actualReceiving <= 20000000) {
    commision = 66;
  } else if (actualReceiving > 20000000 && actualReceiving <= 30000000) {
    commision = 68;
  } else if (actualReceiving > 30000000 && actualReceiving <= 50000000) {
    commision = 68;
  } else {
    commision = 68;
  }
  return (commision / 100) * actualReceiving;
};

const setEarning = asyncErrorHandler(async (req, res) => {
     let totalEarning = req.body.totalEarning; 
     let time = req.body.time;
     let timeDiamond = timeReward(time, totalEarning);
     let giftCommision = getComission(totalEarning); 

     let total  = totalEarning + giftCommision + timeDiamond 


     res.status(200).json({
        Total: totalEarning, 
        timeReward: timeDiamond, 
        updated: total
     })
});  



module.exports = {
    setEarning
}
