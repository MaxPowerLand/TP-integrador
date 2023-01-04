const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect(
        'mongodb://127.0.0.1:27017/turbio_market', 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },    
        function (err, res) {
            if  (err) {
                console.log('Error Connection', err);
            }
            else{
                console.log('Success Connection');
            }
    });
}

module.exports = dbConnect;