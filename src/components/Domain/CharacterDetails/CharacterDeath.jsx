import React from "react";

import { connect } from "react-redux";

import {
  selectCharacterDeath,
  fetchCharacterDeath,
} from "../../../store/deaths";

import './CharacterDeath.scss';

class CharacterDeathComponent extends React.PureComponent {
  
  componentDidMount() {
      this.props.fetchCharacterDeath(this.props.name);
    }
  
  render() {
    const { cause, last_words, responsible, season, episode, loading, error } = this.props;
 
    if (loading) {
      return <div>Please, wait...</div>;
    }

    if (error) {
      return <div>Error while fetching episodes. Please, try later</div>;
    }

    return (
        <div>
          <h4>Character dead</h4>
          <ul className='character_death_info_list'>
              <li>
                <strong>Cause of death: </strong> {cause}
              </li>
              <li>
                <strong>Who's responsible: </strong> {responsible}
              </li>
              <li>
                <strong>Last words: </strong> {last_words}
              </li>
              <li>
                <strong>Season: </strong> {season}
              </li>
              <li>
                <strong>Episode: </strong> {episode}
              </li>
          </ul>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...selectCharacterDeath(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchCharacterDeath: (name) => dispatch(fetchCharacterDeath(name))

});

export const CharacterDeath = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterDeathComponent);
