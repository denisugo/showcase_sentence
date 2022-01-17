import style from "./Indicator.module.css";
// Props object interface
interface IProps {
  question: string;
}

function IndicatorExpandex({ question }: IProps) {
  return <div className={style.expanded}>{question}</div>;
}

export default IndicatorExpandex;
