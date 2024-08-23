
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove, increaseQuantity, decreaseQuantity } from '../store/cartSlice';


const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items) || [];

  // Calculate the total amount by summing up the price * quantity for each item
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Function to handle removing an item from the cart
  const handleremove = (id) => {
    dispatch(remove(id));
  };

  // Function to handle increasing the quantity of an item
  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  // Function to handle decreasing the quantity of an item
  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <>

    <div className="mt-10 flex flex-col lg:flex-row justify-between gap-10">
      {/* Left section: list of cart items */}
      <div className="flex flex-col gap-4 w-full lg:w-3/4">
        {cartItems && cartItems.map((item, index) => (
          <div key={index} className="w-full h-[150px] flex flex-col md:flex-row items-center gap-5 p-4 bg-white shadow rounded-lg">
            {/* Product image */}
            <img className="h-[100px] w-28 object-contain" src={item.image} alt={item.title} />
            {/* Product title */}
            <div className="flex flex-col md:flex-row md:items-center justify-between w-full">
              <h5 className="text-black font-bold">{item.title}</h5>
              <div className="flex items-center gap-2 mt-2 md:mt-0">
                <label htmlFor={`quantity-${index}`} className="text-gray-600">Qty:</label>
                <div className="flex items-center">
                  <button onClick={() => handleDecreaseQuantity(item.id)} className="px-2 py-1 border border-gray-300 rounded">-</button>
                  <input
                    id={`quantity-${index}`}
                    type="number"
                    className="w-12 p-1 border border-gray-300 rounded mx-2 text-center"
                    value={item.quantity}
                    readOnly
                  />
                  <button onClick={() => handleIncreaseQuantity(item.id)} className="px-2 py-1 border border-gray-300 rounded">+</button>
                </div>
                <button onClick={() => handleremove(item.id)} className="px-2 py-1 border border-red-500 text-red-500 rounded ml-4">Remove</button>
              </div>
              <h5 className="text-gray-700">${item.price}</h5>
            </div>
          </div>
        ))}
      </div>
      {/* Right section: total amount */}
      <div className="w-full lg:w-1/4 p-4 bg-white shadow rounded-lg flex flex-col items-center">
        {/* Total amount heading */}
        <h3 className="text-xl font-bold mb-4">Total</h3>
        {/* Total amount value */}
        <h4 className="text-2xl font-semibold">${totalAmount.toFixed(2)}</h4>
      </div>
    </div>
    </>
  );
};

export default Cart;


