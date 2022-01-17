import style from "./Button.module.css";

// Calback function interface
interface ICallback {
  (): void;
}

// Props object interface
interface IProps {
  name: string;
  callback: ICallback;
}

function Button({ name, callback }: IProps) {
  return (
    <div className={style.container}>
      <button className={style.button} onClick={callback} aria-label={name}>
        {name}
      </button>
    </div>
  );
}

export default Button;
