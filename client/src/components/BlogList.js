import React from 'react'
import { connect } from 'react-redux'
import Blogs from './Blogs'

const BlogList = ({ blogs }) => (
  <ul>
  { blogs.map( b => {
    return (
      <li key={b.id}>
       { b.title }
       <br/>
       { b.body }
      </li>
    )
   })
  }
</ul>
)

const mapStateToProps = (state) => {
  return { blogs: state.blogs, };
}




export default connect(mapStateToProps)(BlogList);