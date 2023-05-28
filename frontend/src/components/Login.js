//login.js is a component that displays a login form and handles user login
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Jumbotron } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Table } from 'reactstrap';
import { Alert } from 'reactstrap';
import { Badge } from 'reactstrap';
import { Media } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Progress } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { Tooltip } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { UncontrolledAlert } from 'reactstrap';
import { UncontrolledButtonDropdown, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { ButtonDropdown, ButtonGroup } from 'reactstrap';
import { Fade } from 'reactstrap';
import { CardLink } from 'reactstrap';
import { CardDeck } from 'reactstrap';
import { CardColumns } from 'reactstrap';
import { CardGroup } from 'reactstrap';
import { UncontrolledCarousel } from 'reactstrap';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import { UncontrolledCollapse, Button } from 'reactstrap';
import { UncontrolledAlert } from 'reactstrap';
import { UncontrolledTooltip } from 'reactstrap';
import { Spinner } from 'reactstrap';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { FormFeedback } from 'reactstrap';
import { FormText } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';


class Login extends Component {


    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        };
    }

    //if user is already logged in, redirect to dashboard
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    //if user is already logged in, redirect to dashboard
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
        //if there are errors, set them to the state
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    //update state with user input
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    //when user submits login form, call loginUser action
    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        //call loginUser action
        this.props.loginUser(userData);
    };

    render() {
        const { errors } = this.state;
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <CardBody>
                                    <CardTitle>Login</CardTitle>
                                    <Form noValidate onSubmit={this.onSubmit}>
                                        <FormGroup>
                                            <Label for="email">Email</Label>
                                            <Input
                                                onChange={this.onChange}
                                                value={this.state.email}
                                                error={errors.email}
                                                id="email"
                                                type="email"
                                                className={classnames("", {
                                                    invalid: errors.email || errors.emailnotfound
                                                })}
                                            />
                                            <span className="red-text">
                                                {errors.email}
                                                {errors.emailnotfound}
                                            </span>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="password">Password</Label>
                                            <Input
                                                onChange={this.onChange}
                                                value={this.state.password}
                                                error={errors.password}
                                                id="password"
                                                type="password"
                                                className={classnames("", {
                                                    invalid: errors.password || errors.passwordincorrect
                                                })}
                                            />
                                            <span className="red-text">
                                                {errors.password}
                                                {errors.passwordincorrect}
                                            </span>
                                        </FormGroup>
                                        <Button>Submit</Button>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </div>
        );
    }
}

//define prop types
Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

//map state to props
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

//export component
export default connect(
    mapStateToProps,
    { loginUser }
)(Login);
