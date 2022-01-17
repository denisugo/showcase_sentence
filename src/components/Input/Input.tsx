import style from "./Input.module.css";

// Interface of props object
interface IProps {
  value: string;
  callback: (newVal: string) => void;
}

function Input({ value, callback }: IProps) {
  return (
    <div className={style.container}>
      <input
        className={style.input}
        type="text"
        name="ansewer"
        aria-label="answer"
        placeholder="Type your answer"
        value={value}
        onChange={(e) => callback(e.target.value)}
      />
    </div>
  );
}

export default Input;
