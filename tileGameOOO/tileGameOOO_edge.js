/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'carter-one, sans-serif': '<script src=\"http://use.edgefonts.net/carter-one:n4:all.js\"></script>',
            'aladin, sans-serif': '<script src=\"http://use.edgefonts.net/aladin:n4:all.js\"></script>',
            'gochi-hand, sans-serif': '<script src=\"http://use.edgefonts.net/gochi-hand:n4:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js",
            js+"jquery-ui-1.10.3.custom.min.js",
            js+"jquery.ui.touch-punch.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'middleBackground',
                            type: 'rect',
                            rect: ['421px', '50', '561', '700', 'auto', 'auto'],
                            fill: ["rgba(16,196,208,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'backGroundRect',
                            type: 'rect',
                            rect: ['463', '80', '480', '480', 'auto', 'auto'],
                            fill: ["rgba(36,148,145,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['152', '50', '262px', '692', 'auto', 'auto'],
                            fill: ["rgba(49,25,217,1.00)"],
                            stroke: [4,"rgba(7,7,7,1.00)","solid"]
                        },
                        {
                            id: 'Rectangle3Copy',
                            type: 'rect',
                            rect: ['982px', '50px', '262px', '692', 'auto', 'auto'],
                            fill: ["rgba(241,241,14,1.00)"],
                            stroke: [4,"rgb(7, 7, 7)","solid"]
                        },
                        {
                            id: 'A0',
                            type: 'ellipse',
                            rect: ['430', '582', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(219,31,31,1.00)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'A1',
                            type: 'ellipse',
                            rect: ['485', '582', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(219,31,31,1.00)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'A2',
                            type: 'ellipse',
                            rect: ['540', '583', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(219,31,31,1.00)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"],
                            boxShadow: ["", 0, 0, 0, 0, "rgba(0,0,0,0)"]
                        },
                        {
                            id: 'A3',
                            type: 'ellipse',
                            rect: ['595', '582', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(219,31,31,1.00)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'A4',
                            type: 'ellipse',
                            rect: ['648', '582', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(219,31,31,1.00)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'A5',
                            type: 'ellipse',
                            rect: ['703', '582', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(219,31,31,1.00)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'A6',
                            type: 'ellipse',
                            rect: ['758', '582', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(219,31,31,1.00)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'A7',
                            type: 'ellipse',
                            rect: ['813', '582', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(219,31,31,1.00)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'A8',
                            type: 'ellipse',
                            rect: ['865', '582', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(219,31,31,1.00)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'A9',
                            type: 'ellipse',
                            rect: ['920', '582', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(219,31,31,1.00)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'A10',
                            type: 'ellipse',
                            rect: ['430', '637', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(219,31,31,1.00)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'A11',
                            type: 'ellipse',
                            rect: ['485', '637', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(219,31,31,1.00)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'A12',
                            type: 'ellipse',
                            rect: ['540', '637', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(219,31,31,1.00)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'A13',
                            type: 'ellipse',
                            rect: ['595', '637', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(219,31,31,1.00)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'A14',
                            type: 'ellipse',
                            rect: ['648', '637', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(219,31,31,1.00)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'A15',
                            type: 'ellipse',
                            rect: ['703', '637', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(219,31,31,1.00)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'A16',
                            type: 'ellipse',
                            rect: ['758', '637', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(219,31,31,1.00)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'A17',
                            type: 'ellipse',
                            rect: ['813', '637', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(219,31,31,1.00)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'A18',
                            type: 'ellipse',
                            rect: ['865', '637', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(219,31,31,1.00)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'A19',
                            type: 'ellipse',
                            rect: ['920', '637', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(219,31,31,1.00)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'A20',
                            type: 'ellipse',
                            rect: ['430', '692', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(219,31,31,1.00)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'A21',
                            type: 'ellipse',
                            rect: ['485', '692', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(219,31,31,1.00)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'A22',
                            type: 'ellipse',
                            rect: ['540', '692', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(219,31,31,1.00)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'A23',
                            type: 'ellipse',
                            rect: ['595', '692', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(219,31,31,1.00)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'A24',
                            type: 'ellipse',
                            rect: ['648', '692', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(219,31,31,1.00)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'A25',
                            type: 'ellipse',
                            rect: ['703', '692', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(219,31,31,1.00)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'A26',
                            type: 'ellipse',
                            rect: ['758', '692', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(219,31,31,1.00)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'A27',
                            type: 'ellipse',
                            rect: ['813', '692', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(219,31,31,1.00)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'A28',
                            type: 'ellipse',
                            rect: ['865', '692', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(219,31,31,1.00)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'A29',
                            type: 'ellipse',
                            rect: ['920', '692', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(219,31,31,1.00)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'R19',
                            type: 'rect',
                            rect: ['903', '120', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R18',
                            type: 'rect',
                            rect: ['853', '120', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R17',
                            type: 'rect',
                            rect: ['803', '120', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R16',
                            type: 'rect',
                            rect: ['753', '120', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R15',
                            type: 'rect',
                            rect: ['703', '120', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R14',
                            type: 'rect',
                            rect: ['653', '120', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R13',
                            type: 'rect',
                            rect: ['603', '120', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R12',
                            type: 'rect',
                            rect: ['553', '120', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'R11',
                            type: 'rect',
                            rect: ['503', '120', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'R10',
                            type: 'rect',
                            rect: ['453', '120', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R9',
                            type: 'rect',
                            rect: ['903', '70', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R8',
                            type: 'rect',
                            rect: ['853', '70', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R7',
                            type: 'rect',
                            rect: ['803', '70', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R6',
                            type: 'rect',
                            rect: ['753', '70', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R5',
                            type: 'rect',
                            rect: ['703', '70', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R4',
                            type: 'rect',
                            rect: ['653', '70', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R3',
                            type: 'rect',
                            rect: ['603', '70', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R2',
                            type: 'rect',
                            rect: ['553', '70', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'R1',
                            type: 'rect',
                            rect: ['503', '70', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'R0',
                            type: 'rect',
                            rect: ['453', '70', '42', '42', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                            fill: ["rgba(252,252,254,1.00)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'R29',
                            type: 'rect',
                            rect: ['903', '170', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R28',
                            type: 'rect',
                            rect: ['853', '170', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R27',
                            type: 'rect',
                            rect: ['803', '170', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R26',
                            type: 'rect',
                            rect: ['753', '170', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R25',
                            type: 'rect',
                            rect: ['703', '170', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R24',
                            type: 'rect',
                            rect: ['653', '170', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R23',
                            type: 'rect',
                            rect: ['603', '170', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R22',
                            type: 'rect',
                            rect: ['553', '170', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'R21',
                            type: 'rect',
                            rect: ['503', '170', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgba(0,0,0,1.00)","solid"]
                        },
                        {
                            id: 'R20',
                            type: 'rect',
                            rect: ['453', '170', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R39',
                            type: 'rect',
                            rect: ['903', '220', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R38',
                            type: 'rect',
                            rect: ['853', '220', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R37',
                            type: 'rect',
                            rect: ['803', '220', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R36',
                            type: 'rect',
                            rect: ['753', '220', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R35',
                            type: 'rect',
                            rect: ['703', '220', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R34',
                            type: 'rect',
                            rect: ['653', '220', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R33',
                            type: 'rect',
                            rect: ['603', '220', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R32',
                            type: 'rect',
                            rect: ['553', '220', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R31',
                            type: 'rect',
                            rect: ['503', '220', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R30',
                            type: 'rect',
                            rect: ['453', '220', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R49',
                            type: 'rect',
                            rect: ['903', '270', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R48',
                            type: 'rect',
                            rect: ['853', '270', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R47',
                            type: 'rect',
                            rect: ['803', '270', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R46',
                            type: 'rect',
                            rect: ['753', '270', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R45',
                            type: 'rect',
                            rect: ['703', '270', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R44',
                            type: 'rect',
                            rect: ['653', '270', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R43',
                            type: 'rect',
                            rect: ['603', '270', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R42',
                            type: 'rect',
                            rect: ['553', '270', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R41',
                            type: 'rect',
                            rect: ['503', '270', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R40',
                            type: 'rect',
                            rect: ['453', '270', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R59',
                            type: 'rect',
                            rect: ['903', '320', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R58',
                            type: 'rect',
                            rect: ['853', '320', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R57',
                            type: 'rect',
                            rect: ['803', '320', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R56',
                            type: 'rect',
                            rect: ['753', '320', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R55',
                            type: 'rect',
                            rect: ['703', '320', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R54',
                            type: 'rect',
                            rect: ['653', '320', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R53',
                            type: 'rect',
                            rect: ['603', '320', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R52',
                            type: 'rect',
                            rect: ['553', '320', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R51',
                            type: 'rect',
                            rect: ['503', '320', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R50',
                            type: 'rect',
                            rect: ['453', '320', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R69',
                            type: 'rect',
                            rect: ['903', '370', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R68',
                            type: 'rect',
                            rect: ['853', '370', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R67',
                            type: 'rect',
                            rect: ['803', '370', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R66',
                            type: 'rect',
                            rect: ['753', '370', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R65',
                            type: 'rect',
                            rect: ['703', '370', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R64',
                            type: 'rect',
                            rect: ['653', '370', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R63',
                            type: 'rect',
                            rect: ['603', '370', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R62',
                            type: 'rect',
                            rect: ['553', '370', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R61',
                            type: 'rect',
                            rect: ['503', '370', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R60',
                            type: 'rect',
                            rect: ['453', '370', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R79',
                            type: 'rect',
                            rect: ['903', '420', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R78',
                            type: 'rect',
                            rect: ['853', '420', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R77',
                            type: 'rect',
                            rect: ['803', '420', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R76',
                            type: 'rect',
                            rect: ['753', '420', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R75',
                            type: 'rect',
                            rect: ['703', '420', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R74',
                            type: 'rect',
                            rect: ['653', '420', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R73',
                            type: 'rect',
                            rect: ['603', '420', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R72',
                            type: 'rect',
                            rect: ['553', '420', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R71',
                            type: 'rect',
                            rect: ['503', '420', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R70',
                            type: 'rect',
                            rect: ['453', '420', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R89',
                            type: 'rect',
                            rect: ['903', '470', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R88',
                            type: 'rect',
                            rect: ['853', '470', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R87',
                            type: 'rect',
                            rect: ['803', '470', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R86',
                            type: 'rect',
                            rect: ['753', '470', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R85',
                            type: 'rect',
                            rect: ['703', '470', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R84',
                            type: 'rect',
                            rect: ['653', '470', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R83',
                            type: 'rect',
                            rect: ['603', '470', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R82',
                            type: 'rect',
                            rect: ['553', '470', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R81',
                            type: 'rect',
                            rect: ['503', '470', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R80',
                            type: 'rect',
                            rect: ['453', '470', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R90',
                            type: 'rect',
                            rect: ['453', '520', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R91',
                            type: 'rect',
                            rect: ['503', '520', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R92',
                            type: 'rect',
                            rect: ['553', '520', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R93',
                            type: 'rect',
                            rect: ['603', '520', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R94',
                            type: 'rect',
                            rect: ['653', '520', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R95',
                            type: 'rect',
                            rect: ['703', '520', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R96',
                            type: 'rect',
                            rect: ['753', '520', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R97',
                            type: 'rect',
                            rect: ['803', '520', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R98',
                            type: 'rect',
                            rect: ['853', '520', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'R99',
                            type: 'rect',
                            rect: ['903', '520', '42', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'blueTeam',
                            type: 'text',
                            rect: ['153', '53', '270', '69', 'auto', 'auto'],
                            text: "Blue Team",
                            align: "center",
                            font: ['carter-one, sans-serif', [46, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'whiteTeam',
                            type: 'text',
                            rect: ['983', '56', '270', '69', 'auto', 'auto'],
                            text: "Yellow Team",
                            align: "center",
                            font: ['carter-one, sans-serif', [42, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'blueButton',
                            symbolName: 'redButton',
                            type: 'rect',
                            rect: ['213', '570', '150', '150', 'auto', 'auto']
                        },
                        {
                            id: 'whiteButton',
                            symbolName: 'redButton',
                            type: 'rect',
                            rect: ['1038', '570', '150', '150', 'auto', 'auto']
                        },
                        {
                            id: 'whiteSelected',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['1038', '570', '142px', '142', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(255,255,255,1)",[61,43,true,'farthest-corner',[['rgba(63,244,69,1.00)',0],['rgba(26,150,18,1.00)',52],['rgba(38,63,28,1.00)',91]]]],
                            stroke: [1,"rgba(7, 7, 7, 0.729412)","solid"],
                            boxShadow: ["inset", 8, -6, 12, 1, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'blueSelected',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['213', '570', '142px', '142', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(255,255,255,1)",[61,43,true,'farthest-corner',[['rgba(63,244,69,1.00)',0],['rgba(26,150,18,1.00)',52],['rgba(38,63,28,1.00)',91]]]],
                            stroke: [1,"rgba(7, 7, 7, 0.729412)","solid"],
                            boxShadow: ["inset", 8, -6, 12, 1, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'whiteCover',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['1038', '570', '142px', '142', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(255,255,255,1)",[61,43,true,'farthest-corner',[['rgba(255,239,239,1.00)',0],['rgba(155,155,155,1.00)',52],['rgba(69,69,69,1.00)',91]]]],
                            stroke: [1,"rgba(7, 7, 7, 0.729412)","solid"],
                            boxShadow: ["inset", 8, -6, 12, 1, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'blueCover',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['213', '570', '142px', '142', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(255,255,255,1)",[61,43,true,'farthest-corner',[['rgba(255,239,239,1.00)',0],['rgba(155,155,155,1.00)',52],['rgba(69,69,69,1.00)',91]]]],
                            stroke: [1,"rgba(7, 7, 7, 0.729412)","solid"],
                            boxShadow: ["inset", 8, -6, 12, 1, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'timeBox',
                            display: 'none',
                            type: 'rect',
                            rect: ['628px', '622', '175px', '70', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [4,"rgb(0, 0, 0)","none"],
                            boxShadow: ["inset", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'plusTile',
                            display: 'none',
                            type: 'rect',
                            rect: ['828', '597', '52', '52', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"],
                            c: [
                            {
                                id: 'plusText',
                                display: 'block',
                                type: 'text',
                                rect: ['0', '0', '50', '50', 'auto', 'auto'],
                                text: "+",
                                align: "center",
                                font: ['gochi-hand, sans-serif', [60, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""],
                                textStyle: ["0px", "0px", "57px", "", ""]
                            }]
                        },
                        {
                            id: 'divideTile',
                            display: 'none',
                            type: 'rect',
                            rect: ['828', '672', '52', '52', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"],
                            c: [
                            {
                                id: 'divideText',
                                display: 'block',
                                type: 'text',
                                rect: ['1', '0', '50', '50', 'auto', 'auto'],
                                text: "",
                                align: "center",
                                font: ['gochi-hand, sans-serif', [60, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""],
                                textStyle: ["0px", "0px", "57px", "", ""]
                            }]
                        },
                        {
                            id: 'minusTile',
                            display: 'none',
                            type: 'rect',
                            rect: ['903', '597', '52', '52', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"],
                            c: [
                            {
                                id: 'minusText',
                                display: 'block',
                                type: 'text',
                                rect: ['0', '0', '50', '50', 'auto', 'auto'],
                                text: "-",
                                align: "center",
                                font: ['gochi-hand, sans-serif', [60, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""],
                                textStyle: ["0px", "0px", "55px", "", ""]
                            }]
                        },
                        {
                            id: 'timesTile',
                            display: 'none',
                            type: 'rect',
                            rect: ['903', '672', '52', '52', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"],
                            c: [
                            {
                                id: 'multText',
                                display: 'block',
                                type: 'text',
                                rect: ['0', '0', '50', '50', 'auto', 'auto'],
                                text: "",
                                align: "center",
                                font: ['gochi-hand, sans-serif', [60, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""],
                                textStyle: ["0px", "0px", "57px", "", ""]
                            }]
                        },
                        {
                            id: 'B1',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['186', '165', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(241,241,14,1.00)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'B2',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['261', '165', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(241,241,14,1.00)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'B3',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['336', '165', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(241,241,14,1.00)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'B4',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['186', '240', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(241,241,14,1.00)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'B5',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['261', '240', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(241,241,14,1.00)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'B6',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['336', '240', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(241,241,14,1.00)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'B7',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['186', '315', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(241,241,14,1.00)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'B8',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['261', '315', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(241,241,14,1.00)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'B9',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['336', '315', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(241,241,14,1.00)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'B10',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['186', '390', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(241,241,14,1.00)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'B11',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['261', '390', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(241,241,14,1.00)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'B12',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['336', '390', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(241,241,14,1.00)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'B13',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['186', '465', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(241,241,14,1.00)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'B14',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['261', '465', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(241,241,14,1.00)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'B15',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['336', '465', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(241,241,14,1.00)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'W1',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['1010', '165', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(28,21,228,1.00)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'W2',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['1085', '165', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(28,21,228,1.00)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'W3',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['1160', '165', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(28,21,228,1.00)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'W4',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['1010', '240', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(28,21,228,1.00)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'W5',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['1085', '240', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(28,21,228,1.00)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'W6',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['1160', '240', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(28,21,228,1.00)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'W7',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['1010', '315', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(28,21,228,1.00)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'W8',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['1085', '315', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(28,21,228,1.00)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'W9',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['1160', '315', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(28,21,228,1.00)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'W10',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['1010', '390', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(28,21,228,1.00)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'W11',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['1085', '390', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(28,21,228,1.00)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'W12',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['1160', '390', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(28,21,228,1.00)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'W13',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['1010', '465', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(28,21,228,1.00)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'W14',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['1085', '465', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(28,21,228,1.00)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'W15',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['1160', '465', '47', '47', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(28,21,228,1.00)"],
                            stroke: [4,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'winnerBlue',
                            display: 'none',
                            type: 'rect',
                            rect: ['153px', '50px', '1100px', '700px', 'auto', 'auto'],
                            fill: ["rgba(49,25,217,1)"],
                            stroke: [4,"rgb(7, 7, 7)","none"],
                            c: [
                            {
                                id: 'Text3',
                                type: 'text',
                                rect: ['86', '72', '908px', '545', 'auto', 'auto'],
                                text: "Blue<br>Wins!!!",
                                align: "center",
                                font: ['carter-one, sans-serif', [195, "px"], "rgba(236,236,5,1.00)", "400", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "251px", "", ""]
                            }]
                        },
                        {
                            id: 'winnerWhite',
                            display: 'none',
                            type: 'rect',
                            rect: ['153px', '50px', '1100px', '700px', 'auto', 'auto'],
                            fill: ["rgba(237,230,2,1.00)"],
                            stroke: [4,"rgb(7, 7, 7)","none"],
                            c: [
                            {
                                id: 'Text3Copy',
                                type: 'text',
                                rect: ['86', '72', '908px', '545', 'auto', 'auto'],
                                text: "Yellow<br>Wins!!!",
                                align: "center",
                                font: ['carter-one, sans-serif', [195, "px"], "rgba(49,25,217,1.00)", "400", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "251px", "", ""]
                            }]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['1461px', '463px', '121px', '50px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: 'anstest',
                                type: 'text',
                                rect: ['-5px', '0px', '121px', '50px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​</p>",
                                font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1400', '800', 'auto', 'auto'],
                            sizeRange: ['null','','undefined','undefined'],
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
                            "eid305",
                            "display",
                            0,
                            0,
                            "linear",
                            "${W10}",
                            'none',
                            'none'
                        ],
                        [
                            "eid293",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid294",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B10}",
                            'none',
                            'none'
                        ],
                        [
                            "eid309",
                            "display",
                            0,
                            0,
                            "linear",
                            "${W6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid304",
                            "display",
                            0,
                            0,
                            "linear",
                            "${W11}",
                            'none',
                            'none'
                        ],
                        [
                            "eid308",
                            "display",
                            0,
                            0,
                            "linear",
                            "${W7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid310",
                            "display",
                            0,
                            0,
                            "linear",
                            "${W5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid311",
                            "display",
                            0,
                            0,
                            "linear",
                            "${W4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid307",
                            "display",
                            0,
                            0,
                            "linear",
                            "${W8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid288",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid289",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid287",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid283",
                            "display",
                            0,
                            0,
                            "linear",
                            "${plusTile}",
                            'none',
                            'none'
                        ],
                        [
                            "eid312",
                            "display",
                            0,
                            0,
                            "linear",
                            "${W3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid285",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid314",
                            "display",
                            0,
                            0,
                            "linear",
                            "${W1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid313",
                            "display",
                            0,
                            0,
                            "linear",
                            "${W2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid272",
                            "display",
                            0,
                            0,
                            "linear",
                            "${blueCover}",
                            'none',
                            'none'
                        ],
                        [
                            "eid303",
                            "display",
                            0,
                            0,
                            "linear",
                            "${W12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid296",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid286",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid274",
                            "display",
                            0,
                            0,
                            "linear",
                            "${blueSelected}",
                            'none',
                            'none'
                        ],
                        [
                            "eid301",
                            "display",
                            0,
                            0,
                            "linear",
                            "${W14}",
                            'none',
                            'none'
                        ],
                        [
                            "eid281",
                            "display",
                            0,
                            0,
                            "linear",
                            "${minusTile}",
                            'none',
                            'none'
                        ],
                        [
                            "eid273",
                            "display",
                            0,
                            0,
                            "linear",
                            "${whiteCover}",
                            'none',
                            'none'
                        ],
                        [
                            "eid300",
                            "display",
                            0,
                            0,
                            "linear",
                            "${W15}",
                            'none',
                            'none'
                        ],
                        [
                            "eid297",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B13}",
                            'none',
                            'none'
                        ],
                        [
                            "eid292",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid338",
                            "display",
                            0,
                            0,
                            "linear",
                            "${winnerWhite}",
                            'none',
                            'none'
                        ],
                        [
                            "eid290",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid299",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B15}",
                            'none',
                            'none'
                        ],
                        [
                            "eid280",
                            "display",
                            0,
                            0,
                            "linear",
                            "${timesTile}",
                            'none',
                            'none'
                        ],
                        [
                            "eid291",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid306",
                            "display",
                            0,
                            0,
                            "linear",
                            "${W9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid337",
                            "display",
                            0,
                            0,
                            "linear",
                            "${winnerBlue}",
                            'none',
                            'none'
                        ],
                        [
                            "eid295",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B11}",
                            'none',
                            'none'
                        ],
                        [
                            "eid275",
                            "display",
                            0,
                            0,
                            "linear",
                            "${whiteSelected}",
                            'none',
                            'none'
                        ],
                        [
                            "eid302",
                            "display",
                            0,
                            0,
                            "linear",
                            "${W13}",
                            'none',
                            'none'
                        ],
                        [
                            "eid298",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B14}",
                            'none',
                            'none'
                        ],
                        [
                            "eid282",
                            "display",
                            0,
                            0,
                            "linear",
                            "${divideTile}",
                            'none',
                            'none'
                        ],
                        [
                            "eid315",
                            "display",
                            0,
                            0,
                            "linear",
                            "${timeBox}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "redButton": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], [0, 0, 0], ['0deg', 0], [1, 1, 1], ['50%', '50%']],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2',
                            stroke: ['1px', 'rgba(7,7,7,0.73)', 'solid'],
                            rect: [0, 0, '142px', 142, 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)', [61, 43, 'true', 'farthest-corner', [['rgba(255,255,255,1.00)', 0], ['rgba(188,82,82,1.00)', 52], ['rgba(89,27,27,1.00)', 91]]]],
                            type: 'ellipse',
                            boxShadow: ['inset', '8px', '-6px', '12px', '1px', 'rgba(0,0,0,0.65098)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 150, 150]
                        }
                    }
                },
                timeline: {
                    duration: 200,
                    autoPlay: false,
                    data: [
                        [
                            "eid256",
                            "background-image",
                            0,
                            200,
                            "linear",
                            "${Ellipse2}",
                            [61,43,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(188,82,82,1.00)',52],['rgba(89,27,27,1.00)',91]]],
                            [53,50,true,'farthest-corner',[['rgba(184,122,122,1.00)',5],['rgba(255,195,195,1.00)',45],['rgba(91,4,4,1.00)',91]]]
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("tileGameOOO_edgeActions.js");
})("EDGE-377409989");
