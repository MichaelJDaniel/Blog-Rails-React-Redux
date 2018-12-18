import React from 'react'
import { connect } from 'react-redux'
import BlogList from './BlogList'

class BlogForm extends React.Component {
  state = { title: '', body: '' };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const { title, body } = this.state;
    dispatch({ type: 'ADD_BLOGS', blog: {title, body} })
    dispatch({ type: 'INC_ID' })
    this.setState({ title: "", body: "",});
  }

  handleChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    })
    
  }

  render(){
    const { title, body } = this.state

  return (
    <div>
      <h3>Add a Blog</h3>
      <form onSubmit={this.handleSubmit}>
        <input value={title} onChange={this.handleChange} name="title"/>
      </form>
      <form onSubmit={this.handleSubmit}>
        <input value={body} onChange={this.handleChange} name="body"
        />
      </form>
      <BlogList/>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId }
}

export default connect(mapStateToProps)(BlogForm);