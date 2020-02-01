import * as React from 'react';
import styled from 'styled-components';
import { Treemap, Tooltip } from 'recharts';

interface Props {
  className?: string;
  data: any;
  firstName: string;
  secondName: string;
};

class MostUsedWords extends React.Component<Props> {
  render() {
    const { className, data, firstName, secondName } = this.props;
    console.log(data);
    return (
      <div className={className}>
        <div className="title">Most used words</div>
        <div className="data">
          <div className="person">
            <div className="name">{firstName}</div>
            <div className="data">
              <Treemap data={data.first} dataKey="value" fill="#db7093" stroke="#fff" width={600} height={800}>
                <Tooltip label="hellp"/>
              </Treemap>
            </div>
          </div>
          <div className="person">
            <div className="name">{secondName}</div>
            <div className="data">
              <Treemap data={data.second} dataKey="value" fill="#7fbdff" stroke="#fff" width={600} height={800}>
                <Tooltip label="hellp"/>
              </Treemap>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default styled(MostUsedWords)`
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
    padding: 10px;
  }

  .name {
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    padding-bottom: 10px;
  }
`;