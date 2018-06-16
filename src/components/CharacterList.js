import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { addCharacterById } from "../actions";

class CharacterList extends Component {
  render () {
    return (
        <div className="col-md-5 supers-list">
          <h4>Characters</h4>
          <ul className="list-group">
            {
              this.props.characters.map(character => {
                return (
                    <li key={ character.id } className="list-group-item row">
                      <div className="list-item col-md-10 text-center">
                        { character.name }
                        <div className="row character-description-list">
                          <div className="col-md-4 character-description-item">
                            Strenght: { character.strength }
                          </div>
                          <div className="col-md-4 character-description-item">
                            Intelligence: { character.intelligence }
                          </div>
                          <div className="col-md-4 character-description-item">
                            Speed: { character.speed }
                          </div>
                        </div>
                      </div>
                      <div onClick={ ()=> this.props.addCharacterById(character.id)} className="list-item right-button col-md-2 text-center btn btn-primary">
                        +
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
    characters: state.characters
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ addCharacterById }, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
export default connect(mapStateToProps, { addCharacterById })(CharacterList);