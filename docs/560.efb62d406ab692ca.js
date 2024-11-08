"use strict";(self.webpackChunkGreenFinity=self.webpackChunkGreenFinity||[]).push([[560],{6560:(M,u,a)=>{a.r(u),a.d(u,{RegisterComponent:()=>Q});var d=a(6814),i=a(95),e=a(4769),c=a(9410),f=a(1120);function Z(r,s){1&r&&(e.TgZ(0,"p",21),e._uU(1,"Name is required"),e.qZA())}function T(r,s){1&r&&(e.TgZ(0,"p",21),e._uU(1,"Name min length 3"),e.qZA())}function h(r,s){1&r&&(e.TgZ(0,"p",21),e._uU(1,"Name max length 20"),e.qZA())}function v(r,s){if(1&r&&(e.TgZ(0,"div",19),e.YNc(1,Z,2,0,"p",20),e.YNc(2,T,2,0,"p",20),e.YNc(3,h,2,0,"p",20),e.qZA()),2&r){const o=e.oxw();let n,t,l;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("name"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("name"))?null:t.getError("minLength")),e.xp6(1),e.Q6J("ngIf",null==(l=o.registerForm.get("name"))?null:l.getError("maxLength"))}}function x(r,s){1&r&&(e.TgZ(0,"p",21),e._uU(1,"Email is required"),e.qZA())}function q(r,s){1&r&&(e.TgZ(0,"p",21),e._uU(1,"Email format is InValid"),e.qZA())}function w(r,s){if(1&r&&(e.TgZ(0,"div",19),e.YNc(1,x,2,0,"p",20),e.YNc(2,q,2,0,"p",20),e.qZA()),2&r){const o=e.oxw();let n,t;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("email"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("email"))?null:t.getError("email"))}}function A(r,s){1&r&&(e.TgZ(0,"p",21),e._uU(1,"Password is required"),e.qZA())}function I(r,s){1&r&&(e.TgZ(0,"p",21),e._uU(1,"Password must be at least 6 chars"),e.qZA())}function C(r,s){if(1&r&&(e.TgZ(0,"div",19),e.YNc(1,A,2,0,"p",20),e.YNc(2,I,2,0,"p",20),e.qZA()),2&r){const o=e.oxw();let n,t;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("password"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("password"))?null:t.getError("pattern"))}}function F(r,s){1&r&&(e.TgZ(0,"p",21),e._uU(1,"rePassword is required"),e.qZA())}function N(r,s){1&r&&(e.TgZ(0,"p",21),e._uU(1,"Password confirmation is incorrect"),e.qZA())}function E(r,s){if(1&r&&(e.TgZ(0,"div",19),e.YNc(1,F,2,0,"p",20),e.YNc(2,N,2,0,"p",20),e.qZA()),2&r){const o=e.oxw();let n,t;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("rePassword"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("rePassword"))?null:t.getError("misMatch"))}}function U(r,s){1&r&&(e.TgZ(0,"p",21),e._uU(1,"Phone is required"),e.qZA())}function P(r,s){1&r&&(e.TgZ(0,"p",21),e._uU(1,"Accept only Egyptian phones"),e.qZA())}function R(r,s){if(1&r&&(e.TgZ(0,"div",19),e.YNc(1,U,2,0,"p",20),e.YNc(2,P,2,0,"p",20),e.qZA()),2&r){const o=e.oxw();let n,t;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("phone"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("phone"))?null:t.getError("pattern"))}}function J(r,s){1&r&&(e.TgZ(0,"span"),e._UZ(1,"i",22),e.qZA())}function Y(r,s){if(1&r&&(e.TgZ(0,"p",23),e._uU(1),e.qZA()),2&r){const o=e.oxw();e.xp6(1),e.Oqu(o.errMsg)}}let Q=(()=>{class r{constructor(o,n,t){this._AuthService=o,this._Router=n,this._FormBuilder=t,this.errMsg="",this.isLoading=!1,this.registerForm=new i.cw({name:new i.NI("",[i.kI.required]),email:new i.NI("",[i.kI.required,i.kI.email]),password:new i.NI("",[i.kI.required,i.kI.pattern(/^[a-zA-Z0-9_@]{6,}$/)]),rePassword:new i.NI(""),phone:new i.NI("",[i.kI.required,i.kI.pattern(/^01[0125][0-9]{8}$/)])},{validators:[this.confirmPassword]})}confirmPassword(o){const n=o.get("password"),t=o.get("rePassword");""==t?.value?t?.setErrors({required:!0}):n?.value!=t?.value&&t?.setErrors({misMatch:!0})}handleForm(){const o=this.registerForm.value;this.isLoading=!0,!0===this.registerForm.valid&&this._AuthService.register(o).subscribe({next:n=>{console.log("respone",n),null!==n&&(this._Router.navigate(["/login"]),this.isLoading=!1)},error:n=>{console.log("erorrrr",n),this.errMsg=n.error.message,this.isLoading=!1}})}static#e=this.\u0275fac=function(n){return new(n||r)(e.Y36(c.e),e.Y36(f.F0),e.Y36(i.qu))};static#r=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-register"]],standalone:!0,features:[e.jDz],decls:33,vars:9,consts:[[1,"w-50","mx-auto","my-5","shadow","rounded","p-4"],[1,"my-4"],[3,"formGroup","ngSubmit"],[1,"form-item"],["for","name"],["formControlName","name","type","text","id","name",1,"form-control"],["class","mt-1 alert alert-danger p-1 small",4,"ngIf"],[1,"form-item","mt-4"],["for","email"],["formControlName","email","type","email","id","email",1,"form-control"],["for","password"],["formControlName","password","type","password","id","password",1,"form-control"],["for","rePassword"],["formControlName","rePassword","type","password","id","rePassword",1,"form-control"],["for","phone"],["formControlName","phone","type","tel","id","phone",1,"form-control"],[1,"form-control","main-btn","my-4",3,"disabled"],[4,"ngIf"],["class","alert alert-danger text-center mb-0 p-1",4,"ngIf"],[1,"mt-1","alert","alert-danger","p-1","small"],["class","mb-0",4,"ngIf"],[1,"mb-0"],[1,"fas","fa-spin","fa-spinner"],[1,"alert","alert-danger","text-center","mb-0","p-1"]],template:function(n,t){if(1&n&&(e.TgZ(0,"section",0)(1,"h3",1),e._uU(2,"Create Account"),e.qZA(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return t.handleForm()}),e.TgZ(4,"div",3)(5,"label",4),e._uU(6,"Name:"),e.qZA(),e._UZ(7,"input",5),e.YNc(8,v,4,3,"div",6),e.qZA(),e.TgZ(9,"div",7)(10,"label",8),e._uU(11,"Email:"),e.qZA(),e._UZ(12,"input",9),e.YNc(13,w,3,2,"div",6),e.qZA(),e.TgZ(14,"div",7)(15,"label",10),e._uU(16,"Password:"),e.qZA(),e._UZ(17,"input",11),e.YNc(18,C,3,2,"div",6),e.qZA(),e.TgZ(19,"div",7)(20,"label",12),e._uU(21,"rePassword:"),e.qZA(),e._UZ(22,"input",13),e.YNc(23,E,3,2,"div",6),e.qZA(),e.TgZ(24,"div",7)(25,"label",14),e._uU(26,"Phone:"),e.qZA(),e._UZ(27,"input",15),e.YNc(28,R,3,2,"div",6),e.qZA(),e.TgZ(29,"button",16),e._uU(30," create "),e.YNc(31,J,2,0,"span",17),e.qZA()(),e.YNc(32,Y,2,1,"p",18),e.qZA()),2&n){let l,m,_,p,g;e.xp6(3),e.Q6J("formGroup",t.registerForm),e.xp6(5),e.Q6J("ngIf",(null==(l=t.registerForm.get("name"))?null:l.errors)&&(null==(l=t.registerForm.get("name"))?null:l.touched)),e.xp6(5),e.Q6J("ngIf",(null==(m=t.registerForm.get("email"))?null:m.errors)&&(null==(m=t.registerForm.get("email"))?null:m.touched)),e.xp6(5),e.Q6J("ngIf",(null==(_=t.registerForm.get("password"))?null:_.errors)&&(null==(_=t.registerForm.get("password"))?null:_.touched)),e.xp6(5),e.Q6J("ngIf",(null==(p=t.registerForm.get("rePassword"))?null:p.errors)&&(null==(p=t.registerForm.get("rePassword"))?null:p.touched)),e.xp6(5),e.Q6J("ngIf",(null==(g=t.registerForm.get("phone"))?null:g.errors)&&(null==(g=t.registerForm.get("phone"))?null:g.touched)),e.xp6(1),e.Q6J("disabled",t.registerForm.invalid),e.xp6(2),e.Q6J("ngIf",t.isLoading),e.xp6(1),e.Q6J("ngIf",t.errMsg)}},dependencies:[d.ez,d.O5,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u]})}return r})()}}]);