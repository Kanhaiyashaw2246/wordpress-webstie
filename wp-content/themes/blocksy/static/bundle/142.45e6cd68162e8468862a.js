"use strict";(self.blocksyJsonP=self.blocksyJsonP||[]).push([[142],{142:function(t,e,n){n.r(e),n.d(e,{handleUpdate:function(){return m},mountMenuLevel:function(){return u}});var i=n(846),s=n(257);const r=function(){return"rtl"===document.querySelector("html").dir},c=function(t){return t.classList.contains("animated-submenu")&&(!t.parentNode.classList.contains("menu")||-1===t.className.indexOf("ct-mega-menu")&&t.parentNode.classList.contains("menu"))};const a=function(t){const e=function(t,e){for(var n=[];t.parentNode;)t.parentNode&&t.parentNode.matches&&t.parentNode.matches(e)&&n.push(t.parentNode),t=t.parentNode;return n[n.length-1]}(t,"li.menu-item");return e&&e.querySelector(".sub-menu .sub-menu .sub-menu")?e.getBoundingClientRect().left>innerWidth/2?"left":"right":r()?"left":"right"},o=function(t){const e=t.target.closest("li");e.classList.add("ct-active");let n=[...e.children].find((function(t){return t.matches(".ct-toggle-dropdown-desktop-ghost")}));n||(n=e.firstElementChild),n&&(n.setAttribute("aria-expanded","true"),"button"===n.tagName.toLowerCase()&&n.setAttribute("aria-label",ct_localizations.collapse_submenu)),d({target:e})},l=function(t){if(!t.target)return;const e=t.target.closest("li");e.classList.remove("ct-active");let n=[...e.children].find((function(t){return t.matches(".ct-toggle-dropdown-desktop-ghost")}));n||(n=e.firstElementChild),n&&(n.setAttribute("aria-expanded","false"),"button"===n.tagName.toLowerCase()&&n.setAttribute("aria-label",ct_localizations.expand_submenu),t.focusOnIndicator&&n.focus({focusVisible:!0})),setTimeout((function(){[...e.querySelectorAll("[data-submenu]")].map((function(t){t.removeAttribute("data-submenu")})),[...e.querySelectorAll(".ct-active")].map((function(t){t.classList.remove("ct-active")}))}),30)},u=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};[...t.children].filter((function(t){return t.matches(".menu-item-has-children, .page_item_has_children")})).map((function(t){if(t.classList.contains("ct-mega-menu-custom-width")){const e=t.querySelector(".sub-menu"),n=t.getBoundingClientRect(),i=e.getBoundingClientRect();if(!(n.left+n.width/2>i.width/2&&innerWidth-(n.left+n.width/2)>i.width/2)){const s=a(e);let r=0,c=15;"right"===s&&(r=-1*Math.round(n.left-(innerWidth-i.width)+c)+"px",n.left+n.width/2>i.width/2||(r=-1*Math.round(n.left-c)+"px")),"left"===s&&(r=-1*Math.round(innerWidth-n.right-c)+"px"),t.dataset.submenu=s,e.style.setProperty("--theme-submenu-inline-offset",r)}}c(t)&&function(t,e){let{startPosition:n="end"}=e;const i=t.querySelector(".sub-menu"),s=a(i),{left:r,width:c,right:o}=i.getBoundingClientRect();let l=s,u=t.getBoundingClientRect();"left"===s&&("end"===n?u.left:u.right)-c<0&&(l="right");"right"===s&&("end"===n?u.right:u.left)+c>innerWidth&&(l="left");t.dataset.submenu=l,t.addEventListener("click",(function(){}))}(t,e);let n=[...t.children].find((function(t){return t.matches(".ct-toggle-dropdown-desktop-ghost")})),r=t.matches('[data-interaction*="click"] *');if(t.hasFocusEventListener||(t.hasFocusEventListener=!0,t.addEventListener("keydown",(function(e){27==e.keyCode&&l({target:t.firstElementChild,focusOnIndicator:!0})})),t.addEventListener("focusout",(function(e){t.contains(e.relatedTarget)||l({target:t.firstElementChild})}))),r||(t.addEventListener("mouseenter",(function(e){(0,s.O)()?o({target:t.firstElementChild}):requestAnimationFrame((function(){o({target:t.firstElementChild})})),t.parentNode.classList.contains(".sub-menu")||[...t.parentNode.children].filter((function(e){return e!==t})).map((function(t){l({target:t.firstElementChild})})),e.target.closest("li").addEventListener("mouseleave",(function(){l({target:t.firstElementChild})}),{once:!0})})),(0,i.b)()&&t.addEventListener("click",(function(e){t.classList.contains("ct-active")||e.preventDefault()}))),r){let e=t.matches('[data-interaction*="item"] *')?t.firstElementChild:t.firstElementChild.querySelector(".ct-toggle-dropdown-desktop");e.hasEventListener||(e.hasEventListener=!0,e.addEventListener("click",(function(e){e.preventDefault(),e.target.closest("li").classList.contains("ct-active")?l(e):(o(e),(0,s.O)()&&e.target.closest("li").addEventListener("mouseleave",(function(){l({target:t.firstElementChild})}),{once:!0}),e.target.hasDocumentListener||(e.target.hasDocumentListener=!0,setTimeout((function(){document.addEventListener("click",(function(t){e.target.closest("li").contains(t.target)||l(e)}))}))))})))}n&&!n.hasEventListener&&(n.hasEventListener=!0,n.addEventListener("click",(function(t){t.target.closest("li").classList.contains("ct-active")?l(t):o(t)})))}))},d=function(t){let{target:e}=t;if(e.matches(".menu-item-has-children, .page_item_has_children")||(e=e.closest(".menu-item-has-children, .page_item_has_children")),e.parentNode.classList.contains("menu")&&e.className.indexOf("ct-mega-menu")>-1&&-1===e.className.indexOf("ct-mega-menu-custom-width")&&window.wp&&wp&&wp.customize&&wp.customize("active_theme")){e.querySelector(".sub-menu").style.left=Math.round(e.closest('[class*="ct-container"]').firstElementChild.getBoundingClientRect().x)-Math.round(e.closest("nav").getBoundingClientRect().x)+"px"}if(!c(e))return;const n=e.querySelector(".sub-menu");u(n),n.closest('[data-interaction="hover"]')&&n.parentNode.addEventListener("mouseleave",(function(){[...n.children].filter((function(t){return c(t)})).map((function(t){return t.removeAttribute("data-submenu")}))}),{once:!0})},m=function(t){t.parentNode||(t=document.querySelector(`[class="${t.className}"]`)),t&&(t.querySelector(".menu-item-has-children")||t.querySelector(".page_item_has_children"))&&t.closest('[data-interaction="hover"]')&&(t.removeEventListener("mouseenter",d),t.addEventListener("mouseenter",d))}}}]);