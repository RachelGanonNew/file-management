/* eslint-disable no-restricted-syntax */
import { useTable } from 'react-table'
import React from 'react';
import PropTypes from 'prop-types';
import {
  CssBaseline,
  MaUTable,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '../../materialUi.moduls';
import './table.css';
import * as reposData from '../../../server/data/data.json';
export function Table() {

  const getData = () => {
    const types = new Map([['jpg', 0], ['png', 0], ['docs', 0], ['pdf', 0]]);

    const GetSummary = dataList => {
      for (let i = 0; i < dataList.length; i += 1) {
        if (dataList[i].type === 'folder' && dataList[i].children) {
          GetSummary(dataList[i].children);
        }
        else {
          const currentType = dataList[i].type;
          types.set(currentType, (types.has(currentType) ? types.get(currentType) : 0) + 1);
        }
      }
    };
    GetSummary(reposData.default);

    const data = [];
    for (const type of types.keys()) {
      data.push({ type, amount: types.get(type) })
    }
    return data;
  }

  const columns = [
    {
      Header: 'Repository type ',
      accessor: 'type',
    },
    {
      Header: 'Amount',
      accessor: 'amount',
    },
  ];

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
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
        {rows.map(row => {
          prepareRow(row)
          return (
            <TableRow  {...row.getRowProps()}>
              {row.cells.map(cell => (
                <TableCell
                  {...cell.getCellProps()}
                >
                  {cell.render('Cell')}
                </TableCell >
              ))}
            </TableRow >
          )
        })}
      </TableBody>
    </MaUTable>
  </>)
}
Table.propTypes = {
  dispatch: PropTypes.func,
};
export default (Table);
