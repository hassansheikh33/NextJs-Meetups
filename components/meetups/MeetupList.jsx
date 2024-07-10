import { useRouter } from "next/router.js";
import MeetupItem from "./MeetupItem.jsx";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  const router = useRouter();

  function newHandler() {
    router.push("/new");
  }

  return (
    <>
      <ul className={classes.list}>
        {props.meetups.map((meetup) => (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
          />
        ))}
        <div>
          <button className={classes.btn} onClick={newHandler}>
            Add a new Meetup
          </button>
        </div>
      </ul>
    </>
  );
}

export default MeetupList;
