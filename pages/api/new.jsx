//URL (POST only): /api/new
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    //&& req.headers.include('Authorization')
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://new-user123:1iRe0gw3WvaUoMeu@cluster0.xbj534j.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db = client.db();
    const meetupCollection = db.collection("meetupCollection");
    const result = await meetupCollection.insertOne(data);
    console.log("result: ", result);
    client.close();
    res.status(200).json({ message: "successfully added a meetup!" });
  }
}
