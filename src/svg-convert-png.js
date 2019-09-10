const fs = require("pn/fs"); // https://www.npmjs.com/package/pn
const svg2png = require("svg2png");
const gm = require('gm')
var path = require('path')

console.log('svg2pngFunc-------fs-test')
// fs.readFile(path.join(__dirname, "../src/logo.svg"), (err, data) => {
//   svg2png(buffer, { width: 640, height: 640 }).then(output => {
//     console.log("output retrieved");
//   })
// })
//   .then(svg2png)
//   .then(buffer => fs.writeFile("bai.png", buffer))
//   .catch(e => console.error(e));

fs.readFile(path.join(__dirname, "../src/test.svg"))
  .then(svg2png)
  .then(buffer => fs.writeFile("baiyun5.png", buffer))
  .catch(e => console.error(e));
// let imageMagick = gm.subClass({imageMagick: true});
// imageMagick('logo.svg').write('logo.png', function(err){
//   if (!err) console.log('image converted.')
//   else console.log(err)
// })