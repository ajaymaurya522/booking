import React, { PropTypes } from 'react';
import reactjs from '../../img/reactjs.jpg';
import reactrouter4 from '../../img/reactrouter4.jpg';
import bootstrap4 from '../../img/bootstrap4.jpg';
import webpack from '../../img/webpack.png';

var style={
  header:{
    padding: '15px'
  }
};

/**
 * Product Section.
 */
export default class ProductSection extends React.Component {

    componentDidMount() {
    }

    render() {
        return (

          <div>

          <section className="row">
            <div style={style.header}><h2>{this.props.title}</h2></div>
          </section>

          <section className="row">
              <div className="col-lg-3">
                  <div className="card">
                      <a href="https://facebook.github.io/react" target="_blank">
                          <img src={reactjs} className="card-img-top img-fluid" alt="ReactJS"/>
                      </a>
                      <div className="card-block">
                          <h3 className="card-title">ReactJS</h3>
                          <p>ReactJS/Redux using the ES2015 (ES6) syntax.</p>
                      </div>
                  </div>
              </div>


              <div className="col-lg-3">
                  <div className="card">
                      <a href="https://webpack.js.org/" target="_blank">
                          <img src={webpack} className="card-img-top img-fluid" alt="Webpack"/>
                      </a>
                      <div className="card-block">
                          <h3 className="card-title">Webpack</h3>
                          <p>Module Builder</p>
                      </div>
                  </div>
              </div>

              <div className="col-lg-3">
                  <div className="card">
                      <a href="https://webpack.js.org/" target="_blank">
                          <img src={webpack} className="card-img-top img-fluid" alt="Webpack"/>
                      </a>
                      <div className="card-block">
                          <h3 className="card-title">Webpack</h3>
                          <p>Module Builder</p>
                      </div>
                  </div>
              </div>

              <div className="col-lg-3">
                  <div className="card">
                      <a href="https://webpack.js.org/" target="_blank">
                          <img src={webpack} className="card-img-top img-fluid" alt="Webpack"/>
                      </a>
                      <div className="card-block">
                          <h3 className="card-title">Webpack</h3>
                          <p>Module Builder</p>
                      </div>
                  </div>
              </div>

          </section>

          </div>
        );
    }
}
