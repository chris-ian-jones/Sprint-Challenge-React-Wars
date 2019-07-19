import React, {useEffect, useState} from 'react';
import styled from 'styled-components'


const PersonCard = (props) => {

    return (
      <div>
          <p>{props.name}</p>
          <p>{props.eye_color}</p>
          <p>{props.hair_color}</p>
          <p>{props.gender}</p>
          <p>{props.height}</p>
      </div>
    );
  }
  
  export default PersonCard;