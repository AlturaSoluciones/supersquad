import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addCharacterById} from "../actions";

class HeroList extends Component {
  render() {
    return (
        <div className="col-md-4">
          <h4>Heroes List</h4>
          <ul className="list-group">
            {
              this.props.heroes.map(hero => {
                return (
                    <li key={hero.id} className="list-group-item">
                      <div className="list-item">
                        {hero.name}
                      </div>
                      <div className="list-item right-button">
                        -
                      </div>
                    </li>
                )
              })
            }
          </ul>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    heroes: state.heroes
  }
}

export default connect(mapStateToProps, {addCharacterById})(HeroList);