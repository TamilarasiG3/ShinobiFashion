var $=function(s){return document.querySelector(s)},esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})};
var cat="All";
function tee(p){if(p.img)return '<img loading="lazy" alt="'+esc(p.name)+'" src="'+esc(p.img)+'">';return '<svg viewBox="0 0 100 100" role="img" aria-label="'+esc(p.name)+'"><path d="M30 12L8 30l12 14 8-6v52h44V38l8 6 12-14L70 12Q50 26 30 12z" fill="'+(p.c||'#123B70')+'" stroke="#1677FF" stroke-width="2"/><text x="50" y="60" text-anchor="middle" font-size="'+((p.n||'').length>8?9:13)+'" fill="'+(p.c==='#c9d1df'?'#080A10':'#fff')+'" font-family="Bebas Neue,Impact,sans-serif">'+esc(p.n||p.char)+'</text><text x="50" y="72" text-anchor="middle" font-size="7" fill="'+(p.c==='#c9d1df'?'#123B70':'#9cc6ff')+'" font-family="Inter,sans-serif">'+esc(p.anime==='Other Anime'?'ANIME TEE':p.anime.toUpperCase())+'</text></svg>'}
var CH={"Naruto":["Naruto","Kakashi","Itachi","Sasuke"],"One Piece":["Luffy","Zoro","Ace","Sanji"],"Dragon Ball":["Goku","Vegeta","Gohan","Piccolo"],"Demon Slayer":["Tanjiro","Nezuko","Zenitsu","Rengoku"],"Jujutsu Kaisen":["Gojo","Itadori","Sukuna","Megumi"],"Attack on Titan":["Eren","Levi","Mikasa","Armin"],"Solo Leveling":["Sung Jin-Woo","Igris","Cha Hae-In"],"Death Note":["Light","L","Ryuk","Misa"],"Other Anime":[]};
var V;try{V=JSON.parse(localStorage.getItem("sf-vote")||"null")}catch(e){V=null}V=V||{pick:null,others:[]};
function save(){try{localStorage.setItem("sf-vote",JSON.stringify(V))}catch(e){}}
function vote(){
$("#cats").innerHTML=CATS.map(function(c){var n=c[0],oth=n==="Other Anime",list=CH[n].concat(oth?V.others:[]);
return '<div class="cat vote"><div class="k" aria-hidden="true">'+c[1]+'</div><h3>'+n+'</h3><div>'+list.map(function(x){var on=!!V.pick&&V.pick.a===n&&V.pick.c===x;return '<button class="chip" data-a="'+esc(n)+'" data-c="'+esc(x)+'" aria-pressed="'+on+'">'+esc(x)+'</button>'}).join("")+'</div>'+(oth?'<form id="oth" style="margin-top:10px;display:flex;gap:6px"><input id="othin" maxlength="40" placeholder="Character name" aria-label="Add a character" style="flex:1;min-width:0;padding:8px 10px"><button class="btn" style="padding:8px 14px">Add</button></form>':'')+'</div>'}).join("");
}
function price(p){return p.price==null?"Price on store page":"₹"+p.price}
function card(p){return '<article class="card"><div class="img">'+tee(p)+'</div><div class="body"><span class="tag">'+esc(p.anime)+' · '+esc(p.char)+'</span><h3>'+esc(p.name)+'</h3><span class="price">'+price(p)+'</span><span>'+esc(p.desc)+'</span><div class="two"><a class="btn" target="_blank" rel="sponsored noopener" href="'+esc(p.url)+'">Buy on blog</a><a class="btn ghost" target="_blank" rel="noopener" href="https://in.pinterest.com/shinobifashion_/">Pinterest</a></div></div></article>'}
function socHTML(){return SOCIAL.map(function(s){return s.u?'<a target="_blank" rel="noopener" href="'+s.u+'" aria-label="'+s.n+'">'+s.s+'</a>':'<a href="#community" aria-label="'+s.n+' (link coming soon)" title="YouTube link coming soon">'+s.s+'</a>'}).join("")}
function init(){
vote();
$("#trend").innerHTML=PRODUCTS.map(card).join("");
$("#posts").innerHTML=POSTS.slice(0,6).map(function(b){return '<article class="card"><div class="body"><span class="tag">'+b.dt+'</span><h3>'+esc(b.t)+'</h3><p class="clamp">'+esc(b.d)+'</p><a class="btn" target="_blank" rel="noopener" href="'+b.u+'">Read more</a></div></article>'}).join("");
$("#blogposts").innerHTML=POSTS.map(function(b){return '<article class="card"><div class="body"><span class="tag">'+b.dt+'</span><h3>'+esc(b.t)+'</h3><span>'+esc(b.d)+'</span><a class="btn" target="_blank" rel="noopener" href="'+b.u+'">Read more</a></div></article>'}).join("");
var mqt=CATS.map(function(c){return c[0].toUpperCase()}).join(" 忍 ")+" 忍 ";$("#mq").textContent=mqt+mqt+mqt+mqt;
for(var i=0;i<26;i++){var s=document.createElement("span");s.style.left=Math.random()*100+"%";s.style.animationDuration=(6+Math.random()*8)+"s";s.style.animationDelay=(-Math.random()*10)+"s";document.querySelector(".parts").appendChild(s)}
if("IntersectionObserver" in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.1});document.querySelectorAll(".cat,#trend .card,#posts .card,.vibes div").forEach(function(el,i){el.classList.add("rv");el.style.transitionDelay=(i%4)*80+"ms";io.observe(el)})}
document.querySelectorAll("[data-soc]").forEach(function(e){e.innerHTML=socHTML()});
$("#commgrid").innerHTML=SOCIAL.map(function(s){return '<div class="card"><div class="body"><h3>'+s.n+'</h3><span>'+s.d+'</span>'+(s.u?'<a class="btn" target="_blank" rel="noopener" href="'+s.u+'">Open '+s.n+'</a>':'<span class="btn" aria-disabled="true">Link coming soon</span>')+'</div></div>'}).join("");

document.body.addEventListener("click",function(e){var c=e.target.closest(".chip");if(!c)return;var a=c.dataset.a,n=c.dataset.c;V.pick=(V.pick&&V.pick.a===a&&V.pick.c===n)?null:{a:a,c:n};save();vote();var b=document.querySelector('.chip[aria-pressed="true"]');if(b)b.focus()});
document.body.addEventListener("submit",function(e){if(e.target.id!=="oth")return;e.preventDefault();var v=$("#othin").value.trim();if(!v)return;if(V.others.indexOf(v)<0)V.others.push(v);V.pick={a:"Other Anime",c:v};save();vote()});
}

document.body.addEventListener("submit",function(e){if(e.target.id!=="cf")return;e.preventDefault();var f=e.target,m=f.elements.ms.value.trim();if(!m)return;var a=$("#mt");a.href="mailto:shinobifashionbrand@gmail.com?subject="+encodeURIComponent("ShinobiFashion: "+f.elements.tp.value)+"&body="+encodeURIComponent(m+"\n\nFrom: "+f.elements.nm.value.trim());a.click();$("#cfnote").textContent="Your email app should open with the message ready to send."});
function route(){
var h=(location.hash||"#home").slice(1),pg=h;if(h==="trending")pg="home";
if(!$("#p-"+pg))pg="home";
document.querySelectorAll(".page").forEach(function(p){p.classList.toggle("on",p.id==="p-"+pg)});
document.querySelectorAll("#links a").forEach(function(a){a.classList.toggle("on",a.dataset.p===pg)});
var t={home:"ShinobiFashion – Anime Clothing Finds",shop:"Anime Shop – ShinobiFashion",blog:"Blog – ShinobiFashion",about:"About – ShinobiFashion",community:"Community – ShinobiFashion",contact:"Contact – ShinobiFashion"};
document.title=t[pg]||"ShinobiFashion";
$("#links").classList.remove("open");$("#menu").setAttribute("aria-expanded","false");
if(h==="trending"){var tr=document.getElementById("trending");if(tr)tr.scrollIntoView()}else window.scrollTo(0,0);
}
init();addEventListener("hashchange",route);route();
$("#menu").onclick=function(){var o=$("#links").classList.toggle("open");this.setAttribute("aria-expanded",o)};
$("#top").onclick=function(){scrollTo({top:0})};
addEventListener("scroll",function(){$("#top").classList.toggle("show",scrollY>500)},{passive:true});
addEventListener("load",function(){setTimeout(function(){$("#loader").classList.add("off")},500)});
