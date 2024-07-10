import MeetupList from "../components/meetups/MeetupList.jsx";
import Head from "next/head.js";

export default function index(props) {
  if (props.meetups.length === 0) {
    return <h2>Could not fetch meetups</h2>;
  }
  return (
    <>
      <Head>
        <title>Next.js Meetups</title>
        <meta
          name="description"
          content="Home of all kinds of meetups of different communities happening in differenet parts of the wolrd"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </>
  );
}

export const getStaticProps = async () => {
  let data;
  try {
    const response = await fetch("http://localhost:3000/api/meetups");
    if (!response.ok) {
      throw new Error("Could not fetch meetups");
    }
    data = await response.json();
    // const meetups = data.meetups;
    return {
      props: {
        meetups: data.meetups,
      },
      revalidate: 1,
    };
  } catch (err) {
    console.log("Error: ", err.message);
    return {
      props: {
        meetups: [],
      },
    };
  }
};
