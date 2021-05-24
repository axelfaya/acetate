(self.webpackChunk=self.webpackChunk||[]).push([[751],{2751:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>s});const a={props:{Description:String,CurrentDates:Array,OldDates:Array,People:Array,Venues:Array,Addresses:Array,Prices:Array,Emails:Array,Phones:Array,Websites:Array},data:function(){return{panel:[0],appURL:"http://127.0.0.1:8001",baseURL:"/",googleMap:"https://www.google.com/maps/search/?api=1&query=",sortBy:"start_date"}},computed:{headers:function(){return[{text:this.$t("page.event.title.start_date"),value:"start_date",align:"start"},{text:this.$t("page.event.title.end_date"),value:"end_date"},{text:this.$t("page.event.title.start_time"),value:"start_time"},{text:this.$t("page.event.title.end_time"),value:"end_time"}]}},methods:{showPerson:function(t){var e="people/"+t;this.$router.push("".concat(this.baseURL).concat(this.$i18n.locale,"/").concat(e))},showVenue:function(t){var e="venues/"+t;this.$router.push("".concat(this.baseURL).concat(this.$i18n.locale,"/").concat(e))},mapQuery:function(t){return this.googleMap+t.latitude+","+t.longitude},mailTo:function(t){return"mailto:"+t.address}}};const s=(0,n(1900).Z)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-expansion-panels",{attrs:{multiple:"",elevation:"-1",tile:"",accordion:""},model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},[n("v-expansion-panel",{staticClass:"caption primary--text"},[n("v-expansion-panel-header",{scopedSlots:t._u([{key:"actions",fn:function(){return[n("v-icon",{attrs:{color:"primary"}},[t._v(" $expand ")])]},proxy:!0}])},[t._v(t._s(t.$t("page.event.title.description"))+"\n                ")]),t._v(" "),n("v-expansion-panel-content",[null!==t.Description&&t.Description.length>0?n("span",{staticClass:"subtitle-2",class:t.$vuetify.theme.dark?"grey--text":"primary--text"},[t._v(t._s(t.Description))]):n("span",[t._v("\n                    "+t._s(t.$t("page.event.description_none")))])])],1),t._v(" "),n("v-expansion-panel",{staticClass:"caption primary--text"},[n("v-expansion-panel-header",{scopedSlots:t._u([{key:"actions",fn:function(){return[n("v-icon",{attrs:{color:"primary"}},[t._v(" $expand ")])]},proxy:!0}])},[t._v(t._s(t.$t("page.event.title.dates"))+"\n                ")]),t._v(" "),n("v-expansion-panel-content",[null!==t.CurrentDates&&t.CurrentDates.length>0?n("span",{staticClass:"subtitle-2",class:(t.$vuetify.theme.dark,"primary--text")},[n("v-data-table",{staticClass:"primary--text",attrs:{headers:t.headers,items:t.CurrentDates,"sort-by":t.sortBy,"disable-pagination":"","hide-default-footer":""},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e}}})],1):t._e()])],1),t._v(" "),null!==t.People&&t.People.length>0?n("v-expansion-panel",{staticClass:"caption primary--text"},[n("v-expansion-panel-header",{scopedSlots:t._u([{key:"actions",fn:function(){return[n("v-icon",{attrs:{color:"primary"}},[t._v(" $expand ")])]},proxy:!0}],null,!1,431335688)},[t._v(t._s(t.$t("page.event.title.attendance")))]),t._v(" "),n("v-expansion-panel-content",[n("span",t._l(t.People,(function(e,a){return n("span",{key:a},[n("v-avatar",{staticStyle:{cursor:"pointer"},attrs:{size:"20"}},[null!==e.avatar&&e.avatar.length>0?n("img",{attrs:{alt:"Avatar",src:t.baseURL+"storage/avatar/person/"+e.avatar,title:e.nickname},on:{click:function(n){return t.showPerson(e.id)}}}):n("v-icon",{class:t.$vuetify.theme.dark?"info--text":"secondary--text",attrs:{title:e.nickname},on:{click:function(n){return t.showPerson(e.id)}}},[t._v("mdi-account-circle")])],1),t._v(" "),n("v-btn",{staticClass:"no-uppercase",class:t.$vuetify.theme.dark?"info--text":"secondary--text",attrs:{text:"",tile:"",small:"",title:e.nickname},on:{click:function(n){return t.showPerson(e.id)}}},[t._v(t._s(e.nickname))]),t._v(" "),n("v-spacer")],1)})),0)])],1):t._e(),t._v(" "),null!==t.Venues&&t.Venues.length>0||null!==t.Addresses&&t.Addresses.length>0?n("v-expansion-panel",{staticClass:"caption primary--text"},[n("v-expansion-panel-header",{scopedSlots:t._u([{key:"actions",fn:function(){return[n("v-icon",{attrs:{color:"primary"}},[t._v(" $expand ")])]},proxy:!0}],null,!1,431335688)},[t._v(t._s(t.$t("page.event.title.locations")))]),t._v(" "),n("v-expansion-panel-content",[null!==t.Venues&&t.Venues.length>0?n("div",{staticClass:"mt-0 mb-4 py-0 mx-0 px-0"},[n("span",[t.Venues.length>1?n("div",{staticClass:"mb-2 subtitle-2 grey--text"},[t._v("\n                            "+t._s(t.$t("page.event.title.venues"))+" :\n                        ")]):n("div",{staticClass:"mb-2 subtitle-2 grey--text"},[t._v("\n                            "+t._s(t.$t("page.event.title.venue"))+" :\n                        ")]),t._v(" "),n("v-spacer"),t._v(" "),t._l(t.Venues,(function(e,a){return n("span",{key:a},[n("v-avatar",{staticStyle:{cursor:"pointer"},attrs:{tile:"",size:"20"}},[null!==e.avatar&&e.avatar.length>0?n("img",{attrs:{alt:"Avatar",src:t.baseURL+"storage/avatar/venue/"+e.avatar,title:e.name},on:{click:function(n){return t.showVenue(e.id)}}}):n("v-icon",{class:t.$vuetify.theme.dark?"info--text":"secondary--text",attrs:{title:e.name},on:{click:function(n){return t.showVenue(e.id)}}},[t._v("mdi-office-building")])],1),n("v-btn",{staticClass:"no-uppercase",class:t.$vuetify.theme.dark?"info--text":"secondary--text",attrs:{text:"",tile:"",small:"",title:e.name},on:{click:function(n){return t.showVenue(e.id)}}},[t._v(t._s(e.name))]),n("v-spacer")],1)}))],2)]):t._e(),t._v(" "),null!==t.Addresses&&t.Addresses.length>0?n("div",{staticClass:"mt-0 mb-4 py-0 mx-0 px-0"},[n("span",[t.Addresses.length>1?n("div",{staticClass:"mb-2 subtitle-2 grey--text"},[t._v("\n                            "+t._s(t.$t("page.event.title.addresses"))+" :\n                        ")]):n("div",{staticClass:"mb-2 subtitle-2 grey--text"},[t._v("\n                            "+t._s(t.$t("page.event.title.address"))+" :\n                        ")]),t._v(" "),n("v-spacer"),t._v(" "),t._l(t.Addresses,(function(e,a){return n("span",{key:a},[n("span",[n("v-icon",{staticClass:"mr-1 primary--text",staticStyle:{"margin-bottom":"0.08rem"},attrs:{small:"",title:t.$t("page.venues.title.company")}},[t._v("mdi-map-marker")]),t._v(" "),n("span",[t._v(t._s(e.street1)+",\n                                    "+t._s(e.zip)+"\n                                    "+t._s(e.city)+",\n                                    "+t._s(e.canton)+",\n                                    "+t._s(e.country))])],1)])})),n("v-spacer")],2)]):t._e()])],1):t._e(),t._v(" "),null!==t.Prices&&t.Prices.length>0?n("v-expansion-panel",{staticClass:"caption primary--text"},[n("v-expansion-panel-header",{scopedSlots:t._u([{key:"actions",fn:function(){return[n("v-icon",{attrs:{color:"primary"}},[t._v(" $expand ")])]},proxy:!0}],null,!1,431335688)},[t._v(t._s(t.$t("page.event.title.prices"))+"\n                ")]),t._v(" "),n("v-expansion-panel-content",[n("span",{staticClass:"subtitle-2"},[n("span",{staticClass:"caption",class:t.$vuetify.theme.dark?"grey--text":"primary--text"},t._l(t.Prices,(function(e,a){return n("span",{key:a},[n("v-icon",{staticClass:"mr-1",class:t.$vuetify.theme.dark?"grey--text":"primary--text",staticStyle:{"margin-bottom":"0.08rem"},attrs:{small:""}},[t._v("mdi-cash-usd-outline")]),t._v("\n                            "+t._s(e.cost)+" chf ("+t._s(e.type)+")"),n("v-spacer")],1)})),0),t._v(" "),n("v-spacer")],1)])],1):t._e(),t._v(" "),null!==t.Emails&&t.Emails.length>0?n("v-expansion-panel",{staticClass:"caption primary--text"},[n("v-expansion-panel-header",{scopedSlots:t._u([{key:"actions",fn:function(){return[n("v-icon",{attrs:{color:"primary"}},[t._v(" $expand ")])]},proxy:!0}],null,!1,431335688)},[t._v(t._s(t.$t("page.event.title.emails")))]),t._v(" "),n("v-expansion-panel-content",[n("span",t._l(t.Emails,(function(e,a){return n("span",{key:a},[n("v-icon",{class:t.$vuetify.theme.dark?"info--text":"secondary--text",attrs:{small:""}},[t._v("mdi-email-outline")]),t._v(" "),n("v-btn",{staticClass:"no-uppercase",class:t.$vuetify.theme.dark?"info--text":"secondary--text",attrs:{text:"",tile:"",small:"",href:t.mailTo(e),title:t.$t("page.event.title.email"),target:"_blank"}},[t._v("\n                            "+t._s(e.address)+"\n                        ")]),t._v(" "),n("span",{class:t.$vuetify.theme.dark?"grey--text":"primary--text"},[t._v("\n                            ("+t._s(e.type)+")\n                        ")]),t._v(" "),n("v-spacer")],1)})),0)])],1):t._e(),t._v(" "),null!==t.Phones&&t.Phones.length>0?n("v-expansion-panel",{staticClass:"caption primary--text"},[n("v-expansion-panel-header",{scopedSlots:t._u([{key:"actions",fn:function(){return[n("v-icon",{attrs:{color:"primary"}},[t._v(" $expand ")])]},proxy:!0}],null,!1,431335688)},[t._v(t._s(t.$t("page.event.title.phones")))]),t._v(" "),n("v-expansion-panel-content",[n("span",t._l(t.Phones,(function(e,a){return n("span",{key:a},[n("v-icon",{class:t.$vuetify.theme.dark?"info--text":"secondary--text",attrs:{small:""}},[t._v("mdi-phone-outline")]),t._v(" "),n("span",{staticClass:"ml-3",class:t.$vuetify.theme.dark?"grey--text":"primary--text"},[t._v("\n                            "+t._s(e.number)+"\n                        ")]),t._v(" "),n("span",{class:t.$vuetify.theme.dark?"grey--text":"primary--text"},[t._v("\n                            ("+t._s(e.type)+")\n                        ")]),t._v(" "),n("v-spacer")],1)})),0)])],1):t._e(),t._v(" "),null!==t.Websites&&t.Websites.length>0?n("v-expansion-panel",{staticClass:"caption primary--text"},[n("v-expansion-panel-header",{scopedSlots:t._u([{key:"actions",fn:function(){return[n("v-icon",{attrs:{color:"primary"}},[t._v(" $expand ")])]},proxy:!0}],null,!1,431335688)},[t._v(t._s(t.$t("page.event.title.websites")))]),t._v(" "),n("v-expansion-panel-content",[n("span",t._l(t.Websites,(function(e,a){return n("span",{key:a},["website"===e.type?n("span",{class:t.$vuetify.theme.dark?"grey--text":"primary--text"},[n("v-icon",{class:t.$vuetify.theme.dark?"info--text":"secondary--text",attrs:{small:""}},[t._v("mdi-web")])],1):n("span",{class:t.$vuetify.theme.dark?"grey--text":"primary--text"},["tiktok"===e.social_network.type?n("v-icon",{class:t.$vuetify.theme.dark?"info--text":"secondary--text",attrs:{small:""}},[t._v("mdi-web ")]):n("v-icon",{class:t.$vuetify.theme.dark?"info--text":"secondary--text",attrs:{small:""}},[t._v("mdi-"+t._s(e.social_network.type)+"\n                            ")])],1),t._v(" "),n("v-btn",{staticClass:"no-uppercase",class:t.$vuetify.theme.dark?"info--text":"secondary--text",attrs:{text:"",tile:"",small:"",href:e.url,title:e.name,target:"_blank"}},[t._v("\n                            "+t._s(e.url)+"\n                        ")]),t._v(" "),n("v-spacer")],1)})),0)])],1):t._e()],1)],1)}),[],!1,null,null,null).exports}}]);