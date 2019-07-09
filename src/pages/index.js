import React from 'react'
// import { Box, Heading } from 'rebass'
// import { Link, graphql } from 'gatsby'
import { graphql } from 'gatsby'
// import styled from 'styled-components'
import { navigate } from 'gatsby'
// import Layout from '../components/layout'
// import SEO from '../components/seo'
// import { rhythm } from '../utils/typography'

export default class BlogIndex extends React.Component {
  render() {
    navigate('/docs/')
    return null
  }
}
