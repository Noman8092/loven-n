(() => {
        const $ = s => document.querySelector(s),
            S = SITE,
            F = S.final;
        const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
        const el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e };
        const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
        const fmt = t => isFinite(t) ? Math.floor(t / 60) + ':' + String(Math.floor(t % 60)).padStart(2, '0') : '0:00';
        const store = (k, v) => { try { return v === undefined ? localStorage.getItem(k) : localStorage.setItem(k, v) } catch (e) {} };
        /* welcome */
        const hs = $('#welcome');
        for (let i = 0; !reduce && i < 12; i++) {
            const s = el('span', 'fh', '💗');
            s.style.cssText = `left:${Math.random()*100}%;font-size:${14+Math.random()*18}px;animation-duration:${8+Math.random()*8}s;animation-delay:${-Math.random()*10}s`;
            hs.appendChild(s)
        }
        requestAnimationFrame(() => $('#ld').style.width = '100%');
        /* petals */
        for (let i = 0; !reduce && i < (innerWidth < 600 ? 8 : 14); i++) {
            const p = el('i', 'petal');
            p.style.cssText = `left:${Math.random()*100}%;animation-duration:${12+Math.random()*12}s;animation-delay:${-Math.random()*20}s;scale:${.7+Math.random()*.8}`;
            $('#petals').appendChild(p)
        }
        /* content */
        $('#pm').textContent = S.promiseMain;
        $('#ft').textContent = F.title;
        $('#fm').textContent = F.message;
        $('#fb').textContent = F.button;
        $('#rt').textContent = F.revealTitle;
        $('#rx').textContent = F.revealText;
        $('#cl').textContent = F.closing;
        /* reasons */
        let opened = 0;
        const total = S.reasons.length;
        S.reasons.forEach((t, i) => {
            const c = el('button', 'card', `<div class="in"><span class="fr">${i+1}<small aria-hidden="true">💗</small></span><span class="bk">${esc(t)}</span></div>`);
            c.setAttribute('aria-label', 'Reason ' + (i + 1) + ', tap to reveal');
            c.onclick = () => {
                if (c.classList.contains('flip')) return c.classList.remove('flip');
                c.classList.add('flip');
                if (!c.dataset.s) {
                    c.dataset.s = 1;
                    opened++;
                    $('#prog').textContent = opened + ' / ' + total + ' khule';
                    if (opened === total) {
                        $('#f25').textContent = S.reasonsFinal;
                        $('#f25').classList.add('show');
                        burst(70)
                    }
                }
            };
            $('#cards').appendChild(c)
        });
        $('#prog').textContent = '0 / ' + total + ' khule';
        /* timeline */
        S.timeline.forEach(m => { const d = el('div', 'ms rv', `<span class="dot" aria-hidden="true">${m.icon}</span><div class="bx glass"><time>${esc(m.date)}</time><h3>${esc(m.title)}</h3><p>${esc(m.text)}</p>${m.photo?`<img src="${esc(m.photo)}" alt="${esc(m.title)}" loading="lazy" decoding="async">`:''}</div>`);$('#tl').appendChild(d)});
/* promises */
S.promises.forEach(p=>$('#pr').appendChild(el('div','pc glass rv',`<i aria-hidden="true">💗</i><p class="serif" style="font-family:var(--serif)">${esc(p)}</p>`)));
/* open when */
const dlg=$('#dlg');
S.openWhen.forEach(o=>{const b=el('button','oe rv',`<span aria-hidden="true">${o.icon}</span>${esc(o.title)}`);
b.onclick=()=>{$('#dt').textContent=o.title;$('#dx').textContent=o.text;dlg.showModal?dlg.showModal():dlg.setAttribute('open','')};$('#ow').appendChild(b)});
const closeD=()=>dlg.close?dlg.close():dlg.removeAttribute('open');
$('#dc').onclick=closeD;dlg.addEventListener('click',e=>{if(e.target===dlg)closeD()});
/* gallery + lightbox */
const lb=$('#lb'),lbi=lb.querySelector('img'),lbc=lb.querySelector('p');let cur=0,tm=null;
S.photos.forEach((p,i)=>{const b=el('button','pol rv');
 b.innerHTML=(p.src?`<img src="${esc(p.src)}" alt="${esc(p.cap)}" loading="lazy" decoding="async" width="400" height="400" onerror="this.outerHTML='<div class=ph>Photo nahi mili:<br>${esc(p.src)}</div>'">`:'<div class="ph">Apni photo yahan lagao</div>')+`<p>${esc(p.cap)}${p.date?` <small>· ${esc(p.date)}</small>`:''}</p>`;
 b.setAttribute('aria-label','Photo kholo: '+p.cap);b.onclick=()=>show(i,true);$('#gal').appendChild(b)});
function show(i,open){cur=(i+S.photos.length)%S.photos.length;const p=S.photos[cur];lbi.src=p.src||'';lbi.alt=p.cap;lbc.textContent=p.cap+(p.date?' · '+p.date:'');if(open){lb.classList.add('show');$('#lbx').focus()}}
function stop(){clearInterval(tm);tm=null;$('#lbs').textContent='▶ Slideshow';$('#slideBtn').textContent='▶ Slideshow chalao'}
function toggleShow(){if(tm)return stop();if(!lb.classList.contains('show'))show(0,true);tm=setInterval(()=>show(cur+1),3500);$('#lbs').textContent='⏸ Roko';$('#slideBtn').textContent='⏸ Slideshow roko'}
$('#lbn').onclick=()=>show(cur+1);$('#lbp').onclick=()=>show(cur-1);$('#lbs').onclick=toggleShow;$('#slideBtn').onclick=toggleShow;
$('#lbx').onclick=()=>{lb.classList.remove('show');stop()};
lb.addEventListener('click',e=>{if(e.target===lb)$('#lbx').click()});
let sx=0;lb.addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});
lb.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>50)show(cur+(d<0?1:-1))});
addEventListener('keydown',e=>{if(!lb.classList.contains('show'))return;if(e.key==='Escape')$('#lbx').click();if(e.key==='ArrowRight')show(cur+1);if(e.key==='ArrowLeft')show(cur-1)});
/* letter */
let typed=false,typer=null;
$('#openLetter').onclick=()=>{$('#env').classList.add('open');$('#paper').classList.add('show');$('#openLetter').style.display='none';heartsFrom($('#env'));
 if(typed)return;typed=true;const t=S.letter,box=$('#ltxt');
 if(reduce){box.textContent=t;return}
 let i=0;box.classList.add('typing');
 const done=()=>{clearInterval(typer);box.textContent=t;box.classList.remove('typing')};
 typer=setInterval(()=>{box.textContent=t.slice(0,++i);if(i>=t.length)done()},45);
 box.onclick=done};
/* players */
function bind(a,pb,bar,tmEl){
 pb.onclick=()=>a.paused?a.play().catch(()=>{}):a.pause();
 a.onplay=()=>{pb.textContent='⏸';pb.classList.add('playing')};a.onpause=()=>{pb.textContent='▶';pb.classList.remove('playing')};
 const up=()=>{bar.value=a.duration?a.currentTime/a.duration*100:0;tmEl.textContent=fmt(a.currentTime)+' / '+fmt(a.duration)};
 a.ontimeupdate=up;a.onloadedmetadata=up;bar.oninput=()=>{if(a.duration)a.currentTime=bar.value/100*a.duration}}
const va=$('#vaud');
if(S.voice.src){va.src=S.voice.src;bind(va,$('#vpb'),$('#vbar'),$('#vtm'));va.onerror=()=>$('#vnote').textContent='Voice file nahi mili. content.js mein path check karo.';$('#vnote').textContent='Sirf apni recording lagao.'}
else{$('#vpb').disabled=true;$('#vbar').disabled=true;$('#vnote').textContent='Yahan apni voice recording lagao: content.js mein voice.src set karo (jaise "voice.mp3").'}
const ma=$('#maud'),dock=$('#dock');
if(S.music.src){ma.src=S.music.src;$('#mt').textContent=S.music.title;$('#ma').textContent=S.music.artist;bind(ma,$('#mpb'),$('#mbar'),$('#mtm'));
 ma.volume=.7;$('#vol').oninput=e=>{ma.volume=e.target.value;ma.muted=false;$('#mm').textContent=ma.volume?'🔊':'🔇'};
 $('#mm').onclick=()=>{ma.muted=!ma.muted;$('#mm').textContent=ma.muted?'🔇':'🔊'};
 $('#mx').onclick=()=>{const b=dock.classList.toggle('big');$('#mx').setAttribute('aria-expanded',b);$('#mx').textContent=b?'⌄':'⌃'};
 ma.onerror=()=>{$('#ma').textContent='Music file nahi mili'}}
/* enter (music only starts after this click) */
$('#enter').onclick=()=>{hs.classList.add('gone');setTimeout(()=>hs.remove(),1200);burst(40);
 if(S.music.src){dock.classList.add('on');ma.play().catch(()=>{})}};
/* nav */
const links=$('#links'),bg=$('#burger');
bg.onclick=()=>{const o=links.classList.toggle('open');bg.setAttribute('aria-expanded',o);bg.textContent=o?'✕':'☰'};
links.addEventListener('click',e=>{if(e.target.tagName==='A'){links.classList.remove('open');bg.textContent='☰';bg.setAttribute('aria-expanded',false)}});
const act=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)document.querySelectorAll('#links a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('main section').forEach(s=>act.observe(s));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(x=>io.observe(x));
addEventListener('scroll',()=>$('#up').classList.toggle('v',scrollY>600),{passive:true});
$('#up').onclick=()=>scrollTo({top:0,behavior:reduce?'auto':'smooth'});
/* confetti: hearts + petals on canvas */
const cv=$('#fx'),cx=cv.getContext('2d');let ps=[],raf=0;
const size=()=>{cv.width=innerWidth;cv.height=innerHeight};size();addEventListener('resize',size);
const cols=['#e8a5b4','#b76e79','#c9a45c','#fff','#f9dfe3'];
function burst(n,x,y){if(reduce)return;x=x??innerWidth/2;y=y??innerHeight*.6;
 for(let i=0;i<n;i++)ps.push({x,y,vx:(Math.random()-.5)*14,vy:-Math.random()*14-3,s:12+Math.random()*14,c:cols[i%5],a:1,h:i%3!==0});
 if(!raf)loop()}
function loop(){cx.clearRect(0,0,cv.width,cv.height);ps=ps.filter(p=>p.a>0&&p.y<cv.height+40);
 ps.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.3;p.vx*=.99;p.a-=.006;cx.globalAlpha=Math.max(p.a,0);cx.fillStyle=p.c;cx.font=p.s+'px serif';cx.fillText(p.h?'♥':'❀',p.x,p.y)});
 if(ps.length)raf=requestAnimationFrame(loop);else{raf=0;cx.clearRect(0,0,cv.width,cv.height)}}
function heartsFrom(e){const r=e.getBoundingClientRect();burst(24,r.left+r.width/2,r.top+r.height/2)}
/* final */
$('#fb').onclick=()=>{$('#reveal').classList.add('show');$('#fb').style.display='none';burst(120);setTimeout(()=>burst(90),500);setTimeout(()=>burst(90),1100);
 setTimeout(()=>$('#reveal').scrollIntoView({behavior:reduce?'auto':'smooth',block:'center'}),400)};
})();