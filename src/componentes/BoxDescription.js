import React,{useState, useEffect} from "react";
import {BrowserRouter ,NavLink,Route ,Routes} from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAddressCard, faPuzzlePiece, faRadiation, faHammer } from '@fortawesome/free-solid-svg-icons'


const BoxDescription=()=>{
    const [res, cambiarres] = useState([]);
    

    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://superhero-search.p.rapidapi.com/api/?hero=Spiderman',
            headers: {
             'X-RapidAPI-Key': '80733d58admsh2d071201d7305aap13f084jsn51d9e7e388cf',
              'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
            }
        };
        
        fetch('https://superhero-search.p.rapidapi.com/api/?hero=Spiderman', options)
            .then(response => response.json())
            .then((res) => {
                cambiarres(res);
                
            })
            .catch(err => console.error(err));
  }, []);

    return(
        <BrowserRouter>
            <BoxMenuInfo>
                <BoxMenuInfotitle>
                    <p>Additional Information</p>
                </BoxMenuInfotitle>
                
                <BoxMenuInfoItems>
                    <BoxMenuInfoIcons>
                        <NavLink to='/'>
                            <BoxMenuInfoIcon green ><FontAwesomeIcon icon={faAddressCard}/></BoxMenuInfoIcon>
                        </NavLink>
                            <BoxMenuInfoIconP><p>Information</p></BoxMenuInfoIconP>
                    </BoxMenuInfoIcons>
                    <BoxMenuInfoIcons>
                        <NavLink to='/appearance'>
                            <BoxMenuInfoIcon yellow><FontAwesomeIcon icon={faPuzzlePiece}/></BoxMenuInfoIcon>
                        </NavLink>
                            <BoxMenuInfoIconP><p>Appearance</p></BoxMenuInfoIconP>
                    </BoxMenuInfoIcons>
                    <BoxMenuInfoIcons>
                        <NavLink to='/powers'>
                            <BoxMenuInfoIcon purple><FontAwesomeIcon icon={faRadiation}/></BoxMenuInfoIcon>
                        </NavLink>
                            <BoxMenuInfoIconP><p>Powers</p></BoxMenuInfoIconP>
                    </BoxMenuInfoIcons>
                    <BoxMenuInfoIcons>
                        <NavLink to='/work'>
                            <BoxMenuInfoIcon pink><FontAwesomeIcon icon={faHammer}/></BoxMenuInfoIcon>
                        </NavLink>
                            <BoxMenuInfoIconP><p>Work</p></BoxMenuInfoIconP>
                    </BoxMenuInfoIcons>
                </BoxMenuInfoItems>
                
                <BoxMenuInfoContainerRoutes>
                    <Routes>
                        <Route path="/" element={
                            <BoxMenuInfoContainerRoutesDiv green>
                                <h2>Information</h2>
                                <p>Alineation: {res.biography.alignment} </p>
                                <p>Alter egos: {res.biography.alterEgos}</p>
                                <p>Primera aparicion:  {res.biography.firstAppearance}</p>
                                <p>Nombre completo:  {res.biography.fullName}</p>
                                <p>Publicado:  {res.biography.publisher}</p>
                            </BoxMenuInfoContainerRoutesDiv>
                        }/>

                        <Route path="/appearance" element={
                            <BoxMenuInfoContainerRoutesDiv yellow>
                                <h2>Appearance</h2>
                                <p>Eye color:  {res.appearance.eyeColor}</p>
                                <p>Gender:  {res.appearance.gender}</p>
                                <p>Hair color:  {res.appearance.hairColor}</p>
                            </BoxMenuInfoContainerRoutesDiv>
                        }/>
                        
                        <Route path="/powers" element={
                            <BoxMenuInfoContainerRoutesDiv purple>
                                <h2>Powers</h2>
                                <p>Combat:  {res.powerstats.combat}</p>
                                <p>Durability:  {res.powerstats.durability}</p>
                                <p>Intelligence:  {res.powerstats.intelligence}</p>
                                <p>Speed:  {res.powerstats.speed}</p>
                            </BoxMenuInfoContainerRoutesDiv>
                        }/>

                        <Route path="/work" element={
                            <BoxMenuInfoContainerRoutesDiv pink>
                                <h2>Work</h2>
                                <p>Base:  {res.work.base}</p>
                                <p>Ocupacion:  {res.work.occupation}</p>
                            </BoxMenuInfoContainerRoutesDiv>
                        }/>
                    </Routes>
                </BoxMenuInfoContainerRoutes>
                
                

            </BoxMenuInfo>
        </BrowserRouter>
        
    )
}

const BoxMenuInfo=styled.div`
    display: flex;
    background-color:#ffffff;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content:space-evenly ;
    align-items: center;
    width: 100%;
    height: 80vh;
    
`
const BoxMenuInfotitle=styled.div`
    display: flex;
    width: 90%;
    color: #000000;
    font-size: 1.6rem;
    justify-content: flex-start;
    letter-spacing: 2px;
    
    padding-top: 10px;
    padding-bottom: 10px;
    
`
const BoxMenuInfoItems=styled.div`
    display: flex;
    width: 45%;
    color: #0F3460;
    
    height: auto;
    justify-content: space-around;
    align-items: center;
    
    
`
const BoxMenuInfoIcons=styled.nav`
    width: 80px;
    height: 110px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    && :hover{
        width: 70px;
        color: #000000;
        border-radius: 5px;
    }
        && :hover p{
        background-color:#ffffff;
        
        color: #444444;
    }
`
const BoxMenuInfoIcon=styled.div`
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.green ? "#96CEB4" : props.yellow ? "#FFE162" : props.purple ? "#C3ACD0" :  props.pink ? "#F7C8E0" :"transparent"};
    color: #444444;
    
      
`
const BoxMenuInfoIconP=styled.div`
    width: 80px;
    height: 10px;
    text-align: center;
    margin-top: 5px;
`
const BoxMenuInfoContainerRoutes=styled.div`
    display: flex;
    width: 45%;
    color: #0F3460;
    height: 50%;
    
    background-color:gray;
    border-radius: 5px;
    
    
`
const BoxMenuInfoContainerRoutesDiv=styled.div`
display: flex;
   width: 100%;
    color: #434242;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 50px;
    border-radius: 5px;
    
    background-color: ${props => props.green ? "#96CEB4" : props.yellow ? "#FFE162" : props.purple ? "#C3ACD0" :  props.pink ? "#F7C8E0" :"transparent"};
`



export default BoxDescription