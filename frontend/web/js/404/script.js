"use strict";!function(){var t=navigator.userAgent.toLowerCase(),a=new Date,e=$(document),r=$(window),o=$("html"),n=o.hasClass("desktop"),i="rtl"===o.attr("dir"),s=-1!=t.indexOf("msie")?parseInt(t.split("msie")[1],10):-1!=t.indexOf("trident")?11:-1!=t.indexOf("edge")&&12,l=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),c=(window,{pointerEvents:s<11&&"js/pointer-events.min.js",bootstrapTooltip:$("[data-toggle='tooltip']"),bootstrapModalDialog:$(".modal"),bootstrapTabs:$(".tabs-custom-init"),rdNavbar:$(".rd-navbar"),materialParallax:$(".parallax-container"),rdGoogleMaps:$(".rd-google-map"),rdMailForm:$(".rd-mailform"),rdInputLabel:$(".form-label"),regula:$("[data-constraints]"),owl:$(".owl-carousel"),swiper:$(".swiper-slider"),search:$(".rd-search"),searchResults:$(".rd-search-results"),statefulButton:$(".btn-stateful"),gradientMove:$(".page-canvas-gradient"),isotope:$(".isotope"),popover:$('[data-toggle="popover"]'),viewAnimate:$(".view-animate"),radio:$("input[type='radio']"),checkbox:$("input[type='checkbox']"),customToggle:$("[data-custom-toggle]"),facebookWidget:$("#fb-root"),counter:$(".counter"),progressLinear:$(".progress-linear"),circleProgress:$(".progress-bar-circle"),dateCountdown:$(".DateCountdown"),pageLoader:$(".page-loader"),captcha:$(".recaptcha"),scroller:$(".scroll-wrap"),lightGallery:$("[data-lightgallery='group']"),lightGalleryItem:$("[data-lightgallery='item']"),mailchimp:$(".mailchimp-mailform"),campaignMonitor:$(".campaign-mailform"),copyrightYear:$("#copyright-year"),starfield:$("#starfield"),fullpage:$("#fullpage"),fss:$("#fss-container"),sketch:$("#sketch-container")[0],countDown:$(".countdown"),particles:$("#particles-js"),glitch:$(".glitch"),videoBG:$(".vide"),game2048:$(".game-container"),pacman:$("#pacman"),parallaxJs:document.getElementsByClassName("parallax-scene-js")});e.ready(function(){function t(t,a){var e,o=t.attr("data-"+a);if(o&&(e=o.match(/(px)|(%)|(vh)$/i)).length)switch(e[0]){case"px":return parseFloat(o);case"vh":return r.height()*(parseFloat(o)/100);case"%":return t.width()*(parseFloat(o)/100)}}function d(t){var a,e=$(t.slides[t.previousIndex]),r=$(t.slides[t.activeIndex]),o=e.find("video");for(Mt=0;Mt<o.length;Mt++)o[Mt].pause();(a=r.find("video")).length&&a.get(0).play()}function g(t){var a,e,r,o,n=$(t.container).find("[data-caption-animate]"),i=$(t.slides[t.activeIndex]).find("[data-caption-animate]");for(Mt=0;Mt<n.length;Mt++)(o=$(n[Mt])).removeClass("animated").removeClass(o.attr("data-caption-animate")).addClass("not-animated");for(Mt=0;Mt<i.length;Mt++){a=(r=$(i[Mt])).attr("data-caption-delay"),e=r.attr("data-caption-duration");setTimeout(function(t,a){return function(){t.removeClass("not-animated").addClass(t.attr("data-caption-animate")).addClass("animated"),a&&t.css("animation-duration",a+"ms")}}(r,e),a?parseInt(a,10):0)}}function h(t){var a,e,r=["-","-xs-","-sm-","-md-","-lg-"],o=[0,480,768,992,1200],n={};for(a=0;a<o.length;a++)for(n[o[a]]={},e=a;e>=-1;e--)!n[o[a]].items&&t.attr("data"+r[e]+"items")&&(n[o[a]].items=e<0?1:parseInt(t.attr("data"+r[e]+"items"),10)),!n[o[a]].stagePadding&&0!==n[o[a]].stagePadding&&t.attr("data"+r[e]+"stage-padding")&&(n[o[a]].stagePadding=e<0?0:parseInt(t.attr("data"+r[e]+"stage-padding"),10)),!n[o[a]].margin&&0!==n[o[a]].margin&&t.attr("data"+r[e]+"margin")&&(n[o[a]].margin=e<0?30:parseInt(t.attr("data"+r[e]+"margin"),10));t.attr("data-dots-custom")&&t.on("initialized.owl.carousel",function(t){var a=$(t.currentTarget),e=$(a.attr("data-dots-custom")),r=0;a.attr("data-active")&&(r=parseInt(a.attr("data-active"))),a.trigger("to.owl.carousel",[r,300,!0]),e.find("[data-owl-item='"+r+"']").addClass("active"),e.find("[data-owl-item]").on("click",function(t){t.preventDefault(),a.trigger("to.owl.carousel",[parseInt(this.getAttribute("data-owl-item")),300,!0])}),a.on("translate.owl.carousel",function(t){e.find(".active").removeClass("active"),e.find("[data-owl-item='"+t.item.index+"']").addClass("active")})}),t.on("initialized.owl.carousel",function(a){T($(t).parent(),"lightGallery-in-carousel")}),t.owlCarousel({autoplay:"true"===t.attr("data-autoplay"),loop:!M&&"false"!==t.attr("data-loop"),items:1,center:!0,autoplaySpeed:600,rtl:i,dotsContainer:t.attr("data-pagination-class")||!1,navContainer:t.attr("data-navigation-class")||!1,mouseDrag:!M&&"false"!==t.attr("data-mouse-drag"),nav:"true"===t.attr("data-nav"),dots:"true"===t.attr("data-dots"),dotsEach:!!t.attr("data-dots-each")&&parseInt(t.attr("data-dots-each")),animateIn:!!t.attr("data-animation-in")&&t.attr("data-animation-in"),animateOut:!!t.attr("data-animation-out")&&t.attr("data-animation-out"),responsive:n,navText:$.parseJSON(t.attr("data-nav-text"))||[],navClass:$.parseJSON(t.attr("data-nav-class"))||["owl-prev","owl-next"]})}function u(t){return!!M||t.offset().top+t.outerHeight()>=r.scrollTop()&&t.offset().top<=r.scrollTop()+r.height()}function p(t,a){jQuery(window).on("load scroll",function(){!t.hasClass("lazy-loaded")&&u(t)&&(a.call(),t.addClass("lazy-loaded"))})}function f(t){t.live.removeClass("cleared").html(),t.current++,t.spin.addClass("loading"),$.get(R,{s:decodeURI(t.term),liveSearch:t.element.attr("data-search-live"),dataType:"html",liveCount:t.liveCount,filter:t.filter,template:t.template},function(a){t.processed++;var e=t.live;t.processed!=t.current||e.hasClass("cleared")||(e.find("> #search-results").removeClass("active"),e.html(a),setTimeout(function(){e.find("> #search-results").addClass("active")},50)),t.spin.parents(".rd-search").find(".input-group-addon").removeClass("loading")})}function m(t,a){var e,r=0;if(t.length){for(mt=0;mt<t.length;mt++){var o=$(t[mt]);if((e=o.regula("validate")).length)for(vt=0;vt<e.length;vt++)r++,o.siblings(".form-validation").text(e[vt].message).parent().addClass("has-error");else o.siblings(".form-validation").text("").parent().removeClass("has-error")}return a&&a.length?k(a)&&0==r:0==r}return!0}function v(t){window.innerWidth<599?(c.bootstrapTooltip.tooltip("destroy"),c.bootstrapTooltip.tooltip({placement:"bottom"})):(c.bootstrapTooltip.tooltip("destroy"),c.bootstrapTooltip.tooltip())}function b(){z.remove(F),S.clear(),I=new FSS.Plane(D.width*S.width,D.height*S.height,D.slices),P=new FSS.Material(D.ambient,D.diffuse),F=new FSS.Mesh(I,P),z.add(F);var t,a;for(t=I.vertices.length-1;t>=0;t--)(a=I.vertices[t]).depth=11,a.anchor=FSS.Vector3.clone(a.position)}function w(){y(),C(),requestAnimationFrame(w)}function y(){var t,a,e=D.depth/100;for(t=I.vertices.length-1;t>=0;t--)a=I.vertices[t],FSS.Vector3.set(a.position,1,1,a.depth*e),FSS.Vector3.add(a.position,a.anchor);I.dirty=!0}function C(){S.render(z)}function x(t,a,e){this.init(t,a,e)}function k(t){return""!=t.find(".g-recaptcha-response").val()||(t.siblings(".form-validation").html("Please, prove that you are not robot.").addClass("active"),t.closest(".form-group").addClass("has-error"),t.on("propertychange",function(){var t=$(this);""!=t.find(".g-recaptcha-response").val()&&(t.closest(".form-group").removeClass("has-error"),t.siblings(".form-validation").removeClass("active").html(""),t.off("propertychange"))}),!1)}function T(t,a){c.lightGallery.length&&!M&&$(t).find(c.lightGallery.selector).lightGallery({thumbnail:!0,selector:"[data-lightgallery='group-item']",addClass:a}),c.lightGalleryItem.length&&!M&&$(t).find(c.lightGalleryItem.selector).lightGallery({selector:"this",addClass:a})}var M=window.xMode;!function(){function t(t){var a,e;a=e=0,t.pageX||t.pageY?(a=t.clientX,e=t.clientY):(t.clientX||t.clientY)&&(a=t.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,e=t.clientY),console.log(a,e),console.log(t.clientY),h.x=a,h.y=e}function a(){s=window.innerWidth,l=window.innerHeight,c.width=s,c.height=l}function e(){if(u){d.clearRect(0,0,s,l);for(var t in g)Math.abs(i(h,g[t]))<4e3?(g[t].active=.3,g[t].circle.active=.6):Math.abs(i(h,g[t]))<2e4?(g[t].active=.1,g[t].circle.active=.3):Math.abs(i(h,g[t]))<4e4?(g[t].active=.02,g[t].circle.active=.1):(g[t].active=0,g[t].circle.active=0),o(g[t]),g[t].circle.draw()}requestAnimationFrame(e)}function r(t){TweenLite.to(t,1+1*Math.random(),{x:t.originX-50+100*Math.random(),y:t.originY-50+100*Math.random(),ease:n.easeInOut,onComplete:function(){r(t)}})}function o(t){if(t.active)for(var a in t.closest)d.beginPath(),d.moveTo(t.x,t.y),d.lineTo(t.closest[a].x,t.closest[a].y),d.strokeStyle="rgba(255,255,255,"+t.active+")",d.stroke()}function n(t,a,e){var r=this;r.pos=t||null,r.radius=a||null,r.color=e||null,this.draw=function(){r.active&&(d.beginPath(),d.arc(r.pos.x,r.pos.y,r.radius,0,2*Math.PI,!1),d.fillStyle="rgba(255,255,255,"+r.active+")",d.fill())}}function i(t,a){return Math.pow(t.x-a.x,2)+Math.pow(t.y-a.y,2)}var s,l,c,d,g,h,u=!0;$("#star-canvas").length&&(!function(){s=window.innerWidth,l=window.innerHeight,h={x:s/2,y:l/2},(c=document.getElementById("star-canvas")).width=s,c.height=l,d=c.getContext("2d"),g=[];for(var t=0;t<s;t+=s/20)for(var a=0;a<l;a+=l/20){var e=t+Math.random()*s/20,r=a+Math.random()*l/20,o={x:e,originX:e,y:r,originY:r};g.push(o)}for(w=0;w<g.length;w++){for(var u=[],p=g[w],f=0;f<g.length;f++){var m=g[f];if(p!=m){for(var v=!1,b=0;b<5;b++)v||void 0==u[b]&&(u[b]=m,v=!0);for(b=0;b<5;b++)v||i(p,m)<i(p,u[b])&&(u[b]=m,v=!0)}}p.closest=u}for(var w in g){var $=new n(g[w],2+2*Math.random(),"rgba(255,255,255,0.3)");g[w].circle=$}}(),function(){e();for(var t in g)r(g[t])}(),"ontouchstart"in window||window.addEventListener("mousemove",t),window.addEventListener("resize",a))}();var S,F,I,P,D={width:1.2,height:1.2,slices:460,depth:11,maxdepth:200,ambient:"#555555",diffuse:"#FFFFFF"},A=FSS.Vector3.create();c.fss[0],c.fss.find("#fss-output")[0];if(c.sketch){x.prototype={init:function(t,a,e){this.alive=!0,this.radius=e||10,this.wander=.15,this.theta=random(TWO_PI),this.drag=.92,this.color="#fff",this.x=t||0,this.y=a||0,this.vx=0,this.vy=0},move:function(){this.x+=this.vx,this.y+=this.vy,this.vx*=this.drag,this.vy*=this.drag,this.theta+=random(-.5,.5)*this.wander,this.vx+=.1*sin(this.theta),this.vy+=.1*cos(this.theta),this.radius*=.96,this.alive=this.radius>.5},draw:function(t){t.beginPath(),t.arc(this.x,this.y,this.radius,0,TWO_PI),t.fillStyle=this.color,t.fill()}};var L=["#69D2E7","#A7DBD8","#20FC8F","#F38630","#FA6900","#FF4E50","#009DDC"],N=[],B=[],G=Sketch.create({container:c.sketch,retina:"auto"});G.setup=function(){var t,a,e;for(t=0;t<20;t++)a=.5*G.width+random(-100,100),e=.5*G.height+random(-100,100),G.spawn(a,e)},G.spawn=function(t,a){var e,r,o;N.length>=180&&B.push(N.shift()),(e=B.length?B.pop():new x).init(t,a,random(5,40)),e.wander=random(.5,2),e.color=random(L),e.drag=random(.9,.99),r=random(TWO_PI),o=random(2,8),e.vx=sin(r)*o,e.vy=cos(r)*o,N.push(e)},G.update=function(){var t,a;for(t=N.length-1;t>=0;t--)(a=N[t]).alive?a.move():B.push(N.splice(t,1)[0])},G.draw=function(){G.globalCompositeOperation="lighter";for(var t=N.length-1;t>=0;t--)N[t].draw(G)},G.mousemove=function(){var t,a,e,r,o;for(e=0,o=G.touches.length;e<o;e++)for(t=G.touches[e],a=random(1,4),r=0;r<a;r++)G.spawn(t.x,t.y)}}if(c.fss.length,c.starfield.length&&window.start(),c.particles.length&&particlesJS("particles-js","es_json"),c.fullpage.length&&(c.fullpage.fullpage({anchors:c.fullpage.data("ancors").split(","),navigationTooltips:"Home About Contact".split(" "),slidesNavigation:!0,showActiveTooltip:!1,menu:"#fp-nav",scrollBar:c.fullpage.data("scroll"),css3:!0,scrollingSpeed:800,responsiveWidth:992}),$(".fullpage-to-slide").on("click",function(t){t.preventDefault(),$.fn.fullpage.moveTo($(this).attr("href"))})),c.videoBG.length&&c.videoBG.vide(c.videoBG.attr("data-video-path")),c.glitch.length&&c.glitch.mgGlitch({destroy:!1,glitch:!0,scale:!0,blend:!0,blendModeType:"hue",glitch1TimeMin:200,glitch1TimeMax:400,glitch2TimeMin:10,glitch2TimeMax:100}),c.parallaxJs)for(Mt=0;Mt<c.parallaxJs.length;Mt++){var z=c.parallaxJs[Mt];new Parallax(z)}if(c.gradientMove.length){var E=window.innerWidth;document.onmousemove=function(t){var a=Math.round(t.pageX/E*100-0);c.gradientMove[0].style.background="linear-gradient(45deg, #15153f "+(a-100)+"%,#00304e "+(a+100)+"%)"}}if(c.copyrightYear.length&&c.copyrightYear.text(a.getFullYear()),c.game2048.length&&window.requestAnimationFrame(function(){new GameManager(4,KeyboardInputManager,HTMLActuator)}),c.pacman.length&&geronimo(),c.pageLoader.length>0&&setTimeout(function(){c.pageLoader.addClass("loaded"),r.trigger("resize")},1e3),window.onloadCaptchaCallback=function(){for(Mt=0;Mt<c.captcha.length;Mt++){var t=$(c.captcha[Mt]);grecaptcha.render(t.attr("id"),{sitekey:t.attr("data-sitekey"),size:t.attr("data-size")?t.attr("data-size"):"normal",theme:t.attr("data-theme")?t.attr("data-theme"):"light",callback:function(t){$(".recaptcha").trigger("propertychange")}}),t.after("<span class='form-validation'></span>")}},c.captcha.length&&$.getScript("//www.google.com/recaptcha/api.js?onload=onloadCaptchaCallback&render=explicit&hl=en"),navigator.platform.match(/(Mac)/i)&&o.addClass("mac-os"),s&&(s<10&&o.addClass("lt-ie-10"),s<11&&c.pointerEvents&&$.getScript(c.pointerEvents).done(function(){o.addClass("ie-10"),PointerEventsPolyfill.initialize({})}),11===s&&$("html").addClass("ie-11"),12===s&&$("html").addClass("ie-edge")),c.bootstrapTooltip.length){var O=c.bootstrapTooltip.attr("data-placement");v(O),r.on("resize orientationchange",function(){v(O)})}if(c.bootstrapModalDialog.length>0){Mt=0;for(Mt=0;Mt<c.bootstrapModalDialog.length;Mt++){var j=$(c.bootstrapModalDialog[Mt]);j.on("hidden.bs.modal",$.proxy(function(){var t=$(this),a=t.find("video"),e=t.find("iframe");if(a.length&&a[0].pause(),e.length){var r=e.attr("src");e.attr("src","").attr("src",r)}},j))}}if(c.scroller.length){for(Mt=0;Mt<c.scroller.length;Mt++){var W=$(c.scroller[Mt]);W.mCustomScrollbar({theme:W.attr("data-theme")?W.attr("data-theme"):"minimal",scrollInertia:100,scrollButtons:{enable:!1}})}}if(c.rdGoogleMaps.length){$.getScript("//maps.google.com/maps/api/js?key=AIzaSyAwH60q5rWrS8bXwpkZwZwhw9Bw0pqKTZM&sensor=false&libraries=geometry,places&v=3.7",function(){var t=document.getElementsByTagName("head")[0],a=t.insertBefore;for(t.insertBefore=function(e,r){e.href&&-1!=e.href.indexOf("//fonts.googleapis.com/css?family=Roboto")||-1!=e.innerHTML.indexOf("gm-style")||a.call(t,e,r)},Mt=0;Mt<c.rdGoogleMaps.length;Mt++){var e=$(c.rdGoogleMaps[Mt]);p(e,$.proxy(function(){var t=$(this),a=t.attr("data-styles");console.log(t),t.googleMap({marker:{basic:t.data("marker"),active:t.data("marker-active")},styles:a?JSON.parse(a):[],onInit:function(a){var e=$("#rd-google-map-address");if(e.length){var r=e,o=new google.maps.Geocoder,n=new google.maps.Marker({map:a,icon:t.data("marker-url")});new google.maps.places.Autocomplete(e[0]).bindTo("bounds",a),e.attr("placeholder",""),e.on("change",function(){$("#rd-google-map-address-submit").trigger("click")}),e.on("keydown",function(t){13==t.keyCode&&$("#rd-google-map-address-submit").trigger("click")}),$("#rd-google-map-address-submit").on("click",function(t){t.preventDefault();var e=r.val();o.geocode({address:e},function(t,e){if(e==google.maps.GeocoderStatus.OK){var r=t[0].geometry.location.lat(),o=t[0].geometry.location.lng();a.setCenter(new google.maps.LatLng(parseFloat(r),parseFloat(o))),n.setPosition(new google.maps.LatLng(parseFloat(r),parseFloat(o)))}})})}}})},e))}})}if(c.facebookWidget.length&&p(c.facebookWidget,function(){!function(t,a,e){var r,o=t.getElementsByTagName(a)[0];t.getElementById(e)||((r=t.createElement(a)).id=e,r.src="//connect.facebook.net/en_EN/sdk.js#xfbml=1&version=v2.5",o.parentNode.insertBefore(r,o))}(document,"script","facebook-jssdk")}),c.radio.length){for(Mt=0;Mt<c.radio.length;Mt++)(yt=$(c.radio[Mt])).addClass("radio-custom").after("<span class='radio-custom-dummy'></span>")}if(c.checkbox.length){for(Mt=0;Mt<c.checkbox.length;Mt++)(yt=$(c.checkbox[Mt])).addClass("checkbox-custom").after("<span class='checkbox-custom-dummy'></span>")}if(c.popover.length&&(window.innerWidth<767?(c.popover.attr("data-placement","bottom"),c.popover.popover()):c.popover.popover()),c.statefulButton.length&&$(c.statefulButton).on("click",function(){var t=$(this).button("loading");setTimeout(function(){t.button("reset")},2e3)}),n&&!M&&$().UItoTop({easingType:"easeOutQuart",containerClass:"ui-to-top fa fa-angle-up"}),c.rdNavbar.length){var H=!!$(".page-skew").length;c.rdNavbar.RDNavbar({anchorNav:!H,stickUpClone:!(!c.rdNavbar.attr("data-stick-up-clone")||M)&&"true"===c.rdNavbar.attr("data-stick-up-clone"),responsive:{0:{stickUp:!M&&"true"===c.rdNavbar.attr("data-stick-up")},768:{stickUp:!M&&"true"===c.rdNavbar.attr("data-sm-stick-up")},992:{stickUp:!M&&"true"===c.rdNavbar.attr("data-md-stick-up")},1200:{stickUp:!M&&"true"===c.rdNavbar.attr("data-lg-stick-up")}},callbacks:{onStuck:function(){var t=this.$element.find(".rd-search input");t&&t.val("").trigger("propertychange")},onDropdownOver:function(){return!M},onUnstuck:function(){if(null!==this.$clone){var t=this.$clone.find(".rd-search input");t&&(t.val("").trigger("propertychange"),t.trigger("blur"))}}}}),$(".page-skew").length&&($(".rd-navbar-nav a").on("click",function(t){$(".page-subpage").removeClass("page-subpage--active"),$(".rd-navbar-nav li").removeClass("active"),setTimeout(function(){$(t.currentTarget).parent().addClass("active"),$(t.currentTarget.hash).addClass("page-subpage--active")},600),$('[data-rd-navbar-toggle=".rd-navbar-nav-wrap"]').trigger("click")}),$("[data-rd-navbar-toggle='.rd-navbar-nav-wrap']").on("click",function(t){setTimeout(function(){$(".rd-navbar-nav a").shuffleLetters()},300)})),c.rdNavbar.attr("data-body-class")&&(document.body.className+=" "+c.rdNavbar.attr("data-body-class"))}if(c.search.length||c.searchResults){var R="bat/rd-search.php",_='<h5 class="search_title"><a target="_top" href="#{href}" class="search_link">#{title}</a></h5><p>...#{token}...</p><p class="match"><em>Terms matched: #{count} - URL: #{href}</em></p>';if(c.search.length)for(c.search=$("."+c.search[0].className),Mt=0;Mt<c.search.length;Mt++){var Y=$(c.search[Mt]),U={element:Y,filter:Y.attr("data-search-filter")?Y.attr("data-search-filter"):"*.html",template:Y.attr("data-search-template")?Y.attr("data-search-template"):_,live:!!Y.attr("data-search-live")&&Y.find("."+Y.attr("data-search-live")),liveCount:Y.attr("data-search-live-count")?parseInt(Y.attr("data-search-live")):4,current:0,processed:0,timer:{}};$(".rd-navbar-search-toggle").length&&$(".rd-navbar-search-toggle").on("click",function(){$(this).hasClass("active")||Y.find("input").val("").trigger("propertychange")}),U.live&&(U.clearHandler=!1,Y.find("input").on("keyup input propertychange",$.proxy(function(){var t=this;this.term=this.element.find("input").val().trim(),this.spin=this.element.find(".input-group-addon"),clearTimeout(t.timer),t.term.length>2?(t.timer=setTimeout(f(t),200),0==t.clearHandler&&(t.clearHandler=!0,$("body").on("click",function(a){0==$(a.toElement).parents(".rd-search").length&&t.live.addClass("cleared").html("")}))):0==t.term.length&&t.live.addClass("cleared").html("")},U,this))),Y.on("submit",$.proxy(function(){return $("<input />").attr("type","hidden").attr("name","filter").attr("value",this.filter).appendTo(this.element),!0},U,this))}if(c.searchResults.length){var q=/\?.*s=([^&]+)\&filter=([^&]+)/g.exec(location.search);null!=q&&$.get(R,{s:decodeURI(q[1]),dataType:"html",filter:q[2],template:_,live:""},function(t){c.searchResults.html(t)})}}if(c.countDown.length){for(Mt=0;Mt<c.countDown.length;Mt++){var J=c.countDown[Mt],X=new Date,V=J.getAttribute("data-type"),K=J.getAttribute("data-time"),Z=J.getAttribute("data-format"),Q=[];X.setTime(Date.parse(K)).toLocaleString(),Q[V]=X,Q.format=Z,$(J).countdown(Q)}}if(c.viewAnimate.length){for(Mt=0;Mt<c.viewAnimate.length;Mt++){var tt=$(c.viewAnimate[Mt]).not(".active");e.on("scroll",$.proxy(function(){u(this)&&this.addClass("active")},tt)).trigger("scroll")}}if(c.swiper.length){for(Mt=0;Mt<c.swiper.length;Mt++){var at=$(c.swiper[Mt]),et=at.find(".swiper-pagination"),rt=at.find(".swiper-button-next"),ot=at.find(".swiper-button-prev"),nt=at.find(".swiper-scrollbar"),it=at.find(".swiper-slide");for(mt=0;mt<it.length;mt++){var st;(st=(yt=$(it[mt])).attr("data-slide-bg"))&&yt.css({"background-image":"url("+st+")","background-size":"cover"})}it.end().find("[data-caption-animate]").addClass("not-animated").end().swiper({autoplay:at.attr("data-autoplay")?"false"===at.attr("data-autoplay")?void 0:at.attr("data-autoplay-delay"):5e3,direction:at.attr("data-direction")?at.attr("data-direction"):"horizontal",effect:at.attr("data-slide-effect")?at.attr("data-slide-effect"):"fade",speed:at.attr("data-slide-speed")?at.attr("data-slide-speed"):600,keyboardControl:"true"===at.attr("data-keyboard"),mousewheelControl:"true"===at.attr("data-mousewheel"),mousewheelReleaseOnEdges:"true"===at.attr("data-mousewheel-release"),nextButton:rt.length?rt.get(0):null,prevButton:ot.length?ot.get(0):null,pagination:et.length?et.get(0):null,paginationClickable:!!et.length&&"false"!==et.attr("data-clickable"),paginationBulletRender:et.length&&"true"===et.attr("data-index-bullet")?function(t,a){return'<span class="'+a+'">'+(t+1)+"</span>"}:null,scrollbar:nt.length?nt.get(0):null,scrollbarDraggable:!nt.length||"false"!==nt.attr("data-draggable"),scrollbarHide:!!nt.length&&"false"===nt.attr("data-draggable"),loop:!M&&"false"!==at.attr("data-loop"),simulateTouch:!(!at.attr("data-simulate-touch")||M)&&"true"===at.attr("data-simulate-touch"),onTransitionStart:function(t){d(t)},onTransitionEnd:function(t){g(t)},onInit:function(t){d(t),g(t),T($(t.container).parent(),"lightGallery-in-carousel"),r.on("resize",function(){t.update(!0)})}}),r.on("resize",function(){var a=t(at,"min-height"),e=t(at,"height");e&&at.css("height",a&&a>e?a:e)}).trigger("resize")}}if(c.owl.length){for(Mt=0;Mt<c.owl.length;Mt++){var lt=$(c.owl[Mt]);lt.parents(".tab-content").length||h(lt)}}if(c.isotope.length){var ct=[];for(Mt=0;Mt<c.isotope.length;Mt++){var dt=c.isotope[Mt],gt=new Isotope(dt,{itemSelector:".isotope-item",layoutMode:dt.getAttribute("data-isotope-layout")?dt.getAttribute("data-isotope-layout"):"masonry",filter:"*"});ct.push(gt)}r.on("load",function(){setTimeout(function(){var t;for(t=0;t<ct.length;t++)ct[t].element.className+=" isotope--loaded",ct[t].layout()},600)});$("[data-isotope-filter]").on("click",function(t){t.preventDefault();var a=$(this);clearTimeout(void 0),a.parents(".isotope-filters").find(".active").removeClass("active"),a.addClass("active");var e=$('.isotope[data-isotope-group="'+this.getAttribute("data-isotope-group")+'"]');e.isotope({itemSelector:".isotope-item",layoutMode:e.attr("data-isotope-layout")?e.attr("data-isotope-layout"):"masonry",filter:"*"==this.getAttribute("data-isotope-filter")?"*":'[data-filter*="'+this.getAttribute("data-isotope-filter")+'"]'})}).eq(0).trigger("click")}if(n&&o.hasClass("wow-animation")&&$(".wow").length&&(new WOW).init(),c.bootstrapTabs.length){for(Mt=0;Mt<c.bootstrapTabs.length;Mt++){var ht=$(c.bootstrapTabs[Mt]);ht.find(".owl-carousel").length&&(h(ht.find(".tab-content .tab-pane.active .owl-carousel")),ht.find(".nav-custom a").on("click",$.proxy(function(){var t=$(this);t.find(".owl-carousel").trigger("destroy.owl.carousel").removeClass("owl-loaded"),t.find(".owl-carousel").find(".owl-stage-outer").children().unwrap(),setTimeout(function(){var a=t.find(".tab-content .tab-pane.active .owl-carousel");if(a.length)for(var e=0;e<a.length;e++)h($(a[e]))},M?1500:300)},ht))),ht.find(".slick-slider").length&&ht.find(".tabs-custom-list > li > a").on("click",$.proxy(function(){var t=$(this),a=M?1500:300;setTimeout(function(){t.find(".tab-content .tab-pane.active .slick-slider").slick("setPosition")},a)},ht))}}if(c.rdInputLabel.length&&c.rdInputLabel.RDInputLabel(),c.regula.length&&function(t){for(r=0;r<t.length;r++){var a=$(t[r]);a.addClass("form-control-has-validation").after("<span class='form-validation'></span>"),a.parent().find(".form-validation").is(":last-child")&&a.addClass("form-control-last-child")}t.on("input change propertychange blur",function(t){var a,e=$(this);if(("blur"==t.type||e.parent().hasClass("has-error"))&&!e.parents(".rd-mailform").hasClass("success"))if((a=e.regula("validate")).length)for(r=0;r<a.length;r++)e.siblings(".form-validation").text(a[r].message).parent().addClass("has-error");else e.siblings(".form-validation").text("").parent().removeClass("has-error")}).regula("bind");for(var e=[{type:regula.Constraint.Required,newMessage:"The text field is required."},{type:regula.Constraint.Email,newMessage:"The email is not a valid email."},{type:regula.Constraint.Numeric,newMessage:"Only numbers are required"},{type:regula.Constraint.Selected,newMessage:"Please choose an option."}],r=0;r<e.length;r++){var o=e[r];regula.override({constraintType:o.type,defaultMessage:o.newMessage})}}(c.regula),c.mailchimp.length)for(Mt=0;Mt<c.mailchimp.length;Mt++){var ut=$(c.mailchimp[Mt]),pt=ut.find('input[type="email"]');ut.attr("novalidate","true"),pt.attr("name","EMAIL"),ut.on("submit",$.proxy(function(t){t.preventDefault();var a=this,e={},r=a.attr("action").replace("/post?","/post-json?").concat("&c=?"),o=a.serializeArray(),n=$("#"+a.attr("data-form-output"));for(Mt=0;Mt<o.length;Mt++)e[o[Mt].name]=o[Mt].value;return $.ajax({data:e,url:r,dataType:"jsonp",error:function(t,a){n.html("Server error: "+a),setTimeout(function(){n.removeClass("active")},4e3)},success:function(t){n.html(t.msg).addClass("active"),setTimeout(function(){n.removeClass("active")},6e3)},beforeSend:function(t){if(M||!m(a.find("[data-constraints]")))return!1;n.html("Submitting...").addClass("active")}}),!1},ut))}if(c.campaignMonitor.length)for(Mt=0;Mt<c.campaignMonitor.length;Mt++){var ft=$(c.campaignMonitor[Mt]);ft.on("submit",$.proxy(function(t){var a={},e=this.attr("action"),r=this.serializeArray(),o=$("#"+c.campaignMonitor.attr("data-form-output")),n=$(this);for(Mt=0;Mt<r.length;Mt++)a[r[Mt].name]=r[Mt].value;return $.ajax({data:a,url:e,dataType:"jsonp",error:function(t,a){o.html("Server error: "+a),setTimeout(function(){o.removeClass("active")},4e3)},success:function(t){o.html(t.Message).addClass("active"),setTimeout(function(){o.removeClass("active")},6e3)},beforeSend:function(t){if(M||!m(n.find("[data-constraints]")))return!1;o.html("Submitting...").addClass("active")}}),!1},ft))}if(c.rdMailForm.length){var mt,vt,bt={MF000:"Successfully sent!",MF001:"Recipients are not set!",MF002:"Form will not work locally!",MF003:"Please, define email field in your form!",MF004:"Please, define type of your form!",MF254:"Something went wrong with PHPMailer!",MF255:"Aw, snap! Something went wrong."};for(Mt=0;Mt<c.rdMailForm.length;Mt++){var wt=$(c.rdMailForm[Mt]),$t=!1;wt.attr("novalidate","novalidate").ajaxForm({data:{"form-type":wt.attr("data-form-type")||"contact",counter:Mt},beforeSubmit:function(t,a,e){if(!M){var r=$(c.rdMailForm[this.extraData.counter]),o=r.find("[data-constraints]"),n=$("#"+r.attr("data-form-output")),i=r.find(".recaptcha"),s=!0;if(n.removeClass("active error success"),!m(o,i))return!1;if(i.length){var l=i.find(".g-recaptcha-response").val(),d={CPT001:'Please, setup you "site key" and "secret key" of reCaptcha',CPT002:"Something wrong with google reCaptcha"};$t=!0,$.ajax({method:"POST",url:"bat/reCaptcha.php",data:{"g-recaptcha-response":l},async:!1}).done(function(t){"CPT000"!=t&&(n.hasClass("snackbars")?(n.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>'+d[t]+"</span></p>"),setTimeout(function(){n.removeClass("active")},3500),s=!1):n.html(d[t]),n.addClass("active"))})}if(!s)return!1;r.addClass("form-in-process"),n.hasClass("snackbars")&&(n.html('<p><span class="icon text-middle fa fa-circle-o-notch fa-spin icon-xxs"></span><span>Sending</span></p>'),n.addClass("active"))}},error:function(t){if(!M){var a=$("#"+$(c.rdMailForm[this.extraData.counter]).attr("data-form-output")),e=$(c.rdMailForm[this.extraData.counter]);a.text(bt[t]),e.removeClass("form-in-process"),$t&&grecaptcha.reset()}},success:function(t){if(!M){var a=$(c.rdMailForm[this.extraData.counter]),e=$("#"+a.attr("data-form-output"));a.addClass("success").removeClass("form-in-process"),$t&&grecaptcha.reset(),t=5===t.length?t:"MF255",e.text(bt[t]),"MF000"===t?e.hasClass("snackbars")?e.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>'+bt[t]+"</span></p>"):e.addClass("active success"):e.hasClass("snackbars")?e.html(' <p class="snackbars-left"><span class="icon icon-xxs mdi mdi-alert-outline text-middle"></span><span>'+bt[t]+"</span></p>"):e.addClass("active error"),a.clearForm(),a.find("input, textarea").trigger("blur"),setTimeout(function(){e.removeClass("active error success"),a.removeClass("success")},3500)}}})}}if(c.lightGallery.length&&!M&&T("html"),c.lightGalleryItem.length&&!M&&T("html"),c.customToggle.length){for(Mt=0;Mt<c.customToggle.length;Mt++){var yt=$(c.customToggle[Mt]);yt.on("click",$.proxy(function(t){t.preventDefault();var a=$(this);$(a.attr("data-custom-toggle")).add(this).toggleClass("active")},yt)),"true"===yt.attr("data-custom-toggle-hide-on-blur")&&$("body").on("click",yt,function(t){t.target!==t.data[0]&&$(t.data.attr("data-custom-toggle")).find($(t.target)).length&&0==t.data.find($(t.target)).length&&$(t.data.attr("data-custom-toggle")).add(t.data[0]).removeClass("active")}),"true"===yt.attr("data-custom-toggle-disable-on-blur")&&$("body").on("click",yt,function(t){t.target!==t.data[0]&&0==$(t.data.attr("data-custom-toggle")).find($(t.target)).length&&0==t.data.find($(t.target)).length&&$(t.data.attr("data-custom-toggle")).add(t.data[0]).removeClass("active")})}}if(c.counter.length){for(Mt=0;Mt<c.counter.length;Mt++){var Ct=$(c.counter[Mt]).not(".animated");e.on("scroll",$.proxy(function(){var t=this;!t.hasClass("animated")&&u(t)&&(t.countTo({refreshInterval:40,from:0,to:parseInt(t.text(),10),speed:t.attr("data-speed")||1e3}),t.addClass("animated"))},Ct)).trigger("scroll")}}if(c.dateCountdown.length){for(Mt=0;Mt<c.dateCountdown.length;Mt++){var xt=$(c.dateCountdown[Mt]);r.on("load resize orientationchange",$.proxy(function(){var t=$(this),a=t.data("circle-inner-color"),e=t.data("circle-bg"),r={Days:{text:"Days",color:a,show:!0},Hours:{text:"Hours",color:a,show:!0},Minutes:{text:"Minutes",color:a,show:!0},Seconds:{text:"Seconds",color:a,show:!0}};t.TimeCircles({fg_width:t.data("circle-fg-width")||.045,circle_bg_color:e,bg_width:t.data("circle-bg-width")||.9,time:r}),window.innerWidth<479?t.TimeCircles({time:{Days:{color:a,show:!0},Hours:{color:a,show:!0},Minutes:{color:a,show:!0},Seconds:{show:!1}}}).rebuild():window.innerWidth<767?t.TimeCircles({time:{Days:{color:a,show:!0},Hours:{color:a,show:!0},Seconds:{show:!1}}}).rebuild():t.TimeCircles({time:r}).rebuild()},xt))}}if(c.circleProgress.length){for(Mt=0;Mt<c.circleProgress.length;Mt++){var kt=$(c.circleProgress[Mt]);e.on("scroll",$.proxy(function(){var t=$(this);if(!t.hasClass("animated")&&u(t)){var a=t.attr("data-gradient").split(",");t.circleProgress({value:t.attr("data-value"),size:t.attr("data-size")?t.attr("data-size"):175,fill:{gradient:a,gradientAngle:Math.PI/4},startAngle:-Math.PI/4*2,emptyFill:t.attr("data-empty-fill")?t.attr("data-empty-fill"):"rgb(245,245,245)",thickness:t.attr("data-thickness")?parseInt(t.attr("data-thickness")):10}).on("circle-animation-progress",function(t,a,e){$(this).find("span").text(String(e.toFixed(2)).replace("0.","").replace("1.","1"))}),t.addClass("animated")}},kt)).trigger("scroll")}}if(c.progressLinear.length)for(Mt=0;Mt<c.progressLinear.length;Mt++){var Tt=$(c.progressLinear[Mt]);r.on("scroll load",$.proxy(function(){var t=$(this);if(!t.hasClass("animated-first")&&u(t)){var a=parseInt($(this).find(".progress-value").text(),10);t.find(".progress-bar-linear").css({width:a+"%"}),t.find(".progress-value").countTo({refreshInterval:40,from:0,to:a,speed:500}),t.addClass("animated-first")}},Tt))}if(c.materialParallax.length){var Mt;if(M||s||l)for(Mt=0;Mt<c.materialParallax.length;Mt++){var St=$(c.materialParallax[Mt]),Ft=St.data("parallax-img");St.css({"background-image":"url("+Ft+")","background-attachment":"fixed"})}else c.materialParallax.parallax()}})}();