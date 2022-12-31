import style from "./Item.module.scss";

export default function Item({ tarefa, tempo }: { tarefa: string, tempo: string }) {
 
  return (
    <ul>
      
        <li  className={style.item}>
          <h3>{tarefa}</h3>
          <span>{tempo}</span>
        </li>
    
    </ul>
  );
}
