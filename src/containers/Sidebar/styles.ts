import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  height: 100vh;
`

export const Filters = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin-top: 16px;
`

export const ReturnPage = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;

  p {
    margin-left: 8px;
    font-size: 14px;
    font-weight: bold;
    color: #666;
  }
`
