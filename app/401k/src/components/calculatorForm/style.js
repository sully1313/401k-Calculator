import styled from 'styled-components'


const List = styled.li`
  list-style: none;
`

const Form = styled.form`
  box-sizing: border-box;
  width: 50%;
  `

const Input = styled.input`
  width: 100%;
  padding: 1em;
  background: #fff;
  border: 1px solid rgba(0,0,0,.12);
  font-size: 15px;
  line-height: normal;

`
const Submit = styled.button`
  display: inline-block;
  width: auto;
  height: auto;
  padding: 1em 2.5em;
  text-align: center;
  cursor: pointer;
  position: relative;
  border: 1px solid #222 !important;
  font-family: brandon-grotesque;
  font-size: 15px;
  font-style: normal;
  line-height: normal;
  font-weight: normal;
  text-transform: uppercase;
  white-space: nowrap;
`


export {
  List,
  Form,
  Input,
  Submit
}
