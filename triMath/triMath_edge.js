/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['carter-one, sans-serif']='<script src=\"http://use.edgefonts.net/carter-one:n4:all.js\"></script>';
    fonts['aladin, sans-serif']='<script src=\"http://use.edgefonts.net/aladin:n4:all.js\"></script>';
    fonts['gochi-hand, sans-serif']='<script src=\"http://use.edgefonts.net/gochi-hand:n4:all.js\"></script>';

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
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'middleBackground',
                type: 'rect',
                rect: ['422px', '50px','561px','700px','auto', 'auto'],
                fill: ["rgba(16,196,208,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'backGroundRect',
                type: 'rect',
                rect: ['463px', '80px','500px','500px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Rectangle3',
                type: 'rect',
                rect: ['152px', '50px','262px','692px','auto', 'auto'],
                fill: ["rgba(49,25,217,1.00)"],
                stroke: [4,"rgba(7,7,7,1.00)","solid"]
            },
            {
                id: 'Rectangle3Copy',
                type: 'rect',
                rect: ['982px', '50px','262px','692px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgba(7,7,7,1.00)","solid"]
            },
            {
                id: 'A0',
                type: 'ellipse',
                rect: ['430px', '582px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(219,31,31,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'A1',
                type: 'ellipse',
                rect: ['485px', '582px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(219,31,31,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'A2',
                type: 'ellipse',
                rect: ['540px', '583px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(219,31,31,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"],
                boxShadow: ["", 0, 0, 0, 0, "rgba(0,0,0,0)"]
            },
            {
                id: 'A3',
                type: 'ellipse',
                rect: ['595px', '582px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(219,31,31,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'A4',
                type: 'ellipse',
                rect: ['648px', '582px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(219,31,31,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'A5',
                type: 'ellipse',
                rect: ['703px', '582px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(219,31,31,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'A6',
                type: 'ellipse',
                rect: ['758px', '582px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(219,31,31,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'A7',
                type: 'ellipse',
                rect: ['813px', '582px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(219,31,31,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'A8',
                type: 'ellipse',
                rect: ['865px', '582px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(219,31,31,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'A9',
                type: 'ellipse',
                rect: ['920px', '582px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(219,31,31,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'A10',
                type: 'ellipse',
                rect: ['430px', '637px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(219,31,31,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'A11',
                type: 'ellipse',
                rect: ['485px', '637px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(219,31,31,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'A12',
                type: 'ellipse',
                rect: ['540px', '637px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(219,31,31,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'A13',
                type: 'ellipse',
                rect: ['595px', '637px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(219,31,31,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'A14',
                type: 'ellipse',
                rect: ['648px', '637px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(219,31,31,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'A15',
                type: 'ellipse',
                rect: ['703px', '637px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(219,31,31,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'A16',
                type: 'ellipse',
                rect: ['758px', '637px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(219,31,31,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'A17',
                type: 'ellipse',
                rect: ['813px', '637px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(219,31,31,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'A18',
                type: 'ellipse',
                rect: ['865px', '637px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(219,31,31,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'A19',
                type: 'ellipse',
                rect: ['920px', '637px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(219,31,31,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'A20',
                type: 'ellipse',
                rect: ['430px', '692px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(219,31,31,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'A21',
                type: 'ellipse',
                rect: ['485px', '692px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(219,31,31,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'A22',
                type: 'ellipse',
                rect: ['540px', '692px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(219,31,31,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'A23',
                type: 'ellipse',
                rect: ['595px', '692px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(219,31,31,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'A24',
                type: 'ellipse',
                rect: ['648px', '692px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(219,31,31,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'A25',
                type: 'ellipse',
                rect: ['703px', '692px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(219,31,31,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'A26',
                type: 'ellipse',
                rect: ['758px', '692px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(219,31,31,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'A27',
                type: 'ellipse',
                rect: ['813px', '692px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(219,31,31,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'A28',
                type: 'ellipse',
                rect: ['865px', '692px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(219,31,31,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'A29',
                type: 'ellipse',
                rect: ['920px', '692px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(219,31,31,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'R19',
                type: 'rect',
                rect: ['903px', '120px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R18',
                type: 'rect',
                rect: ['853px', '120px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R17',
                type: 'rect',
                rect: ['803px', '120px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R16',
                type: 'rect',
                rect: ['753px', '120px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R15',
                type: 'rect',
                rect: ['703px', '120px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R14',
                type: 'rect',
                rect: ['653px', '120px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R13',
                type: 'rect',
                rect: ['603px', '120px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R12',
                type: 'rect',
                rect: ['553px', '120px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'R11',
                type: 'rect',
                rect: ['503px', '120px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'R10',
                type: 'rect',
                rect: ['453px', '120px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R9',
                type: 'rect',
                rect: ['903px', '70px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R8',
                type: 'rect',
                rect: ['853px', '70px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R7',
                type: 'rect',
                rect: ['803px', '70px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R6',
                type: 'rect',
                rect: ['753px', '70px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R5',
                type: 'rect',
                rect: ['703px', '70px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R4',
                type: 'rect',
                rect: ['653px', '70px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R3',
                type: 'rect',
                rect: ['603px', '70px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R2',
                type: 'rect',
                rect: ['553px', '70px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'R1',
                type: 'rect',
                rect: ['503px', '70px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'R0',
                type: 'rect',
                rect: ['453px', '70px','42px','42px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                fill: ["rgba(252,252,254,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'R29',
                type: 'rect',
                rect: ['903px', '170px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R28',
                type: 'rect',
                rect: ['853px', '170px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R27',
                type: 'rect',
                rect: ['803px', '170px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R26',
                type: 'rect',
                rect: ['753px', '170px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R25',
                type: 'rect',
                rect: ['703px', '170px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R24',
                type: 'rect',
                rect: ['653px', '170px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R23',
                type: 'rect',
                rect: ['603px', '170px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R22',
                type: 'rect',
                rect: ['553px', '170px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'R21',
                type: 'rect',
                rect: ['503px', '170px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'R20',
                type: 'rect',
                rect: ['453px', '170px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R39',
                type: 'rect',
                rect: ['903px', '220px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R38',
                type: 'rect',
                rect: ['853px', '220px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R37',
                type: 'rect',
                rect: ['803px', '220px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R36',
                type: 'rect',
                rect: ['753px', '220px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R35',
                type: 'rect',
                rect: ['703px', '220px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R34',
                type: 'rect',
                rect: ['653px', '220px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R33',
                type: 'rect',
                rect: ['603px', '220px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R32',
                type: 'rect',
                rect: ['553px', '220px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R31',
                type: 'rect',
                rect: ['503px', '220px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R30',
                type: 'rect',
                rect: ['453px', '220px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R49',
                type: 'rect',
                rect: ['903px', '270px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R48',
                type: 'rect',
                rect: ['853px', '270px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R47',
                type: 'rect',
                rect: ['803px', '270px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R46',
                type: 'rect',
                rect: ['753px', '270px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R45',
                type: 'rect',
                rect: ['703px', '270px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R44',
                type: 'rect',
                rect: ['653px', '270px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R43',
                type: 'rect',
                rect: ['603px', '270px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R42',
                type: 'rect',
                rect: ['553px', '270px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R41',
                type: 'rect',
                rect: ['503px', '270px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R40',
                type: 'rect',
                rect: ['453px', '270px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R59',
                type: 'rect',
                rect: ['903px', '320px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R58',
                type: 'rect',
                rect: ['853px', '320px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R57',
                type: 'rect',
                rect: ['803px', '320px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R56',
                type: 'rect',
                rect: ['753px', '320px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R55',
                type: 'rect',
                rect: ['703px', '320px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R54',
                type: 'rect',
                rect: ['653px', '320px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R53',
                type: 'rect',
                rect: ['603px', '320px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R52',
                type: 'rect',
                rect: ['553px', '320px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R51',
                type: 'rect',
                rect: ['503px', '320px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R50',
                type: 'rect',
                rect: ['453px', '320px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R69',
                type: 'rect',
                rect: ['903px', '370px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R68',
                type: 'rect',
                rect: ['853px', '370px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R67',
                type: 'rect',
                rect: ['803px', '370px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R66',
                type: 'rect',
                rect: ['753px', '370px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R65',
                type: 'rect',
                rect: ['703px', '370px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R64',
                type: 'rect',
                rect: ['653px', '370px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R63',
                type: 'rect',
                rect: ['603px', '370px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R62',
                type: 'rect',
                rect: ['553px', '370px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R61',
                type: 'rect',
                rect: ['503px', '370px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R60',
                type: 'rect',
                rect: ['453px', '370px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R79',
                type: 'rect',
                rect: ['903px', '420px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R78',
                type: 'rect',
                rect: ['853px', '420px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R77',
                type: 'rect',
                rect: ['803px', '420px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R76',
                type: 'rect',
                rect: ['753px', '420px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R75',
                type: 'rect',
                rect: ['703px', '420px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R74',
                type: 'rect',
                rect: ['653px', '420px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R73',
                type: 'rect',
                rect: ['603px', '420px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R72',
                type: 'rect',
                rect: ['553px', '420px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R71',
                type: 'rect',
                rect: ['503px', '420px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R70',
                type: 'rect',
                rect: ['453px', '420px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R89',
                type: 'rect',
                rect: ['903px', '470px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R88',
                type: 'rect',
                rect: ['853px', '470px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R87',
                type: 'rect',
                rect: ['803px', '470px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R86',
                type: 'rect',
                rect: ['753px', '470px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R85',
                type: 'rect',
                rect: ['703px', '470px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R84',
                type: 'rect',
                rect: ['653px', '470px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R83',
                type: 'rect',
                rect: ['603px', '470px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R82',
                type: 'rect',
                rect: ['553px', '470px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R81',
                type: 'rect',
                rect: ['503px', '470px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R80',
                type: 'rect',
                rect: ['453px', '470px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R90',
                type: 'rect',
                rect: ['453px', '520px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R91',
                type: 'rect',
                rect: ['503px', '520px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R92',
                type: 'rect',
                rect: ['553px', '520px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R93',
                type: 'rect',
                rect: ['603px', '520px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R94',
                type: 'rect',
                rect: ['653px', '520px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R95',
                type: 'rect',
                rect: ['703px', '520px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R96',
                type: 'rect',
                rect: ['753px', '520px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R97',
                type: 'rect',
                rect: ['803px', '520px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R98',
                type: 'rect',
                rect: ['853px', '520px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'R99',
                type: 'rect',
                rect: ['903px', '520px','42px','42px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'blueTeam',
                type: 'text',
                rect: ['153px', '53px','270px','69px','auto', 'auto'],
                text: "Blue Team",
                align: "center",
                font: ['carter-one, sans-serif', 46, "rgba(255,255,255,1.00)", "normal", "none", ""]
            },
            {
                id: 'whiteTeam',
                type: 'text',
                rect: ['983px', '53px','270px','69px','auto', 'auto'],
                text: "White Team",
                align: "center",
                font: ['carter-one, sans-serif', 43, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'blueButton',
                type: 'rect',
                rect: ['213px', '570px','auto','auto','auto', 'auto']
            },
            {
                id: 'whiteButton',
                type: 'rect',
                rect: ['1038px', '570px','auto','auto','auto', 'auto']
            },
            {
                id: 'whiteSelected',
                display: 'none',
                type: 'ellipse',
                rect: ['1038px', '570px','142px','142px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,1)",[61,43,true,'farthest-corner',[['rgba(63,244,69,1.00)',0],['rgba(26,150,18,1.00)',52],['rgba(38,63,28,1.00)',91]]]],
                stroke: [1,"rgba(7,7,7,0.73)","solid"],
                boxShadow: ["inset", 8, -6, 12, 1, "rgba(0,0,0,0.65098)"]
            },
            {
                id: 'blueSelected',
                display: 'none',
                type: 'ellipse',
                rect: ['213px', '570px','142px','142px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,1)",[61,43,true,'farthest-corner',[['rgba(63,244,69,1.00)',0],['rgba(26,150,18,1.00)',52],['rgba(38,63,28,1.00)',91]]]],
                stroke: [1,"rgba(7,7,7,0.73)","solid"],
                boxShadow: ["inset", 8, -6, 12, 1, "rgba(0,0,0,0.65098)"]
            },
            {
                id: 'whiteCover',
                display: 'none',
                type: 'ellipse',
                rect: ['1038px', '570px','142px','142px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,1)",[61,43,true,'farthest-corner',[['rgba(255,239,239,1.00)',0],['rgba(155,155,155,1.00)',52],['rgba(69,69,69,1.00)',91]]]],
                stroke: [1,"rgba(7,7,7,0.73)","solid"],
                boxShadow: ["inset", 8, -6, 12, 1, "rgba(0,0,0,0.65098)"]
            },
            {
                id: 'blueCover',
                display: 'none',
                type: 'ellipse',
                rect: ['213px', '570px','142px','142px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,1)",[61,43,true,'farthest-corner',[['rgba(255,239,239,1.00)',0],['rgba(155,155,155,1.00)',52],['rgba(69,69,69,1.00)',91]]]],
                stroke: [1,"rgba(7,7,7,0.73)","solid"],
                boxShadow: ["inset", 8, -6, 12, 1, "rgba(0,0,0,0.65098)"]
            },
            {
                id: 'timeBox',
                display: 'none',
                type: 'rect',
                rect: ['649px', '622px','132px','70px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","none"],
                boxShadow: ["inset", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
            },
            {
                id: 'plusTile',
                display: 'none',
                type: 'rect',
                rect: ['828px', '597px','52px','52px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"],
                c: [
                {
                    id: 'plusText',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '0px','50px','50px','auto', 'auto'],
                    text: "+",
                    align: "center",
                    font: ['gochi-hand, sans-serif', 60, "rgba(0,0,0,1)", "normal", "none", ""]
                }]
            },
            {
                id: 'divideTile',
                display: 'none',
                type: 'rect',
                rect: ['828px', '672px','52px','52px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"],
                c: [
                {
                    id: 'divideText',
                    display: 'block',
                    type: 'text',
                    rect: ['1px', '0px','50px','50px','auto', 'auto'],
                    text: "",
                    align: "center",
                    font: ['gochi-hand, sans-serif', 60, "rgba(0,0,0,1)", "normal", "none", ""]
                }]
            },
            {
                id: 'minusTile',
                display: 'none',
                type: 'rect',
                rect: ['903px', '597px','52px','52px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"],
                c: [
                {
                    id: 'minusText',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '0px','50px','50px','auto', 'auto'],
                    text: "-",
                    align: "center",
                    font: ['gochi-hand, sans-serif', 60, "rgba(0,0,0,1)", "normal", "none", ""]
                }]
            },
            {
                id: 'timesTile',
                display: 'none',
                type: 'rect',
                rect: ['903px', '672px','52px','52px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(0, 0, 0)","solid"],
                c: [
                {
                    id: 'multText',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '0px','50px','50px','auto', 'auto'],
                    text: "",
                    align: "center",
                    font: ['gochi-hand, sans-serif', 60, "rgba(0,0,0,1)", "normal", "none", ""]
                }]
            },
            {
                id: 'B1',
                display: 'none',
                type: 'ellipse',
                rect: ['186px', '165px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'B2',
                display: 'none',
                type: 'ellipse',
                rect: ['261px', '165px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'B3',
                display: 'none',
                type: 'ellipse',
                rect: ['336px', '165px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'B4',
                display: 'none',
                type: 'ellipse',
                rect: ['186px', '240px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'B5',
                display: 'none',
                type: 'ellipse',
                rect: ['261px', '240px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'B6',
                display: 'none',
                type: 'ellipse',
                rect: ['336px', '240px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'B7',
                display: 'none',
                type: 'ellipse',
                rect: ['186px', '315px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'B8',
                display: 'none',
                type: 'ellipse',
                rect: ['261px', '315px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'B9',
                display: 'none',
                type: 'ellipse',
                rect: ['336px', '315px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'B10',
                display: 'none',
                type: 'ellipse',
                rect: ['186px', '390px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'B11',
                display: 'none',
                type: 'ellipse',
                rect: ['261px', '390px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'B12',
                display: 'none',
                type: 'ellipse',
                rect: ['336px', '390px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'B13',
                display: 'none',
                type: 'ellipse',
                rect: ['186px', '465px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'B14',
                display: 'none',
                type: 'ellipse',
                rect: ['261px', '465px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'B15',
                display: 'none',
                type: 'ellipse',
                rect: ['336px', '465px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'W1',
                display: 'none',
                type: 'ellipse',
                rect: ['1010px', '165px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(28,21,228,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'W2',
                display: 'none',
                type: 'ellipse',
                rect: ['1085px', '165px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(28,21,228,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'W3',
                display: 'none',
                type: 'ellipse',
                rect: ['1160px', '165px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(28,21,228,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'W4',
                display: 'none',
                type: 'ellipse',
                rect: ['1010px', '240px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(28,21,228,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'W5',
                display: 'none',
                type: 'ellipse',
                rect: ['1085px', '240px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(28,21,228,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'W6',
                display: 'none',
                type: 'ellipse',
                rect: ['1160px', '240px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(28,21,228,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'W7',
                display: 'none',
                type: 'ellipse',
                rect: ['1010px', '315px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(28,21,228,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'W8',
                display: 'none',
                type: 'ellipse',
                rect: ['1085px', '315px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(28,21,228,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'W9',
                display: 'none',
                type: 'ellipse',
                rect: ['1160px', '315px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(28,21,228,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'W10',
                display: 'none',
                type: 'ellipse',
                rect: ['1010px', '390px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(28,21,228,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'W11',
                display: 'none',
                type: 'ellipse',
                rect: ['1085px', '390px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(28,21,228,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'W12',
                display: 'none',
                type: 'ellipse',
                rect: ['1160px', '390px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(28,21,228,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'W13',
                display: 'none',
                type: 'ellipse',
                rect: ['1010px', '465px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(28,21,228,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'W14',
                display: 'none',
                type: 'ellipse',
                rect: ['1085px', '465px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(28,21,228,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'W15',
                display: 'none',
                type: 'ellipse',
                rect: ['1160px', '465px','30px','32px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(28,21,228,1.00)"],
                stroke: [4,"rgba(0,0,0,1.00)","solid"]
            },
            {
                id: 'test',
                display: 'none',
                type: 'rect',
                rect: ['6px', '237px','135px','83px','auto', 'auto'],
                fill: ["rgba(16,196,208,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'winnerBlue',
                display: 'none',
                type: 'rect',
                rect: ['153px', '50px','1100px','700px','auto', 'auto'],
                fill: ["rgba(49,25,217,1)"],
                stroke: [4,"rgb(7, 7, 7)","none"],
                c: [
                {
                    id: 'Text3',
                    type: 'text',
                    rect: ['86px', '72px','908px','545px','auto', 'auto'],
                    text: "Blue<br>Wins!!!",
                    align: "center",
                    font: ['carter-one, sans-serif', 195, "rgba(255,255,255,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'winnerWhite',
                display: 'none',
                type: 'rect',
                rect: ['153px', '50px','1100px','700px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [4,"rgb(7, 7, 7)","none"],
                c: [
                {
                    id: 'Text3Copy',
                    type: 'text',
                    rect: ['86px', '72px','908px','545px','auto', 'auto'],
                    text: "White<br>Wins!!!",
                    align: "center",
                    font: ['carter-one, sans-serif', 195, "rgba(49,25,217,1.00)", "400", "none", "normal"]
                }]
            }],
            symbolInstances: [
            {
                id: 'blueButton',
                symbolName: 'redButton',
                autoPlay: {

                }
            },
            {
                id: 'whiteButton',
                symbolName: 'redButton',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_B7}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '315px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "left", '186px'],
                ["style", "width", '47px']
            ],
            "${_A12}": [
                ["color", "background-color", 'rgba(219,31,31,1.00)'],
                ["style", "top", '637px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '540px'],
                ["style", "width", '47px']
            ],
            "${_W3}": [
                ["color", "background-color", 'rgba(28,21,228,1.00)'],
                ["style", "top", '165px'],
                ["style", "left", '1160px'],
                ["style", "display", 'none'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '47px']
            ],
            "${_R93}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '520px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '603px'],
                ["style", "width", '42px']
            ],
            "${_R62}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '370px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '553px'],
                ["style", "width", '42px']
            ],
            "${_B14}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '465px'],
                ["style", "left", '261px'],
                ["style", "display", 'none'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '47px']
            ],
            "${_blueButton}": [
                ["style", "top", '570px'],
                ["style", "left", '213px']
            ],
            "${_R87}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '470px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '803px'],
                ["style", "width", '42px']
            ],
            "${_Rectangle3Copy}": [
                ["style", "top", '50px'],
                ["style", "height", '692px'],
                ["color", "border-color", 'rgb(7, 7, 7)'],
                ["style", "left", '982px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${_R8}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '70px'],
                ["style", "left", '853px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '4px'],
                ["style", "width", '42px']
            ],
            "${_R79}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '420px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '903px'],
                ["style", "width", '42px']
            ],
            "${_A21}": [
                ["color", "background-color", 'rgba(219,31,31,1.00)'],
                ["style", "top", '692px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '485px'],
                ["style", "width", '47px']
            ],
            "${_R57}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '320px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '803px'],
                ["style", "width", '42px']
            ],
            "${_A18}": [
                ["color", "background-color", 'rgba(219,31,31,1.00)'],
                ["style", "top", '637px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '865px'],
                ["style", "width", '47px']
            ],
            "${_winnerBlue}": [
                ["style", "display", 'none']
            ],
            "${_R30}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '220px'],
                ["style", "left", '453px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '4px'],
                ["style", "width", '42px']
            ],
            "${_R12}": [
                ["style", "top", '120px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "border-width", '4px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '42px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '553px'],
                ["style", "width", '42px']
            ],
            "${_R75}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '420px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '703px'],
                ["style", "width", '42px']
            ],
            "${_A6}": [
                ["color", "background-color", 'rgba(219,31,31,1.00)'],
                ["style", "top", '582px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '758px'],
                ["style", "width", '47px']
            ],
            "${_R47}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '270px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '803px'],
                ["style", "width", '42px']
            ],
            "${_A9}": [
                ["color", "background-color", 'rgba(219,31,31,1.00)'],
                ["style", "top", '582px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '920px'],
                ["style", "width", '47px']
            ],
            "${_B8}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '315px'],
                ["style", "left", '261px'],
                ["style", "display", 'none'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '47px']
            ],
            "${_B10}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '390px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "left", '186px'],
                ["style", "width", '47px']
            ],
            "${_R37}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '220px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '803px'],
                ["style", "width", '42px']
            ],
            "${_A14}": [
                ["color", "background-color", 'rgba(219,31,31,1.00)'],
                ["style", "top", '637px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '648px'],
                ["style", "width", '47px']
            ],
            "${_winnerWhite}": [
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${_whiteButton}": [
                ["style", "left", '1038px'],
                ["style", "top", '570px']
            ],
            "${_R49}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '270px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '903px'],
                ["style", "width", '42px']
            ],
            "${_B13}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '465px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "left", '186px'],
                ["style", "width", '47px']
            ],
            "${_A0}": [
                ["color", "background-color", 'rgba(219,31,31,1.00)'],
                ["style", "top", '582px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '430px'],
                ["style", "width", '47px']
            ],
            "${_R83}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '470px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '603px'],
                ["style", "width", '42px']
            ],
            "${_R71}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '420px'],
                ["style", "left", '503px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '4px'],
                ["style", "width", '42px']
            ],
            "${_Text2Copy4}": [
                ["style", "line-height", 'normal'],
                ["style", "letter-spacing", '3px'],
                ["style", "left", '0px'],
                ["style", "font-size", '60px'],
                ["style", "top", '0px'],
                ["style", "height", '50px'],
                ["style", "font-family", 'carter-one, sans-serif'],
                ["style", "word-spacing", '0px'],
                ["style", "width", '50px']
            ],
            "${_R4}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '70px'],
                ["style", "left", '653px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '4px'],
                ["style", "width", '42px']
            ],
            "${_R34}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '220px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '653px'],
                ["style", "width", '42px']
            ],
            "${_R20}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '170px'],
                ["style", "left", '453px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '4px'],
                ["style", "width", '42px']
            ],
            "${_W14}": [
                ["color", "background-color", 'rgba(28,21,228,1.00)'],
                ["style", "top", '465px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "left", '1085px'],
                ["style", "width", '47px']
            ],
            "${_W7}": [
                ["color", "background-color", 'rgba(28,21,228,1.00)'],
                ["style", "top", '315px'],
                ["style", "left", '1010px'],
                ["style", "display", 'none'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '47px']
            ],
            "${_R70}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '420px'],
                ["style", "left", '453px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '4px'],
                ["style", "width", '42px']
            ],
            "${_R51}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '320px'],
                ["style", "left", '503px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '4px'],
                ["style", "width", '42px']
            ],
            "${_plusText}": [
                ["style", "line-height", '57px'],
                ["style", "letter-spacing", '0px'],
                ["style", "left", '0px'],
                ["style", "font-size", '60px'],
                ["style", "top", '0px'],
                ["style", "text-align", 'center'],
                ["style", "height", '50px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'gochi-hand, sans-serif'],
                ["style", "word-spacing", '0px'],
                ["style", "width", '50px']
            ],
            "${_R0}": [
                ["color", "background-color", 'rgba(252,252,254,1.00)'],
                ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '4px'],
                ["style", "width", '42px'],
                ["style", "top", '70px'],
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "cursor", 'pointer'],
                ["style", "height", '42px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '453px'],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_R33}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '220px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '603px'],
                ["style", "width", '42px']
            ],
            "${_R63}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '370px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '603px'],
                ["style", "width", '42px']
            ],
            "${_B4}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '240px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "left", '186px'],
                ["style", "width", '47px']
            ],
            "${_blueCover}": [
                ["subproperty", "boxShadow.inset", 'inset'],
                ["subproperty", "boxShadow.blur", '12px'],
                ["subproperty", "boxShadow.spread", '1px'],
                ["gradient", "background-image", [61,43,true,'farthest-corner',[['rgba(255,239,239,1.00)',0],['rgba(155,155,155,1.00)',52],['rgba(69,69,69,1.00)',91]]]],
                ["style", "left", '213px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "top", '570px'],
                ["subproperty", "boxShadow.offsetV", '-6px'],
                ["style", "display", 'none'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '142px'],
                ["color", "border-color", 'rgba(7, 7, 7, 0.729412)'],
                ["subproperty", "boxShadow.offsetH", '8px'],
                ["style", "border-width", '1px']
            ],
            "${_whiteCover}": [
                ["subproperty", "boxShadow.inset", 'inset'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "border-width", '1px'],
                ["gradient", "background-image", [61,43,true,'farthest-corner',[['rgba(255,239,239,1.00)',0],['rgba(155,155,155,1.00)',52],['rgba(69,69,69,1.00)',91]]]],
                ["style", "left", '1038px'],
                ["subproperty", "boxShadow.blur", '12px'],
                ["style", "top", '570px'],
                ["subproperty", "boxShadow.spread", '1px'],
                ["style", "display", 'none'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '142px'],
                ["subproperty", "boxShadow.offsetV", '-6px'],
                ["subproperty", "boxShadow.offsetH", '8px'],
                ["color", "border-color", 'rgba(7, 7, 7, 0.729412)']
            ],
            "${_A2}": [
                ["style", "top", '583px'],
                ["color", "background-color", 'rgba(219,31,31,1.00)'],
                ["style", "left", '540px'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '47px']
            ],
            "${_R14}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '120px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '653px'],
                ["style", "width", '42px']
            ],
            "${_R85}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '470px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '703px'],
                ["style", "width", '42px']
            ],
            "${_W10}": [
                ["color", "background-color", 'rgba(28,21,228,1.00)'],
                ["style", "top", '390px'],
                ["style", "left", '1010px'],
                ["style", "display", 'none'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '47px']
            ],
            "${_A1}": [
                ["color", "background-color", 'rgba(219,31,31,1.00)'],
                ["style", "top", '582px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '485px'],
                ["style", "width", '47px']
            ],
            "${_R89}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '470px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '903px'],
                ["style", "width", '42px']
            ],
            "${_R60}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '370px'],
                ["style", "left", '453px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '4px'],
                ["style", "width", '42px']
            ],
            "${_R24}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '170px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '653px'],
                ["style", "width", '42px']
            ],
            "${_R40}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '270px'],
                ["style", "left", '453px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '4px'],
                ["style", "width", '42px']
            ],
            "${_R99}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '520px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '903px'],
                ["style", "width", '42px']
            ],
            "${_middleBackground}": [
                ["color", "background-color", 'rgba(16,196,208,1.00)'],
                ["style", "height", '700px'],
                ["style", "top", '50px'],
                ["style", "left", '422px'],
                ["style", "width", '561px']
            ],
            "${_R5}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '70px'],
                ["style", "left", '703px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '4px'],
                ["style", "width", '42px']
            ],
            "${_R46}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '270px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '753px'],
                ["style", "width", '42px']
            ],
            "${_A13}": [
                ["color", "background-color", 'rgba(219,31,31,1.00)'],
                ["style", "top", '637px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '595px'],
                ["style", "width", '47px']
            ],
            "${_R76}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '420px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '753px'],
                ["style", "width", '42px']
            ],
            "${_W9}": [
                ["color", "background-color", 'rgba(28,21,228,1.00)'],
                ["style", "top", '315px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "left", '1160px'],
                ["style", "width", '47px']
            ],
            "${_B5}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '240px'],
                ["style", "left", '261px'],
                ["style", "display", 'none'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '47px']
            ],
            "${_R43}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '270px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '603px'],
                ["style", "width", '42px']
            ],
            "${_R67}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '370px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '803px'],
                ["style", "width", '42px']
            ],
            "${_R50}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '320px'],
                ["style", "left", '453px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '4px'],
                ["style", "width", '42px']
            ],
            "${_minusTile}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '4px'],
                ["style", "width", '52px'],
                ["style", "top", '597px'],
                ["style", "display", 'none'],
                ["style", "height", '52px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '903px']
            ],
            "${_A8}": [
                ["color", "background-color", 'rgba(219,31,31,1.00)'],
                ["style", "top", '582px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '865px'],
                ["style", "width", '47px']
            ],
            "${_Text3Copy}": [
                ["style", "line-height", '251px'],
                ["style", "height", '545px'],
                ["style", "top", '72px'],
                ["color", "color", 'rgba(49,25,217,1.00)'],
                ["style", "font-family", 'carter-one, sans-serif'],
                ["style", "left", '86px'],
                ["style", "font-size", '195px']
            ],
            "${_R42}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '270px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '553px'],
                ["style", "width", '42px']
            ],
            "${_Text2}": [
                ["style", "width", '224px'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "height", '227px'],
                ["style", "font-size", '24px']
            ],
            "${_W6}": [
                ["color", "background-color", 'rgba(28,21,228,1.00)'],
                ["style", "top", '240px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "left", '1160px'],
                ["style", "width", '47px']
            ],
            "${_blueSelected}": [
                ["subproperty", "boxShadow.inset", 'inset'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "left", '213px'],
                ["gradient", "background-image", [61,43,true,'farthest-corner',[['rgba(63,244,69,1.00)',0],['rgba(26,150,18,1.00)',52],['rgba(38,63,28,1.00)',91]]]],
                ["style", "border-width", '1px'],
                ["subproperty", "boxShadow.blur", '12px'],
                ["style", "top", '570px'],
                ["subproperty", "boxShadow.spread", '1px'],
                ["style", "display", 'none'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '142px'],
                ["color", "border-color", 'rgba(7, 7, 7, 0.729412)'],
                ["subproperty", "boxShadow.offsetH", '8px'],
                ["subproperty", "boxShadow.offsetV", '-6px']
            ],
            "${_R53}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '320px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '603px'],
                ["style", "width", '42px']
            ],
            "${_R59}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '320px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '903px'],
                ["style", "width", '42px']
            ],
            "${_W13}": [
                ["color", "background-color", 'rgba(28,21,228,1.00)'],
                ["style", "top", '465px'],
                ["style", "left", '1010px'],
                ["style", "display", 'none'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '47px']
            ],
            "${_B15}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '465px'],
                ["style", "left", '336px'],
                ["style", "display", 'none'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '47px']
            ],
            "${_divideTile}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '4px'],
                ["style", "width", '52px'],
                ["style", "top", '672px'],
                ["style", "display", 'none'],
                ["style", "height", '52px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '828px']
            ],
            "${_R66}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '370px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '753px'],
                ["style", "width", '42px']
            ],
            "${_A7}": [
                ["color", "background-color", 'rgba(219,31,31,1.00)'],
                ["style", "top", '582px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '813px'],
                ["style", "width", '47px']
            ],
            "${_R11}": [
                ["style", "top", '120px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '503px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '42px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "border-width", '4px'],
                ["style", "width", '42px']
            ],
            "${_R1}": [
                ["style", "top", '70px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-width", '4px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '42px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '503px'],
                ["style", "width", '42px']
            ],
            "${_R28}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '170px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '853px'],
                ["style", "width", '42px']
            ],
            "${_W8}": [
                ["color", "background-color", 'rgba(28,21,228,1.00)'],
                ["style", "top", '315px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "left", '1085px'],
                ["style", "width", '47px']
            ],
            "${_W5}": [
                ["color", "background-color", 'rgba(28,21,228,1.00)'],
                ["style", "top", '240px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "left", '1085px'],
                ["style", "width", '47px']
            ],
            "${_R94}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '520px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '653px'],
                ["style", "width", '42px']
            ],
            "${_A15}": [
                ["color", "background-color", 'rgba(219,31,31,1.00)'],
                ["style", "top", '637px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '703px'],
                ["style", "width", '47px']
            ],
            "${_A17}": [
                ["color", "background-color", 'rgba(219,31,31,1.00)'],
                ["style", "top", '637px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '813px'],
                ["style", "width", '47px']
            ],
            "${_W4}": [
                ["color", "background-color", 'rgba(28,21,228,1.00)'],
                ["style", "top", '240px'],
                ["style", "left", '1010px'],
                ["style", "display", 'none'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '47px']
            ],
            "${_R73}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '420px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '603px'],
                ["style", "width", '42px']
            ],
            "${_R88}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '470px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '853px'],
                ["style", "width", '42px']
            ],
            "${_backGroundRect}": [
                ["style", "top", '80px'],
                ["style", "height", '480px'],
                ["color", "background-color", 'rgba(36,148,145,1.00)'],
                ["style", "left", '463px'],
                ["style", "width", '480px']
            ],
            "${_A20}": [
                ["color", "background-color", 'rgba(219,31,31,1.00)'],
                ["style", "top", '692px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '430px'],
                ["style", "width", '47px']
            ],
            "${_R72}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '420px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '553px'],
                ["style", "width", '42px']
            ],
            "${_R13}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '120px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '603px'],
                ["style", "width", '42px']
            ],
            "${_R56}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '320px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '753px'],
                ["style", "width", '42px']
            ],
            "${_R32}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '220px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '553px'],
                ["style", "width", '42px']
            ],
            "${_B9}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '315px'],
                ["style", "left", '336px'],
                ["style", "display", 'none'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '47px']
            ],
            "${_R3}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '70px'],
                ["style", "left", '603px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '4px'],
                ["style", "width", '42px']
            ],
            "${_A3}": [
                ["color", "background-color", 'rgba(219,31,31,1.00)'],
                ["style", "top", '582px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '595px'],
                ["style", "width", '47px']
            ],
            "${_W15}": [
                ["color", "background-color", 'rgba(28,21,228,1.00)'],
                ["style", "top", '465px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "left", '1160px'],
                ["style", "width", '47px']
            ],
            "${_Text3}": [
                ["style", "line-height", '251px'],
                ["style", "top", '72px'],
                ["style", "height", '545px'],
                ["style", "font-family", 'carter-one, sans-serif'],
                ["style", "left", '86px'],
                ["style", "font-size", '195px']
            ],
            "${_R69}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '370px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '903px'],
                ["style", "width", '42px']
            ],
            "${_A22}": [
                ["color", "background-color", 'rgba(219,31,31,1.00)'],
                ["style", "top", '692px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '540px'],
                ["style", "width", '47px']
            ],
            "${_R9}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '70px'],
                ["style", "left", '903px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '4px'],
                ["style", "width", '42px']
            ],
            "${_R97}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '520px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '803px'],
                ["style", "width", '42px']
            ],
            "${_R39}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '220px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '903px'],
                ["style", "width", '42px']
            ],
            "${_A19}": [
                ["color", "background-color", 'rgba(219,31,31,1.00)'],
                ["style", "top", '637px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '920px'],
                ["style", "width", '47px']
            ],
            "${_B2}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '165px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "left", '261px'],
                ["style", "width", '47px']
            ],
            "${_R55}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '320px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '703px'],
                ["style", "width", '42px']
            ],
            "${_A5}": [
                ["color", "background-color", 'rgba(219,31,31,1.00)'],
                ["style", "top", '582px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '703px'],
                ["style", "width", '47px']
            ],
            "${_R90}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '520px'],
                ["style", "left", '453px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '4px'],
                ["style", "width", '42px']
            ],
            "${_R7}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '70px'],
                ["style", "left", '803px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '4px'],
                ["style", "width", '42px']
            ],
            "${_R22}": [
                ["style", "top", '170px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "border-width", '4px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '42px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '553px'],
                ["style", "width", '42px']
            ],
            "${_R48}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '270px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '853px'],
                ["style", "width", '42px']
            ],
            "${_minusText}": [
                ["style", "line-height", '55px'],
                ["style", "letter-spacing", '0px'],
                ["style", "left", '0px'],
                ["style", "font-size", '60px'],
                ["style", "top", '0px'],
                ["style", "text-align", 'center'],
                ["style", "height", '50px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'gochi-hand, sans-serif'],
                ["style", "word-spacing", '0px'],
                ["style", "width", '50px']
            ],
            "${_R64}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '370px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '653px'],
                ["style", "width", '42px']
            ],
            "${_R21}": [
                ["style", "top", '170px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '503px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '42px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "border-width", '4px'],
                ["style", "width", '42px']
            ],
            "${_whiteSelected}": [
                ["subproperty", "boxShadow.inset", 'inset'],
                ["subproperty", "boxShadow.blur", '12px'],
                ["subproperty", "boxShadow.spread", '1px'],
                ["gradient", "background-image", [61,43,true,'farthest-corner',[['rgba(63,244,69,1.00)',0],['rgba(26,150,18,1.00)',52],['rgba(38,63,28,1.00)',91]]]],
                ["style", "left", '1038px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "top", '570px'],
                ["subproperty", "boxShadow.offsetV", '-6px'],
                ["style", "display", 'none'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '142px'],
                ["color", "border-color", 'rgba(7, 7, 7, 0.729412)'],
                ["subproperty", "boxShadow.offsetH", '8px'],
                ["style", "border-width", '1px']
            ],
            "${_R98}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '520px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '853px'],
                ["style", "width", '42px']
            ],
            "${_R77}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '420px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '803px'],
                ["style", "width", '42px']
            ],
            "${_R84}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '470px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '653px'],
                ["style", "width", '42px']
            ],
            "${_R91}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '520px'],
                ["style", "left", '503px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '4px'],
                ["style", "width", '42px']
            ],
            "${_R95}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '520px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '703px'],
                ["style", "width", '42px']
            ],
            "${_R25}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '170px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '703px'],
                ["style", "width", '42px']
            ],
            "${_timesTile}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '4px'],
                ["style", "width", '52px'],
                ["style", "top", '672px'],
                ["style", "display", 'none'],
                ["style", "height", '52px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '903px']
            ],
            "${_W11}": [
                ["color", "background-color", 'rgba(28,21,228,1.00)'],
                ["style", "top", '390px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "left", '1085px'],
                ["style", "width", '47px']
            ],
            "${_R29}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '170px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '903px'],
                ["style", "width", '42px']
            ],
            "${_B6}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '240px'],
                ["style", "left", '336px'],
                ["style", "display", 'none'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '47px']
            ],
            "${_A29}": [
                ["color", "background-color", 'rgba(219,31,31,1.00)'],
                ["style", "top", '692px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '920px'],
                ["style", "width", '47px']
            ],
            "${_B1}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '165px'],
                ["style", "left", '186px'],
                ["style", "display", 'none'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '47px']
            ],
            "${_A10}": [
                ["color", "background-color", 'rgba(219,31,31,1.00)'],
                ["style", "top", '637px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '430px'],
                ["style", "width", '47px']
            ],
            "${_divideText}": [
                ["style", "line-height", '57px'],
                ["style", "letter-spacing", '0px'],
                ["style", "left", '1px'],
                ["style", "font-size", '60px'],
                ["style", "top", '0px'],
                ["style", "text-align", 'center'],
                ["style", "height", '50px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'gochi-hand, sans-serif'],
                ["style", "word-spacing", '0px'],
                ["style", "width", '50px']
            ],
            "${_B12}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '390px'],
                ["style", "left", '336px'],
                ["style", "display", 'none'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '47px']
            ],
            "${_R17}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '120px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '803px'],
                ["style", "width", '42px']
            ],
            "${_R27}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '170px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '803px'],
                ["style", "width", '42px']
            ],
            "${_test}": [
                ["style", "top", '237px'],
                ["style", "left", '6px'],
                ["style", "display", 'none']
            ],
            "${_R68}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '370px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '853px'],
                ["style", "width", '42px']
            ],
            "${_blueTeam}": [
                ["style", "top", '53px'],
                ["style", "text-align", 'center'],
                ["style", "width", '270px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '69px'],
                ["style", "left", '153px'],
                ["style", "font-size", '46px']
            ],
            "${_R58}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '320px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '853px'],
                ["style", "width", '42px']
            ],
            "${_R15}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '120px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '703px'],
                ["style", "width", '42px']
            ],
            "${_R41}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '270px'],
                ["style", "left", '503px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '4px'],
                ["style", "width", '42px']
            ],
            "${_R38}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '220px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '853px'],
                ["style", "width", '42px']
            ],
            "${_multText}": [
                ["style", "line-height", '57px'],
                ["style", "letter-spacing", '0px'],
                ["style", "left", '0px'],
                ["style", "font-size", '60px'],
                ["style", "top", '0px'],
                ["style", "text-align", 'center'],
                ["style", "height", '50px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'gochi-hand, sans-serif'],
                ["style", "word-spacing", '0px'],
                ["style", "width", '50px']
            ],
            "${_R81}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '470px'],
                ["style", "left", '503px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '4px'],
                ["style", "width", '42px']
            ],
            "${_R86}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '470px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '753px'],
                ["style", "width", '42px']
            ],
            "${_W12}": [
                ["color", "background-color", 'rgba(28,21,228,1.00)'],
                ["style", "top", '390px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "left", '1160px'],
                ["style", "width", '47px']
            ],
            "${_R36}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '220px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '753px'],
                ["style", "width", '42px']
            ],
            "${_R16}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '120px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '753px'],
                ["style", "width", '42px']
            ],
            "${_R6}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '70px'],
                ["style", "left", '753px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '4px'],
                ["style", "width", '42px']
            ],
            "${_R35}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '220px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '703px'],
                ["style", "width", '42px']
            ],
            "${_R19}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '120px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '903px'],
                ["style", "width", '42px']
            ],
            "${_R23}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '170px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '603px'],
                ["style", "width", '42px']
            ],
            "${_Rectangle3}": [
                ["style", "top", '50px'],
                ["style", "height", '692px'],
                ["color", "border-color", 'rgba(7,7,7,1.00)'],
                ["style", "left", '152px'],
                ["color", "background-color", 'rgba(49,25,217,1.00)']
            ],
            "${_A23}": [
                ["color", "background-color", 'rgba(219,31,31,1.00)'],
                ["style", "top", '692px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '595px'],
                ["style", "width", '47px']
            ],
            "${_R44}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '270px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '653px'],
                ["style", "width", '42px']
            ],
            "${_whiteTeam}": [
                ["style", "top", '53px'],
                ["style", "text-align", 'center'],
                ["style", "height", '69px'],
                ["style", "font-size", '43px'],
                ["style", "left", '983px'],
                ["style", "width", '270px']
            ],
            "${_A25}": [
                ["color", "background-color", 'rgba(219,31,31,1.00)'],
                ["style", "top", '692px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '703px'],
                ["style", "width", '47px']
            ],
            "${_R2}": [
                ["style", "top", '70px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '553px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '42px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "border-width", '4px'],
                ["style", "width", '42px']
            ],
            "${_A4}": [
                ["color", "background-color", 'rgba(219,31,31,1.00)'],
                ["style", "top", '582px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '648px'],
                ["style", "width", '47px']
            ],
            "${_A16}": [
                ["color", "background-color", 'rgba(219,31,31,1.00)'],
                ["style", "top", '637px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '758px'],
                ["style", "width", '47px']
            ],
            "${_R26}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '170px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '753px'],
                ["style", "width", '42px']
            ],
            "${_R65}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '370px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '703px'],
                ["style", "width", '42px']
            ],
            "${_R45}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '270px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '703px'],
                ["style", "width", '42px']
            ],
            "${_R92}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '520px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '553px'],
                ["style", "width", '42px']
            ],
            "${_A26}": [
                ["color", "background-color", 'rgba(219,31,31,1.00)'],
                ["style", "top", '692px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '758px'],
                ["style", "width", '47px']
            ],
            "${_R74}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '420px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '653px'],
                ["style", "width", '42px']
            ],
            "${_A27}": [
                ["color", "background-color", 'rgba(219,31,31,1.00)'],
                ["style", "top", '692px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '813px'],
                ["style", "width", '47px']
            ],
            "${_R78}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '420px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '853px'],
                ["style", "width", '42px']
            ],
            "${_B11}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '390px'],
                ["style", "left", '261px'],
                ["style", "display", 'none'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '47px']
            ],
            "${_R96}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '520px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '753px'],
                ["style", "width", '42px']
            ],
            "${_timeBox}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["subproperty", "boxShadow.inset", 'inset'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "border-style", 'none'],
                ["style", "left", '649px'],
                ["style", "width", '132px'],
                ["style", "top", '622px'],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "display", 'none'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["style", "height", '70px']
            ],
            "${_W1}": [
                ["color", "background-color", 'rgba(28,21,228,1.00)'],
                ["style", "top", '165px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "left", '1010px'],
                ["style", "width", '47px']
            ],
            "${_R18}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '120px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '853px'],
                ["style", "width", '42px']
            ],
            "${_R61}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '370px'],
                ["style", "left", '503px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '4px'],
                ["style", "width", '42px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "overflow", 'visible'],
                ["style", "height", '800px'],
                ["style", "max-width", 'none'],
                ["style", "width", '1400px']
            ],
            "${_R52}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '320px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '553px'],
                ["style", "width", '42px']
            ],
            "${_B3}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '165px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "left", '336px'],
                ["style", "width", '47px']
            ],
            "${_plusTile}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '4px'],
                ["style", "width", '52px'],
                ["style", "top", '597px'],
                ["style", "display", 'none'],
                ["style", "height", '52px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '828px']
            ],
            "${_R54}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '320px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '653px'],
                ["style", "width", '42px']
            ],
            "${_A11}": [
                ["color", "background-color", 'rgba(219,31,31,1.00)'],
                ["style", "top", '637px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '485px'],
                ["style", "width", '47px']
            ],
            "${_R31}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '220px'],
                ["style", "left", '503px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '4px'],
                ["style", "width", '42px']
            ],
            "${_A28}": [
                ["color", "background-color", 'rgba(219,31,31,1.00)'],
                ["style", "top", '692px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '865px'],
                ["style", "width", '47px']
            ],
            "${_R80}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '470px'],
                ["style", "left", '453px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '4px'],
                ["style", "width", '42px']
            ],
            "${_A24}": [
                ["color", "background-color", 'rgba(219,31,31,1.00)'],
                ["style", "top", '692px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '648px'],
                ["style", "width", '47px']
            ],
            "${_R82}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '470px'],
                ["style", "border-width", '4px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '553px'],
                ["style", "width", '42px']
            ],
            "${_W2}": [
                ["color", "background-color", 'rgba(28,21,228,1.00)'],
                ["style", "top", '165px'],
                ["style", "left", '1085px'],
                ["style", "display", 'none'],
                ["style", "height", '47px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '47px']
            ],
            "${_R10}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '120px'],
                ["style", "left", '453px'],
                ["style", "height", '42px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '4px'],
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
                { id: "eid282", tween: [ "style", "${_divideTile}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid287", tween: [ "style", "${_B3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid289", tween: [ "style", "${_B5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid302", tween: [ "style", "${_W13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid281", tween: [ "style", "${_minusTile}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid272", tween: [ "style", "${_blueCover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid309", tween: [ "style", "${_W6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid305", tween: [ "style", "${_W10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid338", tween: [ "style", "${_winnerWhite}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid297", tween: [ "style", "${_B13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid280", tween: [ "style", "${_timesTile}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid294", tween: [ "style", "${_B10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid283", tween: [ "style", "${_plusTile}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid312", tween: [ "style", "${_W3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid285", tween: [ "style", "${_B1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid288", tween: [ "style", "${_B4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid273", tween: [ "style", "${_whiteCover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid313", tween: [ "style", "${_W2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid310", tween: [ "style", "${_W5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid274", tween: [ "style", "${_blueSelected}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid304", tween: [ "style", "${_W11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid307", tween: [ "style", "${_W8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid308", tween: [ "style", "${_W7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid298", tween: [ "style", "${_B14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid303", tween: [ "style", "${_W12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid311", tween: [ "style", "${_W4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid315", tween: [ "style", "${_timeBox}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid337", tween: [ "style", "${_winnerBlue}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid291", tween: [ "style", "${_B7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid306", tween: [ "style", "${_W9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid292", tween: [ "style", "${_B8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid295", tween: [ "style", "${_B11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid290", tween: [ "style", "${_B6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid275", tween: [ "style", "${_whiteSelected}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid296", tween: [ "style", "${_B12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid301", tween: [ "style", "${_W14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid320", tween: [ "style", "${_test}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid293", tween: [ "style", "${_B9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid314", tween: [ "style", "${_W1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid286", tween: [ "style", "${_B2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid300", tween: [ "style", "${_W15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid299", tween: [ "style", "${_B15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"redButton": {
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
                    rect: ['0px', '0px', '142px', '142px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    boxShadow: ['inset', 8, -6, 12, 1, 'rgba(0,0,0,0.65098)'],
                    id: 'Ellipse2',
                    stroke: [1, 'rgba(7,7,7,0.73)', 'solid'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1)', [54, 54, 'true', 'farthest-corner', [['rgba(255,255,255,1.00)', 0], ['rgba(124,82,188,1.00)', 52], ['rgba(54,30,90,1.00)', 91]]]]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Ellipse2}": [
                ["subproperty", "boxShadow.inset", 'inset'],
                ["subproperty", "boxShadow.blur", '12px'],
                ["gradient", "background-image", [61,43,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(188,82,82,1.00)',52],['rgba(89,27,27,1.00)',91]]]],
                ["style", "left", '0px'],
                ["subproperty", "boxShadow.offsetV", '-6px'],
                ["style", "top", '0px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["color", "border-color", 'rgba(7,7,7,0.73)'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '142px'],
                ["subproperty", "boxShadow.spread", '1px'],
                ["subproperty", "boxShadow.offsetH", '8px'],
                ["style", "border-width", '1px']
            ],
            "${symbolSelector}": [
                ["style", "height", '150px'],
                ["style", "width", '150px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 200,
            autoPlay: false,
            timeline: [
                { id: "eid256", tween: [ "gradient", "${_Ellipse2}", "background-image", [53,50,true,'farthest-corner',[['rgba(184,122,122,1.00)',5],['rgba(255,195,195,1.00)',45],['rgba(91,4,4,1.00)',91]]], { fromValue: [61,43,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(188,82,82,1.00)',52],['rgba(89,27,27,1.00)',91]]]}], position: 0, duration: 200 }            ]
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
})(jQuery, AdobeEdge, "EDGE-377409989");
