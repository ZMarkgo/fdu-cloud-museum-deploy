webpackJsonp([1],{"3Pin":function(t,e){},"9Zl8":function(t,e){},"9zt9":function(t,e){},ASei:function(t,e){},IJXu:function(t,e){},J6G0:function(t,e){},LOjT:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-view")],1)},staticRenderFns:[]};var i=s("VU/8")({name:"App"},n,!1,function(t){s("3Pin")},null,null).exports,o=s("/ocq"),r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-menu",{staticStyle:{"min-width":"1300px"},attrs:{"default-active":t.currentPath,router:"",mode:"horizontal","background-color":"white","text-color":"#222","active-text-color":"red"}},[t._l(t.navList,function(e,a){return s("el-menu-item",{key:a,attrs:{index:e.name}},[t._v("\n        "+t._s(e.navItem)+"\n      ")])}),t._v(" "),s("span",{staticStyle:{position:"absolute","padding-top":"20px",right:"47%","font-size":"20px","font-weight":"bold"}},[t._v("复旦云博")])],2)],1)},staticRenderFns:[]};var l={name:"Home",components:{NavMenu:s("VU/8")({name:"NavMenu",data:function(){return{navList:[{name:"/about",navItem:"首页"},{name:"/model-library",navItem:"模型库"},{name:"/model-artifacts",navItem:"3D建模"},{name:"/login",navItem:"个人中心"}],keywords:""}},computed:{hoverBackground:function(){return"#ffd04b"},currentPath:function(){var t=this.$route.path.indexOf("/",1);return-1!==t?this.$route.path.substring(0,t):this.$route.path}}},r,!1,function(t){s("J6G0")},"data-v-cf8dee16",null).exports}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nav-menu"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var u=s("VU/8")(l,c,!1,function(t){s("LOjT")},"data-v-ed169aae",null).exports,d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about-container"},[e("p",[this._v("关于我们")])])}]};var m=s("VU/8")({name:"AboutView"},d,!1,function(t){s("bAZ6")},"data-v-1813034c",null).exports,p={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:this.myDialogVisible,expression:"myDialogVisible"}],staticClass:"dialog-mask"},[this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"dialog-container"},[e("div",{staticClass:"dialog-body"},[e("div",{staticClass:"pyramid-loader"},[e("div",{staticClass:"wrapper"},[e("span",{staticClass:"side side1"}),this._v(" "),e("span",{staticClass:"side side2"}),this._v(" "),e("span",{staticClass:"side side3"}),this._v(" "),e("span",{staticClass:"side side4"}),this._v(" "),e("span",{staticClass:"shadow"})])])])])}]};var h={name:"Search",components:{Loading:s("VU/8")({name:"Loading",data:function(){return{myDialogVisible:!1}},methods:{show:function(){this.myDialogVisible=!0}}},p,!1,function(t){s("ASei")},"data-v-1d75c18a",null).exports},props:{search_url:String,load_by_state_url:{type:String,default:"/models/list-by-state"}},data:function(){return{searchResults:[],keyword:"",web_a_url:"http://10.177.35.97:4000/"}},mounted:function(){var t=this;this.loadModelsWithStateId(1),this.$nextTick(function(){t.$refs.searchInput.focus()})},methods:{loadModelsWithStateId:function(t){var e=this,s=this;this.$axios.get(this.load_by_state_url+"/"+t).then(function(t){t&&200===t.data.code?(s.searchResults=t.data.object,null!==s.searchResults&&0!==s.searchResults.length||e.handleNoResult()):e.$message.warning(t.data.msg)}).catch(function(t){console.log(t),e.$message.warning("出错了，请刷新页面")})},search:function(){var t=this,e=this;""!==this.keyword?this.$axios.get(this.search_url+"/"+this.keyword).then(function(s){s&&200===s.data.code?(e.searchResults=s.data.object,null!==e.searchResults&&0!==e.searchResults.length||(t.$message.warning("没有找到需要的信息"),t.handleNoResult())):t.$message.warning(s.data.msg)}).catch(function(e){console.log(e),t.$message.warning("出错了，请稍后再试")}):this.$message.info("请输入搜索的关键词")},handleNoResult:function(){},showDetails:function(t){var e=this,s=this;this.$refs.loading.show(),this.$axios.get("/models/show/"+t.id).then(function(t){t&&200===t.data.code?(e.$message.success({message:"模型加载中，请稍等...",duration:5e3}),setTimeout(function(){window.location.href=s.web_a_url},5e3)):e.$message.warning(t.data.msg)}).catch(function(t){console.log(t),e.$message.warning("出错了，请稍后再试")})},clear:function(){this.searchResults=[],this.keyword=""}}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-root-container"},[s("div",{staticClass:"search-container",staticStyle:{display:"flex","justify-content":"center","margin-right":"15px","margin-bottom":"50px"}},[s("div",{staticClass:"search"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],ref:"searchInput",staticClass:"search__input",attrs:{type:"text",placeholder:"输入后，回车检索"},domProps:{value:t.keyword},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search.apply(null,arguments)},input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),t._v(" "),s("button",{staticClass:"search__button",on:{click:t.search}},[s("svg",{staticClass:"search__icon",attrs:{"aria-hidden":"true",viewBox:"0 0 24 24"}},[s("g",[s("path",{attrs:{d:"M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"}})])])])])]),t._v(" "),s("div",{staticClass:"search-result-container"},[s("el-row",t._l(t.searchResults,function(e){return s("el-col",{key:e.name,attrs:{span:6}},[s("el-card",{staticClass:"result-card",attrs:{shadow:"hover"}},[s("img",{staticClass:"image",attrs:{src:e.cover}}),t._v(" "),s("div",{staticClass:"search-result-details-text"},[s("span",[t._v(t._s(e.modelName))]),t._v(" "),s("div",{staticClass:"bottom clearfix"},[s("div",{staticClass:"time"},[t._v(t._s(e.intro))]),t._v(" "),s("el-button",{staticClass:"button",attrs:{type:"text"},on:{click:function(s){return t.showDetails(e)}}},[t._v("查看模型")])],1)])])],1)}),1)],1),t._v(" "),s("loading",{ref:"loading"})],1)},staticRenderFns:[]};var v={name:"ModelLibraryView",components:{Search:s("VU/8")(h,f,!1,function(t){s("9Zl8")},"data-v-0057d412",null).exports}},g={render:function(){var t=this.$createElement;return(this._self._c||t)("search",{attrs:{search_url:"/models/search-by-name"}})},staticRenderFns:[]};var _=s("VU/8")(v,g,!1,function(t){s("lH3/")},"data-v-b8057896",null).exports,w={name:"source-upload",data:function(){return{myDialogVisible:!1,fileList:[],filePath:"",uploadFileName:"",uploadURL:""}},methods:{handleExceed:function(t,e){var s="当前限制选择1个文件，本次选择了"+t.length+"个文件";t.length+e.length>=2&&(s=s+"，共选择了"+(t.length+e.length)+"个文件"),this.$message({type:"warning",message:s})},deleteUploadedFile:function(){if(this.$refs.upload.uploadFiles.pop(),""!==this.filePath){var t=this.filePath.lastIndexOf("/"),e=this.filePath.substring(t+1),s=this;this.$axios.post(this.uploadURL,{fileName:e}).then(function(t){s.filePath="",s.fileList=[],s.fileName=""}).catch(function(t){console.log(t)})}},clear:function(){this.$refs.upload.clearFiles(),this.uploadFileName=""},beforeUpload:function(t){var e="application/json"===t.type,s=t.size/1024/1024<5;return e||this.$alert("上传失败，仅支持上传json文件，请重新选择json格式的文件并上传！","提示",{confirmButtonText:"确定"}),s||this.$alert("上传失败，上传的文件大小不能超过5MB！","提示",{confirmButtonText:"确定"}),this.uploadFileName=t.name,e&&s},submitUpload:function(t){var e=this,s=new FormData,a=this;s.append("file",t.file),this.$axios.post("/scenarios/upload",s).then(function(s){s&&200===s.data.code?(a.filePath=s.data.result,a.$alert("上传成功，该场景文件有效，请继续选择其他测试信息","提示",{confirmButtonText:"确定"}),a.uploadFileName=t.file.name,a.handleConfirm()):(e.$alert(s.data.message,"提示",{confirmButtonText:"确定"}),a.$refs.upload.uploadFiles.pop())})},submit:function(){this.$refs.upload.submit()},show:function(){this.myDialogVisible=!0},handleCancel:function(){this.myDialogVisible=!1,this.clear(),this.deleteUploadedFile(),this.$emit("resetScenarioSelect")},handleConfirm:function(){this.myDialogVisible=!1,this.$emit("uploadScenario")}}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{directives:[{name:"show",rawName:"v-show",value:t.myDialogVisible,expression:"myDialogVisible"}],staticClass:"dialog-mask"},[s("div",{staticClass:"dialog-container"},[s("div",{staticClass:"dialog-body"},[s("form",{staticClass:"modal"},[s("span",{staticClass:"close",on:{click:t.handleCancel}},[t._v("X")]),t._v(" "),s("div",{staticClass:"content"},[s("span",{staticClass:"title"},[t._v("上传图片或视频")]),t._v(" "),t._m(0),t._v(" "),s("el-upload",{ref:"upload",attrs:{action:"","http-request":t.submitUpload,accept:"application/json","before-remove":t.deleteUploadedFile,multiple:"",limit:1,"on-exceed":t.handleExceed,"file-list":t.fileList,"before-upload":t.beforeUpload,"auto-upload":!1}},[s("el-button",{staticClass:"upload-btn",staticStyle:{"margin-left":"100px"},attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("选取文件")]),t._v(" "),s("el-button",{staticClass:"upload-btn",staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:t.submit}},[t._v("确定")])],1)],1)])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"message"},[this._v("\n              图片请选择 jpg格式\n              "),e("br"),this._v("\n              视频请选择 mp4格式\n            ")])}]};var y={name:"ModelArtifactsView",components:{SourceUpload:s("VU/8")(w,b,!1,function(t){s("IJXu")},"data-v-6ff01a48",null).exports},methods:{startModeling:function(){this.$refs.upload.show()}}},$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"start-modeling-container"},[e("el-button",{attrs:{id:"start-modeling-button"},on:{click:this.startModeling}},[this._v("开始建模")]),this._v(" "),e("source-upload",{ref:"upload"})],1)},staticRenderFns:[]};var C=s("VU/8")(y,$,!1,function(t){s("9zt9")},"data-v-54be043d",null).exports,x={name:"Login",data:function(){return{loginForm:{username:"",password:""},loginURL:"/login/user"}},methods:{login:function(){var t=this,e=this;console.log("test"),this.$axios.post(this.loginURL,{username:this.loginForm.username,password:this.loginForm.password}).then(function(s){s&&200===s.data.code?(e.$message.success("登陆成功"),e.$store.commit("login",e.loginForm),t.$router.replace({path:"/"})):t.$message.error(s.data.msg)}).catch(function(e){console.log(e),t.$message.warning("出错了，请稍后再试")})},goToSignUp:function(){this.$router.push("/signup")}}},F={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login_or_signup-container"},[s("div",{staticClass:"form-box"},[s("form",{staticClass:"form"},[s("span",{staticClass:"title"},[t._v("登陆")]),t._v(" "),s("span",{staticClass:"subtitle"},[t._v("用户名和密码登陆")]),t._v(" "),s("div",{staticClass:"form-container"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.username,expression:"loginForm.username"}],staticClass:"input",attrs:{type:"text",placeholder:"用户名",autocomplete:"off"},domProps:{value:t.loginForm.username},on:{input:function(e){e.target.composing||t.$set(t.loginForm,"username",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.password,expression:"loginForm.password"}],staticClass:"input",attrs:{type:"password",placeholder:"密码",autocomplete:"off"},domProps:{value:t.loginForm.password},on:{input:function(e){e.target.composing||t.$set(t.loginForm,"password",e.target.value)}}})]),t._v(" "),s("button",{attrs:{type:"button"},on:{click:t.login}},[t._v("登陆")])]),t._v(" "),s("div",{staticClass:"form-section"},[s("p",[t._v("还没有账号？ "),s("a",{on:{click:t.goToSignUp}},[t._v("注册")])])])])])},staticRenderFns:[]};var R=s("VU/8")(x,F,!1,function(t){s("tO4/")},"data-v-36534008",null).exports,U={name:"SignUp",data:function(){return{signupForm:{username:"",email:"",password:""},signupURL:"/signup/user"}},methods:{signUp:function(){var t=this;this.$axios.post(this.signupURL,this.signupForm).then(function(e){e&&200===e.data.code?(t.$message({type:"success",message:"注册成功，请登陆"}),t.goToLogIn()):t.$message.error(e.data.msg)}).catch(function(e){console.log(e),t.$message({type:"warning",message:"出错了，请稍后再试"})})},goToLogIn:function(){this.$router.push("/login")}}},k={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login_or_signup-container"},[s("div",{staticClass:"form-box"},[s("form",{staticClass:"form"},[s("span",{staticClass:"title"},[t._v("注册")]),t._v(" "),s("span",{staticClass:"subtitle"},[t._v("使用邮箱创建新账号")]),t._v(" "),s("div",{staticClass:"form-container"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.signupForm.username,expression:"signupForm.username"}],staticClass:"input",attrs:{type:"text",placeholder:"用户名",autocomplete:"off"},domProps:{value:t.signupForm.username},on:{input:function(e){e.target.composing||t.$set(t.signupForm,"username",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.signupForm.email,expression:"signupForm.email"}],staticClass:"input",attrs:{type:"email",placeholder:"邮箱",autocomplete:"off"},domProps:{value:t.signupForm.email},on:{input:function(e){e.target.composing||t.$set(t.signupForm,"email",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.signupForm.password,expression:"signupForm.password"}],staticClass:"input",attrs:{type:"password",placeholder:"密码",autocomplete:"off"},domProps:{value:t.signupForm.password},on:{input:function(e){e.target.composing||t.$set(t.signupForm,"password",e.target.value)}}})]),t._v(" "),s("button",{attrs:{type:"button"},on:{click:t.signUp}},[t._v("注册")])]),t._v(" "),s("div",{staticClass:"form-section"},[s("p",[t._v("已经有账号？ "),s("a",{on:{click:t.goToLogIn}},[t._v("登陆")])])])])])},staticRenderFns:[]};var L=s("VU/8")(U,k,!1,function(t){s("qPw8")},"data-v-22e0b1c1",null).exports;a.default.use(o.a);var S=new o.a({mode:"history",routes:[{path:"/",name:"Home",component:u,redirect:"/about",children:[{path:"/about",name:"AboutView",component:m,meta:{requireAuth:!0}},{path:"/model-library",name:"ModelLibrary",component:_,meta:{requireAuth:!0}},{path:"/model-artifacts",name:"ModelArtifactsView",component:C,meta:{requireAuth:!0}}]},{path:"/login",name:"LogIn",component:R},{path:"/signup",name:"SignUp",component:L}]}),V=s("mtWM"),N=s("zL8q"),I=s.n(N),P=s("mvHQ"),E=s.n(P),A=s("NYxO");a.default.use(A.a);var M=new A.a.Store({state:{user:{username:null==window.localStorage.getItem("user")?"":JSON.parse(window.localStorage.getItem("user")).username}},mutations:{login:function(t,e){t.user=e,window.localStorage.setItem("user",E()(e))}}});s("tvR6"),s("hL5s");V.a.defaults.baseURL="http://10.177.35.97:8070/api",V.a.defaults.withCredentials=!0,a.default.prototype.$axios=V.a,a.default.prototype.$store=M,a.default.config.productionTip=!1,a.default.use(I.a,{size:"small",zIndex:3e3}),S.beforeEach(function(t,e,s){t.meta.requireAuth?M.state.user.username?s():s({path:"login",query:{redirect:t.fullPath}}):s()}),new a.default({el:"#app",render:function(t){return t(i)},router:S,store:M,components:{App:i},template:"<App/>"})},bAZ6:function(t,e){},hL5s:function(t,e){},"lH3/":function(t,e){},qPw8:function(t,e){},"tO4/":function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a04e44704dfaf15d346a.js.map