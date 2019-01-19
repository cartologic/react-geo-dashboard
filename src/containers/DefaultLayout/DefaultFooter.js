import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span><a href="https://github.com/cartologic/geo-dashboard">Geo Dashboard v{process.env.REACT_APP_VERSION}</a> &copy;</span>
        <span className="ml-auto">Powered by <a href="http://cartologic.com/">Cartologic R&D</a></span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;