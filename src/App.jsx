import { useState } from 'react'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (time,id) => {
    // setReadingTime(readingTime+time)
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    // remove the read blog from bookmark
    // console.log('remove bookmark',id);

    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks)
  }

  return (
    <>
     
      <Header></Header>
      <div className='flex flex-col md:flex-row max-w-5xl mx-auto '>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
     
    </>
  )
}

export default App
