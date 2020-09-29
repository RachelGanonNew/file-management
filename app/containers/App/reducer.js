// import produce from 'immer';

// import * as data from "data/repos-data.json";
// import {
//   LOAD_REPOS, 
//   LOAD_REPOS_SUCCESS,
//   LOAD_REPOS_ERROR,
//   GET_REPOS,
//   ADD_REPOS,
//   DELETE_REPOS
// } from './constants';

// // The initial state of the App
// export const initialState = {
//   loading: false,
//   error: false,
//   currentUser: false,
//   repos: data.default,
//   currentRepos:{}

// };

// function getRepos(reposList,reposName)
// {
//   const currentRepos = reposList.find(repos=>repos.name===reposName);
//   return currentRepos;
// }

// function deleteRepos(reposList,reposName)
// {
//   const currentReposIndex = reposList.findIndex(repos=>repos.name===reposName);
//   reposList.spilce(currentReposIndex,1);
//   return reposList;
// }
// function addRepos(reposList,addedRepos)
// {
//   reposList.push(addedRepos);
//   return reposList;
// }
// /* eslint-disable default-case, no-param-reassign */
// const appReducer = (state = initialState, action) =>
//   produce(state, draft => {
//     switch (action.type) {
//       case LOAD_REPOS:
//         draft.loading = true;
//         draft.error = false;
//         draft.userData.repos = false;
//         break;

//       case LOAD_REPOS_SUCCESS:
//         draft.userData.repos = action.data;
//         draft.loading = false;
//         break;

//       case LOAD_REPOS_ERROR:
//         draft.error = action.error;
//         draft.loading = false;
//         break;

//       case GET_REPOS:        
//         draft.currentRepos = getRepos(state.repos,action.reposName);
//         break;

//       case ADD_REPOS:        
//         draft.currentRepos = addRepos(state.repos,action.repos);
//         draft.currentRepos = action.repos;
//         break;

//       case DELETE_REPOS:        
//         draft.repos = deleteRepos(state.repos,action.reposName);
//         draft.currentRepos = null;
//         break;
//     }
//   });

// export default appReducer;

import produce from 'immer';
import { LOAD_CHILDREN_SUCCESS, LOAD_CHILDREN, LOAD_CHILDREN_ERROR ,CREATE_FOLDER, DELETE_ITEMS} from './constants';
import * as data from '../../data/repos-data.json';

export const initialState = {
  loading: false,
  error: false,
  rootFolders: {  
    path: '',
    name: '',
    children: []
  },
};

const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_CHILDREN:
        draft.loading = true;
        draft.error = false;
        break;
      case CREATE_FOLDER:
        const pathList = action.path.split('/');
        let count=0;
        let folders = data.default;
        if(action.name!==''&&action.name!==' '){
          if (action.path !== '') {
            pathList.forEach(pathName => {
              count+=1;
              if (pathName !== ''){
                folders = folders.find(f => f.name === pathName);
                if(pathList.length!==count)
                  folders=folders.children;}
            });
            folders.children.push({type:"folder",name:action.name,path:`${action.path}/${action.name}`,children:[]});
          }
          else {
            folders.push({type:"folder",name:action.name,path: `/${action.name}`});
          }}
        const newState = JSON.parse(JSON.stringify(state.rootFolders));
        newState.children = JSON.parse(JSON.stringify(data.default));
        draft.rootFolders = newState;
        break;
      case LOAD_CHILDREN_SUCCESS:
        const folder = getFolderByChildPath(state.rootFolders, action.path);
        folder.children = action.children;
        draft.rootFolders = {...state.rootFolders};
        draft.loading = false;
        break;

      case LOAD_CHILDREN_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    
      case DELETE_ITEMS:
        if(action.choosePathes.length>=3)
        // eslint-disable-next-line no-alert
        { if (window.confirm(`Are you sure want to delete ${action.choosePathes.length} items ?`)) 
        { deleteItems(data.default,data.default, action.choosePathes,1);
          action.choosePathes.length=0;
        }}
        else{
          deleteItems(data.default,data.default, action.choosePathes,1);
          action.choosePathes.length=0
        }
    
        const deleteItemsState  = JSON.parse(JSON.stringify(state.rootFolders));
        deleteItemsState.children = JSON.parse(JSON.stringify(data.default));
        draft.rootFolders = deleteItemsState;
        break;
      default:
    }
  });

const getFolderByChildPath = (rootFolders, childPath) => {
  const pathList = childPath.split('/');
  let folder = rootFolders;
  if (folder.name === childPath) return folder;

  pathList.forEach(pathName => {
    if (pathName !== '') {
      folder = folder.children.find(currentFolder => currentFolder.name === pathName);
    }
  });

  return folder;
};

const deleteItems = (dataList, dat, choosePathes, num) => {

  for (let i = 0; i < dataList.length; i += 1) 
  {
    const curentPath = dataList[i].path;
    if (choosePathes.includes(curentPath))
    { if(num===1)
      data.default=dataList.filter(item => item.path !== curentPath);
    else
      dat.children=dataList.filter(item => item.path !== curentPath); 
    dataList=dataList.filter(item => item.path !== curentPath);       
    i-=1;}
    else if(dataList[i].children)
      deleteItems(dataList[i].children, dataList[i],choosePathes,num+1);
  }
};

export default appReducer;
