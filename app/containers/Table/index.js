
// /* eslint-disable no-restricted-syntax */
// import { useTable } from 'react-table'
// import React from 'react';
// import PropTypes from 'prop-types';
// import {
//   CssBaseline,
//   MaUTable,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow
// } from '../../materialUi.moduls';
// import './table.css';
// import * as reposData from '../../../server/data/data.json';
// export function Table() {

//   const getData = () => {
//     const types = new Map([['jpg', 0], ['png', 0], ['docs', 0], ['pdf', 0]]);

//     const GetSummary = dataList => {
//       for (let i = 0; i < dataList.length; i += 1) {
//         if (dataList[i].type === 'folder' && dataList[i].children) {
//           GetSummary(dataList[i].children);
//         }
//         else {
//           const currentType = dataList[i].type;
//           types.set(currentType, (types.has(currentType) ? types.get(currentType) : 0) + 1);
//         }
//       }
//     };
//     GetSummary(reposData.default);

//     const data = [];
//     for (const type of types.keys()) {
//       data.push({ type, amount: types.get(type) })
//     }
//     return data;
//   }

//   const columns = [
//     {
//       Header: 'Repository type ',
//       accessor: 'type',
//     },
//     {
//       Header: 'Amount',
//       accessor: 'amount',
//     },
//   ];

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//   } = useTable({ columns, data: getData() })
//   return (<>

//     <CssBaseline />
//     <MaUTable  {...getTableProps()}>
//       <TableHead>
//         {headerGroups.map(headerGroup => (
//           <TableRow  {...headerGroup.getHeaderGroupProps()}>
//             {headerGroup.headers.map(column => (
//               <TableCell
//                 {...column.getHeaderProps()}
//               >
//                 {column.render('Header')}
//               </TableCell >
//             ))}
//           </TableRow >
//         ))}
//       </TableHead>
//       <TableBody {...getTableBodyProps()}>
//         {rows.map(row => {
//           prepareRow(row)
//           return (
//             <TableRow  {...row.getRowProps()}>
//               {row.cells.map(cell => (
//                 <TableCell
//                   {...cell.getCellProps()}
//                 >
//                   {cell.render('Cell')}
//                 </TableCell >
//               ))}
//             </TableRow >
//           )
//         })}
//       </TableBody>
//     </MaUTable>
//   </>)
// }
// Table.propTypes = {
//   dispatch: PropTypes.func,
// };
// export default (Table);

import React, { useEffect, useRef, useState } from 'react';
import { useTable } from 'react-table'
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

function usePrevious(value) {
  let ref = useRef();
  useEffect(() => {
    ref = {...ref, prevLateVal: value};
  });
  return ref.prevLateVal;
}



export function Table({list, onLoadList}){
  const currentLateValue = list;
  const prevLateVal = usePrevious(currentLateValue);
  useEffect(() => {
    if (!list.length) alert('a');// onLoadList();
    // if(prevLateVal !== currentLateValue) {
    //   alert('a');
    //   //onLoadList();
    //   // process here
    // }
  },[list]) // This will be executed only if currentLateValue changes.

  return <div>a</div>
}
// export function Table({ list, onLoadList }) {
//   useInjectSaga({ key: 'table', saga });
//   let show;
//   const [getTableProps1, setGetTableProps1]=useState(undefined);
//   // if(list.length === 0){
//   //   show = 'false';
//   // }
//   // const [show, setShow] = useState(false);

//   useEffect(() => {
//     if (!list.length) onLoadList();
//   },[list]);

//   const getData = () => {
//     const types = new Map([['jpg', 0], ['png', 0], ['docs', 0], ['pdf', 0]]);

//     const GetSummary = dataList => {
//       dataList.forEach(item => {
//         if (item.type === 'folder' && item.children) {
//           GetSummary(item.children);
//         }
//         else {
//           const currentType = item.type;
//           types.set(currentType, (types.has(currentType) ? types.get(currentType) : 0) + 1);
//         }
//       }
//       )
//       // for (let i = 0; i < dataList.length; i += 1) {
//       //   if (dataList[i].type === 'folder' && dataList[i].children) {
//       //     GetSummary(dataList[i].children);
//       //   }
//       //   else {
//       //     const currentType = dataList[i].type;
//       //     types.set(currentType, (types.has(currentType) ? types.get(currentType) : 0) + 1);
//       //   }
//       // }
//     };
//     if (list.length) GetSummary(list);
//     const data = [];
//     types.forEach(type => {
//       data.push({ type, amount: types.get(type) })
//     });
//     return data;
//   }



//   const columns = [
//     {
//       Header: 'Repository type ',
//       accessor: 'type',
//     },
//     {
//       Header: 'Amount',
//       accessor: 'amount',
//     },
//   ];
//   if (show === 'false' && !getTableProps1 && list.length >0) {
//     show ='true';
//     const {
//       getTableProps,
//       getTableBodyProps,
//       headerGroups,
//       rows,
//       prepareRow,
//     } = useTable({ columns, data: [{type:'aa', amount: 0}] })
//     setGetTableProps1(getTableProps);
//   }


//   if(list.length > 0){

  
//     return (<>
//     <CssBaseline />
//     <MaUTable  {...getTableProps1()}>
//       {/* <TableHead>
//         {headerGroups.map(headerGroup => (
//           <TableRow  {...headerGroup.getHeaderGroupProps()}>
//             {headerGroup.headers.map(column => (
//               <TableCell
//                 {...column.getHeaderProps()}
//               >
//                 {column.render('Header')}
//               </TableCell >
//             ))}
//           </TableRow >
//         ))}
//       </TableHead>
//       <TableBody {...getTableBodyProps()}>
//         {rows.map(row => {
//           prepareRow(row)
//           return (
//             <TableRow  {...row.getRowProps()}>
//               {row.cells.map(cell => (
//                 <TableCell
//                   {...cell.getCellProps()}
//                 >
//                   {cell.render('Cell')}
//                 </TableCell >
//               ))}
//             </TableRow >
//           )
//         })}
//       </TableBody> */}
//     </MaUTable>
//   </>)
//   } return null;
// };
Table.propTypes = {
  onLoadList: PropTypes.func,
  list: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = (state) =>  ({ list: state.global.list })

const mapDispatchToProps = (dispatch) => ({
  onLoadList: () => dispatch(loadList()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default compose(withConnect)(Table);


