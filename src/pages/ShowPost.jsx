import { Link } from 'react-router-dom';
import Edit from '../assets/images/edit.png';
import Delete from '../assets/images/delete.png';
import Menu from '../components/Menu';

const ShowPost = () => (
  <div className="show-post">
    <div className="content">
      <img
        src="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_1280.jpg"
        alt=""
        className="w-full h-80 object-cover"
      />
      <div className="flex align-middle gap-3 text-sm">
        <img
          src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
          alt=""
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <span className="font-bold">kunal</span>
          <p className="text-justify">posted 2 days ago</p>
        </div>
        <div className="flex gap-1">
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
      <h1 className="text-[42px] text-[#333] object-cover">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus
      </h1>
      <p className="text-justify leading-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        pariatur corporis nisi, dolorum id impedit, odit obcaecati laboriosam
        reprehenderit est facilis. Sunt minus nemo odio, quibusdam laborum atque
        sapiente a.
      </p>
    </div>
    <Menu />
  </div>
);

export default ShowPost;
