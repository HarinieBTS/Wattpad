import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <div>
      <h1>Category Page</h1>
      {/* Add content for category page */}
      <ul>
            <li><Link to="/fiction">Fiction</Link></li>
            <li><Link to="/non-fiction">Non-Fiction</Link></li>
            <li><Link to="/thriller">Thriller</Link></li>
            <li><Link to="/horror">Horror</Link></li>
            <li><Link to="/Children">Children</Link></li>
          </ul>
      
    </div>
  );
};

export default Category;
