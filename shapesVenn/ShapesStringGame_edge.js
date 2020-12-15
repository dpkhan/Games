/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'out1',
                type: 'rect',
                rect: ['9px', '122','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.73816']]
            },
            {
                id: 'out12',
                type: 'rect',
                rect: ['866px', '121px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.72603']]
            },
            {
                id: 'out11',
                type: 'rect',
                rect: ['822', '381','auto','auto','auto', 'auto']
            },
            {
                id: 'out3',
                type: 'rect',
                rect: ['63', '381','auto','auto','auto', 'auto']
            },
            {
                id: 'out8',
                type: 'rect',
                rect: ['775px', '127px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.73034','0.4898']]
            },
            {
                id: 'out4',
                type: 'rect',
                rect: ['81px', '127px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.79399','0.53061']]
            },
            {
                id: 'out6',
                type: 'rect',
                rect: ['202', '122','auto','auto','auto', 'auto']
            },
            {
                id: 'out7',
                type: 'rect',
                rect: ['202', '438','auto','auto','auto', 'auto']
            },
            {
                id: 'out9',
                type: 'rect',
                rect: ['733', '420','auto','auto','auto', 'auto']
            },
            {
                id: 'out5',
                type: 'rect',
                rect: ['116', '421','auto','auto','auto', 'auto']
            },
            {
                id: 'red2',
                type: 'rect',
                rect: ['526', '385','auto','auto','auto', 'auto']
            },
            {
                id: 'red4',
                type: 'rect',
                rect: ['567', '358','auto','auto','auto', 'auto']
            },
            {
                id: 'red1',
                type: 'rect',
                rect: ['526', '165','auto','auto','auto', 'auto']
            },
            {
                id: 'red3',
                type: 'rect',
                rect: ['567', '165','auto','auto','auto', 'auto']
            },
            {
                id: 'red6',
                type: 'rect',
                rect: ['701', '182','auto','auto','auto', 'auto']
            },
            {
                id: 'red7',
                type: 'rect',
                rect: ['754', '200','auto','auto','auto', 'auto']
            },
            {
                id: 'red8',
                type: 'rect',
                rect: ['802', '224','auto','auto','auto', 'auto']
            },
            {
                id: 'red9',
                type: 'rect',
                rect: ['842', '252','auto','auto','auto', 'auto']
            },
            {
                id: 'red5',
                type: 'rect',
                rect: ['595', '165','auto','auto','auto', 'auto']
            },
            {
                id: 'both2',
                type: 'rect',
                rect: ['442', '185','auto','auto','auto', 'auto']
            },
            {
                id: 'both3',
                type: 'rect',
                rect: ['442', '377','auto','auto','auto', 'auto']
            },
            {
                id: 'both5',
                type: 'rect',
                rect: ['535', '233','auto','auto','auto', 'auto']
            },
            {
                id: 'both4',
                type: 'rect',
                rect: ['375', '233','auto','auto','auto', 'auto']
            },
            {
                id: 'both6',
                type: 'rect',
                rect: ['356', '257','auto','auto','auto', 'auto']
            },
            {
                id: 'both7',
                type: 'rect',
                rect: ['563', '257','auto','auto','auto', 'auto']
            },
            {
                id: 'both1',
                type: 'rect',
                rect: ['402', '207','auto','auto','auto', 'auto']
            },
            {
                id: 'blue2',
                type: 'rect',
                rect: ['372', '385','auto','auto','auto', 'auto']
            },
            {
                id: 'blue1',
                type: 'rect',
                rect: ['372', '165','auto','auto','auto', 'auto']
            },
            {
                id: 'blue4',
                type: 'rect',
                rect: ['344', '358','auto','auto','auto', 'auto']
            },
            {
                id: 'blue3',
                type: 'rect',
                rect: ['344', '165','auto','auto','auto', 'auto']
            },
            {
                id: 'blue6',
                type: 'rect',
                rect: ['184', '182','auto','auto','auto', 'auto']
            },
            {
                id: 'blue7',
                type: 'rect',
                rect: ['132', '200','auto','auto','auto', 'auto']
            },
            {
                id: 'blue8',
                type: 'rect',
                rect: ['100', '224','auto','auto','auto', 'auto']
            },
            {
                id: 'blue9',
                type: 'rect',
                rect: ['80', '252','auto','auto','auto', 'auto']
            },
            {
                id: 'blue5',
                type: 'rect',
                rect: ['237', '165','auto','auto','auto', 'auto']
            },
            {
                id: 'outside',
                type: 'rect',
                rect: ['0px', '119px','auto','auto','auto', 'auto']
            },
            {
                id: 'blueline',
                type: 'rect',
                rect: ['109px', '174px','53px','3px','auto', 'auto'],
                fill: ["rgba(47,0,253,1.00)"],
                stroke: [0,"rgba(47,0,253,1.00)","none"],
                transform: [[],['30']]
            },
            {
                id: 'redline',
                type: 'rect',
                rect: ['774px', '172px','53px','3px','auto', 'auto'],
                fill: ["rgba(253,0,0,1)"],
                stroke: [0,"rgb(253, 0, 0)","none"],
                transform: [[],['-39']]
            },
            {
                id: 'bluechoice',
                type: 'rect',
                rect: ['69px', '140px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.96491','0.96491']]
            },
            {
                id: 'bluerectangle',
                type: 'rect',
                rect: ['70px', '139px','auto','auto','auto', 'auto']
            },
            {
                id: 'redchoice',
                type: 'rect',
                rect: ['750px', '139px','auto','auto','auto', 'auto']
            },
            {
                id: 'blueString',
                type: 'rect',
                rect: ['64px', '154px','auto','auto','auto', 'auto']
            },
            {
                id: 'redrectangle',
                type: 'rect',
                rect: ['750', '139','auto','auto','auto', 'auto']
            },
            {
                id: 'redString',
                type: 'rect',
                rect: ['344px', '154px','auto','auto','auto', 'auto']
            },
            {
                id: 'lowerBackground',
                type: 'rect',
                rect: ['0px', '478px','950px','122px','auto', 'auto'],
                fill: ["rgba(218,248,251,1.00)"],
                stroke: [4,"rgba(218,248,251,1.00)","none"]
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['0px', '0px','950px','122px','auto', 'auto'],
                fill: ["rgba(218,248,251,1.00)"],
                stroke: [4,"rgba(218,248,251,1.00)","none"]
            },
            {
                id: 'bigredtri',
                type: 'rect',
                rect: ['653', '492','auto','auto','auto', 'auto']
            },
            {
                id: 'bigbluesquare',
                type: 'rect',
                rect: ['422', '492','auto','auto','auto', 'auto']
            },
            {
                id: 'biggreensquare',
                type: 'rect',
                rect: ['422', '546','auto','auto','auto', 'auto']
            },
            {
                id: 'biggreentri',
                type: 'rect',
                rect: ['732', '546','auto','auto','auto', 'auto']
            },
            {
                id: 'bigredsquare',
                type: 'rect',
                rect: ['343', '491','auto','auto','auto', 'auto']
            },
            {
                id: 'bigyellowsquare',
                type: 'rect',
                rect: ['343', '546','auto','auto','auto', 'auto']
            },
            {
                id: 'nottriangle',
                type: 'rect',
                rect: ['841px', '77px','auto','auto','auto', 'auto']
            },
            {
                id: 'triangle',
                type: 'rect',
                rect: ['843px', '4px','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'notsquare',
                type: 'rect',
                rect: ['730px', '78px','auto','auto','auto', 'auto']
            },
            {
                id: 'square',
                type: 'rect',
                rect: ['736px', '5px','auto','auto','auto', 'auto']
            },
            {
                id: 'notcircle',
                type: 'rect',
                rect: ['619px', '77px','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'circle',
                type: 'rect',
                rect: ['619px', '5px','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'little',
                type: 'rect',
                rect: ['471px', '73px','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'big',
                type: 'rect',
                rect: ['327px', '67px','auto','auto','auto', 'auto']
            },
            {
                id: 'notblue',
                type: 'rect',
                rect: ['471px', '24px','auto','auto','auto', 'auto']
            },
            {
                id: 'blue',
                type: 'rect',
                rect: ['327px', '23px','auto','auto','auto', 'auto']
            },
            {
                id: 'notgreen',
                type: 'rect',
                rect: ['181px', '86px','auto','auto','auto', 'auto']
            },
            {
                id: 'green',
                type: 'rect',
                rect: ['29px', '86px','auto','auto','auto', 'auto']
            },
            {
                id: 'notyellow',
                type: 'rect',
                rect: ['181px', '47px','auto','auto','auto', 'auto']
            },
            {
                id: 'yellow',
                type: 'rect',
                rect: ['29px', '47px','auto','auto','auto', 'auto']
            },
            {
                id: 'notred',
                type: 'rect',
                rect: ['181px', '8px','auto','auto','auto', 'auto']
            },
            {
                id: 'red',
                type: 'rect',
                rect: ['29', '8px','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['942px', '496px','157px','27px','auto', 'auto'],
                text: "Your Score",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 28, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'score',
                type: 'text',
                rect: ['945px', '525px','152px','74px','auto', 'auto'],
                text: "100",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 73, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Rectangle3Copy2',
                type: 'rect',
                rect: ['948px', '0px','148px','198px','auto', 'auto'],
                fill: ["rgba(0,0,0,0.00)"],
                stroke: [2,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'TextCopy',
                type: 'text',
                rect: ['942px', '2px','157px','51px','auto', 'auto'],
                text: "Moves",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 37, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'TextCopy2',
                type: 'text',
                rect: ['987px', '48px','107px','39px','auto', 'auto'],
                text: "Correct",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 28, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'TextCopy3',
                type: 'text',
                rect: ['969px', '123px','114px','39px','auto', 'auto'],
                text: "Incorrect",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 28, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'incorrectCount',
                type: 'text',
                rect: ['967px', '145px','114px','57px','auto', 'auto'],
                text: "0",
                align: "right",
                font: ['Arial, Helvetica, sans-serif', 51, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'correctCount',
                type: 'text',
                rect: ['967px', '70px','114px','57px','auto', 'auto'],
                text: "0",
                align: "right",
                font: ['Arial, Helvetica, sans-serif', 51, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'Rectangle3Copy3',
                type: 'rect',
                rect: ['948px', '246px','148px','198px','auto', 'auto'],
                fill: ["rgba(0,0,0,0.00)"],
                stroke: [2,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'TextCopy6',
                type: 'text',
                rect: ['943px', '248px','157px','51px','auto', 'auto'],
                text: "Labels",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 36, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'TextCopy5',
                type: 'text',
                rect: ['985px', '294px','107px','39px','auto', 'auto'],
                text: "Correct",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 28, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'TextCopy4',
                type: 'text',
                rect: ['968px', '370px','114px','39px','auto', 'auto'],
                text: "Incorrect",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 28, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'labelCount',
                type: 'text',
                rect: ['966px', '391px','114px','57px','auto', 'auto'],
                text: "0",
                align: "right",
                font: ['Arial, Helvetica, sans-serif', 51, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'stringCount',
                type: 'text',
                rect: ['966px', '316px','114px','57px','auto', 'auto'],
                text: "0",
                align: "right",
                font: ['Arial, Helvetica, sans-serif', 51, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'bigbluetri',
                type: 'rect',
                rect: ['732', '492','auto','auto','auto', 'auto']
            },
            {
                id: 'bigyellowtri',
                type: 'rect',
                rect: ['654', '546','auto','auto','auto', 'auto']
            },
            {
                id: 'smallredtri',
                type: 'rect',
                rect: ['819', '498','auto','auto','auto', 'auto']
            },
            {
                id: 'smallbluesquare',
                type: 'rect',
                rect: ['585', '498','auto','auto','auto', 'auto']
            },
            {
                id: 'smallgreensquare',
                type: 'rect',
                rect: ['585', '553','auto','auto','auto', 'auto']
            },
            {
                id: 'smallgreentri',
                type: 'rect',
                rect: ['897', '553','auto','auto','auto', 'auto']
            },
            {
                id: 'smallredsquare',
                type: 'rect',
                rect: ['507', '498','auto','auto','auto', 'auto']
            },
            {
                id: 'smallyellowsquare',
                type: 'rect',
                rect: ['507', '553','auto','auto','auto', 'auto']
            },
            {
                id: 'smallbluetri',
                type: 'rect',
                rect: ['897', '498','auto','auto','auto', 'auto']
            },
            {
                id: 'smallyellowtri',
                type: 'rect',
                rect: ['819', '553','auto','auto','auto', 'auto']
            },
            {
                id: 'bigredcircle',
                type: 'rect',
                rect: ['29', '492','auto','auto','auto', 'auto']
            },
            {
                id: 'smallredcircle',
                type: 'rect',
                rect: ['193', '498','auto','auto','auto', 'auto']
            },
            {
                id: 'biggreencircle',
                type: 'rect',
                rect: ['108', '546','auto','auto','auto', 'auto']
            },
            {
                id: 'smallgreencircle',
                type: 'rect',
                rect: ['271', '553','auto','auto','auto', 'auto']
            },
            {
                id: 'bigbluecircle',
                type: 'rect',
                rect: ['108', '492','auto','auto','auto', 'auto']
            },
            {
                id: 'smallbluecircle',
                type: 'rect',
                rect: ['271', '498','auto','auto','auto', 'auto']
            },
            {
                id: 'bigyellowcircle',
                type: 'rect',
                rect: ['29', '546','auto','auto','auto', 'auto']
            },
            {
                id: 'smallyellowcircle',
                type: 'rect',
                rect: ['193', '553','auto','auto','auto', 'auto']
            },
            {
                id: 'labelText',
                display: 'none',
                type: 'text',
                rect: ['2px', '484px','950px','116px','auto', 'auto'],
                text: "Great Job.<br>Now Label the Strings",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 60, "rgba(0,0,0,1)", "normal", "none", "normal"]
            },
            {
                id: 'lowerBackground2',
                display: 'none',
                type: 'rect',
                rect: ['0px', '478px','950px','122px','auto', 'auto'],
                fill: ["rgba(218,251,234,1.00)"],
                stroke: [4,"rgba(218,251,234,1.00)","none"]
            },
            {
                id: 'Rectangle3',
                type: 'rect',
                rect: ['948px', '494px','148px','103px','auto', 'auto'],
                fill: ["rgba(0,0,0,0.00)"],
                stroke: [2,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'testout',
                display: 'none',
                type: 'text',
                rect: ['2px', '483px','950px','116px','auto', 'auto'],
                text: "Congratulations!!!",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 81, "rgba(0,0,0,1)", "normal", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'bigbluetri',
                symbolName: 'bigbluetri',
                autoPlay: {

                }
            },
            {
                id: 'smallbluesquare',
                symbolName: 'smallbluesquare',
                autoPlay: {

                }
            },
            {
                id: 'blue8',
                symbolName: 'blue8',
                autoPlay: {

                }
            },
            {
                id: 'blue9',
                symbolName: 'blue9',
                autoPlay: {

                }
            },
            {
                id: 'blue4',
                symbolName: 'blue4',
                autoPlay: {

                }
            },
            {
                id: 'blue5',
                symbolName: 'blue5',
                autoPlay: {

                }
            },
            {
                id: 'little',
                symbolName: 'little',
                autoPlay: {

                }
            },
            {
                id: 'smallgreencircle',
                symbolName: 'smallgreencircle',
                autoPlay: {

                }
            },
            {
                id: 'red9',
                symbolName: 'red9',
                autoPlay: {

                }
            },
            {
                id: 'red1',
                symbolName: 'red1',
                autoPlay: {

                }
            },
            {
                id: 'blueString',
                symbolName: 'blueString',
                autoPlay: {

                }
            },
            {
                id: 'outside',
                symbolName: 'outside',
                autoPlay: {

                }
            },
            {
                id: 'bigyellowtri',
                symbolName: 'bigyellowtri',
                autoPlay: {

                }
            },
            {
                id: 'notyellow',
                symbolName: 'notyellow',
                autoPlay: {

                }
            },
            {
                id: 'smallredsquare',
                symbolName: 'smallredsquare',
                autoPlay: {

                }
            },
            {
                id: 'yellow',
                symbolName: 'yellow',
                autoPlay: {

                }
            },
            {
                id: 'red6',
                symbolName: 'red6',
                autoPlay: {

                }
            },
            {
                id: 'out9',
                symbolName: 'out9',
                autoPlay: {

                }
            },
            {
                id: 'biggreensquare',
                symbolName: 'biggreensquare',
                autoPlay: {

                }
            },
            {
                id: 'red8',
                symbolName: 'red8',
                autoPlay: {

                }
            },
            {
                id: 'nottriangle',
                symbolName: 'nottriangle',
                autoPlay: {

                }
            },
            {
                id: 'smallgreensquare',
                symbolName: 'smallgreensquare',
                autoPlay: {

                }
            },
            {
                id: 'out1',
                symbolName: 'out1',
                autoPlay: {

                }
            },
            {
                id: 'bigbluecircle',
                symbolName: 'bigbbluecircle',
                autoPlay: {

                }
            },
            {
                id: 'blue2',
                symbolName: 'blue2',
                autoPlay: {

                }
            },
            {
                id: 'both3',
                symbolName: 'both3',
                autoPlay: {

                }
            },
            {
                id: 'red5',
                symbolName: 'red5',
                autoPlay: {

                }
            },
            {
                id: 'biggreentri',
                symbolName: 'biggreentri',
                autoPlay: {

                }
            },
            {
                id: 'green',
                symbolName: 'green',
                autoPlay: {

                }
            },
            {
                id: 'redchoice',
                symbolName: 'redchoice',
                autoPlay: {

                }
            },
            {
                id: 'smallredtri',
                symbolName: 'smallredtri',
                autoPlay: {

                }
            },
            {
                id: 'out4',
                symbolName: 'out4',
                autoPlay: {

                }
            },
            {
                id: 'blue3',
                symbolName: 'blue3',
                autoPlay: {

                }
            },
            {
                id: 'square',
                symbolName: 'square',
                autoPlay: {

                }
            },
            {
                id: 'triangle',
                symbolName: 'triangle',
                autoPlay: {

                }
            },
            {
                id: 'smallredcircle',
                symbolName: 'smallredcircle',
                autoPlay: {

                }
            },
            {
                id: 'big',
                symbolName: 'big',
                autoPlay: {

                }
            },
            {
                id: 'bluerectangle',
                symbolName: 'bluechoice',
                autoPlay: {

                }
            },
            {
                id: 'bigyellowsquare',
                symbolName: 'bigyellowsquare',
                autoPlay: {

                }
            },
            {
                id: 'both1',
                symbolName: 'both1',
                autoPlay: {

                }
            },
            {
                id: 'redrectangle',
                symbolName: 'redchoice',
                autoPlay: {

                }
            },
            {
                id: 'red',
                symbolName: 'red',
                autoPlay: {

                }
            },
            {
                id: 'notsquare',
                symbolName: 'notsquare',
                autoPlay: {

                }
            },
            {
                id: 'red7',
                symbolName: 'red7',
                autoPlay: {

                }
            },
            {
                id: 'both2',
                symbolName: 'both2',
                autoPlay: {

                }
            },
            {
                id: 'bluechoice',
                symbolName: 'bluechoice',
                autoPlay: {

                }
            },
            {
                id: 'smallyellowcircle',
                symbolName: 'smallyellowcircle',
                autoPlay: {

                }
            },
            {
                id: 'both7',
                symbolName: 'both7',
                autoPlay: {

                }
            },
            {
                id: 'bigyellowcircle',
                symbolName: 'bigyellowcircle',
                autoPlay: {

                }
            },
            {
                id: 'both6',
                symbolName: 'both6',
                autoPlay: {

                }
            },
            {
                id: 'out3',
                symbolName: 'out3',
                autoPlay: {

                }
            },
            {
                id: 'biggreencircle',
                symbolName: 'biggreencircle',
                autoPlay: {

                }
            },
            {
                id: 'bigredcircle',
                symbolName: 'bigredcircle',
                autoPlay: {

                }
            },
            {
                id: 'smallyellowtri',
                symbolName: 'smallyellowtri',
                autoPlay: {

                }
            },
            {
                id: 'out7',
                symbolName: 'out7',
                autoPlay: {

                }
            },
            {
                id: 'smallbluetri',
                symbolName: 'smallbluetri',
                autoPlay: {

                }
            },
            {
                id: 'bigredsquare',
                symbolName: 'bigredsquare',
                autoPlay: {

                }
            },
            {
                id: 'smallyellowsquare',
                symbolName: 'smallyellowsquare',
                autoPlay: {

                }
            },
            {
                id: 'smallgreentri',
                symbolName: 'smallgreentri',
                autoPlay: {

                }
            },
            {
                id: 'redString',
                symbolName: 'redString',
                autoPlay: {

                }
            },
            {
                id: 'bigredtri',
                symbolName: 'bigredtri',
                autoPlay: {

                }
            },
            {
                id: 'notgreen',
                symbolName: 'notgreen',
                autoPlay: {

                }
            },
            {
                id: 'notred',
                symbolName: 'notred',
                autoPlay: {

                }
            },
            {
                id: 'smallbluecircle',
                symbolName: 'smallbluecircle',
                autoPlay: {

                }
            },
            {
                id: 'red3',
                symbolName: 'red3',
                autoPlay: {

                }
            },
            {
                id: 'circle',
                symbolName: 'circle',
                autoPlay: {

                }
            },
            {
                id: 'blue1',
                symbolName: 'blue1',
                autoPlay: {

                }
            },
            {
                id: 'notblue',
                symbolName: 'notblue',
                autoPlay: {

                }
            },
            {
                id: 'blue',
                symbolName: 'blue',
                autoPlay: {

                }
            },
            {
                id: 'blue7',
                symbolName: 'blue7',
                autoPlay: {

                }
            },
            {
                id: 'out5',
                symbolName: 'out5',
                autoPlay: {

                }
            },
            {
                id: 'out8',
                symbolName: 'out8',
                autoPlay: {

                }
            },
            {
                id: 'red2',
                symbolName: 'red2',
                autoPlay: {

                }
            },
            {
                id: 'red4',
                symbolName: 'red4',
                autoPlay: {

                }
            },
            {
                id: 'notcircle',
                symbolName: 'notcircle',
                autoPlay: {

                }
            },
            {
                id: 'out6',
                symbolName: 'out6',
                autoPlay: {

                }
            },
            {
                id: 'out12',
                symbolName: 'out12',
                autoPlay: {

                }
            },
            {
                id: 'both5',
                symbolName: 'both5',
                autoPlay: {

                }
            },
            {
                id: 'blue6',
                symbolName: 'blue6',
                autoPlay: {

                }
            },
            {
                id: 'bigbluesquare',
                symbolName: 'bigbluesquare',
                autoPlay: {

                }
            },
            {
                id: 'out11',
                symbolName: 'out11',
                autoPlay: {

                }
            },
            {
                id: 'both4',
                symbolName: 'both4',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_incorrectCount}": [
                ["style", "top", '145px'],
                ["style", "text-align", 'right'],
                ["style", "height", '57px'],
                ["style", "width", '114px'],
                ["style", "left", '967px'],
                ["style", "font-size", '51px']
            ],
            "${_out12}": [
                ["transform", "scaleX", '0.72603'],
                ["style", "left", '866px'],
                ["style", "top", '121px']
            ],
            "${_neg10t}": [
                ["style", "line-height", 'normal'],
                ["style", "width", '40px'],
                ["style", "height", '24px'],
                ["style", "top", '0px'],
                ["style", "left", '-2px'],
                ["style", "font-size", '18px']
            ],
            "${_bluechoice}": [
                ["style", "top", '140px'],
                ["transform", "scaleY", '0.96491'],
                ["style", "left", '69px'],
                ["transform", "scaleX", '0.96491']
            ],
            "${_little}": [
                ["style", "top", '73px'],
                ["style", "left", '471px'],
                ["style", "cursor", 'pointer']
            ],
            "${_stringCount}": [
                ["style", "top", '316px'],
                ["style", "text-align", 'right'],
                ["style", "height", '57px'],
                ["style", "width", '114px'],
                ["style", "left", '966px'],
                ["style", "font-size", '51px']
            ],
            "${_blueline}": [
                ["style", "top", '174px'],
                ["transform", "rotateZ", '30deg'],
                ["color", "background-color", 'rgba(47,0,253,1.00)'],
                ["color", "border-color", 'rgba(47,0,253,1.00)'],
                ["style", "left", '109px'],
                ["style", "width", '53px']
            ],
            "${_circle}": [
                ["style", "top", '5px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '619px']
            ],
            "${_notblue}": [
                ["style", "left", '471px'],
                ["style", "top", '24px']
            ],
            "${_score}": [
                ["style", "top", '525px'],
                ["style", "height", '74px'],
                ["style", "font-size", '73px'],
                ["style", "left", '945px'],
                ["style", "width", '152px']
            ],
            "${_TextCopy5}": [
                ["style", "top", '294px'],
                ["style", "text-align", 'left'],
                ["style", "height", '39px'],
                ["style", "font-size", '28px'],
                ["style", "left", '985px'],
                ["style", "width", '107px']
            ],
            "${_neg100tCopy}": [
                ["style", "line-height", 'normal'],
                ["style", "width", '47px'],
                ["style", "height", '21px'],
                ["style", "top", '1px'],
                ["style", "left", '0px'],
                ["style", "font-size", '18px']
            ],
            "${_mult5tCopy4}": [
                ["style", "line-height", 'normal'],
                ["style", "width", '130px'],
                ["style", "height", '30px'],
                ["style", "top", '2px'],
                ["style", "left", '-1px'],
                ["style", "font-size", '18px']
            ],
            "${_triangle}": [
                ["style", "top", '4px'],
                ["style", "left", '843px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Rectangle3}": [
                ["style", "top", '494px'],
                ["style", "left", '948px'],
                ["style", "height", '103px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '2px'],
                ["style", "width", '148px']
            ],
            "${_zerotCopy2}": [
                ["style", "line-height", 'normal'],
                ["style", "font-size", '18px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '24px'],
                ["style", "top", '-1px'],
                ["style", "left", '-2px'],
                ["style", "width", '40px']
            ],
            "${_notgreen}": [
                ["style", "left", '181px'],
                ["style", "top", '86px']
            ],
            "${_TextCopy}": [
                ["style", "top", '2px'],
                ["style", "height", '51px'],
                ["style", "font-size", '37px'],
                ["style", "left", '942px'],
                ["style", "width", '157px']
            ],
            "${_out4}": [
                ["style", "top", '127px'],
                ["transform", "scaleX", '0.79399'],
                ["style", "left", '81px'],
                ["transform", "scaleY", '0.53061']
            ],
            "${_big}": [
                ["style", "left", '327px'],
                ["style", "top", '67px']
            ],
            "${_notcircle}": [
                ["style", "top", '77px'],
                ["style", "left", '619px'],
                ["style", "cursor", 'pointer']
            ],
            "${_red}": [
                ["style", "cursor", 'pointer'],
                ["style", "top", '8px']
            ],
            "${_TextCopy6}": [
                ["style", "top", '248px'],
                ["style", "height", '51px'],
                ["style", "width", '157px'],
                ["style", "left", '943px'],
                ["style", "font-size", '36px']
            ],
            "${_lowerBackground2}": [
                ["style", "top", '478px'],
                ["color", "background-color", 'rgba(218,251,234,1)'],
                ["style", "height", '122px'],
                ["style", "border-style", 'none'],
                ["style", "display", 'none'],
                ["color", "border-color", 'rgb(218, 251, 234)'],
                ["style", "left", '0px'],
                ["style", "width", '950px']
            ],
            "${_TextCopy4}": [
                ["style", "top", '370px'],
                ["style", "text-align", 'left'],
                ["style", "height", '39px'],
                ["style", "width", '114px'],
                ["style", "left", '968px'],
                ["style", "font-size", '28px']
            ],
            "${_green}": [
                ["style", "left", '29px'],
                ["style", "top", '86px']
            ],
            "${_redString}": [
                ["style", "left", '344px']
            ],
            "${_testout}": [
                ["style", "line-height", '112px'],
                ["style", "width", '950px'],
                ["style", "text-align", 'center'],
                ["style", "height", '116px'],
                ["style", "display", 'none'],
                ["style", "top", '483px'],
                ["style", "left", '2px'],
                ["style", "font-size", '81px']
            ],
            "${_labelText}": [
                ["style", "line-height", '52px'],
                ["style", "font-size", '60px'],
                ["style", "text-align", 'center'],
                ["style", "display", 'none'],
                ["style", "height", '116px'],
                ["style", "top", '484px'],
                ["style", "left", '2px'],
                ["style", "width", '950px']
            ],
            "${_out8}": [
                ["style", "top", '127px'],
                ["style", "left", '775px'],
                ["transform", "scaleY", '0.4898'],
                ["transform", "scaleX", '0.73034']
            ],
            "${_nottriangle}": [
                ["style", "left", '841px'],
                ["style", "top", '77px']
            ],
            "${_redline}": [
                ["style", "top", '172px'],
                ["transform", "rotateZ", '-39deg'],
                ["style", "left", '774px'],
                ["style", "width", '53px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(218,248,251,1.00)'],
                ["style", "height", '122px'],
                ["style", "border-style", 'none'],
                ["color", "border-color", 'rgba(218,248,251,1.00)'],
                ["style", "width", '950px']
            ],
            "${_notred}": [
                ["style", "top", '8px'],
                ["style", "left", '181px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '48px'],
                ["style", "text-align", 'left'],
                ["style", "height", '39px'],
                ["style", "width", '107px'],
                ["style", "left", '987px'],
                ["style", "font-size", '28px']
            ],
            "${_notyellow}": [
                ["style", "left", '181px'],
                ["style", "top", '47px']
            ],
            "${_redchoice}": [
                ["transform", "scaleX", '1'],
                ["style", "top", '139px'],
                ["style", "left", '750px'],
                ["transform", "scaleY", '1']
            ],
            "${_notsquare}": [
                ["style", "left", '730px'],
                ["style", "top", '78px']
            ],
            "${_blue}": [
                ["style", "left", '327px'],
                ["style", "top", '23px']
            ],
            "${_Rectangle3Copy3}": [
                ["style", "top", '246px'],
                ["style", "left", '948px'],
                ["style", "height", '198px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '2px'],
                ["style", "width", '148px']
            ],
            "${_square}": [
                ["style", "left", '736px'],
                ["style", "top", '5px']
            ],
            "${_TextCopy3}": [
                ["style", "top", '123px'],
                ["style", "text-align", 'left'],
                ["style", "height", '39px'],
                ["style", "font-size", '28px'],
                ["style", "left", '969px'],
                ["style", "width", '114px']
            ],
            "${_yellow}": [
                ["style", "left", '29px'],
                ["style", "top", '47px']
            ],
            "${_outside}": [
                ["style", "top", '119px']
            ],
            "${_Rectangle3Copy2}": [
                ["style", "top", '0px'],
                ["style", "border-width", '2px'],
                ["style", "height", '198px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '948px'],
                ["style", "width", '148px']
            ],
            "${_Text}": [
                ["style", "top", '496px'],
                ["style", "height", '27px'],
                ["style", "width", '157px'],
                ["style", "left", '942px'],
                ["style", "font-size", '28px']
            ],
            "${_lowerBackground}": [
                ["style", "top", '478px'],
                ["color", "background-color", 'rgba(218,248,251,1.00)'],
                ["color", "border-color", 'rgba(218,248,251,1.00)'],
                ["style", "height", '122px'],
                ["style", "border-style", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '950px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "width", '1100px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ],
            "${_labelCount}": [
                ["style", "top", '391px'],
                ["style", "text-align", 'right'],
                ["style", "height", '57px'],
                ["style", "font-size", '51px'],
                ["style", "left", '966px'],
                ["style", "width", '114px']
            ],
            "${_correctCount}": [
                ["style", "top", '70px'],
                ["style", "text-align", 'right'],
                ["style", "height", '57px'],
                ["style", "font-size", '51px'],
                ["style", "left", '967px'],
                ["style", "width", '114px']
            ],
            "${_out1}": [
                ["transform", "scaleX", '0.73816'],
                ["style", "left", '9px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
                { id: "eid172", tween: [ "style", "${_labelText}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid186", tween: [ "style", "${_lowerBackground2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid171", tween: [ "style", "${_testout}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"big": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], ['11']],
                    rect: ['7px', '16px', '115px', '2px', 'auto', 'auto'],
                    id: 'redcross',
                    stroke: [0, 'rgba(255,0,0,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,0,0,1.00)']
                },
                {
                    transform: [[0, 0], ['-11']],
                    rect: ['7px', '15px', '115px', '2px', 'auto', 'auto'],
                    id: 'bluecross',
                    stroke: [0, 'rgba(45,1,255,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(44,0,255,1.00)']
                },
                {
                    rect: ['0px', '0px', '126px', '41px', 'auto', 'auto'],
                    borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                    fill: ['rgba(255,255,255,1.00)'],
                    id: 'big',
                    stroke: [2, 'rgba(0,0,0,1.00)', 'solid'],
                    type: 'rect',
                    boxShadow: ['', 0, 1, 3, 1, 'rgba(0,0,0,0.65)'],
                    c: [
                    {
                        type: 'text',
                        rect: ['-2px', '1px', '130px', '39px', 'auto', 'auto'],
                        align: 'center',
                        id: 'bigt',
                        text: 'BIG',
                        cursor: ['pointer'],
                        font: ['Arial, Helvetica, sans-serif', 45, 'rgba(0,0,0,1)', '700', 'none', '']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_big}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-width", '2px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '126px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.spread", '1px'],
                ["style", "left", '0px'],
                ["style", "height", '41px'],
                ["subproperty", "boxShadow.offsetV", '1px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
            ],
            "${_bigt}": [
                ["style", "line-height", '41px'],
                ["style", "font-weight", '700'],
                ["style", "cursor", 'pointer'],
                ["style", "font-size", '45px'],
                ["style", "top", '1px'],
                ["style", "text-align", 'center'],
                ["style", "height", '39px'],
                ["style", "left", '-2px'],
                ["style", "width", '130px']
            ],
            "${symbolSelector}": [
                ["style", "height", '45px'],
                ["style", "width", '130px']
            ],
            "${_bluecross}": [
                ["color", "background-color", 'rgba(44,0,255,1.00)'],
                ["transform", "rotateZ", '-11deg'],
                ["style", "top", '15px'],
                ["color", "border-color", 'rgba(45,1,255,1.00)'],
                ["style", "left", '7px'],
                ["style", "width", '115px']
            ],
            "${_redcross}": [
                ["color", "background-color", 'rgba(255,0,0,1.00)'],
                ["style", "overflow", 'hidden'],
                ["transform", "rotateZ", '11deg'],
                ["style", "top", '16px'],
                ["color", "border-color", 'rgba(255,0,0,1.00)'],
                ["style", "left", '7px'],
                ["style", "width", '115px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid86", tween: [ "subproperty", "${_big}", "boxShadow.offsetV", '0px', { fromValue: '1px'}], position: 0, duration: 500, easing: "easeInQuad" }            ]
        }
    }
},
"yellow": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['7px', '11px', '115px', '2px', 'auto', 'auto'],
                    transform: [[0, 0], ['8']],
                    id: 'redcross',
                    stroke: [0, 'rgba(255,0,0,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,0,0,1.00)']
                },
                {
                    rect: ['7px', '11px', '115px', '2px', 'auto', 'auto'],
                    transform: [[0, 0], ['-8']],
                    id: 'bluecross',
                    stroke: [0, 'rgba(45,1,255,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(44,0,255,1.00)']
                },
                {
                    rect: ['0px', '0px', '126px', '20px', 'auto', 'auto'],
                    borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                    id: 'YELLOW',
                    stroke: [2, 'rgba(0,0,0,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(252,244,0,1.00)'],
                    c: [
                    {
                        font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '700', 'none', ''],
                        type: 'text',
                        align: 'center',
                        id: 'yellowT',
                        text: 'YELLOW',
                        cursor: ['pointer'],
                        rect: ['-2px', '-1px', '130px', '21px', 'auto', 'auto']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_yellowT}": [
                ["style", "line-height", '22px'],
                ["style", "font-weight", '700'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '130px'],
                ["style", "top", '-1px'],
                ["style", "text-align", 'center'],
                ["style", "height", '21px'],
                ["style", "left", '-2px'],
                ["style", "font-size", '18px']
            ],
            "${_YELLOW}": [
                ["color", "background-color", 'rgba(252,244,0,1.00)'],
                ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '126px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-width", '2px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "height", '20px'],
                ["subproperty", "boxShadow.offsetV", '1px'],
                ["subproperty", "boxShadow.spread", '1px'],
                ["subproperty", "boxShadow.blur", '3px']
            ],
            "${_bluecross}": [
                ["color", "background-color", 'rgba(44,0,255,1.00)'],
                ["transform", "rotateZ", '-8deg'],
                ["style", "top", '11px'],
                ["color", "border-color", 'rgba(45,1,255,1.00)'],
                ["style", "left", '7px'],
                ["style", "width", '115px']
            ],
            "${_redcross}": [
                ["color", "background-color", 'rgba(255,0,0,1.00)'],
                ["style", "overflow", 'hidden'],
                ["transform", "rotateZ", '8deg'],
                ["style", "top", '11px'],
                ["color", "border-color", 'rgba(255,0,0,1.00)'],
                ["style", "left", '7px'],
                ["style", "width", '115px']
            ],
            "${symbolSelector}": [
                ["style", "height", '24px'],
                ["style", "width", '130px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid77", tween: [ "subproperty", "${_YELLOW}", "boxShadow.offsetV", '0px', { fromValue: '1px'}], position: 0, duration: 500, easing: "easeInQuad" }            ]
        }
    }
},
"blue": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], ['8']],
                    rect: ['7px', '11px', '115px', '2px', 'auto', 'auto'],
                    id: 'redcross',
                    stroke: [0, 'rgba(255,0,0,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,0,0,1.00)']
                },
                {
                    transform: [[0, 0], ['-8']],
                    rect: ['7px', '11px', '115px', '2px', 'auto', 'auto'],
                    id: 'bluecross',
                    stroke: [0, 'rgba(45,1,255,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(44,0,255,1.00)']
                },
                {
                    rect: ['0px', '0px', '126px', '20px', 'auto', 'auto'],
                    borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                    fill: ['rgba(3,3,192,1.00)'],
                    id: 'BLUE',
                    stroke: [2, 'rgba(0,0,0,1.00)', 'solid'],
                    type: 'rect',
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65)'],
                    c: [
                    {
                        rect: ['-2px', '-1px', '130px', '21px', 'auto', 'auto'],
                        font: ['Arial, Helvetica, sans-serif', 18, 'rgba(250,241,241,1.00)', '700', 'none', ''],
                        align: 'center',
                        id: 'blueT',
                        text: 'BLUE',
                        cursor: ['pointer'],
                        type: 'text'
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_blueT}": [
                ["style", "line-height", '22px'],
                ["color", "color", 'rgba(250,241,241,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "cursor", 'pointer'],
                ["style", "font-size", '18px'],
                ["style", "top", '-1px'],
                ["style", "text-align", 'center'],
                ["style", "height", '21px'],
                ["style", "left", '-2px'],
                ["style", "width", '130px']
            ],
            "${symbolSelector}": [
                ["style", "height", '24px'],
                ["style", "width", '130px']
            ],
            "${_bluecross}": [
                ["color", "background-color", 'rgba(44,0,255,1.00)'],
                ["transform", "rotateZ", '-8deg'],
                ["style", "top", '11px'],
                ["color", "border-color", 'rgba(45,1,255,1.00)'],
                ["style", "left", '7px'],
                ["style", "width", '115px']
            ],
            "${_redcross}": [
                ["color", "background-color", 'rgba(255,0,0,1.00)'],
                ["style", "overflow", 'hidden'],
                ["transform", "rotateZ", '8deg'],
                ["style", "top", '11px'],
                ["color", "border-color", 'rgba(255,0,0,1.00)'],
                ["style", "left", '7px'],
                ["style", "width", '115px']
            ],
            "${_BLUE}": [
                ["color", "background-color", 'rgba(3,3,192,1.00)'],
                ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '3px'],
                ["subproperty", "boxShadow.offsetV", '1px'],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '126px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "border-width", '2px'],
                ["style", "height", '20px'],
                ["subproperty", "boxShadow.spread", '1px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid79", tween: [ "subproperty", "${_BLUE}", "boxShadow.offsetV", '0px', { fromValue: '1px'}], position: 0, duration: 500, easing: "easeInQuad" }            ]
        }
    }
},
"notsquare": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['5px', '17px', '74px', '2px', 'auto', 'auto'],
                    transform: [[0, 0], ['20']],
                    id: 'redcross',
                    stroke: [0, 'rgba(255,0,0,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,0,0,1.00)']
                },
                {
                    rect: ['5px', '17px', '74px', '2px', 'auto', 'auto'],
                    transform: [[0, 0], ['-20']],
                    id: 'bluecross',
                    stroke: [0, 'rgba(45,1,255,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(44,0,255,1.00)']
                },
                {
                    type: 'rect',
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'notSquare',
                    stroke: [2, 'rgba(0,0,0,1.00)', 'solid'],
                    rect: ['1px', '0px', '81px', '31px', 'auto', 'auto'],
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65)'],
                    transform: [],
                    fill: ['rgba(255,255,255,1.00)'],
                    c: [
                    {
                        font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                        type: 'text',
                        align: 'left',
                        id: 'notsquaret',
                        text: 'not',
                        cursor: ['pointer'],
                        rect: ['10px', '0px', '69px', '30px', 'auto', 'auto']
                    }]
                },
                {
                    rect: ['47px', '6px', '16px', '16px', 'auto', 'auto'],
                    id: 'square',
                    stroke: [2, 'rgb(0, 0, 0)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(6,0,0,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_notSquare}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.offsetV", '1px'],
                ["style", "border-width", '2px'],
                ["style", "width", '81px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
                ["style", "height", '31px'],
                ["subproperty", "boxShadow.spread", '1px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["style", "left", '1px']
            ],
            "${symbolSelector}": [
                ["style", "height", '35px'],
                ["style", "width", '88px']
            ],
            "${_square}": [
                ["style", "top", '6px'],
                ["style", "height", '16px'],
                ["style", "width", '16px']
            ],
            "${_bluecross}": [
                ["style", "top", '17px'],
                ["transform", "rotateZ", '-20deg'],
                ["color", "background-color", 'rgba(44,0,255,1)'],
                ["color", "border-color", 'rgb(45, 1, 255)'],
                ["style", "left", '5px'],
                ["style", "width", '74px']
            ],
            "${_redcross}": [
                ["style", "top", '17px'],
                ["transform", "rotateZ", '20deg'],
                ["style", "overflow", 'hidden'],
                ["color", "background-color", 'rgba(255,0,0,1)'],
                ["color", "border-color", 'rgb(255, 0, 0)'],
                ["style", "left", '5px'],
                ["style", "width", '74px']
            ],
            "${_notsquaret}": [
                ["style", "line-height", '30px'],
                ["style", "width", '69px'],
                ["style", "text-align", 'left'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '30px'],
                ["style", "top", '0px'],
                ["style", "left", '10px'],
                ["style", "font-size", '18px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid51", tween: [ "subproperty", "${_notSquare}", "boxShadow.spread", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
                { id: "eid50", tween: [ "subproperty", "${_notSquare}", "boxShadow.offsetH", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid91", tween: [ "subproperty", "${_notSquare}", "boxShadow.offsetV", '0px', { fromValue: '1px'}], position: 0, duration: 500, easing: "easeInQuad" }            ]
        }
    }
},
"square": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], ['32']],
                    rect: ['1px', '29px', '81px', '2px', 'auto', 'auto'],
                    id: 'redcross',
                    stroke: [0, 'rgba(255,0,0,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,0,0,1.00)']
                },
                {
                    transform: [[0, 0], ['-32']],
                    rect: ['1px', '29px', '81px', '2px', 'auto', 'auto'],
                    id: 'bluecross',
                    stroke: [0, 'rgba(45,1,255,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(44,0,255,1.00)']
                },
                {
                    rect: ['0px', '1px', '78px', '56px', 'auto', 'auto'],
                    borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
                    fill: ['rgba(255,255,255,1.00)'],
                    id: 'SQUARE',
                    stroke: [2, 'rgba(0,0,0,1.00)', 'solid'],
                    type: 'rect',
                    boxShadow: ['', 0, 1, 3, 1, 'rgba(0,0,0,0.65)'],
                    c: [
                    {
                        rect: ['-2px', '12px', '80px', '30px', 'auto', 'auto'],
                        font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '700', 'none', ''],
                        align: 'center',
                        id: 'squareT',
                        text: 'SQUARE',
                        cursor: ['pointer'],
                        type: 'text'
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_squareT}": [
                ["style", "line-height", '31px'],
                ["style", "font-weight", '700'],
                ["style", "cursor", 'pointer'],
                ["style", "font-size", '18px'],
                ["style", "top", '12px'],
                ["style", "text-align", 'center'],
                ["style", "height", '30px'],
                ["style", "left", '-2px'],
                ["style", "width", '80px']
            ],
            "${_SQUARE}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '3px'],
                ["subproperty", "boxShadow.offsetV", '1px'],
                ["style", "left", '0px'],
                ["style", "width", '78px'],
                ["style", "top", '1px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '56px'],
                ["subproperty", "boxShadow.spread", '1px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["style", "border-width", '2px']
            ],
            "${_bluecross}": [
                ["style", "top", '29px'],
                ["transform", "rotateZ", '-32deg'],
                ["color", "background-color", 'rgba(44,0,255,1)'],
                ["color", "border-color", 'rgb(45, 1, 255)'],
                ["style", "left", '1px'],
                ["style", "width", '81px']
            ],
            "${_redcross}": [
                ["style", "top", '29px'],
                ["transform", "rotateZ", '32deg'],
                ["style", "overflow", 'hidden'],
                ["color", "background-color", 'rgba(255,0,0,1)'],
                ["color", "border-color", 'rgb(255, 0, 0)'],
                ["style", "left", '1px'],
                ["style", "width", '81px']
            ],
            "${symbolSelector}": [
                ["style", "height", '60px'],
                ["style", "width", '82px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid90", tween: [ "subproperty", "${_SQUARE}", "boxShadow.offsetV", '0px', { fromValue: '1px'}], position: 0, duration: 500, easing: "easeInQuad" }            ]
        }
    }
},
"nottriangle": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['5px', '17px', '74px', '2px', 'auto', 'auto'],
                    transform: [[0, 0], ['20']],
                    id: 'redcross',
                    stroke: [0, 'rgba(255,0,0,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,0,0,1.00)']
                },
                {
                    rect: ['5px', '17px', '74px', '2px', 'auto', 'auto'],
                    transform: [[0, 0], ['-20']],
                    id: 'bluecross',
                    stroke: [0, 'rgba(45,1,255,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(44,0,255,1.00)']
                },
                {
                    type: 'rect',
                    borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                    id: 'notTriangle',
                    stroke: [2, 'rgba(0,0,0,1.00)', 'solid'],
                    rect: ['0px', '0px', '81px', '31px', 'auto', 'auto'],
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65)'],
                    transform: [],
                    fill: ['rgba(255,255,255,1.00)'],
                    c: [
                    {
                        font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                        type: 'text',
                        align: 'center',
                        id: 'nottrit',
                        text: 'not<br>',
                        cursor: ['pointer'],
                        rect: ['4px', '3px', '33px', '29px', 'auto', 'auto']
                    }]
                },
                {
                    id: 'blacktri',
                    type: 'image',
                    rect: ['44px', '4px', '28px', '22px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/blacktri.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_blacktri}": [
                ["style", "height", '22px'],
                ["style", "top", '4px'],
                ["style", "left", '44px'],
                ["style", "width", '28px']
            ],
            "${symbolSelector}": [
                ["style", "height", '35px'],
                ["style", "width", '88px']
            ],
            "${_nottrit}": [
                ["style", "line-height", '25px'],
                ["style", "width", '33px'],
                ["style", "text-align", 'center'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '29px'],
                ["style", "top", '3px'],
                ["style", "left", '4px'],
                ["style", "font-size", '18px']
            ],
            "${_bluecross}": [
                ["style", "top", '17px'],
                ["color", "background-color", 'rgba(44,0,255,1)'],
                ["transform", "rotateZ", '-20deg'],
                ["style", "height", '2px'],
                ["color", "border-color", 'rgb(45, 1, 255)'],
                ["style", "left", '5px'],
                ["style", "width", '74px']
            ],
            "${_redcross}": [
                ["style", "top", '17px'],
                ["transform", "rotateZ", '20deg'],
                ["style", "overflow", 'hidden'],
                ["color", "background-color", 'rgba(255,0,0,1)'],
                ["color", "border-color", 'rgb(255, 0, 0)'],
                ["style", "left", '5px'],
                ["style", "width", '74px']
            ],
            "${_notTriangle}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '3px'],
                ["subproperty", "boxShadow.spread", '1px'],
                ["style", "border-width", '2px'],
                ["style", "width", '81px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '31px'],
                ["subproperty", "boxShadow.offsetV", '1px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid89", tween: [ "subproperty", "${_notTriangle}", "boxShadow.offsetV", '0px', { fromValue: '1px'}], position: 0, duration: 500, easing: "easeInQuad" }            ]
        }
    }
},
"notcircle": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], ['20']],
                    rect: ['5px', '16px', '74px', '2px', 'auto', 'auto'],
                    id: 'redcross',
                    stroke: [0, 'rgba(255,0,0,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,0,0,1.00)']
                },
                {
                    transform: [[0, 0], ['-20']],
                    rect: ['5px', '17px', '74px', '2px', 'auto', 'auto'],
                    id: 'bluecross',
                    stroke: [0, 'rgba(45,1,255,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(44,0,255,1.00)']
                },
                {
                    rect: ['0px', '0px', '81px', '31px', 'auto', 'auto'],
                    borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                    fill: ['rgba(255,255,255,1.00)'],
                    id: 'notCircle',
                    stroke: [2, 'rgba(0,0,0,1.00)', 'solid'],
                    type: 'rect',
                    boxShadow: ['', 0, 1, 3, 1, 'rgba(0,0,0,0.65)'],
                    c: [
                    {
                        font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                        type: 'text',
                        align: 'left',
                        id: 'notcirclet',
                        text: 'not',
                        cursor: ['pointer'],
                        rect: ['8px', '0px', '65px', '29px', 'auto', 'auto']
                    }]
                },
                {
                    rect: ['48px', '6px', '22px', '22px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'circle',
                    stroke: [4, 'rgba(0,0,0,1.00)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(0,0,0,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_notCircle}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '3px'],
                ["subproperty", "boxShadow.offsetV", '1px'],
                ["style", "left", '0px'],
                ["style", "width", '81px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '31px'],
                ["subproperty", "boxShadow.spread", '1px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["style", "border-width", '2px']
            ],
            "${symbolSelector}": [
                ["style", "height", '35px'],
                ["style", "width", '88px']
            ],
            "${_circle}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '6px'],
                ["style", "height", '22px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '48px'],
                ["style", "width", '22px']
            ],
            "${_bluecross}": [
                ["style", "top", '17px'],
                ["transform", "rotateZ", '-20deg'],
                ["color", "background-color", 'rgba(44,0,255,1)'],
                ["color", "border-color", 'rgb(45, 1, 255)'],
                ["style", "left", '5px'],
                ["style", "width", '74px']
            ],
            "${_redcross}": [
                ["style", "top", '16px'],
                ["transform", "rotateZ", '20deg'],
                ["style", "overflow", 'hidden'],
                ["color", "background-color", 'rgba(255,0,0,1)'],
                ["color", "border-color", 'rgb(255, 0, 0)'],
                ["style", "left", '5px'],
                ["style", "width", '74px']
            ],
            "${_notcirclet}": [
                ["style", "line-height", '29px'],
                ["style", "font-size", '18px'],
                ["style", "text-align", 'left'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '29px'],
                ["style", "top", '0px'],
                ["style", "left", '8px'],
                ["style", "width", '65px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid88", tween: [ "subproperty", "${_notCircle}", "boxShadow.offsetV", '0px', { fromValue: '1px'}], position: 0, duration: 500, easing: "easeInQuad" }            ]
        }
    }
},
"circle": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], ['35']],
                    rect: ['12px', '27px', '65px', '2px', 'auto', 'auto'],
                    id: 'redcross',
                    stroke: [0, 'rgba(255,0,0,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,0,0,1.00)']
                },
                {
                    transform: [[0, 0], ['-35']],
                    rect: ['12px', '27px', '65px', '2px', 'auto', 'auto'],
                    id: 'bluecross',
                    stroke: [0, 'rgba(45,1,255,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(44,0,255,1.00)']
                },
                {
                    rect: ['1px', '0px', '81px', '56px', 'auto', 'auto'],
                    borderRadius: ['130px 88px', '130px 88px', '130px 88px', '130px 88px'],
                    fill: ['rgba(255,255,255,1.00)'],
                    id: 'CIRCLE',
                    stroke: [2, 'rgba(0,0,0,1.00)', 'solid'],
                    type: 'rect',
                    boxShadow: ['', 0, 1, 3, 1, 'rgba(0,0,0,0.65)'],
                    c: [
                    {
                        rect: ['6px', '15px', '70px', '30px', 'auto', 'auto'],
                        font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '700', 'none', ''],
                        align: 'center',
                        id: 'circleT',
                        text: 'CIRCLE',
                        cursor: ['pointer'],
                        type: 'text'
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_circleT}": [
                ["style", "line-height", '25px'],
                ["style", "font-weight", '700'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '70px'],
                ["style", "top", '15px'],
                ["style", "text-align", 'center'],
                ["style", "height", '30px'],
                ["style", "left", '6px'],
                ["style", "font-size", '18px']
            ],
            "${_bluecross}": [
                ["style", "top", '27px'],
                ["transform", "rotateZ", '-35deg'],
                ["color", "background-color", 'rgba(44,0,255,1)'],
                ["color", "border-color", 'rgb(45, 1, 255)'],
                ["style", "left", '12px'],
                ["style", "width", '65px']
            ],
            "${_CIRCLE}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "border-top-left-radius", [130,88], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
                ["style", "border-bottom-right-radius", [130,88], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '3px'],
                ["subproperty", "boxShadow.inset", ''],
                ["style", "left", '1px'],
                ["style", "width", '81px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [130,88], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.spread", '1px'],
                ["style", "border-width", '2px'],
                ["style", "height", '56px'],
                ["subproperty", "boxShadow.offsetV", '1px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "border-top-right-radius", [130,88], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_redcross}": [
                ["style", "top", '27px'],
                ["transform", "rotateZ", '35deg'],
                ["style", "overflow", 'hidden'],
                ["color", "background-color", 'rgba(255,0,0,1)'],
                ["color", "border-color", 'rgb(255, 0, 0)'],
                ["style", "left", '12px'],
                ["style", "width", '65px']
            ],
            "${symbolSelector}": [
                ["style", "height", '60px'],
                ["style", "width", '85px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid87", tween: [ "subproperty", "${_CIRCLE}", "boxShadow.offsetV", '0px', { fromValue: '1px'}], position: 0, duration: 500, easing: "easeInQuad" }            ]
        }
    }
},
"redString": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '523px', '271px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'redString',
                    stroke: [4, 'rgba(255,0,79,1.00)', 'solid'],
                    type: 'ellipse',
                    fill: ['rgba(249,248,248,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '279px'],
                ["style", "width", '531px']
            ],
            "${_redString}": [
                ["color", "background-color", 'rgba(249,248,248,0)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "border-color", 'rgba(255,0,79,1.00)'],
                ["style", "height", '271px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '4px'],
                ["style", "width", '523px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"blueString": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '523px', '271px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'blueStiring',
                    stroke: [4, 'rgba(15,0,255,1.00)', 'solid'],
                    type: 'ellipse',
                    fill: ['rgba(249,248,248,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_blueStiring}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(249,248,248,0.00)'],
                ["style", "border-width", '4px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '271px'],
                ["color", "border-color", 'rgba(15,0,255,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '523px']
            ],
            "${symbolSelector}": [
                ["style", "height", '279px'],
                ["style", "width", '531px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"outside": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '950px', '361px', 'auto', 'auto'],
                    id: 'mainBack',
                    stroke: [4, 'rgba(218,251,234,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.97)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '361px'],
                ["style", "width", '950px']
            ],
            "${_mainBack}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,255,255,0.97)'],
                ["style", "border-style", 'none'],
                ["style", "height", '361px'],
                ["color", "border-color", 'rgb(218, 251, 234)'],
                ["style", "left", '0px'],
                ["style", "width", '950px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"red5": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '107px', '254px', 'auto', 'auto'],
                    id: 'red5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_red5}": [
                ["style", "height", '254px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '107px']
            ],
            "${symbolSelector}": [
                ["style", "height", '254px'],
                ["style", "width", '107px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"blue5": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '107px', '254px', 'auto', 'auto'],
                    id: 'blue5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '254px'],
                ["style", "width", '107px']
            ],
            "${_blue5}": [
                ["style", "top", '0px'],
                ["style", "height", '254px'],
                ["style", "left", '0px'],
                ["style", "width", '107px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"blue9": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '20px', '83px', 'auto', 'auto'],
                    id: 'blue9',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_blue9}": [
                ["style", "top", '0px'],
                ["style", "height", '83px'],
                ["style", "left", '0px'],
                ["style", "width", '20px']
            ],
            "${symbolSelector}": [
                ["style", "height", '83px'],
                ["style", "width", '20px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"blue8": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '33px', '142px', 'auto', 'auto'],
                    id: 'blue8',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '142px'],
                ["style", "width", '33px']
            ],
            "${_blue8}": [
                ["style", "height", '142px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '33px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"blue7": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '53px', '188px', 'auto', 'auto'],
                    id: 'blue7',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '188px'],
                ["style", "width", '53px']
            ],
            "${_blue7}": [
                ["style", "top", '0px'],
                ["style", "height", '188px'],
                ["style", "left", '0px'],
                ["style", "width", '53px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"blue6": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '53px', '222px', 'auto', 'auto'],
                    id: 'blue6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '222px'],
                ["style", "width", '53px']
            ],
            "${_blue6}": [
                ["style", "height", '222px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '53px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"blue3": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '28px', '62px', 'auto', 'auto'],
                    id: 'blue3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_blue3}": [
                ["style", "height", '62px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '28px']
            ],
            "${symbolSelector}": [
                ["style", "height", '62px'],
                ["style", "width", '28px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"blue1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '41px', '35px', 'auto', 'auto'],
                    id: 'blu1',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_blu1}": [
                ["style", "top", '0px'],
                ["style", "height", '35px'],
                ["style", "left", '0px'],
                ["style", "width", '41px']
            ],
            "${symbolSelector}": [
                ["style", "height", '35px'],
                ["style", "width", '41px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"blue4": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '28px', '62px', 'auto', 'auto'],
                    id: 'blue4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '62px'],
                ["style", "width", '28px']
            ],
            "${_blue4}": [
                ["style", "top", '0px'],
                ["style", "height", '62px'],
                ["style", "left", '0px'],
                ["style", "width", '28px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"blue2": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '41px', '35px', 'auto', 'auto'],
                    id: 'blue2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '35px'],
                ["style", "width", '41px']
            ],
            "${_blue2}": [
                ["style", "height", '35px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '41px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"red1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '41px', '35px', 'auto', 'auto'],
                    id: 'red1',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '35px'],
                ["style", "width", '41px']
            ],
            "${_red1}": [
                ["style", "height", '35px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '41px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"red3": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '28px', '62px', 'auto', 'auto'],
                    id: 'red3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '62px'],
                ["style", "width", '28px']
            ],
            "${_red3}": [
                ["style", "top", '0px'],
                ["style", "height", '62px'],
                ["style", "left", '0px'],
                ["style", "width", '28px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"red2": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '41px', '35px', 'auto', 'auto'],
                    id: 'red2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_red2}": [
                ["style", "top", '0px'],
                ["style", "height", '35px'],
                ["style", "left", '0px'],
                ["style", "width", '41px']
            ],
            "${symbolSelector}": [
                ["style", "height", '35px'],
                ["style", "width", '41px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"red4": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '28px', '62px', 'auto', 'auto'],
                    id: 'red4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_red4}": [
                ["style", "height", '62px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '28px']
            ],
            "${symbolSelector}": [
                ["style", "height", '62px'],
                ["style", "width", '28px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"red6": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '53px', '222px', 'auto', 'auto'],
                    id: 'red6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '222px'],
                ["style", "width", '53px']
            ],
            "${_red6}": [
                ["style", "top", '0px'],
                ["style", "height", '222px'],
                ["style", "left", '0px'],
                ["style", "width", '53px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"red7": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '53px', '188px', 'auto', 'auto'],
                    id: 'red7',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_red7}": [
                ["style", "height", '188px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '53px']
            ],
            "${symbolSelector}": [
                ["style", "height", '188px'],
                ["style", "width", '53px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"red8": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '40px', '142px', 'auto', 'auto'],
                    id: 'red8',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_red8}": [
                ["style", "top", '0px'],
                ["style", "height", '142px'],
                ["style", "left", '0px'],
                ["style", "width", '40px']
            ],
            "${symbolSelector}": [
                ["style", "height", '142px'],
                ["style", "width", '40px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"red9": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '20px', '83px', 'auto', 'auto'],
                    id: 'red9',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '83px'],
                ["style", "width", '20px']
            ],
            "${_red9}": [
                ["style", "height", '83px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '20px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"both1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '139px', '171px', 'auto', 'auto'],
                    borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
                    id: 'both1',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_both1}": [
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '171px'],
                ["style", "left", '0px'],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '139px']
            ],
            "${symbolSelector}": [
                ["style", "height", '171px'],
                ["style", "width", '139px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"both2": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '53px', '25px', 'auto', 'auto'],
                    id: 'both2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '25px'],
                ["style", "width", '53px']
            ],
            "${_both2}": [
                ["style", "top", '0px'],
                ["style", "height", '25px'],
                ["style", "left", '0px'],
                ["style", "width", '53px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"both3": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '53px', '25px', 'auto', 'auto'],
                    id: 'both3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_both3}": [
                ["style", "height", '25px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '53px']
            ],
            "${symbolSelector}": [
                ["style", "height", '25px'],
                ["style", "width", '53px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"both4": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '29px', '116px', 'auto', 'auto'],
                    id: 'both4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_both4}": [
                ["style", "top", '0px'],
                ["style", "height", '116px'],
                ["style", "left", '0px'],
                ["style", "width", '29px']
            ],
            "${symbolSelector}": [
                ["style", "height", '116px'],
                ["style", "width", '29px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"both5": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '29px', '116px', 'auto', 'auto'],
                    id: 'both5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '116px'],
                ["style", "width", '29px']
            ],
            "${_both5}": [
                ["style", "height", '116px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '29px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"both6": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '20px', '74px', 'auto', 'auto'],
                    id: 'both6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_both6}": [
                ["style", "top", '0px'],
                ["style", "height", '74px'],
                ["style", "left", '0px'],
                ["style", "width", '20px']
            ],
            "${symbolSelector}": [
                ["style", "height", '74px'],
                ["style", "width", '20px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"both7": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '20px', '74px', 'auto', 'auto'],
                    id: 'both7',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_both7}": [
                ["style", "height", '74px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '20px']
            ],
            "${symbolSelector}": [
                ["style", "height", '74px'],
                ["style", "width", '20px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"out1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '65px', '356px', 'auto', 'auto'],
                    id: 'outside1',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '356px'],
                ["style", "width", '65px']
            ],
            "${_outside1}": [
                ["style", "height", '356px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '65px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"out": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '53px', '83px', 'auto', 'auto'],
                    id: 'outside2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_outside2}": [
                ["style", "height", '83px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '53px']
            ],
            "${symbolSelector}": [
                ["style", "height", '83px'],
                ["style", "width", '53px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"out3": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '53px', '97px', 'auto', 'auto'],
                    id: 'outside3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '97px'],
                ["style", "width", '53px']
            ],
            "${_outside3}": [
                ["style", "top", '0px'],
                ["style", "height", '97px'],
                ["style", "left", '0px'],
                ["style", "width", '53px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"out4": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '89px', '49px', 'auto', 'auto'],
                    id: 'outside4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_outside4}": [
                ["style", "top", '0px'],
                ["style", "height", '49px'],
                ["style", "left", '0px'],
                ["style", "width", '89px']
            ],
            "${symbolSelector}": [
                ["style", "height", '49px'],
                ["style", "width", '89px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"out5": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '89px', '57px', 'auto', 'auto'],
                    id: 'outside5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '57px'],
                ["style", "width", '89px']
            ],
            "${_outside5}": [
                ["style", "height", '57px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '89px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"out6": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '531px', '26px', 'auto', 'auto'],
                    id: 'outside6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_outside6}": [
                ["style", "height", '26px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '531px']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '531px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"out7": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '531px', '39px', 'auto', 'auto'],
                    id: 'outside7',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '39px'],
                ["style", "width", '531px']
            ],
            "${_outside7}": [
                ["style", "top", '0px'],
                ["style", "height", '39px'],
                ["style", "left", '0px'],
                ["style", "width", '531px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"out8": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '89px', '49px', 'auto', 'auto'],
                    id: 'outside8',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_outside8}": [
                ["style", "height", '49px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '89px']
            ],
            "${symbolSelector}": [
                ["style", "height", '49px'],
                ["style", "width", '89px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"out9": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '89px', '58px', 'auto', 'auto'],
                    id: 'outside9',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '58px'],
                ["style", "width", '89px']
            ],
            "${_outside9}": [
                ["style", "top", '0px'],
                ["style", "height", '58px'],
                ["style", "left", '0px'],
                ["style", "width", '89px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"out10": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '53px', '83px', 'auto', 'auto'],
                    id: 'outside10',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_outside10}": [
                ["style", "top", '0px'],
                ["style", "height", '83px'],
                ["style", "left", '0px'],
                ["style", "width", '53px']
            ],
            "${symbolSelector}": [
                ["style", "height", '83px'],
                ["style", "width", '53px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"out11": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '53px', '97px', 'auto', 'auto'],
                    id: 'outside11',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_outside11}": [
                ["style", "height", '97px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '53px']
            ],
            "${symbolSelector}": [
                ["style", "height", '97px'],
                ["style", "width", '53px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"out12": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '73px', '356px', 'auto', 'auto'],
                    id: 'outside12',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '356px'],
                ["style", "width", '73px']
            ],
            "${_outside12}": [
                ["style", "top", '0px'],
                ["style", "height", '356px'],
                ["style", "left", '0px'],
                ["style", "width", '73px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"redchoice": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '114px', '26px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'redrect',
                    stroke: [0, 'rgba(253,0,0,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(253,0,0,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_redrect}": [
                ["color", "background-color", 'rgba(253,0,0,1.00)'],
                ["color", "border-color", 'rgba(253,0,0,1.00)'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '114px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"bluechoice": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '114px', '26px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'bluerect',
                    stroke: [0, 'rgba(47,0,253,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(47,0,253,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '114px']
            ],
            "${_bluerect}": [
                ["color", "background-color", 'rgba(47,0,253,1.00)'],
                ["color", "border-color", 'rgba(47,0,253,1.00)'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"triangle": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], ['41']],
                    rect: ['19px', '44px', '50px', '2px', 'auto', 'auto'],
                    id: 'redcross',
                    stroke: [0, 'rgba(255,0,0,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,0,0,1.00)']
                },
                {
                    transform: [[0, 0], ['-41']],
                    rect: ['13px', '44px', '50px', '2px', 'auto', 'auto'],
                    id: 'bluecross',
                    stroke: [0, 'rgba(45,1,255,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(44,0,255,1.00)']
                },
                {
                    id: 'triangle',
                    type: 'group',
                    rect: ['0px', '0px', '83px', '63px', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['3px', '61px', '76px', '2px', 'auto', 'auto'],
                        fill: ['rgba(0,5,2,1.00)'],
                        id: 'shadow1',
                        stroke: [4, 'rgba(0,5,2,1.00)', 'none'],
                        type: 'rect',
                        boxShadow: ['', 0, 1, 3, 1, 'rgba(0,0,0,0.65)']
                    },
                    {
                        rect: ['-12px', '32px', '70px', '1px', 'auto', 'auto'],
                        fill: ['rgba(0,5,2,1.00)'],
                        transform: [[0, 0], ['123']],
                        id: 'shadow2',
                        stroke: [4, 'rgba(0,5,2,1.00)', 'none'],
                        type: 'rect',
                        boxShadow: ['', 0, 1, 3, 1, 'rgba(0,0,0,0.65)']
                    },
                    {
                        rect: ['25px', '32px', '70px', '1px', 'auto', 'auto'],
                        fill: ['rgba(0,5,2,1.00)'],
                        transform: [[0, 0], ['237']],
                        id: 'shadow2Copy',
                        stroke: [4, 'rgba(0,5,2,1.00)', 'none'],
                        type: 'rect',
                        boxShadow: ['', 0, 1, 3, 1, 'rgba(0,0,0,0.65)']
                    },
                    {
                        id: 'blank_tri',
                        type: 'image',
                        rect: ['0px', '0px', '83px', '63px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/blank%20tri.png', '0px', '0px']
                    },
                    {
                        rect: ['2px', '23px', '80px', '30px', 'auto', 'auto'],
                        font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '700', 'none', ''],
                        align: 'center',
                        id: 'triangleT',
                        text: 'Tri-<br>Angle',
                        cursor: ['pointer'],
                        type: 'text'
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_shadow2Copy}": [
                ["color", "background-color", 'rgba(0,5,2,1)'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
                ["transform", "rotateZ", '237deg'],
                ["style", "left", '25px'],
                ["style", "width", '70px'],
                ["style", "top", '32px'],
                ["subproperty", "boxShadow.blur", '3px'],
                ["subproperty", "boxShadow.spread", '1px'],
                ["style", "height", '1px'],
                ["subproperty", "boxShadow.offsetV", '1px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["color", "border-color", 'rgb(0, 5, 2)']
            ],
            "${_bluecross}": [
                ["style", "top", '44px'],
                ["color", "background-color", 'rgba(44,0,255,1)'],
                ["transform", "rotateZ", '-41deg'],
                ["style", "height", '2px'],
                ["color", "border-color", 'rgb(45, 1, 255)'],
                ["style", "left", '13px'],
                ["style", "width", '50px']
            ],
            "${_triangle}": [
                ["style", "top", '0px'],
                ["style", "height", '63px'],
                ["style", "left", '0px'],
                ["style", "width", '83px']
            ],
            "${_triangleT}": [
                ["style", "line-height", '19px'],
                ["style", "font-weight", 'bold'],
                ["style", "cursor", 'pointer'],
                ["style", "font-size", '18px'],
                ["style", "top", '23px'],
                ["style", "text-align", 'center'],
                ["style", "height", '30px'],
                ["style", "width", '80px'],
                ["style", "left", '2px']
            ],
            "${_shadow1}": [
                ["color", "background-color", 'rgba(0,5,2,1.00)'],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "left", '3px'],
                ["style", "width", '76px'],
                ["style", "top", '61px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
                ["subproperty", "boxShadow.spread", '1px'],
                ["style", "height", '2px'],
                ["color", "border-color", 'rgba(0,5,2,1.00)'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "boxShadow.offsetV", '1px']
            ],
            "${_blank_tri}": [
                ["style", "top", '0px'],
                ["style", "height", '63px'],
                ["style", "left", '0px'],
                ["style", "width", '83px']
            ],
            "${_shadow2}": [
                ["color", "background-color", 'rgba(0,5,2,1)'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
                ["transform", "rotateZ", '123deg'],
                ["style", "left", '-12px'],
                ["style", "width", '70px'],
                ["style", "top", '32px'],
                ["subproperty", "boxShadow.offsetV", '1px'],
                ["color", "border-color", 'rgb(0, 5, 2)'],
                ["style", "height", '1px'],
                ["subproperty", "boxShadow.spread", '1px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "boxShadow.blur", '3px']
            ],
            "${_redcross}": [
                ["color", "background-color", 'rgba(255,0,0,1)'],
                ["style", "overflow", 'hidden'],
                ["transform", "rotateZ", '41deg'],
                ["style", "top", '44px'],
                ["color", "border-color", 'rgb(255, 0, 0)'],
                ["style", "left", '19px'],
                ["style", "width", '50px']
            ],
            "${symbolSelector}": [
                ["style", "height", '63px'],
                ["style", "width", '83px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid197", tween: [ "style", "${_shadow2Copy}", "top", '30px', { fromValue: '32px'}], position: 0, duration: 500 },
                { id: "eid196", tween: [ "style", "${_shadow1}", "top", '59px', { fromValue: '61px'}], position: 0, duration: 500 },
                { id: "eid195", tween: [ "style", "${_shadow2}", "top", '30px', { fromValue: '32px'}], position: 0, duration: 500 }            ]
        }
    }
},
"bigredcircle": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '35px', '35px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse',
                    stroke: [4, 'rgba(255,0,0,1.00)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,0,0,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(255,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "height", '35px'],
                ["color", "border-color", 'rgba(255,0,0,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '35px']
            ],
            "${symbolSelector}": [
                ["style", "height", '35px'],
                ["style", "width", '35px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"bigyellowcircle": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '35px', '35px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'EllipseCopy3',
                    stroke: [4, 'rgba(238,228,34,1.00)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(238,228,34,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '35px'],
                ["style", "width", '35px']
            ],
            "${_EllipseCopy3}": [
                ["color", "background-color", 'rgba(238,228,34,1.00)'],
                ["style", "top", '0px'],
                ["style", "height", '35px'],
                ["color", "border-color", 'rgba(238,228,34,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '35px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"bigbbluecircle": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '35px', '35px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'EllipseCopy7',
                    stroke: [4, 'rgba(0,0,255,1.00)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(0,0,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_EllipseCopy7}": [
                ["color", "background-color", 'rgba(0,0,255,1.00)'],
                ["style", "top", '0px'],
                ["style", "height", '35px'],
                ["color", "border-color", 'rgba(0,0,255,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '35px']
            ],
            "${symbolSelector}": [
                ["style", "height", '35px'],
                ["style", "width", '35px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"smallredcircle": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '22px', '22px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'EllipseCopy',
                    stroke: [4, 'rgba(255,0,0,1.00)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,0,0,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '22px'],
                ["style", "width", '22px']
            ],
            "${_EllipseCopy}": [
                ["color", "background-color", 'rgba(255,0,0,1)'],
                ["style", "top", '0px'],
                ["style", "height", '22px'],
                ["color", "border-color", 'rgb(255, 0, 0)'],
                ["style", "left", '0px'],
                ["style", "width", '22px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"bigredsquare": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'redsquare',
                    type: 'image',
                    rect: ['0px', '0px', '35px', '35px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/redsquare.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '35px'],
                ["style", "width", '35px']
            ],
            "${_redsquare}": [
                ["style", "top", '0px'],
                ["style", "height", '35px'],
                ["style", "left", '0px'],
                ["style", "width", '35px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"smallyellowcircle": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '22px', '22px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'EllipseCopy2',
                    stroke: [4, 'rgba(238,228,34,1.00)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(238,228,34,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_EllipseCopy2}": [
                ["color", "background-color", 'rgba(238,228,34,1.00)'],
                ["style", "top", '0px'],
                ["style", "height", '22px'],
                ["color", "border-color", 'rgba(238,228,34,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '22px']
            ],
            "${symbolSelector}": [
                ["style", "height", '22px'],
                ["style", "width", '22px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"smallgreencircle": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '22px', '22px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'smallgreencircle',
                    stroke: [4, 'rgba(0,176,80,1.00)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(0,176,80,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_smallgreencircle}": [
                ["color", "background-color", 'rgba(0,176,80,1.00)'],
                ["style", "top", '0px'],
                ["style", "height", '22px'],
                ["color", "border-color", 'rgba(0,176,80,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '22px']
            ],
            "${symbolSelector}": [
                ["style", "height", '22px'],
                ["style", "width", '22px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"bigyellowsquare": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'yellowsquare',
                    type: 'image',
                    rect: ['0px', '0px', '35px', '35px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/yellowsquare.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_yellowsquare}": [
                ["style", "top", '0px'],
                ["style", "height", '35px'],
                ["style", "left", '0px'],
                ["style", "width", '35px']
            ],
            "${symbolSelector}": [
                ["style", "height", '35px'],
                ["style", "width", '35px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"bigbluesquare": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'bluesquare',
                    type: 'image',
                    rect: ['0px', '0px', '35px', '35px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bluesquare.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bluesquare}": [
                ["style", "top", '0px'],
                ["style", "height", '35px'],
                ["style", "left", '0px'],
                ["style", "width", '35px']
            ],
            "${symbolSelector}": [
                ["style", "height", '35px'],
                ["style", "width", '35px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"biggreensquare": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'greensquare',
                    type: 'image',
                    rect: ['0px', '0px', '35px', '35px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/greensquare.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_greensquare}": [
                ["style", "top", '0px'],
                ["style", "height", '35px'],
                ["style", "left", '0px'],
                ["style", "width", '35px']
            ],
            "${symbolSelector}": [
                ["style", "height", '35px'],
                ["style", "width", '35px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"smallredsquare": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'redsquareCopy',
                    type: 'image',
                    rect: ['0px', '0px', '22px', '22px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/redsquare.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_redsquareCopy}": [
                ["style", "height", '22px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '22px']
            ],
            "${symbolSelector}": [
                ["style", "height", '22px'],
                ["style", "width", '22px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"smallbluesquare": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'bluesquareCopy',
                    type: 'image',
                    rect: ['0px', '0px', '22px', '22px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bluesquare.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bluesquareCopy}": [
                ["style", "height", '22px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '22px']
            ],
            "${symbolSelector}": [
                ["style", "height", '22px'],
                ["style", "width", '22px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"smallyellowsquare": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'yellowsquareCopy',
                    type: 'image',
                    rect: ['0px', '0px', '22px', '22px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/yellowsquare.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_yellowsquareCopy}": [
                ["style", "height", '22px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '22px']
            ],
            "${symbolSelector}": [
                ["style", "height", '22px'],
                ["style", "width", '22px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"smallgreensquare": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'greensquareCopy',
                    type: 'image',
                    rect: ['0px', '0px', '22px', '22px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/greensquare.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '22px'],
                ["style", "width", '22px']
            ],
            "${_greensquareCopy}": [
                ["style", "height", '22px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '22px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"bigredtri": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'redtri',
                    type: 'image',
                    rect: ['0px', '0px', '42px', '35px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/redtri.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_redtri}": [
                ["style", "height", '35px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '42px']
            ],
            "${symbolSelector}": [
                ["style", "height", '35px'],
                ["style", "width", '42px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"bigyellowtri": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'yellowtri3',
                    type: 'image',
                    rect: ['0px', '0px', '41px', '35px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/yellowtri.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_yellowtri3}": [
                ["style", "height", '35px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '41px']
            ],
            "${symbolSelector}": [
                ["style", "height", '35px'],
                ["style", "width", '41px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"bigbluetri": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'bluetri2',
                    type: 'image',
                    rect: ['0px', '0px', '42px', '35px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bluetri.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '35px'],
                ["style", "width", '42px']
            ],
            "${_bluetri2}": [
                ["style", "top", '0px'],
                ["style", "height", '35px'],
                ["style", "left", '0px'],
                ["style", "width", '42px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"biggreentri": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'greentri',
                    type: 'image',
                    rect: ['0px', '0px', '42px', '35px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/greentri.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '35px'],
                ["style", "width", '42px']
            ],
            "${_greentri}": [
                ["style", "top", '0px'],
                ["style", "height", '35px'],
                ["style", "left", '0px'],
                ["style", "width", '42px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"smallredtri": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'redtriCopy',
                    type: 'image',
                    rect: ['0px', '0px', '26px', '22px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/redtri.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_redtriCopy}": [
                ["style", "top", '0px'],
                ["style", "height", '22px'],
                ["style", "left", '0px'],
                ["style", "width", '26px']
            ],
            "${symbolSelector}": [
                ["style", "height", '22px'],
                ["style", "width", '26px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"smallbluetri": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'bluetri2Copy',
                    type: 'image',
                    rect: ['0px', '0px', '26px', '22px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bluetri.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bluetri2Copy}": [
                ["style", "top", '0px'],
                ["style", "height", '22px'],
                ["style", "left", '0px'],
                ["style", "width", '26px']
            ],
            "${symbolSelector}": [
                ["style", "height", '22px'],
                ["style", "width", '26px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"smallyellowtri": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'yellowtri3Copy',
                    type: 'image',
                    rect: ['0px', '0px', '26px', '22px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/yellowtri.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_yellowtri3Copy}": [
                ["style", "top", '0px'],
                ["style", "height", '22px'],
                ["style", "left", '0px'],
                ["style", "width", '26px']
            ],
            "${symbolSelector}": [
                ["style", "height", '22px'],
                ["style", "width", '26px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"smallgreentri": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'greentriCopy',
                    type: 'image',
                    rect: ['0px', '0px', '26px', '22px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/greentri.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_greentriCopy}": [
                ["style", "height", '22px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '26px']
            ],
            "${symbolSelector}": [
                ["style", "height", '22px'],
                ["style", "width", '26px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"smallbluecircle": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '22px', '22px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'smallbluecircle',
                    stroke: [4, 'rgba(0,0,255,1.00)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(0,0,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '22px'],
                ["style", "width", '22px']
            ],
            "${_smallbluecircle}": [
                ["color", "background-color", 'rgba(0,0,255,1.00)'],
                ["style", "top", '0px'],
                ["style", "height", '22px'],
                ["color", "border-color", 'rgba(0,0,255,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '22px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"biggreencircle": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '35px', '35px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'EllipseCopy5',
                    stroke: [4, 'rgba(0,176,80,1.00)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(0,176,80,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '35px'],
                ["style", "width", '35px']
            ],
            "${_EllipseCopy5}": [
                ["color", "background-color", 'rgba(0,176,80,1.00)'],
                ["style", "top", '0px'],
                ["style", "height", '35px'],
                ["color", "border-color", 'rgba(0,176,80,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '35px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"notred": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], ['8']],
                    rect: ['7px', '11px', '115px', '2px', 'auto', 'auto'],
                    id: 'redcross',
                    stroke: [0, 'rgba(255,0,0,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,0,0,1.00)']
                },
                {
                    transform: [[0, 0], ['-8']],
                    rect: ['7px', '11px', '115px', '2px', 'auto', 'auto'],
                    id: 'bluecross',
                    stroke: [0, 'rgba(45,1,255,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(44,0,255,1.00)']
                },
                {
                    rect: ['0px', '0px', '126px', '20px', 'auto', 'auto'],
                    borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                    fill: ['rgba(255,255,255,1.00)'],
                    id: 'notRED',
                    stroke: [2, 'rgba(0,0,0,1.00)', 'solid'],
                    type: 'rect',
                    boxShadow: ['', 0, 1, 3, 1, 'rgba(0,0,0,0.65)'],
                    c: [
                    {
                        font: ['Arial, Helvetica, sans-serif', 21, 'rgba(253,10,25,1.00)', '800', 'none', ''],
                        type: 'text',
                        align: 'center',
                        id: 'notRedT',
                        text: 'not RED',
                        cursor: ['pointer'],
                        rect: ['-2px', '-1px', '130px', '21px', 'auto', 'auto']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_notRedT}": [
                ["style", "line-height", '22px'],
                ["color", "color", 'rgba(253,10,25,1.00)'],
                ["style", "font-weight", '800'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '130px'],
                ["style", "top", '-1px'],
                ["style", "text-align", 'center'],
                ["style", "height", '21px'],
                ["style", "left", '-2px'],
                ["style", "font-size", '21px']
            ],
            "${_notRED}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '126px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.spread", '1px'],
                ["style", "border-width", '2px'],
                ["style", "height", '20px'],
                ["subproperty", "boxShadow.offsetV", '1px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "boxShadow.blur", '3px']
            ],
            "${symbolSelector}": [
                ["style", "height", '24px'],
                ["style", "width", '130px']
            ],
            "${_bluecross}": [
                ["color", "background-color", 'rgba(44,0,255,1.00)'],
                ["transform", "rotateZ", '-8deg'],
                ["style", "top", '11px'],
                ["color", "border-color", 'rgba(45,1,255,1.00)'],
                ["style", "left", '7px'],
                ["style", "width", '115px']
            ],
            "${_redcross}": [
                ["color", "background-color", 'rgba(255,0,0,1.00)'],
                ["style", "overflow", 'hidden'],
                ["transform", "rotateZ", '8deg'],
                ["style", "top", '11px'],
                ["color", "border-color", 'rgba(255,0,0,1.00)'],
                ["style", "left", '7px'],
                ["style", "width", '115px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid84", tween: [ "subproperty", "${_notRED}", "boxShadow.offsetV", '0px', { fromValue: '1px'}], position: 0, duration: 500, easing: "easeInQuad" }            ]
        }
    }
},
"little": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], ['8']],
                    rect: ['7px', '11px', '115px', '2px', 'auto', 'auto'],
                    id: 'redcross',
                    stroke: [0, 'rgba(255,0,0,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,0,0,1.00)']
                },
                {
                    transform: [[0, 0], ['-8']],
                    rect: ['7px', '11px', '115px', '2px', 'auto', 'auto'],
                    id: 'bluecross',
                    stroke: [0, 'rgba(45,1,255,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(44,0,255,1.00)']
                },
                {
                    id: 'mult3',
                    type: 'group',
                    rect: ['0px', '0px', '130px', '24', 'auto', 'auto'],
                    c: [
                    {
                        fill: ['rgba(255,255,255,1.00)'],
                        rect: ['0px', '0px', '126px', '20px', 'auto', 'auto'],
                        borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                        type: 'rect',
                        id: 'mult3r',
                        stroke: [2, 'rgba(0,0,0,1.00)', 'solid'],
                        cursor: ['pointer'],
                        boxShadow: ['', 0, 1, 3, 1, 'rgba(0,0,0,0.65)']
                    },
                    {
                        type: 'text',
                        rect: ['0px', '1px', '130px', '21px', 'auto', 'auto'],
                        align: 'center',
                        id: 'mult3t',
                        text: 'little',
                        cursor: ['pointer'],
                        font: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '700', 'none', '']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_mult3r}": [
                ["style", "cursor", 'pointer'],
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.spread", '1px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '126px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
                ["style", "height", '20px'],
                ["subproperty", "boxShadow.offsetV", '1px'],
                ["style", "border-width", '2px'],
                ["color", "border-color", 'rgb(0, 0, 0)']
            ],
            "${_mult3t}": [
                ["style", "line-height", '22px'],
                ["style", "font-weight", '700'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '130px'],
                ["style", "top", '1px'],
                ["style", "text-align", 'center'],
                ["style", "height", '21px'],
                ["style", "left", '0px'],
                ["style", "font-size", '18px']
            ],
            "${symbolSelector}": [
                ["style", "height", '24px'],
                ["style", "width", '130px']
            ],
            "${_mult3}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '130px']
            ],
            "${_redcross}": [
                ["color", "background-color", 'rgba(255,0,0,1.00)'],
                ["style", "overflow", 'hidden'],
                ["transform", "rotateZ", '8deg'],
                ["style", "top", '11px'],
                ["color", "border-color", 'rgba(255,0,0,1.00)'],
                ["style", "left", '7px'],
                ["style", "width", '115px']
            ],
            "${_bluecross}": [
                ["color", "background-color", 'rgba(44,0,255,1.00)'],
                ["transform", "rotateZ", '-8deg'],
                ["style", "top", '11px'],
                ["color", "border-color", 'rgba(45,1,255,1.00)'],
                ["style", "left", '7px'],
                ["style", "width", '115px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid33", tween: [ "subproperty", "${_mult3r}", "boxShadow.offsetV", '0px', { fromValue: '1px'}], position: 0, duration: 500, easing: "easeInQuad" }            ]
        }
    }
},
"red": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], ['8']],
                    rect: ['7px', '11px', '115px', '2px', 'auto', 'auto'],
                    id: 'redcross',
                    stroke: [0, 'rgba(255,0,0,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,0,0,1.00)']
                },
                {
                    transform: [[0, 0], ['-8']],
                    rect: ['7px', '11px', '115px', '2px', 'auto', 'auto'],
                    id: 'bluecross',
                    stroke: [0, 'rgba(45,1,255,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(44,0,255,1.00)']
                },
                {
                    type: 'rect',
                    borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                    id: 'RED',
                    stroke: [2, 'rgba(0,0,0,1.00)', 'solid'],
                    cursor: ['pointer'],
                    rect: ['0px', '0px', '126px', '20px', 'auto', 'auto'],
                    fill: ['rgba(219,1,14,1.00)'],
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65)'],
                    c: [
                    {
                        transform: [],
                        type: 'text',
                        align: 'center',
                        id: 'redT',
                        text: 'RED',
                        rect: ['-2px', '-1px', '130px', '21px', 'auto', 'auto'],
                        font: ['Arial, Helvetica, sans-serif', 18, 'rgba(230,234,236,1.00)', '700', 'none', '']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '24px'],
                ["style", "width", '130px']
            ],
            "${_RED}": [
                ["subproperty", "boxShadow.inset", ''],
                ["style", "cursor", 'pointer'],
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["color", "background-color", 'rgba(219,1,14,1.00)'],
                ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-width", '2px'],
                ["style", "width", '126px'],
                ["style", "top", '0px'],
                ["subproperty", "boxShadow.offsetV", '1px'],
                ["style", "left", '0px'],
                ["style", "height", '20px'],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.spread", '1px']
            ],
            "${_bluecross}": [
                ["style", "top", '11px'],
                ["transform", "rotateZ", '-8deg'],
                ["color", "background-color", 'rgba(44,0,255,1.00)'],
                ["color", "border-color", 'rgba(45,1,255,1.00)'],
                ["style", "left", '7px'],
                ["style", "width", '115px']
            ],
            "${_redT}": [
                ["style", "line-height", '22px'],
                ["transform", "rotateZ", '0deg'],
                ["color", "color", 'rgba(230,234,236,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '-2px'],
                ["style", "width", '130px'],
                ["style", "top", '-1px'],
                ["style", "text-align", 'center'],
                ["style", "height", '21px'],
                ["style", "font-size", '18px']
            ],
            "${_redcross}": [
                ["style", "top", '11px'],
                ["transform", "rotateZ", '8deg'],
                ["style", "overflow", 'hidden'],
                ["color", "background-color", 'rgba(255,0,0,1.00)'],
                ["color", "border-color", 'rgba(255,0,0,1.00)'],
                ["style", "left", '7px'],
                ["style", "width", '115px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid34", tween: [ "subproperty", "${_RED}", "boxShadow.offsetV", '0px', { fromValue: '1px'}], position: 0, duration: 500, easing: "easeInQuad" }            ]
        }
    }
},
"notyellow": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], ['8']],
                    rect: ['7px', '11px', '115px', '2px', 'auto', 'auto'],
                    id: 'redcross',
                    stroke: [0, 'rgba(255,0,0,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,0,0,1.00)']
                },
                {
                    transform: [[0, 0], ['-8']],
                    rect: ['7px', '11px', '115px', '2px', 'auto', 'auto'],
                    id: 'bluecross',
                    stroke: [0, 'rgba(45,1,255,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(44,0,255,1.00)']
                },
                {
                    rect: ['0px', '0px', '126px', '20px', 'auto', 'auto'],
                    borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                    fill: ['rgba(255,255,255,1.00)'],
                    id: 'notYELLOW',
                    stroke: [2, 'rgba(0,0,0,1.00)', 'solid'],
                    type: 'rect',
                    boxShadow: ['', 0, 1, 3, 1, 'rgba(0,0,0,0.65)'],
                    c: [
                    {
                        font: ['Arial, Helvetica, sans-serif', 18, 'rgba(183,167,12,1.00)', '700', 'none', ''],
                        type: 'text',
                        align: 'center',
                        id: 'notYellowT',
                        text: 'not YELLOW',
                        cursor: ['pointer'],
                        rect: ['-2px', '-1px', '130px', '21px', 'auto', 'auto']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_notYellowT}": [
                ["style", "line-height", '22px'],
                ["color", "color", 'rgba(183,167,12,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '130px'],
                ["style", "top", '-1px'],
                ["style", "text-align", 'center'],
                ["style", "height", '21px'],
                ["style", "left", '-2px'],
                ["style", "font-size", '18px']
            ],
            "${symbolSelector}": [
                ["style", "height", '24px'],
                ["style", "width", '130px']
            ],
            "${_bluecross}": [
                ["color", "background-color", 'rgba(44,0,255,1.00)'],
                ["transform", "rotateZ", '-8deg'],
                ["style", "top", '11px'],
                ["color", "border-color", 'rgba(45,1,255,1.00)'],
                ["style", "left", '7px'],
                ["style", "width", '115px']
            ],
            "${_redcross}": [
                ["color", "background-color", 'rgba(255,0,0,1.00)'],
                ["style", "overflow", 'hidden'],
                ["transform", "rotateZ", '8deg'],
                ["style", "top", '11px'],
                ["color", "border-color", 'rgba(255,0,0,1.00)'],
                ["style", "left", '7px'],
                ["style", "width", '115px']
            ],
            "${_notYELLOW}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-width", '2px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "left", '0px'],
                ["style", "width", '126px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.spread", '1px'],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '20px'],
                ["subproperty", "boxShadow.offsetV", '1px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid85", tween: [ "subproperty", "${_notYELLOW}", "boxShadow.offsetV", '0px', { fromValue: '1px'}], position: 0, duration: 500, easing: "easeInQuad" }            ]
        }
    }
},
"green": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], ['8']],
                    rect: ['7px', '11px', '115px', '2px', 'auto', 'auto'],
                    id: 'redcross',
                    stroke: [0, 'rgba(255,0,0,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,0,0,1.00)']
                },
                {
                    transform: [[0, 0], ['-8']],
                    rect: ['7px', '11px', '115px', '2px', 'auto', 'auto'],
                    id: 'bluecross',
                    stroke: [0, 'rgba(45,1,255,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(44,0,255,1.00)']
                },
                {
                    rect: ['0px', '0px', '126px', '20px', 'auto', 'auto'],
                    borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                    fill: ['rgba(4,200,22,1.00)'],
                    id: 'GREEN',
                    stroke: [2, 'rgba(0,0,0,1.00)', 'solid'],
                    type: 'rect',
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65)'],
                    c: [
                    {
                        rect: ['-2px', '-1px', '130px', '21px', 'auto', 'auto'],
                        font: ['Arial, Helvetica, sans-serif', 18, 'rgba(249,249,239,1.00)', '700', 'none', ''],
                        align: 'center',
                        id: 'greenT',
                        text: 'GREEN',
                        cursor: ['pointer'],
                        type: 'text'
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_greenT}": [
                ["style", "line-height", '22px'],
                ["color", "color", 'rgba(249,249,239,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "cursor", 'pointer'],
                ["style", "font-size", '18px'],
                ["style", "top", '-1px'],
                ["style", "text-align", 'center'],
                ["style", "height", '21px'],
                ["style", "left", '-2px'],
                ["style", "width", '130px']
            ],
            "${symbolSelector}": [
                ["style", "height", '24px'],
                ["style", "width", '130px']
            ],
            "${_bluecross}": [
                ["color", "background-color", 'rgba(44,0,255,1.00)'],
                ["transform", "rotateZ", '-8deg'],
                ["style", "top", '11px'],
                ["color", "border-color", 'rgba(45,1,255,1.00)'],
                ["style", "left", '7px'],
                ["style", "width", '115px']
            ],
            "${_redcross}": [
                ["color", "background-color", 'rgba(255,0,0,1.00)'],
                ["style", "overflow", 'hidden'],
                ["transform", "rotateZ", '8deg'],
                ["style", "top", '11px'],
                ["color", "border-color", 'rgba(255,0,0,1.00)'],
                ["style", "left", '7px'],
                ["style", "width", '115px']
            ],
            "${_GREEN}": [
                ["color", "background-color", 'rgba(4,200,22,1.00)'],
                ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '3px'],
                ["subproperty", "boxShadow.offsetV", '1px'],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '126px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "border-width", '2px'],
                ["style", "height", '20px'],
                ["subproperty", "boxShadow.spread", '1px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid83", tween: [ "subproperty", "${_GREEN}", "boxShadow.offsetV", '0px', { fromValue: '1px'}], position: 0, duration: 500, easing: "easeInQuad" }            ]
        }
    }
},
"notgreen": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], ['8']],
                    rect: ['7px', '11px', '115px', '2px', 'auto', 'auto'],
                    id: 'redcross',
                    stroke: [0, 'rgba(255,0,0,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,0,0,1.00)']
                },
                {
                    transform: [[0, 0], ['-8']],
                    rect: ['7px', '11px', '115px', '2px', 'auto', 'auto'],
                    id: 'bluecross',
                    stroke: [0, 'rgba(45,1,255,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(44,0,255,1.00)']
                },
                {
                    rect: ['0px', '0px', '126px', '20px', 'auto', 'auto'],
                    borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                    fill: ['rgba(255,255,255,1.00)'],
                    id: 'notGREEN',
                    stroke: [2, 'rgba(0,0,0,1.00)', 'solid'],
                    type: 'rect',
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65)'],
                    c: [
                    {
                        font: ['Arial, Helvetica, sans-serif', 21, 'rgba(28,134,4,1.00)', '800', 'none', ''],
                        type: 'text',
                        align: 'center',
                        id: 'notGreenT',
                        text: 'not GREEN',
                        cursor: ['pointer'],
                        rect: ['-2px', '-1px', '130px', '21px', 'auto', 'auto']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_notGreenT}": [
                ["style", "line-height", '22px'],
                ["color", "color", 'rgba(28,134,4,1.00)'],
                ["style", "font-weight", '800'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '130px'],
                ["style", "top", '-1px'],
                ["style", "text-align", 'center'],
                ["style", "height", '21px'],
                ["style", "left", '-2px'],
                ["style", "font-size", '21px']
            ],
            "${symbolSelector}": [
                ["style", "height", '24px'],
                ["style", "width", '130px']
            ],
            "${_bluecross}": [
                ["color", "background-color", 'rgba(44,0,255,1.00)'],
                ["transform", "rotateZ", '-8deg'],
                ["style", "top", '11px'],
                ["color", "border-color", 'rgba(45,1,255,1.00)'],
                ["style", "left", '7px'],
                ["style", "width", '115px']
            ],
            "${_redcross}": [
                ["color", "background-color", 'rgba(255,0,0,1.00)'],
                ["style", "overflow", 'hidden'],
                ["transform", "rotateZ", '8deg'],
                ["style", "top", '11px'],
                ["color", "border-color", 'rgba(255,0,0,1.00)'],
                ["style", "left", '7px'],
                ["style", "width", '115px']
            ],
            "${_notGREEN}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '3px'],
                ["subproperty", "boxShadow.offsetV", '1px'],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '126px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "left", '0px'],
                ["style", "height", '20px'],
                ["subproperty", "boxShadow.spread", '1px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["style", "border-width", '2px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid82", tween: [ "subproperty", "${_notGREEN}", "boxShadow.offsetV", '0px', { fromValue: '1px'}], position: 0, duration: 500, easing: "easeInQuad" }            ]
        }
    }
},
"notblue": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], ['8']],
                    rect: ['7px', '11px', '115px', '2px', 'auto', 'auto'],
                    id: 'redcross',
                    stroke: [0, 'rgba(255,0,0,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,0,0,1.00)']
                },
                {
                    transform: [[0, 0], ['-8']],
                    rect: ['7px', '11px', '115px', '2px', 'auto', 'auto'],
                    id: 'bluecross',
                    stroke: [0, 'rgba(45,1,255,1.00)', 'none'],
                    type: 'rect',
                    fill: ['rgba(44,0,255,1.00)']
                },
                {
                    rect: ['0px', '0px', '126px', '20px', 'auto', 'auto'],
                    borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                    fill: ['rgba(255,255,255,1.00)'],
                    id: 'notBlue',
                    stroke: [2, 'rgba(0,0,0,1.00)', 'solid'],
                    type: 'rect',
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65)'],
                    c: [
                    {
                        type: 'text',
                        rect: ['-2px', '-1px', '130px', '21px', 'auto', 'auto'],
                        align: 'center',
                        id: 'notBluet',
                        text: 'not BLUE',
                        cursor: ['pointer'],
                        font: ['Arial, Helvetica, sans-serif', 21, 'rgba(0,0,0,1)', '700', 'none', '']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '24px'],
                ["style", "width", '130px']
            ],
            "${_notBluet}": [
                ["style", "line-height", '22px'],
                ["color", "color", 'rgba(20,0,128,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "cursor", 'pointer'],
                ["style", "font-size", '21px'],
                ["style", "top", '-1px'],
                ["style", "text-align", 'center'],
                ["style", "height", '21px'],
                ["style", "left", '-2px'],
                ["style", "width", '130px']
            ],
            "${_bluecross}": [
                ["color", "background-color", 'rgba(44,0,255,1.00)'],
                ["transform", "rotateZ", '-8deg'],
                ["style", "top", '11px'],
                ["color", "border-color", 'rgba(45,1,255,1.00)'],
                ["style", "left", '7px'],
                ["style", "width", '115px']
            ],
            "${_redcross}": [
                ["color", "background-color", 'rgba(255,0,0,1.00)'],
                ["style", "overflow", 'hidden'],
                ["transform", "rotateZ", '8deg'],
                ["style", "top", '11px'],
                ["color", "border-color", 'rgba(255,0,0,1.00)'],
                ["style", "left", '7px'],
                ["style", "width", '115px']
            ],
            "${_notBlue}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '3px'],
                ["subproperty", "boxShadow.offsetV", '1px'],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '126px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "border-width", '2px'],
                ["style", "height", '20px'],
                ["subproperty", "boxShadow.spread", '1px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid80", tween: [ "subproperty", "${_notBlue}", "boxShadow.offsetV", '0px', { fromValue: '1px'}], position: 0, duration: 500, easing: "easeInQuad" },
                { id: "eid188", tween: [ "color", "${_notBluet}", "color", 'rgba(20,0,128,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(20,0,128,1.00)'}], position: 0, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-587455394");
