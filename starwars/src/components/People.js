import React, { useEffect, useState } from "react";
import styled from "styled-components"
import axios from "axios"
import Person from "./Person"

export default function People() {

  const [content, setContent] = useState([])
  const [page, setPage] = useState(1)

  const Button = styled.button`
    margin: 0, auto;
  `

  // const nextPage = () => {
  //   setPage(page + 1),
  //     (page === 9) ? setPage(1) : null;
  // }

  const nextPage = () => {
    console.log(page)
    if (page === 9) {
      setPage(1)
    }
    else {
      setPage(page + 1)
    }
    console.log(page)
  }


  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?page=${page}`)
      .then(response => {
        console.log(response)
        setContent(response.data.results.map(character => character)
        )
      })
      .catch(error => {
        console.log(error)
      })
  }, [page])


  return (
    <>
      <Person character={content} />
      <Button onClick={nextPage}>More info</Button>
    </>
  )
}
