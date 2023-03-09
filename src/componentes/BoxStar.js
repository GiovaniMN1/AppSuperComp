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
            url: 'https://superhero-search.p.rapidapi.com/api/?hero=Spiderman',
            headers: {
                'X-RapidAPI-Key': '0ee361c95amsh236653a7a8191f2p13fd33jsn304d9428f829',
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
        <BoxStarCon>
            <BoxCard>
            {res.images && res.images.lg && <img src={res.images.lg} alt={res.name} />}
            </BoxCard>
            <BoxStarConDescription>
                <BoxStarConDescriptionTitle>
                    <p>{res.name}</p>
                </BoxStarConDescriptionTitle>
                <BoxStarConDescriptionFeatured>
                    <BoxStarConDescriptionFeaturedItems >
                        <p><FontAwesomeIcon icon={faUsers}/></p> 
                        <p>{res?.biography?.alignment}</p>
                    </BoxStarConDescriptionFeaturedItems>
                    <BoxStarConDescriptionFeaturedItems>
                        <p><FontAwesomeIcon icon={faBolt}/></p> 
                        <p>{res?.powerstats?.combat}</p>
                    </BoxStarConDescriptionFeaturedItems>
                    <BoxStarConDescriptionFeaturedItems>
                        <p><FontAwesomeIcon icon={faPersonRunning}/></p> 
                        <p>{res?.powerstats?.speed}</p>
                    </BoxStarConDescriptionFeaturedItems>
                </BoxStarConDescriptionFeatured>
            </BoxStarConDescription>
        </BoxStarCon>
    )
}

const BoxStarCon=styled.div`
    display: flex;
    height: 90vh;
    background-color: #E4E4E1;
    background-image: radial-gradient(at top center, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.03) 100%), linear-gradient(to top, rgba(255,255,255,0.1) 0%, rgba(143,152,157,0.60) 100%);
 	background-blend-mode: normal, multiply;
    background-attachment: fixed;
    background-position: center;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: column;
    color: white; 
    //@media (max-width: 991.98px) { ... }
    @media (max-width: 991.98px) {
        height: 60vh;
    }
    @media (max-width: 575.98px) {
        height: 100vh;
    }
    
`
const BoxCard=styled.div`
    display: flex;
    width:100%;
    height: 70%;
    justify-content: center;
    padding-top: 40px;
    border-radius: 5px;
    && img{
        border-radius: 5px;
    }
    //@media (max-width: 991.98px) { ... }
    @media (max-width: 991.98px) {
        height: 60%;
    }
    @media (max-width: 575.98px) {
        height: 65%;
    }

`
const BoxStarConDescription=styled.div`
    display: flex;
    width:60%;
    height: 90px;
    background-color: #393E46;
    margin-bottom: 30px;
    border-radius: 10px;
    @media (max-width: 991.98px) {
        width:70%;
    }
    @media (max-width: 575.98px) {
        width:95%;
        flex-direction:column;
        height: 110px;
        margin-bottom: 10px;
    }
`
const BoxStarConDescriptionTitle=styled.div`
    flex: 1 1 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:1.2rem;
    font-weight: 400;
    letter-spacing: 2px;
    @media (max-width: 991.98px) {
        font-size:1.6rem;
    }
    @media (max-width: 575.98px) {
        flex: 1 1 100%;
        
        font-size:1.4rem;
    }
`
const BoxStarConDescriptionFeatured=styled.div`
    flex: 1 1 65%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 991.98px) {
        font-size:1.1rem;
    }
    @media (max-width: 575.98px) {
        flex: 1 1 100%;
        font-size:.9rem;
    }
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