//Code for Airtime Top Up component
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { airtimeTopUp } from '../actions/airtimeTopUp';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class AirtimeTopUp extends Component {
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

    handleAirtimeTopUp = (e) => {
        e.preventDefault();
        this.props.airtimeTopUp(this.state);
    }

    render() {
        return (
            <div>
                <h1>Airtime Top Up</h1>
                <Form onSubmit={this.handleAirtimeTopUp}>
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
    airtimeTopUp: state.airtimeTopUp
});

export default connect(mapStateToProps, { airtimeTopUp })(AirtimeTopUp);


if(this.props.airtimeTopUp){
    return (
        <div>
        <h1>Top Up Successful</h1>
        <h3>Balance: {this.props.airtimeTopUp.balance}</h3>
        <Link to="/"><Button color="primary">Home</Button></Link>
        </div>
    )
        
}



