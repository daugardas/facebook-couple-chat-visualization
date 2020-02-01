import * as React from 'react';
import styled from 'styled-components';
import {
  Radar, RadarChart, PolarGrid, Legend,
  PolarAngleAxis, PolarRadiusAxis
} from 'recharts';

interface Props {
  className?: string;
  data: any;
  firstName: string;
  secondName: string;
};

class DayActivity extends React.Component<Props> {
  render() {
    const { className, data, firstName, secondName } = this.props;
    let chartData: any[] = [];
    for(let i = 0; i < 24; i++){
      chartData.push({ hour: `${i} h`, first: data.first[i], second: data.second[i]});
    }
    return (
      <div className={className}>
        <div className="title">Activity during day</div>
        <div className="data">

          <RadarChart cx={350} cy={350} outerRadius={300} width={700} height={700} data={chartData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="hour" />
            <PolarRadiusAxis angle={30} domain={['dataMin', 'dataMax']}/>
            <Radar name={firstName} dataKey="first" stroke="#db7093" fill="#db7093" fillOpacity={0.3} />
            <Radar name={secondName} dataKey="second" stroke="#7fbdff" fill="#7fbdff" fillOpacity={0.3} />
            <Legend />

          </RadarChart>
        </div>
      </div>
    );
  }

}

export default styled(DayActivity)`
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

  .name {
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    padding-bottom: 10px;
  }
`;