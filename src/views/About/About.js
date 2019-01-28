import React, {Component} from 'react';
import {
    Card, CardBody, CardHeader, Col,
    Row,
} from 'reactstrap';


class About extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                About
                            </CardHeader>
                            <CardBody>
                                <p><a href="https://github.com/cartologic/react-geo-dashboard">React Geo Dashboard v{process.env.REACT_APP_VERSION}</a> &copy;</p>
                                <p className="ml-auto">Powered by <a href="http://cartologic.com/">Cartologic R&D</a></p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default About;
