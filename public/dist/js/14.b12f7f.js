(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{36:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(3),s=r.n(o),i=r(4);function m(e,t,r,a,n,o,s){try{var i=e[o](s),m=i.value}catch(e){return void r(e)}i.done?t(m):Promise.resolve(m).then(a,n)}var u={scrollToTop:!1,metaInfo:function(){return{title:this.$t("settings")}},data:function(){return{form:new s.a({username:"",name:"",phone_number:"",email:""}),isUpdating:!1}},computed:Object(i.b)({user:"auth/user"}),created:function(){var e=this;this.form.keys().forEach((function(t){e.form[t]=e.user[t]}))},methods:{update:function(){var e,t=this;return(e=n.a.mark((function e(){var r,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.form.patch("/api/settings/profile");case 2:r=e.sent,a=r.data,t.$store.dispatch("auth/updateUser",{user:a}),t.isUpdating=!1;case 6:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function s(e){m(o,a,n,s,i,"next",e)}function i(e){m(o,a,n,s,i,"throw",e)}s(void 0)}))})()},cancelUpdate:function(){var e=this;this.form.keys().forEach((function(t){e.form[t]=e.user[t]})),this.isUpdating=!1}}},l=r(1),c=Object(l.a)(u,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("card",{staticClass:"py-3"},[r("h4",{staticClass:"mb-0"},[e._v("User Profile")]),e._v(" "),r("p",{staticClass:"mb-0"},[e._v("Change your personal information here.")]),e._v(" "),r("hr"),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.update(t)},keydown:function(t){return e.form.onKeydown(t)}}},[r("alert-success",{attrs:{form:e.form,message:e.$t("info_updated")}}),e._v(" "),r("div",{staticClass:"form-group col-md-7 mx-auto"},[r("label",[e._v(e._s(e.$t("username")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.username,expression:"form.username"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("username")},attrs:{type:"text",name:"username",readonly:!e.isUpdating},domProps:{value:e.form.username},on:{input:function(t){t.target.composing||e.$set(e.form,"username",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.form,field:"username"}})],1),e._v(" "),r("div",{staticClass:"form-group col-md-7 mx-auto"},[r("label",[e._v(e._s(e.$t("name")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("name")},attrs:{type:"text",name:"name",readonly:!e.isUpdating},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.form,field:"name"}})],1),e._v(" "),r("div",{staticClass:"form-group col-md-7 mx-auto"},[r("label",[e._v(e._s(e.$t("phone_number")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phone_number,expression:"form.phone_number"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("phone_number")},attrs:{type:"text",name:"phone_number",readonly:!e.isUpdating},domProps:{value:e.form.phone_number},on:{input:function(t){t.target.composing||e.$set(e.form,"phone_number",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.form,field:"phone_number"}})],1),e._v(" "),r("div",{staticClass:"form-group col-md-7 mx-auto"},[r("label",[e._v(e._s(e.$t("email")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("email")},attrs:{type:"text",name:"email",readonly:!e.isUpdating},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.form,field:"email"}})],1),e._v(" "),r("div",{staticClass:"form-group row col-md-7 mx-auto mt-3"},[e.isUpdating?r("div",{staticClass:"col-md-6 px-0 pr-lg-1"},[r("button",{staticClass:"btn btn-secondary w-100",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.cancelUpdate()}}},[e._v("\n        Cancel\n        ")])]):e._e(),e._v(" "),r("div",{staticClass:"col-md-6 px-0 pl-lg-1 ml-md-auto"},[e.isUpdating?r("v-button",{staticClass:"btn btn-primary w-100"},[e._v("\n          Confirm\n        ")]):r("button",{staticClass:"btn btn-primary w-100",on:{click:function(t){t.preventDefault(),e.isUpdating=!0}}},[e._v("\n          "+e._s(e.$t("update"))+"\n        ")])],1)])],1)])}),[],!1,null,null,null);t.default=c.exports}}]);