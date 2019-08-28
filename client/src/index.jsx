const React = require('react');
const ReactDOM = require('react-dom');

class TestComp extends React.Component {
  render() {
    return (
      <div>
        Hello world
      </div>
    )
  }
}

ReactDOM.render(<TestComp />, document.getElementById('youMayLike'));