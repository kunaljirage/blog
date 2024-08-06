import Profile from './Profile';
import { FaRegHeart } from 'react-icons/fa';

const PostCard = () => (
  <div className="flex flex-col w-[300px] mb-3 hover:shadow-2xl border">
    <div>
      <img
        src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png"
        className="object-contain aspect-[3/2] object-top"
      />
    </div>
    <div className="p-3 flex flex-col gap-2">
      <div className="flex">
        <Profile />
        <div className="ml-4">
          <div>Admin</div>
          <div>Mar 21, 20232 min</div>
        </div>
      </div>
      <div className="border-b-2 pb-[2px]">
        <div className="text-2xl font-semibold overflow-hidden text-ellipsis line-clamp-3 mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="max-h-[200px] overflow-hidden text-ellipsis line-clamp-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
      </div>
      <div className="flex justify-between mx-2 items-center">
        <div>
          <span className="mr-5">
            <span>0</span> views
          </span>
          <span>
            <sapan>0</sapan> comments
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
