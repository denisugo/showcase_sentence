import style from "./Indicator.module.css";
// Interface of props object
interface IProps {
  isValid?: boolean;
}
function Indicator({ isValid = false }: IProps) {
  return (
    <div className={`${style.indicator} ${isValid ? style.valid : ""}`}></div>
  );
}

export default Indicator;
