import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import { StatsList } from '../Components';

class ViewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios({
      method: 'get',
      url: 'http://localhost:9003/view',
      params: {
        objectId: id,
      },
    }).then((result) => {
      const { data } = result;
      this.setState({
        data,
      });
    }).catch((err) => {
    });
  }

  render() {
    const { data } = this.state;
    return (
      <Grid>
        <StatsList data={data} />
      </Grid>
    );
  }
}

export default ViewPage;
