(function(t){function e(e){for(var s,a,o=e[0],c=e[1],l=e[2],d=0,h=[];d<o.length;d++)a=o[d],i[a]&&h.push(i[a][0]),i[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(s=!1)}s&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var s={},i={1:0},r=[];function a(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=s,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([13,0]),n()})({13:function(t,e,n){t.exports=n("V3n5")},3:function(t,e){},4:function(t,e){},FoU6:function(t,e,n){},G6Hk:function(t,e,n){},GF5B:function(t,e,n){},H8nb:function(t,e,n){"use strict";var s=n("Xfis"),i=n.n(s);i.a},OyJ8:function(t,e,n){"use strict";var s=n("cB/s"),i=n.n(s);i.a},Rn2j:function(t,e,n){"use strict";var s=n("fjHr"),i=n.n(s);i.a},TjNX:function(t,e,n){"use strict";var s=n("c970"),i=n.n(s);i.a},V3n5:function(t,e,n){"use strict";n.r(e);n("VRzm");var s,i=n("Kw5r"),r=(n("FoU6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{handle:"handle"===t.currentView},attrs:{id:"app"}},[n("Layout",[n("Header",[n("div",{staticClass:"layout-logo link",on:{click:function(e){t.go({path:"/"})}}},[t.currentView||"Home"!==t.$route.name?n("div",{staticClass:"logo-wrap"}):n("span",[t._v(t._s(t.$t("home.title")))])]),t.currentView&&t.$route.meta.titles[t.currentView]?n("span",{staticClass:"sub-page-title"},[t._v("> "+t._s(t.$route.meta.titles[t.currentView]))]):t._e(),n("div",{staticClass:"layout-nav"},[t.isSupportWebShare?n("div",{staticClass:"link",on:{click:t.share}},[t._v("分享")]):t._e()])]),t.currentView?n("Content",[n("router-view",{attrs:{name:t.currentView}})],1):n("Content",[n("keep-alive",[t.$route.meta.keepAlive?n("router-view"):t._e()],1),t.$route.meta.keepAlive?t._e():n("transition",{attrs:{name:"fade"}},[n("router-view")],1)],1),n("Footer",{staticClass:"layout-footer-center"},[t._v("@"+t._s((new Date).getFullYear())+" © BCH123.org ")])],1)],1)}),a=[],o=n("xsZ3"),c=n.n(o),l=new c.a(window.navigator.userAgent),u={methods:{debug:function(t){console.log("debug",t)},go:function(t){this.$router.push(t)},goBack:function(){this.$router.go(-1)},goHome:function(){window.location.assign(window.location.origin)},isHandle:function(t){return/^\$/.test(t)||t.length<20}},computed:{isMobile:function(){return l.mobile()},isSupportWebShare:function(){return l.is("AndroidOS")&&l.version("Chrome")>=61}}},d=n("4GmL"),h={mixins:[u],name:"app",components:{Layout:d["Layout"],Header:d["Header"],Footer:d["Footer"],Icon:d["Icon"],Button:d["Button"]},data:function(){return{currentView:null}},methods:{share:function(){navigator.share&&navigator.share({title:"BCH123.org",text:"",url:window.location.href}).then(function(){return console.log("Successful share")}).catch(function(t){return console.log("Error sharing",t)})}},watch:{"$route.query.q":function(t,e){var n=t;n?this.currentView=this.isHandle(n)?"handle":"address":(this.currentView=null,document.title="BCH123_"+this.$t("home.title"))}},created:function(){var t=this.$route.query.q;this.currentView=t?this.isHandle(t)?"handle":"address":null}},p=h,m=(n("XN8D"),n("KHd+")),f=Object(m["a"])(p,r,a,!1,null,null,null),v=f.exports,g=(n("yt8O"),n("RW0V"),n("rGqo"),n("HEwt"),n("dRSK"),n("jE9Z")),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-view"},[n("statistics"),n("search-box",{attrs:{submit:t.submit}}),n("websites")],1)},w=[],_=(n("ls82"),n("MECJ")),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"searchbar-input-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.words,expression:"words"}],staticClass:"searchbar-input",attrs:{type:"search",name:"q",placeholder:t.$t("home.searchPlaceholder"),autocomplete:"off",spellcheck:"false"},domProps:{value:t.words},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t._submit(e):null},change:function(e){t.errMsg=null},input:function(e){e.target.composing||(t.words=e.target.value)}}}),n("a",{staticClass:"icon btc-com",attrs:{href:"https://bch.btc.com/"+t.words,title:"在 btc.com 查看",target:"_blank"}}),n("icon",{staticClass:"search-icon",attrs:{type:"search",name:"search"},nativeOn:{click:function(e){return t._submit(e)}}}),t.displayErrMsg?n("div",{staticClass:"err-msg"},[t._v(t._s(t.displayErrMsg))]):t._e()],1)},y=[],x={name:"search-box",mixins:[u],components:{Icon:d["Icon"]},props:{keywords:{type:String,default:""},errors:{type:String,default:""},submit:{type:Function}},data:function(){return{words:this.keywords,errMsg:this.errors}},computed:{displayErrMsg:function(){return this.errors||this.errMsg}},methods:{_submit:function(){var t=this.words.trim();t&&(0===t.indexOf("bitcoincash:")&&(this.words=t=t.substr(12),history.replaceState(null,"","?q=".concat(t))),this.submit(t))}},mounted:function(){}},k=x,A=(n("Z5JC"),Object(m["a"])(k,C,y,!1,null,"68bc3cd4",null)),B=A.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"websites-view"},[n("table",t._l(Object.keys(t.sites),function(e){return n("tr",[n("th",{on:{click:function(n){t.sites[e].expand=!t.sites[e].expand}}},[t._v(t._s(e))]),n("div",{staticClass:"tr-inner"},t._l(t.sites[e].content,function(e,s){return n("td",[e.url.includes("http")?n("a",{staticClass:"link",attrs:{href:e.url,title:e.desc,target:"_blank"}},[t._v(t._s(e.title))]):n("a",{staticClass:"link",attrs:{tabindex:"0"},on:{click:function(n){t.go({path:e.url})}}},[t._v(t._s(e.title))])])}))])}))])},j=[],S={"社区":{content:[{title:"BCH.club",url:"https://bch.club/"},{title:"巴比特论坛",url:"http://8btc.com/forum-147-1.html"},{title:"Reddit",url:"https://www.reddit.com/r/btc/"},{title:"Memo",desc:"去中心化微博",url:"https://memo.cash/"},{title:"Yours",desc:"能赚 BCH 的内容创作平台",url:"https://www.yours.org/"}]},"行情":{content:[{title:"币值轻快版",url:"https://coin.bch123.org/"},{title:"加密货币市值",desc:"Cryptocurrency Market Capitalizations | CoinMarketCap",url:"https://coinmarketcap.com/zh/"},{title:"Bitcoin Price Prediction Tracker",url:"https://bircoin.top/"}]},"资讯":{content:[{title:"币世界",url:"https://www.bishijie.com/kuaixun"},{title:"Bitcoin.com 中文",url:"https://cn.bitcoin.com/"},{title:"Bitcoin.com",url:"https://news.bitcoin.com/"},{title:"CoinGeek",url:"https://coingeek.com/"}]},"浏览器":{content:[{title:"BTC.com",url:"https://bch.btc.com"},{title:"Bitcoin.com",url:"https://explorer.bitcoin.com/bch"},{title:"Blockchair",url:"https://blockchair.com/"}]},"工具":{content:[{title:"地址格式转换",url:"https://bch.btc.com/tools/address-converter"},{title:"钱包生成",url:"https://cashaddress.org/"},{title:"CoinText",desc:"通过短信来收发 BCH",url:"https://cointext.io/"},{title:"Coinmix",desc:"BCH 上第一个混币服务",url:"https://coinmix.to/"},{title:"BitCloak Mixer",desc:"Bitcoin Cash Mixer",url:"https://bitcloak43blmhmn.com/bch/"}]},"打赏":{content:[{title:"币赞",desc:"微博",url:"https://media.weibo.cn/article?object_id=1022%3A2309404219418744887227&luicode=10000011&lfid=1076036468174724&id=2309404219418744887227&ep=G89ayvzef%252C6468174724%252CG89ayvzef%252C6468174724"},{title:"tippr",desc:"Twitter / Reddit",url:"https://www.reddit.com/r/tippr/wiki/index"},{title:"ChainTip",desc:"Reddit / Github",url:"https://www.chaintip.org"},{title:"Tipmebch",desc:"Telegram",url:"https://t.me/tipmebchbot"}]},"娱乐":{content:[{title:"SatoshiDICE",desc:"The classic game now for Bitcoin Cash",url:"https://satoshidice.com/"},{title:"Blockchain Poker",url:"https://blockchain.poker/"},{title:"Joystream",desc:"一个新的BT下载软件，提供种子源可以赚 BCH",url:"https://joystream.co/"}]},"数据":{content:[{title:"fork.lol",url:"https://fork.lol/"},{title:"Cash vs Core",url:"https://cashvscore.com/"},{title:"chaintrend",url:"https://chaintrend.org/"},{title:"Transactions",desc:"BCH,BTC 每日交易数对比",url:"https://bitinfocharts.com/comparison/transactions-btc-bch-sma30.html#log&6m"},{title:"Hashrates",desc:"BCH,BTC 每日算力对比",url:"https://bitinfocharts.com/comparison/hashrate-btc-bch.html#6m"},{title:"TX Highway",desc:"Live Bitcoin Cash vs Bitcoin Core Transaction Visualizer ",url:"https://txhighway.com/"},{title:"TX Street",desc:"Bitcoin Transaction Visualizer",url:"https://txstreet.com/"},{title:"CoinDance",url:"https://cash.coin.dance/"},{title:"Cashnodes",url:"https://cashnodes.bitcoinunlimited.info/"}]},"入门":{content:[{title:"社区官网",desc:"比特币现金 - 点对点数字现金",url:"https://www.bitcoincash.org/zh-CN/"},{title:"常见问题",url:"https://www.bitcoincash.org/zh-cn/#faq"},{title:"白皮书中文",url:"http://www.8btc.com/wiki/bitcoin-a-peer-to-peer-electronic-cash-system"},{title:"比特币是什么-江卓尔",desc:"知乎最高票答案，中文界第一科普长文",url:"https://www.zhihu.com/question/22076666/answer/69638270"},{title:"中本聪研究所",desc:"阅读中本聪邮件、论坛帖子首选 - Nakamoto Studies",url:"https://nakamotostudies.org/"}]},"钱包":{content:[{title:"HandCash",url:"http://www.handcash.io/"},{title:"Bitcoin.com",url:"https://www.bitcoin.com/"},{title:"Bread",url:"https://breadapp.com/"},{title:"比特派",url:"http://bitpie.com/"},{title:"Coinomi",url:"https://coinomi.com/"},{title:"Jaxx",url:"https://jaxx.io/"}]},"交易所":{content:[{title:"币安",url:"https://www.binance.com/"},{title:"OKEx",url:"https://www.okex.com/"},{title:"火币",url:"https://www.huobi.com/"},{title:"CoinEx",url:"https://www.coinex.com/"}]},"开发":{content:[{title:"BITBOX",desc:"Supercharge your Bitcoin Cash workflow",url:"https://www.bitbox.earth/"},{title:"bchjs",desc:"Bitcoin Cash Wallet by Bchjs",url:"https://ccoincash.github.io"},{title:"Devs.Cash",desc:"Bitcoin Cash Web & App Dev Projects",url:"http://devs.cash/"}]},"支付商":{content:[{title:"BitPay",desc:"Get Started with Bitcoin and Bitcoin Cash Payments",url:"https://bitpay.com/"},{title:"CashFlow",desc:"Bitcoin Cash Payment Processor with 0-conf and Shopify plugin",url:"https://cashflow.fm/"}]},"考古":{content:[{title:"创世地址",url:"?q=qp3wjpa3tjlj042z2wv7hahsldgwhwy0rq9sywjpyy"},{title:"创世交易",desc:"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks",url:"https://www.viabtc.com/bch/tx/4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b"},{title:"创币史",desc:"Bitcoin Cash BCH History",url:"https://datnoid.com/bitcoin-cash/history"}]},"人物":{content:[{title:"Roger Ver",url:"https://twitter.com/rogerkver"},{title:"Craig S Wright",url:"https://twitter.com/ProfFaustus"},{title:"Rick Falkvinge",url:"https://twitter.com/Falkvinge"},{title:"吴忌寒",url:"https://weibo.com/bitcoinqqagent"},{title:"江卓尔",url:"https://weibo.com/ltc1btc"},{title:"杨海坡",url:"https://weibo.com/yhaiyang"}]}},H={name:"websites",mixins:[u],props:{},data:function(){return{sites:S}},computed:{},methods:{},mounted:function(){}},O=H,$=(n("TjNX"),Object(m["a"])(O,T,j,!1,null,null,null)),z=$.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"statistics"},[t.list?n("ul",t._l(t.list,function(e){return n("li",[n("span",{staticClass:"label"},[t._v(t._s(e.label)+": ")]),n("span",{staticClass:"value"},[t._v(t._s(e.value||"-----"))])])})):t._e()])},E=[],q=(n("xfY5"),n("ZhIB")),M=n.n(q),R={data:function(){return{market:{price:null,"bch/btc":null,supply:null,nodes:null}}},methods:{formatPercentage:function(t,e){return(t/e*100).toFixed(2)+"%"},getMaintainData:function(){var t=this,e="https://gitee.com/api/v5/gists/ba375uensivprto2c08xq70";fetch(e).then(function(e){return e.json().then(function(e){var n=JSON.parse(e.files["main.json"].content),s=(Number(new Date)-Number(new Date(e.updated_at)))/1e3/60;s>5&&console.warn("delayMinute: ",s);var i=n.data,r=i.nodes;t.market.nodes="".concat(r.follow," / ").concat(t.formatPercentage(r.follow,r.total)),t.market.price="￥".concat(Math.round(i.price)),t.market.percent_change_24h=" (".concat(i.percent_change_24h>0?"+":"").concat(i.percent_change_24h,"%)"),t.market.supply=M()(i.circulating_supply/Math.pow(10,4)).format("0,000")+"万 / "+t.formatPercentage(i.circulating_supply,i.max_supply),t.market["bch/btc"]=i.bch_against_btc.toFixed(3)})})}},computed:{list:function(){var t=this.market;return[{label:"最新价",value:t.price+t.percent_change_24h},{label:"BCH/BTC",value:t["bch/btc"]},{label:"已供应",value:t.supply},{label:"遵循最新共识节点数",value:t.nodes}]}},beforeMount:function(){var t=this;this.getMaintainData(),s=setInterval(function(){t.getMaintainData()},18e4)},beforeDestory:function(){clearInterval(s)}},L=R,P=(n("hyoN"),Object(m["a"])(L,D,E,!1,null,"aabc3e6a",null)),I=P.exports,F={name:"Home",mixins:[u],components:{SearchBox:B,Websites:z,Statistics:I,Layout:d["Layout"],Header:d["Header"],Menu:d["Menu"],MenuItem:d["MenuItem"],Breadcrumb:d["Breadcrumb"],BreadcrumbItem:d["BreadcrumbItem"],Card:d["Card"],Footer:d["Footer"],Icon:d["Icon"]},data:function(){return{currentView:null}},methods:{submit:function(){var t=Object(_["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=e.trim(),0===e.indexOf("bitcoincash:")&&(e=e.substr(12)),this.go({path:"?q=".concat(e)});case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},computed:{},filters:{},created:function(){},mounted:function(){}},U=F,N=(n("kRqj"),Object(m["a"])(U,b,w,!1,null,null,null)),V=N.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"address-view"},[n("search-box",{attrs:{keywords:t.cashAddress,errors:t.addressErrors,submit:t.submit}}),n("div",{staticClass:"address-detail"},[n("div",{staticClass:"row"},[n("div",{staticClass:"address-balance"},[n("div",[n("div",{staticClass:"label"},[t._v(t._s(t.$t("address.balance")))]),n("div",{staticClass:"fiat-row"},[n("div",[n("span",{staticClass:"value"},[t._v(t._s(t.addressFiatBalance||"-----"))]),n("span",{staticClass:"unit"},[t._v(t._s(t.fiat.toUpperCase()))])])]),n("div",{staticClass:"balance-row"},[n("span",{staticClass:"value"},[t._v(t._s(t.addressDetail?t.addressBalance:"-----"))]),n("span",{staticClass:"unit"},[t._v("BCH")])])]),t.showLoading||t.showErrorMsg||null!==t.addressDetail?t._e():n("div",[t._m(0)])]),t.qrUrl?n("div",{staticClass:"qr-wrap"},[n("img",{attrs:{src:t.qrUrl}})]):t._e()]),t.showErrorMsg?n("div",{staticClass:"error"},[t._v(t._s(t.$t("address.serviceUnavailable"))),n("Button",{on:{click:function(e){t.setAddressData(t.cashAddress)}}},[t._v(t._s(t.$t("address.retry")))]),n("span",[t._v("或前往")]),n("a",{attrs:{href:t.blockExplorerUrl+t.cashAddress,title:"在 btc.com 查看",target:"_blank"}},[t._v(" BTC.com ")]),n("span",[t._v("查看")])],1):t._e(),n("div",{staticClass:"address-tx"},[n("v-table",{staticStyle:{width:"auto"},attrs:{"is-vertical-resize":"","vertical-resize-offset":60,"is-horizontal-resize":"","multiple-sort":!1,"min-height":399,"even-bg-color":"#f2f2f2","title-rows":t.tableConfig.titleRows,columns:t.tableConfig.columns,"table-data":t.tableData,"row-hover-color":"#eee","row-click-color":"#edf7ff","paging-index":(t.pageIndex-1)*t.pageSize,"is-loading":t.tableConfig.isLoading},on:{"sort-change":t.sortChange}}),n("div",{staticClass:"mt20 mb20 bold"}),t.addressTxs&&t.addressTxs.total_count?n("v-pagination",{attrs:{total:t.addressTxs.total_count,"page-size":t.pageSize,layout:["total","prev","pager","next","jumper"]},on:{"page-change":t.pageChange,"page-size-change":t.pageSizeChange}}):t._e()],1)])],1)},Y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t._v("账户暂无数据"),n("br"),t._v("未使用过的地址")])}],J=(n("pIFo"),n("Vd3H"),n("iv4g")),W=(n("NL/0"),n("5ftm")),Z=n("0FX9"),X=n.n(Z);function K(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3;return fetch(t,e).then(function(s){return 1===n?console.warn("fetch retry finished"):403===s.status?K(t,e,n-1):s}).catch(function(s){if(1===n)throw s;return K(t,e,n-1)})}function Q(t,e){return tt.apply(this,arguments)}function tt(){return tt=Object(_["a"])(regeneratorRuntime.mark(function t(e,n){var s,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s=n?e:e.toUpperCase(),t.next=3,X.a.toDataURL(s,{mode:"alphanumeric"});case 3:return i=t.sent,t.abrupt("return",i);case 5:case"end":return t.stop()}},t,this)})),tt.apply(this,arguments)}function et(t){var e=window.getSelection(),n=document.createRange();return n.selectNodeContents(document.getElementById(t)),e.removeAllRanges(),e.addRange(n),document.execCommand("copy")}var nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"modal-mask",attrs:{transition:"modal"}},[n("div",{staticClass:"modal-wrapper",on:{click:function(e){return e.target!==e.currentTarget?null:t.close(e)}}},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"_modal-header"},[n("div",{staticClass:"modal-title",attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.title||t.$t("home.aboutTitle")))]),n("div",{staticClass:"modal-close",on:{click:t.close}},[n("span"),n("span")])]),n("div",{staticClass:"modal-body"},[t._t("content",[t._v("default body")])],2)])])])},st=[],it={name:"modal",props:{title:{type:String,default:""},show:!1},data:function(){return{}},watch:{show:function(t){var e=window.document.querySelectorAll("body")[0];e.classList.toggle("modal-open")}},methods:{close:function(){this.$emit("close")}},mounted:function(){}},rt=it,at=(n("Rn2j"),Object(m["a"])(rt,nt,st,!1,null,null,null)),ot=at.exports,ct=n("iPsF"),lt=n.n(ct),ut=n("NAv5"),dt="https://cors.oaker.bid/",ht={name:"Address",mixins:[u],components:{Modal:ot,SearchBox:B,VTable:W["VTable"],VPagination:W["VPagination"],Button:d["Button"]},data:function(){var t=this;return{cashAddress:null,legacyAddress:null,addressDetail:null,addressTxs:null,showLoading:!0,showErrorMsg:!1,addressErrors:null,qrUrl:null,prices:{cny:null,usd:null},pageIndex:1,pageSize:10,blockExplorerUrl:"https://bch.btc.com/",tableConfig:{multipleSort:!1,tableData:[],columns:[{field:"title",width:70,columnAlign:"center",isFrozen:!0},{field:"amount",width:110,columnAlign:"left",isFrozen:!0,formatter:function(t,e,n){return'<span class="tx-amount '.concat(Number(t.amount)>=0?"in":"out",'">').concat(t.amount,"</span>")}},{field:"time",width:170,columnAlign:"center",isFrozen:!0},{field:"id",width:70,columnAlign:"center",isFrozen:!0,formatter:function(e,n,s){return"<a href=".concat(t.blockExplorerUrl+e.id,' target="_blank" title="可复制完整交易 ID 或点击前往 BTC.com 查看">').concat(e.id,"</a>")}}],titleRows:[[{fields:["title"],title:this.$t("address.direction"),titleAlign:"center"},{fields:["amount"],title:this.$t("address.amount"),titleAlign:"center"},{fields:["time"],title:this.$t("address.time"),titleAlign:"center"},{fields:["id"],title:"ID",titleAlign:"center"}]],isLoading:!0}}},methods:{submit:function(t){console.log("trigger submit");var e=t.trim();if(this.isHandle(e))this.go({path:"/?q=".concat(e)});else try{if(lt.a.isLegacyAddress(t)){var n=lt.a.toCashAddress(t).substr(12);this.legacyAddress=t,this.cashAddress=n,this.setAddressData(this.legacyAddress)}else lt.a.isCashAddress(t)&&(this.legacyAddress=lt.a.toLegacyAddress(t),this.cashAddress=t.indexOf("bitcoincash")>-1?t.substr(12):t,this.setAddressData(this.legacyAddress))}catch(t){this.addressErrors="地址格式不正确",this.addressDetail=this.addressTxs=this.qrUrl=null,this.showLoading=!0}},setAddressData:function(){var t=Object(_["a"])(regeneratorRuntime.mark(function t(e){var n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return document.title="帐户 "+this.cashAddress,this.showLoading=!0,this.showErrorMsg=!1,this.addressDetail=this.addressTxs=this.addressErrors=null,t.next=6,Q(lt.a.toCashAddress(e));case 6:this.qrUrl=t.sent,this.getAddressDetail(e).then(function(){var t=Object(_["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:n.addressDetail=e,n.getTableData(),n.showLoading=!1,Object.keys(n.addressDetail).length||(n.showErrorMsg=!0);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}());case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),getAddressDetail:function(t){var e="".concat(dt,"https://bch-chain.api.btc.com/v3/address/").concat(t);return K(e).then(function(t){return t.json().then(function(t){return t.headers?t.data.data:t.data})})},getAddressTxs:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.pageIndex,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.pageSize,s="".concat(dt,"https://bch-chain.api.btc.com/v3/address/").concat(t,"/tx?page=").concat(e,"&pagesize=").concat(n,"&verbose=1");return new Promise(function(t,e){K(s).then(function(e){e.json().then(function(e){t(e.headers?e.data.data:e.data)})})})},getPrices:function(){var t="https://api.coinmarketcap.com/v2/ticker/1831/?convert=CNY";return fetch(t).then(function(t){return t.json().then(function(t){return t.headers?t.data.data:t.data}).catch(function(t){return console.error(t)})})},getTableData:function(){var t=Object(_["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.tableConfig.isLoading=!0,this.addressTxs?this.addressTxs.list[(this.pageIndex-1)*this.pageSize]?this.tableConfig.isLoading=!1:this.getAddressTxs(this.legacyAddress).then(function(t){var n,s=t;e.addressTxs.list[(e.pageIndex-1)*e.pageSize]=null,(n=e.addressTxs.list).splice.apply(n,[(e.pageIndex-1)*e.pageSize,0].concat(Object(J["a"])(s.list))),e.tableConfig.isLoading=!1}):this.getAddressTxs(this.legacyAddress).then(function(t){e.addressTxs=t,e.tableConfig.isLoading=!1});case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),pageChange:function(){var t=Object(_["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.pageIndex=e,this.getTableData();case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),pageSizeChange:function(){var t=Object(_["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.pageIndex=1,this.pageSize=e,this.addressTxs=null,this.getTableData();case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),sortChange:function(t){t.height.length>0&&this.tableConfig.tableData.sort(function(e,n){return"asc"===t.height?e.height-n.height:"desc"===t.height?n.height-e.height:0})},timeFormat:function(t,e){return Object(ut["format"])(new Date(1e3*t),"YYYY-MM-DD HH:mm:ss")}},computed:{locale:function(){return this.$root.$data.shared.isZh?"zh_CN":"en_US"},fiat:function(){return this.$root.$data.shared.isZh?"cny":"usd"},addressBalance:function(){return this.addressDetail.balance/Math.pow(10,8)},tableData:function(){var t=this;return this.addressTxs?this.addressTxs.list.map(function(e){return e&&{title:e.balance_diff>0?t.$t("address.received"):t.$t("address.sent"),amount:(e.balance_diff>0?"+":"")+Number(e.balance_diff/Math.pow(10,8)).toFixed(8).replace(/\.?0+$/,""),time:t.timeFormat(e.block_time||e.created_at),id:e.hash}}).slice((this.pageIndex-1)*this.pageSize,this.pageIndex*this.pageSize).filter(function(t){return!!t}):[]},addressFiatBalance:function(){return this.addressDetail&&this.prices.usd&&M()(this.addressBalance*this.prices[this.fiat]).format("0,0.00")}},filters:{format:function(t,e){return"btc"===e?M()(t*Math.pow(10,6)).format("0,000,000.00"):M()(t).format("0,0.00")}},watch:{"$route.query.q":function(t,e){console.log({newRoute:t,oldRoute:e});var n=t;!n||this.cashAddress&&t===e||(console.log("debug watch"),this.cashAddress=n.indexOf("bitcoincash")>-1?n.substr(12):n,this.submit(this.cashAddress))}},created:function(){var t=this,e=this.$route.query.q;e&&!this.cashAddress&&(console.log("debug created"),this.cashAddress=e.indexOf("bitcoincash")>-1?e.substr(12):e,this.submit(this.cashAddress)),this.getPrices().then(function(e){t.prices.cny=e.quotes.CNY.price,t.prices.usd=e.quotes.USD.price})},mounted:function(){}},pt=ht,mt=(n("hAN3"),Object(m["a"])(pt,G,Y,!1,null,null,null)),ft=mt.exports,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"handle-view"},[n("div",{staticClass:"name"},[t._v(t._s(t.handle))]),n("div",{staticClass:"qr-wrap"},[t.qrUrl?n("img",{attrs:{src:t.qrUrl},on:{click:t.copyAddress}}):n("div",{staticClass:"preloader"},[t._v("....")])]),n("div",{staticClass:"address"},[n("div",{staticClass:"text",attrs:{id:"tocopy"}},[t._v(t._s(t.receivingAddress))])]),t.showLoading||t.receivingAddress?t._e():n("div",{staticClass:"err-msg"},[t._v("查询失败，请检查 $handle 拼写是否正确")]),n("Button",{class:{success:t.isCopied},attrs:{size:"large"},on:{click:t.copyAddress}},[t._v(t._s(t.isCopied?"已":"")+"复制")]),n("div",{staticClass:"switch-wrap"},[t._v("使用旧版地址  "),n("i-switch",{on:{"on-change":t.switchAddressType}})],1),t._m(0)],1)},gt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"desc"},[n("span",[t._v("本页面使用")]),n("a",{attrs:{href:"http://handcash.io/api-docs/",target:"_blank"}},[t._v("HandCash API")]),n("span",[t._v("查询 $handle 的收款地址")])])}],bt=(n("OG14"),{name:"Home",mixins:[u],components:{Button:d["Button"],Spin:d["Spin"],"i-switch":d["Switch"]},data:function(){return{handle:null,receivingAddress:null,qrUrl:null,showLoading:!0,isCopied:!1}},methods:{getAddress:function(t){var e=this,n="https://api.handcash.io/api/receivingAddress/".concat(t);this.showLoading=!0,fetch(n).then(function(t){if(200!==t.status)return console.log("Looks like there was a problem. Status Code: "+t.status),void(e.showLoading=!1);t.json().then(function(){var t=Object(_["a"])(regeneratorRuntime.mark(function t(n){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log(n),s=lt.a.toCashAddress(n.receivingAddress),e.receivingAddress=s.substr(12),t.next=5,Q(s);case 5:e.qrUrl=t.sent,e.showLoading=!1;case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())})},setHandle:function(){var t=window.location.search.substring(1),e=new URLSearchParams(t),n=e.get("q");n?(0===n.indexOf("$")?(n=n.substr(1),this.handle=n):this.handle="$"+n,this.$router.replace({path:"?q="+n}),document.title="".concat(this.handle," 的 BCH 收款"),this.getAddress(n)):window.location.assign(window.location.origin)},copyAddress:function(){var t=this;et("tocopy")&&(this.isCopied=!0,setTimeout(function(){t.isCopied=!1},1e3))},switchAddressType:function(){var t=Object(_["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=lt.a.isLegacyAddress(this.receivingAddress),this.receivingAddress=lt.a[e?"toCashAddress":"toLegacyAddress"](this.receivingAddress),this.receivingAddress.indexOf("bitcoincash")>-1&&(this.receivingAddress=this.receivingAddress.substr(12)),t.next=5,Q(this.receivingAddress,!e);case 5:this.qrUrl=t.sent;case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},computed:{originUrl:function(){return window.location.origin}},filters:{},watch:{},created:function(){this.setHandle()},mounted:function(){}}),wt=bt,_t=(n("H8nb"),Object(m["a"])(wt,vt,gt,!1,null,null,null)),Ct=_t.exports,yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"safe-guides-view"},[n("div",{staticClass:"markdown-body",domProps:{innerHTML:t._s(t.content)}})])},xt=[],kt=n("DlQD"),At=n.n(kt),Bt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Tt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("数字货币安全保管使用指南")]),n("ul",[n("li",[t._v("设备安全，手机优于电脑，苹果产品优于其它产品，专业的硬件钱包尤佳\n"),n("ol",[n("li",[t._v("保证使用原版系统和软件，从下载渠道要保证")]),n("li",[t._v("推荐使用 MacOS，最好不要用 windows，海外用户也可选择 ChromeOS")]),n("li",[t._v("使用浏览器的隐私模式进行敏感操作，避免让第三方扩展接触到帐户信息")])])]),n("li",[t._v("网站安全\n"),n("ol",[n("li",[t._v("认准"),n("code",{pre:!0},[t._v("HTTPS")]),t._v("绿色安全标识")]),n("li",[t._v("常用网站添加书签，尽量从书签访问。从搜索引擎进入网站时，要检查网址，因为你点击的可能是钓鱼网站的广告")])])]),n("li",[t._v("支付安全\n"),n("ul",[n("li",[t._v("向二维码地址转账时，要二次检查地址文本，因为二维码可能被掉包，而人不容易察觉")])])]),n("li",[t._v("钱包选择\n"),n("ul",[n("li",[t._v("使用 HD 钱包，不使用脑钱包，不使用私钥")])])])]),n("h2",[t._v("实用方案之手机分身")]),n("p",[t._v("优点：兼顾安全和方便，随身携带，主系统中毒不会威胁到分身系统")]),n("ul",[n("li",[t._v("一台具有分身功能的安卓手机，如小米手机（刷成国际版 MIUI 更好）")]),n("li",[t._v("创建分身系统，只安装钱包App")]),n("li",[t._v("启用指纹识别，与主系统使用不同手指，作为进入方式")]),n("li",[t._v("主系统中移除或关闭分身入口，如通知栏")]),n("li",[t._v("主系统不存放钱包，或只存放小额")])]),n("h2",[t._v("常见问题")]),n("p",[t._v("Q: 一定要选择开源钱包才安全吗？"),n("br"),t._v("\nA: 不，现在用户比较多的钱包如比特派、Coinomi 不是开源的")]),n("p",[t._v("Q: 硬件钱包是终极选择吗？"),n("br"),t._v("\nA: 不，如果遵守本指南，身边的手机可以是性价比更高的选择。如果一定要用电脑，硬件钱包是更好的选择")]),n("h2",[t._v("被盗事件")]),n("p",[n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/29855076"}},[t._v("我的比特币钱包被盗，损失了两个币")]),n("br"),n("a",{attrs:{href:"https://btc.com/1tPyUYNYQLCa7XjBFVKHLnwHoJECMVWEZ"}},[t._v("地址 1tPyUYNYQLCa7XjBFVKHLnwHoJECMVWEZ - BTC.com")]),n("br"),t._v("\n2017年9月16日和17日分两次转入，9月28日被全部转出，应该是 9.15 北京通知关闭交易所后，从交易所提币的新手")]),n("p",[n("a",{attrs:{href:"https://www.zhihu.com/question/40504007"}},[t._v("比特币在blockchain.info被盗，可以申诉找回吗？ 是否意味在线钱包并不安全？ - 知乎")]),n("a",{attrs:{href:"https://btc.com/1FPPy6mkU4HGZjvig8imkuDSzBzc4LgSET"}},[t._v("地址 1FPPy6mkU4HGZjvig8imkuDSzBzc4LgSET - BTC.com")]),n("br"),t._v("\n14 年开始用的老钱包，像是定投过，2015年1月15日 1.1 个币被转出")]),n("p",[n("a",{attrs:{href:"http://m.news.cctv.com/2017/12/23/ARTIjzJNEcnJC4Um4ReWcWqp171223.shtml"}},[t._v("河南警方破获全国首例比特币盗窃案_新闻_央视网(cctv.com)")]),n("br"),n("a",{attrs:{href:"http://henan.qq.com/a/20171125/015167.htm"}},[t._v("全国首例！油田居民百万比特币被盗_大豫网_腾讯网")]),n("br"),t._v("\n受害人使用电脑，被诱导安装了有后门的钱包软件")]),n("p",[n("a",{attrs:{href:"http://blog.sina.com.cn/s/blog_14ecef0b70102x3lb.html"}},[t._v("Bitfinex12万比特币被盗 黑客攻击还是监守自盗？ - 财新网")])]),n("p",[n("img",{attrs:{src:"http://ww1.sinaimg.cn/large/4e5d3ea7ly1fo4hna7mmzj20ku0msn09.jpg",alt:"你知道交易平台被盗的历史吗？"}})])])}],jt={},St=Object(m["a"])(jt,Bt,Tt,!1,null,null,null),Ht=St.exports;At.a.setOptions({renderer:new At.a.Renderer,gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,xhtml:!1});var Ot={name:"SafeGuides",props:{},data:function(){return{content:At()(Ht)}},computed:{},methods:{},mounted:function(){}},$t=Ot,zt=(n("OyJ8"),Object(m["a"])($t,yt,xt,!1,null,null,null)),Dt=zt.exports;i["default"].use(g["a"]);/zh/.test(window.navigator.language||window.navigator.userLanguage);var Et=[{path:"/",name:"Home",components:{default:V,address:ft,handle:Ct},meta:{keepAlive:!0,titles:{default:"BCH123_比特币现金导航",address:"BCH 帐户查看器"}}},{path:"/safe-guides",name:"SafeGuides",component:Dt,meta:{title:"安全指南"}},{path:"*",redirect:"/"}],qt=new g["a"]({mode:"history",routes:Et,scrollBehavior:function(t,e,n){if(!n)return{x:0,y:0};setTimeout(function(){window.scrollTo(n.x,n.y)},200)}});qt.beforeEach(function(t,e,n){var s=t.matched.slice().reverse().find(function(t){return t.meta&&t.meta.title}),i=t.matched.slice().reverse().find(function(t){return t.meta&&t.meta.metaTags});if(s&&(document.title=s.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(function(t){return t.parentNode.removeChild(t)}),!i)return n();i.meta.metaTags.map(function(t){var e=document.createElement("meta");return Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])}),e.setAttribute("data-vue-router-controlled",""),e}).forEach(function(t){return document.head.appendChild(t)}),n()});var Mt=qt,Rt=n("qSUR"),Lt=n("Njy0"),Pt=n.n(Lt),It=n("lIOY");Object(It["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),i["default"].config.productionTip=!1,i["default"].use(Rt["a"]),i["default"].use(Pt.a);var Ft={isZh:/zh/.test(window.navigator.language||window.navigator.userLanguage)},Ut={zh:{home:{title:"比特币现金导航",about:"关于",aboutTitle:"联系/捐赠开发者(BCH)",mobile:"电话&微信",email:"邮箱",sourceCode:"开放源码",searchPlaceholder:"BCH 地址，$handler"},address:{balance:"余额",latestTxs:"近 10 笔",sent:"发送",received:"接收",serviceUnavailable:"服务暂不可用",retry:"重试",direction:"方向",amount:"金额",time:"时间"}},en:{home:{title:"BCH123",about:"About",aboutTitle:"Donate to the developer (BCH)",mobile:"Mobile&Wechat",email:"Email",sourceCode:"Source Code",searchPlaceholder:"BCH address, $handler"},address:{balance:"Balance",latestTxs:"Latest 10 Transactions",sent:"Sent",received:"Received",serviceUnavailable:"Service Unavailable",retry:"Retry",direction:"Direction",amount:"Amount",time:"Time"}}},Nt=new Rt["a"]({locale:Ft.isZh?"zh":"en",messages:Ut});new i["default"]({data:{shared:Ft},router:Mt,i18n:Nt,render:function(t){return t(v)}}).$mount("#app")},XN8D:function(t,e,n){"use strict";var s=n("mmIv"),i=n.n(s);i.a},Xfis:function(t,e,n){},YWu6:function(t,e,n){},Z5JC:function(t,e,n){"use strict";var s=n("G6Hk"),i=n.n(s);i.a},c970:function(t,e,n){},"cB/s":function(t,e,n){},fjHr:function(t,e,n){},hAN3:function(t,e,n){"use strict";var s=n("tv4S"),i=n.n(s);i.a},hyoN:function(t,e,n){"use strict";var s=n("GF5B"),i=n.n(s);i.a},kRqj:function(t,e,n){"use strict";var s=n("YWu6"),i=n.n(s);i.a},mmIv:function(t,e,n){},tv4S:function(t,e,n){}});
//# sourceMappingURL=index-legacy.e345ad20.js.map