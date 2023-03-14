import React from "react";
import BlogCard from "../../components/BlogCard";

const Home = () => {


  const activeClass = "text-white  bg-green-500 border-white";

  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button
          className={`border px-3 py-2 rounded-full font-semibold ${activeClass} `}
        >
          Current Date
        </button>
        <button className={`border px-3 py-2 rounded-full font-semibold`}>
          Update Date
        </button>
        <button className={`border px-3 py-2 rounded-full font-semibold`}>
          First Update
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
        {/* {products.map((product) => (
          <ProductCard key={product.model} product={product} />
        ))} */}
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Home;
