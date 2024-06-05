import React, { useState, useEffect } from 'react';

const blogs = [
  {
    src: "https://i0.wp.com/thenerddaily.com/wp-content/uploads/2022/12/Iris-Yamashita-Author-Interview.jpg?fit=1000%2C742&ssl=1",
    title: "City Under the Roof",
    category: "Misterias Clark",
    date: "28 Dec 2023",
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
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-6">
      <div className="max-w-4xl w-full">
        <div className="flex flex-col md:flex-row gap-6 overflow-hidden">
          {currentBlogs.map((blog, idx) => (
            <div key={idx} className="w-full bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
              <img src={blog.src} className="w-full h-48 md:h-64 object-cover rounded-t-lg" alt={blog.title} />
              <div className="p-5">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase text-gray-700">
                  <a href="/" className="text-blue-600 hover:text-blue-800" aria-label="Category" title={blog.category}>
                    {blog.category}
                  </a>
                  <span className="text-gray-600"> — {blog.date}</span>
                </p>
                <a href="/" aria-label="Category" title={blog.title} className="block mb-3 text-2xl font-bold leading-5 text-gray-900 hover:text-blue-800">
                  {blog.title}
                </a>
                <p className="mb-2 text-gray-700">
                  {blog.description}
                </p>
                <a href="/" aria-label="" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-800">
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
