import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import axios from 'axios'
import PersonCard from './PersonCard';

const FlexCenterDiv = styled.div`
    width: 98vw;
    height: 50vh;
    margin-left: 1vw;
    margin-right: 1vw;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    flex-wrap: wrap;
`

const FlexRow = styled.div`
    display: flex;
    flex-direction: column;
`

const PaginationButton = styled.button`
    width: 100px;
    height: 50px;
    background-color: dodgerblue;
    color: white;

    :hover {
        background-color: white;
        color: dodgerblue;
        border: 1px solid dodgerblue;
    } 
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 200px;
`

const PageNumberArray = [{pageNumber: 1}, {pageNumber: 2}, {pageNumber: 3}, {pageNumber: 4}, {pageNumber: 5}, {pageNumber: 6}, {pageNumber: 7}, {pageNumber: 8}, {pageNumber: 9}]

const PersonGrid = () => {

    const [data, setData] = useState([])
    const [pageNumbers, setPageNumbers] = useState(PageNumberArray)
    const [pageIndex, setPageIndex] = useState(1)

    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/?page=${pageIndex}`)
            .then(response => {
                setData(response.data.results)
            })

    }, [pageIndex])
    console.log(pageIndex)
    console.log(data)
    return (
        <FlexRow>
      <FlexCenterDiv>
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
        
      </FlexCenterDiv>
      <ButtonContainer>
      {pageNumbers.map(page => 
            <PaginationButton onClick={() => setPageIndex(page.pageNumber)} key={page.pageNumber}>Page {page.pageNumber}</PaginationButton>
        )}
        <PaginationButton onClick={() => setPageIndex(pageIndex === 9 ? pageIndex - 8 : pageIndex + 1)}>Next</PaginationButton>
        </ButtonContainer>
      </FlexRow>
    );
  }
  
  export default PersonGrid;