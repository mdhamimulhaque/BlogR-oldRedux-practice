import React from 'react';
import { useSelector } from 'react-redux';
import BlogCard from '../../components/BlogCard';

const ReadingHistory = () => {
    const historyData = useSelector((state) => state.blogs.ReadingHistory);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
            {
                historyData.map((data, index) => <BlogCard key={index} data={data} />)
            }
        </div>
    );
};

export default ReadingHistory;