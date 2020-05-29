import React from 'react';
import Card from './Card';

const CardList = ({pokemons}) => {
    return (
        <div className='flex flex-wrap justify-center'>
            {pokemons.map((poke) => {
                return (
                    <Card 
                    key={poke.id} 
                    name={poke.name} 
                    id={poke.id}
                    />
                );
            })}
        </div>
    );
}

export default CardList;