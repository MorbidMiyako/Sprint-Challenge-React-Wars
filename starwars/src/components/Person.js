import React from "react";
import styled from "styled-components";
const Div = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: rgba(168,107,50,0.45)
`
const Card = styled.div`
  width: 20%;
`

const Header = styled.div`
  text-align: center;
`

const Info = styled.div`
  text-aling: center;
`

export default function Person(props) {
  return (
    <Div>
      {props.character.map(
        x => (
          <Card key={x.name}>
            <Header>
              {x.name}
            </Header>
            <Info>
              <p>{x.height}</p>
              <p>{x.mass}</p>
              <p>{x.hair_color}</p>
              <p>{x.eye_color}</p>
              <p>{x.skin_color}</p>
              <p>{x.birth_year}</p>
              <button></button>
            </Info>
          </Card>
        )
      )}
    </Div>
  )
}
