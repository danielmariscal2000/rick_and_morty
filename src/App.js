import "./App.css";
import Cards from "./components/Cards.jsx";
import style from "./CompCss/card.module.css";
import Nav from "./components/Nav";
import { useState } from "react";
import {Routes, Route,useLocation} from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import Error from "./components/Error";
import Form from "./components/Form";

function App() {
  const [characters, setCharacters] = useState([]);
  const loca=useLocation();
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }
  return (
      <div className={style.container}>
        {
          loca.pathname!=="/" && <Nav onSearch={onSearch}></Nav> 
        }
        <Routes>
          <Route path="/" element={<Form></Form>}>
          </Route>
          <Route
            path="/home"
            element={
              <Cards setCharacters={setCharacters} characters={characters} />
            }
          ></Route>
          <Route path="/about" element={<About></About>}></Route>

          <Route path="/detail/:detailId" element={<Detail></Detail>}></Route>

          <Route path="/:eror" element={<Error></Error>}></Route>
          
        </Routes>
      </div>
  );
}

export default App;
