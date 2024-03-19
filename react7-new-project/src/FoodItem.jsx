import React from 'react';

const FoodItem = ({ food, handleCart }) => {

    // console.log(handleCart)
    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={food.cover} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{food.title}</h2>
                  <p className='border-b-2'>{food.description}</p>

                  <div className='text-start'>
                    <h3 className='text-xl'>Ingredients: 6</h3>
                    <li>{food.ingredients[0]}</li>
                    <li>{food.ingredients[1]}</li>
                    <li>{food.ingredients[2]}</li>
                  </div>


                  <div className='flex gap-10'>
                    <p>{food.cooking_time}</p>
                    <p>{food.calories}</p>
                  </div>

                  <div className="card-actions">
                    <button onClick={(e) =>handleCart(food)} className="btn btn-success">{food.button}</button>
                  </div>
                </div>
              </div>
        </div>
    );
};

export default FoodItem;