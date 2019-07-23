import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import { Divider, Header, Icon, Table } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

// use of styled-components
const CardContainer = styled.div`
  width: 15%;
  margin-left: 1%;
  margin-right: 1%;
  margin-top: 20px;
`

// use of styled-components
const BackgroundDiv = styled.div`
  background-color: red;
`

const PersonCard = (props) => (

  <CardContainer>
    
    {/* use of Semantic UI React */}
    {/* Divider / Icon / Header */}
    <Divider horizontal>
      <Header as='h4'>
        <Icon name='user' />
        {props.name}
      </Header>
    </Divider>

    {/* Table */}
    <Table definition>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Eye Color</Table.Cell>
          <Table.Cell>{props.eye_color}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Hair Color</Table.Cell>
          <Table.Cell>{props.hair_color}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Height</Table.Cell>
          <Table.Cell>{props.height}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Gender</Table.Cell>
          <Table.Cell>{props.gender}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>

  </CardContainer>
)
  
export default PersonCard