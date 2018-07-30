import mongoose from "mongoose";

function getDatabaseUri() {
    if (process.env.NODE_ENV === 'production') return '';
    if (process.env.NODE_ENV === 'test') return 'mogobd://localhost/test';
    return 'mongodb://localhost/basic_server';
}

mongoose.Promise = global.Promise;

mongoose.connect(getDatabaseUri(), { useMongoClient: true})
.then(() => console.log('Database connected.'))
.catch(error => {
    console.log(error.message);
    process.exit(1);
});