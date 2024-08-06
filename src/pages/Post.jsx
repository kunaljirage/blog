import { Link } from 'react-router-dom';
import Edit from '../assets/images/edit.png';
import Delete from '../assets/images/delete.png';
import Profile from '../components/Profile';

const Post = () => (
  <div className="show-post">
    <div className="content">
      <img
        src="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_1280.jpg"
        alt=""
        className="w-full h-80 object-cover"
      />
      <div className="flex align-middle gap-3 text-sm">
        <Profile />
        <div>
          <span className="font-bold">kunal</span>
          <p className="text-justify">posted 2 days ago</p>
        </div>
        <div className="flex gap-2 items-center">
          <Link to="/write?edit=2">
            <img
              className="w-5 h-5 object-cover cursor-pointer"
              src={Edit}
              alt=""
            />
          </Link>
          <Link>
            <img
              className="w-5 h-5 object-cover cursor-pointer"
              src={Delete}
              alt=""
            />
          </Link>
        </div>
      </div>
      <h1 className="text-4xl text-[#333] object-cover">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus
      </h1>
      <p className="text-justify leading-8 text-gray-600/75">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        pariatur corporis nisi, dolorum id impedit, odit obcaecati laboriosam
        reprehenderit est facilis. Sunt minus nemo odio, quibusdam laborum atque
        sapiente a. We recommend reading this tutorial, in the sequence listed
        in the menu. If you have a large screen, the menu will always be present
        on the left. If you have a small screen, open the menu by clicking the
        top menu sign. We recommend reading this tutorial, in the sequence
        listed in the menu. If you have a large screen, the menu will always be
        present on the left. If you have a small screen, open the menu by
        clicking the top menu sign We recommend reading this tutorial, in the
        sequence listed in the menu. If you have a large screen, the menu will
        always be present on the left. If you have a small screen, open the menu
        by clicking the top menu sign We recommend reading this tutorial, in the
        sequence listed in the menu. If you have a large screen, the menu will
        always be present on the left. If you have a small screen, open the menu
        by clicking the top menu sign We recommend reading this tutorial, in the
        sequence listed in the menu. If you have a large screen, the menu will
        always be present on the left. If you have a small screen, open the menu
        by clicking the top menu sign We recommend reading this tutorial, in the
        sequence listed in the menu. If you have a large screen, the menu will
        always be present on the left. If you have a small screen, open the menu
        by clicking the top menu sign
      </p>
    </div>
  </div>
);

export default Post;
