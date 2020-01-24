import React, { useEffect, useState } from "react";
import axios from "axios"
import styled from "styled-components"
import People from "./People/People"
import Person from "./Person/Person"
// import subcomponents
export default function MainPage() {

  const [page, setPage] = useState('https://swapi.co/api/people');
  const [content, setContent] = useState([])

  useEffect(() => {
    axios
      .get(`${page}`)
      .then(response => {
        console.log(response)

        setContent(response.data)
        console.log("this is the content variable", content)
      })
      .catch(error => console.log(error))

  }, []);

  if (page === "https://swapi.co/api/people" /*|| page=="people/?/page=w"*/) {
    console.log("im throwing this into People.js", content.results)
    return (
      <People people={content.results} />
    )
  }
  if (content.heigth != null) {
    console.log("im throwing this into Person.js", content)
    return (
      <Person person={content} />
    )
  }
  else {
    return (
      <div >
        <button onClick={() => setPage("https://swapi.co/api/people")}>Return Home</button>
      </div>
    )
  }
}
  // ? (
  //     <people people={response.?}/>
  //     ) : response.data ? (
  //     <person person={response.?}
  //     ) : (
  //     <error>
  //     )

