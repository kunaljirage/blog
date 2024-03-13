import { Link } from 'react-router-dom';
import { IoPerson } from 'react-icons/io5';

const Post = props => {
  const {
    image_url: imageUrl,
    title,
    desc,
    crated_date: createdDate,
    read_time: readTime,
  } = props;
  return (
    <article className="post">
      <header className="grid row-span-3 grid-rows-subgrid">
        <div className="flex justify-center">
          <img src={imageUrl} alt="" height="200" />
        </div>
        <h2 className="title">
          <Link>{title}</Link>
        </h2>
        <div className="date-author">
          <Link className="external author">
            {/* <img src="" alt="Author avatar" /> */}
            <div className="profile-icon">
              <IoPerson size="24" />
            </div>
            {/* TestGrid */}
          </Link>
          <time className="date">{createdDate}</time>
          <span className="read-time">{readTime}</span>
        </div>
      </header>
      <p className="mt-5 mb-9">{desc}</p>
      <div className="flex justify-between">
        <span className="my-auto">Sponsored</span>
        <Link className="btn-secondary p-1 trxt-[10px]">
          <span>Read more →</span>
        </Link>
      </div>
    </article>
  );
};

export default Post;
