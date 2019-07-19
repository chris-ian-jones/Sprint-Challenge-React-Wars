import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import axios from 'axios'
import PersonCard from './PersonCard';

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`

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
        <Title>Title</Title>
        {data.map(character => 
            <PersonCard
            key={character.name} 
            name={character.name} 
            eye_color={character.eye_color} 
            hair_color={character.hair_color} 
            gender={character.gender}
            height={character.height}
            />
        )}
      </div>
    );
  }
  
  export default PersonGrid;