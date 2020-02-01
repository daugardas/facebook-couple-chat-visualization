import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

interface Text {
  first?: string;
  second?: string;
  warn?: string;
};

interface Props {
  className?: string;
  text: Text;
};

const Names = (props: Props) => (
  <div className={props.className}>
    {
      props.text.warn ? (
        <div className="warn">{props.text.warn}</div>
      ) : (
          <div className="name-container">
            <span className="name">{props.text.first}</span>
            <FontAwesomeIcon icon={faHeart} className="heart-icon" />
            <span className="name">{props.text.second}</span>
          </div>
        )
    }
  </div>
);

export default styled(Names)`
  display: flex;
  min-width: 600px;

  .warn {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    margin-left: 20px;
  }

  .name-container {
    display: flex;
    flex: 1;
    justify-content: space-evenly;
    font-size: 18px; 
  }
`;