import Post from '../components/Post';

const Home = () => {
  const posts = [
    {
      id: 1,
      title: 'Modernizing conventional test automation with TestGrid',
      desc: "This post reflects on the conventional test automation methods using Selenium and Appium. Learn how you can use TestGrid's unified testing platform to enhance the conventional methods and also leverage the modern codeless testing techniques.",
      image_url:
        'https://t4.ftcdn.net/jpg/00/65/70/65/360_F_65706597_uNm2SwlPIuNUDuMwo6stBd81e25Y8K8s.jpg',
      crated_date: '29 February 2024',
      read_time: '15 min',
      sponsored: true,
    },
    {
      id: 2,
      title: 'Modernizing conventional test automation with TestGrid',
      desc: "This post reflects on the conventional test automation methods using Selenium and Appium. Learn how you can use TestGrid's unified testing platform to enhance the conventional methods and also leverage the modern codeless testing techniques.",
      image_url:
        'https://t4.ftcdn.net/jpg/00/65/70/65/360_F_65706597_uNm2SwlPIuNUDuMwo6stBd81e25Y8K8s.jpg',
      crated_date: '29 February 2024',
      read_time: '15 min',
      sponsored: true,
    },
    {
      id: 3,
      title: 'Modernizing conventional test automation with TestGrid',
      desc: "This post reflects on the conventional test automation methods using Selenium and Appium. Learn how you can use TestGrid's unified testing platform to enhance the conventional methods and also leverage the modern codeless testing techniques.",
      image_url:
        'https://t4.ftcdn.net/jpg/00/65/70/65/360_F_65706597_uNm2SwlPIuNUDuMwo6stBd81e25Y8K8s.jpg',
      crated_date: '29 February 2024',
      read_time: '15 min',
      sponsored: true,
    },
    {
      id: 4,
      title: 'Modernizing conventional test automation with TestGrid',
      desc: "This post reflects on the conventional test automation methods using Selenium and Appium. Learn how you can use TestGrid's unified testing platform to enhance the conventional methods and also leverage the modern codeless testing techniques.",
      image_url:
        'https://t4.ftcdn.net/jpg/00/65/70/65/360_F_65706597_uNm2SwlPIuNUDuMwo6stBd81e25Y8K8s.jpg',
      crated_date: '29 February 2024',
      read_time: '15 min',
      sponsored: true,
    },
  ];

  return (
    <div className="posts">
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Home;
