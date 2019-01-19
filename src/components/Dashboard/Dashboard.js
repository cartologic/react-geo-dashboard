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
        this.state = {
            title: this.props.dashboardObject.title,
            id: this.props.dashboardObject.id,
            date_created: this.props.dashboardObject.date_created,
        };
    }

    render() {
        return (
            <Col xs="12" sm="3" md="3" key={this.state.id} id={this.state.id}>
                <Modal isOpen={this.props.deleteDashboardModalOpen} toggle={this.props.onDeleteDashboard}
                       className={'modal-danger'}>
                    <ModalHeader toggle={this.props.onDeleteDashboard}>Delete Dashboard {this.state.title} ?</ModalHeader>
                    <ModalBody>
                        This action can not be undone!
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger">Delete</Button>{' '}
                        <Button color="secondary" onClick={this.props.onDeleteDashboard}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <Card>
                    <CardHeader>
                        <a href={"#/dashboards/"+this.state.id}>{this.state.title}</a>
                        <div className="card-header-actions">
                            <button className="card-header-action btn btn-setting"><i className="icon-settings"></i></button>
                            <button onClick={this.props.onDeleteDashboard} className="card-header-action btn btn-close"><i className="icon-close"></i></button>
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

const mapStateToProps = state => {
    return {
        deleteDashboardModalOpen: state.dashboardsReducer.deleteDashboardModalOpen,
    };
}

export default connect(mapStateToProps, null)(Dashboard);
