// solution adapted from http://stackoverflow.com/a/19080981/4393835

jsdom       = require('jsdom')
sizeOf      = require('image-size')
fs          = require('fs')
ColorThief  = require('color-thief')
program     = require('commander')
onecolor    = require('onecolor')

program
    .option('-s --svg', 'ouput an svg')
    .parse(process.argv)

colorThief = new ColorThief()

const ORIGINAL_IMG = program.args[0];

const img = fs.readFileSync(ORIGINAL_IMG)
const rgb = colorThief.getColor(img)
const rgbCode = 'rgb( ' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')'; // 'rgb(r, g, b)'
const SPINE_COLOR = onecolor(onecolor(rgbCode).hex()).lightness(+.4).hex()


const IMG_FILE =  `data:image/jpeg;base64,${img.toString('base64')}`;

// comput all this shit...
const dims = sizeOf(ORIGINAL_IMG)

const VSPINE_ANGLE = '45'
const VSPINE_HEIGHT = dims.height
const VSPINE_WIDTH = dims.width*.07
const WEDGE_HEIGHT = Math.tan(VSPINE_ANGLE*Math.PI/180)*VSPINE_WIDTH

const IMG_HEIGHT = (WEDGE_HEIGHT)+dims.height
const IMG_WIDTH = VSPINE_WIDTH+dims.width

const HSPINE_HEIGHT = WEDGE_HEIGHT
const HSPINE_WIDTH  = dims.width


const mydiv = `<div style="color: white;">${VSPINE_WIDTH}x${VSPINE_HEIGHT} with wedge ${WEDGE_HEIGHT}</div>`
jsdom.env(
  `<html>
        <body>
            <div style="background-color:#000000">
                ${mydiv}
                <div>
                    <div style="background-color:pink; top:0; left:0; position:'absolute'; height:${IMG_HEIGHT}; width:${IMG_WIDTH}">
                    <div id=\"myid\"></div>

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
        .attr("style", 'background-color:transparent')
        .attr("width", `${IMG_WIDTH}`)
        .attr("height", `${IMG_HEIGHT}`);


    svg.append("rect")
        .attr("id", "spine")
        .attr("x", 0)
        .attr("y", `${WEDGE_HEIGHT}`)
        .attr("width", `${VSPINE_WIDTH}`)
        .attr("height",`${VSPINE_HEIGHT}`)
        .attr("transform", `skewY(-${VSPINE_ANGLE})`)
        .style("fill", SPINE_COLOR);

    svg.append("rect")
        .attr("id", "buttom_pages")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", `${HSPINE_WIDTH}`)
        .attr("height",`${HSPINE_HEIGHT}`)
        .attr("transform", `translate(${VSPINE_WIDTH},${dims.height})skewX(-${90-VSPINE_ANGLE})`)
        .style("fill", "d1d1d1");

    var g1 = svg.append('g');

    g1.append("image")
         .attr("x", `${VSPINE_WIDTH}`)
         .attr("y", 0)
         .attr("id",'poop')
         .attr("xlink:href", `${IMG_FILE}`)
         .attr("preserveAspectRatio","none")
         .attr("style","image-rendering:optimizeQuality")
         .attr("width", `${dims.width}`)
         .attr("height",`${dims.height}`);


// END (D3JS) * * * * * * * * * * * * * * * * * * * * * * * *

  //PRINTING OUT SELECTION
  console.log( window.d3.select("#myid").html() );
 } // end function
);
