import React from 'react';
import './App.css';
import MainPage from "./components/MainPage/MainPage"

function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div>
      <MainPage />
    </div>

  )
}


export default App;

/*
  component Page and later Header
  @MainPage
  import axios
  import useEffect
  import useState?
  import styled
  import subcomponents
  Page() => {

    axios
      .get(link${page})
      .then(response => {
        console.log(response)
        // page===people ? return (
          // <people people={response.?}/>
        // ) : response.data ? return (
          // <person person={response.?}
        // ) : return (
          // <error>
      }
      .catch(error => console.log(error))
  }

  People(props) => {
    <PersonShort(props.data)/>
  }

  Person(props) => {
    <Person(props.data)/>
  }


planet: rotation_period
vehicle: grounspeed?
film: director?
species: ?
starshops: ?
*/
