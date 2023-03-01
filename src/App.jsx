
import PhraseCard from "./components/phraseCard";
import phrase from "./data/phrases.json";
import AuthorComponent from "./components/AuthorComponent";
import { useState } from "react";

function App() {
  const imagbackg = [
   
    "/assets/fondo1.jpg",
    "/assets/fondo2.jpg",
    "/assets/fondo3.jpg",
    "/assets/fondo4.jpg",
  ];

  const [index, setIndex] = useState(0);
  const [indexQuestion, setIndexQuestion] = useState(0);

  const changephase = () => {

    setIndex (Math.floor(Math.random()*4))
    //console.log(phrase.length)
    const indice = phrase.length
    setIndexQuestion(Math.floor(Math.random() * indice))
    console.log(indexQuestion)
  };

  
  return (  
    <div className="App" style={{ backgroundImage: `url(${imagbackg[index]}`}}>
      
      <h1 className='title'>GALLETAS DE LA <br/> FORTUNA</h1>
      <PhraseCard phraseData = {phrase[indexQuestion]} />
      <AuthorComponent authorName = {phrase[indexQuestion]} />
      <button onClick={changephase} className="button-change">
        Ver otro
      </button>
    </div>
  );
}

export default App;
