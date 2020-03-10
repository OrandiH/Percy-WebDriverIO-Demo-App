import React from 'react'
import styled from 'styled-components'
import tw from "tailwind.macro"


const BottomContainer = styled.div`
  ${tw`bg-red-300 h-16 p-4 inset-x-0 bottom-0 w-full overflow-hidden fixed text-center mt-px`};
`

const Footer = () => (
  <BottomContainer>
        © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
  </BottomContainer>
)

export default Footer