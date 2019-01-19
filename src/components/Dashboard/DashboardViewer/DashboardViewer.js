import React, {Component} from 'react';
import {AreaChart, ColumnChart, LineChart, BubbleChart, BarChart} from '../../Charts';
import {Row, Col, Button, CardBody, Card, Tooltip} from "reactstrap";
import {
    aggregateWidgetIcon, areaWidgetIcon, barWidgetIcon,
    bubbleWidgetIcon, columnWidgetIcon, identifyWidgetIcon,
    legendWidgetIcon, lineWidgetIcon, mapWidgetIcon, pieWidgetIcon
} from "../../../assets/img/widgets/";


class DashboardViewer extends Component {
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

    constructor(props) {
        super(props);
        this.toggleToolTip = this.toggleToolTip.bind(this);
        this.state = {
            tooltipOpen: [false, false, false, false, false, false, false, false, false, false],
            widgets: []
        }
    }

    toggleToolTip(i) {
        const newArray = this.state.tooltipOpen.map((element, index) => {
            return (index === i ? !element : false);
        });
        this.setState({
            tooltipOpen: newArray,
        });
    }

    addChart = (chartType) => {
        const updatedWidgets = this.state.widgets;
        switch (chartType) {
            case "area":
                updatedWidgets.push(<AreaChart/>);
                break;
            case "bar":
                updatedWidgets.push(<BarChart/>);
                break;
            case "bubble":
                updatedWidgets.push(<BubbleChart/>);
                break;
            case "column":
                updatedWidgets.push(<ColumnChart/>);
                break;
            case "line":
                updatedWidgets.push(<LineChart/>);
                break;
            default:
                updatedWidgets.push(<LineChart/>);
                break;
        }
        this.setState({
            widgets: updatedWidgets
        })
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12">
                        <Card className="align-items-center">
                        <CardBody>
                            <Button id="mapWidgetIcon" color="light"><div className="avatar float-right"><img className="img-avatar" src={mapWidgetIcon} alt="WidgetIcon"></img></div></Button>
                            <Tooltip placement="bottom" isOpen={this.state.tooltipOpen[0]} target="mapWidgetIcon" toggle={() => {this.toggleToolTip(0);}}>Map</Tooltip>
                            {' '}
                            <Button id="barWidgetIcon" color="light"><div className="avatar float-right"><img className="img-avatar" src={barWidgetIcon} alt="WidgetIcon"></img></div></Button>
                            <Tooltip placement="bottom" isOpen={this.state.tooltipOpen[1]} target="barWidgetIcon" toggle={() => {this.toggleToolTip(1);}}>Bar</Tooltip>
                            {' '}
                            <Button id="pieWidgetIcon" color="light"><div className="avatar float-right"><img className="img-avatar" src={pieWidgetIcon} alt="WidgetIcon"></img></div></Button>
                            <Tooltip placement="bottom" isOpen={this.state.tooltipOpen[2]} target="pieWidgetIcon" toggle={() => {this.toggleToolTip(2);}}>Pie</Tooltip>
                            {' '}
                            <Button id="lineWidgetIcon" color="light"><div className="avatar float-right"><img className="img-avatar" src={lineWidgetIcon} alt="WidgetIcon"></img></div></Button>
                            <Tooltip placement="bottom" isOpen={this.state.tooltipOpen[3]} target="lineWidgetIcon" toggle={() => {this.toggleToolTip(3);}}>Line</Tooltip>
                            {' '}
                            <Button id="areaWidgetIcon" color="light"><div className="avatar float-right"><img className="img-avatar" src={areaWidgetIcon} alt="WidgetIcon"></img></div></Button>
                            <Tooltip placement="bottom" isOpen={this.state.tooltipOpen[4]} target="areaWidgetIcon" toggle={() => {this.toggleToolTip(4);}}>Area</Tooltip>
                            {' '}
                            <Button id="columnWidgetIcon" color="light"><div className="avatar float-right"><img className="img-avatar" src={columnWidgetIcon} alt="WidgetIcon"></img></div></Button>
                            <Tooltip placement="bottom" isOpen={this.state.tooltipOpen[5]} target="columnWidgetIcon" toggle={() => {this.toggleToolTip(5);}}>Column</Tooltip>
                            {' '}
                            <Button id="bubbleWidgetIcon" color="light"><div className="avatar float-right"><img className="img-avatar" src={bubbleWidgetIcon} alt="WidgetIcon"></img></div></Button>
                            <Tooltip placement="bottom" isOpen={this.state.tooltipOpen[6]} target="bubbleWidgetIcon" toggle={() => {this.toggleToolTip(6);}}>Bubble</Tooltip>
                            {' '}
                            <Button id="aggregateWidgetIcon" color="light"><div className="avatar float-right"><img className="img-avatar" src={aggregateWidgetIcon} alt="WidgetIcon"></img></div></Button>
                            <Tooltip placement="bottom" isOpen={this.state.tooltipOpen[7]} target="aggregateWidgetIcon" toggle={() => {this.toggleToolTip(7);}}>Aggregate</Tooltip>
                            {' '}
                            <Button id="legendWidgetIcon" color="light"><div className="avatar float-right"><img className="img-avatar" src={legendWidgetIcon} alt="WidgetIcon"></img></div></Button>
                            <Tooltip placement="bottom" isOpen={this.state.tooltipOpen[8]} target="legendWidgetIcon" toggle={() => {this.toggleToolTip(8);}}>Legend</Tooltip>
                            {' '}
                            <Button id="identifyWidgetIcon" color="light"><div className="avatar float-right"><img className="img-avatar" src={identifyWidgetIcon} alt="WidgetIcon"></img></div></Button>
                            <Tooltip placement="bottom" isOpen={this.state.tooltipOpen[9]} target="identifyWidgetIcon" toggle={() => {this.toggleToolTip(9);}}>Identify</Tooltip>
                            {' '}
                        </CardBody>
                        </Card>
                    </Col>
                </Row>
                <div>{this.props.match.params.id}</div>

            </div>
        )
    }
}

export default DashboardViewer;
