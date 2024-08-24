import { IoSearchOutline } from 'react-icons/io5';
import PostCard from '../components/PostCard';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="bg-[rgb(255 255 255)]">
    <div className="dashboard">
      <div className="dashboard-overlay">
        <div className="flex flex-col justify-center items-center min-h-[80%]">
          <h4 className="text-white mb-3 text-[25px] uppercase">
            how to become an amazing designer and developer
          </h4>
          <div className="w-[70%] text-center">
            <h1 className="text-white text-[50px] uppercase">
              Thriving Industry of User Experience Design and Development
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div className="content-wrapper w-[1124px] mx-auto">
      <div className="flex justify-between p-8">
        <div className="h-4/6">
          <Link className="mr-8 cursor-pointer text-gray-600" to="/posts">
            All Posts
          </Link>
          <span className="mr-8 cursor-pointer text-gray-600">Web Design</span>
          <span className="mr-8 cursor-pointer text-gray-600">UX / UI</span>
          <span className="mr-8 cursor-pointer text-gray-600">Devops</span>
        </div>
        <div>
          <IoSearchOutline size={25} />
        </div>
      </div>
      <div className="flex flex-wrap gap-8 bg-[#EDEDED] px-20 py-10">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  </div>
);

export default Home;
