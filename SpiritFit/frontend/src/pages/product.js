import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/action.js";

const LandingPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header className="relative w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl font-bold">Streetwear for the Bold</h1>
          <p className="mt-4 text-lg">Explore the latest trends and make a statement</p>
          <button className="mt-6 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg">Shop Now</button>
        </div>
      </header>

      {/* Featured Products */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.slice(0, 3).map((product) => (
            <div key={product._id} className="bg-white p-4 shadow-md rounded-lg">
              <img src={product.images[0]} alt={product.name} className="w-full h-60 object-cover rounded-md" />
              <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600">₹{product.price}</p>
              <button className="mt-4 w-full bg-black text-white py-2 rounded-lg">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">New Arrivals</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product._id} className="bg-white p-4 shadow-md rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover rounded-md"
              />
              <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">Rs. {product.price}</p>
              <div className="flex justify-between items-center mt-4">
                <button className="bg-black text-white py-2 px-4 rounded-lg">
                  Add to Cart
                </button>
                <button className="text-gray-500 hover:text-black">
                  <i className="fas fa-heart"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-6 bg-gray-200">
        <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Caps', 'T-Shirts', 'Hoodies', 'Accessories'].map((category, index) => (
            <div key={index} className="relative bg-black text-white text-center py-16 rounded-lg cursor-pointer">
              <h3 className="text-2xl font-semibold">{category}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black text-white text-center mt-12">
        <p>&copy; 2025 SpiritFit. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
