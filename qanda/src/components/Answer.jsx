const Answer = ({ content, date }) => {
  let datePosted = new Date(date);
  return (
    <li>
      {content}{" "}
      <span className="timestamp">{`${datePosted.getDate()}.${datePosted.getMonth()}.${datePosted.getFullYear()}`}</span>
    </li>
  );
};

export default Answer;
