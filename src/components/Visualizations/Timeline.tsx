import * as React from 'react';
import styled from 'styled-components';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface Props {
  className?: string;
  data: any;
};

class Timeline extends React.Component<Props> {
  render() {
    const { className, data } = this.props;
    return (
      <div className={className}>
        <div className="title">Timeline</div>
        <div className="data">
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={data} >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" minTickGap={15} />
              <YAxis />
              <Tooltip />
              <Area unit=" words" type='monotone' name={data[0].first.name} dataKey='first.wordCount' stackId="1" stroke='#db7093' fill='#db7093' />
              <Area unit=" words" type='monotone' name={data[0].second.name} dataKey='second.wordCount' stackId="1" stroke='#7fbdff' fill='#7fbdff ' />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }

}

export default styled(Timeline)`
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