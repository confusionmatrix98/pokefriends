import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
import './App.css';

import { setSearchField, requestPokemons } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchPokemons.searchField,
        pokemons: state.requestPokemons.pokemons,
        isPending: state.requestPokemons.isPending,
        error: state.requestPokemons.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestPokemons: () => dispatch(requestPokemons())
    }
}

class App extends Component {

    componentDidMount() {
        this.props.onRequestPokemons();
    }

    render() {
        const { searchField, onSearchChange, pokemons, isPending } = this.props;
        const filteredPokemons = pokemons.filter(pokemon => {
            return pokemon.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending ?
            <h1 className='tc'>Loading...</h1> :
            (
                <div className='tc'>
                    <h1 className='f1 dib grow'>Pokefriends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList pokemons={filteredPokemons} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);