
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-100 ml-4 mt-2">
            <div><h3 className="text-xl font-bold text-center bg-slate-400 p-4 mb-3 border "
            >Reading Time:{readingTime}
            </h3></div>
            <h2 className="text-xl font-bold text-center ">Bookmarks :{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx)=> <Bookmark key={idx} bookmark ={bookmark}></Bookmark>)
            }
        </div>
    );
};



export default Bookmarks;