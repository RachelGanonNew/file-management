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
    if (!list) {
      onLoadList();
    }
  }, [list]);
  const getData = () => {
    const types = new Map([['jpg', 0], ['png', 0], ['docs', 0], ['pdf', 0]]);
    const GetSummary = dataList => {
      console.log('get summary', dataList);
      console.log('get summary', dataList.type);
      dataList.forEach(item => {
        if (item.type === 'folder' && item.children) {
          GetSummary(item.children);
        }
        else {
          const currentType = item.type;
          types.set(currentType, (types.has(currentType) ? types.get(currentType) : 0) + 1);
        }
      })
    };
    if (list) GetSummary(list);
    const data = [];
    types.forEach((value, key) => {
      data.push({ key, amount: types.get(key) })
    });
    return data;
  }
  function Myfunc() {
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
            return (
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
            )
          })}
        </TableBody>
      </MaUTable>
    </>);
  }
  return (
    <div>
      {list && <Myfunc />}
    </div>
  )
};
Table.propTypes = {
  onLoadList: PropTypes.func,
  list: PropTypes.any,
};

const mapStateToProps = (state) => ({ list: state.global.list })

const mapDispatchToProps = (dispatch) => ({
  onLoadList: () => dispatch(loadList()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(withConnect)(Table);


