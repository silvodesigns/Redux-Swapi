
import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getInfo } from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getInfo();
    //API CALL
  }

  render() {

    // if (this.props.fetching) {
    //   <h2>Fetching star wars characters...</h2>;
    // }

    console.log(this.props,"from character list view");
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}

//TELLS WHICH PIECES OF CONNECT TO PASS DOWN TO COMPONENTS
const mapStateToProps = state => {

  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    fetching: state.charsReducer.fetching
  };
};

//CONNECTS COMPONENT TO REDUX STORE using 'connect'
export default connect(
  mapStateToProps,
  { getInfo }
)(CharacterListView);