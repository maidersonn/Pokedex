const Answer = ({ result }) => {
  return !result ? <p>Something went wrong. Try again.</p> : "";
};

export default Answer;
