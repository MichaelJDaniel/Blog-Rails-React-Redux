import React from 'react'
import { connect } from 'react-redux'
import { Divider, Header, Image, Container, Table} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const BlogList = ({ blog = {} }) => (
  <Container>
    <Link to ="/blogs">View all Blogs</Link>
    <Header as="h3" textAlign="center">{blog.title}</Header>
    <Table definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Body</Table.Cell>
          <Table.Cell>{blog.body}</Table.Cell>
        </Table.Row>
        </Table.Body>
      </Table>
  </Container>
)

const mapStateToProps = (state, props) => {
  return { blog: state.blogs.find( b => b.id === parseInt(props.match.params.id )) }
}




export default connect(mapStateToProps)(BlogList);