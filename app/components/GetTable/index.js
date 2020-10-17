
import React, { memo } from 'react';
import { useTable } from 'react-table'
import PropTypes from 'prop-types';
import {
  CssBaseline,
  MaUTable,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '../../materialUi.moduls';
function GetTable({list,columns}) {
  const getData = () => {
    const types = new Map([['jpg', 0], ['png', 0], ['docs', 0], ['pdf', 0]]);
    const SumTypes = dataList => {
      dataList.forEach(item => {
        if (item.type === 'folder' && item.children) {
          SumTypes(item.children);
        }
        
        else {
          const currentType = item.type;
          types.set(currentType, (types.has(currentType) ? types.get(currentType) : 0) + 1);
        }
      })
    };
    if (list) SumTypes(list);
    const data = [];
    types.forEach((value, key) => {
      data.push({ key, amount: types.get(key) })
    });
    return data;
  }
 
  function CreateTable() {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
    } = useTable({ columns, data: getData() })
    return (<>
      <CssBaseline />
      <MaUTable  {...getTableProps()}>
        <TableHead>
          {headerGroups.map(headerGroup => (
            <TableRow  {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <TableCell
                  {...column.getHeaderProps()}
                >
                  {column.render('Header')}
                </TableCell >
              ))}
            </TableRow >
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map(row => (
            <TableRow  >
              <TableCell
              >
                {row.original.key}
              </TableCell >
              <TableCell
              >
                {row.original.amount}
              </TableCell >
            </TableRow >
          ))}
        </TableBody>
      </MaUTable>
    </>);
  }
  
  return  CreateTable();
}
GetTable.propTypes = {
  list: PropTypes.oneOfType(PropTypes.array,PropTypes.bool),
  columns:PropTypes.array
};

export default memo(GetTable);
