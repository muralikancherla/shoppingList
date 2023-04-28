"use strict";(self.webpackChunkshopping_list_app=self.webpackChunkshopping_list_app||[]).push([[30],{1030:(_,m,s)=>{s.r(m),s.d(m,{ShoppingModule:()=>r});var t=s(5062),u=s(9915),h=s(9102),a=s(6895),f=s(9985),p=s(4006);const v=["f"];function S(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){t.CHM(e);const g=t.oxw();return t.KtG(g.onDelete())}),t._uU(1," Delete "),t.qZA()}}class d{constructor(n){this.shoppingService=n,this.editMode=!1}ngOnInit(){this.shoppingService.startedEditing.subscribe(e=>{this.editedItemIndex=e,this.editMode=!0,this.editedItem=this.shoppingService.getIngredient(e),this.slForm.setValue({name:this.editedItem.name,amount:this.editedItem.amount})})}onSubmit(n){const e=n.value,o=new f.o(e.name,e.amount);this.editMode?this.shoppingService.updateIngredient(this.editedItemIndex,o):this.shoppingService.addIngredient(o),this.editMode=!1,n.reset()}onClear(){this.slForm.reset(),this.editMode=!1}onDelete(){this.shoppingService.deleteIngredient(this.editedItemIndex),this.onClear()}ngOnDestroy(){this.subscription.unsubscribe()}}function b(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"a",4),t.NdJ("click",function(){const l=t.CHM(e).index,Z=t.oxw();return t.KtG(Z.onEditItem(l))}),t._uU(1),t.qZA()}if(2&i){const e=n.$implicit;t.xp6(1),t.AsE(" ",e.name," (",e.amount,") ")}}d.\u0275fac=function(n){return new(n||d)(t.Y36(u.s))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-shopping-edit"]],viewQuery:function(n,e){if(1&n&&t.Gf(v,5),2&n){let o;t.iGM(o=t.CRH())&&(e.slForm=o.first)}},decls:20,vars:3,consts:[[1,"row"],[1,"col-xs-12"],[3,"ngSubmit"],["f","ngForm"],[1,"col-sm-5","form-group"],["for","name"],["type","text","id","name","name","name","ngModel","","required","",1,"form-control"],[1,"col-sm-2","form-group"],["for","amount"],["type","number","id","amount","name","amount","ngModel","","required","","pattern","^[1-9]+[0-9]*$",1,"form-control"],["type","submit",1,"btn","btn-success",3,"disabled"],["class","btn btn-danger","type","button",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"form",2,3),t.NdJ("ngSubmit",function(){t.CHM(o);const l=t.MAs(3);return t.KtG(e.onSubmit(l))}),t.TgZ(4,"div",0)(5,"div",4)(6,"label",5),t._uU(7,"Name"),t.qZA(),t._UZ(8,"input",6),t.qZA(),t.TgZ(9,"div",7)(10,"label",8),t._uU(11,"Amount"),t.qZA(),t._UZ(12,"input",9),t.qZA()(),t.TgZ(13,"div",0)(14,"div",1)(15,"button",10),t._uU(16),t.qZA(),t.YNc(17,S,2,0,"button",11),t.TgZ(18,"button",12),t.NdJ("click",function(){return e.onClear()}),t._uU(19," Clear "),t.qZA()()()()()()}if(2&n){const o=t.MAs(3);t.xp6(15),t.Q6J("disabled",!o.valid),t.xp6(1),t.hij(" ",e.editMode?"Update":"Add"," "),t.xp6(1),t.Q6J("ngIf",e.editMode)}},dependencies:[p._Y,p.Fj,p.wV,p.JJ,p.JL,p.Q7,p.c5,p.On,p.F,a.O5]});class c{constructor(n,e){this.shoppingService=n,this.loggingService=e}ngOnInit(){this.ingredients=this.shoppingService.getIngredients(),this.igChangeSub=this.shoppingService.ingredientsChanged.subscribe(n=>{this.ingredients=n}),this.loggingService.printLog("Hello from ShoppingComponent ngOnInIt")}onEditItem(n){this.shoppingService.startedEditing.next(n)}ngOnDestroy(){this.igChangeSub.unsubscribe()}}c.\u0275fac=function(n){return new(n||c)(t.Y36(u.s),t.Y36(h.e))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-shopping"]],decls:6,vars:1,consts:[[1,"row"],[1,"col-xs-10"],[1,"list-group"],["class","list-group-item",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",3,"click"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-shopping-edit")(3,"hr"),t.TgZ(4,"ul",2),t.YNc(5,b,2,2,"a",3),t.qZA()()()),2&n&&(t.xp6(5),t.Q6J("ngForOf",e.ingredients))},dependencies:[a.sg,d]});var C=s(2121),I=s(4466);class r{}r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[p.u5,C.Bz.forChild([{path:"",component:c}]),I.m]})}}]);