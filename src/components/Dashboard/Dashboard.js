import React, {Component} from 'react';
import DefaultDashboardLogo from "../../assets/img/others/default-dashboard.png";
import {Col, CardBody, CardHeader, Card, CardFooter, Modal, ModalHeader,
    ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input,
} from "reactstrap";
import Moment from 'react-moment';
import * as actions from "../../store/actions";
import {connect} from "react-redux";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
        this.toggleConfigureModal = this.toggleConfigureModal.bind(this);
        this.state = {
            title: this.props.dashboardObject.title,
            newTitle: this.props.dashboardObject.title,
            theme: this.props.dashboardObject.theme,
            newTheme: this.props.dashboardObject.theme,
            id: this.props.dashboardObject.id,
            date_created: this.props.dashboardObject.date_created,
            deleteModalOpen: false,
            configureModalOpen: false,
        };
    }

    toggleDeleteModal() {
        this.setState({
            deleteModalOpen: !this.state.deleteModalOpen
        });
    }

    toggleConfigureModal() {
        this.setState({
            configureModalOpen: !this.state.configureModalOpen
        });
    }

    setDashboardTitle = (event) => {
        this.setState({
            newTitle: event.target.value
        });
    }

    setDashboardTheme = (event) => {
        this.setState({
            newTheme: event.target.value
        });
    }

    saveDashboard = () => {
        const dashboardObject = {
            date_created: this.state.date_created,
            id: this.state.id,
            title: this.state.newTitle,
            theme: this.state.newTheme,
        }
        this.props.onSaveDashboard(dashboardObject);
    }

    render() {
        return (
            <Col xs="12" sm="2" md="2" key={this.state.id} id={this.state.id}>
                <Modal isOpen={this.state.deleteModalOpen} toggle={this.toggleDeleteModal} // Delete Modal
                       className={'modal-danger'}>
                    <ModalHeader toggle={this.toggleDeleteModal}>Delete Dashboard {this.state.title} ?</ModalHeader>
                    <ModalBody>
                        This action can not be undone!
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={(event) => {this.toggleDeleteModal(); this.props.onDeleteDashboard(this.state.id)}} color="danger">Delete</Button>{' '}
                        <Button color="secondary" onClick={this.toggleDeleteModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.configureModalOpen} // Configure Modal
                       className={'modal-primary'}>
                    <ModalHeader toggle={this.toggleConfigureModal}>Configure Dashboard</ModalHeader>
                    <ModalBody>
                        <Form action="" method="post" className="form-horizontal">
                            <FormGroup row>
                                <Col md="2"><Label htmlFor="dashboard-title">Title</Label></Col>
                                <Col xs="12" md="10">
                                    <Input value={this.state.newTitle} onChange={this.setDashboardTitle} type="text" id="dashboard-title" name="dashboard-title" placeholder="Please enter title for dashboard" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="2">
                                    <Label htmlFor="themeSelect">Theme</Label>
                                </Col>
                                <Col xs="12" md="10">
                                    <Input type="select" name="themeSelect" id="themeSelect" onChange={this.setDashboardTheme} value={this.state.newTheme} className={this.state.newTheme}>
                                        <option value="">Default</option>
                                        <option className="bg-primary" value="border-primary">Border Primary</option>
                                        <option className="bg-secondary" value="border-secondary">Border Secondary</option>
                                        <option className="bg-success" value="border-success">Border Success</option>
                                        <option className="bg-info" value="border-info">Border Info</option>
                                        <option className="bg-warning" value="border-warning">Border Warning</option>
                                        <option className="bg-danger" value="border-danger">Border Danger</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={(event) => {this.toggleConfigureModal(); this.saveDashboard()}} color="primary">Save</Button>{' '}
                        <Button color="secondary" onClick={this.toggleConfigureModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <Card className={this.state.theme}>
                    <CardHeader className={this.state.theme}>
                        <a href={"#/dashboards/"+this.state.id}>{this.state.title}</a>
                        <div className="card-header-actions">
                            <button onClick={this.toggleConfigureModal} className="card-header-action btn btn-setting"><i className="icon-settings"></i></button>
                            <button onClick={this.toggleDeleteModal} className="card-header-action btn btn-close"><i className="icon-close"></i></button>
                        </div>
                    </CardHeader>
                    <CardBody><img className="card-img-bottom" src={DefaultDashboardLogo}
                                   alt="Default Dashboard"/></CardBody>
                    <CardFooter className={this.state.theme}>
                        Created - <Moment interval={0} format="DD MMM YYYY - hh:mm a" date={this.state.date_created}/>
                    </CardFooter>
                </Card>
            </Col>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSaveDashboard: (dashboardObject) => dispatch(actions.saveDashboard(dashboardObject)),
    }
}

export default connect(null, mapDispatchToProps)(Dashboard);
