import styled from 'styled-components';

export default styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	flex-wrap: wrap;
	font-family: 'Quicksand', sans-serif;
	font-weight: ${props => props.theme.mainFontWeight};
	flex-direction: column;
	align-items: center;
`;