import * as data from '../../data/repos-data.json';
export default function getChildren(path) {
  const partPath = path.split('/');
  let i;
  let j;
  let OurData = data.default;
  if (path === '') return OurData;
  for (i = 0; i < partPath.length; i += 1)
    for (j = 0; j < OurData.length; j += 1)
      if (OurData[j].name === partPath[i]) {
        OurData = OurData[j].children;
        break;
      }
  return OurData;
}
