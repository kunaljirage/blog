import { IoSearchOutline } from 'react-icons/io5';
import PostCard from '../components/PostCard';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <header className="hero-section bg-gray-900 text-white py-16">
      <div className="flex flex-col justify-center items-center min-h-[80%] text-center">
        <h4 className="text-lg mb-3 uppercase">
          How to Become an Amazing Designer and Developer
        </h4>
        <h1 className="text-4xl uppercase">
          Thriving Industry of User Experience Design and Development
        </h1>
      </div>
    </header>
    <main className="container mx-auto px-12">
      <nav className="flex justify-between items-center py-4 border-b border-gray-300">
        <div className="flex space-x-8">
          <Link className="text-gray-600 hover:text-gray-900" to="/posts">
            All Posts
          </Link>
          <span className="text-gray-600 hover:text-gray-900">Web Design</span>
          <span className="text-gray-600 hover:text-gray-900">UX / UI</span>
          <span className="text-gray-600 hover:text-gray-900">DevOps</span>
        </div>
        <div>
          <IoSearchOutline
            size={25}
            className="text-gray-600 hover:text-gray-900"
          />
        </div>
      </nav>
      <section className="posts-section bg-gray-200 pt-10 px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </section>
    </main>
  </div>
);

export default Home;
