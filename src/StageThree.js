import React, { Component } from 'react';
import { connect } from 'react-redux';
import CompareItem from './CompareItem';
import './StageThree.css';
import'./App.css';

class StageThree extends Component {
  render() {
    let { compare } = this.props;
    debugger;
    return (
      <div className="container">
        <form>
          <div className="heading">
            <div className="form-items">
              <label className="form-heading">Initial</label>
            </div>
            <div className="form-items">
              <label className="form-heading">Change</label>
            </div>
            <div className="form-items">
              <label className="form-heading">Concept</label>
            </div>
          </div>
          {
            compare.comparison.map( ( item, index ) =>  {
              return <CompareItem
                        key={ index }
                        id={ index }
                        data={ item } />
            })
          }
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  };
};

export default connect()(StageThree);