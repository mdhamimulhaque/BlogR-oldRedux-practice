import React from "react";



const BlogCard = () => {

  return (
    <div className='shadow-lg relative rounded-3xl border p-3 flex flex-col text-green-900'>
      <div className='h-52 w-52 mx-auto'>
        <img src="https://images.unsplash.com/photo-1670272499188-79fe22656f64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img" />
      </div>
      <h1 className='font-bold text-center'>Title</h1>
      <p>Lorem ipsum dolor qui ficia repellat maiores. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, voluptatum. </p>

      <button
        className='bg-green-500  py-1 px-2 rounded-full mt-2'
      >Read More
      </button>
    </div>
  );
};

export default BlogCard;
