import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Container } from 'native-base';
import { createStore } from 'redux';
import reducers from './../reducers';
import TodoAdd from './TodoAdd';
import TodoContent from './TodoContent';
import TodoSegment from './TodoSegment';
import TodoHeader from './TodoHeader';

class App extends Component {
	store = createStore(reducers);

	render() {
		return (
			<Provider store={this.store}>
				<Container>
					<TodoHeader/>
					<TodoSegment/>
					<TodoContent/>
					<TodoAdd/>
				</Container>
			</Provider>
		);
	}
}

export default App;