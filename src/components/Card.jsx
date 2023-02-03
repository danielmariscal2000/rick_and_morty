import style from "../CompCss/card.module.css";
import {Link} from "react-router-dom"
export default function Card(props) {
   return (
       
      <div className={style.card}>
         <button className={style.buttonX}  onClick={props.onClose}>X</button>
         <Link to={`/detail/${props.id}`} >
         <h2 className={style.name}>{props.name}</h2>
         </Link>
         <h2 className={style.species}>{props.species}</h2>
         <h2 className={style.genero}>{props.gender}</h2>
         <img className={style.img} src={props.image} alt="..." />
      </div>
   );
}
