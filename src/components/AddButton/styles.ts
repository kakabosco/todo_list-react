import { Link } from 'react-router-dom'

import styled from 'styled-components'
import variables from '../../styles/variables'

export const Circle = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  background-color: ${variables.green};
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
`
