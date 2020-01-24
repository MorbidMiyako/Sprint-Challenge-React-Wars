import React, { useState } from "react";
import axios from "axios";

export default function PersonShort(props) {
  console.log("this is PeopleShort props", props)

  const [page, setPage] = useState('https://swapi.co/api/people');

  return (

    <>
      <h1>Hello</h1>

      <h3>{props.personShort.name}</h3>

      <div>
        <p>{props.personShort.name} has appeared in the following movies:</p>
        <ul> {axios
          .get(`${props.personShort.films.map(item => { return item })}`)
          .then(response => {
            return (<li>{response.title}</li>)
          })
          .catch(error => console.log(error))
        } </ul>
      </div>

      <div>
        <button onClick={() => setPage(props.personShort.url)}>Read more here</button>
      </div>

    </>
  )


}
