import * as React from 'react';
import styled from 'styled-components';
import { PieChart, Pie, Tooltip } from 'recharts';

import BasicData from './BasicData';

interface Props {
  className?: string;
  data: any;
};

class Totals extends React.Component<Props> {
  render() {
    const { className, data } = this.props;
    const { days, sumMessages, sumWords, firstParticipant, secondParticipant } = data;

    const messagesChartData = [
      {
        name: firstParticipant.name,
        value: firstParticipant.messages
      },
      {
        name: secondParticipant.name,
        value: secondParticipant.messages
      }
    ];
    const wordsChartData = [
      {
        name: firstParticipant.name,
        value: firstParticipant.words
      },
      {
        name: secondParticipant.name,
        value: secondParticipant.words
      }
    ];

    return (
      <div className={className}>
        <div className="title">Totals</div>
        <div className="data">
          <BasicData value={days} type="days" />
          <BasicData value={sumMessages} type="messages" />
          <BasicData value={sumWords} type="words" />
        </div>
        <div className="data">
          <div className="person">
            <div className="name">{firstParticipant.name}</div>
            <div className="data">
              <BasicData value={firstParticipant.messages} type="messages" />
              <BasicData value={firstParticipant.words} type="words" />
            </div>
          </div>
          <div className="person">
            <div className="name">{secondParticipant.name}</div>
            <div className="data">
              <BasicData value={secondParticipant.messages} type="messages" />
              <BasicData value={secondParticipant.words} type="words" />
            </div>
          </div>
        </div>
        <div className="data">
          <PieChart width={300} height={300}>
            <Pie dataKey="value" isAnimationActive={true} data={messagesChartData} cx={150} cy={150} outerRadius={122} fill="#db7093" label />
            <Tooltip />
          </PieChart>
          <PieChart width={300} height={300}>
            <Pie dataKey="value" isAnimationActive={true} data={wordsChartData} cx={150} cy={150} outerRadius={122} fill="#db7093" label />
            <Tooltip />
          </PieChart>
        </div>
      </div>
    );
  }

}

export default styled(Totals)`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex: 1;

  .title {
    display: flex;
    font-size: 32px;
    justify-content: center;
    padding-bottom: 10px;
  }

  .data {
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-evenly;
  }

  .person {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 35px 55px;
  }

  .name {
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    padding-bottom: 10px;
  }
`;