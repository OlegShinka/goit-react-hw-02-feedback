import { Btn } from './feedbackOptions.styled';

export const FeedbackOptions = ({ options }) => {
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
        <Btn type="button" key={index} />
      ))}
    </div>
  );
};
