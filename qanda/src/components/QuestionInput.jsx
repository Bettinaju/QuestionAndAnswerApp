const QuestionInput = (props) => {
  return (
    <div className="question-input">
      <input
        className="input-field"
        type="text"
        onChange={props.onChange}
        value={props.inputValue}
      />
      <button className="input-btn" type="submit" onClick={props.onClick}>
        Send your question!
      </button>
    </div>
  );
};

export default QuestionInput;
