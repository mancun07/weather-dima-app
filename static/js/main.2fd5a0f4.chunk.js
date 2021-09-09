(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){e.exports={"search-form":"UserSearch_search-form__cnoHE","form-group":"UserSearch_form-group__2acxc"}},,function(e,t,n){e.exports={weather:"Weather_weather__lNTer",weatherImage:"Weather_weatherImage__1apRc",icon:"Weather_icon__1TUpD",weatherDesc:"Weather_weatherDesc__FV1IS"}},function(e,t,n){e.exports={"weather-details":"WeatherDetails_weather-details__2iFPd","weather-details__item":"WeatherDetails_weather-details__item__3nSOi"}},function(e,t,n){e.exports={"daily-weather":"DailyWeather_daily-weather__LbYxV","daily-weather__item":"DailyWeather_daily-weather__item__3xGHV"}},function(e,t,n){e.exports={main:"Layout_main__2FxSM"}},function(e,t,n){e.exports={notification:"Notification_notification__1CffZ"}},function(e,t,n){e.exports={"lds-roller":"Loading_lds-roller__2iK5u"}},,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),i=n.n(c),o=(n(25),n(18)),s=n.n(o),u=n(1),l=function(e){return Object(u.jsx)(a.Fragment,{children:Object(u.jsx)("main",{className:s.a.main,children:e.children})})},d=n(13),h=n.n(d),j=n(6),p=Object(j.b)({name:"ui",initialState:{notification:null,loading:!1},reducers:{showNotification:function(e,t){e.notification={message:t.payload.message}},clearNotification:function(e,t){e.notification=null},setLoading:function(e,t){e.loading=t.payload}}}),f=p.actions,b=p,x=n(2),m=n(5),O=n.n(m),w=n(8),g=Object(j.b)({name:"city",initialState:{weather:null,hourlyWeather:null,dailyWeather:null},reducers:{addWeather:function(e,t){e.weather=t.payload},addHourlyWeather:function(e,t){e.hourlyWeather=t.payload},addDailyWeather:function(e,t){e.dailyWeather=t.payload}}}),y=g.actions,_=g,v="28b0799543359e8e6ed8330d199b4ccc",W=function(e){return function(){var t=Object(w.a)(O.a.mark((function t(n){var a,r,c,i;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=function(){var t=Object(w.a)(O.a.mark((function t(){var a,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat(v,"&lang=ru"));case 2:if((a=t.sent).ok){t.next=5;break}throw new Error({message:"There is a server error"});case 5:return t.next=7,a.json();case 7:return r=t.sent,n(y.addWeather(r)),t.abrupt("return",r);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),r=function(){var e=Object(w.a)(O.a.mark((function e(t){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t.coord.lat,"&lon=").concat(t.coord.lon,"&exclude=daily&lang=ru&appid=").concat(v));case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,console.log(r),n(y.addHourlyWeather(r)),e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=Object(w.a)(O.a.mark((function e(t){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t.coord.lat,"&lon=").concat(t.coord.lon,"&exclude=hourly&appid=").concat(v));case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,n(y.addDailyWeather(r)),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.prev=3,n(f.setLoading(!0)),t.next=7,a();case 7:return i=t.sent,t.next=10,r(i);case 10:return t.sent,t.next=13,c(i);case 13:t.sent,t.next=19;break;case 16:t.prev=16,t.t0=t.catch(3),n(f.showNotification({message:"\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0433\u043e\u0440\u043e\u0434\u0430"}));case 19:n(f.setLoading(!1));case 20:case"end":return t.stop()}}),t,null,[[3,16]])})));return function(e){return t.apply(this,arguments)}}()},N=function(e){var t=Object(x.b)(),n=Object(a.useRef)();return Object(u.jsxs)("form",{className:h.a["search-form"],onSubmit:function(e){e.preventDefault();var a=n.current.value.trim();""===a?t(f.showNotification({message:"\u0413\u043e\u0440\u043e\u0434 \u043d\u0435 \u0432\u0432\u0435\u0434\u0435\u043d. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430."})):(t(W(a)),n.current.value="")},children:[Object(u.jsxs)("div",{className:h.a["form-group"],children:[Object(u.jsx)("label",{htmlFor:"city",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{ref:n,type:"text",id:"city"})]}),Object(u.jsx)("button",{children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043e \u043f\u043e\u0433\u043e\u0434\u0435"})]})},D=n(35),F=n(15),k=n.n(F),S=function(){var e=Object(x.c)((function(e){return e.city.weather}));console.log(e);var t=e.dt,n=new Date(1e3*t),a=n.getDate()+"/"+n.getMonth()+"/"+n.getFullYear(),r=("http://openweathermap.org/img/w/".concat(e.weather[0].icon,".png"),(e.main.temp-273.15).toFixed(0));return Object(u.jsx)(D.a.div,{initial:{x:"-100vw",scale:0},animate:{x:0,scale:1},transition:{duration:1},className:k.a.weather,children:Object(u.jsxs)("div",{className:k.a.weatherDesc,children:[Object(u.jsxs)("h2",{children:[e.name," "]}),Object(u.jsx)("span",{children:a}),Object(u.jsx)("h3",{children:e.weather[0].description}),Object(u.jsxs)("h1",{children:[r," \xb0C"]})]})})},L=n(7),C=n(16),T=n.n(C),E=function(){var e=Object(x.c)((function(e){return e.city.hourlyWeather})).hourly.map((function(e){var t=e.dt,n=new Date(1e3*t),a=n.getHours()+":"+n.getMinutes()+"0",r=(e.temp-273.15).toFixed(0);return Object(L.a)(Object(L.a)({},e),{},{dt:a,temp:r})}));return Object(u.jsx)(D.a.ul,{className:T.a["weather-details"],initial:{x:"100vw",scale:0},animate:{x:0,scale:1},transition:{duration:1},children:e.map((function(e,t){return Object(u.jsxs)("li",{className:T.a["weather-details__item"],children:[Object(u.jsxs)("div",{children:[e.dt," "]}),Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(e.weather[0].icon,".png"),alt:""})}),Object(u.jsxs)("div",{children:[e.temp," ","\xb0C"]})]},t)}))})},H=n(17),I=n.n(H),M=function(){var e=Object(x.c)((function(e){return e.city.dailyWeather})).daily.map((function(e){return Object(L.a)(Object(L.a)({},e),{},{weekDay:"\u0414\u0435\u043d\u044c \u043d\u0435\u0434\u0435\u043b\u0438",temp:(e.temp.day-273.15).toFixed(0),id:Math.random()})}));return Object(u.jsx)("ul",{className:I.a["daily-weather"],children:e.map((function(e){return Object(u.jsxs)("li",{className:I.a["daily-weather__item"],children:[Object(u.jsx)("span",{children:e.weekDay}),Object(u.jsx)("span",{children:Object(u.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(e.weather[0].icon,".png"),alt:""})}),Object(u.jsxs)("span",{children:[e.temp," ","\xb0C"]})]},e.id)}))})},P=n(19),U=n.n(P),V=function(e){return Object(u.jsx)(D.a.div,{initial:{y:"-100vh"},animate:{y:0},className:U.a.notification,children:Object(u.jsx)("div",{className:"message",children:e.message})})},B=n(20),J=n.n(B),R=function(){return Object(u.jsxs)("div",{class:J.a["lds-roller"],children:[Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{})]})};var Y=function(){var e=Object(x.b)(),t=Object(x.c)((function(e){return e.city.weather})),n=Object(x.c)((function(e){return e.city.hourlyWeather})),r=Object(x.c)((function(e){return e.city.dailyWeather})),c=Object(x.c)((function(e){return e.ui.notification})),i=Object(x.c)((function(e){return e.ui.loading}));return Object(a.useEffect)((function(){e(W("\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433"))}),[e]),Object(a.useEffect)((function(){var t=setTimeout((function(){e(f.clearNotification())}),3e3);return function(){return clearTimeout(t)}}),[e,c]),Object(u.jsxs)(l,{children:[i&&Object(u.jsx)(R,{}),!i&&c&&Object(u.jsx)(V,{message:c.message}),!i&&t&&Object(u.jsx)(S,{}),!i&&n&&Object(u.jsx)(E,{}),Object(u.jsx)(N,{}),!i&&r&&Object(u.jsx)(M,{})]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},G=Object(j.a)({reducer:{ui:b.reducer,city:_.reducer}});i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(x.a,{store:G,children:Object(u.jsx)(Y,{})})}),document.getElementById("root")),q()}],[[32,1,2]]]);
//# sourceMappingURL=main.2fd5a0f4.chunk.js.map