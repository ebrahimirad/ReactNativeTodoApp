import React, { Component } from 'react';
import { Header, Body, Title } from 'native-base';
import { connect } from 'react-redux';

class TodoHeader extends Component {
    render() {
        return (
            <Header hasSegment>
                <Body style={{ alignItems: 'center' }}>
                    <Title>My Todo List</Title>
                </Body>
            </Header>
        );
    }
}

export default connect()(TodoHeader);