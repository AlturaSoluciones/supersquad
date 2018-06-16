import React, {Component} from 'react';
import {connect} from 'react-redux';
import { removeCharacterById } from "../actions";

class HeroList extends Component {
  render() {
    return (
        <div className="col-md-5 supers-list">
          <h4>Heroes List</h4>
          <ul className="list-group">
            {
              this.props.heroes.map(hero => {
                return (
                    <li key={hero.id} className="list-group-item row">
                      <div className="list-item col-md-10 text-center">
                        {hero.name}
                        <div className="row character-description-list">
                          <div className="col-md-4 character-description-item">
                            Strenght: { hero.strength }
                          </div>
                          <div className="col-md-4 character-description-item">
                            Intelligence: { hero.intelligence }
                          </div>
                          <div className="col-md-4 character-description-item">
                            Speed: { hero.speed }
                          </div>
                        </div>
                      </div>
                      <div onClick={()=> this.props.removeCharacterById(hero.id)} className="list-item right-button col-md-2 text-center btn btn-danger">
                        x
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

export default connect(mapStateToProps, { removeCharacterById })(HeroList);