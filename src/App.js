import React from "react";
import styled from"styled-components";
import Header from "./componentes/Header";
import BoxStar from "./componentes/BoxStar";
import BoxDescription from "./componentes/BoxDescription";

const App=()=>{
  return(
    <BoxMain>
      <BoxStar/>
      <BoxDescription/>


      
    </BoxMain>
  )
}

const BoxMain=styled.div`
    display: flex;
    height: auto;
    flex-direction: column;
    width: 100%;
    
`

export default App