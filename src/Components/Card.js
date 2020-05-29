import React from 'react';

const Card = ({name, id}) => {
    return (
        <div className='bg-light-green br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} width='128px' height='128px' alt='pokemon' />
            <div>
                <h2>{name}</h2>
                <p>{`#${id}`}</p>
            </div>
        </div>
    );
}

export default Card;