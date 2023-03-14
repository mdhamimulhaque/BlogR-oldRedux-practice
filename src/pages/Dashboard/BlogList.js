import React from "react";
import { AiOutlineEdit, AiOutlineEye, AiOutlineDelete } from "react-icons/ai";

const BlogList = () => {


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
                  <div class='font-semibold text-left'>User Name</div>
                </th>
                <th class='p-2'>
                  <div class='font-semibold text-left'>Text</div>
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
              <tr>
                <td class='p-2'>
                  <input type='checkbox' class='w-5 h-5' value='id-1' />
                </td>
                <td class='p-2'>
                  <div class='font-medium text-gray-800'>Himel</div>
                </td>
                <td class='p-2'>
                  <div class='text-left capitalize'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quasi excepturi expedita atque omnis enim?</div>
                </td>

                <td class='p-2'>
                  <div class='text-left font-medium text-green-500'>
                    3/14/2023
                  </div>
                </td>
                <td class='p-2'>
                  <div class='flex justify-center gap-3 text-xl'>
                    <AiOutlineEye className="text-green-400" />
                    <AiOutlineEdit className="text-blue-400" />
                    <AiOutlineDelete className="text-red-400" />
                  </div>
                </td>
              </tr>
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
