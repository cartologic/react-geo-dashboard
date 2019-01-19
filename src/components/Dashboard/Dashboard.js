import React, {Component} from 'react';
import DefaultDashboardLogo from "../../assets/img/others/default-dashboard.png";
import {
    Col,
    CardBody,
    CardHeader,
    Card,
    CardFooter,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button
} from "reactstrap";
import Moment from 'react-moment';
import connect from "react-redux/es/connect/connect";


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
        this.state = {
            title: this.props.dashboardObject.title,
            id: this.props.dashboardObject.id,
            date_created: this.props.dashboardObject.date_created,
            deleteModalOpen: false,
        };
    }

    toggleDeleteModal() {
        this.setState({
            deleteModalOpen: !this.state.deleteModalOpen
        });
    }

    render() {
        return (
            <Col xs="12" sm="3" md="4" key={this.state.id} id={this.state.id}>
                <Modal isOpen={this.state.deleteModalOpen} toggle={this.toggleDeleteModal}
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
                <Card>
                    <CardHeader>
                        <a href={"#/dashboards/"+this.state.id}>{this.state.title}</a>
                        <div className="card-header-actions">
                            <button className="card-header-action btn btn-setting"><i className="icon-settings"></i></button>
                            <button onClick={this.toggleDeleteModal} className="card-header-action btn btn-close"><i className="icon-close"></i></button>
                        </div>
                    </CardHeader>
                    <CardBody><img className="card-img-bottom" src={DefaultDashboardLogo}
                                   alt="Default Dashboard"/></CardBody>
                    <CardFooter>
                        Created - <Moment interval={0} format="DD MMM YYYY - hh:mm a" date={this.state.date_created}/>
                    </CardFooter>
                </Card>
            </Col>
        )
    }
}

export default Dashboard;
