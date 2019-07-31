
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
  }

  render() {
    // if (this.props.fetching) {
    //   <h2>Fetching star wars characters...</h2>;
    // }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    fetching: state.charsReducer.fetching
  };
};

export default connect(
  mapStateToProps,
  { getInfo }
)(CharacterListView);