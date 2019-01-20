import React, {Component} from 'react';
import SdkMap from '@boundlessgeo/sdk/components/map';
import * as SdkMapActions from '@boundlessgeo/sdk/actions/map';
import {connect} from "react-redux";

class MapChart extends Component {
    componentDidMount() {
        // add the OSM source
        this.props.addOsmLayer();

        // add an OSM layer
        this.props.addLayer()
    }

    render() {
        return(
            <SdkMap />
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addOsmLayer: () => dispatch(SdkMapActions.addOsmSource('osm')),
        addLayer: () => dispatch(SdkMapActions.addLayer({
            id: 'osm',
            source: 'osm',
        })),
    }
}

export default connect(null, mapDispatchToProps)(MapChart);
