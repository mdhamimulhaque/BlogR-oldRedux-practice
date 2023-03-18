import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { UpdatePostData } from '../../redux/thunk/UpdatePost';


const EditPost = () => {
    const { id } = useParams();
    const editPostData = useSelector((state) => state?.blogs?.blogs)?.find(data => data._id === id)
    const { _id, title, description, img, date } = editPostData;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    // console.log(editPostData)

    const submit = (data) => {
        const post = {
            title: data.title,
            description: data.description,
            img: data.image,
            date: date
        };
        dispatch(UpdatePostData(post, _id));
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
                        Published Date
                    </label>
                    <input type='text' defaultValue={date} id='date' readOnly />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='title'>
                        Title
                    </label>
                    <input type='text' defaultValue={title} id='title' {...register("title")} />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='image'>
                        Image
                    </label>
                    <input type='text' defaultValue={img} name='image' id='image' {...register("image")} />
                </div>


                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='description'>
                        Description
                    </label>
                    <textarea
                        defaultValue={description}
                        className=" block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" type='text' name='description' id='description' {...register("description")} />
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

export default EditPost;