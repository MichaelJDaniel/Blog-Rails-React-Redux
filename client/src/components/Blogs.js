import React from 'react';
import { connect, } from 'react-redux';

const Blogs = ({ id, title, body, complete, dispatch }) => (
  <li>
    { title }
    { body }
  </li>
)

export default connect()(Blogs);