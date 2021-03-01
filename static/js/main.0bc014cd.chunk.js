(this.webpackJsonpsorting_algorithm_visualizer=this.webpackJsonpsorting_algorithm_visualizer||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(16),i=a.n(s),o=(a(24),a.p,a(25),a(26),a(2)),c=a(5),h=a(6),l=a(3),u=a(8),p=a(7),m=a(15),d=a(45),b=a(46),j=a(47),f=a(48),g=a(49),v=a(50),O="#FF0000",x="#008000",k="#0000FF",S="#8B4513",y="#000000";function A(e){if(Array.isArray(e)){for(var t=[],a=0;a<e.length;a++)t.push(A(e[a]));return t}return e}function C(e,t,a){e[t]=[e[t][0],a]}function w(e,t,a,n){for(var r=t;r<=a;r++)C(e,r,n)}var V=a(0),I=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;Object(c.a)(this,a);var r=(n=t.call(this,e)).seedArrayToCustomValues(n.props.seedArray);return n.state={speedModifier:0,customValues:r},n.handleSpeedSliderChange=n.handleSpeedSliderChange.bind(Object(l.a)(n)),n.handleCustomValuesChange=n.handleCustomValuesChange.bind(Object(l.a)(n)),n}return Object(h.a)(a,[{key:"handleSpeedSliderChange",value:function(e){var t=e.target.value;this.props.changeAnimationSpeed(Math.pow(4,-t/10)*this.props.baseAnimationSpeed),this.setState({speedModifier:t})}},{key:"pauseAndChangeFrame",value:function(e){this.props.pause(!0),this.props.changeFrame(e)}},{key:"seedArrayToCustomValues",value:function(e){for(var t="",a=0;a<e.length;a++)t+=e[a][0]+", ";return t&&(t=t.substring(0,t.length-2)),t}},{key:"handleCustomValuesChange",value:function(e){var t=e.target.value;this.setState({customValues:t})}},{key:"randomizeArray",value:function(e){for(var t=e.slice(),a=0;a<t.length;a++){var n=Math.floor(Math.random()*(t.length-a)+a),r=[t[n],t[a]];t[a]=r[0],t[n]=r[1]}return t}},{key:"render",value:function(){var e=this,t=(this.props.frameIndex+1).toString(),a=(this.props.maxFrameIndex+1).toString();return t=t.padStart(a.length," "),Object(V.jsxs)("div",{children:[Object(V.jsxs)("div",{children:[Object(V.jsx)("div",{children:Object(V.jsxs)("div",{className:"frame-controls",children:[Object(V.jsx)("div",{children:Object(V.jsx)("span",{className:"frame-slider-label",children:"Frame: "+t+"/"+a})}),Object(V.jsx)("input",{className:"frame-slider",type:"range",min:0,max:this.props.maxFrameIndex,value:this.props.frameIndex,onChange:function(t){return e.pauseAndChangeFrame(t.target.value)}})]})}),Object(V.jsxs)("div",{className:"playback-bar",children:[Object(V.jsx)("button",{className:"btn btn-outline-dark",onClick:function(){var t=e.randomizeArray(e.props.seedArray);e.props.changeseedArray(t),e.setState({customValues:e.seedArrayToCustomValues(t)})},children:"Randomize Order"}),Object(V.jsxs)("div",{className:"step-controls",children:[Object(V.jsx)("button",{className:"btn btn-outline-dark",onClick:function(t){return e.pauseAndChangeFrame(0)},children:Object(V.jsx)(d.a,{})}),Object(V.jsx)("button",{className:"btn btn-outline-dark",onClick:function(t){return e.pauseAndChangeFrame(e.props.frameIndex-1)},children:Object(V.jsx)(b.a,{})}),Object(V.jsx)("button",{className:"btn btn-outline-dark",onClick:function(t){return e.props.pause(!e.props.isPaused)},children:this.props.isPaused?Object(V.jsx)(j.a,{}):Object(V.jsx)(f.a,{})}),Object(V.jsx)("button",{className:"btn btn-outline-dark",onClick:function(t){return e.pauseAndChangeFrame(e.props.frameIndex+1)},children:Object(V.jsx)(g.a,{})}),Object(V.jsx)("button",{className:"btn btn-outline-dark",onClick:function(t){return e.pauseAndChangeFrame(e.props.maxFrameIndex)},children:Object(V.jsx)(v.a,{})})]}),Object(V.jsxs)("label",{className:"speed",children:[Object(V.jsx)("span",{className:"speed-label",children:"Speed:"}),Object(V.jsx)("input",{className:"speed-slider",type:"range",min:-10,max:10,value:this.state.speedModifier,onChange:this.handleSpeedSliderChange})]})]})]}),Object(V.jsx)(M,{customValues:this.state.customValues,handleCustomValuesChange:this.handleCustomValuesChange,changeseedArray:this.props.changeseedArray,maxVal:this.props.maxVal,minVal:this.props.minVal,maxLength:this.props.maxLength})]})}}]),a}(r.a.Component),M=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleCustomValuesSubmission=n.handleCustomValuesSubmission.bind(Object(l.a)(n)),n.state={validCustomValueSubmission:!0},n}return Object(h.a)(a,[{key:"customValuesToseedArray",value:function(e){if(!e)return[];return e.match(/[0-9]+/g).map((function(e){return[parseInt(e),y]}))}},{key:"validateCustomValues",value:function(e){var t=/^(\s*[0-9]+\s*,)*(\s*[0-9]+\s*)?$/g;if(null==e.match(t))return!1;t=/[0-9]+/g;var a=e.match(t).map((function(e){return parseInt(e)}));return!(Math.max.apply(Math,Object(m.a)(a))>=this.props.maxVal||Math.min.apply(Math,Object(m.a)(a))<this.props.minVal||a.length>=this.props.maxLength)}},{key:"handleCustomValuesSubmission",value:function(e){var t=this.props.customValues;e.preventDefault(),this.validateCustomValues(t)?(this.props.changeseedArray(this.customValuesToseedArray(t)),this.setState({validCustomValueSubmission:!0})):this.setState({validCustomValueSubmission:!1})}},{key:"render",value:function(){var e=Object(V.jsxs)("span",{className:this.state.validCustomValueSubmission?"":"invalid-custom-value-submission",children:["Custom values must be integers greater than or equal to "+this.props.minVal+" and less than "+this.props.maxVal+".",Object(V.jsx)("br",{}),"Separate values using commas. Maximum length of "+this.props.maxLength+" values."]});return Object(V.jsxs)("div",{children:[Object(V.jsx)("form",{onSubmit:this.handleCustomValuesSubmission,children:Object(V.jsxs)("label",{className:"custom-value-submission-label",children:[Object(V.jsx)("textarea",{rows:"2",cols:"100",onChange:this.props.handleCustomValuesChange,value:this.props.customValues}),Object(V.jsx)("input",{className:"btn btn-outline-dark",type:"submit",value:"Customize Values"})]})}),Object(V.jsx)("div",{children:e})]})}}]),a}(r.a.Component),F=I,L=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"paintFrame",value:function(){var e=this.props.canvasRef.current,t=e.getContext("2d"),a=this.props.frame,n=this.props.barWidth,r=this.props.barSpacing,s=(e.width-a.length*(n+r)-r)/2,i=this.props.yOffset,c=this.props.fontSize,h=this.props.magnitudeMultiplier;t.clearRect(0,0,e.width,e.height);for(var l=0;l<a.length;l++){var u,p,m=Object(o.a)(a[l],2);u=m[0],p=m[1],t.fillStyle=p,t.fillRect(s+(n+r)*l,e.height-i,n,-u*h),t.font=c+"px Roboto Mono",t.fillText(u,s+(n+r)*l,e.height-i+c)}}},{key:"paintLegend",value:function(){var e,t,a=this.props.canvasRef.current.getContext("2d"),n=this.props.legend,r=Object(o.a)(n[0],2);e=r[0],t=r[1],a.font="20px Roboto Mono",a.fillStyle=t,a.fillText(e,95,60);for(var s=1;s<n.length;s++){var i,c,h=Object(o.a)(n[s],2);i=h[0],c=h[1],a.fillStyle=c,a.fillRect(95,50+30*s,10,10),a.font="20px Roboto Mono",a.fillText(i,110,50+30*s+10)}}},{key:"componentDidMount",value:function(){this.paintFrame(),this.paintLegend()}},{key:"render",value:function(){this.props.frame;return this.props.canvasRef.current&&(this.paintFrame(),this.paintLegend()),Object(V.jsx)("div",{children:Object(V.jsx)("canvas",{width:this.props.width,height:this.props.height,ref:this.props.canvasRef})})}}]),a}(r.a.Component);var N=function(e){var t,a=Object(o.a)(e.currentAlgorithm,2);return t=a[0],a[1],Object(V.jsx)("div",{children:Object(V.jsx)("div",{className:"select-row",children:e.algorithmOptions.map((function(a){var n=Object(o.a)(a,2),r=n[0],s=n[1],i="btn btn-outline-dark algorithm-button ";return t==r&&(i+="active "),Object(V.jsx)("button",{className:i,onClick:function(){e.changeAlgorithm([r,s]),e.runAlgorithm()},children:r},r)}))})})},R=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;Object(c.a)(this,a);var s,i,h,u=(n=t.call(this,e)).generateseedArray(n.props.arrayLength,n.props.minimum,n.props.maximum),p=Object(o.a)(n.props.defaultAlgorithm,2);p[0];var m=(0,p[1])(u),d=Object(o.a)(m,3);return s=d[0],i=d[1],h=d[2],n.state={seedArray:u,isPaused:!0,frames:s,legend:i,frameIndex:0,animationSpeed:n.props.baseAnimationSpeed,currentAlgorithm:n.props.defaultAlgorithm,description:h},n.canvasRef=r.a.createRef(),n.animationInterval=null,n.runAlgorithm=n.runAlgorithm.bind(Object(l.a)(n)),n.pause=n.pause.bind(Object(l.a)(n)),n.changeFrame=n.changeFrame.bind(Object(l.a)(n)),n.changeAnimationSpeed=n.changeAnimationSpeed.bind(Object(l.a)(n)),n.changeAlgorithm=n.changeAlgorithm.bind(Object(l.a)(n)),n.changeseedArray=n.changeseedArray.bind(Object(l.a)(n)),n}return Object(h.a)(a,[{key:"generateseedArray",value:function(e,t,a){for(var n=[],r=0;r<e;r++){var s=Math.floor(Math.random()*(a+1))+t;n.push([s,y])}return n}},{key:"runAlgorithm",value:function(){var e=this;this.setState((function(t){var a,n,r,s=Object(o.a)(t.currentAlgorithm,2);s[0];var i=(0,s[1])(t.seedArray),c=Object(o.a)(i,3);return a=c[0],n=c[1],r=c[2],clearInterval(e.animationInterval),{legend:n,frames:a,description:r,frameIndex:0,isPaused:!0}}))}},{key:"changeAlgorithm",value:function(e){this.setState({currentAlgorithm:e})}},{key:"pause",value:function(e){var t=this;e!=this.state.isPaused&&(clearInterval(this.animationInterval),e||(this.animationInterval=setInterval((function(){return t.changeFrame(t.state.frameIndex+1)}),this.state.animationSpeed)),this.setState({isPaused:e}))}},{key:"changeFrame",value:function(e){e=Math.max(0,Math.min(this.state.frames.length-1,e)),this.setState({frameIndex:e})}},{key:"changeAnimationSpeed",value:function(e){var t=this;this.state.isPaused||(clearInterval(this.animationInterval),this.animationInterval=setInterval((function(){return t.changeFrame(t.state.frameIndex+1)}),e)),this.setState({animationSpeed:e})}},{key:"changeseedArray",value:function(e){this.setState({seedArray:e}),this.runAlgorithm()}},{key:"render",value:function(){var e=this.state.frames[this.state.frameIndex];return Object(V.jsxs)("div",{children:[Object(V.jsx)(N,{currentAlgorithm:this.state.currentAlgorithm,algorithmOptions:this.props.algorithmOptions,runAlgorithm:this.runAlgorithm,changeAlgorithm:this.changeAlgorithm}),Object(V.jsx)("div",{className:"Description",children:Object(V.jsx)("div",{children:this.state.description})}),Object(V.jsx)(L,{canvasRef:this.canvasRef,width:1200,height:480,frame:e,legend:this.state.legend,barWidth:10,barSpacing:12,yOffset:50,fontSize:12,magnitudeMultiplier:2}),Object(V.jsx)(F,{frame:this.state.frameIndex,pause:this.pause,isPaused:this.state.isPaused,maxFrameIndex:this.state.frames.length-1,frameIndex:this.state.frameIndex,changeFrame:this.changeFrame,baseAnimationSpeed:this.props.baseAnimationSpeed,changeAnimationSpeed:this.changeAnimationSpeed,seedArray:this.state.seedArray,changeseedArray:this.changeseedArray,maxVal:this.props.maximum,minVal:this.props.minimum,maxLength:this.props.maxLength})]})}}]),a}(r.a.Component);var z=[["Quicksort",function(e){var t=A(e),a=[A(e)];return function e(n,r){if(!(n>=r)){var s=function(e,n){var r,s=n,i=Object(o.a)(t[s],4);r=i[0],i[1],i[2],i[3],w(t,e,n,S),a.push(A(t)),C(t,s,x),a.push(A(t));for(var c=e,h=e;h<n;h++){var l,u=Object(o.a)(t[h],4);if(l=u[0],u[1],u[2],u[3],l<r){var p=[t[h],t[c]];t[c]=p[0],t[h]=p[1],c+=1}w(t,e,c-1,k),w(t,c,h,O),a.push(A(t))}var m=[t[s],t[c]];return t[c]=m[0],t[s]=m[1],a.push(A(t)),w(t,e,n,y),c}(n,r);e(n,s-1),e(s+1,r)}}(0,t.length-1),a.push(t),[a,[["Quicksort Legend",y],["Remaining elements in partition",S],["Pivot",x],["Elements in partition less than pivot",k],["Elements in partition greater than or equal to pivot",O]],Object(V.jsxs)("span",{children:[Object(V.jsx)("b",{children:"Quicksort"})," is an efficient in-place sorting algorithm with an average runtime of O(n log n). ",Object(V.jsx)("br",{}),Object(V.jsx)("a",{href:"https://en.wikipedia.org/wiki/Quicksort",children:"Learn about how Quicksort works on Wikipedia."})]})]}],["Mergesort",function(e){var t=A(e),a=[A(t)];return function e(n,r){if(n==r)return t[n];var s=Math.floor((n+r)/2);e(n,s),e(s+1,r),w(t,n,s,O),w(t,s+1,r,k),a.push(A(t));for(var i=[],c=n,h=s+1;c<=s&&h<=r;){var l,u,p=Object(o.a)(t[c],4);l=p[0],p[1],p[2],p[3];var m=Object(o.a)(t[h],4);u=m[0],m[1],m[2],m[3],l<=u?(i.push(t[c]),c+=1):(i.push(t[h]),h+=1)}for(;c<=s;)i.push(t[c]),c+=1;for(;h<=r;)i.push(t[h]),h+=1;for(h=0,c=n;c<=r;c++)t[c]=i[h],C(t,c,x),a.push(A(t)),h+=1;w(t,n,r,y),a.push(A(t))}(0,t.length-1),[a,[["Mergesort Legend",y],["Left in-order partition",O],["Right in-order partition",k],["Merged in-order partition",x]],Object(V.jsxs)("span",{children:[Object(V.jsx)("b",{children:"Mergesort"})," is an efficient stable sorting algorithm with a runtime of O(n log n) and a memory requirement of O(n).",Object(V.jsx)("br",{}),Object(V.jsx)("a",{href:"https://en.wikipedia.org/wiki/Merge_sort",children:"Learn about how Mergesort works on Wikipedia."})]})]}],["Heapsort",function(e){for(var t=A(e),a=[A(e)],n=0,r=0;r<e.length;r++)s(),a.push(A(t));for(r=t.length-1;r>=0;r--)i();function s(){var e,r=n;C(t,r,O),a.push(A(t)),C(t,r,k);var s=Object(o.a)(t[r],4);e=s[0],s[1],s[2],s[3];var i,c=Math.floor((r-1)/2);if(c>-1){var h=Object(o.a)(t[c],4);i=h[0],h[1],h[2],h[3]}for(;c>0&&e>i;){C(t,r,O),a.push(A(t)),C(t,r,k);var l=[t[c],t[r]];t[r]=l[0],t[c]=l[1],r=c,c=Math.floor((r-1)/2);var u=Object(o.a)(t[c],4);i=u[0],u[1],u[2],u[3];var p=Object(o.a)(t[r],4);e=p[0],p[1],p[2],p[3]}if(e>i){var m=[t[c],t[r]];t[r]=m[0],t[c]=m[1]}n+=1}function i(){var e=[t[n-1],t[0]];t[0]=e[0],t[n-1]=e[1],C(t,n-1,x),C(t,0,O),a.push(A(t)),n-=1;var r,s=0,i=Object(o.a)(t[s],4);r=i[0],i[1],i[2],i[3];var c,h=2*s+1;if(h<n){var l=Object(o.a)(t[h],4);c=l[0],l[1],l[2],l[3]}var u,p=2*s+2;if(p<n){var m=Object(o.a)(t[p],4);u=m[0],m[1],m[2],m[3]}for(;h<n&&p<n&&(r<c||r<u);){if(c>u){var d=[t[s],t[h]];t[h]=d[0],t[s]=d[1],s=h}else{var b=[t[s],t[p]];t[p]=b[0],t[s]=b[1],s=p}if(a.push(A(t)),(h=2*s+1)<n){var j=Object(o.a)(t[h],4);c=j[0],j[1],j[2],j[3]}if((p=2*s+2)<n){var f=Object(o.a)(t[p],4);u=f[0],f[1],f[2],f[3]}}if(p<n&&r<u){var g=[t[s],t[p]];t[p]=g[0],t[s]=g[1]}else if(h<n&&r<c){var v=[t[s],t[h]];t[h]=v[0],t[s]=v[1]}C(t,s,k),a.push(A(t))}return w(t,0,t.length-1,y),a.push(A(t)),[a,[["Heapsort Legend",y],["In-place max heap",k],["Element being sifted",O],["Sorted elements",x]],Object(V.jsxs)("span",{children:[Object(V.jsx)("b",{children:"Heapsort"})," is an efficient in-place sorting algorithm with a runtime of O(n log n).",Object(V.jsx)("br",{}),Object(V.jsx)("a",{href:"https://en.wikipedia.org/wiki/Heapsort",children:"Learn about how Heapsort works on Wikipedia."})]})]}],["Insertion sort",function(e){for(var t=A(e),a=[A(t)],n=0;n<t.length;n++){var r;C(t,n,O);var s,i=Object(o.a)(t[n],4);r=i[0],i[1],i[2],i[3];for(var c=0;c<n;c++){var h=Object(o.a)(t[c],4);if(s=h[0],h[1],h[2],h[3],w(t,0,c,k),a.push(A(t)),r<s){a.pop(),C(t,c,x);for(var l=n;l>c;l--){var u=[t[l-1],t[l]];t[l]=u[0],t[l-1]=u[1],a.push(A(t))}break}}w(t,0,n,x),a.push(A(t))}return w(t,0,t.length-1,y),a.push(A(t)),[a,[["Insertion Sort Legend",y],["Target element",O],["Items less than or equal to target element",k],["Sorted elements",x]],Object(V.jsxs)("span",{children:[Object(V.jsx)("b",{children:"Insertion sort"})," is an inefficient sorting algorithm with an runtime of O(n^2). ",Object(V.jsx)("br",{}),Object(V.jsx)("a",{href:"https://en.wikipedia.org/wiki/Insertion_sort",children:"Learn about how Insertion sort works on Wikipedia."})]})]}],["Selection sort",function(e){for(var t=A(e),a=[A(t)],n=0;n<t.length;n++){var r,s=n,i=Object(o.a)(t[s],4);r=i[0],i[1],i[2],i[3],C(t,s,O);for(var c=n+1;c<t.length;c++){var h,l=Object(o.a)(t[c],4);if(h=l[0],l[1],l[2],l[3],h<r){C(t,s,y),s=c;var u=Object(o.a)(t[s],4);r=u[0],u[1],u[2],u[3]}C(t,c,k),C(t,s,O),a.push(A(t)),C(t,c,y),C(t,s,O)}var p=[t[n],t[s]];t[s]=p[0],t[n]=p[1],C(t,n,x)}return w(t,0,t.length-1,y),a.push(A(t)),[a,[["Selection Sort Legend",y],["Current element",k],["Current minimum among unsorted elements",O],["Sorted elements",x]],Object(V.jsxs)("span",{children:[Object(V.jsx)("b",{children:"Selection sort"})," is an inefficient sorting algorithm with an runtime of O(n^2). ",Object(V.jsx)("br",{}),Object(V.jsx)("a",{href:"https://en.wikipedia.org/wiki/Selection_sort",children:"Learn about how Selection sort works on Wikipedia."})]})]}],["Bubble Sort",function(e){for(var t=A(e),a=[A(t)],n=!0;n;){for(var r=0,s=1;s<t.length;s++){var i,c,h=Object(o.a)(t[s],4);i=h[0],h[1],h[2],h[3];var l=Object(o.a)(t[s-1],4);if(c=l[0],l[1],l[2],l[3],C(t,s,O),C(t,s-1,k),a.push(A(t)),i<c){var u=[t[s-1],t[s]];t[s]=u[0],t[s-1]=u[1],C(t,s,k),C(t,s-1,O),a.push(A(t)),r+=1}C(t,s,y),C(t,s-1,y)}0==r&&(n=!1)}return w(t,0,t.length-1,y),a.push(A(t)),[a,[["Bubblesort Legend",y],["Left element",k],["Right element",O]],Object(V.jsxs)("span",{children:[Object(V.jsx)("b",{children:"Bubble sort"})," is an inefficient sorting algorithm with an runtime of O(n^2). ",Object(V.jsx)("br",{}),Object(V.jsx)("a",{href:"https://en.wikipedia.org/wiki/Bubble_sort",children:"Learn about how Bubble sort works on Wikipedia."})]})]}]];var P=function(){return Object(V.jsxs)("div",{className:"App",children:[Object(V.jsx)("span",{children:Object(V.jsx)("b",{children:"Sort Visualizer"})}),Object(V.jsx)(R,{arrayLength:40,minimum:0,maximum:100,maxLength:50,baseAnimationSpeed:100,algorithmOptions:z,defaultAlgorithm:z[0]}),Object(V.jsx)("br",{}),Object(V.jsx)("br",{}),Object(V.jsx)("div",{className:"description-block",children:'Use this visualizer to compare different sorts. Each "frame" of the visualization roughly corresponds to a single comparison between two elements. Try customizing the values!'})]})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,51)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),s(e),i(e)}))},B=a(18);a.n(B).a.load({google:{families:["Roboto Mono"]},active:function(){return i.a.render(Object(V.jsx)(r.a.StrictMode,{children:Object(V.jsx)(P,{})}),document.getElementById("root"))}}),T()}},[[32,1,2]]]);
//# sourceMappingURL=main.0bc014cd.chunk.js.map