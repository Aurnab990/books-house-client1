import React, { useState, useEffect } from 'react';
import '../BlogSection/Blogs.css'; 

const blogs = [
  {
    src: "https://i0.wp.com/thenerddaily.com/wp-content/uploads/2022/12/Iris-Yamashita-Author-Interview.jpg?fit=1000%2C742&ssl=1",
    title: "City Under the Roof",
    category: "Misterias Clark",
    date: "28 Dec 2023S",
    description: "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque."
  },
  {
    src: "https://msmagazine.com/wp-content/uploads/2023/03/jenny-odell-saving-time-1024x576.png",
    title: "Saving Time",
    category: "Jenny Odell",
    date: "28 Jan 2022",
    description: "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque."
  },
  {
    src: "https://i.ytimg.com/vi/HZM_vx72OMU/sddefault.jpg?v=64b5f140",
    title: "The Only one left",
    category: "Horror",
    date: "28 Dec 2020",
    description: "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque."
  },
  {
    src: "https://cdn.nextbigideaclub.com/wp-content/uploads/2023/07/14122406/Eight-Bears_website_1200x600.jpg",
    title: "The Eight Bears",
    category: "Funny",
    date: "28 Dec 2020",
    description: "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque."
  }
];

const Blogs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % blogs.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const currentBlogs = [
    blogs[currentIndex],
    blogs[(currentIndex + 1) % blogs.length],
    blogs[(currentIndex + 2) % blogs.length],
  ];

  return (
    <div className="slider-container">
      <div className="slider">
        {currentBlogs.map((blog, idx) => (
          <div className="blog-card" key={idx}>
            <img src={blog.src} className="object-cover w-full h-64" alt={blog.title} />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a href="/" className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700" aria-label="Category" title={blog.category}>
                  {blog.category}
                </a>
                <span className="text-gray-600">— {blog.date}</span>
              </p>
              <a href="/" aria-label="Category" title={blog.title} className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">
                {blog.title}
              </a>
              <p className="mb-2 text-gray-700">
                {blog.description}
              </p>
              <a href="/" aria-label="" className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                Learn more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
