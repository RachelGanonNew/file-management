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

router.get('/list', (req, res) => {
  fs.readFile(jsonPath, 'utf8', (err, data) => {
    res.end(data);

  });
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
    const pathes = req.body;
    const newList = sendToDelete(list, pathes.choosePathes);
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

const sendToDelete = (list, pathes) => {
  pathes.forEach(path => {
    deleteDeep(list, path);
  });
  return list;
}
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

let deleteDeep = (data, path, pos = 0) => {
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].path === path) {
      delete data[i];
      return;
    }
  }
  for (let i = pos; i < data.length; i+=1) {
    if ('children' in data[i]) {
      deleteDeep(data[i].children, path, i);
    }
  }
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

module.exports = router;
