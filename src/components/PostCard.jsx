import { Link } from 'react-router-dom';
import Profile from './Profile';
import { FaRegHeart } from 'react-icons/fa';

const PostCard = () => (
  <div className="justify-self-center bg-white w-[300px] mb-10 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <div className="flex justify-center">
      <img
        src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png"
        alt="Post Thumbnail"
        className="h-[250px] object-cover rounded-t-lg"
      />
    </div>
    <div className="p-4">
      <div className="flex items-center space-x-4 mb-3">
        <Profile />
        <div>
          <div className="text-sm font-semibold">Admin</div>
          <div className="text-xs text-gray-500">Mar 21, 2023 • 2 min read</div>
        </div>
      </div>
      <div className="border-b border-gray-300 pb-2 mb-2">
        <Link
          to="post/1"
          className="block text-xl font-semibold text-gray-800 hover:text-gray-600 truncate"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Link>
        <p className="text-gray-700 text-sm line-clamp-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <div className="flex justify-between items-center text-sm text-gray-600">
        <div className="space-x-4">
          <span>
            <span className="font-semibold">0</span> views
          </span>
          <span>
            <span className="font-semibold">0</span> comments
          </span>
        </div>
        <div>
          <FaRegHeart color="red" />
        </div>
      </div>
    </div>
  </div>
);

export default PostCard;
