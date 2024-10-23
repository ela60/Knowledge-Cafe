import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";


const Blog = ({ blog,handleAddToBookmark,handleMarkAsRead }) => {
    const {id, title,cover,author,author_img,reading_time,posted_date,hashtags } = blog;
    
    return (
        <div className='mb-20 space-y-4'>
        <img className='w-full mb-8 border p-4' src={cover} alt={`cover picture of the title ${title}`} />
        <div className='flex flex-col md:flex-row justify-between mb-4'>
            <div className='flex items-center'>
                <img className='w-12 h-12 rounded-full' src={author_img} alt="" />
                <div className='ml-4'>
                    <h3 className='text-xl md:text-2xl'>{author}</h3>
                    <p className='text-sm text-gray-600'>{posted_date}</p>
                </div>
            </div>
            <div className='mt-4 md:mt-0 flex items-center'>
                <span className='text-sm md:text-base'>{reading_time} min read</span>
                <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-xl md:text-2xl'>
                    <FaBookmark />
                </button>
            </div>
        </div>
        <h2 className='text-xl md:text-2xl'>{title}</h2>
        <p className='text-sm md:text-base'>
            {
                hashtags.map((hash, idx) => (
                    <span key={idx} className='mr-1'>
                        <a href="" className='text-blue-500'>#{hash}</a>
                    </span>
                ))
            }
        </p>
        <button
            onClick={() => handleMarkAsRead(reading_time, id)}
            className='text-purple-800 font-bold underline'>
            Mark As Read
        </button>
    </div>
    
    );
};




export default Blog;