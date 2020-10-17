import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import CreateTable from '../../components/GetTable';
import saga from '../App/saga';
import { loadList } from '../App/actions';
import './table.css';

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

export function Table({ list, onLoadList }) {
  useInjectSaga({ key: 'table', saga });
  useEffect(() => {
    if (!list) {
      onLoadList();
    }
  }, [list]);
  return (
    <div>
      {list && <CreateTable list={list} columns={columns}/>}
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


