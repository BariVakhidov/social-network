import styled, {css} from 'styled-components';

const Button = styled.button`
  background-color: #d2d4d2;
  border-radius: 10px;
  border: solid 0px grey;
  margin: 10px;
  padding: 0.25em 1em;
  transition: background-color 0.2s ease-in;
  outline: none;
  :hover {
    background-color: #86C232;
  }

  ${props =>
          props.primary &&
          css`
            background: #6c6c6c;
            color: white;
          `};
`
export default Button;