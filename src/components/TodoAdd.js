import React, { Component } from 'react';
import { View, Button, Icon, Item, Input } from 'native-base';
import { addTodo } from './../actions';
import { connect } from 'react-redux';
import { Keyboard } from 'react-native'

class TodoAdd extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todoTextreaValue: ''
		};

		this.addTodo = this.addTodo.bind(this);
	}

	addTodo() {
		this.props.dispatch(addTodo(this.state.todoTextreaValue));
		this.setState({
			todoTextreaValue: ''
		});
		Keyboard.dismiss();
	}

	todoTextareaChange(text) {
		this.setState({
			todoTextreaValue: text
		});
	}

	render() {
		return (
			<View>
				<Item regular>
					<Input placeholder='Please enter todo text here...' multiline={true} 
					onChangeText={(text) => this.todoTextareaChange(text)} 
					value={this.state.todoTextreaValue} />

					<Button full transparent primary style={{ height: '100%' }} onPress={this.addTodo}>
						<Icon name="ios-add-circle-outline" />
					</Button>
				</Item>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return state;
}

export default connect(mapStateToProps)(TodoAdd);