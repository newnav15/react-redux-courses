import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
  render(){
      return (
        <div className="jumbotron">
          <h1>Hello Naveen</h1>
          <p> React, redux scratch 1 in es6 </p>
          <Link to="about" className="btn btn-primary btn-lg" >learn more </Link>

          </div>

      );
  }
}

export default HomePage;
