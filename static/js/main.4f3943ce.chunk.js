(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(n,t,e){n.exports=e(18)},17:function(n,t,e){},18:function(n,t,e){"use strict";e.r(t);var r=e(2),i=e.n(r),o=e(9),u=e.n(o),a=(e(17),e(1)),c=e(4),l=e(0),s=e(10),f=["#ff000044","#00ff0044","#0000ff44","#ffa50044","#ffff0066","#00800044","#6b8e2344","#00ffff44","#008b8b44","#ff00ff44","#8b008b44","#ff69b444","#70809044","rgba(30, 30, 200, 0.4)","rgba(200, 100, 100, 0.4)","rgba(100, 200, 150, 0.4)","#20b2aa66","#80008066","#4b008266","#ffa07a66","#afeeee66","#1e90ff66","#adff2f66","#cd5c5c66","#ff149366","#6a5acd66","#ff7f5066"],d={main:"#06a77d",minor:"#03644b",background:"#eee",gridButtonHover:"rgba(0, 0, 0, 0.3)",gridButton:"rgba(0, 100, 50, 0.03)",gridButtonTrue:"#50c1a4",gridButtonDontCare:"orange"};function m(){var n=Object(a.a)(["\n          font-weight: normal;\n          color: ",";\n        "]);return m=function(){return n},n}function b(){var n=Object(a.a)(["\n          color: ",";\n        "]);return b=function(){return n},n}function v(){var n=Object(a.a)(["\n        text-align: center;\n      "]);return v=function(){return n},n}function p(){var n=Object(a.a)(["\n      display: flex;\n      flex-direction: column;\n      padding: 1rem;\n    "]);return p=function(){return n},n}var h=function(n){var t=n.children,e=n.title,r=n.subtitle;return Object(l.c)("div",{css:Object(l.b)(p())},Object(l.c)("header",{css:Object(l.b)(v())},Object(l.c)("h1",{css:Object(l.b)(b(),d.main)},e),Object(l.c)("h2",{css:Object(l.b)(m(),d.minor)},r)),t)};function g(){var n=Object(a.a)(["\n  padding: 0 1rem;\n  height: 100%;\n  background: ",";\n  font-weight: bold;\n  cursor: pointer;\n  color: white;\n"]);return g=function(){return n},n}function O(){var n=Object(a.a)(["\n  padding: 0 1rem;\n  height: 100%;\n  color: ",";\n  font-weight: bold;\n  cursor: pointer;\n  &:hover {\n    background: ",";\n    color: white;\n  }\n"]);return O=function(){return n},n}var j=Object(l.b)(O(),d.main,d.main),x=Object(l.b)(g(),d.main);var y=function(n){var t=n.activeButtonNum,e=n.varNum,r=n.onClick,i=t===e?x:j;return Object(l.c)("li",null,Object(l.c)("button",{css:i,onClick:r.bind(null,e)},e))};function w(){var n=Object(a.a)(["\n          display: flex;\n          height: 100%;\n        "]);return w=function(){return n},n}function C(){var n=Object(a.a)(["\n        background: white;\n        border-radius: 5px;\n        height: 40px;\n        border: 2.5px solid ",";\n      "]);return C=function(){return n},n}function k(){var n=Object(a.a)(["\n      color: ",";\n      font-weight: bold;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: left;\n      height: 100%;\n      padding: 0 1.5rem;\n    "]);return k=function(){return n},n}var S=function(n){var t=n.activeButton,e=n.onClick;return Object(l.c)("div",{css:Object(l.b)(k(),d.main)},"Variables",Object(l.c)("nav",{css:Object(l.b)(C(),d.main)},Object(l.c)("ul",{css:Object(l.b)(w())},Object(l.c)(y,{onClick:e,varNum:2,activeButtonNum:t}),Object(l.c)(y,{onClick:e,varNum:3,activeButtonNum:t}),Object(l.c)(y,{onClick:e,varNum:4,activeButtonNum:t}),Object(l.c)(y,{onClick:e,varNum:5,activeButtonNum:t}),Object(l.c)(y,{onClick:e,varNum:6,activeButtonNum:t}))))};function B(){var n=Object(a.a)(["\n            border: 2.5px solid ",";\n            border-radius: 5px;\n            height: 40px;\n            text-align: center;\n            color: ",";\n            font-family: inherit;\n            font-size: 1rem;\n          "]);return B=function(){return n},n}function M(){var n=Object(a.a)(["\n        color: ",";\n        font-weight: bold;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: left;\n        width: 100%;\n      "]);return M=function(){return n},n}function T(){var n=Object(a.a)(["\n        display: flex;\n        justify-content: center;\n        width: 100%;\n        padding: 0 1.5rem;\n      "]);return T=function(){return n},n}function N(n){var t=n.onMintermInput,e=Object(r.useState)(""),i=Object(c.a)(e,2),o=i[0],u=i[1];return Object(l.c)("form",{css:Object(l.b)(T()),onSubmit:function(n){n.preventDefault();var e=function(n){var t={terms:new Set,dontCares:new Set};return n.split(" ").filter(function(n){return""!==n}).forEach(function(n){if("d"===n[0]){var e=Number.parseInt(n.substring(1));if(Number.isNaN(e))return;t.dontCares.add(e)}else t.terms.add(Number.parseInt(n))}),t.terms=Array.from(t.terms),t.dontCares=Array.from(t.dontCares),t}(o);t(e),u("")}},Object(l.c)("label",{css:Object(l.b)(M(),d.main)},"Minterms",Object(l.c)("input",{css:Object(l.b)(B(),d.main,d.main),type:"text",id:"minterm-input",name:"minterm-input",placeholder:"2 3 d4 10...",value:o,onChange:function(n){var t=n.target.value.match(/[0-9d ]/g),e=t?t.join(""):"";u(e)}})))}N.defaultProps={onMintermInput:function(){}};var z=N;function G(){var n=Object(a.a)(["\n  padding: 0 1rem;\n  margin-top: 24px;\n  height: 40px;\n  color: ",";\n  background: white;\n  border-radius: 5px;\n  border: 2.5px solid ",";\n  font-weight: bold;\n  cursor: pointer;\n  &:hover {\n    background: ",";\n    color: white;\n  }\n"]);return G=function(){return n},n}var A=Object(l.b)(G(),d.main,d.main,d.main);var L=function(n){var t=n.onClick;return Object(l.c)("div",null,Object(l.c)("button",{css:A,onClick:function(){return t()}},"Clear"))};function I(){var n=Object(a.a)(["\n        display: flex;\n        flex-direction: row;\n        width: 70%;\n        @media (max-width: 584px) {\n          display: none;\n        }\n      "]);return I=function(){return n},n}function V(){var n=Object(a.a)(["\n      position: fixed;\n      bottom: 0;\n      right: 0;\n      left: 0;\n      display: flex;\n      align-items: center;\n      justify-content: space-around;\n      padding: 2rem 0;\n    "]);return V=function(){return n},n}var E=function(n){var t=n.activeButton,e=n.onMintermInput,r=n.onClearButtonClick,i=n.onPanelClick;return Object(l.c)("div",{css:Object(l.b)(V())},Object(l.c)("div",{css:Object(l.b)(I())},Object(l.c)(z,{onMintermInput:e}),Object(l.c)(L,{onClick:r})),Object(l.c)(S,{onClick:i,activeButton:t}))},D={2:{leftLabelMap:["A"],leftTerms:["0","1"],topLabelMap:["B"],topTerms:["0","1"],gridSize:"150px"},3:{leftLabelMap:["A"],leftTerms:["0","1"],topLabelMap:["B","C"],topTerms:["00","01","11","10"],gridSize:"150px"},4:{leftLabelMap:["A","B"],leftTerms:["00","01","11","10"],topLabelMap:["C","D"],topTerms:["00","01","11","10"],gridSize:"150px"},5:{leftLabelMap:["A","B","C"],leftTerms:["000","001","011","010","110","111","101","100"],topLabelMap:["D","E"],topTerms:["00","01","11","10"],gridSize:"75px"},6:{leftLabelMap:["A","B","C"],leftTerms:["000","001","011","010","110","111","101","100"],topLabelMap:["D","E","F"],topTerms:["000","001","011","010","110","111","101","100"],gridSize:"75px"},default:{leftLabelMap:[],leftTerms:[],topLabelMap:[],topTerms:[],gridSize:"75px"}};function P(){var n=Object(a.a)(["\n      position: absolute;\n      height: ","px;\n      width: ","px;\n      background: ",";\n      left: 0;\n      top: ","px;\n      @media (max-width: 600px) {\n        width: ","px;\n      }\n    "]);return P=function(){return n},n}function _(n){var t=n.groupingColors,e=n.gridBoxSize,r=parseInt(e,10)-8,o=t.map(function(n,e){return Object(l.c)("div",{css:Object(l.b)(P(),r/t.length,r,n,r/t.length*e,r/2-3)})});return Object(l.c)(i.a.Fragment,null,o)}_.defaultProps={groupingColors:[]};var R=_;function U(){var n=Object(a.a)(["\n        position: absolute;\n        bottom: 5px;\n        right: 5px;\n        font-size: 0.8rem;\n        @media (max-width: 600px) {\n          display: none;\n        }\n      "]);return U=function(){return n},n}function W(){var n=Object(a.a)(["\n        position: absolute;\n        top: 5px;\n        left: 5px;\n        font-size: 0.8rem;\n      "]);return W=function(){return n},n}function X(){var n=Object(a.a)(["\n        font-size: 1rem;\n      "]);return X=function(){return n},n}function F(){var n=Object(a.a)(["\n        width: 100%;\n        height: 100%;\n        background: ",";\n        border-radius: 3px;\n        position: relative;\n        &:hover {\n          cursor: pointer;\n          outline: 2px solid ",";\n        }\n        ","\n      "]);return F=function(){return n},n}var J=function(n){var t=n.binaryValue,e=n.decimalValue,r=n.gridValue,i=n.gridBoxSize,o=n.onClick,u="1"===r.value?"border: 2.5px solid ".concat(d.gridButtonTrue,";"):"X"===r.value?"border: 2.5px solid ".concat(d.gridButtonDontCare,";"):void 0;return Object(l.c)("button",{css:Object(l.b)(F(),d.gridButton,d.gridButtonHover,u),onClick:function(){return o(e)}},Object(l.c)(R,{groupingColors:r.colors,gridBoxSize:i}),Object(l.c)("p",{css:Object(l.b)(X())},r.value),Object(l.c)("p",{css:Object(l.b)(W())},e),Object(l.c)("p",{css:Object(l.b)(U())},t))};function Q(){var n=Object(a.a)(["\n      display: flex;\n      flex-direction: row;\n      height: ",";\n    "]);return Q=function(){return n},n}function q(){var n=Object(a.a)(["\n        width: ",";\n        padding: 2px;\n        ","\n        @media (max-width: 600px) {\n          width: ","px;\n        }\n      "]);return q=function(){return n},n}var H=function(n){var t=n.topTerms,e=n.leftTerm,r=n.gridValues,i=n.onClick,o=n.gridBoxSize,u=[];return t.forEach(function(n,t){var a=e+n,c=parseInt(a,2),s=0!==t&&t%4===0?"margin-left: 15px;":"";u.push(Object(l.c)("div",{css:Object(l.b)(q(),o,s,parseInt(o,10)/2)},Object(l.c)(J,{decimalValue:c,binaryValue:a,gridValue:r[c],gridBoxSize:o,onClick:i})))}),Object(l.c)("div",{css:Object(l.b)(Q(),o)},u)};function K(){var n=Object(a.a)(["\n      display: flex;\n      flex-direction: row;\n      margin-bottom: 15px;\n      color: ",";\n    "]);return K=function(){return n},n}function Y(){var n=Object(a.a)(["\n      width: ",";\n      text-align: center;\n      ","\n      @media (max-width: 600px) {\n        width: ","px;\n        font-size: 0.9rem;\n      }\n    "]);return Y=function(){return n},n}var Z=function(n){var t=n.labels,e=n.gridBoxSize,r=[];return t.forEach(function(n,t){var i=0!==t&&t%4===0?"margin-left: 15px;":"";r.push(Object(l.c)("div",{css:Object(l.b)(Y(),e,i,parseInt(e,10)/2)},n))}),Object(l.c)("div",{css:Object(l.b)(K(),d.main)},r)};function $(){var n=Object(a.a)(["\n      display: flex;\n      flex-direction: column-reverse;\n      color: ",";\n    "]);return $=function(){return n},n}function nn(){var n=Object(a.a)(["\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      height: ",";\n      padding: 0 2px;\n      margin-right: 15px;\n      ","\n      @media (max-width: 600px) {\n        font-size: 0.9rem;\n      }\n    "]);return nn=function(){return n},n}var tn=function(n){var t=n.labels,e=n.gridBoxSize,r=[];return t.reverse().forEach(function(n,t){var i=0!==t&&t%4===0?"margin-bottom: 15px;":"";r.push(Object(l.c)("div",{css:Object(l.b)(nn(),e,i)},n))}),Object(l.c)("div",{css:Object(l.b)($(),d.main)},r)};function en(){var n=Object(a.a)(["\n        display: flex;\n        flex-direction: column;\n      "]);return en=function(){return n},n}function rn(){var n=Object(a.a)(["\n      display: flex;\n      flex-direction: rows;\n      padding-bottom: 20px;\n      flex-shrink: 0;\n    "]);return rn=function(){return n},n}function on(){var n=Object(a.a)(["\n      ","\n    "]);return on=function(){return n},n}function un(n,t){return n.split("").map(function(n,e){var r=t[e]?t[e]:"(NA)";return"1"===n?r:r+"'"}).join("")}var an=function(n){var t=n.leftTerms,e=n.topTerms,r=n.leftLabelMap,i=n.topLabelMap,o=n.gridValues,u=n.onClick,a=n.gridBoxSize,c=t.map(function(n){return un(n,r)}),s=e.map(function(n){return un(n,i)}),f=t.map(function(n,t){var r=0!==t&&t%4===0?"margin-top: 15px;":"";return Object(l.c)("div",{css:Object(l.b)(on(),r)},Object(l.c)(H,{topTerms:e,leftTerm:n,gridValues:o,onClick:u,gridBoxSize:a}))});return Object(l.c)("div",{css:Object(l.b)(rn())},Object(l.c)(tn,{labels:c,gridBoxSize:a}),Object(l.c)("div",{css:Object(l.b)(en())},Object(l.c)(Z,{labels:s,gridBoxSize:a}),f))};function cn(){var n=Object(a.a)(["\n          border-radius: 50%;\n          height: 12px;\n          width: 12px;\n          background: ",";\n          margin-right: 10px;\n          flex-shrink: 0;\n        "]);return cn=function(){return n},n}function ln(){var n=Object(a.a)(["\n          padding: 10px;\n          padding-left: 0px;\n          display: flex;\n          align-items: center;\n        "]);return ln=function(){return n},n}var sn=function(n){var t=n.mintermGroup,e=t.decimalRepresentation.map(function(n,e){return e===t.decimalRepresentation.length-1?n:"".concat(n,", ")});return e.unshift("("),e.push(") "),Object(l.c)("div",{css:Object(l.b)(ln())},Object(l.c)("div",{css:Object(l.b)(cn(),t.color)}),e.join(""),t.outputTerm)};function fn(){var n=Object(a.a)(["\n              font-family: inherit;\n              font-size: 0.9rem;\n              padding-left: .5rem;\n              cursor: pointer;\n            "]);return fn=function(){return n},n}function dn(){var n=Object(a.a)(["\n        display: flex;\n        flex-direction: row;\n        padding-bottom: 15px;\n        margin-bottom: 10px;\n        text-align: center;\n        color: ",";\n        width: 100%;\n        @media (max-width: 600px) {\n          border-bottom: 1.5px solid ",";\n        }\n      "]);return dn=function(){return n},n}function mn(){var n=Object(a.a)(["\n      display: flex;\n      flex-shrink: 0;\n      flex-direction: column;\n      margin-left: 50px;\n      width: 200px;\n      @media (max-width: 600px) {\n        width: 80%;\n        margin-left: 0;\n        padding-top: 20px;\n      }\n    "]);return mn=function(){return n},n}function bn(n){var t=n.mintermGroups,e=n.onNextGroupingButtonClick,r=n.numberOfGroupings;return Object(l.c)("div",{css:Object(l.b)(mn())},Object(l.c)("div",{css:Object(l.b)(dn(),d.main,d.minor)},Object(l.c)("h4",null,"Groups (",t.length,")"),r>1&&Object(l.c)("button",{onClick:e,css:Object(l.b)(fn())},"Next")),t.map(function(n,t){return Object(l.c)(sn,{mintermGroup:n,key:t})}))}bn.defaultProps={mintermGroupings:[]};var vn=bn;function pn(){var n=Object(a.a)(["\n      display: flex;\n      justify-content: center;\n      align-items: flex-start;\n      flex-direction: row;\n      padding: 40px 0;\n      margin-bottom: 90px;\n      flex-wrap: no-wrap;\n      @media (max-width: 600px) {\n        flex-wrap: wrap;\n      }\n    "]);return pn=function(){return n},n}function hn(n){var t=n.varNum,e=n.gridValues,r=n.onGridButtonClick,i=n.gridBoxSize,o=n.mintermGroups,u=n.selectedMintermGroup,a=n.onNextGroupingButtonClick,c=n.numberOfGroupings,s=D[t]?D[t]:D.default,f=s.leftTerms,d=s.topTerms,m=s.leftLabelMap,b=s.topLabelMap;return Object(l.c)("div",{css:Object(l.b)(pn())},Object(l.c)(an,{leftTerms:f,topTerms:d,leftLabelMap:m,topLabelMap:b,gridValues:e,onClick:r,gridBoxSize:i}),Object(l.c)(vn,{mintermGroups:o,key:o.length,selectedMintermGroup:u,numberOfGroupings:c,onNextGroupingButtonClick:a}))}hn.defaultProps={selectedMintermGroup:0,gridBoxSize:"75px",mintermGroups:[],numberOfGroupings:1};var gn=hn,On=e(5),jn=e(3),xn=e(6),yn={insertIntoString:function(n,t,e){return n.slice(0,t)+e+n.slice(t)},range:function(n){return Object(On.a)(Array(n).keys())},convertToBinaryString:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return n.toString(2).padStart(t,"0")},convertBinaryStrToBoolArr:function(n){return n.split("").map(function(n){return"1"===n})},xorBoolArrays:function(n,t){for(var e=Math.min(n.length,t.length),r=[],i=0;i<e;i++)r.push(n[i]&&!t[i]||!n[i]&&t[i]);return r},generateMasks:function(n){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Math.pow(2,n)-1;return this.range(r).map(function(e){return t.convertToBinaryString(e+1,n)}).map(function(n){var r=n;return e.forEach(function(n){return r=t.insertIntoString(r,n,"0")}),r}).map(this.convertBinaryStrToBoolArr)},generateFixedIndicies:function(n){var t=this,e=this.generateMasks(n).map(function(e){var r=t.range(n);return e.forEach(function(n,t){n||(r[t]=-1)}),r.filter(function(n){return-1!==n})});return[[]].concat(Object(On.a)(e)).sort(function(n,t){return n.length>t.length})},filterOnlySubarrayOfSmallestLength:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Number.MAX_VALUE,e=!0,r=!1,i=void 0;try{for(var o,u=n[Symbol.iterator]();!(e=(o=u.next()).done);e=!0){var a=o.value;a.length<t&&(t=a.length)}}catch(c){r=!0,i=c}finally{try{e||null==u.return||u.return()}finally{if(r)throw i}}return n.filter(function(n){return n.length===t})}},wn=function(){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Object(jn.a)(this,n),this.terms="string"===typeof t?yn.convertBinaryStrToBoolArr(t):"number"===typeof t?yn.convertBinaryStrToBoolArr(yn.convertToBinaryString(t)):t,this.isDontCare=e}return Object(xn.a)(n,[{key:"getTerm",value:function(n){return n<0||n>=this.terms.length?null:this.terms[n]}},{key:"getBinaryString",value:function(){return this.terms.map(function(n){return n?"1":"0"}).join("")}},{key:"getDecimal",value:function(){return parseInt(this.getBinaryString(),2)}},{key:"getNeighborTerms",value:function(){var t=this,e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).filter(function(n){return n>=0&&n<t.terms.length});e.sort();var r=this.terms.length-e.length;return r<0?[]:yn.generateMasks(r,e).map(function(n){return yn.xorBoolArrays(n,t.terms)}).map(function(t){return new n(t)})}},{key:"getSize",value:function(){return this.terms.length}},{key:"equals",value:function(n){if(this.terms.length!==n.terms.length)return!1;for(var t=0;t<this.terms.length;t++)if(this.terms[t]!==n.terms[t])return!1;return!0}}]),n}();var Cn=function(){function n(t,e,r){Object(jn.a)(this,n),this.minterms=t,this.fixedIndicies=e,this.groupSize=t.length,this.mintermSize=0===this.groupSize?0:t[0].getSize(),this.outputTermRaw=this.getOutputTermRaw(),this.outputTerm=this.getOutputTerm(r),this.decimalRepresentation=function(n){return n.map(function(n){var t=n.terms.map(function(n){return n?"1":"0"}).join("");return parseInt(t,2)})}(t).sort(function(n,t){return n>t})}return Object(xn.a)(n,[{key:"getOutputTermRaw",value:function(){var n=this;if(null!=this.outputTermRaw)return this.outputTermRaw;if(0===this.groupSize)return null;var t=new Array(this.mintermSize).fill(-1);return this.fixedIndicies.forEach(function(e){t[e]=!0===n.minterms[0].getTerm(e)?1:0}),t}},{key:"getOutputTerm",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ABCDEFGHIJKLMNOPQRSTUVWXYZ";return null!=this.outputTerm?this.outputTerm:this.outputTermRaw.every(function(n){return-1===n})?"True":this.outputTermRaw.map(function(t,e){if(-1===t)return null;var r=n[e];return null==r&&(r="(N/A)"),1===t?r:r+"'"}).filter(function(n){return null!==n}).join("")}}]),n}(),kn=function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];Object(jn.a)(this,n),this.visitedMinterms=t,this.mintermQueue=e,this.groups=r,this.parent=null,this.children=[],this.activeChild=-1},Sn=function(){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];Object(jn.a)(this,n),this.root=new kn(t,e,r),this.current=this.root}return Object(xn.a)(n,[{key:"addChildToCurrent",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=new kn(n,t,e);r.parent=this.current,this.current.children.push(r)}},{key:"moveCurrentToChild",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return null==this.current.children[n]?null:(this.current=this.current.children[n],this.current)}},{key:"moveCurrentToParent",value:function(){return null==this.current.parent?null:(this.current=this.current.parent,this.current)}},{key:"moveCurrentToNextActiveChild",value:function(){this.current.activeChild+=1;var n=this.moveCurrentToChild(this.current.activeChild);return null==n?null==this.moveCurrentToParent()?(this.current=null,null):this.moveCurrentToNextActiveChild():n}},{key:"getCurrent",value:function(){return this.current}}]),n}(),Bn=function(){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];Object(jn.a)(this,n),this.numOfVariables=t;var i=e.map(function(n){return yn.convertToBinaryString(n,t)}).filter(function(n){return n.length<=t}).map(function(n){return new wn(n)}),o=r.map(function(n){return yn.convertToBinaryString(n,t)}).filter(function(n){return n.length<=t}).map(function(n){return new wn(n,!0)});this.minterms=[].concat(Object(On.a)(i),Object(On.a)(o)),this.dontCares=o}return Object(xn.a)(n,[{key:"containsMinterm",value:function(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=!0,r=!1,i=void 0;try{for(var o,u=this.minterms[Symbol.iterator]();!(e=(o=u.next()).done);e=!0){var a=o.value;if(t){if(a.equals(n)&&!n.isDontCare)return!0}else if(a.equals(n))return!0}}catch(c){r=!0,i=c}finally{try{e||null==u.return||u.return()}finally{if(r)throw i}}return!1}},{key:"containsMinterms",value:function(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=!0,r=!1,i=void 0;try{for(var o,u=n[Symbol.iterator]();!(e=(o=u.next()).done);e=!0){var a=o.value;if(!this.containsMinterm(a,t))return!1}}catch(c){r=!0,i=c}finally{try{e||null==u.return||u.return()}finally{if(r)throw i}}return!0}},{key:"addMinterm",value:function(n){this.minterms.push(n)}},{key:"addMinterms",value:function(n){var t=!0,e=!1,r=void 0;try{for(var i,o=n[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var u=i.value;this.addMinterm(u)}}catch(a){e=!0,r=a}finally{try{t||null==o.return||o.return()}finally{if(e)throw r}}}},{key:"getMintermUsingNumber",value:function(n){var t=!0,e=!1,r=void 0;try{for(var i,o=this.minterms[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var u=i.value;if(u.getDecimal()===n)return u}}catch(a){e=!0,r=a}finally{try{t||null==o.return||o.return()}finally{if(e)throw r}}return null}},{key:"getNumberOfMatchingMinterms",value:function(n){var t=this,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=0;return n.forEach(function(n){t.containsMinterm(n,e)&&(r+=1)}),r}},{key:"__getPossibleGroupingsOfLargestSize",value:function(n,t){var e=null,r=[],i=yn.generateFixedIndicies(this.numOfVariables),o=!0,u=!1,a=void 0;try{for(var c,l=i[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var s=c.value,f=n.getNeighborTerms(s);if(this.containsMinterms(f)){this.__updateOtherMintermsDontCarenessWithThisList(f);var d=[n].concat(Object(On.a)(f));if(null!=e&&d.length<e)break;e=d.length;var m=t.getNumberOfMatchingMinterms(d),b=d.length-m;r.push({group:d,numOfUnvisited:b,fixedIndicies:s})}}}catch(v){u=!0,a=v}finally{try{o||null==l.return||l.return()}finally{if(u)throw a}}return r}},{key:"__getPossibleGroupingsWithMostUnvisitedMinterms",value:function(n,t){var e=this.__getPossibleGroupingsOfLargestSize(n,t);return e.sort(function(n,t){return n.numOfUnvisited<t.numOfUnvisited}),e=e.filter(function(n){return n.numOfUnvisited===e[0].numOfUnvisited})}},{key:"getGroups",value:function(){var t=new n(this.numOfVariables);t.addMinterms(this.dontCares);for(var e=Object(On.a)(this.minterms),r=new Sn(t,e),i=[];null!=r.getCurrent();){var o=r.getCurrent(),u=o.mintermQueue,a=o.visitedMinterms,c=o.groups,l=u[0];if(null!=l)if(l.isDontCare||a.containsMinterm(l)){var s=u.slice(1);r.getCurrent().mintermQueue=s}else{var f=this.__getPossibleGroupingsWithMostUnvisitedMinterms(l,a);if(0!==f.length){var d=!0,m=!1,b=void 0;try{for(var v,p=f[Symbol.iterator]();!(d=(v=p.next()).done);d=!0){var h=v.value,g=a.createCopy();g.addMinterms(h.group);var O=[].concat(Object(On.a)(c),[h]),j=u.slice(1);r.addChildToCurrent(g,j,O)}}catch(x){m=!0,b=x}finally{try{d||null==p.return||p.return()}finally{if(m)throw b}}}else i.push(c.map(function(n){return new Cn(n.group,n.fixedIndicies)}));r.moveCurrentToNextActiveChild()}else r.moveCurrentToNextActiveChild(),i.push(c.map(function(n){return new Cn(n.group,n.fixedIndicies)}))}return yn.filterOnlySubarrayOfSmallestLength(i).map(function(n){return n.sort(function(n,t){return n.groupSize<t.groupSize})})}},{key:"__updateOtherMintermsDontCarenessWithThisList",value:function(n){var t=this;n.forEach(function(n){var e=t.getMintermUsingNumber(n.getDecimal());null!==e&&e.isDontCare&&(n.isDontCare=!0)})}},{key:"createCopy",value:function(){var t=new n(this.numOfVariables);return t.minterms=this.minterms.slice(),t.dontCares=this.dontCares.slice(),t}}]),n}();function Mn(){var n=Object(a.a)(["\n        body {\n          background: ",";\n        }\n      "]);return Mn=function(){return n},n}function Tn(){var n=Object(a.a)(["\n      height: 100vh;\n    "]);return Tn=function(){return n},n}var Nn=new s.a,zn=Nn.get("varNumPage")||"4";function Gn(){this.value="0",this.colors=[]}function An(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6;return new Array(Math.pow(2,n)).fill().map(function(){return new Gn})}function Ln(n,t,e){t.terms.filter(function(n){return n<Math.pow(2,e)}).forEach(function(t){return n[t].value="1"}),t.dontCares.filter(function(n){return n<Math.pow(2,e)}).forEach(function(t){return n[t].value="X"})}var In=function(){var n=Object(r.useState)(parseInt(zn,10)),t=Object(c.a)(n,2),e=t[0],i=t[1],o=Object(r.useState)(new Array(Math.pow(2,e)).fill().map(function(){return new Gn})),u=Object(c.a)(o,2),a=u[0],s=u[1],m=Object(r.useState)(D[e].gridSize),b=Object(c.a)(m,2),v=b[0],p=b[1],g=Object(r.useState)([]),O=Object(c.a)(g,2),j=O[0],x=O[1],y=Object(r.useState)(0),w=Object(c.a)(y,2),C=w[0],k=w[1],S=Object(r.useState)({terms:[],dontCares:[]}),B=Object(c.a)(S,2),M=B[0],T=B[1];function N(n){n.forEach(function(n){n.colors=[]})}function z(n){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach(function(t,e){t.color=f[e],t.decimalRepresentation.forEach(function(t){n[t].colors.push(f[e])})})}return Object(r.useEffect)(function(){document.title="".concat(e," Variable K-Map Visual"),Nn.set("varNumPage",e,{maxAge:604800})},[e]),Object(l.c)("div",{css:Object(l.b)(Tn())},Object(l.c)(l.a,{styles:Object(l.b)(Mn(),d.background)}),Object(l.c)(h,{title:"Karnaugh Map",subtitle:"".concat(e," Variables")}),Object(l.c)(gn,{varNum:e,gridValues:a,onGridButtonClick:function(n){k(0);var t=new Array(a.length).fill().map(function(n,t){return JSON.parse(JSON.stringify(a[t]))});t[n].value="0"===a[n].value?"1":"1"===a[n].value?"X":"0";var r=t.map(function(n,t){return"1"===n.value?t:null}).filter(function(n){return null!==n}),i=t.map(function(n,t){return"X"===n.value?t:null}).filter(function(n){return null!==n}),o={terms:r,dontCares:i},u=new Bn(e,r,i).getGroups();T(o),x(u),N(t),z(t,u[0]),s(t)},onNextGroupingButtonClick:function(){var n=C+1>=j.length?0:C+1;k(n);var t=An(e);Ln(t,M,e),N(t),z(t,j[n]),s(t)},gridBoxSize:v,mintermGroups:j[C],numberOfGroupings:j.length,selectedMintermGroup:C}),Object(l.c)(E,{onMintermInput:function(n){k(0),T(n);var t=An(e);Ln(t,n,e);var r=new Bn(e,n.terms,n.dontCares).getGroups();x(r),N(t),z(t,r[0]),s(t)},onClearButtonClick:function(){s(An(e)),x([]),k(0)},onPanelClick:function(n){i(n);var t=An(n);s(t),p(D[n].gridSize),x([])},activeButton:e}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(i.a.createElement(In,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.4f3943ce.chunk.js.map