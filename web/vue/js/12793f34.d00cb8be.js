(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["12793f34"],{"469d":function(t,e,a){"use strict";a("6762"),a("2fdb"),a("7514"),a("ac6a"),a("cadf"),a("06db");var r=a("2ef0"),s=a.n(r),n=a("c1df"),i=a.n(n),o=a("2b0e");e["a"]={computed:{gekkos:function(){return this.$store.state.gekkos.gekkos},stratrunners:function(){return s.a.values(this.$store.getters["gekkos/list"]).concat(s.a.values(this.$store.getters["gekkos/archive"])).filter(function(t){return"papertrader"===t.logType||"tradebot"===t.logType})},watchers:function(){return s.a.values(this.$store.getters["gekkos/list"]).concat(s.a.values(this.$store.getters["gekkos/archive"])).filter(function(t){return"watcher"===t.logType})},watchConfig:function(){var t=s.a.pick(this.config,"watch","candleWriter"),e=o["a"].util.extend({},t);return e.type="market watcher",e.mode="realtime",e},requiredHistoricalData:function(){if(this.config.tradingAdvisor&&this.config.valid){var t=this.config.tradingAdvisor;return t.candleSize*t.historySize}},gekkoConfig:function(){var t;if(this.existingMarketWatcher){if(this.requiredHistoricalData){var e=i()().utc().startOf("minute").subtract(this.requiredHistoricalData,"minutes").unix(),a=i.a.utc(this.existingMarketWatcher.events.initial.candle.start).unix();t=i.a.unix(Math.max(e,a)).utc().format()}else t=i()().utc().startOf("minute").format();var r=o["a"].util.extend({market:{type:"leech",from:t},mode:"realtime"},this.config);return r}},existingMarketWatcher:function(){var t=o["a"].util.extend({},this.watchConfig.watch);return s.a.find(this.gekkos,{config:{watch:t}})},exchange:function(){return this.watchConfig.watch.exchange},existingTradebot:function(){var t=this;return s.a.find(this.gekkos,function(e){return"tradebot"===e.logType&&e.config.watch.exchange===t.exchange})},availableApiKeys:function(){return this.$store.state.config.apiKeys}},watch:{existingMarketWatcher:function(t,e){var a=this;if(this.pendingStratrunner){var r=this.existingMarketWatcher;r.events.latest.candle&&(this.pendingStratrunner=!1,this.startGekko().then(function(t){return a.routeToGekko(null,t.data)}).catch(function(t){return a.routeToGekko(t,resp.data)}))}}},methods:{updateConfig:function(t){this.config=t},start:function(){var t=this;if("tradebot"===this.config.type||this.config.type.label&&"tradebot"===this.config.type.label.toLowerCase()){if(this.existingTradebot){var e="You already have a tradebot running on this exchange";return e+=", you can only run one tradebot per exchange.",this.$q.dialog({title:"Bot already running",color:"warning",message:e})}if(!this.availableApiKeys.includes(this.exchange))return this.$q.dialog({title:"No API Keys found",color:"warning",message:"Please first configure API keys for this exchange in the config page."})}"market watcher"===this.config.type||this.config.type.label&&"market watcher"===this.config.type.label.toLowerCase()?this.existingMarketWatcher?(this.$q.dialog({title:"Market is already being watched",message:"This market is already being watched, redirecting you now..."}),this.$router.push({path:"/live-gekkos/".concat(this.existingMarketWatcher.id)})):this.startWatcher().then(function(e){t.$q.notify({type:"positive",message:"Watcher sucessfully started."}),t.$router.push({path:"/live-gekkos/".concat(e.data.id)})}).catch(function(e){t.$q.notify({type:"negative",message:"Error while starting market watcher."})}):this.existingMarketWatcher?this.startGekko().then(function(e){return t.routeToGekko(null,e.data)}).catch(function(e){return t.routeToGekko(e,resp.data)}):this.startWatcher().then(function(e){t.pendingStratrunner=e.data.id,t.$q.notify({type:"positive",message:"Watcher sucessfully started."})})},routeToGekko:function(t,e){if(t||e.error)return this.$q.notify({type:"negative",message:"Error while starting live gekko."}),console.error(t,e.error);this.$router.push({path:"/live-gekkos/".concat(e.id)})},startWatcher:function(){return this.$axios.post(this.$store.state.config.apiBaseUrl+"startGekko",this.watchConfig)},startGekko:function(){return this.$axios.post(this.$store.state.config.apiBaseUrl+"startGekko",this.gekkoConfig)}}}},ac4d:function(t,e,a){a("3a72")("asyncIterator")},ae5a:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"row q-col-gutter-md"},[a("div",{staticClass:"col"},[a("q-btn",{attrs:{color:"primary"},on:{click:function(e){return e.preventDefault(),t.switchToggle(e)}}},[t._v("Change paper trader settings")])],1),a("div",{staticClass:"col"},["open"===t.toggle?a("q-input",{attrs:{label:"Settings",filled:!!t.rawPaperTraderParamsError,error:!!t.rawPaperTraderParamsError,"error-label":t.rawPaperTraderParamsError.message,type:"textarea",rows:"8","max-height":80,inverted:!!t.rawPaperTraderParamsError},model:{value:t.rawPaperTraderParams,callback:function(e){t.rawPaperTraderParams=e},expression:"rawPaperTraderParams"}}):t._e()],1)])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"text-h5 q-mb-md"},[t._v("Paper Trader")])])}],n=a("967e"),i=a.n(n),o=(a("96cf"),a("fa84")),c=a.n(o),l={created:function(){var t=c()(i.a.mark(function t(){var e;return i.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$axios.get(this.$store.state.config.apiBaseUrl+"configPart/paperTrader");case 3:e=t.sent,this.rawPaperTraderParams=e.data.part,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),this.$q.notify({type:"negative",message:"Error getting Perfomance-Analyser config from server."});case 10:case"end":return t.stop()}},t,this,[[0,7]])}));function e(){return t.apply(this,arguments)}return e}(),data:function(){return{rawPaperTraderParams:"",rawPaperTraderParamsError:!1,paperTraderParams:{},toggle:"closed"}},watch:{rawPaperTraderParams:function(){this.emitConfig()}},methods:{switchToggle:function(){"open"===this.toggle?this.toggle="closed":this.toggle="open"},emitConfig:function(){this.parseParams(),this.$emit("settings",this.paperTraderParams)},parseParams:function(){try{this.paperTraderParams=toml.parse(this.rawPaperTraderParams),this.paperTraderParams.reportRoundtrips=!0,this.rawPaperTraderParamsError=!1}catch(t){this.rawPaperTraderParamsError=t,this.paperTraderParams={}}}}},u=l,d=a("42e1"),h=Object(d["a"])(u,r,s,!1,null,null,null);e["a"]=h.exports},aeb1:function(t,e,a){var r,s,n;(function(a,i){s=[],r=i,n="function"===typeof r?r.apply(e,s):r,void 0===n||(t.exports=n)})(0,function(){return function t(e,a,r){var s,n,i=window,o="application/octet-stream",c=r||o,l=e,u=!a&&!r&&l,d=document.createElement("a"),h=function(t){return String(t)},f=i.Blob||i.MozBlob||i.WebKitBlob||h,p=a||"download";if(f=f.call?f.bind(i):Blob,"true"===String(this)&&(l=[l,c],c=l[0],l=l[1]),u&&u.length<2048&&(p=u.split("/").pop().split("?")[0],d.href=u,-1!==d.href.indexOf(u))){var m=new XMLHttpRequest;return m.open("GET",u,!0),m.responseType="blob",m.onload=function(e){t(e.target.response,p,o)},setTimeout(function(){m.send()},0),m}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(l)){if(!(l.length>2096103.424&&f!==h))return navigator.msSaveBlob?navigator.msSaveBlob(y(l),p):x(l);l=y(l),c=l.type||o}else if(/([\x80-\xff])/.test(l)){var g=0,v=new Uint8Array(l.length),b=v.length;for(g;g<b;++g)v[g]=l.charCodeAt(g);l=new f([v],{type:c})}function y(t){var e=t.split(/[:;,]/),a=e[1],r="base64"==e[2]?atob:decodeURIComponent,s=r(e.pop()),n=s.length,i=0,o=new Uint8Array(n);for(i;i<n;++i)o[i]=s.charCodeAt(i);return new f([o],{type:a})}function x(t,e){if("download"in d)return d.href=t,d.setAttribute("download",p),d.className="download-js-link",d.innerHTML="downloading...",d.style.display="none",document.body.appendChild(d),setTimeout(function(){d.click(),document.body.removeChild(d),!0===e&&setTimeout(function(){i.URL.revokeObjectURL(d.href)},250)},66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,o)),window.open(t)||confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=t),!0;var a=document.createElement("iframe");document.body.appendChild(a),!e&&/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,o)),a.src=t,setTimeout(function(){document.body.removeChild(a)},333)}if(s=l instanceof f?l:new f([l],{type:c}),navigator.msSaveBlob)return navigator.msSaveBlob(s,p);if(i.URL)x(i.URL.createObjectURL(s),!0);else{if("string"===typeof s||s.constructor===h)try{return x("data:"+c+";base64,"+i.btoa(s))}catch(k){return x("data:"+c+","+encodeURIComponent(s))}n=new FileReader,n.onload=function(t){x(this.result)},n.readAsDataURL(s)}return!0}})},c41d:function(t,e,a){"use strict";a("55dd");var r=a("af47"),s=a("c1df"),n=a.n(s),i=a("8f14"),o=a.n(i),c={data:function(){return{datasets:[],datasetScanstate:"idle",unscannableMakets:[],tblColumns:[{name:"exchange",label:"Exchange",field:"exchange",sortable:!0},{name:"currency",label:"Currency",field:"currency",sortable:!0},{name:"asset",label:"Asset",field:"asset",sortable:!0},{name:"from",label:"From",field:function(t){return n.a.utc(t.from).format("YYYY-MM-DD hh:mm")},sortable:!0},{name:"to",label:"To",field:function(t){return n.a.utc(t.to).format("YYYY-MM-DD hh:mm")},sortable:!0},{name:"duration",label:"Duration",field:function(t){return o()(t.to.diff(t.from))},sortable:!1}]}},methods:{scan:function(){var t=this;this.datasetScanstate="scanning",this.$axios.post(r["a"]+"scansets",{}).then(function(e){var a=e.data;t.datasetScanstate="scanned",t.unscannableMakets=a.errors;var r=[];a.datasets.forEach(function(t){t.ranges.forEach(function(e,a){r.push({exchange:t.exchange,currency:t.currency,asset:t.asset,from:n.a.unix(e.from).utc(),to:n.a.unix(e.to).utc(),id:t.exchange+t.asset+t.currency+a})})}),r=r.filter(function(t){if(t.to.diff(t.from,"hours")>2)return!0}),r=r.sort(function(t,e){var a=t.to.diff(t.from),r=e.to.diff(e.from);return a<r?-1:a>r?1:0}).reverse(),t.datasets=r}).catch(function(e){t.$q.notify({type:"negative",message:"Error getting scan data from API"})})}}};e["a"]=c},e969:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-my-md"},[t._m(0),a("div",{staticClass:"row q-col-gutter-md"},[a("div",{staticClass:"col"},[a("q-select",{attrs:{label:"Strategy",hint:"Pick a strategy",filter:"","autofocus-filter":"",options:t.strategiesForList,"map-options":"","emit-value":""},model:{value:t.strategy,callback:function(e){t.strategy=e},expression:"strategy"}}),a("div",{staticClass:"row q-col-gutter-xs"},[a("div",{staticClass:"col"},[a("q-input",{attrs:{label:"Candle Size",hint:"input a candle size",type:"number"},model:{value:t.rawCandleSize,callback:function(e){t.rawCandleSize=e},expression:"rawCandleSize"}})],1),a("div",{staticClass:"col"},[a("q-select",{attrs:{label:"Unit",options:t.candleSizeUnits,hint:"Candlesize unit","map-options":"","emit-value":""},model:{value:t.candleSizeUnit,callback:function(e){t.candleSizeUnit=e},expression:"candleSizeUnit"}})],1)]),a("q-input",{attrs:{label:"Warmup period (in "+t.rawCandleSize+" "+t.singularCandleSizeUnit+" candles):",hint:"(will use "+t.warmupHumanized+" of data as history)",type:"number"},model:{value:t.historySize,callback:function(e){t.historySize=e},expression:"historySize"}})],1),a("div",{staticClass:"col"},[a("q-input",{staticClass:"text-italic",attrs:{label:t.strategy+" Parameters:",type:"textarea",hint:"Adjust parameters here",rows:"10","max-height":100,filled:!!t.rawStratParamsError,error:!!t.rawStratParamsError,"error-label":t.rawStratParamsError.message},model:{value:t.rawStratParams,callback:function(e){t.rawStratParams=e},expression:"rawStratParams"}})],1)])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row q-col-gutter-md"},[a("div",{staticClass:"col"},[a("div",{staticClass:"text-h5"},[t._v("Strategy")])]),a("div",{staticClass:"col"},[a("div",{staticClass:"text-h5"},[t._v("Parameters")])])])}],n=(a("7514"),a("2ef0")),i=a.n(n),o=a("8f14"),c=a.n(o),l=(a("7f7f"),a("af47")),u={data:function(){return{strategies:[]}},computed:{strategiesForList:function(){return i.a.map(this.strategies,function(t){return{value:t.name,label:t.name}})}},methods:{getStrategies:function(){var t=this;this.$axios.get(l["a"]+"strategies").then(function(e){t.strategies=e.data,i.a.each(t.strategies,function(t){t.empty=""===t.params}),t.rawStratParams=i.a.find(t.strategies,{name:t.strategy}).params,t.emptyStrat=i.a.find(t.strategies,{name:t.strategy}).empty,t.emitConfig()}).catch(function(e){t.$q.notify({type:"negative",message:"Error getting strategies from server."})})}}},d={mixins:[u],data:function(){return{candleSizeUnits:[{label:"minutes",value:"minutes"},{label:"hours",value:"hours"},{label:"days",value:"days"}],candleSizeUnit:"hours",rawCandleSize:1,strategy:"MACD",historySize:10,rawStratParams:"",rawStratParamsError:!1,emptyStrat:!1,stratParams:{}}},created:function(){this.getStrategies()},watch:{strategy:function(t){t=i.a.find(this.strategies,{name:t}),this.rawStratParams=t.params,this.emptyStrat=t.empty,this.emitConfig()},candleSize:function(){this.emitConfig()},historySize:function(){this.emitConfig()},rawStratParams:function(){this.emitConfig()}},computed:{warmupHumanized:function(){return c()(this.candleSize*this.historySize*1e3*60)},candleSize:function(){return"minutes"===this.candleSizeUnit?this.rawCandleSize:"hours"===this.candleSizeUnit?60*this.rawCandleSize:"days"===this.candleSizeUnit?60*this.rawCandleSize*24:void 0},singularCandleSizeUnit:function(){return this.candleSizeUnit.slice(0,-1)},config:function(){var t={tradingAdvisor:{enabled:!0,method:this.strategy,candleSize:+this.candleSize,historySize:+this.historySize}};return this.emptyStrat?t[this.strategy]={__empty:!0}:t[this.strategy]=this.stratParams,t}},methods:{emitConfig:function(){this.parseParams(),this.$emit("stratConfig",this.config)},parseParams:function(){try{this.stratParams=toml.parse(this.rawStratParams),this.rawStratParamsError=!1}catch(t){this.rawStratParamsError=t,this.stratParams={}}}}},h=d,f=a("42e1"),p=Object(f["a"])(h,r,s,!1,null,null,null);e["a"]=p.exports},eb64:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{attrs:{padding:""}},[a("backtester")],1)},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",{staticClass:"text-h4 q-mb-md"},[t._v("Backtest")]),a("p",[t._v("Backtest you strategies against historical data here.")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("config-builder",{on:{config:t.check}})],1)]),t.backtestable?a("div",{staticClass:"row justify-center q-mt-md"},[a("q-btn",{attrs:{color:"primary",loading:"fetching"===t.backtestState,disabled:"fetching"===t.backtestState},on:{click:function(e){return e.preventDefault(),t.run(e)}}},[t._v("Backtest")])],1):t._e(),t.backtestable?a("div",{staticClass:"row justify-center q-mt-md"},["fetching"===t.backtestState?a("div",{staticClass:"text-center"},[a("h4",[t._v("Running backtest...")]),a("q-spinner-bars",{attrs:{color:"secondary",size:"48px"}})],1):t._e()]):t._e(),t.backtestResult&&"fetched"===t.backtestState?a("result",{attrs:{result:t.backtestResult}}):t._e()],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("dataset-picker",{on:{dataset:t.updateDataset}}),a("strat-picker",{on:{stratConfig:t.updateStrat}}),a("paper-trader",{on:{settings:t.updatePaperTrader}})],1)},c=[],l=(a("f751"),a("967e")),u=a.n(l),d=(a("96cf"),a("fa84")),h=a.n(d),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"text-h5 q-mb-md"},[t._v("Select a dataset "+t._s(t.selectedText))]),"idle"===t.datasetScanstate?a("div",{staticClass:"text-center"},[a("q-btn",{attrs:{color:"primary"},on:{click:function(e){return e.preventDefault(),t.scan(e)}}},[t._v("Scan available data")])],1):t._e(),a("div",{staticClass:"text-center"},["scanning"===t.datasetScanstate?a("q-spinner-bars",{attrs:{color:"secondary",size:"48px"}}):t._e()],1),"scanned"===t.datasetScanstate?a("div",[t.datasets.length?a("q-table",{attrs:{title:"Local Datasets","row-key":"id",data:t.datasets,columns:t.tblColumns,dense:"",filter:t.dsFilter,selection:"single",selected:t.selectedRows,separator:"vertical"},on:{"update:selected":function(e){t.selectedRows=e}},scopedSlots:t._u([{key:"top-right",fn:function(e){return[a("q-input",{staticClass:"col-6",attrs:{debounce:"300","hide-underline":"",color:"secondary"},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}],null,!0),model:{value:t.dsFilter,callback:function(e){t.dsFilter=e},expression:"dsFilter"}})]}}],null,!1,2465650170)}):t._e(),t.datasets.length?a("div",{staticClass:"text-center q-pa-sm"},[a("q-btn",{staticClass:"q-ma-xs",attrs:{color:"primary",icon:"av_timer",disabled:!this.selectedRow||0===this.selectedRow.length},on:{click:function(e){return e.preventDefault(),t.openRange(e)}}},[t._v("Adjust range\n      ")]),a("q-btn",{staticClass:"q-ma-xs",attrs:{color:"amber",icon:"refresh"},on:{click:function(e){return e.preventDefault(),t.scan(e)}}},[t._v("reload datasets")])],1):t._e(),t.rangeVisible?a("div",{staticClass:"row"},[a("p",{staticClass:"caption"},[t._v("Here you can adjust the range of the dataset.")])]):t._e(),t.rangeVisible?a("div",{staticClass:"row q-col-gutter-md"},[a("div",{staticClass:"col-6"},[a("q-input",{attrs:{filled:"",dense:"",label:"From",hint:"Pick a start date and time"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{mask:"YYYY-MM-DD HH:mm"},model:{value:t.customFrom,callback:function(e){t.customFrom=e},expression:"customFrom"}})],1)],1)]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[a("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-time",{attrs:{mask:"YYYY-MM-DD HH:mm",format24h:""},model:{value:t.customFrom,callback:function(e){t.customFrom=e},expression:"customFrom"}})],1)],1)]},proxy:!0}],null,!1,206458887),model:{value:t.customFrom,callback:function(e){t.customFrom=e},expression:"customFrom"}})],1),a("div",{staticClass:"col-6"},[a("q-input",{attrs:{filled:"",dense:"",label:"To",hint:"Pick an end date and time"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{mask:"YYYY-MM-DD HH:mm"},model:{value:t.customTo,callback:function(e){t.customTo=e},expression:"customTo"}})],1)],1)]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[a("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-time",{attrs:{mask:"YYYY-MM-DD HH:mm",format24h:""},model:{value:t.customTo,callback:function(e){t.customTo=e},expression:"customTo"}})],1)],1)]},proxy:!0}],null,!1,4226184359),model:{value:t.customTo,callback:function(e){t.customTo=e},expression:"customTo"}})],1)]):t._e(),t.datasets.length?t._e():a("div",[a("em",[t._v("No Data found\n        "),a("router-link",{attrs:{to:"data/importer"}},[t._v("Lets add some")])],1)])],1):t._e()])},p=[],m=a("c1df"),g=a.n(m),v=a("2b0e"),b=a("c41d"),y={data:function(){return{customTo:!1,customFrom:!1,rangeVisible:!1,selectedRows:[],selectedRow:null,minSelectableRange:null,maxSelectableRange:null,dsFilter:""}},mixins:[b["a"]],computed:{isScanning:function(){return"scanning"===this.datasetScanstate},selectedText:function(){return this.selectedRow?"(current: ".concat(this.selectedRow.currency," - ").concat(this.selectedRow.asset,")"):""}},mounted:function(){this.scan()},methods:{fmt:function(t){return g()(t).utc().format("YYYY-MM-DD HH:mm")},openRange:function(){this.updateCustomRange(),this.rangeVisible=!0},updateCustomRange:function(){this.customTo=this.fmt(this.selectedRow.to),this.customFrom=this.fmt(this.selectedRow.from)},emitSet:function(t){var e;t&&(this.customTo?(e=v["a"].util.extend({},t),e.to=g.a.utc(this.customTo,"YYYY-MM-DD HH:mm").format(),e.from=g.a.utc(this.customFrom,"YYYY-MM-DD HH:mm").format()):e=t,this.$emit("dataset",e))}},watch:{selectedRows:function(t){t&&t.length&&(this.selectedRow=v["a"].util.extend({},this.selectedRows[0]),this.selectedRow.from=this.selectedRow.from.toDate(),this.selectedRow.to=this.selectedRow.to.toDate(),this.minSelectableRange=this.selectedRow.from,this.maxSelectableRange=this.selectedRow.to,this.updateCustomRange(),this.emitSet(this.selectedRow[0]))},customTo:function(){this.emitSet(this.selectedRow)},customFrom:function(){this.emitSet(this.selectedRow)}}},x=y,k=a("42e1"),w=Object(k["a"])(x,f,p,!1,null,null,null),C=w.exports,S=a("e969"),T=a("ae5a"),q=a("2ef0"),P=a.n(q),$={created:function(){var t=h()(u.a.mark(function t(){var e;return u.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$axios.get(this.$store.state.config.apiBaseUrl+"configPart/performanceAnalyzer");case 3:e=t.sent,this.performanceAnalyzer=toml.parse(e.data.part),this.performanceAnalyzer.enabled=!0,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),this.$q.notify({type:"negative",message:"Error getting Perfomance-Analyser config from server."});case 11:case"end":return t.stop()}},t,this,[[0,8]])}));function e(){return t.apply(this,arguments)}return e}(),data:function(){return{dataset:{},strat:{},paperTrader:{},performanceAnalyzer:{}}},components:{stratPicker:S["a"],datasetPicker:C,paperTrader:T["a"]},computed:{market:function(){return this.dataset.exchange?{exchange:this.dataset.exchange,currency:this.dataset.currency.toUpperCase(),asset:this.dataset.asset.toUpperCase()}:{}},range:function(){return this.dataset.exchange?{from:this.dataset.from,to:this.dataset.to}:{}},config:function(){var t={};return Object.assign(t,{watch:this.market},{paperTrader:this.paperTrader},this.strat,{backtest:{daterange:this.range},backtestResultExporter:{enabled:!0,writeToDisk:!1,data:{stratUpdates:!0,roundtrips:!0,stratCandles:!0,stratCandleProps:["open","close","high","low","vwp","volume"],trades:!0}}},{performanceAnalyzer:this.performanceAnalyzer}),t.valid=this.validConfig(t),t.backtestResultExporter.enabled=!0,t}},methods:{validConfig:function(t){if(!t.backtest)return!1;if(!t.backtest.daterange)return!1;if(P.a.isEmpty(t.backtest.daterange))return!1;if(!t.watch)return!1;if(!t.tradingAdvisor)return!1;var e=t.tradingAdvisor.method;if(P.a.isEmpty(t[e]))return!1;if(t.tradingAdvisor){if(P.a.isNaN(t.tradingAdvisor.candleSize))return!1;if(0===t.tradingAdvisor.candleSize)return!1}return!0},updateDataset:function(t){this.dataset=t,this.$emit("config",this.config)},updateStrat:function(t){this.strat=t,this.$emit("config",this.config)},updatePaperTrader:function(t){this.paperTrader=t,this.paperTrader.enabled=!0,this.$emit("config",this.config)}}},R=$,E=Object(k["a"])(R,o,c,!1,null,null,null),z=E.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-my-md"},[a("div",{staticClass:"text-h5 q-mb-md"},[t._v("Backtest result")]),a("div",[t.result&&t.result.performanceReport?a("result-summary",{attrs:{report:t.result.performanceReport}}):t._e()],1),t.candles.length?a("div",[a("q-card",{staticClass:"q-my-md",attrs:{flat:"",bordered:""}},[a("q-card-section",{staticClass:"bg-cyan-1"},[a("div",{staticClass:"text-h6"},[t._v("Market graph")])]),a("q-separator"),a("q-card-section",[a("echart",{attrs:{candles:t.candles,trades:t.trades,indicators:t.indicators}})],1),a("q-separator"),a("q-card-actions",{attrs:{align:"around"}},[a("excel-json",{attrs:{data:t.genExportable(),name:"Backtest-Result.csv",type:"csv"}},[a("q-btn",{attrs:{flat:"",icon:"file_download",label:"backtest CSV",color:"amber"}})],1),a("excel-json",{attrs:{data:t.genExportable(),name:"Backtest-Result.xls",type:"xls"}},[a("q-btn",{attrs:{flat:"",icon:"file_download",label:"backtest XLS",color:"amber"}})],1),t.result.roundtrips&&t.result.roundtrips.length?a("excel-json",{attrs:{data:t.result.roundtrips,name:"Backtest-Roundtrips.xls",type:"xls"}},[a("q-btn",{attrs:{flat:"",icon:"file_download",label:"roundtrips XLS",color:"teal"}})],1):t._e(),t.result.roundtrips&&t.result.roundtrips.length?a("excel-json",{attrs:{data:t.result.roundtrips,name:"Backtest-Roundtrips.csv",type:"csv"}},[a("q-btn",{attrs:{flat:"",icon:"file_download",label:"roundtrips csv",color:"teal"}})],1):t._e()],1)],1)],1):t._e(),a("div",[t.result&&t.result.performanceReport?a("roundtrip-table",{attrs:{roundtrips:t.result.roundtrips,asset:t.result.performanceReport.asset,currency:t.result.performanceReport.currency}}):t._e()],1)])},F=[],A=(a("7514"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row q-col-gutter-md"},[a("div",{staticClass:"col-6"},[a("q-card",{staticClass:"q-pa-sm bg-cyan-1",attrs:{dense:"",flat:"",bordered:""}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t._v("Start time")]),a("div",{staticClass:"col text-italic"},[t._v(t._s(t.report.startTime))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t._v("End time")]),a("div",{staticClass:"col text-italic"},[t._v(t._s(t.report.endTime))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t._v("Timespan")]),a("div",{staticClass:"col text-italic"},[t._v(t._s(t.report.timespan))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t._v("Start price")]),a("div",{staticClass:"col text-italic"},[t._v(t._s(t.report.startPrice))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t._v("End price")]),a("div",{staticClass:"col text-italic"},[t._v(t._s(t.report.endPrice))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t._v("Market")]),a("div",{staticClass:"col text-weight-medium text-italic",class:{"text-negative":t.report.market<0,"text-positive":t.report.market>0}},[t._v("\n            "+t._s(t.report.market.toFixed(6))+" %\n          ")])])])],1),a("div",{staticClass:"col-6"},[a("paper-trade-summary",{attrs:{report:t.report}})],1)])])}),M=[],Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"q-pa-sm bg-cyan-1",attrs:{dense:"",flat:"",bordered:""}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t._v("Amount of trades")]),a("div",{staticClass:"col text-italic"},[t._v(t._s(t.report.trades))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t._v("Sharpe ratio")]),a("div",{staticClass:"col text-italic"},[t._v(t._s(t.round2(t.report.sharpe)))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t._v("Start Balance")]),a("div",{staticClass:"col text-italic"},[t._v(t._s(t.round(t.report.startBalance)))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t._v("End Balance")]),a("div",{staticClass:"col text-italic"},[t._v(t._s(t.round(t.report.balance))+" "+t._s(t.report.currency))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t._v("Simulated profit")]),a("div",{staticClass:"col text-italic text-h6",class:t.profitClass},[t._v(t._s(t.round(t.report.relativeProfit))+" %")])])])},U=[],j={props:["report"],methods:{round2:function(t){return(+t).toFixed(2)},round:function(t){return(+t).toFixed(5)}},computed:{profitClass:function(){return this.report.relativeProfit>0?"text-positive":"text-negative"}}},B=j,W=Object(k["a"])(B,Y,U,!1,null,null,null),O=W.exports,H={props:["report"],components:{paperTradeSummary:O},methods:{round:function(t){return(+t).toFixed(5)}}},V=H,L=Object(k["a"])(V,A,M,!1,null,null,null),G=L.exports,N=a("bdfd"),I=a("1a90"),K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:t.idName},on:{click:t.generate}},[t._t("default",[t._v("\n\t\tDownload "+t._s(t.name)+"\n\t")])],2)},X=[],J=(a("6aa2"),a("ac4d"),a("8a81"),a("28a5"),a("8993")),Q=a.n(J),Z=(a("4917"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("7f7f"),a("a481"),a("aeb1")),tt=a.n(Z),et={props:{type:{type:String,default:"xls"},data:{type:Array,required:!1,default:null},fields:{type:Object,required:!1},exportFields:{type:Object,required:!1},defaultValue:{type:String,required:!1,default:""},title:{default:null},footer:{default:null},name:{type:String,default:"data.xls"},fetch:{type:Function},meta:{type:Array,default:function(){return[]}},worksheet:{type:String,default:"Sheet1"},beforeGenerate:{type:Function},beforeFinish:{type:Function}},computed:{idName:function(){var t=(new Date).getTime();return"export_"+t},downloadFields:function(){return void 0!==this.fields?this.fields:void 0!==this.exportFields?this.exportFields:void 0}},methods:{generate:function(){var t=h()(u.a.mark(function t(){var e,a;return u.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if("function"!==typeof this.beforeGenerate){t.next=3;break}return t.next=3,this.beforeGenerate();case 3:if(e=this.data,"function"!==typeof this.fetch&&e){t.next=8;break}return t.next=7,this.fetch();case 7:e=t.sent;case 8:if(e&&e.length){t.next=10;break}return t.abrupt("return");case 10:if(a=this.getProcessedJson(e,this.downloadFields),"html"!==this.type){t.next=15;break}return t.abrupt("return",this.export(this.jsonToXLS(a),this.name.replace(".xls",".html"),"text/html"));case 15:if("csv"!==this.type){t.next=17;break}return t.abrupt("return",this.export(this.jsonToCSV(a),this.name.replace(".xls",".csv"),"application/csv"));case 17:return t.abrupt("return",this.export(this.jsonToXLS(a),this.name,"application/vnd.ms-excel"));case 18:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),export:function(){var t=h()(u.a.mark(function t(e,a,r){var s;return u.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(s=this.base64ToBlob(e,r),"function"!==typeof this.beforeFinish){t.next=4;break}return t.next=4,this.beforeFinish();case 4:tt()(s,a,r);case 5:case"end":return t.stop()}},t,this)}));function e(e,a,r){return t.apply(this,arguments)}return e}(),jsonToXLS:function(t){var e='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta name=ProgId content=Excel.Sheet> <meta name=Generator content="Microsoft Excel 11"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>${worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e<style>br {mso-data-placement: same-cell;}</style></head><body><table>${table}</table></body></html>',a="<thead>",r=Object.keys(t[0]).length,s=this;for(var n in null!=this.title&&(a+=this.parseExtraData(this.title,'<tr><th colspan="'+r+'">${data}</th></tr>')),a+="<tr>",t[0])a+="<th>"+n+"</th>";return a+="</tr>",a+="</thead>",a+="<tbody>",t.map(function(t,e){for(var r in a+="<tr>",t)a+="<td>"+s.valueReformattedForMultilines(t[r])+"</td>";a+="</tr>"}),a+="</tbody>",null!=this.footer&&(a+="<tfoot>",a+=this.parseExtraData(this.footer,'<tr><td colspan="'+r+'">${data}</td></tr>'),a+="</tfoot>"),e.replace("${table}",a).replace("${worksheet}",this.worksheet)},jsonToCSV:function(t){var e=[];for(var a in null!=this.title&&e.push(this.parseExtraData(this.title,"${data}\r\n")),t[0])e.push(a),e.push(",");return e.pop(),e.push("\r\n"),t.map(function(t){for(var a in t){var r='="'+t[a]+'"';r.match(/[,"\n]/)&&(r='"'+r.replace(/\"/g,'""')+'"'),e.push(r),e.push(",")}e.pop(),e.push("\r\n")}),null!=this.footer&&e.push(this.parseExtraData(this.footer,"${data}\r\n")),e.join("")},getProcessedJson:function(t,e){var a=this.getKeys(t,e),r=[],s=this;return t.map(function(t,e){var n={};for(var i in a){var o=a[i];n[i]=s.getValue(o,t)}r.push(n)}),r},getKeys:function(t,e){if(e)return e;var a={};for(var r in t[0])a[r]=r;return a},parseExtraData:function(t,e){var a="";if(Array.isArray(t))for(var r=0;r<t.length;r++)a+=e.replace("${data}",t[r]);else a+=e.replace("${data}",t);return a},getValue:function(t,e){var a="object"!==Q()(t)?t:t.field,r="string"!==typeof a?[]:a.split("."),s=this.defaultValue;return s=a?r.length>1?this.getValueFromNestedItem(e,r):this.parseValue(e[a]):e,t.hasOwnProperty("callback")&&(s=this.getValueFromCallback(s,t.callback)),s},valueReformattedForMultilines:function(t){return"string"==typeof t?t.replace(/\n/gi,"<br/>"):t},getValueFromNestedItem:function(t,e){var a=t,r=!0,s=!1,n=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var c=i.value;a&&(a=a[c])}}catch(l){s=!0,n=l}finally{try{r||null==o.return||o.return()}finally{if(s)throw n}}return this.parseValue(a)},getValueFromCallback:function(t,e){if("function"!==typeof e)return this.defaultValue;var a=e(t);return this.parseValue(a)},parseValue:function(t){return t||0===t||"boolean"===typeof t?t:this.defaultValue},base64ToBlob:function(t,e){var a=window.btoa(window.unescape(encodeURIComponent(t))),r=atob(a),s=r.length,n=new Uint8ClampedArray(s);while(s--)n[s]=r.charCodeAt(s);return new Blob([n],{type:e})}}},at=et,rt=Object(k["a"])(at,K,X,!1,null,null,null),st=rt.exports,nt={props:["result"],data:function(){return{}},computed:{candles:function(){return this.result.stratCandles||[]},trades:function(){return this.result.trades||[]},indicators:function(){return this.result.stratUpdates||[]}},methods:{genExportable:function(){if(this.candles&&this.candles.length&&this.trades&&this.trades.length){var t=P.a.cloneDeep(this.candles);return P.a.each(this.trades,function(e){var a=P.a.indexOf(t,P.a.find(t,function(t){return t.start===e.date}));a>=0&&P.a.set(t[a],"advice",e.action)}),P.a.each(t,function(t){t.advice||P.a.set(t,"advice","")}),t}return[]}},components:{roundtripTable:N["a"],resultSummary:G,echart:I["a"],ExcelJson:st}},it=nt,ot=Object(k["a"])(it,D,F,!1,null,null,null),ct=ot.exports,lt=a("469d"),ut={mixins:[lt["a"]],data:function(){return{backtestable:!1,backtestState:"idle",config:!1,candleWriter:null}},created:function(){var t=this;this.$axios.get(this.$store.state.config.apiBaseUrl+"configPart/candleWriter").then(function(e){t.candleWriter=toml.parse(e.data.part)}).catch(function(t){console.log("error getting candlewriter-config",t)})},computed:{backtestResult:function(){return this.$store.getters["backtest/result"]}},methods:{check:function(t){if(this.config=t,!t.valid)return this.backtestable=!1;this.backtestable=!0},run:function(){var t=this;this.backtestState="fetching";this.$axios.post(this.$store.state.config.apiBaseUrl+"backtest",this.config).then(function(e){t.backtestState="fetched",t.$store.dispatch("backtest/setBacktestResult",e.data)}).catch(function(e){console.error(e),t.$q.notify({type:"negative",message:"Error during backtest-fetching of data."}),t.backtestState="error"})},startLiveGekko:function(t){var e=this;this.candleWriter&&(this.config["candleWriter"]=this.candleWriter,this.config["watch"]["candleWriter"]=this.candleWriter),this.config.type=t?"paper trader":"tradebot",t||_.set(this.config,"paperTrader.enabled",!1),this.$q.dialog({title:"Start live "+this.config.type+"?",message:"Do you really want to start a live "+this.config.type+" for "+this.config.watch.currency+"-"+this.config.watch.asset+" on "+this.config.watch.exchange+" with the current backtest settings?",ok:"Yes",cancel:"No"}).then(function(){t||_.set(e.config,"trader.enabled",!0),e.start()})}},components:{configBuilder:z,result:ct}},dt=ut,ht=Object(k["a"])(dt,n,i,!1,null,null,null),ft=ht.exports,pt={name:"BacktesterPage",components:{Backtester:ft}},mt=pt,gt=Object(k["a"])(mt,r,s,!1,null,null,null);e["default"]=gt.exports}}]);