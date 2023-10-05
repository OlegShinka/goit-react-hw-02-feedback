export const FeedbackOptions = ({
  options,
  onLeaveFeedback,
  good,
  neutral,
  bad,
  onChangeGood,
  onChangeNeutral,
  onChangeBad,
}) => {
  return (
    <div>
      {/* <button type="button" onClick={onChangeGood}>
        Good
      </button>
      <button type="button" onClick={onChangeNeutral}>
        Neutral
      </button>
      <button type="button" onClick={onChangeBad}>
        Bad
      </button> */}
      {options.map((item, index) => (
        <button type="button" key={index} onClick={item.onChange}>
          {item.feedback}
        </button>
      ))}
    </div>
  );
};
