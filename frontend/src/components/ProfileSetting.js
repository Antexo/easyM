//ProfileSetting.js is a component that allows the user to change their profile picture and username
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import PropTypes from 'prop-types';
import { updateUser } from '../actions/authActions';
import { clearNotification } from '../actions/notificationActions';
import { Alert } from 'reactstrap';
import { Spinner } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Jumbotron } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Table } from 'reactstrap';
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

class ProfileSetting extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            profilePicture: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

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

        //if there are errors, set the errors state
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    //update the state of the username and profile picture
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    //when the user submits the form, update the user's profile
    onSubmit(e) {
        e.preventDefault();

        const updatedUser = {
            username: this.state.username,
            profilePicture: this.state.profilePicture
        }

        this.props.updateUser(updatedUser, this.props.history);
    }

    render() {


        return (
            <div>
                <h1>Profile Settings</h1>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input type="text" name="username" id="username" placeholder="Username" onChange={this.onChange} value={this.state.username} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="profilePicture">Profile Picture</Label>
                        <Input type="text" name="profilePicture" id="profilePicture" placeholder="Profile Picture" onChange={this.onChange} value={this.state.profilePicture} />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>
        )
            
            

    }
}

ProfileSetting.propTypes = {
    updateUser: PropTypes.func.isRequired,
    clearNotification: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
    notification: state.notification
});

export default connect(mapStateToProps, { updateUser, clearNotification })(ProfileSetting);

