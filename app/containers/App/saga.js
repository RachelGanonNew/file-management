
import { put, takeLatest ,call ,takeEvery} from 'redux-saga/effects';
import request from 'utils/request';
import { 
  LOAD_CHILDREN ,
  CREATE_FOLDER,
  DELETE_REPOS,
  LOAD_LIST
} from './constants';
import { 
  loadChildrenSuccess, 
  loadChildrenError,
  createNewFolderSuccess,
  createNewFolderError ,
  deleteReposSuccess,
  deleteReposError,
  listLoaded,
  listLoadingError
  
} from './actions';
const baseUrl = '/api';

export function* loadChildren(action) {
  const requestURL = `${baseUrl}/get/${action.path}`;
  try {
    const children = yield call(request, requestURL);
    yield put(loadChildrenSuccess(action.path, children));
  } catch (err) {
    yield put(loadChildrenError(err));
  }
}

export function* getList() {
  const requestURL = `${baseUrl}/list`;

  try {
    const list = yield call(request, requestURL);
    yield put(listLoaded(list));
  } catch (err) {
    yield put(listLoadingError(err));
  }
}

export function* add(action) {
  const requestURL = `${baseUrl}/add/${action.path}`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(action),
  };

  try {
    const list = yield call(request, requestURL, options);
    yield put(createNewFolderSuccess(action.path, action.name, list));
  } catch (err) {
    yield put(createNewFolderError(err));
  }
}
export function* remove(action) {
  const requestURL = `${baseUrl}/delete/${action.path}`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(action),
  };

  try {
    const list = yield call(request, requestURL, options);
    console.log("log",list);
    yield put(deleteReposSuccess(list));
  } catch (err) {
    yield put(deleteReposError(err));
  }
}


export default function* childrenData() {
  yield takeLatest(LOAD_CHILDREN, loadChildren);
  yield takeEvery(CREATE_FOLDER, add);
  yield takeEvery(DELETE_REPOS, remove);
  yield takeLatest(LOAD_LIST, getList);
}

