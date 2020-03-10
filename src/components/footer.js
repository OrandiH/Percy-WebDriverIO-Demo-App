import React from 'react'
import styled from 'styled-components'
import tw from "tailwind.macro"


const BottomContainer = styled.div`
  ${tw`bg-teal-400 h-16 p-4 inset-x-0 bottom-0 w-full overflow-hidden relative text-center mt-px`};
`

const Text = styled.p`
  ${tw`text-white text-2xl`};
`

const Footer = () => (
  <BottomContainer>
        <Text>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Text>
  </BottomContainer>
)

export default Footer