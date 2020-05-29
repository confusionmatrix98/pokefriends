import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return (
        <div className='flex flex-wrap justify-center'>
            {robots.map((user) => {
                return (
                    <Card 
                    key={user.id} 
                    name={user.name} 
                    id={user.id}
                    />
                );
            })}
        </div>
    );
}

export default CardList;