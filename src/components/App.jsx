import React, { Component } from 'react';
import { Section } from './sectionTitle/sectionTitle';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  upDateFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };
  onChangeGood = () => {
    this.upDateFeedback('good');
  };
  onChangeNeutral = () => {
    this.upDateFeedback('neutral');
  };
  onChangeBad = () => {
    this.upDateFeedback('bad');
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section
          onLeaveFeedback={this.upDateFeedback}
          options={['good', 'neutral', 'bad']}
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={this.countTotalFeedback()}
          percentGood={this.countPositiveFeedbackPercentage()}
          onChangeGood={this.onChangeGood}
          onChangeNeutral={this.onChangeNeutral}
          onChangeBad={this.onChangeBad}
        />
      </div>
    );
  }
}
export default App;
