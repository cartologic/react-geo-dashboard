import React, {Component} from 'react';
import {
    Button,
    ButtonGroup,
    Col,
    Form,
    FormGroup, Input, Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Row,
} from 'reactstrap';
import * as actions from '../../store/actions/index';
import {connect} from "react-redux";
import Dashboard from "../../components/Dashboard/Dashboard";


class Dashboards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newDashboardTitle: '',
        };
    }

    setNewDashboardTitle = (event) => {
        this.setState({
            newDashboardTitle: event.target.value
        });
    }

    componentDidMount() {
        this.props.loadSavedDashboards();
    }


    render() {
        const dashboardList = this.props.dashboardList.map(
            (dashboard, index) =>
                <Dashboard key={dashboard.id} dashboardObject={dashboard}
                           onDeleteDashboard={this.props.onDeleteDashboard}
                           continueDeleteDashboard={this.props.continueDeleteDashboard}/>
        );

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <ButtonGroup className="mr-2">
                            <Button color="primary" onClick={this.props.onToggleNewDashboardModal}>New Dashboard</Button>
                            <Modal isOpen={this.props.newDashboardModalOpen} toggle={this.props.onToggleNewDashboardModal}
                                   className={'modal-primary'}>
                                <ModalHeader toggle={this.props.onToggleNewDashboardModal}>Create Dashboard</ModalHeader>
                                <ModalBody>
                                    <Form action="" method="post" className="form-horizontal">
                                        <FormGroup row>
                                            <Col md="2"><Label htmlFor="dashboard-title">Title</Label></Col>
                                            <Col xs="12" md="10">
                                                <Input onChange={this.setNewDashboardTitle} type="text" id="dashboard-title" name="dashboard-title" placeholder="Please enter title for dashboard"/>
                                            </Col>
                                        </FormGroup>
                                    </Form>
                                </ModalBody>
                                <ModalFooter>
                                    <Button disabled={this.state.newDashboardTitle ? false : true} color="primary" onClick={() => this.props.onDashboardCreate(this.state.newDashboardTitle)}>Create</Button>{' '}
                                    <Button color="secondary" onClick={this.props.onToggleNewDashboardModal}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                        </ButtonGroup>
                        <ButtonGroup className="mr-2">
                            <Button disabled color="success">Import</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row className="top-buffer">
                    {dashboardList}
                </Row>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        newDashboardModalOpen: state.dashboardsReducer.newDashboardModalOpen,
        dashboardList: state.dashboardsReducer.dashboardList,
        deleteDashboardModalOpen: state.dashboardsReducer.deleteDashboardModalOpen,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onDashboardCreate: (newDashboardTitle) => dispatch(actions.createDashboard(newDashboardTitle)),
        onToggleNewDashboardModal: () => dispatch(actions.toggleNewDashboardModal()),
        loadSavedDashboards: () => dispatch(actions.loadSavedDashboards()),
        onDeleteDashboard: () => dispatch(actions.deleteDashboard()),
        continueDeleteDashboard: (dashboardID) => dispatch(actions.continueDeleteDashboard(dashboardID)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboards);
