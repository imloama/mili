webpackJsonp([14],{"/myT":function(t,e,s){"use strict";var a=s("f9bQ"),i=s("V8bM"),n=s("y8ae"),r=s("b1Yp"),o=s("FN0O"),l=s.n(o);e.a={data:function(){var t=this.$store.state.user,e=[a.a.USER_ROLE_ADMIN,a.a.USER_ROLE_SUPER_ADMIN,a.a.USER_ROLE_CRAWLER_ADMIN],s=!1;return t&&e.indexOf(t.role)>=0&&(s=!0),{q:"",user:t,adminVisible:s,isInputFocus:!1,userMessages:[],messages:this.$store.state.messages,messageCount:this.$store.state.messageCount}},methods:{onSearch:function(){var t="http://zhannei.baidu.com/cse/search?s=2990237584871814305&entry=1&q="+encodeURIComponent(this.q);window.open(t)},onInputFocus:function(){this.isInputFocus=!0},onInputBlur:function(){this.isInputFocus=!1},onReadMessage:function(t){i.a.readMessage({params:{id:t.id}}).then(function(){t.readed=!0})},onSignin:function(){location.href="/signin?ref="+encodeURIComponent(location.href)},onSignout:function(){var t=this;i.a.logout().then(function(e){e.errNo===n.a.SUCCESS&&(t.user=null,window.location.href="/signin")}).catch(function(t){console.log(t)})}},mounted:function(){for(var t=this.messages||[],e=t.slice(0),s=0;s<e.length;s++){if("messageTypeCommentComment"===e[s].type){var a=l()(e[s].data.commentContent,{limit:15,wordBreak:!0,suffix:"...",preserveTags:!1,moreLink:!1}),i=a.html;i=r.a.trimImg(i),e[s].data.commentContent=i}var n=e[s].data.title||"";n.length>15&&(e[s].data.title=n.substr(0,15)+"..."),e[s].readed=!1}this.userMessages=e}}},FN0O:function(t,e){function s(t,e){e=e||{};for(var s,i,n,r,o,l=e.limit||100,c=void 0===e.preserveTags||e.preserveTags,u=void 0!==e.wordBreak&&e.wordBreak,g=e.suffix||"...",m=e.moreLink||"",h=e.moreText||"»",p=e.preserveWhiteSpace||!1,d=t.replace(/</g,"\n<").replace(/>/g,">\n").replace(/\n\n/g,"\n").replace(/^\n/g,"").replace(/\n$/g,"").split("\n"),f=0,v=[],_=!1,C=0;C<d.length;C++)if(s=d[C],rowCut=p?s:s.replace(/[ ]+/g," "),s.length){var b=a(rowCut);if("<"!==s[0])if(f>=l)s="";else if(f+b.length>=l){if(i=l-f," "===b[i-1])for(;i&&(i-=1," "===b[i-1]););else n=b.slice(i).indexOf(" "),u||(-1!==n?i+=n:i=s.length);s=b.slice(0,i).join("")+g,m&&(s+='<a href="'+m+'" style="display:inline">'+h+"</a>"),f=l,_=!0}else f+=b.length;else if(c){if(f>=l)if(r=s.match(/[a-zA-Z]+/),o=r?r[0]:"")if("</"!==s.substring(0,2))v.push(o),s="";else{for(;v[v.length-1]!==o&&v.length;)v.pop();v.length&&(s=""),v.pop()}else s=""}else s="";d[C]=s}return{html:d.join("\n").replace(/\n/g,""),more:_}}function a(t){for(var e,s,a,i=[],n=0;n<rowCut.length;n++)e=rowCut.substring(n),s=e.match(/^&[a-z0-9#]+;/),s?(a=s[0],i.push(a),n+=a.length-1):i.push(rowCut[n]);return i}void 0!==t&&t.exports&&(t.exports=s)},FoGE:function(t,e,s){"use strict";var a=s("FhoZ"),i=s.n(a);e.a={data:function(){return{allowBaiduAd:i.a.allowBaiduAd,user:this.$store.state.user,userCount:this.$store.state.userCount,topicCount:this.$store.state.topicCount,replyCount:this.$store.state.replyCount,top10Users:this.$store.state.top10Users,maxCommentArticles:this.$store.state.maxCommentArticles,maxBrowseArticles:this.$store.state.maxBrowseArticles,votesMaxBrowse:this.$store.state.votesMaxBrowse,votesMaxComment:this.$store.state.votesMaxComment,topicAuthor:this.$store.state.topicAuthor,authorRecentArticles:this.$store.state.authorRecentArticles,userLoginVisible:this.$store.state.userLoginVisible,publishTopicVisible:this.$store.state.publishTopicVisible,top10Visible:this.$store.state.top10Visible,maxBrowseVisible:this.$store.state.maxBrowseVisible,maxCommentVisible:this.$store.state.maxCommentVisible,friendLinkVisible:this.$store.state.friendLinkVisible,statVisible:this.$store.state.statVisible}},mounted:function(){this.$nextTick(function(){this.createAd()})},methods:{createAd:function(){this.allowBaiduAd&&window.BAIDU_CLB_fillSlotAsync(i.a.baiduAd.ad250x250,"ad250x250Box")},onSignin:function(){location.href="/signin?ref="+encodeURIComponent(location.href)}}}},GXK3:function(t,e,s){"use strict";var a=s("YXP+"),i=s("yqLL"),n=s("tLe7"),r=s("FhoZ"),o=s.n(r);e.a={data:function(){return{siteConfig:this.$store.state.siteConfig}},head:function(){var t=this.siteConfig;return{titleTemplate:"%s - "+t.title,meta:[{hid:"description",name:"description",content:t.description},{name:"keywords",content:t.keywords}],script:[o.a.allowBaiduAd?{src:o.a.baiduAdURL}:null]}},middleware:"appData",components:{"app-header":a.a,"app-footer":i.a,"app-sidebar":n.a}}},J8af:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"golang-footer"},[s("div",{staticClass:"golang-footer-page-link"},[s("a",{attrs:{href:"https://github.com/shen100/golang123",target:"_blank"}},[s("div",{staticClass:"golang-footer-github"},[s("Icon",{staticStyle:{"margin-right":"1px"},attrs:{type:"social-github"}})],1),s("span",{staticStyle:{"margin-left":"2px"}},[t._v("Github")])]),s("span",[t._v("  |  ")]),s("a",{attrs:{href:"/rank"}},[t._v("积分榜")]),s("span",[t._v("  |  ")]),s("a",{attrs:{href:"/links"}},[t._v("友情链接")]),s("span",[t._v("  |  ")]),s("a",{attrs:{href:"/timeline"}},[t._v("成长历史")]),s("span",[t._v("  |  ")]),s("a",{attrs:{href:"/about"}},[t._v("关于我们")]),s("span",[t._v("  |  ")]),s("span",[t._v(t._s(t.siteConfig.icp))])]),s("div",{staticClass:"golang-footer-copyright"},[s("span",[t._v("2017 "),s("a",{attrs:{href:"/"}},[t._v(t._s(t.siteConfig.name))]),t._v(" ©版权所有")]),t._m(0)])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[t._v(" "),s("a",{attrs:{href:"https://github.com/shen100/golang123"}},[t._v("powerd by golang123")]),t._v(" ")])}],n={render:a,staticRenderFns:i};e.a=n},Ma2J:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("GXK3"),i=s("wh+H"),n=s("VU/8"),r=n(a.a,i.a,!1,null,null,null);e.default=r.exports},PokP:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"common-body-right"},[!t.user&&t.userLoginVisible?[s("div",{staticClass:"golang-cell golang-user-info"},[s("p",[t._v("golang中文社区")]),s("p",[t._v("您可以"),s("a",{staticClass:"golang-user-info-action sidebar-user-signin",on:{click:t.onSignin}},[t._v("登录")]),t._v("或"),s("a",{staticClass:"golang-user-info-action sidebar-user-signup",attrs:{href:"/signup"}},[t._v("注册")])])])]:t._e(),t.user&&t.publishTopicVisible?s("div",{staticClass:"golang-user-publish"},[t._m(0)]):t._e(),t.topicAuthor?s("div",{staticClass:"golang-cell"},[s("div",{staticClass:"title"},[t._v("作者信息")]),s("div",{staticClass:"golang-user-info",staticStyle:{"padding-top":"16px"}},[s("div",[s("a",{staticClass:"golang-sidebar-icon-box",attrs:{href:"/user/"+t.topicAuthor.id,target:"_blank"}},[s("img",{staticClass:"golang-user-info-icon",attrs:{src:t.topicAuthor.avatarURL,alt:""}})]),s("span",{staticClass:"golang-sidebar-info-box"},[s("a",{attrs:{href:"/user/"+t.topicAuthor.id,target:"_blank"}},[t._v(t._s(t.topicAuthor.name))])])]),s("div",{staticClass:"golang-user-line author-info-text"},[t._v("\n                    积分: "+t._s(t.topicAuthor.score)+"\n                ")]),s("div",{staticClass:"golang-user-line author-info-text text-italic"},[t._v(t._s(t.topicAuthor.signature||"这家伙很懒，什么个性签名都没有留下"))])])]):t._e(),t.authorRecentArticles&&t.authorRecentArticles.length?s("div",{staticClass:"golang-cell"},[s("div",{staticClass:"title"},[t._v("作者近期话题")]),s("ul",t._l(t.authorRecentArticles,function(e){return s("li",{staticClass:"golang-cell-item"},[s("a",{staticClass:"sidebar-articles-title",attrs:{href:"/topic/"+e.id,target:"_blank"}},[t._v(t._s(e.name))])])}))]):t._e(),t.top10Users&&t.top10Visible?s("div",{staticClass:"golang-cell"},[t._m(1),s("ul",t._l(t.top10Users,function(e){return s("li",{staticClass:"golang-cell-item"},[s("span",{staticClass:"golang-score-item"},[t._v(t._s(e.score))]),s("span",{staticClass:"golang-score-item"},[s("a",{staticClass:"user-page-link",attrs:{href:"/user/"+e.id,target:"_blank"}},[t._v(t._s(e.name))])])])}))]):t._e(),t.allowBaiduAd?s("div",{attrs:{id:"ad250x250Box"}}):t._e(),t.maxBrowseVisible&&t.maxBrowseArticles&&t.maxBrowseArticles.length?s("div",{staticClass:"golang-cell"},[s("div",{staticClass:"title"},[t._v("热门话题")]),s("ul",t._l(t.maxBrowseArticles,function(e){return s("li",{staticClass:"golang-cell-item"},[s("a",{staticClass:"sidebar-articles-title",attrs:{href:"/topic/"+e.id,target:"_blank"}},[t._v(t._s(e.name))])])}))]):t._e(),t.maxCommentVisible&&t.maxCommentArticles&&t.maxCommentArticles.length?s("div",{staticClass:"golang-cell"},[s("div",{staticClass:"title"},[t._v("回复最多的话题")]),s("ul",t._l(t.maxCommentArticles,function(e){return s("li",{staticClass:"golang-cell-item"},[s("a",{staticClass:"sidebar-articles-title",attrs:{href:"/topic/"+e.id,target:"_blank"}},[t._v(t._s(e.name))])])}))]):t._e(),t.votesMaxBrowse&&t.votesMaxBrowse.length?s("div",{staticClass:"golang-cell"},[s("div",{staticClass:"title"},[t._v("热门投票")]),s("ul",t._l(t.votesMaxBrowse,function(e){return s("li",{staticClass:"golang-cell-item"},[s("a",{staticClass:"sidebar-articles-title",attrs:{href:"/vote/"+e.id}},[t._v(t._s(e.name))])])}))]):t._e(),t.votesMaxComment&&t.votesMaxComment.length?s("div",{staticClass:"golang-cell"},[s("div",{staticClass:"title"},[t._v("回复最多的投票")]),s("ul",t._l(t.votesMaxComment,function(e){return s("li",{staticClass:"golang-cell-item"},[s("a",{staticClass:"sidebar-articles-title",attrs:{href:"/vote/"+e.id}},[t._v(t._s(e.name))])])}))]):t._e(),t.friendLinkVisible?s("div",{staticClass:"golang-cell"},[s("div",{staticClass:"title"},[t._v("友情链接")]),t._m(2)]):t._e(),t.statVisible?s("div",{staticClass:"golang-cell"},[s("div",{staticClass:"title"},[t._v("统计信息")]),s("ul",[s("li",{staticClass:"golang-cell-item"},[t._v("会员: "+t._s(t.userCount)+" 个")]),s("li",{staticClass:"golang-cell-item"},[t._v("话题: "+t._s(t.topicCount)+" 个")]),s("li",{staticClass:"golang-cell-item"},[t._v("回复: "+t._s(t.replyCount)+" 个")])])]):t._e()],2)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"/topic/create"}},[s("button",{staticClass:"signup-button ivu-btn ivu-btn-primary ivu-btn-large"},[t._v("发布话题")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[t._v("积分榜"),s("a",{staticClass:"top100-link",attrs:{href:"/rank",target:"_blank"}},[t._v("TOP 100>>")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticStyle:{"text-align":"center"}},[s("li",{staticClass:"golang-cell-item"},[s("a",{staticClass:"sidebar-articles-title",attrs:{href:"https://cnodejs.org",target:"_blank"}},[s("img",{staticStyle:{width:"150px"},attrs:{src:"https://cnodejs.org/public/images/cnodejs.svg"}})])]),s("li",{staticClass:"golang-cell-item"},[s("a",{staticClass:"sidebar-articles-title",attrs:{href:"https://ruby-china.org/",target:"_blank"}},[s("img",{staticStyle:{width:"150px"},attrs:{src:"https://dn-phphub.qbox.me/assets/images/friends/ruby-china.png"}})])])])}],n={render:a,staticRenderFns:i};e.a=n},WGz5:function(t,e,s){e=t.exports=s("FZ+f")(!1),e.push([t.i,"",""])},"YXP+":function(t,e,s){"use strict";function a(t){s("ztIN")}var i=s("/myT"),n=s("wfzn"),r=s("VU/8"),o=a,l=r(i.a,n.a,!1,o,null,null);e.a=l.exports},"b/rQ":function(t,e,s){var a=s("ga5k");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("7b4e93d2",a,!0)},b1Yp:function(t,e,s){"use strict";var a={trimImg:function(t){return t=t.replace(/<\s*img\s+.*?\/?\s*>/g,"")},entity2HTML:function(t){var e={lt:"<",gt:">",nbsp:" ",amp:"&",quot:'"'},s=/&(lt|gt|nbsp|amp|quot);/gi;return t.replace(s,function(t,s){return e[s]})}};e.a=a},ga5k:function(t,e,s){e=t.exports=s("FZ+f")(!1),e.push([t.i,"",""])},qEQe:function(t,e,s){"use strict";e.a={data:function(){return{siteConfig:this.$store.state.siteConfig}}}},tLe7:function(t,e,s){"use strict";function a(t){s("b/rQ")}var i=s("FoGE"),n=s("PokP"),r=s("VU/8"),o=a,l=r(i.a,n.a,!1,o,null,null);e.a=l.exports},wfzn:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"golang-top-header"},[s("div",{staticClass:"golang-top-box"},[s("div",{staticClass:"golang-top-header-left"},[t._m(0),s("div",{staticClass:"golang-header-search"},[s("form",{staticClass:"golang-top-search",attrs:{action:"",target:"_blank",method:"get"},on:{submit:function(e){e.preventDefault(),t.onSearch(e)}}},[s("p",{staticStyle:{position:"relative"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.q,expression:"q"}],staticClass:"golang-top-input",style:{border:t.isInputFocus?"1px #a2a2a2 solid":"1px #e3e3e3 solid"},attrs:{type:"text",name:"topSearch"},domProps:{value:t.q},on:{focus:t.onInputFocus,blur:t.onInputBlur,input:function(e){e.target.composing||(t.q=e.target.value)}}}),s("span",{staticClass:"search-icon"})])])])]),t._m(1),s("div",{staticClass:"golang-top-header-right"},[s("ul",[t._m(2),t._m(3),t.user?[s("li",{staticClass:"user-message-wrapbox"},[t.userMessages.length?s("Tooltip",{attrs:{trigger:"hover",title:"提示标题",placement:"bottom"}},[s("a",{staticClass:"user-message-box",attrs:{href:""}},[s("Icon",{staticClass:"user-message",attrs:{type:"ios-bell-outline"}}),s("span",{staticClass:"user-message-tip-count"},[t._v(t._s(t.messageCount))])],1),s("ul",{staticClass:"header-message-list",attrs:{slot:"content"},slot:"content"},t._l(t.userMessages,function(e){return s("li",["messageTypeCommentArticle"===e.type?s("p",{staticClass:"header-message-item"},[s("a",{staticClass:"header-message-user",attrs:{href:"/user/"+e.fromUser.id,target:"_blank"}},[t._v(t._s(e.fromUser.name))]),t._v(" 回复了你的话题 "),s("a",{staticClass:"header-message-content",style:{color:e.readed?"#a0a3a4":""},attrs:{href:"/topic/"+e.sourceID+"/#reply-"+e.commentID,target:"_blank"},on:{click:function(s){t.onReadMessage(e)}}},[t._v(t._s(e.data.title))])]):"messageTypeCommentVote"===e.type?s("p",{staticClass:"header-message-item"},[s("a",{staticClass:"header-message-user",attrs:{href:"/user/"+e.fromUser.id,target:"_blank"}},[t._v(t._s(e.fromUser.name))]),t._v(" 回复了你的投票 "),s("a",{staticClass:"header-message-content",style:{color:e.readed?"#a0a3a4":""},attrs:{href:"/vote/"+e.sourceID+"/#reply-"+e.commentID,target:"_blank"},on:{click:function(s){t.onReadMessage(e)}}},[t._v(t._s(e.data.title))])]):"messageTypeCommentComment"===e.type?s("p",{staticClass:"header-message-item"},[s("a",{staticClass:"header-message-user",attrs:{href:"/user/"+e.fromUser.id,target:"_blank"}},[t._v(t._s(e.fromUser.name))]),t._v(" 回复了你 "),s("a",{staticClass:"header-message-content",style:{color:e.readed?"#a0a3a4":""},attrs:{href:"article"===e.sourceName?"/topic/"+e.sourceID+"/#reply-"+e.commentID:"/vote/"+e.sourceID+"/#reply-"+e.commentID,target:"_blank"},on:{click:function(s){t.onReadMessage(e)}}},[t._v(t._s(e.data.commentContent))])]):t._e()])}))]):s("a",{staticClass:"user-message-box",attrs:{href:""}},[s("Icon",{staticClass:"user-message",attrs:{type:"ios-bell-outline"}})],1)],1),s("li",{staticStyle:{"padding-right":"0"}},[t.user?s("Tooltip",{attrs:{trigger:"hover",title:"提示标题",placement:"bottom"}},[s("a",{staticClass:"header-usre-box",attrs:{href:"/user/"+t.user.id}},[s("span",{staticClass:"header-avatar"},[s("img",{attrs:{src:t.user.avatarURL,alt:""}})]),s("span",{staticClass:"header-user-name"},[t._v(t._s(t.user.name))])]),s("ul",{staticClass:"header-user-box",attrs:{slot:"content"},slot:"content"},[s("li",[s("a",{attrs:{href:"/user/"+t.user.id}},[t._v("个人主页")])]),t.adminVisible?s("li",[s("a",{attrs:{href:"/admin"}},[t._v("后台管理")])]):t._e(),s("li",[s("a",{attrs:{href:"/ac/pwdModify"}},[t._v("修改密码")])]),s("li",{on:{click:t.onSignout}},[t._v("退  出")])])]):t._e()],1)]:[s("a",{on:{click:t.onSignin}},[s("li",{staticStyle:{color:"#333"}},[t._v("登录")])]),t._m(4)]],2)])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"golang-logo-container"},[s("a",{attrs:{href:"/"}},[s("img",{attrs:{src:"/images/logo.png"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"golang-top-header-nav"},[s("ul",[s("li",[s("a",{attrs:{href:"/"}},[t._v("话题")])]),s("li",[s("a",{attrs:{href:"/book"}},[t._v("在线图书")])]),s("li",[s("a",{attrs:{href:"/vote"}},[t._v("投票")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("a",{attrs:{href:"https://github.com/shen100/golang123",target:"_blank"}},[t._v("golang123源码")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("a",{attrs:{href:"https://github.com/shen100/golang123/issues",target:"_blank"}},[t._v("问题反馈")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"/signup"}},[s("li",{staticStyle:{color:"#333"}},[t._v("注册")])])}],n={render:a,staticRenderFns:i};e.a=n},"wh+H":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("app-header"),s("div",{staticClass:"common-body"},[s("div",{staticClass:"common-body-left"},[s("nuxt",{ref:"content"})],1),s("app-sidebar")],1),s("app-footer"),s("BackTop")],1)},i=[],n={render:a,staticRenderFns:i};e.a=n},y8ae:function(t,e,s){"use strict";e.a={SUCCESS:0,ERROR:1,LOGIN_TIMEOUT:1001,IN_ACTIVE:1002}},yqLL:function(t,e,s){"use strict";var a=s("qEQe"),i=s("J8af"),n=s("VU/8"),r=n(a.a,i.a,!1,null,null,null);e.a=r.exports},ztIN:function(t,e,s){var a=s("WGz5");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("48fa11cf",a,!0)}});
//# sourceMappingURL=default.5dd65d6534ef90ee8753.js.map