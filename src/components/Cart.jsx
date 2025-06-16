import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../slice/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = cartItems.reduce((sum, item) => sum + item.qty , 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);

  useEffect(() => {
    console.log("Cart items updated:", cartItems);
  }, [cartItems]);

  // Toast for remove
  const handleRemove = (id , name) => {
    dispatch({ type: 'cart/removeFromCart', payload: { id } });
    toast.info(`${name} removed from cart`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            // transition: Bounce,
        });
  };

  // Toast for clear cart
  const handleClearCart = () => {
    dispatch(clearCart());
    toast.info("Cart cleared");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-2">
      <ToastContainer />
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
          Your Cart
        </h1>
        {totalItems === 0 ? (
          <div className="text-center text-gray-500 mb-8">
            Your cart is empty.
            <div className="mt-4">
              <Link
                to="/"
                className="inline-block px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
              >
                Browse Restaurants
              </Link>
            </div>
          </div>
        ) : (
          <>
            <ul className="divide-y divide-gray-200 mb-6">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between py-4 hover:bg-gray-50 rounded transition"
                >
                  <div className="flex items-center gap-4 w-full">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md border shadow-sm"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-gray-500">₹{item.price}</span>
                        <span className="text-sm text-gray-700"><span className="text-xs text-gray-400">x </span>{item.qty}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => dispatch({ type: 'cart/decreaseQTY', payload: { id: item.id } })}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded hover:bg-gray-200 transition text-sm font-semibold"
                    >
                      -
                    </button>
                    <span className="text-sm text-gray-700">{item.qty}</span>
                    <button
                      onClick={() => dispatch({ type: 'cart/increaseQTY', payload: { id: item.id } })}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded hover:bg-gray-200 transition text-sm font-semibold"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id , item.name)}
                    className="ml-4 mr-2 px-3 py-1 bg-gray-100 text-gray-600 rounded hover:bg-gray-200 transition text-sm font-semibold cursor-pointer">
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <div className='p-4 border-t flex justify-between items-center mb-6'>
              <h3 className='text-lg font-semibold text-gray-800'>Order Summary</h3>
              <p className='text-gray-600'>Total Items: {totalItems}</p>
              <span className="font-bold text-xl text-orange-600"><span className="font-semibold text-lg text-gray-700">Total Price: </span> ₹{totalPrice || 0}</span>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <button
                className="w-full md:w-auto px-6 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
              <button className="w-full md:w-auto px-6 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;