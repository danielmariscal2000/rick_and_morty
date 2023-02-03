import Card from "./Card";
import style from "../CompCss/card.module.css";
export default function Cards(props) {
  const characters = props.characters;
  console.log(characters)
  return (
    <div className={style.divCards}>
      {characters.map((element, index) => {
        return (
          <Card
            key={index}
            name={element.name}
            species={element.species}
            gender={element.gender}
            image={element.image}
            id={element.id}
            onClose={() =>
              props.setCharacters(
                characters.filter((e) => e.name !== element.name)
              )
            }
          ></Card>
        );
      })}
    </div>
  );
}
