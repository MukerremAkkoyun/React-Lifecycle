import React, { Component } from 'react';
import Navigation from './components/Navigation';
import { Carousel } from 'react-bootstrap';

const divStyle = {
  width: '900px',
  margin: '0px auto'
 
};

class App extends Component {
  render() {
    return (
      <div>

        <Navigation />

        <div className="cotainer">
          <h1>title</h1>
        </div>

        <div style={divStyle} >
          <Carousel>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src="https://via.placeholder.com/900x320" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src="https://via.placeholder.com/900x320" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src="https://via.placeholder.com/900x320" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>;
        </div>
      </div>

      
    );
  }
}

export default App;
