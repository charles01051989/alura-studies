import style from './Botao.module.scss'

interface Itexto{
    texto: string;
}

export default function Botao(props: Itexto){
    return(
        <button className={style.botao}>{props.texto}</button>
    )
}