import React, {Component} from 'react';
import {AreaChart, ColumnChart, LineChart, BubbleChart, BarChart, MapChart, AggregateChart} from '../../Charts';
import {Row, Col, Button, CardBody, Card, CardHeader, Tooltip} from "reactstrap";
import {
    aggregateWidgetIcon, areaWidgetIcon, barWidgetIcon,
    bubbleWidgetIcon, columnWidgetIcon, identifyWidgetIcon,
    legendWidgetIcon, lineWidgetIcon, mapWidgetIcon, pieWidgetIcon
} from "../../../assets/img/widgets/";
import _ from "lodash";
import { WidthProvider, Responsive } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const uuidv = require('uuid/v4');

class DashboardViewer extends Component {
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

    constructor(props) {
        super(props);
        const dashboardObject = this.loadDashboardFromLS();
        this.toggleToolTip = this.toggleToolTip.bind(this);
        this.state = {
            dashboardID: props.match.params.id,
            tooltipOpen: [false, false, false, false, false, false, false, false, false, false],
            layouts: dashboardObject.layouts,
            widgets: dashboardObject.widgets,
        }
    }

    loadDashboardFromLS() {
        let dashboardExists = false;
        const storedData = localStorage.getItem("dashboardList");
        if (storedData) {
            const newDashboardList = JSON.parse(storedData);
            for( let i=0; i<newDashboardList.length; i++) {
                if(newDashboardList[i].id === this.props.match.params.id) { // Found it
                    dashboardExists = true;
                    return(newDashboardList[i]);
                }
            }
        }
        if(!dashboardExists) {
            this.props.history.push('/dashboards')
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
        updatedWidgets.push(
            {key: uuidv(), w: 3, h: 8, x: 0, y: 0, type: chartType, title: chartType, config: {}}
            );
        this.setState({
            widgets: updatedWidgets
        })
    }

    onLayoutChange(layout, layouts) {
        const storedData = localStorage.getItem("dashboardList");
        if (storedData) {
            const newDashboardList = JSON.parse(storedData);
            for( let i=0; i<newDashboardList.length; i++) {
                if(newDashboardList[i].id === this.props.match.params.id) { // Found it
                    newDashboardList[i].layouts = layouts;
                    newDashboardList[i].widgets = this.state.widgets;
                    localStorage.setItem("dashboardList", JSON.stringify(newDashboardList));
                }
            }
        }
        this.setState({ layouts });
    }

    createElement(el) {
        let requestedChart = <LineChart/>;
        switch (el.type) {
            case "BarChart": requestedChart = <BarChart/>; break;
            case "AreaChart": requestedChart = <AreaChart/>; break;
            case "BubbleChart": requestedChart = <BubbleChart/>; break;
            case "ColumnChart": requestedChart = <ColumnChart/>; break;
            case "LineChart": requestedChart = <LineChart/>; break;
            case "MapChart": requestedChart = <MapChart dashboardID={this.state.dashboardID} widgetID={el.key} config={el.config}/>; break;
            case "AggregateChart": requestedChart = <AggregateChart/>; break;
            default: requestedChart = <LineChart/>;
        }
        return(
            <Card key={el.key} data-grid={{x: el.x, y: el.y, w: el.w, h: el.h}}>
                <CardHeader>
                    {el.title}
                    <div className="card-header-actions">
                        <button className="card-header-action btn"><i className="fa fa-save"></i></button>
                        <button className="card-header-action btn btn-setting"><i className="icon-settings"></i></button>
                        <button onClick={() => this.removeElement(el.key)} className="card-header-action btn btn-close"><i className="icon-close"></i></button>
                    </div>
                </CardHeader>
                    {requestedChart}
            </Card>
        );
    }

    removeElement = (key) => {
        let updatedWidgets = this.state.widgets;
        for(let i=0; i<updatedWidgets.length; i++) {
            if(updatedWidgets[i].key === key) { // Found it
                updatedWidgets.splice(i, 1);
                this.setState({widgets: updatedWidgets});
                break;
            }
        }
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12">
                        <Card className="align-items-center">
                        <CardBody>
                            <Button onClick={() => this.addChart("MapChart")} id="mapWidgetIcon" color="light"><div className="avatar float-right"><img className="img-avatar" src={mapWidgetIcon} alt="WidgetIcon"></img></div></Button>
                            <Tooltip placement="bottom" isOpen={this.state.tooltipOpen[0]} target="mapWidgetIcon" toggle={() => {this.toggleToolTip(0);}}>Map</Tooltip>
                            {' '}
                            <Button onClick={() => this.addChart("BarChart")} id="barWidgetIcon" color="light"><div className="avatar float-right"><img className="img-avatar" src={barWidgetIcon} alt="WidgetIcon"></img></div></Button>
                            <Tooltip placement="bottom" isOpen={this.state.tooltipOpen[1]} target="barWidgetIcon" toggle={() => {this.toggleToolTip(1);}}>Bar</Tooltip>
                            {' '}
                            <Button disabled onClick={() => this.addChart("PieChart")} id="pieWidgetIcon" color="light"><div className="avatar float-right"><img className="img-avatar" src={pieWidgetIcon} alt="WidgetIcon"></img></div></Button>
                            <Tooltip placement="bottom" isOpen={this.state.tooltipOpen[2]} target="pieWidgetIcon" toggle={() => {this.toggleToolTip(2);}}>Pie</Tooltip>
                            {' '}
                            <Button onClick={() => this.addChart("LineChart")} id="lineWidgetIcon" color="light"><div className="avatar float-right"><img className="img-avatar" src={lineWidgetIcon} alt="WidgetIcon"></img></div></Button>
                            <Tooltip placement="bottom" isOpen={this.state.tooltipOpen[3]} target="lineWidgetIcon" toggle={() => {this.toggleToolTip(3);}}>Line</Tooltip>
                            {' '}
                            <Button onClick={() => this.addChart("AreaChart")} id="areaWidgetIcon" color="light"><div className="avatar float-right"><img className="img-avatar" src={areaWidgetIcon} alt="WidgetIcon"></img></div></Button>
                            <Tooltip placement="bottom" isOpen={this.state.tooltipOpen[4]} target="areaWidgetIcon" toggle={() => {this.toggleToolTip(4);}}>Area</Tooltip>
                            {' '}
                            <Button onClick={() => this.addChart("ColumnChart")} id="columnWidgetIcon" color="light"><div className="avatar float-right"><img className="img-avatar" src={columnWidgetIcon} alt="WidgetIcon"></img></div></Button>
                            <Tooltip placement="bottom" isOpen={this.state.tooltipOpen[5]} target="columnWidgetIcon" toggle={() => {this.toggleToolTip(5);}}>Column</Tooltip>
                            {' '}
                            <Button onClick={() => this.addChart("BubbleChart")} id="bubbleWidgetIcon" color="light"><div className="avatar float-right"><img className="img-avatar" src={bubbleWidgetIcon} alt="WidgetIcon"></img></div></Button>
                            <Tooltip placement="bottom" isOpen={this.state.tooltipOpen[6]} target="bubbleWidgetIcon" toggle={() => {this.toggleToolTip(6);}}>Bubble</Tooltip>
                            {' '}
                            <Button onClick={() => this.addChart("AggregateChart")} id="aggregateWidgetIcon" color="light"><div className="avatar float-right"><img className="img-avatar" src={aggregateWidgetIcon} alt="WidgetIcon"></img></div></Button>
                            <Tooltip placement="bottom" isOpen={this.state.tooltipOpen[7]} target="aggregateWidgetIcon" toggle={() => {this.toggleToolTip(7);}}>Aggregate</Tooltip>
                            {' '}
                            <Button disabled onClick={() => this.addChart("LegendChart")} id="legendWidgetIcon" color="light"><div className="avatar float-right"><img className="img-avatar" src={legendWidgetIcon} alt="WidgetIcon"></img></div></Button>
                            <Tooltip placement="bottom" isOpen={this.state.tooltipOpen[8]} target="legendWidgetIcon" toggle={() => {this.toggleToolTip(8);}}>Legend</Tooltip>
                            {' '}
                            <Button disabled onClick={() => this.addChart("IdentifyChart")} id="identifyWidgetIcon" color="light"><div className="avatar float-right"><img className="img-avatar" src={identifyWidgetIcon} alt="WidgetIcon"></img></div></Button>
                            <Tooltip placement="bottom" isOpen={this.state.tooltipOpen[9]} target="identifyWidgetIcon" toggle={() => {this.toggleToolTip(9);}}>Identify</Tooltip>
                            {' '}
                        </CardBody>
                        </Card>
                    </Col>
                </Row>
                <div>
                    <ResponsiveReactGridLayout
                        className="layout"
                        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                        rowHeight={30}
                        layouts={this.state.layouts}
                        onLayoutChange={
                            (layout, layouts) => this.onLayoutChange(layout, layouts)
                        }>
                        {_.map(this.state.widgets, el => this.createElement(el))}
                    </ResponsiveReactGridLayout>
                </div>
            </div>
        )
    }
}

export default DashboardViewer;
