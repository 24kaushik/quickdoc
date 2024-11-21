import { connect } from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/quickdoc';

const connectMongo = async () => {
    await connect(MONGO_URI);
    console.log("Connected to Mongo")
}

export default connectMongo;