// solution adapted from http://stackoverflow.com/a/19080981/4393835

jsdom       = require('jsdom')
sizeOf      = require('image-size')
fs          = require('fs')
ColorThief  = require('color-thief')
program     = require('commander')
onecolor    = require('onecolor')
exec        = require('child_process').execSync
const path = require('path');

program
    .option('-s --svg', 'ouput an svg')
    .parse(process.argv)

colorThief = new ColorThief()

const ORIGINAL_IMG = program.args[0];
const SPINE_IMG   = `./assets/${path.basename(ORIGINAL_IMG)}.spine.jpg`
const FACE_IMG   = `./assets/${path.basename(ORIGINAL_IMG)}.face.jpg`

// compute angles n such...
const dims = sizeOf(ORIGINAL_IMG)
const VSPINE_ANGLE = '50'
const VSPINE_HEIGHT = dims.height
const VSPINE_WIDTH = Math.round(dims.width*.04)
const WEDGE_HEIGHT = Math.round(Math.tan(VSPINE_ANGLE*Math.PI/180)*VSPINE_WIDTH)

// const CROP_WIDTH = Math.round(VSPINE_WIDTH*2)
const CROP_WIDTH = 1

const BUMP = CROP_WIDTH

const IMG_HEIGHT = (WEDGE_HEIGHT)+dims.height
const IMG_WIDTH = VSPINE_WIDTH+dims.width

const HSPINE_HEIGHT = WEDGE_HEIGHT
const HSPINE_WIDTH  = dims.width


// generate spine image pattern
const CMD  = `convert ${ORIGINAL_IMG} -crop ${CROP_WIDTH}x${dims.height}+0+0 ${SPINE_IMG}`
exec(CMD)
const CMD2 = `convert ${ORIGINAL_IMG} -crop ${IMG_WIDTH}x${dims.height}+${CROP_WIDTH}+0 ${FACE_IMG}`
exec(CMD2)

// read in image files
const img = fs.readFileSync(ORIGINAL_IMG)
const img_spine = fs.readFileSync(SPINE_IMG)

const FACE_FILE =  `data:image/jpeg;base64,${img.toString('base64')}`;
const SPINE_FILE =`data:image/jpeg;base64,${img_spine.toString('base64')}`;


// if you wanna do color average, uncomment!
// const rgb = colorThief.getColor(img)
// const rgbCode = 'rgb( ' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')'; // 'rgb(r, g, b)'
// const SPINE_COLOR = onecolor(onecolor(rgbCode).hex()).lightness(+.4).hex()


const mydiv = `<div style="color: white;">${VSPINE_WIDTH}x${VSPINE_HEIGHT} with wedge ${WEDGE_HEIGHT}</div>`
jsdom.env(
  `<html>
        <body>
            <div style="background-color:#000000">
                ${mydiv}
                <div>
                    <div style="background-color:pink; top:0; left:0; position:'absolute'; height:${IMG_HEIGHT}; width:${IMG_WIDTH}">
                    <div style="padding-left:20;"id=\"myid\"></div>

                    </div>

                </div>
            </div>
        </body>
    </html>`,        // CREATE DOM HOOK
  [ 'http://d3js.org/d3.v3.min.js',    // JS DEPENDENCIES online ...
  'js/d3.v3.min.js' ],                 // ... & local-offline

  function (err, window) {

// D3JS CODE * * * * * * * * * * * * * * * * * * * * * * * *
    var svg = window.d3.select("#myid")
        .append("svg")
        .attr('xmlns', "http://www.w3.org/2000/svg")
        .attr('xmlns:xlink', "http://www.w3.org/1999/xlink")
        .attr('version','1.1')
        .attr("style", 'background-color:transparent')
        .attr("width", `${IMG_WIDTH}`)
        .attr("height", `${IMG_HEIGHT}`);

    svg.append("defs")
          .attr('id', 'thespine')
          .append('pattern')
            .attr('patternUnits','userSpaceOnUse')
            .attr('width',`${VSPINE_WIDTH}`)
            .attr('height', `${VSPINE_HEIGHT}`)
            // .attr('patternTransform','scale(-1,1)')
            .attr('id', 'spinepattern')
            .append('image')
              .attr("x", 0)
              .attr("y", 0)
              .attr("id",'spineimg')
              .attr("xlink:href", `${SPINE_FILE}`)
              .attr("preserveAspectRatio","none")
              .attr("style","image-rendering:optimizeQuality")
              .attr('width',`${VSPINE_WIDTH}`)
              .attr("height",`${VSPINE_HEIGHT}`);

    var g2 = svg.append('g');

    g2.append("rect")
        .attr("id", "spine")
        .attr("width", `${VSPINE_WIDTH}`)
        .attr("height",`${VSPINE_HEIGHT}`)
        .attr("transform", `translate(0,${WEDGE_HEIGHT})skewY(-${VSPINE_ANGLE})`)
        .style("fill", '000000'); // uncomment if you want to fill with color avg

    g2.append("rect")
        .attr("style","opacity:0.6;fill:url(#spinepattern);fill-opacity:1;fill-rule:nonzero;")
        .attr("id", "spine")
        .attr("width", `${VSPINE_WIDTH}`)
        .attr("height",`${VSPINE_HEIGHT}`)
        .attr("transform", `translate(0,${WEDGE_HEIGHT})skewY(-${VSPINE_ANGLE})`);
        // .style("fill", SPINE_COLOR); // uncomment if you want to fill with color avg

    var g3 = svg.append('g')
    g3.append("rect")
        .attr("style", "fill:#d1d1d1")
        .attr("id", "asdfasdf")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", `${HSPINE_WIDTH}`)
        .attr("height",`${HSPINE_HEIGHT}`)
        .attr("transform", `translate(${VSPINE_WIDTH},${dims.height})skewX(-${90-VSPINE_ANGLE})`);


    var g1 = svg.append('g');

    g1.append("image")
         .attr("x", `${VSPINE_WIDTH}`)
         .attr("y", 0)
         .attr("id",'poop')
         .attr("xlink:href", `${FACE_FILE}`)
         .attr("preserveAspectRatio","none")
         .attr("style","image-rendering:optimizeQuality")
         .attr("width", `${dims.width}`)
         .attr("height",`${dims.height}`);


// END (D3JS) * * * * * * * * * * * * * * * * * * * * * * * *

  //PRINTING OUT SELECTION
  console.log( window.d3.select("#myid").html() );
 } // end function
);
