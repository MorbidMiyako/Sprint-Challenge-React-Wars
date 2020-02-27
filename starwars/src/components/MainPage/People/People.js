import React from "react";
import PersonShort from "./PersonShort/PersonShort"

export default function People(props) {
  console.log("this is People Props", props.people)
  props.people.map(personShort => {
    return (
      <PersonShort personShort={personShort} />
    )
  })
}
