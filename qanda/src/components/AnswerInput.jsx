const AnswerInput = (props) => {
  if (props.isVisible) {
    return (
      <div>
        <input type="text" onChange={props.onChange} value={props.inputValue} />
        <button type="submit" onClick={props.onClick}>
          Send your answer!
        </button>
      </div>
    );
  }
};

export default AnswerInput;
