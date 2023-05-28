//CheckBalance.js is a component that allows the user to check their balance
//  on the blockchain. It is similar to AirtimeTopUp.js, but it does not require    
//  the user to enter a phone number, amount, or network. It only requires the user
//  to click a button to check their balance. The code for CheckBalance.js is shown below:
//
// Path: frontend/src/components/CheckBalance.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkBalance } from '../actions/checkBalance';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CheckBalance extends Component {

    handleCheckBalance = (e) => {
        e.preventDefault();
        this.props.checkBalance();
    }

    render() {
        return (
            <div>
                <h1>Check Balance</h1>
                <Form onSubmit={this.handleCheckBalance}>
                    <Button color="primary">Submit</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    checkBalance: state.checkBalance
});

export default connect(mapStateToProps, { checkBalance })(CheckBalance);