import React, {Component} from 'react';
import {
    Alert,
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
import {Fab, Action} from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.min.css';
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
                           onDeleteDashboard={this.props.onDeleteDashboard}/>
        );

        return (
            <div className="animated fadeIn">
                <Fab
                    mainButtonStyles={{background: '#20a8d8'}}
                    event="hover"
                    position={{bottom:30, right:0}}
                    icon={<i className="fa fa-superpowers"/>}>
                    <Action
                        text="New Dashboard"
                        onClick={this.props.onToggleNewDashboardModal}
                        style={{background: '#4dbd74'}}><i className="fa fa-plus"/>
                    </Action>
                    <Action
                        disabled
                        text="Import (coming soon)"
                        style={{background: '#4dbd74'}}><i className="fa fa-download"/>
                    </Action>
                </Fab>
                <Alert color={this.props.alertColor} isOpen={this.props.alertOpen} toggle={this.props.alertDismiss}>
                    {this.props.alertMessage}
                </Alert>
                <Row>
                    <Col>
                        <Modal isOpen={this.props.newDashboardModalOpen}
                               toggle={this.props.onToggleNewDashboardModal}
                               className={'modal-primary'}>
                            <ModalHeader toggle={this.props.onToggleNewDashboardModal}>Create
                                Dashboard</ModalHeader>
                            <ModalBody>
                                <Form action="" method="post" className="form-horizontal">
                                    <FormGroup row>
                                        <Col md="2"><Label htmlFor="dashboard-title">Title</Label></Col>
                                        <Col xs="12" md="10">
                                            <Input onChange={this.setNewDashboardTitle} type="text"
                                                   id="dashboard-title" name="dashboard-title"
                                                   placeholder="Please enter title for dashboard"/>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button disabled={this.state.newDashboardTitle ? false : true} color="primary"
                                        onClick={() => this.props.onDashboardCreate(this.state.newDashboardTitle)}>Create</Button>{' '}
                                <Button color="secondary"
                                        onClick={this.props.onToggleNewDashboardModal}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
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
        alertOpen: state.dashboardsReducer.alertOpen,
        alertMessage: state.dashboardsReducer.alertMessage,
        alertColor: state.dashboardsReducer.alertColor,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onDashboardCreate: (newDashboardTitle) => dispatch(actions.createDashboard(newDashboardTitle)),
        onToggleNewDashboardModal: () => dispatch(actions.toggleNewDashboardModal()),
        loadSavedDashboards: () => dispatch(actions.loadSavedDashboards()),
        onDeleteDashboard: (dashboardID) => dispatch(actions.deleteDashboard(dashboardID)),
        alertDismiss: () => dispatch(actions.dismissAlert())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboards);
