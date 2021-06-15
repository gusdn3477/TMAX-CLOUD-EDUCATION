import React, { useState } from 'react';
import BlogData from '../db/blog.json';

export default function Content() {

    const [newBlogData, setBlogData] = useState(BlogData);
    const blogList = newBlogData.map(item => (
        <div key={item.id} className = "col-12 col-md-4 mb-4">
            <div className="blogImg"><img src={item.image} alt=""/></div>
            <div className="blogTxt">
                <p className = "blogTitle">{item.title}</p>
                <p className = "blogAuth">{item.author}</p>
            </div>
        </div>
    ))

    return(
        <div className = "row mt-5">
            {blogList}
        </div>
    )
}

