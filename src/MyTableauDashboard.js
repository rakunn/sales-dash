import React, { Component } from 'react';
import tableau from 'tableau-api';

class MyTableauDashboard extends Component {
  constructor() {
    super();
    this.viz = {};
  }

  componentDidMount() {
    this.initViz();
  }

  initViz() {
    const vizUrl = 'https://public.tableau.com/views/Sales_889/Salesgraph';
    const vizContainer = this.vizContainer;
    const options = {
      width: '100vw',
      height: '100vh',
    };
    this.viz = new window.tableau.Viz(vizContainer, vizUrl, options);
  }

  render() {
    return (
      <div className="viz" ref={(div) => { this.vizContainer = div }} />
    );
  }
}

export default MyTableauDashboard;