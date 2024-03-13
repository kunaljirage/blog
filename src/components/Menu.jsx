const Menu = () => {
  const posts = [
    {
      id: 1,
      title: 'my first blog',
      desc: 'this is ossume blog post by kunal ',
      img: 'https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=',
    },
    {
      id: 2,
      title: 'my first blog',
      desc: 'this is ossume blog post by kunal ',
      img: 'https://t4.ftcdn.net/jpg/00/65/70/65/360_F_65706597_uNm2SwlPIuNUDuMwo6stBd81e25Y8K8s.jpg',
    },
    {
      id: 3,
      title: 'my first blog',
      desc: 'this is ossume blog post by kunal ',
      img: 'https://thumbs.dreamstime.com/b/fruit-vegetables-7134858.jpg',
    },
    {
      id: 4,
      title: 'my first blog',
      desc: 'this is ossume blog post by kunal ',
      img: 'https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];
  return (
    <div className="menu flex-2">
      <h1>other posts you may like</h1>
      {posts.map(post => (
        <div className="post flex flex-col gap-3" key={post.id}>
          <img className="w-full h-53" src={post.img} alt="" />
          <div className="content">
            <h2 className="text-xl text-[#555]">{post.title}</h2>
            <button type="button">Read More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
