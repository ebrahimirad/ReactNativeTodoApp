import React, { Component } from 'react';
import { Text, Button, Segment } from 'native-base';
import { connect } from 'react-redux';
import { setTodoSegment } from './../actions';

class TodoSegment extends Component {
    setTodoSegment(name) {
        this.props.dispatch(setTodoSegment(name));
    }

    render() {
        return (
            <Segment>
                <Button first active={this.props.todoSegment === 'TODO_SEGMENT_ALL'} onPress={() => this.setTodoSegment('TODO_SEGMENT_ALL')}>
                    <Text>All</Text>
                </Button>
                <Button active={this.props.todoSegment === 'TODO_SEGMENT_TODO'} onPress={() => this.setTodoSegment('TODO_SEGMENT_TODO')}>
                    <Text>Todo</Text>
                </Button>
                <Button last active={this.props.todoSegment === 'TODO_SEGMENT_DONE'} onPress={() => this.setTodoSegment('TODO_SEGMENT_DONE')}>
                    <Text>Done</Text>
                </Button>
            </Segment>
        );
    }
}

const mapStateToProps = (state) => {
	return state;
}

export default connect(mapStateToProps)(TodoSegment);