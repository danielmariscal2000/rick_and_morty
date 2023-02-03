import style from "../CompCss/search.module.css"
export default function SearchBar(props) {
   let valueInput="";
   function ejecutar(){
    props.onSearch(valueInput);
   }
   return (
      <div className={style.divSearch}>
         <input className={style.input} type='search' onChange={(event)=>valueInput=event.target.value} />
      <button className={style.button} onClick={ejecutar}>Agregar</button>
      </div>
   );
}
