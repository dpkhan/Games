/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'walter-turncoat, sans-serif': '<script src=\"http://use.edgefonts.net/walter-turncoat:n4:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.1.3.min.js",
            js+"jquery-ui-1.10.3.custom.min.js",
            js+"rainbowvis.js",
            js+"jquery.ui.touch-punch.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'RectangleCopy2',
                            type: 'rect',
                            rect: ['1075px', '25px', '500px', '272px', 'auto', 'auto'],
                            fill: ["rgba(227,227,227,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            boxShadow: ["", -2, -2, 10, 2, "rgba(0,0,0,0.39)"]
                        },
                        {
                            id: 'timeBoxright',
                            type: 'rect',
                            rect: ['1088px', '35px', '240px', '130px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            boxShadow: ["inset", -1, -1, 8, 2, "rgba(0,0,0,0.54)"]
                        },
                        {
                            id: 'RectangleCopy',
                            type: 'rect',
                            rect: ['25px', '25px', '490px', '272px', 'auto', 'auto'],
                            fill: ["rgba(227,227,227,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            boxShadow: ["", -2, -2, 10, 3, "rgba(0,0,0,0.39)"]
                        },
                        {
                            id: 'leftPlayer',
                            type: 'rect',
                            rect: ['25px', '212px', '490px', '85px', 'auto', 'auto'],
                            fill: ["rgba(227,227,227,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'rightPlayer',
                            type: 'rect',
                            rect: ['1085px', '212px', '490px', '85px', 'auto', 'auto'],
                            fill: ["rgba(227,227,227,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'rightTeam',
                            type: 'rect',
                            rect: ['1325px', '25px', '250px', '187px', 'auto', 'auto'],
                            fill: ["rgba(227,227,227,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'leftTeam',
                            type: 'rect',
                            rect: ['25px', '25px', '250px', '187px', 'auto', 'auto'],
                            fill: ["rgba(227,227,227,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'timeBoxleft',
                            type: 'rect',
                            rect: ['265px', '35px', '240px', '130px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            boxShadow: ["inset", -1, -1, 8, 2, "rgba(0,0,0,0.54)"]
                        },
                        {
                            id: 'numpad1',
                            display: 'none',
                            type: 'group',
                            rect: ['72px', '340px', '385', '520', 'auto', 'auto'],
                            userClass: "",
                            c: [
                            {
                                id: 'button9',
                                symbolName: 'button9',
                                type: 'rect',
                                rect: ['260px', '0px', '125', '125', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'button8',
                                symbolName: 'button8',
                                type: 'rect',
                                rect: ['130px', '0px', '125', '125', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'button7',
                                symbolName: 'button7',
                                type: 'rect',
                                rect: ['0px', '0px', '125', '125', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'button6',
                                symbolName: 'button6',
                                type: 'rect',
                                rect: ['260px', '130px', '125', '125', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'button5',
                                symbolName: 'button5',
                                type: 'rect',
                                rect: ['130px', '130px', '125', '125', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'button4',
                                symbolName: 'button4',
                                type: 'rect',
                                rect: ['0px', '130px', '125', '125', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'button3',
                                symbolName: 'button3',
                                type: 'rect',
                                rect: ['260px', '260px', '125', '125', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'button2',
                                symbolName: 'button2',
                                type: 'rect',
                                rect: ['130px', '260px', '125', '125', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'button1',
                                symbolName: 'button1',
                                type: 'rect',
                                rect: ['0px', '260px', '125', '125', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'button0',
                                symbolName: 'button0',
                                type: 'rect',
                                rect: ['130px', '390px', '130px', '130px', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'enterbutton',
                                symbolName: 'enterbutton',
                                display: 'none',
                                type: 'rect',
                                rect: ['258px', '392px', 'undefined', 'undefined', 'auto', 'auto']
                            },
                            {
                                id: 'backspace',
                                symbolName: 'backspace',
                                display: 'none',
                                type: 'rect',
                                rect: ['-2px', '392px', 'undefined', 'undefined', 'auto', 'auto']
                            }]
                        },
                        {
                            id: 'numpad2',
                            display: 'none',
                            type: 'group',
                            rect: ['1142px', '340px', '385', '520', 'auto', 'auto'],
                            c: [
                            {
                                id: 'button9Copy',
                                symbolName: 'button9',
                                type: 'rect',
                                rect: ['260px', '0px', '125', '125', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'button8Copy',
                                symbolName: 'button8',
                                type: 'rect',
                                rect: ['130px', '0px', '125', '125', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'button7Copy',
                                symbolName: 'button7',
                                type: 'rect',
                                rect: ['0px', '0px', '125', '125', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'button6Copy',
                                symbolName: 'button6',
                                type: 'rect',
                                rect: ['260px', '130px', '125', '125', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'button5Copy',
                                symbolName: 'button5',
                                type: 'rect',
                                rect: ['130px', '130px', '125', '125', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'button4Copy',
                                symbolName: 'button4',
                                type: 'rect',
                                rect: ['0px', '130px', '125', '125', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'button3Copy',
                                symbolName: 'button3',
                                type: 'rect',
                                rect: ['260px', '260px', '125', '125', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'button2Copy',
                                symbolName: 'button2',
                                type: 'rect',
                                rect: ['130px', '260px', '125', '125', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'button1Copy',
                                symbolName: 'button1',
                                type: 'rect',
                                rect: ['0px', '260px', '125', '125', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'button0Copy',
                                symbolName: 'button0',
                                type: 'rect',
                                rect: ['130px', '390px', '130px', '130px', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'enterbuttonCopy',
                                symbolName: 'enterbutton',
                                display: 'none',
                                type: 'rect',
                                rect: ['260px', '391px', 'undefined', 'undefined', 'auto', 'auto']
                            },
                            {
                                id: 'backspaceCopy',
                                symbolName: 'backspace',
                                display: 'none',
                                type: 'rect',
                                rect: ['0px', '391px', 'undefined', 'undefined', 'auto', 'auto']
                            }]
                        },
                        {
                            id: 'numbersOutside',
                            type: 'rect',
                            rect: ['548px', '260px', '500px', '610px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,0.99)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            boxShadow: ["inset", -2, -2, 10, 3, "rgba(0,0,0,0.65098)"],
                            c: [
                            {
                                id: 'number1',
                                type: 'rect',
                                rect: ['0px', '0px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number2',
                                type: 'rect',
                                rect: ['100px', '0px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number3',
                                type: 'rect',
                                rect: ['200px', '0px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number4',
                                type: 'rect',
                                rect: ['300px', '0px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number5',
                                type: 'rect',
                                rect: ['400px', '0px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number6',
                                type: 'rect',
                                rect: ['0px', '50px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number7',
                                type: 'rect',
                                rect: ['100px', '50px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number8',
                                type: 'rect',
                                rect: ['200px', '50px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number9',
                                type: 'rect',
                                rect: ['300px', '50px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number10',
                                type: 'rect',
                                rect: ['400px', '50px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number11',
                                type: 'rect',
                                rect: ['0px', '100px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number12',
                                type: 'rect',
                                rect: ['100px', '100px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number13',
                                type: 'rect',
                                rect: ['200px', '100px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number14',
                                type: 'rect',
                                rect: ['300px', '100px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number15',
                                type: 'rect',
                                rect: ['400px', '100px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number16',
                                type: 'rect',
                                rect: ['0px', '150px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number17',
                                type: 'rect',
                                rect: ['100px', '150px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number18',
                                type: 'rect',
                                rect: ['200px', '150px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number19',
                                type: 'rect',
                                rect: ['300px', '150px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number20',
                                type: 'rect',
                                rect: ['400px', '150px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number21',
                                type: 'rect',
                                rect: ['0px', '200px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number22',
                                type: 'rect',
                                rect: ['100px', '200px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number23',
                                type: 'rect',
                                rect: ['200px', '200px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number24',
                                type: 'rect',
                                rect: ['300px', '200px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number25',
                                type: 'rect',
                                rect: ['400px', '200px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number26',
                                type: 'rect',
                                rect: ['0px', '250px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number27',
                                type: 'rect',
                                rect: ['100px', '250px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number28',
                                type: 'rect',
                                rect: ['200px', '250px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number29',
                                type: 'rect',
                                rect: ['300px', '250px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number30',
                                type: 'rect',
                                rect: ['400px', '250px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number31',
                                type: 'rect',
                                rect: ['0px', '300px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number32',
                                type: 'rect',
                                rect: ['100px', '300px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number33',
                                type: 'rect',
                                rect: ['200px', '300px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number34',
                                type: 'rect',
                                rect: ['300px', '300px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number35',
                                type: 'rect',
                                rect: ['400px', '300px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number36',
                                type: 'rect',
                                rect: ['0px', '350px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number37',
                                type: 'rect',
                                rect: ['100px', '350px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number38',
                                type: 'rect',
                                rect: ['200px', '350px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number39',
                                type: 'rect',
                                rect: ['300px', '350px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number40',
                                type: 'rect',
                                rect: ['400px', '350px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number41',
                                type: 'rect',
                                rect: ['0px', '400px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number42',
                                type: 'rect',
                                rect: ['100px', '400px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number43',
                                type: 'rect',
                                rect: ['200px', '400px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number44',
                                type: 'rect',
                                rect: ['300px', '400px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number45',
                                type: 'rect',
                                rect: ['400px', '400px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number46',
                                type: 'rect',
                                rect: ['0px', '450px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number47',
                                type: 'rect',
                                rect: ['100px', '450px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number48',
                                type: 'rect',
                                rect: ['200px', '450px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number49',
                                type: 'rect',
                                rect: ['300px', '450px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number50',
                                type: 'rect',
                                rect: ['400px', '450px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number51',
                                type: 'rect',
                                rect: ['0px', '500px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number52',
                                type: 'rect',
                                rect: ['100px', '500px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number53',
                                type: 'rect',
                                rect: ['200px', '500px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number54',
                                type: 'rect',
                                rect: ['300px', '500px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number55',
                                type: 'rect',
                                rect: ['402px', '500px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number56',
                                type: 'rect',
                                rect: ['0px', '550px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number57',
                                type: 'rect',
                                rect: ['100px', '550px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number58',
                                type: 'rect',
                                rect: ['200px', '550px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number59',
                                type: 'rect',
                                rect: ['300px', '550px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'number60',
                                type: 'rect',
                                rect: ['400px', '550px', '100px', '50px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            }]
                        },
                        {
                            id: 'parameterBox',
                            display: 'block',
                            type: 'rect',
                            rect: ['548px', '260px', '500px', '610px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            boxShadow: ["", 0, 0, 10, 2, "rgba(0,0,0,0.65098)"],
                            c: [
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['84px', '9px', '385px', '50px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: left;\">Prime Numbers</p>",
                                font: ['walter-turncoat, sans-serif', [35, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                            },
                            {
                                id: 'TextCopy',
                                type: 'text',
                                rect: ['84px', '67px', '385px', '50px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: left;\">Square Numbers</p>",
                                font: ['walter-turncoat, sans-serif', [35, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                            },
                            {
                                id: 'TextCopy2',
                                type: 'text',
                                rect: ['84px', '126px', '385px', '50px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: left;\">Powers of 2</p>",
                                font: ['walter-turncoat, sans-serif', [35, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                            },
                            {
                                id: 'TextCopy3',
                                type: 'text',
                                rect: ['84px', '184px', '385px', '50px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: left;\">Powers of 3</p>",
                                font: ['walter-turncoat, sans-serif', [35, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                            },
                            {
                                id: 'TextCopy4',
                                type: 'text',
                                rect: ['84px', '242px', '385px', '50px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: left;\">Multiples of 3</p>",
                                font: ['walter-turncoat, sans-serif', [35, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                            },
                            {
                                id: 'TextCopy5',
                                type: 'text',
                                rect: ['84px', '302px', '385px', '50px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: left;\">Multiples of 4</p>",
                                font: ['walter-turncoat, sans-serif', [35, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                            },
                            {
                                id: 'TextCopy6',
                                type: 'text',
                                rect: ['84px', '359px', '385px', '50px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: left;\">Multiples of 6</p>",
                                font: ['walter-turncoat, sans-serif', [35, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                            },
                            {
                                id: 'TextCopy7',
                                type: 'text',
                                rect: ['84px', '418px', '385px', '50px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: left;\">Multiples of 7</p>",
                                font: ['walter-turncoat, sans-serif', [35, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                            },
                            {
                                id: 'TextCopy8',
                                type: 'text',
                                rect: ['84px', '477px', '385px', '50px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: left;\">Multples of 9</p>",
                                font: ['walter-turncoat, sans-serif', [35, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                            },
                            {
                                id: 'radio0',
                                type: 'ellipse',
                                rect: ['35px', '22px', '21px', '21px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [4,"rgb(0, 0, 0)","solid"],
                                c: [
                                {
                                    id: 'inside0',
                                    display: 'none',
                                    type: 'ellipse',
                                    rect: ['3px', '3px', '15px', '15px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(0,0,0,0.99)"],
                                    stroke: [2,"rgb(0, 0, 0)","none"]
                                }]
                            },
                            {
                                id: 'radio1',
                                type: 'ellipse',
                                rect: ['35px', '80px', '21px', '21px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [4,"rgb(0, 0, 0)","solid"],
                                c: [
                                {
                                    id: 'inside1',
                                    display: 'none',
                                    type: 'ellipse',
                                    rect: ['3px', '3px', '15px', '15px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(0,0,0,0.99)"],
                                    stroke: [2,"rgb(0, 0, 0)","none"]
                                }]
                            },
                            {
                                id: 'radio2',
                                type: 'ellipse',
                                rect: ['35px', '139px', '21px', '21px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [4,"rgb(0, 0, 0)","solid"],
                                c: [
                                {
                                    id: 'inside2',
                                    display: 'none',
                                    type: 'ellipse',
                                    rect: ['3px', '3px', '15px', '15px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(0,0,0,0.99)"],
                                    stroke: [2,"rgb(0, 0, 0)","none"]
                                }]
                            },
                            {
                                id: 'radio3',
                                type: 'ellipse',
                                rect: ['35px', '197px', '21px', '21px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [4,"rgb(0, 0, 0)","solid"],
                                c: [
                                {
                                    id: 'inside3',
                                    display: 'none',
                                    type: 'ellipse',
                                    rect: ['3px', '3px', '15px', '15px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(0,0,0,0.99)"],
                                    stroke: [2,"rgb(0, 0, 0)","none"]
                                }]
                            },
                            {
                                id: 'radio4',
                                type: 'ellipse',
                                rect: ['35px', '255px', '21px', '21px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [4,"rgb(0, 0, 0)","solid"],
                                c: [
                                {
                                    id: 'inside4',
                                    display: 'none',
                                    type: 'ellipse',
                                    rect: ['3px', '3px', '15px', '15px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(0,0,0,0.99)"],
                                    stroke: [2,"rgb(0, 0, 0)","none"]
                                }]
                            },
                            {
                                id: 'radio5',
                                type: 'ellipse',
                                rect: ['35px', '314px', '21px', '21px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [4,"rgb(0, 0, 0)","solid"],
                                c: [
                                {
                                    id: 'inside5',
                                    display: 'none',
                                    type: 'ellipse',
                                    rect: ['3px', '3px', '15px', '15px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(0,0,0,0.99)"],
                                    stroke: [2,"rgb(0, 0, 0)","none"]
                                }]
                            },
                            {
                                id: 'radio6',
                                type: 'ellipse',
                                rect: ['35px', '372px', '21px', '21px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [4,"rgb(0, 0, 0)","solid"],
                                c: [
                                {
                                    id: 'inside6',
                                    display: 'none',
                                    type: 'ellipse',
                                    rect: ['3px', '3px', '15px', '15px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(0,0,0,0.99)"],
                                    stroke: [2,"rgb(0, 0, 0)","none"]
                                }]
                            },
                            {
                                id: 'radio7',
                                type: 'ellipse',
                                rect: ['35px', '431px', '21px', '21px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [4,"rgb(0, 0, 0)","solid"],
                                c: [
                                {
                                    id: 'inside7',
                                    display: 'none',
                                    type: 'ellipse',
                                    rect: ['3px', '3px', '15px', '15px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(0,0,0,0.99)"],
                                    stroke: [2,"rgb(0, 0, 0)","none"]
                                }]
                            },
                            {
                                id: 'radio8',
                                type: 'ellipse',
                                rect: ['35px', '489px', '21px', '21px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [4,"rgb(0, 0, 0)","solid"],
                                c: [
                                {
                                    id: 'inside8',
                                    display: 'none',
                                    type: 'ellipse',
                                    rect: ['3px', '3px', '15px', '15px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(0,0,0,0.99)"],
                                    stroke: [2,"rgb(0, 0, 0)","none"]
                                }]
                            },
                            {
                                id: 'beginButton',
                                symbolName: 'beginButton',
                                type: 'rect',
                                rect: ['140px', '547px', '200px', '50px', 'auto', 'auto']
                            }]
                        },
                        {
                            id: 'settingsInput',
                            type: 'rect',
                            rect: ['548px', '260px', '500px', '610px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            boxShadow: ["", 0, 0, 10, 2, "rgba(0,0,0,0.65098)"],
                            c: [
                            {
                                id: 'nextButton',
                                type: 'rect',
                                rect: ['239px', '490px', '242px', '109px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.01)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                c: [
                                {
                                    id: 'rightarrow3',
                                    type: 'image',
                                    rect: ['15px', '0px', '241px', '120px', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    fill: ["rgba(0,0,0,0)",im+"rightarrow.png",'0px','0px']
                                },
                                {
                                    id: 'Text2',
                                    type: 'text',
                                    rect: ['32px', '35px', '157px', '40px', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 35px;\">Continue</span></p>",
                                    align: "center",
                                    font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', [35, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "35px", "", "none"]
                                }]
                            },
                            {
                                id: 'chancesInput',
                                type: 'rect',
                                rect: ['340px', '60px', '141px', '66px', 'auto', 'auto'],
                                fill: ["rgba(247,239,239,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                boxShadow: ["inset", -1, -1, 6, 0, "rgba(0,0,0,0.65098)"]
                            },
                            {
                                id: 'Text3',
                                type: 'text',
                                rect: ['11px', '69px', '338px', '74px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Number of chances:</p>",
                                align: "center",
                                font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', [35, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'timeInput',
                                type: 'rect',
                                rect: ['340px', '170px', '141px', '66px', 'auto', 'auto'],
                                fill: ["rgba(247,239,239,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                boxShadow: ["inset", -1, -1, 6, 0, "rgba(0,0,0,0.65098)"]
                            },
                            {
                                id: 'Text3Copy',
                                type: 'text',
                                rect: ['11px', '179px', '338px', '74px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Set Time Limit &nbsp; &nbsp; &nbsp;:</p>",
                                align: "center",
                                font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', [35, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Text3Copy4',
                                type: 'text',
                                rect: ['9px', '324px', '338px', '74px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Use Submit Button :</p>",
                                align: "center",
                                font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', [35, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Text3Copy2',
                                type: 'text',
                                rect: ['324px', '302px', '125px', '40px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Yes</p>",
                                align: "center",
                                font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', [35, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Text3Copy3',
                                type: 'text',
                                rect: ['324px', '352px', '125px', '40px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​No</p>",
                                align: "center",
                                font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', [35, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'submitNo',
                                type: 'ellipse',
                                rect: ['428px', '361px', '21px', '21px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [4,"rgb(0, 0, 0)","solid"],
                                c: [
                                {
                                    id: 'insideSubmitNo',
                                    display: 'block',
                                    type: 'ellipse',
                                    rect: ['3px', '3px', '15px', '15px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(0,0,0,0.99)"],
                                    stroke: [2,"rgb(0, 0, 0)","none"]
                                }]
                            },
                            {
                                id: 'submitYes',
                                type: 'ellipse',
                                rect: ['428px', '310px', '21px', '21px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [4,"rgb(0, 0, 0)","solid"],
                                c: [
                                {
                                    id: 'insideSubmitYes',
                                    display: 'none',
                                    type: 'ellipse',
                                    rect: ['3px', '3px', '15px', '15px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(0,0,0,0.99)"],
                                    stroke: [2,"rgb(0, 0, 0)","none"]
                                }]
                            }]
                        },
                        {
                            id: 'namesInput',
                            type: 'rect',
                            rect: ['548px', '260px', '500px', '610px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            boxShadow: ["", 0, 0, 10, 2, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'loadButton',
                            symbolName: 'loadButton',
                            type: 'rect',
                            rect: ['689px', '806px', '200px', '50px', 'auto', 'auto']
                        },
                        {
                            id: 'answerBox',
                            type: 'rect',
                            rect: ['538px', '25px', '512px', '200px', 'auto', 'auto'],
                            fill: ["rgba(227,227,227,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            boxShadow: ["inset", -2, -2, 8, 2, "rgba(0,0,0,0.54)"]
                        },
                        {
                            id: 'answerBoxCopy',
                            display: 'block',
                            type: 'rect',
                            rect: ['582px', '35px', '417px', '177px', 'auto', 'auto'],
                            fill: ["rgba(227,227,227,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'rulesLeft2',
                            display: 'none',
                            type: 'rect',
                            rect: ['50px', '324px', '425px', '550px', 'auto', 'auto'],
                            fill: ["rgba(246,240,199,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            boxShadow: ["inset", -2, -2, 8, 2, "rgba(0,0,0,0.65098)"],
                            c: [
                            {
                                id: 'rulesLeft',
                                display: 'block',
                                type: 'rect',
                                rect: ['40px', '90px', '385px', '459px', 'auto', 'auto'],
                                fill: ["rgba(246,240,199,0.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'rulesLeftHead',
                                display: 'block',
                                type: 'rect',
                                rect: ['0px', '0px', '425px', '80px', 'auto', 'auto'],
                                fill: ["rgba(246,240,199,0.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: 'rulesRight2',
                            display: 'none',
                            type: 'rect',
                            rect: ['1112px', '324px', '425px', '550px', 'auto', 'auto'],
                            fill: ["rgba(246,240,199,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            boxShadow: ["inset", -2, -2, 8, 2, "rgba(0,0,0,0.65098)"],
                            c: [
                            {
                                id: 'rulesRight',
                                display: 'block',
                                type: 'rect',
                                rect: ['40px', '90px', '385px', '460px', 'auto', 'auto'],
                                fill: ["rgba(246,240,199,0.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'rulesRightHead',
                                display: 'block',
                                type: 'rect',
                                rect: ['0px', '1px', '425px', '80px', 'auto', 'auto'],
                                fill: ["rgba(246,240,199,0.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: 'rightarrow',
                            display: 'none',
                            type: 'image',
                            rect: ['137px', '725px', '275px', '120px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"rightarrow.png",'0px','0px']
                        },
                        {
                            id: 'leftarrow',
                            display: 'none',
                            type: 'image',
                            rect: ['1115px', '40px', '200px', '120px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"leftarrow.png",'0px','0px']
                        },
                        {
                            id: 'leftarrow2',
                            display: 'none',
                            type: 'image',
                            rect: ['1187px', '725px', '275px', '120px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"leftarrow.png",'0px','0px']
                        },
                        {
                            id: 'rightarrow2',
                            display: 'none',
                            type: 'image',
                            rect: ['285px', '40px', '200px', '120px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"rightarrow.png",'0px','0px']
                        },
                        {
                            id: 'winnerBox',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '1600px', '900px', 'auto', 'auto'],
                            fill: ["rgba(228,244,213,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            c: [
                            {
                                id: 'winnerBoxText',
                                display: 'block',
                                type: 'rect',
                                rect: ['0px', '83px', '1600px', '817px', 'auto', 'auto'],
                                fill: ["rgba(228,244,213,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: 'hideThree',
                            display: 'none',
                            type: 'rect',
                            rect: ['567px', '508px', '331px', '43px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,0.56)"],
                            stroke: [4,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'hideSix',
                            display: 'none',
                            type: 'rect',
                            rect: ['567px', '625px', '331px', '43px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,0.56)"],
                            stroke: [4,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'hideNine',
                            display: 'none',
                            type: 'rect',
                            rect: ['567px', '740px', '331px', '43px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,0.56)"],
                            stroke: [4,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', '0px', '1600px', '900px', 'auto', 'auto'],
                            sizeRange: ['600px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(46,103,177,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 200,
                    autoPlay: false,
                    data: [
                        [
                            "eid219",
                            "display",
                            0,
                            0,
                            "linear",
                            "${rulesRightHead}",
                            'block',
                            'block'
                        ],
                        [
                            "eid165",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number49}",
                            '450px',
                            '450px'
                        ],
                        [
                            "eid162",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number2}",
                            '100px',
                            '100px'
                        ],
                        [
                            "eid114",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number50}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid167",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number47}",
                            '450px',
                            '450px'
                        ],
                        [
                            "eid143",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number21}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid217",
                            "display",
                            0,
                            0,
                            "linear",
                            "${leftarrow}",
                            'none',
                            'none'
                        ],
                        [
                            "eid104",
                            "top",
                            0,
                            0,
                            "linear",
                            "${answerBoxCopy}",
                            '35px',
                            '35px'
                        ],
                        [
                            "eid189",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number25}",
                            '200px',
                            '200px'
                        ],
                        [
                            "eid190",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number24}",
                            '200px',
                            '200px'
                        ],
                        [
                            "eid206",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number8}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid125",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number39}",
                            '300px',
                            '300px'
                        ],
                        [
                            "eid178",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number36}",
                            '350px',
                            '350px'
                        ],
                        [
                            "eid186",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number28}",
                            '250px',
                            '250px'
                        ],
                        [
                            "eid154",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number10}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid102",
                            "display",
                            0,
                            0,
                            "linear",
                            "${answerBoxCopy}",
                            'block',
                            'block'
                        ],
                        [
                            "eid172",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number42}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid184",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number30}",
                            '250px',
                            '250px'
                        ],
                        [
                            "eid241",
                            "display",
                            0,
                            0,
                            "linear",
                            "${backspace}",
                            'none',
                            'none'
                        ],
                        [
                            "eid161",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number3}",
                            '200px',
                            '200px'
                        ],
                        [
                            "eid179",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number35}",
                            '300px',
                            '300px'
                        ],
                        [
                            "eid194",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number20}",
                            '150px',
                            '150px'
                        ],
                        [
                            "eid228",
                            "display",
                            0,
                            0,
                            "linear",
                            "${winnerBox}",
                            'none',
                            'none'
                        ],
                        [
                            "eid205",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number9}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid174",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number40}",
                            '350px',
                            '350px'
                        ],
                        [
                            "eid118",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number46}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid119",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number45}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid237",
                            "display",
                            0,
                            0,
                            "linear",
                            "${numpad1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid224",
                            "display",
                            0,
                            0,
                            "linear",
                            "${rulesRight2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid132",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number32}",
                            '100px',
                            '100px'
                        ],
                        [
                            "eid113",
                            "display",
                            0,
                            0,
                            "linear",
                            "${inside8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid185",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number29}",
                            '250px',
                            '250px'
                        ],
                        [
                            "eid129",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number35}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid136",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number28}",
                            '200px',
                            '200px'
                        ],
                        [
                            "eid151",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number13}",
                            '200px',
                            '200px'
                        ],
                        [
                            "eid166",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number48}",
                            '450px',
                            '450px'
                        ],
                        [
                            "eid135",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number29}",
                            '300px',
                            '300px'
                        ],
                        [
                            "eid229",
                            "display",
                            0,
                            0,
                            "linear",
                            "${hideSix}",
                            'none',
                            'none'
                        ],
                        [
                            "eid131",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number33}",
                            '200px',
                            '200px'
                        ],
                        [
                            "eid192",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number22}",
                            '200px',
                            '200px'
                        ],
                        [
                            "eid150",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number14}",
                            '300px',
                            '300px'
                        ],
                        [
                            "eid121",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number43}",
                            '200px',
                            '200px'
                        ],
                        [
                            "eid117",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number47}",
                            '100px',
                            '100px'
                        ],
                        [
                            "eid127",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number37}",
                            '100px',
                            '100px'
                        ],
                        [
                            "eid188",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number26}",
                            '250px',
                            '250px'
                        ],
                        [
                            "eid120",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number44}",
                            '300px',
                            '300px'
                        ],
                        [
                            "eid137",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number27}",
                            '100px',
                            '100px'
                        ],
                        [
                            "eid197",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number17}",
                            '150px',
                            '150px'
                        ],
                        [
                            "eid196",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number18}",
                            '150px',
                            '150px'
                        ],
                        [
                            "eid200",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number14}",
                            '100px',
                            '100px'
                        ],
                        [
                            "eid211",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid208",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number6}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid182",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number32}",
                            '300px',
                            '300px'
                        ],
                        [
                            "eid145",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number19}",
                            '300px',
                            '300px'
                        ],
                        [
                            "eid225",
                            "display",
                            0,
                            0,
                            "linear",
                            "${rulesLeft2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid173",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number41}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid141",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number23}",
                            '200px',
                            '200px'
                        ],
                        [
                            "eid191",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number23}",
                            '200px',
                            '200px'
                        ],
                        [
                            "eid242",
                            "display",
                            0,
                            0,
                            "linear",
                            "${enterbutton}",
                            'none',
                            'none'
                        ],
                        [
                            "eid209",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number5}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid170",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number44}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid149",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number15}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid123",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number41}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid202",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number12}",
                            '100px',
                            '100px'
                        ],
                        [
                            "eid187",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number27}",
                            '250px',
                            '250px'
                        ],
                        [
                            "eid139",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number25}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid101",
                            "display",
                            0,
                            0,
                            "linear",
                            "${parameterBox}",
                            'block',
                            'block'
                        ],
                        [
                            "eid231",
                            "display",
                            0,
                            0,
                            "linear",
                            "${hideThree}",
                            'none',
                            'none'
                        ],
                        [
                            "eid203",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number11}",
                            '100px',
                            '100px'
                        ],
                        [
                            "eid157",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number7}",
                            '100px',
                            '100px'
                        ],
                        [
                            "eid138",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number26}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid156",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number8}",
                            '200px',
                            '200px'
                        ],
                        [
                            "eid111",
                            "display",
                            0,
                            0,
                            "linear",
                            "${inside6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid204",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number10}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid214",
                            "display",
                            0,
                            0,
                            "linear",
                            "${rightarrow2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid199",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number15}",
                            '100px',
                            '100px'
                        ],
                        [
                            "eid115",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number49}",
                            '300px',
                            '300px'
                        ],
                        [
                            "eid146",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number18}",
                            '200px',
                            '200px'
                        ],
                        [
                            "eid122",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number42}",
                            '100px',
                            '100px'
                        ],
                        [
                            "eid158",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number6}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid177",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number37}",
                            '350px',
                            '350px'
                        ],
                        [
                            "eid109",
                            "display",
                            0,
                            0,
                            "linear",
                            "${inside4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid181",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number33}",
                            '300px',
                            '300px'
                        ],
                        [
                            "eid183",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number31}",
                            '300px',
                            '300px'
                        ],
                        [
                            "eid144",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number20}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid240",
                            "display",
                            0,
                            0,
                            "linear",
                            "${enterbuttonCopy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid215",
                            "display",
                            0,
                            0,
                            "linear",
                            "${rightarrow}",
                            'none',
                            'none'
                        ],
                        [
                            "eid155",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number9}",
                            '300px',
                            '300px'
                        ],
                        [
                            "eid159",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number5}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid220",
                            "display",
                            0,
                            0,
                            "linear",
                            "${rulesLeftHead}",
                            'block',
                            'block'
                        ],
                        [
                            "eid110",
                            "display",
                            0,
                            0,
                            "linear",
                            "${inside5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid103",
                            "left",
                            0,
                            0,
                            "linear",
                            "${answerBoxCopy}",
                            '582px',
                            '582px'
                        ],
                        [
                            "eid108",
                            "display",
                            0,
                            0,
                            "linear",
                            "${inside3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid216",
                            "display",
                            0,
                            0,
                            "linear",
                            "${leftarrow2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid238",
                            "display",
                            0,
                            0,
                            "linear",
                            "${insideSubmitNo}",
                            'block',
                            'block'
                        ],
                        [
                            "eid218",
                            "display",
                            0,
                            0,
                            "linear",
                            "${rulesRight}",
                            'block',
                            'block'
                        ],
                        [
                            "eid148",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number16}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid176",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number38}",
                            '350px',
                            '350px'
                        ],
                        [
                            "eid134",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number30}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid180",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number34}",
                            '300px',
                            '300px'
                        ],
                        [
                            "eid168",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number46}",
                            '450px',
                            '450px'
                        ],
                        [
                            "eid232",
                            "display",
                            0,
                            0,
                            "linear",
                            "${hideNine}",
                            'none',
                            'none'
                        ],
                        [
                            "eid116",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number48}",
                            '200px',
                            '200px'
                        ],
                        [
                            "eid207",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number7}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid164",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number50}",
                            '450px',
                            '450px'
                        ],
                        [
                            "eid193",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number21}",
                            '200px',
                            '200px'
                        ],
                        [
                            "eid171",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number43}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid130",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number34}",
                            '300px',
                            '300px'
                        ],
                        [
                            "eid160",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number4}",
                            '300px',
                            '300px'
                        ],
                        [
                            "eid140",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number24}",
                            '300px',
                            '300px'
                        ],
                        [
                            "eid126",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number38}",
                            '200px',
                            '200px'
                        ],
                        [
                            "eid210",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number4}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid213",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid212",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid201",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number13}",
                            '100px',
                            '100px'
                        ],
                        [
                            "eid163",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid105",
                            "display",
                            0,
                            0,
                            "linear",
                            "${inside0}",
                            'none',
                            'none'
                        ],
                        [
                            "eid124",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number40}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid153",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number11}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid107",
                            "display",
                            0,
                            0,
                            "linear",
                            "${inside2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid106",
                            "display",
                            0,
                            0,
                            "linear",
                            "${inside1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid236",
                            "display",
                            0,
                            0,
                            "linear",
                            "${numpad2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid195",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number19}",
                            '150px',
                            '150px'
                        ],
                        [
                            "eid152",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number12}",
                            '100px',
                            '100px'
                        ],
                        [
                            "eid198",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number16}",
                            '150px',
                            '150px'
                        ],
                        [
                            "eid147",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number17}",
                            '100px',
                            '100px'
                        ],
                        [
                            "eid169",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number45}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid128",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number36}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid175",
                            "top",
                            0,
                            0,
                            "linear",
                            "${number39}",
                            '350px',
                            '350px'
                        ],
                        [
                            "eid239",
                            "display",
                            0,
                            0,
                            "linear",
                            "${backspaceCopy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid221",
                            "display",
                            0,
                            0,
                            "linear",
                            "${rulesLeft}",
                            'block',
                            'block'
                        ],
                        [
                            "eid142",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number22}",
                            '100px',
                            '100px'
                        ],
                        [
                            "eid133",
                            "left",
                            0,
                            0,
                            "linear",
                            "${number31}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid112",
                            "display",
                            0,
                            0,
                            "linear",
                            "${inside7}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "beginButton": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                            cursor: 'pointer',
                            rect: ['0px', '0px', '198px', '48px', 'auto', 'auto'],
                            boxShadow: ['inset', 0, -2, 3, 0, 'rgba(0,0,0,0.65098)'],
                            fill: ['rgba(249,247,245,1)', [98, [['rgba(255,255,255,1.00)', 0], ['rgba(82,108,166,1.00)', 100]]]],
                            c: [
                            {
                                rect: ['36px', '4px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '40px', '', ''],
                                id: 'Text',
                                text: '<p style=\"margin:0px\">​BEGIN</p>',
                                font: ['walter-turncoat, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '200px', '50px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid249",
                            "boxShadow.offsetH",
                            0,
                            500,
                            "easeInOutQuart",
                            "${RoundRect}",
                            '-2px',
                            '0px'
                        ],
                        [
                            "eid250",
                            "boxShadow.offsetV",
                            0,
                            500,
                            "easeInOutQuart",
                            "${RoundRect}",
                            '-2px',
                            '0px'
                        ],
                        [
                            "eid248",
                            "background-image",
                            0,
                            500,
                            "easeInOutQuart",
                            "${RoundRect}",
                            [98,[['rgba(255,255,255,1.00)',0],['rgba(82,108,166,1.00)',100]]],
                            [105,[['rgba(82,108,166,1.00)',0],['rgba(255,255,255,1.00)',100]]]
                        ]
                    ]
                }
            },
            "loadButton": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                            cursor: 'pointer',
                            rect: ['0px', '0px', '198px', '48px', 'auto', 'auto'],
                            fill: ['rgba(249,247,245,1)', [98, [['rgba(255,255,255,1.00)', 0], ['rgba(82,108,166,1.00)', 100]]]],
                            boxShadow: ['inset', 0, -2, 3, 0, 'rgba(0,0,0,0.65098)'],
                            c: [
                            {
                                type: 'text',
                                rect: ['5px', '6px', '188px', '36px', 'auto', 'auto'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px; line-height: 32px;\">​<span style=\"font-size: 32px;\">Load Names</span></p>',
                                font: ['walter-turncoat, sans-serif', [35, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', ''],
                                textStyle: ['', '', '0px', '', '']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, '200px', '50px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid249",
                            "boxShadow.offsetH",
                            0,
                            500,
                            "easeInOutQuart",
                            "${RoundRect}",
                            '-2px',
                            '0px'
                        ],
                        [
                            "eid250",
                            "boxShadow.offsetV",
                            0,
                            500,
                            "easeInOutQuart",
                            "${RoundRect}",
                            '-2px',
                            '0px'
                        ],
                        [
                            "eid248",
                            "background-image",
                            0,
                            500,
                            "easeInOutQuart",
                            "${RoundRect}",
                            [98,[['rgba(255,255,255,1.00)',0],['rgba(82,108,166,1.00)',100]]],
                            [105,[['rgba(82,108,166,1.00)',0],['rgba(255,255,255,1.00)',100]]]
                        ]
                    ]
                }
            },
            "button9": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            borderRadius: ['9px', '9px', '9px', '9px 9px'],
                            id: 'Rectangle9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['2px', '-2px', '125px', '125px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)'],
                            boxShadow: ['', 2, -2, 6, 1, 'rgba(0,0,0,0.65098)'],
                            c: [
                            {
                                type: 'text',
                                rect: ['0px', '0px', '125px', '125px', 'auto', 'auto'],
                                id: 'Text9',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 125px;\">9</span></p>',
                                font: ['Trebuchet MS, Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                textStyle: ['', '', '125px', '', '']
                            },
                            {
                                rect: ['0px', '0px', '125px', '125px', 'auto', 'auto'],
                                borderRadius: ['9px', '9px', '9px', '9px 9px'],
                                fill: ['rgba(255,255,255,0.00)'],
                                id: 'box9',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                boxShadow: ['inset', 0, 0, 6, 2, 'rgba(0,0,0,0.55)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '125px', '125px']
                        }
                    }
                },
                timeline: {
                    duration: 100,
                    autoPlay: true,
                    data: [
                        [
                            "eid92",
                            "top",
                            0,
                            100,
                            "linear",
                            "${Rectangle9}",
                            '0px',
                            '-2px'
                        ],
                        [
                            "eid91",
                            "left",
                            0,
                            100,
                            "linear",
                            "${Rectangle9}",
                            '0px',
                            '2px'
                        ]
                    ]
                }
            },
            "button8": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            borderRadius: ['8px', '8px', '8px', '8px 8px'],
                            id: 'Rectangle8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['2px', '-2px', '125px', '125px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)'],
                            boxShadow: ['', 2, -2, 6, 1, 'rgba(0,0,0,0.65098)'],
                            c: [
                            {
                                type: 'text',
                                rect: ['0px', '0px', '125px', '125px', 'auto', 'auto'],
                                id: 'Text8',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 125px;\">8</span></p>',
                                font: ['Trebuchet MS, Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                textStyle: ['', '', '125px', '', '']
                            },
                            {
                                rect: ['0px', '0px', '125px', '125px', 'auto', 'auto'],
                                borderRadius: ['8px', '8px', '8px', '8px 8px'],
                                fill: ['rgba(255,255,255,0.00)'],
                                id: 'box8',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                boxShadow: ['inset', 0, 0, 6, 2, 'rgba(0,0,0,0.55)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '125px', '125px']
                        }
                    }
                },
                timeline: {
                    duration: 100,
                    autoPlay: true,
                    data: [
                        [
                            "eid93",
                            "left",
                            0,
                            100,
                            "linear",
                            "${Rectangle8}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid94",
                            "top",
                            0,
                            100,
                            "linear",
                            "${Rectangle8}",
                            '0px',
                            '-2px'
                        ]
                    ]
                }
            },
            "button7": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            borderRadius: ['8px', '8px', '8px', '8px 8px'],
                            id: 'Rectangle7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['2px', '-2px', '125px', '125px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)'],
                            boxShadow: ['', 2, -2, 6, 1, 'rgba(0,0,0,0.65098)'],
                            c: [
                            {
                                type: 'text',
                                rect: ['0px', '0px', '125px', '125px', 'auto', 'auto'],
                                id: 'Text7',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 125px;\">7</span></p>',
                                font: ['Trebuchet MS, Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                textStyle: ['', '', '125px', '', '']
                            },
                            {
                                rect: ['0px', '0px', '125px', '125px', 'auto', 'auto'],
                                borderRadius: ['8px', '8px', '8px', '8px 8px'],
                                fill: ['rgba(255,255,255,0.00)'],
                                id: 'box7',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                boxShadow: ['inset', 0, 0, 6, 2, 'rgba(0,0,0,0.55)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '125px', '125px']
                        }
                    }
                },
                timeline: {
                    duration: 100,
                    autoPlay: true,
                    data: [
                        [
                            "eid95",
                            "left",
                            0,
                            100,
                            "linear",
                            "${Rectangle7}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid96",
                            "top",
                            0,
                            100,
                            "linear",
                            "${Rectangle7}",
                            '0px',
                            '-2px'
                        ]
                    ]
                }
            },
            "button6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            borderRadius: ['8px', '8px', '8px', '8px 8px'],
                            id: 'Rectangle6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['2px', '-2px', '125px', '125px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)'],
                            boxShadow: ['', 2, -2, 6, 1, 'rgba(0,0,0,0.65098)'],
                            c: [
                            {
                                type: 'text',
                                rect: ['0px', '0px', '125px', '125px', 'auto', 'auto'],
                                id: 'Text6',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 125px;\">6</span></p>',
                                font: ['Trebuchet MS, Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                textStyle: ['', '', '125px', '', '']
                            },
                            {
                                rect: ['0px', '0px', '125px', '125px', 'auto', 'auto'],
                                borderRadius: ['8px', '8px', '8px', '8px 8px'],
                                fill: ['rgba(255,255,255,0.00)'],
                                id: 'box6',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                boxShadow: ['inset', 0, 0, 6, 2, 'rgba(0,0,0,0.55)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '125px', '125px']
                        }
                    }
                },
                timeline: {
                    duration: 100,
                    autoPlay: true,
                    data: [
                        [
                            "eid98",
                            "left",
                            0,
                            100,
                            "linear",
                            "${Rectangle6}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid97",
                            "top",
                            0,
                            100,
                            "linear",
                            "${Rectangle6}",
                            '0px',
                            '-2px'
                        ]
                    ]
                }
            },
            "button5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            borderRadius: ['8px', '8px', '8px', '8px 8px'],
                            id: 'Rectangle5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['2px', '-2px', '125px', '125px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)'],
                            boxShadow: ['', 2, -2, 6, 1, 'rgba(0,0,0,0.65098)'],
                            c: [
                            {
                                type: 'text',
                                rect: ['0px', '0px', '125px', '125px', 'auto', 'auto'],
                                id: 'Text5',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 125px;\">5</span></p>',
                                font: ['Trebuchet MS, Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                textStyle: ['', '', '125px', '', '']
                            },
                            {
                                rect: ['0px', '0px', '125px', '125px', 'auto', 'auto'],
                                borderRadius: ['8px', '8px', '8px', '8px 8px'],
                                fill: ['rgba(255,255,255,0.00)'],
                                id: 'box5',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                boxShadow: ['inset', 0, 0, 6, 2, 'rgba(0,0,0,0.55)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '125px', '125px']
                        }
                    }
                },
                timeline: {
                    duration: 100,
                    autoPlay: true,
                    data: [
                        [
                            "eid99",
                            "left",
                            0,
                            100,
                            "linear",
                            "${Rectangle5}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid100",
                            "top",
                            0,
                            100,
                            "linear",
                            "${Rectangle5}",
                            '0px',
                            '-2px'
                        ]
                    ]
                }
            },
            "button4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            borderRadius: ['8px', '8px', '8px', '8px 8px'],
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['2px', '-2px', '125px', '125px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)'],
                            boxShadow: ['', 2, -2, 6, 1, 'rgba(0,0,0,0.65098)'],
                            c: [
                            {
                                type: 'text',
                                rect: ['0px', '0px', '125px', '125px', 'auto', 'auto'],
                                id: 'Text4',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 125px;\">4</span></p>',
                                font: ['Trebuchet MS, Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                textStyle: ['', '', '125px', '', '']
                            },
                            {
                                rect: ['0px', '0px', '125px', '125px', 'auto', 'auto'],
                                borderRadius: ['8px', '8px', '8px', '8px 8px'],
                                fill: ['rgba(255,255,255,0.00)'],
                                id: 'box4',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                boxShadow: ['inset', 0, 0, 6, 2, 'rgba(0,0,0,0.55)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '125px', '125px']
                        }
                    }
                },
                timeline: {
                    duration: 100,
                    autoPlay: true,
                    data: [
                        [
                            "eid78",
                            "left",
                            0,
                            100,
                            "linear",
                            "${Rectangle4}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid77",
                            "top",
                            0,
                            100,
                            "linear",
                            "${Rectangle4}",
                            '0px',
                            '-2px'
                        ]
                    ]
                }
            },
            "button3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            borderRadius: ['8px', '8px', '8px', '8px 8px'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['2px', '-2px', '125px', '125px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)'],
                            boxShadow: ['', 2, -2, 6, 1, 'rgba(0,0,0,0.65098)'],
                            c: [
                            {
                                type: 'text',
                                rect: ['0px', '0px', '125px', '125px', 'auto', 'auto'],
                                id: 'Text3',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 125px;\">3</span></p>',
                                font: ['Trebuchet MS, Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                textStyle: ['', '', '125px', '', '']
                            },
                            {
                                rect: ['0px', '0px', '125px', '125px', 'auto', 'auto'],
                                borderRadius: ['8px', '8px', '8px', '8px 8px'],
                                fill: ['rgba(255,255,255,0.00)'],
                                id: 'box3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                boxShadow: ['inset', 0, 0, 6, 2, 'rgba(0,0,0,0.55)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '125px', '125px']
                        }
                    }
                },
                timeline: {
                    duration: 100,
                    autoPlay: true,
                    data: [
                        [
                            "eid69",
                            "left",
                            0,
                            100,
                            "linear",
                            "${Rectangle3}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid70",
                            "top",
                            0,
                            100,
                            "linear",
                            "${Rectangle3}",
                            '0px',
                            '-2px'
                        ]
                    ]
                }
            },
            "button2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            borderRadius: ['8px', '8px', '8px', '8px 8px'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['2px', '-2px', '125px', '125px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)'],
                            boxShadow: ['', 2, -2, 6, 1, 'rgba(0,0,0,0.65098)'],
                            c: [
                            {
                                type: 'text',
                                rect: ['0px', '0px', '125px', '125px', 'auto', 'auto'],
                                id: 'Text2',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 125px;\">2</span></p>',
                                font: ['Trebuchet MS, Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                textStyle: ['', '', '125px', '', '']
                            },
                            {
                                rect: ['0px', '0px', '125px', '125px', 'auto', 'auto'],
                                borderRadius: ['8px', '8px', '8px', '8px 8px'],
                                fill: ['rgba(255,255,255,0.00)'],
                                id: 'box2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                boxShadow: ['inset', 0, 0, 6, 2, 'rgba(0,0,0,0.55)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '125px', '125px']
                        }
                    }
                },
                timeline: {
                    duration: 100,
                    autoPlay: true,
                    data: [
                        [
                            "eid67",
                            "top",
                            0,
                            100,
                            "linear",
                            "${Rectangle2}",
                            '0px',
                            '-2px'
                        ],
                        [
                            "eid68",
                            "left",
                            0,
                            100,
                            "linear",
                            "${Rectangle2}",
                            '0px',
                            '2px'
                        ]
                    ]
                }
            },
            "button1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            borderRadius: ['8px', '8px', '8px', '8px 8px'],
                            id: 'Rectangle1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['2px', '0px', '125px', '125px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)'],
                            boxShadow: ['', 2, -2, 6, 1, 'rgba(0,0,0,0.65098)'],
                            c: [
                            {
                                type: 'text',
                                rect: ['0px', '0px', '125px', '125px', 'auto', 'auto'],
                                id: 'Text1',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 125px;\">1</span></p>',
                                font: ['Trebuchet MS, Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                textStyle: ['', '', '125px', '', '']
                            },
                            {
                                rect: ['0px', '0px', '125px', '125px', 'auto', 'auto'],
                                borderRadius: ['8px', '8px', '8px', '8px 8px'],
                                fill: ['rgba(255,255,255,0.00)'],
                                id: 'box1',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                boxShadow: ['inset', 0, 0, 6, 2, 'rgba(0,0,0,0.55)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '125px', '125px']
                        }
                    }
                },
                timeline: {
                    duration: 100,
                    autoPlay: true,
                    data: [
                        [
                            "eid51",
                            "left",
                            0,
                            100,
                            "linear",
                            "${Rectangle1}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid58",
                            "top",
                            0,
                            100,
                            "linear",
                            "${Rectangle1}",
                            '0px',
                            '-2px'
                        ]
                    ]
                }
            },
            "button0": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            borderRadius: ['8px', '8px', '8px', '8px 8px'],
                            id: 'Rectangle0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '-2px', '125px', '125px', 'auto', 'auto'],
                            boxShadow: ['', 2, -2, 6, 1, 'rgba(0,0,0,0.46)'],
                            fill: ['rgba(255,255,255,1.00)'],
                            c: [
                            {
                                rect: ['5px', '5px', '115px', '115px', 'auto', 'auto'],
                                font: ['Trebuchet MS, Arial, Helvetica, sans-serif', [125, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 125px;\">0</span></p>',
                                id: 'Text0',
                                textStyle: ['', '', '125px', '', ''],
                                align: 'center',
                                type: 'text'
                            },
                            {
                                rect: ['0px', '0px', '125px', '125px', 'auto', 'auto'],
                                borderRadius: ['8px', '8px', '8px', '8px 8px'],
                                boxShadow: ['inset', 0, 0, 6, 2, 'rgba(0,0,0,0.55)'],
                                id: 'box0',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,255,255,0.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, '130px', '130px']
                        }
                    }
                },
                timeline: {
                    duration: 200,
                    autoPlay: true,
                    data: [
                        [
                            "eid9",
                            "left",
                            0,
                            100,
                            "linear",
                            "${Rectangle0}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid245",
                            "left",
                            100,
                            100,
                            "linear",
                            "${Rectangle0}",
                            '2px',
                            '0px'
                        ],
                        [
                            "eid10",
                            "top",
                            0,
                            100,
                            "linear",
                            "${Rectangle0}",
                            '0px',
                            '-2px'
                        ],
                        [
                            "eid246",
                            "top",
                            100,
                            100,
                            "linear",
                            "${Rectangle0}",
                            '-2px',
                            '0px'
                        ]
                    ]
                }
            },
            "enterbutton": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            borderRadius: ['8px', '8px', '8px', '8px 8px'],
                            id: 'Rectangle0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '-2px', '125px', '125px', 'auto', 'auto'],
                            fill: ['rgba(46,166,95,1.00)'],
                            boxShadow: ['', 2, -2, 6, 1, 'rgba(0,0,0,0.46)'],
                            c: [
                            {
                                type: 'text',
                                rect: ['4px', '4px', '115px', '115px', 'auto', 'auto'],
                                align: 'center',
                                id: 'Text0',
                                text: '<p style=\"margin: 0px; text-align: center; line-height: 115px;\">​<span style=\"font-size: 35px; text-transform: uppercase; font-weight: 800; color: rgb(253, 253, 253);\">ENTER</span></p>',
                                textStyle: ['', '', '30px', '', ''],
                                font: ['Trebuchet MS, Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                            },
                            {
                                rect: ['0px', '0px', '125px', '125px', 'auto', 'auto'],
                                borderRadius: ['8px', '8px', '8px', '8px 8px'],
                                fill: ['rgba(255,255,255,0.00)'],
                                id: 'box0',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                boxShadow: ['inset', 0, 0, 6, 2, 'rgba(0,0,0,0.55)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, '130px', '130px']
                        }
                    }
                },
                timeline: {
                    duration: 100,
                    autoPlay: true,
                    data: [
                        [
                            "eid9",
                            "left",
                            0,
                            100,
                            "linear",
                            "${Rectangle0}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid10",
                            "top",
                            0,
                            100,
                            "linear",
                            "${Rectangle0}",
                            '0px',
                            '-2px'
                        ]
                    ]
                }
            },
            "backspace": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            borderRadius: ['8px', '8px', '8px', '8px 8px'],
                            id: 'Rectangle0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '-2px', '125px', '125px', 'auto', 'auto'],
                            fill: ['rgba(207,55,55,1.00)'],
                            boxShadow: ['', 2, -2, 6, 1, 'rgba(0,0,0,0.46)'],
                            c: [
                            {
                                rect: ['7px', '8px', '112px', '110px', 'auto', 'auto'],
                                id: 'backspace2',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/backspace.png', '0px', '0px']
                            },
                            {
                                rect: ['0px', '0px', '125px', '125px', 'auto', 'auto'],
                                borderRadius: ['8px', '8px', '8px', '8px 8px'],
                                fill: ['rgba(255,255,255,0.00)'],
                                id: 'box0',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                boxShadow: ['inset', 0, 0, 6, 2, 'rgba(0,0,0,0.55)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, '130px', '130px']
                        }
                    }
                },
                timeline: {
                    duration: 100,
                    autoPlay: true,
                    data: [
                        [
                            "eid9",
                            "left",
                            0,
                            100,
                            "linear",
                            "${Rectangle0}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid10",
                            "top",
                            0,
                            100,
                            "linear",
                            "${Rectangle0}",
                            '0px',
                            '-2px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("skipGame_edgeActions.js");
})("EDGE-85584");
