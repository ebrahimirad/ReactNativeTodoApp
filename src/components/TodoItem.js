import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardItem, Text, Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import { toggleTodo } from './../actions';

class TodoItem extends Component {
	constructor(props) {
		super(props);
	}

	toggleTodo(todoId) {
		this.props.dispatch(toggleTodo(todoId));
	}

	render() {
		let button, cardItem;
		if (this.props.is_completed) {
			cardItem =
				<CardItem style={styles.cardCompleted}>
					<Text style={[styles.cardItemText, styles.textLineThrough]}>{this.props.text}</Text>
				</CardItem>;
			button =
				<Button full iconLeft small success onPress={() => this.toggleTodo(this.props.id)}>
					<Icon name="ios-checkmark-circle-outline" />
					<Text>Todo</Text>
				</Button>;
		}
		else {
			cardItem =
				<CardItem>
					<Text style={styles.cardItemText}>{this.props.text}</Text>
				</CardItem>;
			button =
				<Button full iconLeft small light onPress={() => this.toggleTodo(this.props.id)}>
					<Icon name="ios-checkmark-circle-outline" />
					<Text>Done</Text>
				</Button>;
		}

		return (
			<Card>
				{cardItem}
				{button}
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	return state;
}

export default connect(mapStateToProps)(TodoItem);


const styles = StyleSheet.create({
	cardCompleted: {
		backgroundColor: '#eaffd1'
	},
	cardItemText: {
		textAlign: "justify",
		lineHeight: 32
	},
	textLineThrough: {
		textDecorationLine: 'line-through'
	}
});