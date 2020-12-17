import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
const uri = 'mongodb://localhost:27017/masspay-v2-staging';
async function tr1y() {
  try {
    const client = await MongoClient.connect(uri, { useNewUrlParser: true });
    console.log('client success');
    let collection = await client
      .db('masspay-v2-staging')
      .collection('clients');
    console.log('collection success', collection);
    let data = await collection.find({ client_code: 1079 });
    console.log('data success', data);
    const result = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log('this is the result');
    console.log(result);
  } catch (error) {
    console.log('error occurred while connecting to mongodb database');
  }
}
tr1y();
