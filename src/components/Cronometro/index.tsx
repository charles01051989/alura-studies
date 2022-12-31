import Botao from "../botao";
import style from "./Cronometro.module.scss";
import Relogio from "./Relogio";

export default function Cronometro() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha o card e inicie o Cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Botao texto="Começar" />
    </div>
  );
}
