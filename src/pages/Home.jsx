import Post from '../components/Post';

const Home = () => {
  const posts = [
    {
      id: 1,
      title: 'Modernizing conventional test automation with TestGrid',
      desc: "This post reflects on the conventional test automation methods using Selenium and Appium. Learn how you can use TestGrid's unified testing platform to enhance the conventional methods and also leverage the modern codeless testing techniques.",
      image_url:
        'https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png',
      crated_date: '29 February 2024',
      read_time: '15 min',
      sponsored: true,
    },
    {
      id: 2,
      title: 'Modernizing conventional test automation with TestGrid',
      desc: "This post reflects on the conventional test automation methods using Selenium and Appium. Learn how you can use TestGrid's unified testing platform to enhance the conventional methods and also leverage the modern codeless testing techniques.",
      image_url: 'https://miro.medium.com/v2/0*L0rGdSfS3W0kytcU',
      crated_date: '29 February 2024',
      read_time: '15 min',
      sponsored: true,
    },
    {
      id: 3,
      title: 'Modernizing conventional test automation with TestGrid',
      desc: "This post reflects on the conventional test automation methods using Selenium and Appium. Learn how you can use TestGrid's unified testing platform to enhance the conventional methods and also leverage the modern codeless testing techniques.",
      image_url:
        'https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png',
      crated_date: '29 February 2024',
      read_time: '15 min',
      sponsored: true,
    },
    {
      id: 4,
      title: 'Modernizing conventional test automation with TestGrid',
      desc: "This post reflects on the conventional test automation methods using Selenium and Appium. Learn how you can use TestGrid's unified testing platform to enhance the conventional methods and also leverage the modern codeless testing techniques.",
      image_url:
        'https://media.dev.to/cdn-cgi/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fh4jbiijckmk65al45e6x.jpg',
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
