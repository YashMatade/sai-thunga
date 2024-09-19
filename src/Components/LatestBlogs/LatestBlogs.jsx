import React, { useState } from 'react';
import './LatestBlogs.css';
import BlogImage from '/lblog.png'; 
import { Link } from 'react-router-dom';

const LatestBlogs = () => {
  const [showAll, setShowAll] = useState(false); // State to control whether to show all blogs

  const Blogs = [
    {
      blogImage: BlogImage,
      blogType: "Medical Terminology",
      blogTitle: "Latest medical research and advancements",
      blogInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
      blogBtnText: "Learn More"
    },
    {
      blogImage: BlogImage,
      blogType: "Medical Terminology",
      blogTitle: "Latest medical research and advancements",
      blogInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
      blogBtnText: "Learn More"
    }, {
      blogImage: BlogImage,
      blogType: "Medical Terminology",
      blogTitle: "Latest medical research and advancements",
      blogInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
      blogBtnText: "Learn More"
    }, {
      blogImage: BlogImage,
      blogType: "Medical Terminology",
      blogTitle: "Latest medical research and advancements",
      blogInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
      blogBtnText: "Learn More"
    },
    {
      blogImage: BlogImage,
      blogType: "Healthcare Innovations",
      blogTitle: "Emerging trends in healthcare technology",
      blogInfo: "Phasellus imperdiet nulla et dolor varius, nec faucibus libero elementum. Sed malesuada lacus a orci euismod.",
      blogBtnText: "Read More"
    },
    {
      blogImage: BlogImage,
      blogType: "Wellness Tips",
      blogTitle: "Top wellness tips for a healthier lifestyle",
      blogInfo: "Curabitur fringilla ligula non lectus consectetur, vel dapibus magna consectetur. Nulla facilisi.",
      blogBtnText: "Discover More"
    }
  ];

  // Toggle between showing 2 blogs or all blogs
  const displayedBlogs = showAll ? Blogs : Blogs.slice(0, 3);

  return (
    <div className="container-fluid">
      <div className="latestBlogs">
        <div className="top_intro_content">
          <h3>Latest Blogs & Articles</h3>
          <p>See Our Latest Blogs & Articles</p>
        </div>
        <div className="blog-list">
          {displayedBlogs.map((blog, index) => (
            <Link to={``} key={index} style={{ textDecoration: "none" }}>
              <div className="blog-item">
                <img src={blog.blogImage} alt={blog.blogTitle} className="blog-image" />
                <div className="blog-content">
                  <h4>{blog.blogType}</h4>
                  <h5 style={{ color: "#252525" }}>{blog.blogTitle}</h5>
                  <p>{blog.blogInfo.length > 50 ? `${blog.blogInfo.slice(0, 50)}...` : blog.blogInfo}</p>
                  <button className="blog-btn">{blog.blogBtnText}</button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="view-all-btn">
        <button 
          className="" 
          onClick={() => setShowAll(!showAll)} 
          >
          {showAll ? 'Show Less' : 'View All'}
        </button>
        </div>
       
      </div>
    </div>
  );
};

export default LatestBlogs;
