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

class Dashboards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NewDashboardModal: false,
            newDashboardTitle: '',
            dashboardList: [],
        };

        this.toggleNewDashboardModal = this.toggleNewDashboardModal.bind(this);
    }


    toggleNewDashboardModal() {
        this.setState({
            NewDashboardModal: !this.state.NewDashboardModal,
        });
    }

    setNewDashboardTitle = (event) => {
        this.setState({
            newDashboardTitle: event.target.value
        });
    }

    createNewDashboard = () => {
        // const dashboard = {
        //     title: this.state.newDashboardTitle
        // }
        // Save the new created dashboard title
    }


    componentDidMount() {
        // Load saved dashboard if any
    }


    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <ButtonGroup className="mr-2">
                            <Button color="primary" onClick={this.toggleNewDashboardModal}>New Dashboard</Button>
                            <Modal isOpen={this.state.NewDashboardModal} toggle={this.toggleNewDashboardModal}
                                   className={'modal-primary'}>
                                <ModalHeader toggle={this.toggleNewDashboardModal}>Modal title</ModalHeader>
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
                                    <Button color="primary" onClick={this.createNewDashboard}>Create</Button>{' '}
                                    <Button color="secondary" onClick={this.toggleNewDashboardModal}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                        </ButtonGroup>
                        <ButtonGroup className="mr-2">
                            <Button disabled color="success">Import</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row className="top-buffer">
                </Row>
            </div>
        );
    }
}

export default Dashboards;
