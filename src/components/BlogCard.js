import React from "react";



const BlogCard = (data) => {
  const { title, description, img, date } = data.data;
  return (
    <div className='shadow-lg relative rounded-3xl border p-3 flex flex-col text-green-900'>
      <div className='h-52 w-52 mx-auto'>
        <img src={img} alt="img" />
      </div>

      <h1 className='font-bold text-center'>{title}</h1>
      <p>{description} </p>
      <span className="my-2">Published: {date}</span>
      <button
        className='bg-green-500  py-1 px-2 rounded-full mt-2 text-white'
      >Read More
      </button>
    </div>
  );
};

export default BlogCard;
