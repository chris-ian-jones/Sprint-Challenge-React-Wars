import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import axios from 'axios'

const PersonGrid = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get('https://swapi.co/api/people/')
            .then(response => {
                // const responseData = response.results
                // setData(responseData)
                // console.log('a', responseData)
                console.log(response)
            })

    }, [])
    // console.log('b', responseData)
    return (
      <div>
          <p>placeholder text</p>
      </div>
    );
  }
  
  export default PersonGrid;