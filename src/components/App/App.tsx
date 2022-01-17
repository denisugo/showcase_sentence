import style from "./App.module.css";
import Input from "../Input/Input";
import Sentence from "../Sentence/Sentence";
import Button from "../Button/Button";
import Indicator from "../Indicator/Indicator";
import IndicatorExpandex from "../Indicator/IndicatorExpandex";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  next,
  selectCurrent,
  selectSentence,
  selectQuestions,
  selectAnswers,
  currentEnum,
  setAnswer,
  previous,
  generate,
} from "../../features/sentence/sentenceSlice";

function App() {
  // Get the sentence value from the store
  const sentence = useAppSelector(selectSentence);
  // Get values of the questions, answers and current question
  const questions = useAppSelector(selectQuestions);
  const answers = useAppSelector(selectAnswers);
  const current = useAppSelector(selectCurrent);

  // The value below decides if the 'Generate' should be visible or not
  const readyForGeneration = current === currentEnum.where;

  const dispatch = useAppDispatch();

  // This function handles input vaule changing
  const handleChange = (newVale: string) => {
    dispatch(setAnswer(newVale));
  };

  // This function handles next buton click
  const handleNext = () => {
    dispatch(next());
  };
  // This function handles back buton click
  const handlePrevious = () => {
    dispatch(previous());
  };
  // This function handles generate buton click
  const handleGenerate = () => {
    dispatch(generate());
  };

  return (
    <div className={style.app}>
      <Sentence sentence={sentence} />

      <div className={style.indicators}>
        {answers.map((answer, index) => {
          if (current === index)
            return (
              <IndicatorExpandex key={index} question={questions[current]} />
            );

          return <Indicator key={index} isValid={answer !== ""} />;
        })}
      </div>

      <Input
        value={answers[current]}
        callback={(newVal) => handleChange(newVal)}
      />
      <div className={style.buttons}>
        <Button name="Previous" callback={handlePrevious} />
        {!readyForGeneration && <Button name="Next" callback={handleNext} />}
        {readyForGeneration && (
          <Button name="Generate" callback={handleGenerate} />
        )}
      </div>
    </div>
  );
}

export default App;
