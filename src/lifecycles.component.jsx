import React from 'react';

class Lifecycles extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor!');

    this.state = {
      message: 'The state inside constructor',
    }

  }

  // state = {
  //   message: 'State outside constructor',
  // }

  componentDidMount() {
    console.log('componentDidMount!');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate!');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount!');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate!', nextProps);
    //We only update, if the values are different (previous/next).
    //In this case they are different because we add "_hallo" every time to the text
    return nextProps.text !== this.props.text;
  }

  render() {
    console.log('render!');
    return (
      <div className='lifecycles'>
        <h3>LIFECYCLES COMPONENT</h3>
        {this.props.text}
        {this.state.message}
      </div>
    );
  }
}

export default Lifecycles;
