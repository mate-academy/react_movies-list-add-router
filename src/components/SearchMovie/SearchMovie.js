import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormField } from '../FormField';
import { API_URL } from '../../constants/api';
import { mapMovieResponse } from '../../utils/dataMappers';

export class SearchMovie extends Component {
  state = {
    searchWord: '',
    error: null,
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ searchWord: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { onAdd } = this.props;
    const { searchWord } = this.state;

    fetch(`${API_URL}t=${searchWord}`)
      .then(response => response.json())
      .then((data) => {
        const { Error } = data;

        if (Error) {
          this.setState({
            error: `Movie ${searchWord} not found`,
          });

          return;
        }

        const newFilm = mapMovieResponse(data);

        onAdd(newFilm);

        this.setState({
          error: null,
          searchWord: '',
        });
      });
  };

  render() {
    const { searchWord, error } = this.state;

    return (
      <form
        onSubmit={this.handleSubmit}
        className="box"
      >
        <FormField
          value={searchWord}
          touched
          error={error}
          name="searchWord"
          placeholder="Type search word"
          label="Search movie"
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />
        <button
          type="submit"
          className="button is-primary"
        >
          Search film
        </button>
      </form>
    );
  }
}

SearchMovie.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
