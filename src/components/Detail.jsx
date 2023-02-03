import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
function Detail(props) {
    let id=props.id;
  let {detailId}=useParams();
  const [character,setCharacter]=useState([]);  
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [id]);
  return (
     <div>
        <h2>Nombre: {character.name}</h2>
        <h3>Status: {character.status}</h3>
        <h3>Species: {character.species} </h3>
        <img src={character.image} alt="" />
        <h3>Gender: {character.gender}</h3>
         <h4>Origin:</h4>
        <p>
         Name:{character?.origin?.name}
        </p>
     </div>
  );
}
export default Detail;
