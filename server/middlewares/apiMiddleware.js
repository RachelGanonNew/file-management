const express = require('express');
const fs = require('fs');
const router = express.Router();
const BASE_DIR = __dirname.replace('middlewares', '');
const jsonPath = `${BASE_DIR}\\data\\data.json`;
const bodyParser = require('body-parser');
const _ = require('lodash');
require('deepdash')(_);
const FOLDER = 'folder';
router.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

router.use(bodyParser.json());
router.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

router.get('/get/*', (req, res) => {
  fs.readFile(jsonPath, 'utf8', (err, data) => {
    const list = JSON.parse(data);
    const path = req.params['0'];
    const item = deep(list, path);
    res.end(res.json(item));
  });
});

router.post('/add/*', (req, res) => {
  fs.readFile(jsonPath, 'utf8', (err, data) => {
    const list = JSON.parse(data);
    const item = req.body;
    const newList = _addItem(list, item.path, item.name);
    const jsonData = JSON.stringify(newList);

    fs.writeFile(jsonPath, jsonData, writeFileErr => {
      if (!writeFileErr) {
        res.end(jsonData);
      } else {
        res.end(data);
      }
    });
  });
});

router.post('/delete/*', (req, res) => {
  fs.readFile(jsonPath, 'utf8', (err, data) => {
    const list = JSON.parse(data);
    console.log("req",req.body);
    const pathes = req.body;
    const newList = _deleteItems(list, pathes.choosePathes);
    const jsonData = JSON.stringify(newList);

    fs.writeFile(jsonPath, jsonData, writeFileErr => {
      if (!writeFileErr) {
        res.end(jsonData);
      } else {
        res.end(data);
      }
    });
  });
});


// Private functions
const deep = (list, p) => {
  if (!p) {
    return lazyLoading(list);
  }
  const res = _.findDeep(list, { path: p }, { childrenPath: "children", leavesOnly: false, skipChildren: true });
  const folders = res.value.children;
  return lazyLoading(folders);

};

const lazyLoading = list => {
  let repos = list;
  repos = repos.map(folder => {
    const currentFolder = Object.assign({}, folder);
    if (currentFolder.type === FOLDER)
      currentFolder.children = [];
    return currentFolder;
  });
  return repos;
}

const _addItem = (list, itemPath, itemName) => {
  if (isValid(itemName)) {
    const res = _.findDeep(list, { path: itemPath }, { childrenPath: "children", leavesOnly: false, skipChildren: true });
    const folders = res.value.children;
    folders.push({ type: "folder", name: itemName, path: `${itemPath}/${itemName}`, children: [] });
  };
  return list;
}
const isValid = (name) => name !== '' && name !== ' ';

const _deleteItems = (list, pathes) => {
  pathes.forEach(element => {
    console.log("elem",element);
    list = _.filterDeep(list, { path: element }, { childrenPath: "children", leavesOnly: false, skipChildren: true });
    console.log("res",list);
  });
  return list;
}

module.exports = router;
