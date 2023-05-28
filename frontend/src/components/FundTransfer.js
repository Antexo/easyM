//FundTransfer.js is a component that displays the user's account balance and allows them to make a fund transfer
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getBalance } from '../actions/getBalance';
import { fundTransfer } from '../actions/fundTransfer';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class FundTransfer extends Component {


    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            accountNumber: ''
        }



    }

    componentDidMount() {
        this.props.getBalance();
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleFundTransfer = (e) => {
        e.preventDefault();
        this.props.fundTransfer(this.state);
    }

    render() {
    
            
            if (this.props.balance) {
                return (
                    <div>
                        <h1>Fund Transfer</h1>
                        <h3>Balance: {this.props.balance}</h3>
                        <Form onSubmit={this.handleFundTransfer}>
                            <FormGroup>
                                <Label for="amount">Amount</Label>
                                <Input type="text" name="amount" id="amount" placeholder="Amount" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="accountNumber">Account Number</Label>
                                <Input type="text" name="accountNumber" id="accountNumber" placeholder="Account Number" onChange={this.handleChange} />
                            </FormGroup>
                            <Button color="primary">Submit</Button>
                        </Form>
                    </div>
                )
            } else {
                return (
                    <div>
                        <h1>Fund Transfer</h1>
                        <h3>Balance: </h3>
                        <Form onSubmit={this.handleFundTransfer}>
                            <FormGroup>
                                <Label for="amount">Amount</Label>
                                <Input type="text" name="amount" id="amount" placeholder="Amount" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="accountNumber">Account Number</Label>
                                <Input type="text" name="accountNumber" id="accountNumber" placeholder="Account Number" onChange={this.handleChange} />
                            </FormGroup>
                            <Button color="primary">Submit</Button>
                        </Form>
                    </div>
                )
            }

    }
}

const mapStateToProps = (state) => {
    return {
        balance: state.balance
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBalance: () => { dispatch(getBalance()) },
        fundTransfer: (data) => { dispatch(fundTransfer(data)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FundTransfer);

