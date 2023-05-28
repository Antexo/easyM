//Notification.js is a component that displays a notification message
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import { clearNotification } from '../actions/notificationActions';

class Notification extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: true
        }
    }

    onDismiss = () => {
        this.setState({ visible: false });
        this.props.clearNotification();
    }

    render() {
        if (this.props.notification) {
            return (
                <Alert color={this.props.notification.type} isOpen={this.state.visible} toggle={this.onDismiss}>
                    {this.props.notification.message}
                </Alert>
            )
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state) => ({
    notification: state.notification
});

export default connect(mapStateToProps, { clearNotification })(Notification);