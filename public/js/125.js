(self.webpackChunk=self.webpackChunk||[]).push([[125],{5125:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});const i={props:{Id:String,Prices:Array,Step:Number},data:function(){return{}},methods:{nextStep:function(){for(var t=[],e=0;e<this.Prices.length;e++)document.getElementById("price["+e+"]").value&&t.push(JSON.parse(document.getElementById("price["+e+"]").value));console.log("prices: ",t),this.$emit("Step6")}}};const r=(0,n(1900).Z)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-stepper-content",{attrs:{step:t.Step}},[n("v-card",{staticClass:"m-0 mt-4 p-0 primary--text"},[n("v-divider"),t._v(" "),n("div",{staticClass:"pt-8"},t._l(t.Prices,(function(e,i){return n("v-card-text",{key:i,staticClass:" mb-0 py-0"},[n("v-textarea",{staticClass:"my-0 py-0 primary--text",attrs:{height:"160",clearable:"","no-resize":"",outlined:"",rows:"1","row-height":"25",id:"price["+i+"]",label:"Price "+(i+1)},model:{value:JSON.stringify(e,void 0,4),callback:function(e){t.$set(JSON,"stringify(price, undefined, 4)",e)},expression:"JSON.stringify(price, undefined, 4)"}})],1)})),1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",{staticClass:"mx-1 mt-4 p-0"},[n("v-btn",{staticClass:"primary--text",attrs:{outlined:""},on:{click:function(e){return t.$emit("Step4")}}},[t._v("\n                    "+t._s(t.$t("button.back.back"))+" ")]),n("v-spacer"),n("v-btn",{attrs:{color:"info",outlined:""},on:{click:function(e){return t.nextStep()}}},[t._v("\n                    "+t._s(t.$t("button.next"))+"\n                ")])],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);