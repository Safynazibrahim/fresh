"use strict";(self.webpackChunkGreenFinity=self.webpackChunkGreenFinity||[]).push([[848],{848:(d,a,r)=>{r.r(a),r.d(a,{AllordersComponent:()=>i});var c=r(6814),l=r(1120),t=r(4769),o=r(6286);let i=(()=>{class s{constructor(e){this._CartService=e,this.ordersDetails={},this.cartDetails=null}ngOnInit(){this._CartService.getAllOrders().subscribe({next:e=>{console.log("allorders",e.data),this.ordersDetails=e.data}})}clearCart(){this._CartService.clearCart().subscribe({next:e=>{"success"===e.message&&(this.cartDetails=null,this._CartService.cartNumber.next(0))}})}static#t=this.\u0275fac=function(n){return new(n||s)(t.Y36(o.N))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-allorders"]],standalone:!0,features:[t.jDz],decls:7,vars:0,consts:[[1,""],[1,"text-center","my-5","w-75","mx-auto","rounded","shadow","p-5","bg-white"],[1,"text-main"],["routerLink","/home",1,"main-btn","d-block","mx-auto","mt-5",3,"click"]],template:function(n,u){1&n&&(t.TgZ(0,"section",0)(1,"section",1)(2,"div")(3,"h3",2),t._uU(4,"Your Order has Shipped successfully..."),t.qZA(),t.TgZ(5,"button",3),t.NdJ("click",function(){return u.clearCart()}),t._uU(6,"Go To Back"),t.qZA()()()())},dependencies:[c.ez,l.rH]})}return s})()}}]);