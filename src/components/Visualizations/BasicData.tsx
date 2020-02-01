import * as React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  value: number;
  type: string; // 'words', 'letters' and etc.
}

class BasicData extends React.Component<Props> {
  render() {
    const { className, value, type } = this.props;
    return (
      <div className={className}>
        <div className="value">{value}</div>
        <div className="type">{type}</div>
      </div>
    );
  };
}

export default styled(BasicData)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  
  .value {
    font-size: 44px;
  }

  .type {
    font-size: 20px;
  }
`;