import Answer from "./Answer";
const AnswerList = ({ list, isVisible }) => {
  if (isVisible) {
    return (
      <ul>
        {list.map((answer) => (
          <Answer content={answer.text} key={answer.id} date={answer.date} />
        ))}
      </ul>
    );
  }
};

export default AnswerList;
