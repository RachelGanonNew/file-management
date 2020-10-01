
import React, { memo,useState,useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { Helmet } from 'react-helmet';
// import { createStructuredSelector } from 'reselect';
// import { compose } from 'redux';

// import { useInjectSaga } from 'utils/injectSaga';
// import { useInjectReducer } from 'utils/injectReducer';
// import makeSelectTableSummarizing from './selectors';
// import reducer from './reducer';
// import saga from './saga';

// import ReactTable from 'react-table';

// import * as data from '../../data/repos-data.json';

export function TableSummarizing() {
  return<div>
    hello table
  </div>
}
export default TableSummarizing;
//   const [types, setTypes] = useState([
//     { type: 'jpg', amount: 0 },
//     { type: 'png', amount: 0 },
//     { type: 'pdf', amount: 0 },
//     { type: 'docs', amount: 0 },
//     { type: 'folder', amount: 0 },
//   ]);
//   const columns = [
//     {
//       Header: 'Type',
//       accessor: 'type',
//     },
//     {
//       Header: 'Amount',
//       accessor: 'amount',
//     },
//   ];
  
//   useEffect(() => {
//     GetSummary(data.default);
//     setTypes(list);
//   }, []);

//   useInjectReducer({ key: 'tableSummarizing', reducer });
//  useInjectSaga ({ key: 'tableSummarizing', saga });
//   const list = [...types];
//   const GetSummary = dataList => {
//     for (let i = 0; i < dataList.length; i += 1) {
//       if (dataList[i].type === 'folder' && dataList[i].children) 
//       GetSummary(dataList[i].children);
//       else if(dataList[i].type === 'file') {
//         const currentType = dataList[i].path.slice(
//           dataList[i].path.lastIndexOf('.') + 1,
//         );
//         for (let j = 0; j < list.length; j += 1){
//           if (list[j].type === currentType)
//           {list[j].amount+=1;
//             break;
//           }
//           if(j===list.length-1){
//             const newInstance = {type: currentType, amount: 1};
//             list.push(newInstance);
//             break;
//           }
//         }
//       }
//     }
//   return (
//     <div>
//       <Helmet>
//         <title>TableSummarizing</title>
//         <meta name="description" content="Description of TableSummarizing" />
//       </Helmet>
//       <ReactTable data={types} columns={columns} /> 
//     </div>
//   );
  
// }
// }
// TableSummarizing.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

// const mapStateToProps = createStructuredSelector({
//   tableSummarizing: makeSelectTableSummarizing(),
// });

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }

// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// );

// export default compose(
//   withConnect,
//   memo,
// )(TableSummarizing);





