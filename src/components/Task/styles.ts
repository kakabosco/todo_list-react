import styled from 'styled-components'
import variables from '../../styles/variables'

type TagProps = {
  priority?: string
  status?: string
}

function returnBgColor(props: TagProps): string {
  if ('status' in props) {
    if (props.status === 'Pendente') return variables.yellow
    if (props.status === 'Concluída') return variables.green
  } else if ('priority' in props) {
    if (props.priority === 'Urgente') return variables.red
    if (props.priority === 'Importante') return variables.orange
  }

  return '#ccc'
}

export const Card = styled.div`
  margin-bottom: 32px;
  padding: 16px;
  background-color: #fcfcfc;
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Title = styled.h3`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
`

export const Tag = styled.span<TagProps>`
  display: inline-block;
  margin-right: 16px;
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => returnBgColor(props)};
  border-radius: 6px;
`

export const Description = styled.textarea`
  display: block;
  width: 100%;
  margin: 16px 0;
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Space Mono', monospace;
  background-color: transparent;
  resize: none;
  border: none;
  outline: none;
`

export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Button = styled.button`
  margin-right: 8px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  border: none;
  border-radius: 8px;
  background-color: #2f3640;
  cursor: pointer;
`

export const SaveButton = styled(Button)`
  background-color: ${variables.green};
`

export const CancelRemoveButton = styled(Button)`
  background-color: ${variables.red};
`
