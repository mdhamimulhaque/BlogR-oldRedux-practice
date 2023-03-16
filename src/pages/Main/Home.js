import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../../components/BlogCard";
import { sortByUpdate } from "../../redux/action/BlogSortActions";
import { loadBlogsData } from "../../redux/thunk/fetchBlogs";

const Home = () => {
  const dispatch = useDispatch();
  const blogsData = useSelector((state) => state.blogs.blogs);
  const { ascending } = useSelector((state) => state.sort);

  useEffect(() => {
    dispatch(loadBlogsData())
  }, [dispatch])


  let content;

  if (ascending) {
    content = blogsData.sort((a, b) => new Date(a.date) - new Date(b.date))
      .map((data, index) => <BlogCard key={index} data={data} />)
  }
  if (!ascending) {
    content = blogsData.sort((a, b) => new Date(b.date) - new Date(a.date))
      .map((data, index) => <BlogCard key={index} data={data} />)
  }

  const activeClass = "text-white  bg-green-500 border-white border px-3 py-2 rounded-full";

  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5 items-center' >
        <span>Filter By Date/Time :</span>
        <button
          onClick={() => dispatch(sortByUpdate(false))}
          className={!ascending ? activeClass : `border px-3 py-2 rounded-full font-semibold`}>
          Last Upload
        </button>
        <button
          onClick={() => dispatch(sortByUpdate(true))}
          className={ascending ? activeClass : `border px-3 py-2 rounded-full font-semibold`}>
          First Upload
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
        {
          content
        }
      </div>
    </div>
  );
};

export default Home;
