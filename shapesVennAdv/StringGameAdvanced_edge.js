/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-1.7.1.min.js",
            js+"jquery-2.0.3.min.js",
            js+"jquery-ui-1.10.3.custom.min.js",
            js+"jquery.ui.touch-punch.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'lowerBackground',
                            type: 'rect',
                            rect: ['2px', '-1px', '125px', '713px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,0.38)"],
                            stroke: [4,"rgba(10,10,10,1.00)","solid"],
                            userClass: ""
                        },
                        {
                            id: 'outsideBorder',
                            type: 'rect',
                            rect: ['131px', '-1px', '924px', '713px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,0.00)"],
                            stroke: [4,"rgba(10,10,10,1.00)","solid"]
                        },
                        {
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['131px', '605px', '234px', '107px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"],
                            c: [
                            {
                                id: 'score',
                                type: 'text',
                                rect: ['37px', '23px', '165px', '82px', 'auto', 'auto'],
                                text: "100",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [94, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "88px", ""]
                            },
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['49px', '-2px', '154px', '27', 'auto', 'auto'],
                                text: "Your Score",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [28, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['1059px', '-1px', '212px', '713px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,0.3804)"],
                            stroke: [4,"rgba(3,3,3,1.00)","solid"]
                        },
                        {
                            id: 'blueDiv',
                            type: 'group',
                            rect: ['873px', '42px', '127px', '52', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Rectangle3Copy2',
                                type: 'rect',
                                rect: ['-742px', '361px', '145px', '198', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [4,"rgba(0,0,0,1.00)","solid"],
                                c: [
                                {
                                    id: 'TextCopy',
                                    type: 'text',
                                    rect: ['-8px', '0px', '157', '51', 'auto', 'auto'],
                                    text: "Moves",
                                    align: "center",
                                    font: ['Arial, Helvetica, sans-serif', [37, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                                },
                                {
                                    id: 'TextCopy2',
                                    type: 'text',
                                    rect: ['37', '46', '107', '39', 'auto', 'auto'],
                                    text: "Correct",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [28, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                                },
                                {
                                    id: 'TextCopy3',
                                    type: 'text',
                                    rect: ['19', '121', '114', '39', 'auto', 'auto'],
                                    text: "Incorrect",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [28, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                                },
                                {
                                    id: 'incorrectCount',
                                    type: 'text',
                                    rect: ['17', '143', '114', '57', 'auto', 'auto'],
                                    text: "0",
                                    align: "right",
                                    font: ['Arial, Helvetica, sans-serif', [51, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                                },
                                {
                                    id: 'correctCount',
                                    type: 'text',
                                    rect: ['17', '68', '114', '57', 'auto', 'auto'],
                                    text: "0",
                                    align: "right",
                                    font: ['Arial, Helvetica, sans-serif', [51, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                                }]
                            },
                            {
                                id: 'Rectangle3Copy3',
                                type: 'rect',
                                rect: ['34px', '472px', '148', '198', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [4,"rgba(0,0,0,1.00)","solid"],
                                c: [
                                {
                                    id: 'TextCopy6',
                                    type: 'text',
                                    rect: ['-7px', '0px', '157', '51', 'auto', 'auto'],
                                    text: "Labels",
                                    align: "center",
                                    font: ['Arial, Helvetica, sans-serif', [36, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                                },
                                {
                                    id: 'TextCopy5',
                                    type: 'text',
                                    rect: ['35', '46', '107', '39', 'auto', 'auto'],
                                    text: "Correct",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [28, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                                },
                                {
                                    id: 'TextCopy4',
                                    type: 'text',
                                    rect: ['18', '122', '114', '39', 'auto', 'auto'],
                                    text: "Incorrect",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [28, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                                },
                                {
                                    id: 'labelCount',
                                    type: 'text',
                                    rect: ['16', '143', '114', '57', 'auto', 'auto'],
                                    text: "0",
                                    align: "right",
                                    font: ['Arial, Helvetica, sans-serif', [51, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                                },
                                {
                                    id: 'stringCount',
                                    type: 'text',
                                    rect: ['16', '68', '114', '57', 'auto', 'auto'],
                                    text: "0",
                                    align: "right",
                                    font: ['Arial, Helvetica, sans-serif', [51, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                                }]
                            },
                            {
                                id: 'blueline',
                                type: 'rect',
                                rect: ['24px', '33px', '53', '3px', 'auto', 'auto'],
                                fill: ["rgba(47,0,253,1.00)"],
                                stroke: [0,"rgba(47,0,253,1.00)","none"],
                                transform: [[],['-39']]
                            },
                            {
                                id: 'bluechoice',
                                symbolName: 'bluechoice',
                                type: 'rect',
                                rect: ['6px', '1px', '114', '26', 'auto', 'auto']
                            }]
                        },
                        {
                            id: 'redDiv',
                            type: 'group',
                            rect: ['238px', '43px', '114', '51', 'auto', 'auto'],
                            c: [
                            {
                                id: 'redline',
                                type: 'rect',
                                rect: ['39px', '35px', '53', '3px', 'auto', 'auto'],
                                fill: ["rgba(244,8,8,1.00)"],
                                stroke: [0,"rgba(47,0,253,1.00)","none"],
                                transform: [[],['30']]
                            },
                            {
                                id: 'redchoice',
                                symbolName: 'redchoice',
                                type: 'rect',
                                rect: ['0px', '-1px', '114', '26', 'auto', 'auto']
                            }]
                        },
                        {
                            id: 'greenDiv',
                            type: 'group',
                            rect: ['736px', '653px', '114', '54', 'auto', 'auto'],
                            c: [
                            {
                                id: 'greenchoice',
                                symbolName: 'greenChoice',
                                type: 'rect',
                                rect: ['1px', '29px', 'undefined', 'undefined', 'auto', 'auto'],
                                transform: [[],[],[],['0.82456','0.80769']]
                            },
                            {
                                id: 'greenLine',
                                type: 'rect',
                                rect: ['2px', '13px', '53', '3px', 'auto', 'auto'],
                                fill: ["rgba(39,205,49,1.00)"],
                                stroke: [0,"rgb(47, 0, 253)","none"],
                                transform: [[],['30']]
                            },
                            {
                                id: 'greenLabel',
                                type: 'rect',
                                rect: ['0px', '28px', '114px', '26px', 'auto', 'auto'],
                                borderRadius: ["10px", "10px", "10px", "10px"],
                                fill: ["rgba(39,205,49,1.00)"],
                                stroke: [0,"rgb(47, 0, 253)","none"]
                            }]
                        },
                        {
                            id: 'blueString',
                            symbolName: 'blueString',
                            type: 'rect',
                            rect: ['471px', '12px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'redString',
                            symbolName: 'redString',
                            type: 'rect',
                            rect: ['261px', '11px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'greenString',
                            symbolName: 'greenString',
                            type: 'rect',
                            rect: ['366px', '191px', '500', '500', 'auto', 'auto']
                        },
                        {
                            id: 'pos105',
                            symbolName: 'pos105',
                            type: 'rect',
                            rect: ['80px', '681px', '40', '25', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'pos100',
                            symbolName: 'pos100',
                            type: 'rect',
                            rect: ['16px', '658px', '40', '25', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'pos99',
                            symbolName: 'pos99',
                            type: 'rect',
                            rect: ['80px', '635px', '40', '25', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'pos2',
                            symbolName: 'pos2',
                            type: 'rect',
                            rect: ['80px', '224px', '40', '25', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'pos3',
                            symbolName: 'pos3',
                            type: 'rect',
                            rect: ['16px', '247px', '40', '25', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'pos4',
                            symbolName: 'pos4',
                            type: 'rect',
                            rect: ['80px', '270px', '40', '25', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'pos5',
                            symbolName: 'pos5',
                            type: 'rect',
                            rect: ['16px', '293px', '40', '25', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'pos6',
                            symbolName: 'pos6',
                            type: 'rect',
                            rect: ['80px', '315px', '40', '25', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'pos7',
                            symbolName: 'pos7',
                            type: 'rect',
                            rect: ['16px', '338px', '40', '25', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'pos8',
                            symbolName: 'pos8',
                            type: 'rect',
                            rect: ['80px', '361px', '40', '25', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'pos9',
                            symbolName: 'pos9',
                            type: 'rect',
                            rect: ['16px', '384px', '40', '25', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'pos10',
                            symbolName: 'pos10',
                            type: 'rect',
                            rect: ['80px', '407px', '40', '25', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'pos20',
                            symbolName: 'pos20',
                            type: 'rect',
                            rect: ['16px', '475px', '40', '25', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'pos24',
                            symbolName: 'pos24',
                            type: 'rect',
                            rect: ['80px', '498px', '40', '25', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'pos27',
                            symbolName: 'pos27',
                            type: 'rect',
                            rect: ['16px', '521px', '40', '25', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'pos40',
                            symbolName: 'pos40',
                            type: 'rect',
                            rect: ['80px', '544px', '40', '25', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'pos45',
                            symbolName: 'pos45',
                            type: 'rect',
                            rect: ['16px', '567px', '40', '25', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'pos50',
                            symbolName: 'pos50',
                            type: 'rect',
                            rect: ['80px', '590px', '40', '25', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'pos60',
                            symbolName: 'pos60',
                            type: 'rect',
                            rect: ['16px', '612px', '40', '25', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'pos18',
                            symbolName: 'pos18',
                            type: 'rect',
                            rect: ['80px', '453px', '40', '25', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'pos12',
                            symbolName: 'pos12',
                            type: 'rect',
                            rect: ['16px', '430px', '40', '25', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'pos1',
                            symbolName: 'pos1',
                            type: 'rect',
                            rect: ['16px', '201px', '40', '25', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'zero',
                            symbolName: 'zero',
                            type: 'rect',
                            rect: ['80px', '178px', '40', '25', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'neg1',
                            symbolName: 'neg1',
                            type: 'rect',
                            rect: ['16px', '156px', '40', '25', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'neg5',
                            symbolName: 'neg5',
                            type: 'rect',
                            rect: ['79px', '133px', '41', '25', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'neg10',
                            symbolName: 'neg10',
                            type: 'rect',
                            rect: ['16px', '109px', '40', '26', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'neg15',
                            symbolName: 'neg15',
                            type: 'rect',
                            rect: ['80px', '87px', '40', '25', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'neg55',
                            symbolName: 'neg55',
                            type: 'rect',
                            rect: ['16px', '65px', '40', '24', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'neg80',
                            symbolName: 'neg80',
                            type: 'rect',
                            rect: ['80px', '42px', '40', '24', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'neg100',
                            symbolName: 'neg100',
                            type: 'rect',
                            rect: ['16px', '19px', '47', '24', 'auto', 'auto'],
                            cursor: 'pointer',
                            boxShadow: ["", 0, 0, 0, 0, "rgba(0,0,0,0)"]
                        },
                        {
                            id: 'xout',
                            symbolName: 'xout',
                            type: 'rect',
                            rect: ['-156px', '421px', '39', '39', 'auto', 'auto'],
                            transform: [[],[],[],[],['0%','0%']]
                        },
                        {
                            id: 'marker_15',
                            symbolName: 'marker_15',
                            type: 'rect',
                            rect: ['1212px', '684px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'marker_14',
                            symbolName: 'marker_14',
                            type: 'rect',
                            rect: ['1212px', '642px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'marker_13',
                            symbolName: 'marker_13',
                            type: 'rect',
                            rect: ['1212px', '597px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'marker_12',
                            symbolName: 'marker_12',
                            type: 'rect',
                            rect: ['1212px', '552px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'marker_11',
                            symbolName: 'marker_11',
                            type: 'rect',
                            rect: ['1212px', '508px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'marker_10',
                            symbolName: 'marker_10',
                            type: 'rect',
                            rect: ['1212px', '464px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'marker_9',
                            symbolName: 'marker_9',
                            type: 'rect',
                            rect: ['1212px', '420px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'marker_8',
                            symbolName: 'marker_8',
                            type: 'rect',
                            rect: ['1212px', '378px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'marker_7',
                            symbolName: 'marker_7',
                            type: 'rect',
                            rect: ['1212px', '333px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'marker_6',
                            symbolName: 'marker_6',
                            type: 'rect',
                            rect: ['1212px', '290px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'marker_5',
                            symbolName: 'marker_5',
                            type: 'rect',
                            rect: ['1212px', '244px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'marker_4',
                            symbolName: 'marker_4',
                            type: 'rect',
                            rect: ['1212px', '197px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'marker_3',
                            symbolName: 'marker_3',
                            type: 'rect',
                            rect: ['1212px', '152px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'marker_2',
                            symbolName: 'marker_2',
                            type: 'rect',
                            rect: ['1212px', '108px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'marker_1',
                            symbolName: 'marker_1',
                            type: 'rect',
                            rect: ['1212px', '63px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'marker_0',
                            symbolName: 'marker_0',
                            type: 'rect',
                            rect: ['1212px', '19px', '53', '12', 'auto', 'auto']
                        },
                        {
                            id: 'finalBackground',
                            display: 'none',
                            type: 'rect',
                            rect: ['3px', '-2px', '1280px', '722px', 'auto', 'auto'],
                            fill: ["rgba(218,251,234,1)"],
                            stroke: [4,"rgb(218, 251, 234)","none"]
                        },
                        {
                            id: 'testout',
                            display: 'none',
                            type: 'text',
                            rect: ['162px', '71px', '950', '214px', 'auto', 'auto'],
                            text: "Congratulations!!!<br>Your Final Score Is:",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [81, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "112px", ""]
                        },
                        {
                            id: 'finalScore',
                            display: 'none',
                            type: 'text',
                            rect: ['166px', '349px', '950', '245px', 'auto', 'auto'],
                            text: "",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [250, "px"], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "250px", ""]
                        },
                        {
                            id: 'testing',
                            type: 'text',
                            rect: ['484px', '331px', '559px', '135px', 'auto', 'auto'],
                            text: "",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [15, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'less50',
                            symbolName: 'less50',
                            type: 'rect',
                            rect: ['1070px', '590px', '130', '24', 'auto', 'auto'],
                            transform: [[],[],[],['1','1.45833']]
                        },
                        {
                            id: 'lessneg10',
                            symbolName: 'lessneg10',
                            type: 'rect',
                            rect: ['1070px', '546px', '130', '24', 'auto', 'auto'],
                            transform: [[],[],[],['1','1.45833']]
                        },
                        {
                            id: 'greater50',
                            symbolName: 'greater50',
                            type: 'rect',
                            rect: ['1070px', '679px', '130', '24', 'auto', 'auto'],
                            transform: [[],[],[],['1','1.45833']]
                        },
                        {
                            id: 'greaterneg10',
                            symbolName: 'greaterneg10',
                            type: 'rect',
                            rect: ['1070px', '635px', '130', '24', 'auto', 'auto'],
                            transform: [[],[],[],['1','1.45833']]
                        },
                        {
                            id: 'posprime',
                            symbolName: 'posprime',
                            type: 'rect',
                            rect: ['1070px', '496px', '130', '35', 'auto', 'auto']
                        },
                        {
                            id: 'odd',
                            symbolName: 'odd',
                            type: 'rect',
                            rect: ['1070px', '458px', '130', '24', 'auto', 'auto'],
                            transform: [[],[],[],['1','1.45833']]
                        },
                        {
                            id: 'posdiv27',
                            symbolName: 'posdiv27',
                            type: 'rect',
                            rect: ['1070px', '408px', '131', '35', 'auto', 'auto']
                        },
                        {
                            id: 'posdiv24',
                            symbolName: 'posdiv24',
                            type: 'rect',
                            rect: ['1070px', '363px', '131', '35', 'auto', 'auto']
                        },
                        {
                            id: 'posdiv20',
                            symbolName: 'posdiv20',
                            type: 'rect',
                            rect: ['1070px', '318px', '131', '35', 'auto', 'auto']
                        },
                        {
                            id: 'posdiv18',
                            symbolName: 'posdiv18',
                            type: 'rect',
                            rect: ['1070px', '274px', '131', '35', 'auto', 'auto']
                        },
                        {
                            id: 'posdiv12',
                            symbolName: 'posdiv12',
                            type: 'rect',
                            rect: ['1070px', '230px', '130', '35', 'auto', 'auto']
                        },
                        {
                            id: 'mult10',
                            symbolName: 'mult10',
                            type: 'rect',
                            rect: ['1070px', '191px', '130', '24', 'auto', 'auto'],
                            transform: [[],[],[],['1','1.45833']]
                        },
                        {
                            id: 'mult5',
                            symbolName: 'mult5',
                            type: 'rect',
                            rect: ['1070px', '146px', '130', '24', 'auto', 'auto'],
                            transform: [[],[],[],['1','1.45833']]
                        },
                        {
                            id: 'mult4',
                            symbolName: 'mult4',
                            type: 'rect',
                            rect: ['1070px', '102px', '130', '24', 'auto', 'auto'],
                            transform: [[],[],[],['1','1.45833']]
                        },
                        {
                            id: 'mult3',
                            symbolName: 'mult3s',
                            type: 'rect',
                            rect: ['1070px', '58px', '130', '24', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1','1.45833']]
                        },
                        {
                            id: 'mult2',
                            symbolName: 'mult2s',
                            type: 'rect',
                            rect: ['1070px', '13px', '130', '24', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1','1.45833']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1280px', '720px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid186",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${finalBackground}",
                            'none',
                            'none'
                        ],
                        [
                            "eid198",
                            "display",
                            0,
                            0,
                            "linear",
                            "${finalScore}",
                            'none',
                            'none'
                        ],
                        [
                            "eid171",
                            "display",
                            0,
                            0,
                            "linear",
                            "${testout}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "redString": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 492, 492, 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'redString',
                            stroke: ['4px', 'rgba(255,0,79,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(249,248,248,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 500, 500]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "blueString": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '492', '492', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'blueStiring',
                            stroke: [4, 'rgba(15,0,255,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(249,248,248,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '500', '500']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "redchoice": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '114px', '26px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'redrect',
                            stroke: [0, 'rgba(253,0,0,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(253,0,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '114', '26']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "bluechoice": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '114px', '26px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'bluerect',
                            stroke: [0, 'rgba(47,0,253,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(47,0,253,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '114', '26']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "outside": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'mainBack',
                            stroke: [4, 'rgb(218, 251, 234)', 'none'],
                            rect: [0, 0, 950, 361, 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0.97)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 950, 361]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "greenString": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '492', '492', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'greenString',
                            stroke: [4, 'rgba(96,185,17,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(249,248,248,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '500px', '500px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "xout": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['20px', '-11px', '2px', '45px', 'auto', 'auto'],
                            transform: [[], ['60'], [0, 0, 0], [1, 1, 1]],
                            id: 'Rectangle2',
                            stroke: [4, 'rgba(241,31,31,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(244,18,18,0.44)']
                        },
                        {
                            rect: ['19px', '-10px', '2px', '45px', 'auto', 'auto'],
                            transform: [[], ['-60'], [0, 0, 0], [1, 1, 1]],
                            id: 'Rectangle2Copy2',
                            stroke: [4, 'rgba(241,31,31,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(244,18,18,0.44)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '43px', '25px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "marker_0": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['42px', '1px', '11', '11', 'auto', 'auto'],
                            id: 'x',
                            type: 'group',
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                id: 'xline2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                id: 'xline1',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            rect: ['21px', '1px', '11', '11', 'auto', 'auto'],
                            id: 'xCopy',
                            type: 'group',
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                id: 'xline2Copy',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                id: 'xline1Copy',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            rect: ['0px', '1px', '11', '11', 'auto', 'auto'],
                            id: 'xCopy2',
                            type: 'group',
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                id: 'xline2Copy2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                id: 'xline1Copy2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            rect: ['0px', '0px', '53', '12', 'auto', 'auto'],
                            id: 'marker',
                            type: 'group',
                            c: [
                            {
                                type: 'rect',
                                id: 'redMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                                fill: ['rgba(244,8,8,1.00)']
                            },
                            {
                                type: 'rect',
                                id: 'blueMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                rect: ['20px', '0px', '10px', '10px', 'auto', 'auto'],
                                fill: ['rgba(8,15,244,1)']
                            },
                            {
                                type: 'rect',
                                id: 'greenMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                rect: ['41px', '0px', '10px', '10px', 'auto', 'auto'],
                                fill: ['rgba(8,244,22,1.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '53px', '12px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "marker_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'x',
                            rect: ['42px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'xCopy',
                            rect: ['21px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2Copy',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1Copy',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'xCopy2',
                            rect: ['0px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2Copy2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1Copy2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'marker',
                            rect: ['0px', '0px', '53', '12', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'redMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(244,8,8,1.00)']
                            },
                            {
                                rect: ['20px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'blueMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(8,15,244,1.00)']
                            },
                            {
                                rect: ['41px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'greenMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(8,244,22,1.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '53px', '12px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "marker_2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'x',
                            rect: ['42px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'xCopy',
                            rect: ['21px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2Copy',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1Copy',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'xCopy2',
                            rect: ['0px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2Copy2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1Copy2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'marker',
                            rect: ['0px', '0px', '53', '12', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'redMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(244,8,8,1.00)']
                            },
                            {
                                rect: ['20px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'blueMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(8,15,244,1.00)']
                            },
                            {
                                rect: ['41px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'greenMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(8,244,22,1.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '53px', '12px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "marker_3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'x',
                            rect: ['42px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'xCopy',
                            rect: ['21px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2Copy',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1Copy',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'xCopy2',
                            rect: ['0px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2Copy2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1Copy2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'marker',
                            rect: ['0px', '0px', '53', '12', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'redMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(244,8,8,1.00)']
                            },
                            {
                                rect: ['20px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'blueMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(8,15,244,1.00)']
                            },
                            {
                                rect: ['41px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'greenMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(8,244,22,1.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '53px', '12px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "marker_4": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'x',
                            rect: ['42px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'xCopy',
                            rect: ['21px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2Copy',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1Copy',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'xCopy2',
                            rect: ['0px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2Copy2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1Copy2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'marker',
                            rect: ['0px', '0px', '53', '12', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'redMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(244,8,8,1.00)']
                            },
                            {
                                rect: ['20px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'blueMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(8,15,244,1.00)']
                            },
                            {
                                rect: ['41px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'greenMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(8,244,22,1.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '53px', '12px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "marker_5": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'x',
                            rect: ['42px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'xCopy',
                            rect: ['21px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2Copy',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1Copy',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'xCopy2',
                            rect: ['0px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2Copy2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1Copy2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'marker',
                            rect: ['0px', '0px', '53', '12', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'redMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(244,8,8,1.00)']
                            },
                            {
                                rect: ['20px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'blueMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(8,15,244,1.00)']
                            },
                            {
                                rect: ['41px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'greenMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(8,244,22,1.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '53px', '12px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "marker_6": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'x',
                            rect: ['42px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'xCopy',
                            rect: ['21px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2Copy',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1Copy',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'xCopy2',
                            rect: ['0px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2Copy2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1Copy2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'marker',
                            rect: ['0px', '0px', '53', '12', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'redMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(244,8,8,1.00)']
                            },
                            {
                                rect: ['20px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'blueMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(8,15,244,1.00)']
                            },
                            {
                                rect: ['41px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'greenMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(8,244,22,1.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '53px', '12px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "marker_7": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'x',
                            rect: ['42px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'xCopy',
                            rect: ['21px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2Copy',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1Copy',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'xCopy2',
                            rect: ['0px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2Copy2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1Copy2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'marker',
                            rect: ['0px', '0px', '53', '12', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'redMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(244,8,8,1.00)']
                            },
                            {
                                rect: ['20px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'blueMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(8,15,244,1.00)']
                            },
                            {
                                rect: ['41px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'greenMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(8,244,22,1.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '53px', '12px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "marker_8": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'x',
                            rect: ['42px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'xCopy',
                            rect: ['21px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2Copy',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1Copy',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'xCopy2',
                            rect: ['0px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2Copy2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1Copy2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'marker',
                            rect: ['0px', '0px', '53', '12', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'redMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(244,8,8,1.00)']
                            },
                            {
                                rect: ['20px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'blueMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(8,15,244,1.00)']
                            },
                            {
                                rect: ['41px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'greenMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(8,244,22,1.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '53px', '12px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "marker_9": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'x',
                            rect: ['42px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'xCopy',
                            rect: ['21px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2Copy',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1Copy',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'xCopy2',
                            rect: ['0px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2Copy2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1Copy2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'marker',
                            rect: ['0px', '0px', '53', '12', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'redMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(244,8,8,1.00)']
                            },
                            {
                                rect: ['20px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'blueMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(8,15,244,1.00)']
                            },
                            {
                                rect: ['41px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'greenMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(8,244,22,1.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '53px', '12px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "marker_10": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'x',
                            rect: ['42px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'xCopy',
                            rect: ['21px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2Copy',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1Copy',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'xCopy2',
                            rect: ['0px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2Copy2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1Copy2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'marker',
                            rect: ['0px', '0px', '53', '12', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'redMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(244,8,8,1.00)']
                            },
                            {
                                rect: ['20px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'blueMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(8,15,244,1.00)']
                            },
                            {
                                rect: ['41px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'greenMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(8,244,22,1.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '53px', '12px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "marker_11": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'x',
                            rect: ['42px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'xCopy',
                            rect: ['21px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2Copy',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1Copy',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'xCopy2',
                            rect: ['0px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2Copy2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1Copy2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'marker',
                            rect: ['0px', '0px', '53', '12', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'redMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(244,8,8,1.00)']
                            },
                            {
                                rect: ['20px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'blueMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(8,15,244,1.00)']
                            },
                            {
                                rect: ['41px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'greenMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(8,244,22,1.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '53px', '12px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "marker_12": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'x',
                            rect: ['42px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'xCopy',
                            rect: ['21px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2Copy',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1Copy',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'xCopy2',
                            rect: ['0px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2Copy2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1Copy2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'marker',
                            rect: ['0px', '0px', '53', '12', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'redMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(244,8,8,1.00)']
                            },
                            {
                                rect: ['20px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'blueMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(8,15,244,1.00)']
                            },
                            {
                                rect: ['41px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'greenMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(8,244,22,1.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '53px', '12px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "marker_13": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'x',
                            rect: ['42px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'xCopy',
                            rect: ['21px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2Copy',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1Copy',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'xCopy2',
                            rect: ['0px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2Copy2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1Copy2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'marker',
                            rect: ['0px', '0px', '53', '12', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'redMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(244,8,8,1.00)']
                            },
                            {
                                rect: ['20px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'blueMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(8,15,244,1.00)']
                            },
                            {
                                rect: ['41px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'greenMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(8,244,22,1.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '53px', '12px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "marker_14": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'x',
                            rect: ['42px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'xCopy',
                            rect: ['21px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2Copy',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1Copy',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'xCopy2',
                            rect: ['0px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2Copy2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1Copy2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'marker',
                            rect: ['0px', '0px', '53', '12', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'redMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(244,8,8,1.00)']
                            },
                            {
                                rect: ['20px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'blueMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(8,15,244,1.00)']
                            },
                            {
                                rect: ['41px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'greenMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(8,244,22,1.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '53px', '12px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "marker_15": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'x',
                            rect: ['42px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'xCopy',
                            rect: ['21px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2Copy',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1Copy',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'xCopy2',
                            rect: ['0px', '1px', '11', '11', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline2Copy2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['5px', '-2px', '1px', '14px', 'auto', 'auto'],
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'xline1Copy2',
                                stroke: [1, 'rgb(10, 10, 10)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'marker',
                            rect: ['0px', '0px', '53', '12', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'redMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(244,8,8,1.00)']
                            },
                            {
                                rect: ['20px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'blueMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(8,15,244,1.00)']
                            },
                            {
                                rect: ['41px', '0px', '10px', '10px', 'auto', 'auto'],
                                id: 'greenMarker1',
                                stroke: [1, 'rgb(10, 10, 10)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(8,244,22,1.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '53px', '12px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "greenChoice": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '114px', '26px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'redrect',
                            stroke: [0, 'rgba(39,205,49,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(39,205,49,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '114', '26']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "mult2s": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [7, 11, 115, '2px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['8', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'redcross',
                            stroke: [0, 'rgba(255,0,0,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            rect: [7, 11, 115, '2px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['-8', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'bluecross',
                            stroke: [0, 'rgba(45,1,255,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(44,0,255,1.00)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                            id: 'mult2r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            cursor: 'pointer',
                            rect: [0, 0, 126, 20, 'auto', 'auto'],
                            boxShadow: ['', '0px', '1px', '3px', '1px', 'rgba(0,0,0,0.65)'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                id: 'mult2t',
                                text: 'Multiples of 2',
                                rect: [-2, -1, 130, 21, 'auto', 'auto'],
                                transform: [[0, 0, 0], ['0deg', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                textStyle: ['', '', '22px', ''],
                                align: 'center'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 130, 24]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid34",
                            "boxShadow.offsetV",
                            0,
                            500,
                            "easeInQuad",
                            "${mult2r}",
                            '1px',
                            '0px'
                        ]
                    ]
                }
            },
            "odd": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [7, 11, 115, '2px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['8', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'redcross',
                            stroke: [0, 'rgba(255,0,0,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            rect: [7, 11, 115, '2px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['-8', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'bluecross',
                            stroke: [0, 'rgba(45,1,255,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(44,0,255,1.00)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                            id: 'oddr',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            rect: [0, 0, 126, 20, 'auto', 'auto'],
                            boxShadow: ['', '0px', '1px', '3px', '1px', 'rgba(0,0,0,0.65)'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                rect: [-2, -1, 130, 21, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'oddt',
                                text: 'Odd Numbers'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 130, 24]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid79",
                            "boxShadow.offsetV",
                            0,
                            500,
                            "easeInQuad",
                            "${oddr}",
                            '1px',
                            '0px'
                        ]
                    ]
                }
            },
            "greaterneg10": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [7, 11, 115, '2px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['8', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'redcross',
                            stroke: [0, 'rgba(255,0,0,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            rect: [7, 11, 115, '2px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['-8', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'bluecross',
                            stroke: [0, 'rgba(45,1,255,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(44,0,255,1.00)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                            id: 'greaterneg10r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            rect: [0, 0, 126, 20, 'auto', 'auto'],
                            boxShadow: ['', '0px', '1px', '3px', '1px', 'rgba(0,0,0,0.65)'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                rect: [-2, 0, 130, 21, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'greaterneg10t',
                                text: 'Greater than -10'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 130, 24]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid81",
                            "boxShadow.offsetV",
                            0,
                            500,
                            "easeInQuad",
                            "${greaterneg10r}",
                            '1px',
                            '0px'
                        ]
                    ]
                }
            },
            "greater50": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [7, 11, 115, '2px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['8', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'redcross',
                            stroke: [0, 'rgba(255,0,0,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            rect: [7, 11, 115, '2px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['-8', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'bluecross',
                            stroke: [0, 'rgba(45,1,255,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(44,0,255,1.00)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                            id: 'greater50r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            rect: [0, 0, 126, 20, 'auto', 'auto'],
                            boxShadow: ['', '0px', '1px', '3px', '1px', 'rgba(0,0,0,0.65)'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                rect: [-2, -1, 130, 21, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'greater50t',
                                text: 'Greater than 50'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 130, 24]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid80",
                            "boxShadow.offsetV",
                            0,
                            500,
                            "easeInQuad",
                            "${greater50r}",
                            '1px',
                            '0px'
                        ]
                    ]
                }
            },
            "neg55": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: [0, 0, 36, 20, 'auto', 'auto'],
                            id: 'neg55n',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                rect: [-2, 0, 37, 24, 'auto', 'auto'],
                                text: '- 55',
                                id: 'neg55t',
                                textStyle: ['', '', '22px', ''],
                                align: 'center',
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', '']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 40, 24]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "neg80": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 36, 20, 'auto', 'auto'],
                            type: 'rect',
                            id: 'neg80n',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                type: 'text',
                                text: '- 80',
                                id: 'neg80t',
                                textStyle: ['', '', '22px', ''],
                                align: 'center',
                                rect: [-2, -1, 36, 24, 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 40, 24]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "lessneg10": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [7, 11, 115, '2px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['8', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'redcross',
                            stroke: [0, 'rgba(255,0,0,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            rect: [7, 11, 115, '2px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['-8', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'bluecross',
                            stroke: [0, 'rgba(45,1,255,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(44,0,255,1.00)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                            id: 'lessneg10r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            rect: [0, 0, 126, 20, 'auto', 'auto'],
                            boxShadow: ['', '0px', '1px', '3px', '1px', 'rgba(0,0,0,0.65)'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                rect: [-2, -1, 130, 21, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'lessneg10t',
                                text: 'Less than - 10'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 130, 24]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid83",
                            "boxShadow.offsetV",
                            0,
                            500,
                            "easeInQuad",
                            "${lessneg10r}",
                            '1px',
                            '0px'
                        ]
                    ]
                }
            },
            "less50": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [7, 11, 115, '2px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['8', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'redcross',
                            stroke: [0, 'rgba(255,0,0,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            rect: [7, 11, 115, '2px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['-8', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'bluecross',
                            stroke: [0, 'rgba(45,1,255,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(44,0,255,1.00)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                            id: 'less50r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            rect: [0, 0, 126, 20, 'auto', 'auto'],
                            boxShadow: ['', '0px', '1px', '3px', '1px', 'rgba(0,0,0,0.65)'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                rect: [-2, -1, 130, 21, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'less50t',
                                text: 'Less than 50'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 130, 24]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid82",
                            "boxShadow.offsetV",
                            0,
                            500,
                            "easeInQuad",
                            "${less50r}",
                            '1px',
                            '0px'
                        ]
                    ]
                }
            },
            "mult10": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [7, 11, 115, '2px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['8', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'redcross',
                            stroke: [0, 'rgba(255,0,0,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            rect: [7, 11, 115, '2px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['-8', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'bluecross',
                            stroke: [0, 'rgba(45,1,255,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(44,0,255,1.00)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                            id: 'mult10r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            rect: [0, 0, 126, 20, 'auto', 'auto'],
                            boxShadow: ['', '0px', '1px', '3px', '1px', 'rgba(0,0,0,0.65)'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                rect: [-2, -1, 130, 21, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'mult10t',
                                text: 'Multiples of 10'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 130, 24]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid85",
                            "boxShadow.offsetV",
                            0,
                            500,
                            "easeInQuad",
                            "${mult10r}",
                            '1px',
                            '0px'
                        ]
                    ]
                }
            },
            "mult4": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [7, 11, 115, '2px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['8', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'redcross',
                            stroke: [0, 'rgba(255,0,0,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            rect: [7, 11, 115, '2px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['-8', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'bluecross',
                            stroke: [0, 'rgba(45,1,255,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(44,0,255,1.00)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                            id: 'mult4r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            rect: [0, 0, 126, 20, 'auto', 'auto'],
                            boxShadow: ['', '0px', '1px', '3px', '1px', 'rgba(0,0,0,0.65)'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                rect: [-2, -1, 130, 21, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'mult4t',
                                text: 'Multiples of 4'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 130, 24]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid84",
                            "boxShadow.offsetV",
                            0,
                            500,
                            "easeInQuad",
                            "${mult4r}",
                            '1px',
                            '0px'
                        ]
                    ]
                }
            },
            "mult5": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [7, 11, 115, '2px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['8', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'redcross',
                            stroke: [0, 'rgba(255,0,0,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            rect: [7, 11, 115, '2px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['-8', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'bluecross',
                            stroke: [0, 'rgba(45,1,255,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(44,0,255,1.00)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                            id: 'mult5r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            rect: [0, 0, 126, 20, 'auto', 'auto'],
                            boxShadow: [null, null, '1px', '3px', '1px', 'rgba(0,0,0,0.65)'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                rect: [-2, -1, 130, 21, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'mult5t',
                                text: 'Multiples of 5'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 130, 24]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid77",
                            "boxShadow.offsetV",
                            0,
                            500,
                            "easeInQuad",
                            "${mult5r}",
                            '1px',
                            '0px'
                        ]
                    ]
                }
            },
            "mult3s": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [7, 11, 115, '2px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['8', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'redcross',
                            stroke: [0, 'rgba(255,0,0,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            rect: [7, 11, 115, '2px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['-8', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'bluecross',
                            stroke: [0, 'rgba(45,1,255,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(44,0,255,1.00)']
                        },
                        {
                            type: 'group',
                            id: 'mult3',
                            rect: [0, 0, 130, '24', 'auto', 'auto'],
                            c: [
                            {
                                type: 'rect',
                                borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                                id: 'mult3r',
                                stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                                cursor: 'pointer',
                                rect: [0, 0, 126, 20, 'auto', 'auto'],
                                boxShadow: ['', '0px', '1px', '3px', '1px', 'rgba(0,0,0,0.65)'],
                                fill: ['rgba(255,255,255,1)']
                            },
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                rect: [0, 1, 130, 21, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'mult3t',
                                text: 'Multiples of 3'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 130, 24]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid33",
                            "boxShadow.offsetV",
                            0,
                            500,
                            "easeInQuad",
                            "${mult3r}",
                            '1px',
                            '0px'
                        ]
                    ]
                }
            },
            "neg100": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'neg100',
                            rect: [0, 0, '47px', '24', 'auto', 'auto'],
                            c: [
                            {
                                type: 'rect',
                                id: 'neg100n',
                                stroke: ['2px', 'rgba(0,0,0,1.00)', 'solid'],
                                rect: [0, 0, 43, 20, 'auto', 'auto'],
                                fill: ['rgba(255,255,255,1.00)']
                            },
                            {
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                type: 'text',
                                text: '- 100<br>',
                                id: 'neg100t',
                                textStyle: ['', '', '22px', ''],
                                align: 'center',
                                rect: [0, 1, 47, 21, 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 47, 24]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "posdiv27": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [7, 16, 115, '2px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['11', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'redcross',
                            stroke: [0, 'rgb(255, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1)']
                        },
                        {
                            rect: [7, 15, 115, '2px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['-11', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'bluecross',
                            stroke: [0, 'rgb(45, 1, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(44,0,255,1)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                            id: 'posdiv27r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            rect: [1, 0, 126, 31, 'auto', 'auto'],
                            boxShadow: ['', '0px', '1px', '3px', '1px', 'rgba(0,0,0,0.65)'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '15px', ''],
                                cursor: 'pointer',
                                rect: [-3, 0, 130, 30, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'posdiv27t',
                                text: 'Positive Divisors of 27'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 131, 35]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid50",
                            "boxShadow.offsetH",
                            0,
                            0,
                            "linear",
                            "${posdiv27r}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid51",
                            "boxShadow.spread",
                            0,
                            0,
                            "linear",
                            "${posdiv27r}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid91",
                            "boxShadow.offsetV",
                            0,
                            500,
                            "easeInQuad",
                            "${posdiv27r}",
                            '1px',
                            '0px'
                        ]
                    ]
                }
            },
            "posdiv24": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [7, 16, 115, '2px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['11', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'redcross',
                            stroke: [0, 'rgb(255, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1)']
                        },
                        {
                            rect: [7, 15, 115, '2px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['-11', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'bluecross',
                            stroke: [0, 'rgb(45, 1, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(44,0,255,1)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                            id: 'posdiv24r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            rect: [1, 0, 126, 31, 'auto', 'auto'],
                            boxShadow: ['', '0px', '1px', '3px', '1px', 'rgba(0,0,0,0.65)'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '15px', ''],
                                cursor: 'pointer',
                                rect: [-3, 0, 130, 30, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'posdiv24t',
                                text: 'Positive Divisors of 24'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 131, 35]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid90",
                            "boxShadow.offsetV",
                            0,
                            500,
                            "easeInQuad",
                            "${posdiv24r}",
                            '1px',
                            '0px'
                        ]
                    ]
                }
            },
            "posprime": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [7, 16, 115, '2px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['11', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'redcross',
                            stroke: [0, 'rgb(255, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1)']
                        },
                        {
                            rect: [7, 15, 115, '2px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['-11', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'bluecross',
                            stroke: [0, 'rgb(45, 1, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(44,0,255,1)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                            id: 'posprimer',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            rect: [0, 0, 126, 31, 'auto', 'auto'],
                            boxShadow: ['', '0px', '1px', '3px', '1px', 'rgba(0,0,0,0.65)'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '14px', ''],
                                cursor: 'pointer',
                                rect: [-1, 2, 130, 29, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'posprimet',
                                text: 'Positive Prime Numbers'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 130, 35]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid89",
                            "boxShadow.offsetV",
                            0,
                            500,
                            "easeInQuad",
                            "${posprimer}",
                            '1px',
                            '0px'
                        ]
                    ]
                }
            },
            "posdiv20": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [7, 16, 115, '2px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['11', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'redcross',
                            stroke: [0, 'rgb(255, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1)']
                        },
                        {
                            rect: [7, 15, 115, '2px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['-11', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'bluecross',
                            stroke: [0, 'rgb(45, 1, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(44,0,255,1)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                            id: 'posdiv20r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            rect: [1, 0, 126, 31, 'auto', 'auto'],
                            boxShadow: ['', '0px', '1px', '3px', '1px', 'rgba(0,0,0,0.65)'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '15px', ''],
                                cursor: 'pointer',
                                rect: [-3, 0, 130, 30, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'posdiv20t',
                                text: 'Positive Divisors of 20'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 131, 35]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid88",
                            "boxShadow.offsetV",
                            0,
                            500,
                            "easeInQuad",
                            "${posdiv20r}",
                            '1px',
                            '0px'
                        ]
                    ]
                }
            },
            "posdiv18": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [7, 16, 115, '2px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['11', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'redcross',
                            stroke: [0, 'rgb(255, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1)']
                        },
                        {
                            rect: [7, 15, 115, '2px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['-11', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'bluecross',
                            stroke: [0, 'rgb(45, 1, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(44,0,255,1)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                            id: 'posdiv18r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            rect: [1, 0, 126, 31, 'auto', 'auto'],
                            boxShadow: ['', 0, '1px', '3px', '1px', 'rgba(0,0,0,0.65)'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '15px', ''],
                                cursor: 'pointer',
                                rect: [-3, 0, 130, 30, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'posdiv18t',
                                text: 'Positive Divisors of 18'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 131, 35]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid87",
                            "boxShadow.offsetV",
                            0,
                            500,
                            "easeInQuad",
                            "${posdiv18r}",
                            '1px',
                            '0px'
                        ]
                    ]
                }
            },
            "posdiv12": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [7, 16, 115, '2px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['11', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'redcross',
                            stroke: [0, 'rgba(255,0,0,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            rect: [7, 15, 115, '2px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['-11', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'bluecross',
                            stroke: [0, 'rgba(45,1,255,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(44,0,255,1.00)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                            id: 'posdiv12r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            rect: [0, 0, 126, 31, 'auto', 'auto'],
                            boxShadow: ['', '0px', '1px', '3px', '1px', 'rgba(0,0,0,0.65)'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '15px', ''],
                                cursor: 'pointer',
                                rect: [-2, 0, 130, 29, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'posdiv12t',
                                text: 'Positive Divisors of 12'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 130, 35]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid86",
                            "boxShadow.offsetV",
                            0,
                            500,
                            "easeInQuad",
                            "${posdiv12r}",
                            '1px',
                            '0px'
                        ]
                    ]
                }
            },
            "pos1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: [0, 0, 36, 20, 'auto', 'auto'],
                            id: 'pos1r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                rect: [-2, -1, 40, 24, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'pos1t',
                                text: '1'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 40, 25]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "zero": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: ['0', '0', '36', '20', 'auto', 'auto'],
                            id: 'zeror',
                            stroke: [2, 'rgb(0, 0, 0)', 'solid'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', ''],
                                rect: ['-2', '-1', '40', '24', 'auto', 'auto'],
                                id: 'zerot',
                                text: '0'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '40', '25']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "neg1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: [0, 0, 36, 20, 'auto', 'auto'],
                            id: 'neg1r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                rect: [-2, -1, 40, 24, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'neg1t',
                                text: '- 1'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 40, 25]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "neg5": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: [0, 0, 36, 20, 'auto', 'auto'],
                            id: 'neg5r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                rect: [-1, -1, 40, 24, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'neg5t',
                                text: '- 5'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 41, 25]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "neg10": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: [0, 0, 36, 20, 'auto', 'auto'],
                            id: 'neg10r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                rect: [-2, 0, 40, 24, 'auto', 'auto'],
                                text: '- 10',
                                id: 'neg10t',
                                textStyle: ['', '', '22px', ''],
                                align: 'center',
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', '']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 40, 26]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "neg15": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: [0, 0, 36, 20, 'auto', 'auto'],
                            id: 'neg15r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                rect: [-2, 0, 40, 24, 'auto', 'auto'],
                                text: '- 15',
                                id: 'neg15t',
                                textStyle: ['', '', '22px', ''],
                                align: 'center',
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', '']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 40, 25]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "pos18": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: [0, 0, 36, 20, 'auto', 'auto'],
                            id: 'pos18r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                rect: [-2, -1, 40, 24, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'pos18t',
                                text: '18'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 40, 25]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "pos12": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: [0, 0, 36, 20, 'auto', 'auto'],
                            id: 'pos12r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                rect: [-2, -1, 40, 24, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'pos12t',
                                text: '12'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 40, 25]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "pos99": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: [0, 0, 36, 20, 'auto', 'auto'],
                            id: 'pos99r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                rect: [-2, -1, 40, 24, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'pos99t',
                                text: '99'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 40, 25]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "pos60": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: [0, 0, 36, 20, 'auto', 'auto'],
                            id: 'pos60r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                rect: [-2, -1, 40, 24, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'pos60t',
                                text: '60'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 40, 25]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "pos50": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: [0, 0, 36, 20, 'auto', 'auto'],
                            id: 'pos50r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                rect: [-2, -1, 40, 24, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'pos50t',
                                text: '50'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 40, 25]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "pos45": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: [0, 0, 36, 20, 'auto', 'auto'],
                            id: 'pos45r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                rect: [-2, -1, 40, 24, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'pos45t',
                                text: '45'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 40, 25]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "pos40": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: [0, 0, 36, 20, 'auto', 'auto'],
                            id: 'pos40r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                rect: [-2, -1, 40, 24, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'pos40t',
                                text: '40'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 40, 25]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "pos27": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: [0, 0, 36, 20, 'auto', 'auto'],
                            id: 'pos27r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                rect: [-2, -1, 40, 24, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'pos27t',
                                text: '27'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 40, 25]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "pos24": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: [0, 0, 36, 20, 'auto', 'auto'],
                            id: 'pos24r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                rect: [-2, -1, 40, 24, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'pos24t',
                                text: '24'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 40, 25]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "pos20": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: [0, 0, 36, 20, 'auto', 'auto'],
                            id: 'pos20r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                rect: [-2, -1, 40, 24, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'pos20t',
                                text: '20'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 40, 25]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "pos10": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: [0, 0, 36, 20, 'auto', 'auto'],
                            id: 'pos10r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                rect: [-2, -1, 40, 24, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'pos10t',
                                text: '10'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 40, 25]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "pos9": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: [0, 0, 36, 20, 'auto', 'auto'],
                            id: 'pos9r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                rect: [-2, -1, 40, 24, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'pos9t',
                                text: '9'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 40, 25]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "pos8": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: [0, 0, 36, 20, 'auto', 'auto'],
                            id: 'pos8r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                rect: [-2, -1, 40, 24, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'pos8t',
                                text: '8'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 40, 25]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "pos7": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: [0, 0, 36, 20, 'auto', 'auto'],
                            id: 'pos7r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                rect: [-2, -1, 40, 24, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'pos7t',
                                text: '7'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 40, 25]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "pos6": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: [0, 0, 36, 20, 'auto', 'auto'],
                            id: 'pos6r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                rect: [-2, -1, 40, 24, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'pos6t',
                                text: '6'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 40, 25]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "pos5": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: [0, 0, 36, 20, 'auto', 'auto'],
                            id: 'pos5r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                rect: [-2, -1, 40, 24, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'pos5t',
                                text: '5'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 40, 25]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "pos4": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: [0, 0, 36, 20, 'auto', 'auto'],
                            id: 'pos4r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                rect: [-2, -1, 40, 24, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'pos4t',
                                text: '4'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 40, 25]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "pos3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: ['0', '0', '36', '20', 'auto', 'auto'],
                            id: 'pos3r',
                            stroke: [2, 'rgb(0, 0, 0)', 'solid'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', ''],
                                rect: ['-2', '-1', '40', '24', 'auto', 'auto'],
                                id: 'pos3t',
                                text: '3'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '40', '25']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "pos2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: [0, 0, 36, 20, 'auto', 'auto'],
                            id: 'pos2r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                rect: [-2, -1, 40, 24, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'pos2t',
                                text: '2'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 40, 25]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "pos105": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: [0, 0, 36, 20, 'auto', 'auto'],
                            id: 'pos105r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                rect: [-2, -1, 40, 24, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'pos105t',
                                text: '105'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 40, 25]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "pos100": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: [0, 0, 36, 20, 'auto', 'auto'],
                            id: 'pos100r',
                            stroke: ['2px', 'rgb(0, 0, 0)', 'solid'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                textStyle: ['', '', '22px', ''],
                                cursor: 'pointer',
                                rect: [-2, -1, 40, 24, 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                id: 'pos100t',
                                text: '100'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 40, 25]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("StringGameAdvanced_edgeActions.js");
})("EDGE-587455394");
