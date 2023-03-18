import React, { useEffect } from "react";
import { AiOutlineEdit, AiOutlineEye, AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { DeleteBlogData } from "../../redux/thunk/DeleteBlog";
import { loadBlogsData } from "../../redux/thunk/fetchBlogs";

const BlogList = () => {
  const blogsData = useSelector((state) => state.blogs.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBlogsData())
  }, [dispatch])

  return (
    <div className='flex flex-col justify-center items-center h-full w-full '>
      <div className='w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200'>
        <header className='px-5 py-4 border-b border-gray-100'>
          <div className='font-semibold text-gray-800'>Blogs</div>
        </header>

        <div className='overflow-x-auto p-3'>
          <table className='table-auto w-full'>
            <thead className='text-xs font-semibold uppercase text-gray-400 bg-gray-50'>
              <tr>
                <th></th>
                <th className='p-2'>
                  <div className='font-semibold text-left'>Image</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-left'>Title</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-left'>Published</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-center'>Action</div>
                </th>
              </tr>
            </thead>

            <tbody className='text-sm divide-y divide-gray-100'>

              {
                blogsData.map(({ title, description, img, date, _id }) => <tr key={_id}>
                  <td className='p-2'>
                    <input type='checkbox' className='w-5 h-5' value='id-1' />
                  </td>
                  <td className='p-2'>
                    <div className='w-16 h-16 rounded flex items-center'>
                      <img className="w-full rounded" src={img} alt="" />
                    </div>
                  </td>
                  <td className='p-2'>
                    <div className='text-left capitalize'>{title}</div>
                  </td>

                  <td className='p-2'>
                    <div className='text-left font-medium text-green-500'>
                      {date}
                    </div>
                  </td>
                  <td className='p-2'>
                    <div className='flex justify-center gap-3 text-xl'>
                      <AiOutlineEye className="text-green-400 cursor-pointer" />
                      <AiOutlineEdit className="text-blue-400 cursor-pointer" />
                      <AiOutlineDelete
                        onClick={() => dispatch(DeleteBlogData(_id))}
                        className="text-red-400 cursor-pointer" />
                    </div>
                  </td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
