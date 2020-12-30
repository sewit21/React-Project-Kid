import React from 'react';
import Try from './searchparams';
import './pages.css';
import Try2 from './try2';
import './try.css';

function Recipe() {
    
    return (
        <>
    <div className='foody'>
        <h1 className='foodtitle'>Easy Food Recipes</h1>
        <p className="p"> A list of some tasty recipes that are easy to make:</p>
        <Try />
              
    </div>

    <div className='item'>
        <h1> Recipe of the Week: </h1>
    <Try2/>
    </div>
    </>
)
}




export default Recipe;