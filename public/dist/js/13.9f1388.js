(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{35:function(r,o,t){"use strict";t.r(o);var s=t(0),a=t.n(s),n=t(3),e=t.n(n);function i(r,o,t,s,a,n,e){try{var i=r[n](e),m=i.value}catch(r){return void t(r)}i.done?o(m):Promise.resolve(m).then(s,a)}var m={scrollToTop:!1,metaInfo:function(){return{title:this.$t("settings")}},data:function(){return{form:new e.a({password:"",password_confirmation:""})}},methods:{update:function(){var r,o=this;return(r=a.a.mark((function r(){return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.form.patch("/api/settings/password");case 2:o.form.reset();case 3:case"end":return r.stop()}}),r)})),function(){var o=this,t=arguments;return new Promise((function(s,a){var n=r.apply(o,t);function e(r){i(n,s,a,e,m,"next",r)}function m(r){i(n,s,a,e,m,"throw",r)}e(void 0)}))})()}}},c=t(1),d=Object(c.a)(m,(function(){var r=this,o=r.$createElement,t=r._self._c||o;return t("card",[t("h4",{staticClass:"mb-0"},[r._v("User Password")]),r._v(" "),t("p",{staticClass:"mb-0"},[r._v("Change your password here.")]),r._v(" "),t("hr"),r._v(" "),t("form",{on:{submit:function(o){return o.preventDefault(),r.update(o)},keydown:function(o){return r.form.onKeydown(o)}}},[t("alert-success",{attrs:{form:r.form,message:r.$t("password_updated")}}),r._v(" "),t("div",{staticClass:"form-group col-md-7 mx-auto"},[t("label",[r._v(r._s(r.$t("new_password")))]),r._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:r.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":r.form.errors.has("password")},attrs:{type:"text",name:"password"},domProps:{value:r.form.password},on:{input:function(o){o.target.composing||r.$set(r.form,"password",o.target.value)}}}),r._v(" "),t("has-error",{attrs:{form:r.form,field:"password"}})],1),r._v(" "),t("div",{staticClass:"form-group col-md-7 mx-auto"},[t("label",[r._v(r._s(r.$t("confirm_password")))]),r._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:r.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"form-control",class:{"is-invalid":r.form.errors.has("password_confirmation")},attrs:{type:"text",name:"password_confirmation"},domProps:{value:r.form.password_confirmation},on:{input:function(o){o.target.composing||r.$set(r.form,"password_confirmation",o.target.value)}}}),r._v(" "),t("has-error",{attrs:{form:r.form,field:"password_confirmation"}})],1),r._v(" "),t("div",{staticClass:"form-group row col-md-7 mx-auto mt-3"},[t("div",{staticClass:"col-md-6 px-0 pl-lg-1 ml-md-auto"},[t("v-button",{staticClass:"btn btn-primary w-100",attrs:{loading:r.form.busy}},[r._v("\n          Confirm\n        ")])],1)])],1)])}),[],!1,null,null,null);o.default=d.exports}}]);