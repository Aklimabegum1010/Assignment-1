import { useEffect, useState } from 'react'

import './App.css'
import FoodItem from './FoodItem';

function App() {

  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState([]);


  useEffect(() => {
    fetch("../public/fakeData.json")
      .then(res => res.json())
      .then(data => {
        setFoods(data)
      })
  }, []);

  // console.log(foods)


  const handleCart = (f) => {
    const isYes = cart.find(fd => fd.id == f.id)
    if (!isYes) {
      setCart([...cart, f])
    }
    else {
      alert("already in cart")
    }

    setCart([f]);

  }


const handlePrepar = (id) => {
  const newCart = cart.filter(item => item.id != id);
  setCart(newCart);
}


  

  return (
    <>

      <div>
        <div data-theme='light' className='w-full'>
          <div className="navbar bg-base-100 w-5/6 text-center items-center justify-center ml-28 border-b-2">
            <div className="flex-1">
              <a className="btn btn-ghost text-2xl font-bold">Recipe Calories</a>
            </div>

            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-xl">
                <li><a>Home</a></li>
                <li><a>Recipes</a></li>
                <li><a>About</a></li>
                <li><a>Search</a></li>


              </ul>
            </div>


            <div className="flex-none gap-2">
              <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
              </div>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>

              </div>
            </div>
          </div>




          <div className='w-5/6 ml-28 rounded-3xl'>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                  <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </div>


          <div className='text-center my-20'>
            <h1 className='text-4xl font-bold'>Our Recipes</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab quas temporibus <br /> quam, sequi aut laudantium.</p>
          </div>


          <div className='w-5/6 flex '>

            {
              foods.map((fd) => (<FoodItem food={fd} handleCart={handleCart}></FoodItem>))
            }

            <div className='card-container flex gap-5'>

            </div>



            <div className='cart-container ml-20'>
              <h3 className='text-2xl border-b-2 text-center' >Want to cook</h3>
              <div className='flex gap-20'>
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
              </div>
              <div className='cart-info'>
                {
                  cart.map((item,index) => (
                    <div className="flex gap-10 my-8">
                      <p>{index+1}</p>
                      <p>{item.title}</p>
                      <p>{item.cooking_time}</p>
                      <p>{item.calories}</p>
                      <button onClick={() => handlePrepar(item.id)} className="btn btn-success">Preparing</button>
                    </div>
                  ))
                }
              </div>

            </div>



          </div>













        </div>
      </div>

    </>
  )
}

export default App
