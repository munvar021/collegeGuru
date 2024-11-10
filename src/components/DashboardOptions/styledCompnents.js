import styled from 'styled-components'

export const OtherOptions = styled.div`
  background: white;
  border-radius: 12px;
  border: 1px solid #eaeaea;
  overflow: hidden;
`

export const OptionTitle = styled.h3`
  margin: 0;
  padding: 24px;
  font-size: 1.2rem;
  border-bottom: 1px solid #eaeaea;
`

export const OptionsList = styled.div`
  display: flex;
  flex-direction: column;
`

export const OptionItem = styled.a`
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #1a1a1a;
  text-decoration: none;
  transition: background 0.2s;
  
  &:hover {
    background: #f5f7ff;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #eaeaea;
  }
`