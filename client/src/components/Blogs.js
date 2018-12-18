import React from 'react';
import { connect, } from 'react-redux';
import { Link, } from 'react-router-dom'
import { getBlogs, } from '../reducers/blogs'
import { Container, Header, Card, Image, } from 'semantic-ui-react'

class Blogs extends React.Component {
  componentDidMount() {
    this.props.dispatch(getBlogs())
  }

  blogs = () => {
    return this.props.blogs.map( blog => 
      <Card key={ blog.id }>
        <Image src={ blog.logo } />
        <Card.Content>
          <Card.Header>
            {blog.title}
          </Card.Header>
          <Card.Description>
            { blog.body }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/blogs/${blog.id}`}>
            View App
          </Link>
        </Card.Content>
      </Card>
      )
  }
  render() {
    return (
      <Container>
        <Header as="h3" textAlign="center">Blogs</Header>
          <Card.Group itemsPerRow={4}>
           { this.blogs() }
          </Card.Group>
        </Container>
      )
    }
  }

  const mapStateToProps = (state) => {
    return { blogs: state.blogs, };
  }

export default connect(mapStateToProps)(Blogs);