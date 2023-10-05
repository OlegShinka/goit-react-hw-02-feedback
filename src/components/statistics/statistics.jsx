export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  percentGood,
}) => {
  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
        <li>Total:{totalFeedback}</li>
        <li>Positive feedback:{percentGood}%</li>
      </ul>
    </div>
  );
};
