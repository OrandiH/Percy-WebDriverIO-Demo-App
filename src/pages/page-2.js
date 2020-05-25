import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import tw from "tailwind.macro"

const ButtonComponent = styled.button`
  ${tw`text-white bg-blue-900 hover:bg-blue-700 font-bold py-2 px-4 rounded-full`};
`

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <ButtonComponent><Link to="/">Go back to the homepage</Link></ButtonComponent>
  </Layout>
)

export default SecondPage
