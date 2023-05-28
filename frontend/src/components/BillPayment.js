//BillPayment.js is a component that allows the user to pay their bill
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { billPayment } from '../actions/billPayment';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class BillPayment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            amount: '',
            network: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleBillPayment = (e) => {
        e.preventDefault();
        this.props.billPayment(this.state);
    }

    render() {
        return (
            <div>
                <h1>Bill Payment</h1>
                <Form onSubmit={this.handleBillPayment}>
                    <FormGroup>
                        <Label for="phoneNumber">Phone Number</Label>
                        <Input type="text" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="amount">Amount</Label>
                        <Input type="text" name="amount" id="amount" placeholder="Amount" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="network">Network</Label>
                        <Input type="text" name="network" id="network" placeholder="Network" onChange={this.handleChange} />
                    </FormGroup>
                    <Button color="primary">Submit</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    billPayment: state.billPayment
});


export default connect(mapStateToProps, { billPayment })(BillPayment);




