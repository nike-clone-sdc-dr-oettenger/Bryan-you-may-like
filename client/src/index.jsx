import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class TestComp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      shoes: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: 'http://localhost:6969/youMayLike',
      success: (data) => {
        console.log('data:', JSON.parse(data));
        this.setState({
          shoes: JSON.parse(data)
        })
      },
      error: (err) => {
        console.log('please just work already, i actually dont like programming', err);
      }
    })
  }

  render() {
    if (this.state.shoes.length > 0) {
    var items = this.state.shoes.map((elem, i) => {
      return (
        <div key = {i}>
          {elem.name}
          {elem.price}
          {elem.type}
          <img src = {elem.picture}></img>
        </div>
      )
    })
   }
    return (
      <div>
        {items}
      </div>
    )
  }
}

ReactDOM.render(<TestComp />, document.getElementById('youMayLike'));