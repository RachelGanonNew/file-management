import { useTable } from 'react-table'
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import saga from '../App/saga';
import {
  CssBaseline,
  MaUTable,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '../../materialUi.moduls';
import { loadList } from '../App/actions';
import './table.css';
export function Table({ list, onLoadList }) {
  useInjectSaga({ key: 'table', saga });
  useEffect(() => {
    if (list.path === ""||!list) onLoadList();
  }, []);

  const getData = () => {
    const types = new Map([['jpg', 0], ['png', 0], ['docs', 0], ['pdf', 0]]);

    const GetSummary = dataList => {
      dataList.forEach(item => {
        if (item.type === 'folder' && item.children) {
          GetSummary(item.children);
        }
        else {
          const currentType = item.type;
          types.set(currentType, (types.has(currentType) ? types.get(currentType) : 0) + 1);
        }
      })
      // for (let i = 0; i < dataList.length; i += 1) {
      //   if (dataList[i].type === 'folder' && dataList[i].children) {
      //     GetSummary(dataList[i].children);
      //   }
      //   else {
      //     const currentType = dataList[i].type;
      //     types.set(currentType, (types.has(currentType) ? types.get(currentType) : 0) + 1);
      //   }
      // }
    };
    if(list.path !== ""&&list) GetSummary(list);
    const data = [];
    types.forEach(type => {
      data.push({ type, amount: types.get(type) })
    });
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
};
Table.propTypes = {
  onLoadList: PropTypes.func,
  list: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = (state) => ({ list: state.global.rootFolder })

const mapDispatchToProps = (dispatch) => ({
  onLoadList: () => dispatch(loadList()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default compose(withConnect)(Table);


