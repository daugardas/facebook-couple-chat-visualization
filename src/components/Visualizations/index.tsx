import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Totals from './Totals';
import Averages from './Averages';
import VisualizationContainer from './VisualizationContainer';
import Timeline from './Timeline';
import DayActivity from './DayActivity';
import MostUsedWords from './MostUsedWords';

interface Props {
  className?: string;
  data?: any;
};

class Visualizations extends React.Component<Props> {
  render() {
    if (this.props.data.totals.days !== 0) {
      return (
        <div className={this.props.className}>
          <VisualizationContainer>
            <Totals data={this.props.data.totals} />
          </VisualizationContainer>
          <VisualizationContainer>
            <Averages data={this.props.data.averages} />
          </VisualizationContainer>
          <VisualizationContainer>
            <Timeline data={this.props.data.messagesOfDate} />
          </VisualizationContainer>
          <VisualizationContainer>
            <DayActivity data={this.props.data.dayActivity} firstName={this.props.data.averages.first.name} secondName={this.props.data.averages.second.name} />
          </VisualizationContainer>
          <VisualizationContainer>
            <MostUsedWords data={this.props.data.totals.words} firstName={this.props.data.averages.first.name} secondName={this.props.data.averages.second.name} />
          </VisualizationContainer>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

}

/* function downloadState(state: any) {
  var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state));
  let a: HTMLAnchorElement = document.createElement("a") as HTMLAnchorElement;
  a.href = `data:${data}`;
  a.download = "testState.json";
  a.click();
} */

function mapStateToProps(state: any) {
  //downloadState(state);
  const { data } = state;
  return { data };
  //return { data: { averages: data.averages, totals: data.totals, firstMessage: data.firstMessage } };
}

export default connect(mapStateToProps, null)(styled(Visualizations)`
  display: flex;
  flex-direction: column;
  align-items: center;
`);