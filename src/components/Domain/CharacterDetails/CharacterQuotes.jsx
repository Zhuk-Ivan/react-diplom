import React from "react";

import { connect } from "react-redux";

import {
  selectCharacterQuotes,
  fetchCharacterQuotes,
  resetCharacterQuotes,
} from "../../../store/characterQuotes";
import './CharacterQuotes.scss';

class CharacterQuotesComponent extends React.PureComponent {
  
  componentDidMount() {
    this.props.fetchCharacterQuotes(this.props.name);
  }

  componentWillUnmount() {
    this.props.resetCharacterQuotes();
  }

  render() {
    const { quotes, loading, error } = this.props;

    if (loading) {
      return <div>Please, wait...</div>;
    }

    if (error) {
      return <div>Error while fetching episodes. Please, try later</div>;
    }

    if (quotes.length){
        return (
          <ul className="quotes_list">
            {quotes.map(({ quote_id, quote, series}, index) => (
              <li key={quote_id}>
                <p>
                  <b>
                    {index + 1}. {quote}
                  </b>
                  - <i>{series}</i>
                </p>
              </li>
            ))}
          </ul>
        );
      }else{
        return <h4>Alas, the character was stingy with quotes</h4>
      }
  }
}

const mapStateToProps = (state) => ({
  ...selectCharacterQuotes(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchCharacterQuotes: (name) => dispatch(fetchCharacterQuotes(name)),
  resetCharacterQuotes: () => dispatch(resetCharacterQuotes()),
});

export const CharacterQuotes = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterQuotesComponent);
