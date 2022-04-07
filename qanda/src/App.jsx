import { useState } from "react";
import Header from "./components/Header";
import QuestionInput from "./components/QuestionInput";
import QuestionList from "./components/QuestionList";
import "./styles/app.css";

const App = () => {
  const [question, setQuestion] = useState("");
  const [questionList, setQuestionList] = useState([]);

  const handleAddClick = () => {
    if (question) {
      let newQuestion = createQuestion(question);
      setQuestionList(questionList.concat(newQuestion));
      setQuestion("");
    }
  };

  const createQuestion = (text) => {
    return {
      text: text,
      id: text.concat(Date.now()),
    };
  };

  const handleQuestionInput = (event) => {
    setQuestion(event.target.value);
  };

  return (
    <div>
      <Header title="qanda" />
      <QuestionInput
        onClick={handleAddClick}
        onChange={handleQuestionInput}
        inputValue={question}
      />
      <QuestionList list={questionList} />
    </div>
  );
};

export default App;
