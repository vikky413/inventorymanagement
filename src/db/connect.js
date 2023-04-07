const mongoose = require("mongoose")

mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://shweta123:shweta123@cluster0.vd3bbee.mongodb.net/?retryWrites=true&w=majority",).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`);
})

module.exports = mongoose