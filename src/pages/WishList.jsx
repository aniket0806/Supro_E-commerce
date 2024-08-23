import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeWishList, addToCart } from '../store/cartSlice';


const WishList = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.cart.wishlist) || [];

  const handleRemove = (id) => {
    dispatch(removeWishList(id));
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <>

    <div className="mt-10 flex flex-col items-center">
      {/* Left section: list of wishlist items */}
      <div className="flex flex-col gap-6 w-full max-w-4xl">
        {wishlist.map((item, index) => (
          <div key={index} className="w-full flex items-center justify-between gap-6 p-4 bg-white shadow rounded-lg">
            {/* Product image */}
            <img className="h-28 w-28 object-contain" src={item.image} alt={item.title} />
            {/* Product details */}
            <div className="flex flex-col flex-grow items-center md:items-start">
              <h5 className="text-black font-bold text-lg">{item.title}</h5>
              <h5 className="text-gray-700 text-md mt-1">${item.price.toFixed(2)}</h5>
            </div>
            {/* Action buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => handleRemove(item.id)}
                className="px-3 py-1 border border-red-500 text-red-500 rounded-md hover:bg-red-100 transition-colors"
              >
                Remove
              </button>
              <button
                onClick={() => handleAddToCart(item)}
                className="px-3 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default WishList;
