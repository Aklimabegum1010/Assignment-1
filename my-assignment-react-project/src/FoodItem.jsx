import React from 'react';

const FoodItem = ({ food, handleCart }) => {
    console.log(handleCart)

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 ">
                    <img src={food.cover} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body text-start">
                    <h2 className="card-title text-start">{food.title}</h2>
                    <p className='border-b-2 my-5'>{food.description}</p>
                    <div className='text-start border-b-2 my-5'>
                        <h3 className='text-xl text-black font-bold'>Ingredients :6</h3>
                        <p>{food.ingredients[0]}</p>
                        <p>{food.ingredients[1]}</p>
                        <p>{food.ingredients[2]}</p>
                    </div>


                    <div className='flex gap-5'>
                        <p>{food.cooking_time}</p>
                        <p>{food.calories}</p>
                    </div>

                    <div>
                        <div className="card-actions">
                            <button onClick ={(e) => handleCart(food)} className="btn btn-success">{food.button}</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;