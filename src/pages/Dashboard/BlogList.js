import React, { useEffect } from "react";
import { AiOutlineEdit, AiOutlineEye, AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { loadBlogsData } from "../../redux/thunk/fetchBlogs";

const BlogList = () => {
  const blogsData = useSelector((state) => state.blogs.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBlogsData())
  }, [dispatch])

  return (
    <div class='flex flex-col justify-center items-center h-full w-full '>
      <div class='w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200'>
        <header class='px-5 py-4 border-b border-gray-100'>
          <div class='font-semibold text-gray-800'>Blogs</div>
        </header>

        <div class='overflow-x-auto p-3'>
          <table class='table-auto w-full'>
            <thead class='text-xs font-semibold uppercase text-gray-400 bg-gray-50'>
              <tr>
                <th></th>
                <th class='p-2'>
                  <div class='font-semibold text-left'>Image</div>
                </th>
                <th class='p-2'>
                  <div class='font-semibold text-left'>Title</div>
                </th>
                <th class='p-2'>
                  <div class='font-semibold text-left'>Published</div>
                </th>
                <th class='p-2'>
                  <div class='font-semibold text-center'>Action</div>
                </th>
              </tr>
            </thead>

            <tbody class='text-sm divide-y divide-gray-100'>
              {/* {products.map(({ model, brand, price, status, _id }) => ( */}
              {
                blogsData.map(({ title, description, img, date }) => <tr>
                  <td class='p-2'>
                    <input type='checkbox' class='w-5 h-5' value='id-1' />
                  </td>
                  <td class='p-2'>
                    <div class='w-16 h-16 rounded flex items-center'>
                      <img className="w-full rounded" src={img} alt="" />
                    </div>
                  </td>
                  <td class='p-2'>
                    <div class='text-left capitalize'>{title}</div>
                  </td>

                  <td class='p-2'>
                    <div class='text-left font-medium text-green-500'>
                      {date}
                    </div>
                  </td>
                  <td class='p-2'>
                    <div class='flex justify-center gap-3 text-xl'>
                      <AiOutlineEye className="text-green-400" />
                      <AiOutlineEdit className="text-blue-400" />
                      <AiOutlineDelete className="text-red-400" />
                    </div>
                  </td>
                </tr>)
              }

              {/* ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    // </section>
  );
};

export default BlogList;
