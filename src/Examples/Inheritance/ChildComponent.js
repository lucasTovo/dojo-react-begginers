import React from 'react';

class ChildComponent extends React.Component {

  componentDidMount() {

    this.props.avisaQueMontou();

  }

  componentWillUnmount() {
    this.props.avisaQueDesmontou();
  }

  render() {
    return (
      <div>
        <h1>Fui renderizado, vou avisar o pai! :D</h1>
      </div>
    )
  }
};

export default ChildComponent;
