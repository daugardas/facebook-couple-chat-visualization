import * as React from 'react';
import { ThemeProvider } from 'styled-components'

import BackgroundHearts from '../BackgroundHearts/BackgroundHearts';
import Visualizations from '../Visualizations';
//import VisualizationContainer from '../Visualizations/VisualizationContainer';
import { theme } from '../../themes/main'
import UploadJSON from '../Upload/Upload';
import Settings from '../Settings/Settings';
import Container from '../Container/Container';
//import BasicData from '../Visualizations/BasicData';

import '../../styles.css';

class App extends React.PureComponent {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<BackgroundHearts />
				<Container>
					<Settings>
						<UploadJSON />
					</Settings>
					<Visualizations />
				</Container>
			</ThemeProvider>
		);
	}
}

export default App;