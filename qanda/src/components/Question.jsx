import { useState } from "react";
import AnswerList from "./AnswerList";
import AnswerInput from "./AnswerInput";

const Question = ({ content }) => {
  const [answer, setAnswer] = useState("");
  const [answerList, setAnswerList] = useState([]);
  const [showAnswers, setShowAnswers] = useState(false);

  const handleShowAnswerClick = () => {
    setShowAnswers(!showAnswers);
    console.log(`clicked answer for ${content}`);
  };

  const handleAddAnswerClick = () => {
    if (answer) {
      let newAnswer = createAnswer(answer);
      setAnswerList(answerList.concat(newAnswer));
      setAnswer("");
    }
  };

  const createAnswer = (text) => {
    return {
      text: text,
      date: Date.now(),
      id: text.concat(Date.now()),
    };
  };

  const handleAnswerInput = (event) => {
    setAnswer(event.target.value);
  };

  return (
    <li className="question-wrapper">
      <div className="question-item">
        {content}
        <AnswerInput
          onClick={handleAddAnswerClick}
          onChange={handleAnswerInput}
          inputValue={answer}
          isVisible={showAnswers}
        />
        <button
          className="show-more-btn"
          type="button"
          onClick={handleShowAnswerClick}
        >
          {showAnswers ? "-" : "+"}
        </button>
      </div>
      <AnswerList list={answerList} isVisible={showAnswers} />
    </li>
  );
};

export default Question;
