import React, {Component} from 'react';
import CharacterList from './CharacterList';
import HeroList from './HeroList';
import '../styles/index.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <h2>SuperSquad</h2>
          <div className="row">
            <CharacterList/>
            <HeroList/>
          </div>
        </div>
    )
  }
}

export default App;