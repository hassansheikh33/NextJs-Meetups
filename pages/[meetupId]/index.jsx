import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/meetupDetail/MeetupDetail";
import Head from "next/head";

export default function MeetupDetailPage(props) {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
}

export const getStaticProps = async (context) => {
  const id = context.params.meetupId;
  const client = await MongoClient.connect(
    "mongodb+srv://new-user123:1iRe0gw3WvaUoMeu@cluster0.xbj534j.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const meetupCollection = db.collection("meetupCollection");
  const meetup = await meetupCollection.findOne({
    _id: new ObjectId(id),
  });
  client.close();
  return {
    props: {
      meetupData: {
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
        image: meetup.image,
        id: meetup._id.toString(),
      },
    },
    revalidate: 3600,
  };
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://new-user123:1iRe0gw3WvaUoMeu@cluster0.xbj534j.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const meetupCollection = db.collection("meetupCollection");
  const meetupsIds = await meetupCollection
    .find({}, { projection: { _id: 1 } })
    .toArray();
  client.close();
  const paths = [];
  meetupsIds.map((meetup) => {
    paths.push({ params: { meetupId: meetup._id.toString() } });
  });

  return {
    paths,
    fallback: false,
  };
};
