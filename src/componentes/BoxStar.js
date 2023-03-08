import React,{useState, useEffect} from "react";
import styled from "styled-components";
import BackgroundImg from "./../img/429-man-wolf.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUsers, faBolt, faPersonRunning } from '@fortawesome/free-solid-svg-icons'

const BoxStar=()=>{
    const [res, cambiarres] = useState([]);
    const [imgUrl, setImgUrl] = useState("ruta/imagen/por/defecto.jpg")

    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://superhero-search.p.rapidapi.com/api/heroes',
            headers: {
             'X-RapidAPI-Key': '80733d58admsh2d071201d7305aap13f084jsn51d9e7e388cf',
              'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
            }
          };
    fetch("https://superhero-search.p.rapidapi.com/api/heroes", options)
      .then((response) => response.json())
      .then((res) => {
        cambiarres(res);
        setImgUrl(res.length > 1 && res[0].images ? res[0].images.lg : "ruta/imagen/por/defecto.jpg");
    })
      .catch((err) => console.error(err));
  }, []);
    return(
        <BoxStarCon imgUrl={imgUrl}>
            <BoxCard>
                <img src={res.length > 1 && res[0].images ? res[0].images.lg : "ruta/imagen/por/defecto.jpg"} alt="Descripción de la imagen"/>
            </BoxCard>
            <BoxStarConDescription>
                <BoxStarConDescriptionTitle>
                    <p>{res.length > 0 ? res[0].name : "Load"}</p>
                </BoxStarConDescriptionTitle>
                <BoxStarConDescriptionFeatured>
                    <BoxStarConDescriptionFeaturedItems >
                        <p><FontAwesomeIcon icon={faUsers}/></p> 
                        <p>{res.length > 0 ? res[0].biography.alignment: "Load"}</p>
                        </BoxStarConDescriptionFeaturedItems>
                    <BoxStarConDescriptionFeaturedItems>
                        <p><FontAwesomeIcon icon={faBolt}/></p> 
                        <p>29</p>
                    </BoxStarConDescriptionFeaturedItems>
                    <BoxStarConDescriptionFeaturedItems>
                        <p><FontAwesomeIcon icon={faPersonRunning}/></p> 
                        <p>29</p>
                    </BoxStarConDescriptionFeaturedItems>
                    
                </BoxStarConDescriptionFeatured>
            </BoxStarConDescription>
        </BoxStarCon>
    )
}

const BoxStarCon=styled.div`
    display: flex;
    height: 90vh;
    background: linear-gradient(to bottom, rgba(255,255,255,.5) 0%, rgba(0,0,0,.5) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
    background-blend-mode: multiply,multiply;
    background-image: url(${props => props.imgUrl});
    background-repeat:no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: column;
    color: white; 
    
`
const BoxCard=styled.div`
    display: flex;
    width:100%;
    height: 70%;
    justify-content: center;
    padding-top: 20px;
    border-radius: 5px;
    && img{
        border-radius: 5px;
    }

`
const BoxStarConDescription=styled.div`
    display: flex;
    width:60%;
    height: 90px;
    background-color: rgba(57, 62, 70, .85);
    margin-bottom: 50px;
    border-radius: 10px;
`
const BoxStarConDescriptionTitle=styled.div`
    flex: 1 1 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:1.2rem;
    font-weight: 400;
    letter-spacing: 2px;
`
const BoxStarConDescriptionFeatured=styled.div`
    flex: 1 1 65%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const BoxStarConDescriptionFeaturedItems=styled.div`
    flex: 1 1 33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-left: 1px solid #7F8487;
    && p{
        margin-bottom: 4px;
        
    }
   
`

export default BoxStar