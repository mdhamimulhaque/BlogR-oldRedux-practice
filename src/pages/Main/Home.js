import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../../components/BlogCard";
import { loadBlogsData } from "../../redux/thunk/fetchBlogs";

const Home = () => {
  const dispatch = useDispatch();
  const blogsData = useSelector((state) => state.blogs.blogs)

  useEffect(() => {
    dispatch(loadBlogsData())
  }, [dispatch])

  const activeClass = "text-white  bg-green-500 border-white";

  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5 items-center' >
        <span>Filter By Date/Time :</span>
        <button className={`border px-3 py-2 rounded-full font-semibold`}>
          Update Date
        </button>
        <button className={`border px-3 py-2 rounded-full font-semibold`}>
          First Update
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
        {
          blogsData?.map((data, index) => <BlogCard key={index} data={data} />)
        }
      </div>
    </div>
  );
};

export default Home;
