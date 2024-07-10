import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";

export default function newMeetupPage() {
  const router = useRouter();
  async function addMeetupHandler(enteredData) {
    try {
      const response = await fetch("/api/new", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          // Authorization: "Bearer " + token,
        },
        body: JSON.stringify(enteredData),
      });
      if (!response.ok) {
        console.log(response);
        throw new Error("An error occured " + response.statusText);
      }
      const data = await response.json();
      alert("Meetup Added Successfully", data);
      router.push("/");
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Organize a new meetup to grow your network with people in your community"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </>
  );
}
