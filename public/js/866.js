(self.webpackChunk=self.webpackChunk||[]).push([[866],{2866:(t,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>n});const e={props:{Comments:Array},data:function(){return{appURL:"http://unitysound.ch",baseURL:"/acetate/"}},methods:{showUser:function(t){var s="users/"+t;this.$router.push("".concat(this.baseURL).concat(this.$i18n.locale,"/").concat(s))},showUserToken:function(){return localStorage.getItem("user_api_token")}},mounted:function(){}};const n=(0,a(1900).Z)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[null!==t.Comments&&t.Comments.length>0?a("div",[a("v-row",{staticClass:"pt-3 my-2 mx-4 overflow-y-auto",staticStyle:{"max-height":"300px"}},t._l(t.Comments,(function(s,e){return a("v-col",{key:e,staticClass:"subtitle-2",attrs:{cols:"12"}},[a("v-col",{staticClass:"my-0 py-0"},[a("v-list-item",[a("v-list-item-avatar",{staticClass:"d-none align-self-start mt-4 d-sm-flex",staticStyle:{cursor:"pointer"},attrs:{size:"30"}},[null!==s.user_avatar&&s.user_avatar.length>0?a("v-img",{attrs:{src:t.appURL+t.baseURL+"storage/avatar/user/"+s.user_avatar,alt:"Avatar",title:s.user_name},on:{click:function(a){return t.showUser(s.user_id)}}}):a("v-icon",{attrs:{large:"",title:s.user_name},on:{click:function(a){return t.showUser(s.user_id)}}},[t._v("mdi-account-circle")])],1),t._v(" "),a("v-list-item-content",[a("span",{staticClass:"my-0 grey--text"},[a("a",{staticClass:"comments_links",attrs:{title:s.user_name},on:{click:function(a){return t.showUser(s.user_id)}}},[t._v(t._s(s.user_name))]),t._v(" "),a("span",{staticClass:"caption grey--text"},[t._v("("+t._s(t._f("formatDate")(s.created_at))+"\n                                    |\n                                    "+t._s(t._f("formatStringToTime")(s.created_at))+") :")]),t._v(" "),a("v-spacer",{staticClass:"mb-2"}),t._v("\n                                "+t._s(s.text))],1),t._v(" "),a("div",{staticClass:"d-flex justify-end mt-4"},[a("span",{staticClass:"grey--text mr-4"},[a("v-icon",{staticClass:"grey--text mr-1",staticStyle:{"margin-bottom":"0.05rem"},attrs:{dark:"",small:""}},[t._v("\n                                        mdi-thumb-up")]),a("span",{staticClass:"grey--text subtitle-2"},[t._v(t._s(s.likes_count))])],1),t._v(" "),a("span",{staticClass:"grey--text mr-4"},[a("v-icon",{staticClass:"grey--text mr-1",staticStyle:{"margin-bottom":"0.05rem"},attrs:{dark:"",small:""}},[t._v("\n                                        mdi-thumb-down ")]),a("span",{staticClass:"grey--text subtitle-2"},[t._v(t._s(s.dislikes_count))])],1)])])],1)],1),a("v-col",[e<t.Comments.length-1?a("v-divider",{staticClass:"pb-1"}):t._e()],1)],1)})),1),t._v(" "),a("v-divider",{staticClass:"mx-2"})],1):t._e(),t._v(" "),t.showUserToken()?a("v-row",{staticClass:"pt-3"},[a("v-col",{staticClass:"my-auto mx-auto col-auto"},[a("v-btn",{attrs:{text:"",color:"info accent-4"},on:{click:function(s){return s.stopPropagation(),t.$emit("comment-dialog")}}},[t._v(t._s(t.$t("page.event.comment.post")))])],1)],1):a("v-row",{staticClass:"pt-3"},[a("v-col",{staticClass:"my-auto mx-auto col-auto"},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(s){var e=s.on;return[a("div",t._g({},e),[a("v-btn",{attrs:{text:"",disabled:"",outlined:"",color:"info accent-4"}},[t._v(t._s(t.$t("page.event.comment.post")))])],1)]}}],null,!1,255620205)},[t._v(" "),a("span",[t._v(t._s(t.$t("not_logged_in")))])])],1)],1)],1)}),[],!1,null,null,null).exports}}]);