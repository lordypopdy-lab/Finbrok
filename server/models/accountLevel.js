const mongoose = require("mongoose");
const { Schema } = mongoose;

const accountUpgradeSchema = new Schema({
    userID: {
        type: String,
        require: true
    },
    accountLevel: {
        type: String,
        require: true
    }

})

const accountUpgradeModel = mongoose.model("accountLevel01", accountUpgradeSchema);
module.exports = accountUpgradeModel;