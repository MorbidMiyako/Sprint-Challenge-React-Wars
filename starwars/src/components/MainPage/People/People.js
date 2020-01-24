import React from "react";
import PersonShort from "./PersonShort/PersonShort"

export default function People(props) {
  console.log("this is People Props", props.people)
  if (props.people) {
    props.people.map(function (personShort) {
      return (
        <>
          <PersonShort personShort={props.people} />
        </>
      )
    })
  }
  else {
    return (
      <h1>Hey</h1>
    )
  }
}
