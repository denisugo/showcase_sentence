import style from "./Sentence.module.css";

// Interface for props
interface IProps {
  sentence: string;
}

function Sentence({ sentence }: IProps) {
  return (
    <div className={style.container}>
      <p className={style.text}>{sentence}</p>
    </div>
  );
}

export default Sentence;
