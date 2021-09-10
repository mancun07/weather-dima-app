(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){e.exports={"search-form":"UserSearch_search-form__cnoHE","form-group":"UserSearch_form-group__2acxc"}},,function(e,t,n){e.exports={weather:"Weather_weather__lNTer",weatherImage:"Weather_weatherImage__1apRc",icon:"Weather_icon__1TUpD",weatherDesc:"Weather_weatherDesc__FV1IS"}},function(e,t,n){e.exports={"weather-details":"WeatherDetails_weather-details__2iFPd","weather-details__item":"WeatherDetails_weather-details__item__3nSOi"}},function(e,t,n){e.exports={"daily-weather":"DailyWeather_daily-weather__LbYxV","daily-weather__item":"DailyWeather_daily-weather__item__3xGHV"}},function(e,t,n){e.exports={main:"Layout_main__2FxSM"}},function(e,t,n){e.exports={notification:"Notification_notification__1CffZ"}},function(e,t,n){e.exports={"lds-roller":"Loading_lds-roller__2iK5u"}},function(e,t,n){e.exports={"today-info":"TodayInfo_today-info__2ooVc"}},,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),i=n.n(c),o=(n(26),n(18)),s=n.n(o),u=n(1),l=function(e){return Object(u.jsx)(a.Fragment,{children:Object(u.jsx)("main",{className:s.a.main,children:e.children})})},d=n(13),h=n.n(d),j=n(6),f=Object(j.b)({name:"ui",initialState:{notification:null,loading:!1},reducers:{showNotification:function(e,t){e.notification={message:t.payload.message}},clearNotification:function(e,t){e.notification=null},setLoading:function(e,t){e.loading=t.payload}}}),p=f.actions,b=f,m=n(2),x=n(5),O=n.n(x),w=n(8),g=Object(j.b)({name:"city",initialState:{weather:null,hourlyWeather:null,dailyWeather:null},reducers:{addWeather:function(e,t){e.weather=t.payload},addHourlyWeather:function(e,t){e.hourlyWeather=t.payload},addDailyWeather:function(e,t){e.dailyWeather=t.payload}}}),v=g.actions,y=g,_="28b0799543359e8e6ed8330d199b4ccc",W=function(e){return function(){var t=Object(w.a)(O.a.mark((function t(n){var a,r,c,i;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=function(){var t=Object(w.a)(O.a.mark((function t(){var a,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat(_,"&lang=ru"));case 2:if(a=t.sent,console.log(a.ok),a.ok){t.next=6;break}throw new Error({message:"There is a server error"});case 6:return t.next=8,a.json();case 8:return r=t.sent,console.log(r),n(v.addWeather(r)),t.abrupt("return",r);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),r=function(){var e=Object(w.a)(O.a.mark((function e(t){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t.coord.lat,"&lon=").concat(t.coord.lon,"&exclude=daily&lang=ru&appid=").concat(_));case 2:if(a=e.sent,console.log(a.ok),a.ok){e.next=6;break}throw new Error({message:"There is a server error"});case 6:return e.next=8,a.json();case 8:return r=e.sent,n(v.addHourlyWeather(r)),e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=Object(w.a)(O.a.mark((function e(t){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t.coord.lat,"&lon=").concat(t.coord.lon,"&exclude=hourly&appid=").concat(_));case 2:if(a=e.sent,console.log(a.ok),a.ok){e.next=6;break}throw new Error({message:"There is a server error"});case 6:return e.next=8,a.json();case 8:return r=e.sent,n(v.addDailyWeather(r)),e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.prev=3,n(p.setLoading(!0)),t.next=7,a();case 7:return i=t.sent,t.next=10,r(i);case 10:return t.sent,t.next=13,c(i);case 13:t.sent,t.next=19;break;case 16:t.prev=16,t.t0=t.catch(3),n(p.showNotification({message:"\u0415\u0440\u0443\u043d\u0434\u0443 \u043d\u0435 \u0432\u0432\u043e\u0434\u0438!"}));case 19:n(p.setLoading(!1));case 20:case"end":return t.stop()}}),t,null,[[3,16]])})));return function(e){return t.apply(this,arguments)}}()},N=function(e){var t=Object(m.b)(),n=Object(a.useRef)();return Object(u.jsxs)("form",{className:h.a["search-form"],onSubmit:function(e){e.preventDefault();var a=n.current.value.trim();""!==a&&isNaN(a)?(window.scrollTo({top:0,behavior:"smooth"}),t(W(a)),n.current.value=""):(window.scrollTo({top:0,behavior:"smooth"}),t(p.showNotification({message:"\u0413\u043e\u0440\u043e\u0434 \u0442\u043e \u0432\u0432\u0435\u0434\u0438!"})))},children:[Object(u.jsxs)("div",{className:h.a["form-group"],children:[Object(u.jsx)("label",{htmlFor:"city",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{ref:n,type:"text",id:"city"})]}),Object(u.jsx)("button",{children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043e \u043f\u043e\u0433\u043e\u0434\u0435"})]})},D=n(36),k=n(15),F=n.n(k),T=function(){var e=Object(m.c)((function(e){return e.city.weather}));console.log(e);var t=e.dt,n=new Date(1e3*t),a=(n.getDate(),n.getMonth(),n.getFullYear(),"http://openweathermap.org/img/w/".concat(e.weather[0].icon,".png"),(e.main.temp-273.15).toFixed(0));return Object(u.jsx)(D.a.div,{initial:{x:"-100vw"},animate:{x:0},className:F.a.weather,children:Object(u.jsxs)("div",{className:F.a.weatherDesc,children:[Object(u.jsxs)("h2",{children:[e.name," "]}),Object(u.jsx)("h3",{children:e.weather[0].description}),Object(u.jsxs)("h1",{children:[a," \xb0C"]})]})})},S=n(7),C=n(16),L=n.n(C),E=function(){var e=Object(m.c)((function(e){return e.city.hourlyWeather})).hourly.map((function(e){var t=e.dt,n=new Date(1e3*t),a=n.getHours()+":"+n.getMinutes()+"0",r=(e.temp-273.15).toFixed(0);return Object(S.a)(Object(S.a)({},e),{},{dt:a,temp:r})}));return Object(u.jsx)(D.a.ul,{className:L.a["weather-details"],initial:{x:"100vw"},animate:{x:0},children:e.map((function(e,t){return Object(u.jsxs)("li",{className:L.a["weather-details__item"],children:[Object(u.jsxs)("div",{children:[e.dt," "]}),Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(e.weather[0].icon,".png"),alt:""})}),Object(u.jsxs)("div",{children:[e.temp," ","\xb0C"]})]},t)}))})},I=n(17),H=n.n(I),M=function(){var e=["\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435","\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0412\u0442\u043e\u0440\u043d\u0438\u043a","\u0421\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440\u0433","\u041f\u044f\u0442\u043d\u0438\u0446\u0430","\u0421\u0443\u0431\u0431\u043e\u0442\u0430"],t=Object(m.c)((function(e){return e.city.dailyWeather})).daily.map((function(t){var n=t.dt,a=new Date(1e3*n),r=a.toLocaleString(),c=a.getDay();return console.log(c),console.log(r),Object(S.a)(Object(S.a)({},t),{},{dt:e[c],temp:(t.temp.day-273.15).toFixed(0),id:Math.random()})}));return Object(u.jsx)("ul",{className:H.a["daily-weather"],children:t.map((function(e){return Object(u.jsxs)("li",{className:H.a["daily-weather__item"],children:[Object(u.jsx)("span",{children:e.dt}),Object(u.jsx)("span",{children:Object(u.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(e.weather[0].icon,".png"),alt:""})}),Object(u.jsxs)("span",{children:[e.temp," ","\xb0C"]})]},e.id)}))})},V=n(19),P=n.n(V),U=function(e){return Object(u.jsx)(D.a.div,{initial:{y:"-100vh"},animate:{y:0},className:P.a.notification,children:Object(u.jsx)("div",{className:"message",children:e.message})})},B=n(20),J=n.n(B),R=function(){return Object(u.jsxs)("div",{class:J.a["lds-roller"],children:[Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{})]})},Y=n(21),q=n.n(Y),G=function(){var e=Object(m.c)((function(e){return e.city.weather})),t=(e.main.temp-273.15).toFixed(0),n=(e.main.temp_max-273.15).toFixed(0);return Object(u.jsx)("div",{className:q.a["today-info"],children:Object(u.jsxs)("p",{children:["\u0421\u0435\u0433\u043e\u0434\u043d\u044f: c\u0435\u0439\u0447\u0430\u0441 ",e.weather[0].description,". Te\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0443 \u0432\u043e\u0437\u0434\u0443\u0445\u0430 ",t," \xb0C. \u041e\u0436\u0438\u0434\u0430\u0435\u043c\u0430\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0432\u043e\u0437\u0434\u0443\u0445\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f ",n," \xb0C."]})})};var K=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.city.weather})),n=Object(m.c)((function(e){return e.city.hourlyWeather})),r=Object(m.c)((function(e){return e.city.dailyWeather})),c=Object(m.c)((function(e){return e.ui.notification})),i=Object(m.c)((function(e){return e.ui.loading}));return Object(a.useEffect)((function(){e(W("\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433"))}),[e]),Object(a.useEffect)((function(){var t=setTimeout((function(){e(p.clearNotification())}),3e3);return function(){return clearTimeout(t)}}),[e,c]),Object(u.jsxs)(l,{children:[i&&Object(u.jsx)(R,{}),!i&&c&&Object(u.jsx)(U,{message:c.message}),!i&&t&&Object(u.jsx)(T,{}),!i&&n&&Object(u.jsx)(E,{}),Object(u.jsx)(N,{}),!i&&r&&Object(u.jsx)(M,{}),!i&&t&&Object(u.jsx)(G,{})]})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},z=Object(j.a)({reducer:{ui:b.reducer,city:y.reducer}});i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(m.a,{store:z,children:Object(u.jsx)(K,{})})}),document.getElementById("root")),Z()}],[[33,1,2]]]);
//# sourceMappingURL=main.cf6b75c6.chunk.js.map