import * as data from '../../data/repos-data.json';

export default function getChildren(path) {
  const slicePath = path.split('/');
  let i ,j;

  let res = data.default;
  if (path === '') return res;
  for (i = 0; i < slicePath.length; i += 1)
    for (j = 0; j < res.length; j += 1)
      if (res[j].name === slicePath[i]) {
        res = res[j].children;
        break;
      }
  return res;
}
