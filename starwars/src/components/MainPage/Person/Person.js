import React from "react";

export default function Person(props) {
  return (

    <>

      <h3>Name: {props.person.name}</h3>
      <p>Height: {props.person.height}cm</p>
      <p>Mass: {props.person.mass}kg</p>
      <p>Hair Colour: {props.person.hair_color}</p>
      <p>Skin Colour: {props.person.skin_color}</p>
      <p>Eye Colour: {props.person.eye_color}</p>
      <p>Birth Year: {props.person.birth_year}</p>
      <p>Gener: {props.person.gender}</p>

    </>

  )
}
