// @noflow

import React, {Component} from 'react';
import {assetUrl} from 'fusion-core';

export default class Home extends Component<any, any> {
  constructor() {
    super();
    this.state = {
      content: 'no',
    };
  }

  componentDidMount() {
    fetch(assetUrl('../static/test.json'))
      .then(result => result.json())
      .then(result => {
        this.setState({
          content: result.content,
        });
      });
  }

  render() {
    return <div id="content">{this.state.content}</div>;
  }
}
