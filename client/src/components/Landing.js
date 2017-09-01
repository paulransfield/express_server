import React from 'react';

const Landing = () => {
  return (
    <div>
      <div className="row">
        <div className="col s4">
          <div className="card" style={{ margin: '15px 0 0 0' }}>
            <div className="card-image">
              <img
                src="http://lorempixel.com/output/city-q-c-350-350-5.jpg"
                className="responsive-img z-depth-4"
                alt=""
              />
              <span className="card-title">Cities</span>
              <a className="btn-floating halfway-fab waves-effect waves-light red">
                <i className="material-icons">add</i>
              </a>
            </div>
          </div>
        </div>
        <div className="col s4">
          <div className="card" style={{ margin: '15px 0 0 0' }}>
            <div className="card-image">
              <img
                src="http://lorempixel.com/output/sports-q-c-350-350-5.jpg"
                className="responsive-img z-depth-4"
                alt=""
              />
              <span className="card-title">Sports</span>
              <a
                className="btn-floating halfway-fab waves-effect waves-light red"
                href="/datavisual.html"
              >
                <i className="fa fa-key" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="col s4">
          <div className="card" style={{ margin: '15px 0 0 0' }}>
            <div className="card-image">
              <img
                src="http://lorempixel.com/output/nature-q-c-350-350-5.jpg"
                className="responsive-img z-depth-4"
                alt=""
              />
              <span className="card-title">Nature</span>
              <a className="btn-floating halfway-fab waves-effect waves-light red">
                <i className="material-icons">add</i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s4">
          <div className="card">
            <div className="card-image">
              <img
                src="http://lorempixel.com/output/food-q-c-350-350-5.jpg"
                className="responsive-img z-depth-4"
                alt=""
              />
              <span className="card-title">Food</span>
              <a className="btn-floating halfway-fab waves-effect waves-light red">
                <i className="material-icons">add</i>
              </a>
            </div>
          </div>
        </div>
        <div className="col s4">
          <div className="card">
            <div className="card-image">
              <img
                src="http://lorempixel.com/output/technics-q-c-350-350-5.jpg"
                className="responsive-img z-depth-4"
                alt=""
              />
              <span className="card-title">Technics</span>
              <a className="btn-floating halfway-fab waves-effect waves-light red">
                <i className="material-icons">add</i>
              </a>
            </div>
          </div>
        </div>
        <div className="col s4">
          <div className="card">
            <div className="card-image">
              <img
                src="http://lorempixel.com/output/abstract-q-c-350-350-5.jpg"
                className="responsive-img z-depth-4"
                alt=""
              />
              <span className="card-title">Abstract</span>
              <a className="btn-floating halfway-fab waves-effect waves-light red">
                <i className="material-icons">add</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
