import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddBlogData } from "../../redux/thunk/AddBlogData";

const AddBlog = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  // ---> date
  const today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();

  let date = `${year}-${month}-${day}`;

  const submit = (data) => {
    const blog = {
      title: data.title,
      description: data.description,
      img: data.image,
      date: date
    };
    dispatch(AddBlogData(blog));
    navigate('/dashboard')
  };

  return (
    <div className='flex justify-center items-center h-full '>
      <form
        className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
        onSubmit={handleSubmit(submit)}
      >
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='title'>
            Title
          </label>
          <input type='text' id='title' {...register("title")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='image'>
            Image
          </label>
          <input type='text' name='image' id='image' {...register("image")} />
        </div>


        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='description'>
            Description
          </label>
          <textarea className=" block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" type='text' name='description' id='description' {...register("description")} />
        </div>


        <div className='flex justify-between items-center w-full'>
          <button
            className=' px-4 py-3 bg-green-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
