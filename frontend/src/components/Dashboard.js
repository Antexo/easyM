//Dashboard.js is a component that displays the user's account balance and allows them to make a bill payment
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getBalance } from '../actions/getBalance';
import { billPayment } from '../actions/billPayment';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            biller: ''
        }
    }

    componentDidMount() {
        this.props.getBalance();
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleBillPayment = (e) => {
        e.preventDefault();
        this.props.billPayment(this.state);
    }

    render() {


        if (this.props.balance) {
            return (
                <div>
                    <h1>Dashboard</h1>
                    <h3>Balance: {this.props.balance}</h3>
                    <Form onSubmit={this.handleBillPayment}>
                        <FormGroup>
                            <Label for="amount">Amount</Label>
                            <Input type="text" name="amount" id="amount" placeholder="Amount" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="biller">Biller</Label>
                            <Input type="text" name="biller" id="biller" placeholder="Biller" onChange={this.handleChange} />
                        </FormGroup>
                        <Button color="primary">Submit</Button>
                    </Form>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Dashboard</h1>
                    <h3>Balance: </h3>
                    <Form onSubmit={this.handleBillPayment}>
                        <FormGroup>
                            <Label for="amount">Amount</Label>
                            <Input type="text" name="amount" id="amount" placeholder="Amount" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="biller">Biller</Label>
                            <Input type="text" name="biller" id="biller" placeholder="Biller" onChange={this.handleChange} />
                        </FormGroup>
                        <Button color="primary">Submit</Button>
                    </Form>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    balance: state.getBalance.balance,
    billPayment: state.billPayment
});

export default connect(mapStateToProps, { getBalance, billPayment })(Dashboard);

