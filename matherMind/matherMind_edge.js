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
            js+"jquery.ui.touch-punch.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'p0',
                            type: 'rect',
                            rect: ['406px', '286px', '175px', '175px', 'auto', 'auto'],
                            fill: ["rgba(236,235,250,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            boxShadow: ["inset", 2, 2, 5, 2, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'p1',
                            type: 'rect',
                            rect: ['607px', '286px', '175px', '175px', 'auto', 'auto'],
                            fill: ["rgba(249,228,234,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            boxShadow: ["inset", 2, 2, 5, 2, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'p2',
                            type: 'rect',
                            rect: ['807px', '286px', '175px', '175px', 'auto', 'auto'],
                            fill: ["rgba(236,235,250,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            boxShadow: ["inset", 2, 2, 5, 2, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'p3',
                            type: 'rect',
                            rect: ['1008px', '286px', '175px', '175px', 'auto', 'auto'],
                            fill: ["rgba(249,228,234,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            boxShadow: ["inset", 2, 2, 5, 2, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'p4',
                            type: 'rect',
                            rect: ['1209px', '286px', '175px', '175px', 'auto', 'auto'],
                            fill: ["rgba(236,235,250,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            boxShadow: ["inset", 2, 2, 5, 2, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'guess1',
                            display: 'none',
                            type: 'rect',
                            rect: ['409px', '289px', '160px', '160px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 0, 1, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'guess3',
                            display: 'none',
                            type: 'rect',
                            rect: ['810px', '289px', '160px', '160px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 0, 1, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'guess5',
                            display: 'none',
                            type: 'rect',
                            rect: ['1212px', '289px', '160px', '160px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 0, 1, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'guess2',
                            display: 'none',
                            type: 'rect',
                            rect: ['610px', '289px', '160px', '160px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(211,43,85,1.00)","solid"],
                            boxShadow: ["", 0, 1, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'guess4',
                            display: 'none',
                            type: 'rect',
                            rect: ['1011px', '289px', '160px', '160px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(211,43,85,1.00)","solid"],
                            boxShadow: ["", 0, 1, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'numTile1',
                            type: 'rect',
                            rect: ['411px', '530px', '80px', '80px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile01',
                            display: 'none',
                            type: 'rect',
                            rect: ['4px', '20px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile05',
                            display: 'none',
                            type: 'rect',
                            rect: ['224px', '20px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'numTile2',
                            type: 'rect',
                            rect: ['519px', '530px', '80px', '80px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'numTile3',
                            type: 'rect',
                            rect: ['628px', '530px', '80px', '80px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'numTile4',
                            type: 'rect',
                            rect: ['736px', '530px', '80px', '80px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'numTile5',
                            type: 'rect',
                            rect: ['845px', '530px', '80px', '80px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'numTile6',
                            type: 'rect',
                            rect: ['953px', '530px', '80px', '80px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'numTile7',
                            type: 'rect',
                            rect: ['1062px', '530px', '80px', '80px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'numTile8',
                            type: 'rect',
                            rect: ['1171px', '530px', '80px', '80px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'numTile9',
                            type: 'rect',
                            rect: ['1279px', '530px', '80px', '80px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'opTile0',
                            type: 'rect',
                            rect: ['680px', '655px', '80px', '80px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(211,43,85,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile02',
                            display: 'none',
                            type: 'rect',
                            rect: ['59px', '20px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(211,43,85,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile03',
                            display: 'none',
                            type: 'rect',
                            rect: ['114px', '20px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile04',
                            display: 'none',
                            type: 'rect',
                            rect: ['169px', '20px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(211,43,85,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'opTile1',
                            type: 'rect',
                            rect: ['790px', '655px', '80px', '80px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(211,43,85,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'opTile2',
                            type: 'rect',
                            rect: ['899px', '655px', '80px', '80px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(211,43,85,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'opTile3',
                            type: 'rect',
                            rect: ['1008px', '655px', '80px', '80px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(211,43,85,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'Ellipse',
                            type: 'ellipse',
                            rect: ['1440px', '-177px', '20px', '20px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'EllipseCopy',
                            type: 'ellipse',
                            rect: ['1464px', '-151px', '20px', '20px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'EllipseCopy2',
                            type: 'ellipse',
                            rect: ['1484px', '-177px', '20px', '20px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'EllipseCopy3',
                            type: 'ellipse',
                            rect: ['1508px', '-151px', '20px', '20px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'EllipseCopy4',
                            type: 'ellipse',
                            rect: ['1530px', '-177px', '20px', '20px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try1out1',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['294px', '50px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try1out2',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['313px', '65px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try1out3',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['331px', '50px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try1out4',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['350px', '65px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try1out5',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['369px', '50px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try1in1',
                            display: 'none',
                            type: 'rect',
                            rect: ['294px', '19px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try1in2',
                            display: 'none',
                            type: 'rect',
                            rect: ['313px', '33px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try1in3',
                            display: 'none',
                            type: 'rect',
                            rect: ['332px', '19px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try1in4',
                            display: 'none',
                            type: 'rect',
                            rect: ['350px', '33px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try1in5',
                            display: 'none',
                            type: 'rect',
                            rect: ['369px', '19px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'tile11',
                            display: 'none',
                            type: 'rect',
                            rect: ['4px', '99px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile15',
                            display: 'none',
                            type: 'rect',
                            rect: ['224px', '99px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile12',
                            display: 'none',
                            type: 'rect',
                            rect: ['59px', '99px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(211,43,85,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile13',
                            display: 'none',
                            type: 'rect',
                            rect: ['114px', '99px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile14',
                            display: 'none',
                            type: 'rect',
                            rect: ['169px', '99px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(211,43,85,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'try2out1',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['294px', '129px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try2out2',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['313px', '144px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try2out3',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['331px', '129px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try2out4',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['350px', '144px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try2out5',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['369px', '129px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try2in1',
                            display: 'none',
                            type: 'rect',
                            rect: ['294px', '98px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try2in2',
                            display: 'none',
                            type: 'rect',
                            rect: ['313px', '112px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try2in3',
                            display: 'none',
                            type: 'rect',
                            rect: ['332px', '98px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try2in4',
                            display: 'none',
                            type: 'rect',
                            rect: ['350px', '112px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try2in5',
                            display: 'none',
                            type: 'rect',
                            rect: ['369px', '98px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'tile21',
                            display: 'none',
                            type: 'rect',
                            rect: ['4px', '177px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile25',
                            display: 'none',
                            type: 'rect',
                            rect: ['224px', '178px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile22',
                            display: 'none',
                            type: 'rect',
                            rect: ['59px', '178px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(211,43,85,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile23',
                            display: 'none',
                            type: 'rect',
                            rect: ['114px', '178px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile24',
                            display: 'none',
                            type: 'rect',
                            rect: ['169px', '178px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(211,43,85,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'try3out1',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['294px', '208px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try3out2',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['313px', '223px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try3out3',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['331px', '208px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try3out4',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['350px', '223px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try3out5',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['369px', '208px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try3in1',
                            display: 'none',
                            type: 'rect',
                            rect: ['294px', '177px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try3in2',
                            display: 'none',
                            type: 'rect',
                            rect: ['313px', '191px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try3in3',
                            display: 'none',
                            type: 'rect',
                            rect: ['332px', '177px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try3in4',
                            display: 'none',
                            type: 'rect',
                            rect: ['350px', '191px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try3in5',
                            display: 'none',
                            type: 'rect',
                            rect: ['369px', '177px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'tile31',
                            display: 'none',
                            type: 'rect',
                            rect: ['4px', '255px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile35',
                            display: 'none',
                            type: 'rect',
                            rect: ['224px', '256px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile32',
                            display: 'none',
                            type: 'rect',
                            rect: ['59px', '256px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(211,43,85,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile33',
                            display: 'none',
                            type: 'rect',
                            rect: ['114px', '256px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile34',
                            display: 'none',
                            type: 'rect',
                            rect: ['169px', '256px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(211,43,85,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'try4out1',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['294px', '286px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try4out2',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['313px', '301px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try4out3',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['331px', '286px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try4out4',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['350px', '301px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try4out5',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['369px', '286px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try4in1',
                            display: 'none',
                            type: 'rect',
                            rect: ['294px', '255px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try4in2',
                            display: 'none',
                            type: 'rect',
                            rect: ['313px', '269px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try4in3',
                            display: 'none',
                            type: 'rect',
                            rect: ['332px', '255px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try4in4',
                            display: 'none',
                            type: 'rect',
                            rect: ['350px', '269px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try4in5',
                            display: 'none',
                            type: 'rect',
                            rect: ['369px', '255px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'tile41',
                            display: 'none',
                            type: 'rect',
                            rect: ['4px', '334px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile45',
                            display: 'none',
                            type: 'rect',
                            rect: ['224px', '335px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile42',
                            display: 'none',
                            type: 'rect',
                            rect: ['59px', '335px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(211,43,85,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile43',
                            display: 'none',
                            type: 'rect',
                            rect: ['114px', '335px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile44',
                            display: 'none',
                            type: 'rect',
                            rect: ['169px', '335px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(211,43,85,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'try5out1',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['294px', '365px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try5out2',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['313px', '380px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try5out3',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['331px', '365px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try5out4',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['350px', '380px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try5out5',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['369px', '365px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try5in1',
                            display: 'none',
                            type: 'rect',
                            rect: ['294px', '334px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try5in2',
                            display: 'none',
                            type: 'rect',
                            rect: ['313px', '348px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try5in3',
                            display: 'none',
                            type: 'rect',
                            rect: ['332px', '334px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try5in4',
                            display: 'none',
                            type: 'rect',
                            rect: ['350px', '348px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try5in5',
                            display: 'none',
                            type: 'rect',
                            rect: ['369px', '334px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'tile51',
                            display: 'none',
                            type: 'rect',
                            rect: ['4px', '412px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile55',
                            display: 'none',
                            type: 'rect',
                            rect: ['224px', '413px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile52',
                            display: 'none',
                            type: 'rect',
                            rect: ['59px', '413px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(211,43,85,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile53',
                            display: 'none',
                            type: 'rect',
                            rect: ['114px', '413px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile54',
                            display: 'none',
                            type: 'rect',
                            rect: ['169px', '413px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(211,43,85,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'try6out1',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['294px', '443px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try6out2',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['313px', '458px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try6out3',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['331px', '443px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try6out4',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['350px', '458px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try6out5',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['369px', '443px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try6in1',
                            display: 'none',
                            type: 'rect',
                            rect: ['294px', '412px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try6in2',
                            display: 'none',
                            type: 'rect',
                            rect: ['313px', '426px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try6in3',
                            display: 'none',
                            type: 'rect',
                            rect: ['332px', '412px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try6in4',
                            display: 'none',
                            type: 'rect',
                            rect: ['350px', '426px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try6in5',
                            display: 'none',
                            type: 'rect',
                            rect: ['369px', '412px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'tile61',
                            display: 'none',
                            type: 'rect',
                            rect: ['4px', '490px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile65',
                            display: 'none',
                            type: 'rect',
                            rect: ['224px', '491px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile62',
                            display: 'none',
                            type: 'rect',
                            rect: ['59px', '491px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(211,43,85,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile63',
                            display: 'none',
                            type: 'rect',
                            rect: ['114px', '491px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile64',
                            display: 'none',
                            type: 'rect',
                            rect: ['169px', '491px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(211,43,85,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'try7out1',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['294px', '521px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try7out2',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['313px', '536px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try7out3',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['331px', '521px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try7out4',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['350px', '536px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try7out5',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['369px', '521px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try7in1',
                            display: 'none',
                            type: 'rect',
                            rect: ['294px', '490px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try7in2',
                            display: 'none',
                            type: 'rect',
                            rect: ['313px', '504px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try7in3',
                            display: 'none',
                            type: 'rect',
                            rect: ['332px', '490px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try7in4',
                            display: 'none',
                            type: 'rect',
                            rect: ['350px', '504px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try7in5',
                            display: 'none',
                            type: 'rect',
                            rect: ['369px', '490px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'tile71',
                            display: 'none',
                            type: 'rect',
                            rect: ['4px', '569px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile75',
                            display: 'none',
                            type: 'rect',
                            rect: ['224px', '570px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile72',
                            display: 'none',
                            type: 'rect',
                            rect: ['59px', '570px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(211,43,85,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile73',
                            display: 'none',
                            type: 'rect',
                            rect: ['114px', '570px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile74',
                            display: 'none',
                            type: 'rect',
                            rect: ['169px', '570px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(211,43,85,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'try8out1',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['294px', '600px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try8out2',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['313px', '615px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try8out3',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['331px', '600px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try8out4',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['350px', '615px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try8out5',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['369px', '600px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try8in1',
                            display: 'none',
                            type: 'rect',
                            rect: ['294px', '569px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try8in2',
                            display: 'none',
                            type: 'rect',
                            rect: ['313px', '583px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try8in3',
                            display: 'none',
                            type: 'rect',
                            rect: ['332px', '569px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try8in4',
                            display: 'none',
                            type: 'rect',
                            rect: ['350px', '583px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try8in5',
                            display: 'none',
                            type: 'rect',
                            rect: ['369px', '569px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'tile81',
                            display: 'none',
                            type: 'rect',
                            rect: ['4px', '647px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile85',
                            display: 'none',
                            type: 'rect',
                            rect: ['224px', '648px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile82',
                            display: 'none',
                            type: 'rect',
                            rect: ['59px', '648px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(211,43,85,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile83',
                            display: 'none',
                            type: 'rect',
                            rect: ['114px', '648px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile84',
                            display: 'none',
                            type: 'rect',
                            rect: ['169px', '648px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(211,43,85,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'try9out1',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['294px', '678px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try9out2',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['313px', '693px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try9out3',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['331px', '678px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try9out4',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['350px', '693px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try9out5',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['369px', '678px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try9in1',
                            display: 'none',
                            type: 'rect',
                            rect: ['294px', '647px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try9in2',
                            display: 'none',
                            type: 'rect',
                            rect: ['313px', '661px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try9in3',
                            display: 'none',
                            type: 'rect',
                            rect: ['332px', '647px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try9in4',
                            display: 'none',
                            type: 'rect',
                            rect: ['350px', '661px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try9in5',
                            display: 'none',
                            type: 'rect',
                            rect: ['369px', '647px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'tile91',
                            display: 'none',
                            type: 'rect',
                            rect: ['4px', '725px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile95',
                            display: 'none',
                            type: 'rect',
                            rect: ['224px', '725px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile92',
                            display: 'none',
                            type: 'rect',
                            rect: ['59px', '725px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(211,43,85,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile93',
                            display: 'none',
                            type: 'rect',
                            rect: ['114px', '725px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(75,65,223,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'tile94',
                            display: 'none',
                            type: 'rect',
                            rect: ['169px', '725px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [5,"rgba(211,43,85,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'try10out1',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['294px', '755px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try10out2',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['313px', '770px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try10out3',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['331px', '755px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try10out4',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['350px', '770px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try10out5',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['369px', '755px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try10in1',
                            display: 'none',
                            type: 'rect',
                            rect: ['294px', '724px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try10in2',
                            display: 'none',
                            type: 'rect',
                            rect: ['313px', '738px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try10in3',
                            display: 'none',
                            type: 'rect',
                            rect: ['332px', '724px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try10in4',
                            display: 'none',
                            type: 'rect',
                            rect: ['350px', '738px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'try10in5',
                            display: 'none',
                            type: 'rect',
                            rect: ['369px', '724px', '15px', '15px', 'auto', 'auto'],
                            fill: ["rgba(38,190,16,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['394px', '0px', '0px', '794px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [3,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'In',
                            type: 'rect',
                            rect: ['1341px', '-209px', '92px', '85px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Out',
                            type: 'rect',
                            rect: ['1341px', '-105px', '92px', '83px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'teamSwitcher',
                            symbolName: 'teamSwitcher',
                            type: 'rect',
                            rect: ['399px', '0', '1004', '260', 'auto', 'auto']
                        },
                        {
                            id: 'beginBox',
                            display: 'block',
                            type: 'rect',
                            rect: ['402px', '279px', '992px', '184px', 'auto', 'auto'],
                            fill: ["rgba(250,246,238,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            c: [
                            {
                                id: 'beginButton',
                                symbolName: 'beginButton',
                                type: 'rect',
                                rect: ['285px', '42', '425', '106', 'auto', 'auto']
                            }]
                        },
                        {
                            id: 'redWins',
                            display: 'none',
                            type: 'rect',
                            rect: ['396px', '0px', '1005px', '275px', 'auto', 'auto'],
                            fill: ["rgba(177,17,17,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            c: [
                            {
                                id: 'redText',
                                type: 'text',
                                rect: ['82px', '12px', '845px', '248px', 'auto', 'auto'],
                                text: "Red Wins",
                                align: "left",
                                font: ['walter-turncoat, sans-serif', [189, "px"], "rgba(253,253,253,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'blueWins',
                            display: 'none',
                            type: 'rect',
                            rect: ['397px', '-1px', '1005px', '275px', 'auto', 'auto'],
                            fill: ["rgba(17,17,177,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            c: [
                            {
                                id: 'blueText',
                                display: 'block',
                                type: 'text',
                                rect: ['42px', '11px', '924px', '241px', 'auto', 'auto'],
                                text: "Blue Wins",
                                align: "left",
                                font: ['walter-turncoat, sans-serif', [192, "px"], "rgba(253,253,253,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'freezeTime',
                            display: 'none',
                            type: 'rect',
                            rect: ['399px', '516px', '992px', '264px', 'auto', 'auto'],
                            fill: ["rgba(250,246,238,0.66)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'endCover',
                            display: 'none',
                            type: 'rect',
                            rect: ['399px', '516px', '992px', '264px', 'auto', 'auto'],
                            fill: ["rgba(250,246,238,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            c: [
                            {
                                id: 'endButton',
                                symbolName: 'endButton',
                                type: 'rect',
                                rect: ['283px', '92px', 'undefined', 'undefined', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1400px', '800px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(250,246,238,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid142",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try3in4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid49",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile95}",
                            'none',
                            'none'
                        ],
                        [
                            "eid44",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try10out2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid180",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try1out1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid152",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile23}",
                            'none',
                            'none'
                        ],
                        [
                            "eid83",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try7in3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid53",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try9in3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid130",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try4in1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid100",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try6in1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid101",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try6out5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid94",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile65}",
                            'none',
                            'none'
                        ],
                        [
                            "eid42",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try10out4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid45",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try10out1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid38",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try10in3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid147",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try3out4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid137",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile33}",
                            'none',
                            'none'
                        ],
                        [
                            "eid132",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try4out4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4",
                            "display",
                            0,
                            0,
                            "linear",
                            "${guess4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid178",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try1out3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid170",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile11}",
                            'none',
                            'none'
                        ],
                        [
                            "eid57",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try9out4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid144",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try3in2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid140",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile31}",
                            'none',
                            'none'
                        ],
                        [
                            "eid66",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try8in5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid71",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try8out5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid251",
                            "display",
                            0,
                            0,
                            "easeInOutQuart",
                            "${beginBox}",
                            'block',
                            'block'
                        ],
                        [
                            "eid89",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try7out2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid82",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try7in4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid37",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try10in4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid162",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try2out4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid139",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile35}",
                            'none',
                            'none'
                        ],
                        [
                            "eid149",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try3out2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid43",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try10out3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid36",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try10in5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid109",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile55}",
                            'none',
                            'none'
                        ],
                        [
                            "eid39",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try10in2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid169",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile15}",
                            'none',
                            'none'
                        ],
                        [
                            "eid164",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try2out2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid163",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try2out3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid151",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile24}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1",
                            "display",
                            0,
                            0,
                            "linear",
                            "${guess1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid181",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid80",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile71}",
                            'none',
                            'none'
                        ],
                        [
                            "eid165",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try2out1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid185",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid110",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile51}",
                            'none',
                            'none'
                        ],
                        [
                            "eid81",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try7in5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid153",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile22}",
                            'none',
                            'none'
                        ],
                        [
                            "eid320",
                            "display",
                            0,
                            0,
                            "linear",
                            "${endCover}",
                            'none',
                            'none'
                        ],
                        [
                            "eid59",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try9out2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid78",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile72}",
                            'none',
                            'none'
                        ],
                        [
                            "eid65",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile81}",
                            'none',
                            'none'
                        ],
                        [
                            "eid134",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try4out2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid117",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try5out4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid265",
                            "display",
                            0,
                            0,
                            "easeInOutQuart",
                            "${blueText}",
                            'block',
                            'block'
                        ],
                        [
                            "eid40",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try10in1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid48",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile92}",
                            'none',
                            'none'
                        ],
                        [
                            "eid156",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try2in5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid108",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile52}",
                            'none',
                            'none'
                        ],
                        [
                            "eid88",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try7out3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid52",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try9in4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid99",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try6in2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid124",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile45}",
                            'none',
                            'none'
                        ],
                        [
                            "eid168",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid41",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try10out5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid173",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try1in3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid167",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile13}",
                            'none',
                            'none'
                        ],
                        [
                            "eid148",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try3out3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid159",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try2in2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid86",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try7out5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid113",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try5in3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid114",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try5in2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid255",
                            "left",
                            0,
                            0,
                            "easeInOutQuart",
                            "${beginButton}",
                            '285px',
                            '285px'
                        ],
                        [
                            "eid73",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try8out3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid84",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try7in2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid103",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try6out3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid118",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try5out3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid67",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try8in4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid120",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try5out1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid75",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try8out1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid72",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try8out4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid104",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try6out2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid105",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try6out1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid102",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try6out4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid146",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try3out5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid115",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try5in1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid77",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile73}",
                            'none',
                            'none'
                        ],
                        [
                            "eid123",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile42}",
                            'none',
                            'none'
                        ],
                        [
                            "eid174",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try1in2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid125",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile41}",
                            'none',
                            'none'
                        ],
                        [
                            "eid106",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile54}",
                            'none',
                            'none'
                        ],
                        [
                            "eid61",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile84}",
                            'none',
                            'none'
                        ],
                        [
                            "eid128",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try4in3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid158",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try2in3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid107",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile53}",
                            'none',
                            'none'
                        ],
                        [
                            "eid58",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try9out3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid145",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try3in1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid143",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try3in3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid68",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try8in3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid85",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try7in1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid56",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try9out5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid177",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try1out4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid93",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile62}",
                            'none',
                            'none'
                        ],
                        [
                            "eid55",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try9in1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid157",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try2in4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid175",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try1in1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid50",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile91}",
                            'none',
                            'none'
                        ],
                        [
                            "eid247",
                            "left",
                            0,
                            0,
                            "easeInOutQuart",
                            "${teamSwitcher}",
                            '399px',
                            '399px'
                        ],
                        [
                            "eid183",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid129",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try4in2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid92",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile63}",
                            'none',
                            'none'
                        ],
                        [
                            "eid136",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile34}",
                            'none',
                            'none'
                        ],
                        [
                            "eid138",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile32}",
                            'none',
                            'none'
                        ],
                        [
                            "eid252",
                            "display",
                            0,
                            0,
                            "easeInOutQuart",
                            "${blueWins}",
                            'none',
                            'none'
                        ],
                        [
                            "eid253",
                            "display",
                            0,
                            0,
                            "easeInOutQuart",
                            "${redWins}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3",
                            "display",
                            0,
                            0,
                            "linear",
                            "${guess3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid51",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try9in5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid63",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile82}",
                            'none',
                            'none'
                        ],
                        [
                            "eid46",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile94}",
                            'none',
                            'none'
                        ],
                        [
                            "eid171",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try1in5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid74",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try8out2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid135",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try4out1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid76",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile74}",
                            'none',
                            'none'
                        ],
                        [
                            "eid70",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try8in1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid47",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile93}",
                            'none',
                            'none'
                        ],
                        [
                            "eid131",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try4out5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid5",
                            "display",
                            0,
                            0,
                            "linear",
                            "${guess5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid126",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try4in5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid116",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try5out5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid96",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try6in5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid90",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try7out1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid64",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile85}",
                            'none',
                            'none'
                        ],
                        [
                            "eid122",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile43}",
                            'none',
                            'none'
                        ],
                        [
                            "eid95",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile61}",
                            'none',
                            'none'
                        ],
                        [
                            "eid97",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try6in4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid166",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile14}",
                            'none',
                            'none'
                        ],
                        [
                            "eid161",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try2out5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid112",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try5in4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid98",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try6in3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid150",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try3out1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid69",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try8in2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid121",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile44}",
                            'none',
                            'none'
                        ],
                        [
                            "eid179",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try1out2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid133",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try4out3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid186",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try1in4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid154",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile25}",
                            'none',
                            'none'
                        ],
                        [
                            "eid119",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try5out2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid176",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try1out5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid54",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try9in2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid184",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile05}",
                            'none',
                            'none'
                        ],
                        [
                            "eid87",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try7out4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid155",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile21}",
                            'none',
                            'none'
                        ],
                        [
                            "eid79",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile75}",
                            'none',
                            'none'
                        ],
                        [
                            "eid111",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try5in5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid62",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile83}",
                            'none',
                            'none'
                        ],
                        [
                            "eid182",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid266",
                            "display",
                            0,
                            0,
                            "easeInOutQuart",
                            "${freezeTime}",
                            'none',
                            'none'
                        ],
                        [
                            "eid60",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try9out1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid91",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tile64}",
                            'none',
                            'none'
                        ],
                        [
                            "eid127",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try4in4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid160",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try2in1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid2",
                            "display",
                            0,
                            0,
                            "linear",
                            "${guess2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid141",
                            "display",
                            0,
                            0,
                            "linear",
                            "${try3in5}",
                            'none',
                            'none'
                        ],
                            [ "eid214", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${teamSwitcher}', [0] ] ]
                    ]
                }
            },
            "teamSwitcher": {
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
                            rect: ['0px', '0px', '1000px', '260px', 'auto', 'auto'],
                            id: 'teams',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(192,192,192,1)'],
                            c: [
                            {
                                type: 'rect',
                                rect: ['1010px', '1px', '722px', '259px', 'auto', 'auto'],
                                id: 'redBox',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(177,17,17,1.00)'],
                                c: [
                                {
                                    rect: ['95px', '58px', '250px', '125px', 'auto', 'auto'],
                                    fill: ['rgba(255,255,255,1)'],
                                    id: 'timeBoxRed',
                                    stroke: [4, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    boxShadow: ['inset', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)']
                                },
                                {
                                    type: 'rect',
                                    id: 'redClear1',
                                    symbolName: 'redClear',
                                    display: 'block',
                                    rect: ['421', '90', '80', '80', 'auto', 'auto']
                                },
                                {
                                    type: 'rect',
                                    id: 'redClear2',
                                    symbolName: 'redClear',
                                    display: 'block',
                                    rect: ['509px', '90', '80', '80', 'auto', 'auto']
                                },
                                {
                                    type: 'rect',
                                    id: 'redSkip',
                                    symbolName: 'redSkip',
                                    display: 'block',
                                    rect: ['421', '175', '80', '80', 'auto', 'auto']
                                },
                                {
                                    type: 'rect',
                                    id: 'redFreeze1',
                                    symbolName: 'redFreeze',
                                    display: 'block',
                                    rect: ['421px', '3px', null, null, 'auto', 'auto']
                                },
                                {
                                    type: 'rect',
                                    id: 'redFreeze3',
                                    symbolName: 'redFreeze',
                                    display: 'block',
                                    rect: ['599px', '3px', null, null, 'auto', 'auto']
                                },
                                {
                                    type: 'rect',
                                    id: 'redFreeze2',
                                    symbolName: 'redFreeze',
                                    display: 'block',
                                    rect: ['509px', '3px', null, null, 'auto', 'auto']
                                },
                                {
                                    type: 'rect',
                                    id: 'RedCover1',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    rect: ['409px', '0px', '296px', '84px', 'auto', 'auto'],
                                    fill: ['rgba(177,17,17,0.46)']
                                },
                                {
                                    type: 'rect',
                                    id: 'RedCover2',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    rect: ['416px', '90px', '173px', '169px', 'auto', 'auto'],
                                    fill: ['rgba(177,17,17,0.46)']
                                }]
                            },
                            {
                                type: 'rect',
                                rect: ['0px', '1px', '722px', '259px', 'auto', 'auto'],
                                id: 'blueBox',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(17,17,177,1.00)'],
                                c: [
                                {
                                    rect: ['375px', '66px', '250px', '125px', 'auto', 'auto'],
                                    fill: ['rgba(255,255,255,1.00)'],
                                    id: 'timeBoxBlue',
                                    stroke: [4, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    boxShadow: ['inset', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)']
                                },
                                {
                                    rect: ['221', '89', '80', '80', 'auto', 'auto'],
                                    id: 'blueClear1',
                                    symbolName: 'blueClear',
                                    type: 'rect'
                                },
                                {
                                    rect: ['134px', '89', '80', '80', 'auto', 'auto'],
                                    id: 'blueClear2',
                                    symbolName: 'blueClear',
                                    type: 'rect'
                                },
                                {
                                    rect: ['221px', '4px', '80', '80', 'auto', 'auto'],
                                    id: 'blueFreeze1',
                                    symbolName: 'blueFreeze',
                                    type: 'rect'
                                },
                                {
                                    rect: ['134px', '4px', '80', '80', 'auto', 'auto'],
                                    id: 'blueFreeze2',
                                    symbolName: 'blueFreeze',
                                    type: 'rect'
                                },
                                {
                                    rect: ['48px', '4px', '80', '80', 'auto', 'auto'],
                                    id: 'blueFreeze3',
                                    symbolName: 'blueFreeze',
                                    type: 'rect'
                                },
                                {
                                    rect: ['221', '175', '80', '80', 'auto', 'auto'],
                                    id: 'blueSkip',
                                    symbolName: 'blueSkip',
                                    type: 'rect'
                                },
                                {
                                    type: 'rect',
                                    rect: ['37px', '1px', '296px', '83px', 'auto', 'auto'],
                                    id: 'BlueCover1',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    display: 'block',
                                    fill: ['rgba(17,17,177,0.47)']
                                },
                                {
                                    type: 'rect',
                                    rect: ['134px', '83px', '173px', '179px', 'auto', 'auto'],
                                    id: 'BlueCover2',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    display: 'none',
                                    fill: ['rgba(17,17,177,0.47)']
                                }]
                            },
                            {
                                rect: ['739px', '21px', '250px', '200px', 'auto', 'auto'],
                                fill: ['rgba(255,255,255,1.00)'],
                                id: 'target',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                boxShadow: ['', 1, 1, 11, 3, 'rgba(0,0,0,0.65098)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1004px', '260px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid305",
                            "display",
                            0,
                            0,
                            "easeInOutQuart",
                            "${redSkip}",
                            'block',
                            'block'
                        ],
                        [
                            "eid197",
                            "left",
                            0,
                            1000,
                            "easeInOutQuad",
                            "${redBox}",
                            '1010px',
                            '282px'
                        ],
                        [
                            "eid205",
                            "left",
                            1000,
                            1000,
                            "easeInOutQuad",
                            "${redBox}",
                            '282px',
                            '1009px'
                        ],
                        [
                            "eid330",
                            "display",
                            996,
                            0,
                            "linear",
                            "${BlueCover2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid189",
                            "left",
                            0,
                            1000,
                            "easeInOutQuart",
                            "${target}",
                            '377px',
                            '14px'
                        ],
                        [
                            "eid207",
                            "left",
                            1000,
                            1000,
                            "easeInOutQuad",
                            "${target}",
                            '14px',
                            '739px'
                        ],
                        [
                            "eid302",
                            "display",
                            0,
                            0,
                            "easeInOutQuart",
                            "${redFreeze3}",
                            'block',
                            'block'
                        ],
                        [
                            "eid303",
                            "display",
                            0,
                            0,
                            "easeInOutQuart",
                            "${redClear1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid300",
                            "display",
                            0,
                            0,
                            "easeInOutQuart",
                            "${redFreeze1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid304",
                            "display",
                            0,
                            0,
                            "easeInOutQuart",
                            "${redClear2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid323",
                            "display",
                            996,
                            0,
                            "linear",
                            "${RedCover1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid329",
                            "display",
                            996,
                            0,
                            "linear",
                            "${BlueCover1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid212",
                            "left",
                            1000,
                            1000,
                            "easeInOutQuad",
                            "${blueBox}",
                            '-722px',
                            '0px'
                        ],
                        [
                            "eid301",
                            "display",
                            0,
                            0,
                            "easeInOutQuart",
                            "${redFreeze2}",
                            'block',
                            'block'
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
                            rect: ['0px', '0px', '423px', '104px', 'auto', 'auto'],
                            boxShadow: ['inset', 0, -2, 3, 0, 'rgba(0,0,0,0.65098)'],
                            fill: ['rgba(249,247,245,1)', [98, [['rgba(255,255,255,1.00)', 0], ['rgba(82,108,166,1.00)', 100]]]],
                            c: [
                            {
                                type: 'text',
                                text: 'BEGIN<br>',
                                id: 'Text',
                                textStyle: ['', '', '97px', '', ''],
                                font: ['walter-turncoat, sans-serif', [86, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                rect: ['83px', '2px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '425px', '106px']
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
            "redClear": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'redClear',
                            stroke: [4, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['0px', '0px', '80px', '80px', 'auto', 'auto'],
                            boxShadow: ['', 3, 0, 3, 0, 'rgba(0,0,0,0.65098)'],
                            fill: ['rgba(131,3,3,1.00)'],
                            c: [
                            {
                                type: 'image',
                                id: 'squegeeblue',
                                rect: ['15px', '21px', '62px', '49px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/squegeeblue.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '80px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid269",
                            "boxShadow.offsetV",
                            500,
                            500,
                            "easeInOutQuart",
                            "${redClear}",
                            '3px',
                            '0px'
                        ],
                        [
                            "eid271",
                            "boxShadow.offsetH",
                            500,
                            500,
                            "easeInOutQuart",
                            "${redClear}",
                            '3px',
                            '0px'
                        ],
                        [
                            "eid270",
                            "left",
                            500,
                            500,
                            "easeInOutQuart",
                            "${redClear}",
                            '-2px',
                            '0px'
                        ],
                        [
                            "eid268",
                            "top",
                            500,
                            500,
                            "easeInOutQuart",
                            "${redClear}",
                            '-2px',
                            '0px'
                        ]
                    ]
                }
            },
            "blueClear": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'blueClear',
                            stroke: [4, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '80px', '80px', 'auto', 'auto'],
                            boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)'],
                            fill: ['rgba(5,5,124,1.00)'],
                            c: [
                            {
                                type: 'image',
                                id: 'squegee',
                                rect: ['12px', '24px', '67px', '53px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/squegee.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '80px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid312",
                            "boxShadow.offsetV",
                            500,
                            500,
                            "easeInOutQuart",
                            "${blueClear}",
                            '3px',
                            '0px'
                        ],
                        [
                            "eid311",
                            "top",
                            500,
                            500,
                            "easeInOutQuart",
                            "${blueClear}",
                            '-2px',
                            '0px'
                        ],
                        [
                            "eid313",
                            "boxShadow.offsetH",
                            500,
                            500,
                            "easeInOutQuart",
                            "${blueClear}",
                            '3px',
                            '0px'
                        ],
                        [
                            "eid314",
                            "left",
                            500,
                            500,
                            "easeInOutQuart",
                            "${blueClear}",
                            '-2px',
                            '0px'
                        ]
                    ]
                }
            },
            "redSkip": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'redSkip',
                            stroke: [4, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['0px', '0px', '80px', '80px', 'auto', 'auto'],
                            boxShadow: ['', 3, 0, 3, 0, 'rgba(0,0,0,0.65098)'],
                            fill: ['rgba(131,3,3,1.00)'],
                            c: [
                            {
                                type: 'image',
                                id: 'skip',
                                rect: ['15px', '15px', '50px', '50px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/skip.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '80px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid275",
                            "left",
                            500,
                            500,
                            "easeInOutQuart",
                            "${redSkip}",
                            '-2px',
                            '0px'
                        ],
                        [
                            "eid272",
                            "top",
                            500,
                            500,
                            "easeInOutQuart",
                            "${redSkip}",
                            '-2px',
                            '0px'
                        ],
                        [
                            "eid274",
                            "boxShadow.offsetH",
                            500,
                            500,
                            "easeInOutQuart",
                            "${redSkip}",
                            '3px',
                            '0px'
                        ],
                        [
                            "eid273",
                            "boxShadow.offsetV",
                            500,
                            500,
                            "easeInOutQuart",
                            "${redSkip}",
                            '3px',
                            '0px'
                        ]
                    ]
                }
            },
            "blueSkip": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'blueSkip',
                            stroke: [4, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '80px', '80px', 'auto', 'auto'],
                            boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)'],
                            fill: ['rgba(5,5,124,1.00)'],
                            c: [
                            {
                                type: 'image',
                                id: 'skip',
                                rect: ['17px', '17px', '50px', '50px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/skip.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '80px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid279",
                            "boxShadow.offsetH",
                            500,
                            500,
                            "easeInOutQuart",
                            "${blueSkip}",
                            '3px',
                            '0px'
                        ],
                        [
                            "eid278",
                            "left",
                            500,
                            500,
                            "easeInOutQuart",
                            "${blueSkip}",
                            '-2px',
                            '0px'
                        ],
                        [
                            "eid277",
                            "boxShadow.offsetV",
                            500,
                            500,
                            "easeInOutQuart",
                            "${blueSkip}",
                            '3px',
                            '0px'
                        ],
                        [
                            "eid276",
                            "top",
                            500,
                            500,
                            "easeInOutQuart",
                            "${blueSkip}",
                            '-2px',
                            '0px'
                        ]
                    ]
                }
            },
            "blueFreeze": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'blueFreeze',
                            stroke: [4, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '80px', '80px', 'auto', 'auto'],
                            boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)'],
                            fill: ['rgba(5,5,124,1.00)'],
                            c: [
                            {
                                type: 'image',
                                id: 'freeze2',
                                rect: ['5px', '5px', '70px', '70px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/freeze.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '80px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid316",
                            "boxShadow.offsetV",
                            500,
                            500,
                            "easeInOutQuart",
                            "${blueFreeze}",
                            '3px',
                            '0px'
                        ],
                        [
                            "eid317",
                            "boxShadow.offsetH",
                            500,
                            500,
                            "easeInOutQuart",
                            "${blueFreeze}",
                            '3px',
                            '0px'
                        ],
                        [
                            "eid318",
                            "left",
                            500,
                            500,
                            "easeInOutQuart",
                            "${blueFreeze}",
                            '-2px',
                            '0px'
                        ],
                        [
                            "eid315",
                            "top",
                            500,
                            500,
                            "easeInOutQuart",
                            "${blueFreeze}",
                            '-2px',
                            '0px'
                        ]
                    ]
                }
            },
            "redFreeze": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'redCircle',
                            stroke: [4, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '80px', '80px', 'auto', 'auto'],
                            boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)'],
                            fill: ['rgba(131,3,3,1.00)'],
                            c: [
                            {
                                type: 'image',
                                id: 'freeze',
                                rect: ['5px', '5px', '70px', '70px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/freeze.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '80px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid292",
                            "boxShadow.offsetH",
                            500,
                            500,
                            "easeInOutQuart",
                            "${redCircle}",
                            '3px',
                            '0px'
                        ],
                        [
                            "eid290",
                            "top",
                            500,
                            500,
                            "easeInOutQuart",
                            "${redCircle}",
                            '-2px',
                            '0px'
                        ],
                        [
                            "eid293",
                            "left",
                            500,
                            500,
                            "easeInOutQuart",
                            "${redCircle}",
                            '-2px',
                            '0px'
                        ],
                        [
                            "eid291",
                            "boxShadow.offsetV",
                            500,
                            500,
                            "easeInOutQuart",
                            "${redCircle}",
                            '3px',
                            '0px'
                        ]
                    ]
                }
            },
            "endButton": {
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
                            rect: ['0px', '0px', '443px', '123px', 'auto', 'auto'],
                            boxShadow: ['inset', -2, -2, 3, 0, 'rgba(0,0,0,0.65098)'],
                            fill: ['rgba(0,6,239,1.00)', [90, [['rgba(122,5,5,1.00)', 0], ['rgba(255,0,15,1.00)', 100]]]],
                            c: [
                            {
                                rect: ['12px', '13px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['walter-turncoat, sans-serif', [86, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                textStyle: ['', '', '97px', '', ''],
                                id: 'Text',
                                text: 'New Game',
                                textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 1],
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '445px', '131px']
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
                            [90,[['rgba(122,5,5,1.00)',0],['rgba(255,0,15,1.00)',100]]],
                            [105,[['rgba(82,108,166,1.00)',0],['rgba(255,255,255,1.00)',100]]]
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("matherMind_edgeActions.js");
})("EDGE-1130454706");
