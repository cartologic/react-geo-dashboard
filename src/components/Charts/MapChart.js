import React, {Component} from 'react';
import SdkMap from '@boundlessgeo/sdk/components/map';
import * as SdkMapActions from '@boundlessgeo/sdk/actions/map';
import {connect} from "react-redux";

class MapChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dashboardID: props.dashboardID,
            widgetID: props.widgetID,
            config: {
                center: props.center,
                zoom: props.zoom,
            },
        };
    }


    componentDidMount() {
        // add the OSM source
        this.props.addOsmLayer();

        // add an OSM layer
        this.props.addLayer()


        this.props.setView([30, 27], 4)
    }

    render() {
        return(
            <SdkMap />
        );
    }
}

const mapStateToProps = state => {
    return {
        center: state.map.center,
        zoom: state.map.zoom,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addOsmLayer: () => dispatch(SdkMapActions.addOsmSource('osm')),
        addLayer: () => dispatch(SdkMapActions.addLayer({
            id: 'osm',
            source: 'osm',
        })),
        zoomIn: () => dispatch(SdkMapActions.zoomIn()),
        setView: (center, zoom) => dispatch(SdkMapActions.setView(center, zoom)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapChart);
