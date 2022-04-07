import Question from "./Question";
const QuestionList = ({ list }) => {
  return (
    <ul className="question-list">
      {list.map((question) => (
        <Question content={question.text} key={question.id} id={question.id} />
      ))}
    </ul>
  );
};

export default QuestionList;
