import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Autocomplete } from 'react-materialize';
import { fetchLocalities } from '../../actions';
import './SearchLocality.css';

class SearchLocality extends PureComponent {
  componentDidMount() {
    this.props.fetchLocalities();
  }

  render() {
    return (
      <Autocomplete
        placeholder="Search Locality"
        data={this.props.localities}
      />
    );
  }
}

function mapStateToProps({ localities }) {
  return { localities };
}

export default connect(
  mapStateToProps,
  { fetchLocalities }
)(SearchLocality);
