import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const client = await MongoClient.connect(
    "mongodb+srv://new-user123:1iRe0gw3WvaUoMeu@cluster0.xbj534j.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const meetupCollection = db.collection("meetupCollection");
  const meetupsArray = await meetupCollection.find().toArray();
  client.close();
  const meetups = meetupsArray.map((meetup) => ({
    title: meetup.title,
    id: meetup._id.toString(),
    address: meetup.address,
    image: meetup.image,
  }));
  res.status(200).json({ meetups });
}
