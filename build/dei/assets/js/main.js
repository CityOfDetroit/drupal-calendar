!function(){try{var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},a=(new Error).stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="b00c3140-f810-4f2a-b952-d9b289ea1bf8",t._sentryDebugIdIdentifier="sentry-dbid-b00c3140-f810-4f2a-b952-d9b289ea1bf8")}catch(t){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"8d96994f52588e9a5c7950afacaa38521f01975a"},(self.webpackChunkdrupal_calendar=self.webpackChunkdrupal_calendar||[]).push([[792],{238:(t,a,e)=>{var d=e(363),i=e(950),n=e(666),s=e(41);let r;try{r=drupalSettings.detroitmi.dei.eventItems}catch(h){r=null}const l=new class{constructor(t,a,e){this.container=document.getElementById(t),this.data=a,this.mode=e,this.calendar=null,this.calendarObj={plugins:[i.A,s.A,n.A],defaultView:"dayGridMonth",events:[],header:{left:"prev,next",center:"title",right:"dayGridMonth timeGridWeek list"},views:{weekGrid:{type:"timeGridWeek",duration:{days:7},buttonText:"Week"}}}}init(){this.calendar=new d.Vv(this.container,this.calendarObj),this.data?("dei"!==this.mode&&this.buildFilters(),this.buildEvents()):this.calendar.render()}buildFilters(){let t=[],a=[],e=[],d="",i="",n="";for(const s in this.data)a.push(this.data[s].name),!t.includes(this.data[s].departmentName)&&t.push(this.data[s].departmentName),!e.includes(this.data[s].type)&&e.push(this.data[s].type);t.map((t=>{i+='<option value="'.concat(t,'"></option>')})),a.map((t=>{d+='<option value="'.concat(t,'"></option>')})),e.map((t=>{n+='<option value="'.concat(t,'"></option>')})),document.getElementById("name-list").innerHTML=d,document.getElementById("department-list").innerHTML=i,document.getElementById("type-list").innerHTML=n}buildSingeEvent(t){const a=window.location.origin;let e,d=[];for(const i in t)e="dei"===this.mode?{id:t[i].id,title:t[i].name,start:t[i].start,backgroundColor:this.getColor(t[i]),url:"".concat(a,"/node/").concat(t[i].id),className:t[i].type}:{id:t[i].id,title:t[i].name,start:t[i].start,url:"".concat(a,"/node/").concat(t[i].id),className:t[i].type},d.push(e);return d}getColor(t){switch(t.locationID){case"10491":return"#eb4034";case"10486":return"#ebc934";case"10496":return"#34eb65";case"10501":return"#3443eb"}}buildEvents(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.calendarObj.events=t?this.buildSingeEvent(t):this.buildSingeEvent(this.data),this.calendar.destroy(),this.calendar=new d.Vv(this.container,this.calendarObj),this.calendar.render()}reset(t){setTimeout((()=>{this.filterCalendar()}),100)}submit(t){t.preventDefault(),this.filterCalendar(t)}filterCalendar(t){let a;if("dei"===(t?t.target.getAttribute("data-mode"):""))a=this.buildDEI(t);else a=this.buildIntranet();this.buildEvents(a)}buildDEI(t){console.log(t.target.getAttribute("data-value"));let a={};for(const e in this.data)this.data[e].locationID==t.target.getAttribute("data-value")&&(a[this.data[e].id]=this.data[e]);return console.log(a),a}buildIntranet(){let t={},a=document.getElementById("name").value,e=document.getElementById("start").value,d=document.getElementById("department").value,i=document.getElementById("type").value;for(const n in this.data)""!=a?""!=e?""!=d?""!=i?this.data[n].name==a&&this.data[n].start==e&&this.data[n].departmentName==d&&this.data[n].type==i&&(t[this.data[n].id]=this.data[n]):this.data[n].name==a&&this.data[n].start==e&&this.data[n].departmentName==d&&(t[this.data[n].id]=this.data[n]):""!=i?this.data[n].name==a&&this.data[n].start==e&&this.data[n].type==i&&(t[this.data[n].id]=this.data[n]):this.data[n].name==a&&this.data[n].start==e&&(t[this.data[n].id]=this.data[n]):""!=d?""!=i?this.data[n].name==a&&this.data[n].departmentName==d&&this.data[n].type==i&&(t[this.data[n].id]=this.data[n]):this.data[n].name==a&&this.data[n].departmentName==d&&(t[this.data[n].id]=this.data[n]):""!=i?this.data[n].name==a&&this.data[n].type==i&&(t[this.data[n].id]=this.data[n]):this.data[n].name==a&&(t[this.data[n].id]=this.data[n]):""!=e?""!=d?""!=i?this.data[n].start==e&&this.data[n].departmentName==d&&this.data[n].type==i&&(t[this.data[n].id]=this.data[n]):this.data[n].start==e&&this.data[n].departmentName==d&&(t[this.data[n].id]=this.data[n]):""!=i?this.data[n].start==e&&this.data[n].type==i&&(t[this.data[n].id]=this.data[n]):this.data[n].start==e&&(t[this.data[n].id]=this.data[n]):""!=d?""!=i?this.data[n].departmentName==d&&this.data[n].type==i&&(t[this.data[n].id]=this.data[n]):this.data[n].departmentName==d&&(t[this.data[n].id]=this.data[n]):""!=i?this.data[n].type==i&&(t[this.data[n].id]=this.data[n]):t=this.data;return t}}("calendar",r,"dei");document.addEventListener("DOMContentLoaded",(function(){l.init()})),document.querySelectorAll(".dei-filters").forEach((t=>{t.addEventListener("click",(t=>{l.submit(t)}))})),document.getElementById("calendar-filters").addEventListener("submit",(t=>{l.submit(t)})),document.getElementById("calendar-filters").addEventListener("reset",(t=>{l.reset(t)}))}},t=>{t.O(0,[499,611],(()=>{return a=238,t(t.s=a);var a}));t.O()}]);
//# sourceMappingURL=main.js.map