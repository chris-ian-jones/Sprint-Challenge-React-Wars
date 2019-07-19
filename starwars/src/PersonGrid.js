import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import axios from 'axios'

const PersonGrid = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get('https://swapi.co/api/people/')
            .then(response => {
                setData(response.data.results)
            })

    }, [])
    console.log('b', data)
    return (
      <div>
          <p>placeholder text</p>
      </div>
    );
  }
  
  export default PersonGrid;