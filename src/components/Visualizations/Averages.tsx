import * as React from 'react';
import styled from 'styled-components';

import BasicData from './BasicData';

interface Props {
  className?: string;
  data: any;
};

class Totals extends React.Component<Props> {
  render() {
    const { className, data } = this.props;
    const { first, second } = data;

    return (
      <div className={className}>
        <div className="title">Averages</div>
        <div className="data">
          <div className="person">
            <div className="name">{first.name}</div>
            <div className="data">
              <BasicData value={first.wordsPerMessage} type="words per message" />
              <BasicData value={first.wordsPerDay} type="words per day" />
            </div>
          </div>
          <div className="person">
            <div className="name">{second.name}</div>
            <div className="data">
              <BasicData value={second.wordsPerMessage} type="words per message" />
              <BasicData value={second.wordsPerDay} type="words per day" />
            </div>
          </div>
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
    padding: 35px 45px;
  }

  .name {
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    padding-bottom: 10px;
  }
`;