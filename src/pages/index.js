import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from 'styled-components'
import tw from "tailwind.macro"

const ButtonComponent = styled.button`
  ${tw`text-white bg-blue-600 hover:bg-blue-700 font-bold py-2 px-4 rounded-full`};
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div>
    <iframe id="youTubeVideoFrame" title="WebCraftConf Video" width="560" height="315" src="https://www.youtube.com/embed/iW-af6bvnDk" 
    frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
    </div>
    <ButtonComponent><Link to="/page-2/">Go to page 2</Link></ButtonComponent>
  </Layout>
)

export default IndexPage
