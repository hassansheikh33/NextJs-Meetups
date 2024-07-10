import React from "react";
import classes from "./meetupDetail.module.css";
import { useRouter } from "next/router";

export default function MeetupDetail(props) {
  const router = useRouter();
  const id = router.query.meetupId;
  return (
    <div className={classes.container}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <p className={classes.address}>{props.address}</p>
      <p>{props.description}</p>
    </div>
  );
}
