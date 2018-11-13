import styled from 'styled-components'


const TableWrapper = styled.table`
  width: 75%;
  padding: 2%;
  margin: 5%;
  border: 1px solid rgba(0,0,0,.12);
`
const CellHeader = styled.th`
  border: 1px solid #222 !important;
`
const Cell = styled.td`
  border: .5px solid #222 !important;
`

export {
  TableWrapper,
  CellHeader,
  Cell
}
