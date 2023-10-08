import { Btn } from './feedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedBack }) => {
  return (
    <div>
      {options.map((item, index) => (
        // <Btn
        //   type="button"
        //   key={index}
        //   onClick={item.onChange}
        //   bgColor={item.feedback}
        // >
        //   {item.feedback}
        // </Btn>
        <Btn
          type="button"
          key={index}
          onClick={() => {
            return onLeaveFeedBack(item);
          }}
        >
          {item}
        </Btn>
      ))}
    </div>
  );
};
