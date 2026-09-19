const HTML = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>DeepLi</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent}
:root{--gb:rgba(255,255,255,0.06);--gd:rgba(255,255,255,0.12);--bl:blur(24px) saturate(180%);--a1:#6366f1;--a2:#a855f7;--a3:#ec4899;--t:#f0f0f5;--td:rgba(240,240,245,0.6);--ub:rgba(99,102,241,0.18);--ab:rgba(255,255,255,0.07)}
html,body{height:100%;overflow:hidden}
body{font-family:'Vazirmatn',system-ui,sans-serif;background:#08081a;color:var(--t);position:relative}
.o{position:fixed;border-radius:50%;filter:blur(80px);opacity:.45;pointer-events:none;z-index:0}
.o1{width:420px;height:420px;background:radial-gradient(circle,#6366f1,transparent 70%);top:-120px;right:-80px;animation:f1 22s ease-in-out infinite}
.o2{width:380px;height:380px;background:radial-gradient(circle,#a855f7,transparent 70%);bottom:-100px;left:-60px;animation:f2 28s ease-in-out infinite}
.o3{width:300px;height:300px;background:radial-gradient(circle,#ec4899,transparent 70%);top:40%;left:50%;animation:f3 25s ease-in-out infinite}
.o4{width:260px;height:260px;background:radial-gradient(circle,#06b6d4,transparent 70%);top:60%;right:20%;animation:f1 30s ease-in-out infinite reverse}
@keyframes f1{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-60px,80px) scale(1.1)}}
@keyframes f2{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(80px,-60px) scale(.9)}}
@keyframes f3{0%,100%{transform:translate(-50%,-50%) scale(1)}50%{transform:translate(-30%,-70%) scale(1.15)}}
.gl{background:var(--gb);backdrop-filter:var(--bl);-webkit-backdrop-filter:var(--bl);border:1px solid var(--gd);box-shadow:0 8px 40px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.08)}
#w{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;z-index:10;transition:opacity .6s,transform .6s}
#w.h{opacity:0;transform:scale(1.05);pointer-events:none}
.wc{border-radius:32px;padding:48px 40px;max-width:420px;width:90%;text-align:center;animation:r .8s cubic-bezier(.16,1,.3,1)}
@keyframes r{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}
.lg{width:84px;height:84px;margin:0 auto 24px;border-radius:24px;background:linear-gradient(135deg,var(--a1),var(--a2),var(--a3));display:flex;align-items:center;justify-content:center;font-size:40px;box-shadow:0 0 50px rgba(99,102,241,.4);animation:p 3s ease-in-out infinite}
@keyframes p{0%,100%{box-shadow:0 0 50px rgba(99,102,241,.4)}50%{box-shadow:0 0 70px rgba(168,85,247,.5)}}
.wc h1{font-size:32px;font-weight:800;margin-bottom:8px;background:linear-gradient(135deg,#fff,rgba(255,255,255,.7));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.wc .st{font-size:15px;color:var(--td);margin-bottom:28px;line-height:1.6}
.wc input{width:100%;padding:16px 20px;border-radius:16px;border:1px solid var(--gd);background:rgba(0,0,0,.25);color:var(--t);font-family:inherit;font-size:16px;outline:none;transition:.3s;margin-bottom:20px}
.wc input::placeholder{color:rgba(255,255,255,.3)}
.wc input:focus{border-color:var(--a1);box-shadow:0 0 0 3px rgba(99,102,241,.2)}
.bp{width:100%;padding:16px;border-radius:16px;border:none;background:linear-gradient(135deg,var(--a1),var(--a2));color:#fff;font-family:inherit;font-size:16px;font-weight:600;cursor:pointer;transition:.2s;box-shadow:0 4px 20px rgba(99,102,241,.35)}
.bp:hover{transform:translateY(-2px);box-shadow:0 8px 30px rgba(99,102,241,.45)}
.bp:active{transform:translateY(0)}
#ch{position:fixed;inset:0;display:flex;flex-direction:column;z-index:5;opacity:0;pointer-events:none;transition:opacity .6s .2s}
#ch.s{opacity:1;pointer-events:auto}
.hh{padding:16px 20px;display:flex;align-items:center;gap:12px;border-bottom:1px solid var(--gd);background:rgba(8,8,26,.5);backdrop-filter:var(--bl);-webkit-backdrop-filter:var(--bl);z-index:2}
.hh .av{width:44px;height:44px;border-radius:14px;background:linear-gradient(135deg,var(--a1),var(--a2),var(--a3));display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;box-shadow:0 0 20px rgba(99,102,241,.3)}
.hh .if h2{font-size:17px;font-weight:700}
.hh .if p{font-size:12px;color:var(--td);display:flex;align-items:center;gap:6px}
.hh .if p .d{width:7px;height:7px;border-radius:50%;background:#22c55e;box-shadow:0 0 8px #22c55e}
.hh .rb{margin-right:auto;width:38px;height:38px;border-radius:12px;border:1px solid var(--gd);background:rgba(255,255,255,.05);color:var(--td);font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:.2s}
.hh .rb:hover{background:rgba(255,255,255,.1);color:var(--t)}
.ms{flex:1;overflow-y:auto;padding:20px;display:flex;flex-direction:column;gap:14px;scroll-behavior:smooth;-ms-overflow-style:none;scrollbar-width:none}
.ms::-webkit-scrollbar{display:none}
.m{max-width:82%;padding:14px 18px;border-radius:22px;font-size:15px;line-height:1.75;word-break:break-word;white-space:pre-wrap;animation:mi .4s cubic-bezier(.16,1,.3,1)}
@keyframes mi{from{opacity:0;transform:translateY(12px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}
.m.u{align-self:flex-start;background:var(--ub);border:1px solid rgba(99,102,241,.25);border-bottom-left-radius:6px}
.m.a{align-self:flex-end;background:var(--ab);border:1px solid var(--gd);border-bottom-right-radius:6px}
.m.a.st::after{content:'\u258B';animation:bk 1s steps(2) infinite;color:var(--a2)}
@keyframes bk{50%{opacity:0}}
.ty{align-self:flex-end;display:flex;gap:5px;padding:14px 18px;border-radius:22px;background:var(--ab);border:1px solid var(--gd);border-bottom-right-radius:6px}
.ty span{width:8px;height:8px;border-radius:50%;background:var(--td);animation:tp 1.4s ease-in-out infinite}
.ty span:nth-child(2){animation-delay:.2s}
.ty span:nth-child(3){animation-delay:.4s}
@keyframes tp{0%,60%,100%{transform:translateY(0);opacity:.4}30%{transform:translateY(-8px);opacity:1}}
.ib{padding:14px 16px;padding-bottom:max(14px,env(safe-area-inset-bottom));display:flex;gap:10px;align-items:flex-end;background:rgba(8,8,26,.5);backdrop-filter:var(--bl);-webkit-backdrop-filter:var(--bl);border-top:1px solid var(--gd)}
.ib textarea{flex:1;resize:none;border:1px solid var(--gd);border-radius:18px;background:rgba(0,0,0,.25);color:var(--t);font-family:inherit;font-size:15px;padding:12px 16px;max-height:120px;outline:none;transition:.3s;line-height:1.5}
.ib textarea::placeholder{color:rgba(255,255,255,.3)}
.ib textarea:focus{border-color:var(--a1);box-shadow:0 0 0 3px rgba(99,102,241,.15)}
.sb{width:46px;height:46px;border-radius:16px;border:none;background:linear-gradient(135deg,var(--a1),var(--a2));color:#fff;font-size:20px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:.2s;box-shadow:0 4px 16px rgba(99,102,241,.3)}
.sb:hover{transform:scale(1.05)}
.sb:active{transform:scale(.95)}
.sb:disabled{opacity:.4;cursor:not-allowed;transform:none}
.mb{position:fixed;bottom:8px;left:50%;transform:translateX(-50%);font-size:11px;color:rgba(255,255,255,.2);z-index:3;pointer-events:none}
</style>
</head>
<body>
<div class="o o1"></div><div class="o o2"></div><div class="o o3"></div><div class="o o4"></div>
<div id="w"><div class="gl wc"><div class="lg">🤖</div><h1>DeepLi</h1><p class="st">سلام! من DeepLi هستم 🌟<br>اسمت رو وارد کن تا شروع کنیم</p><input type="text" id="ni" placeholder="اسمت چیه؟" autocomplete="off" maxlength="30"><button class="bp" id="sb" onclick="st()">بزو بریم 🚀</button></div></div>
<div id="ch"><div class="hh"><div class="av">🤖</div><div class="if"><h2>DeepLi</h2><p><span class="d"></span> آنلاین · Gemma 4 26B</p></div><button class="rb" onclick="rs()">↻</button></div><div class="ms" id="ms"></div><div class="ib"><textarea id="mi" placeholder="پیامت رو بنویس..." rows="1" oninput="ar(this)" onkeydown="hk(event)"></textarea><button class="sb" id="sdb" onclick="sm()">➤</button></div></div>
<div class="mb">Powered by Cloudflare Workers AI · Gemma 4 26B</div>
<script>
let un='',ms=[],iss=false;
function st(){const v=document.getElementById('ni').value.trim();if(!v){document.getElementById('ni').focus();return}un=v;document.getElementById('w').classList.add('h');setTimeout(()=>{document.getElementById('ch').classList.add('s');document.getElementById('mi').focus();ms.push({role:'user',content:'سلام'});sm(true);},600);}
function rs(){ms=[];document.getElementById('ms').innerHTML='';document.getElementById('ch').classList.remove('s');document.getElementById('w').classList.remove('h');document.getElementById('ni').value='';document.getElementById('ni').focus();}
function ar(e){e.style.height='auto';e.style.height=Math.min(e.scrollHeight,120)+'px';}
function hk(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sm();}}
async function sm(ig){if(iss)return;const inp=document.getElementById('mi');const text=ig?'':inp.value.trim();if(!ig&&text==='')return;if(!ig){ms.push({role:'user',content:text});am(text,'u');inp.value='';inp.style.height='auto';}document.getElementById('sdb').disabled=true;iss=true;const ty=document.createElement('div');ty.className='ty';ty.innerHTML='<span></span><span></span><span></span>';document.getElementById('ms').appendChild(ty);sd();try{const res=await fetch('/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:un,messages:ms})});if(!res.ok)throw new Error('err');ty.remove();const b=document.createElement('div');b.className='m a st';document.getElementById('ms').appendChild(b);const rd=res.body.getReader();const dc=new TextDecoder();let ft='';while(true){const{done,value}=await rd.read();if(done)break;ft+=dc.decode(value,{stream:true});b.textContent=ft;sd();}b.classList.remove('st');ms.push({role:'assistant',content:ft});}catch(e){ty.remove();am('متأسفم، یه مشکلی پیش اومد 😔','a');}iss=false;document.getElementById('sdb').disabled=false;document.getElementById('mi').focus();}
function am(t,s){const d=document.createElement('div');d.className='m '+s;d.textContent=t;document.getElementById('ms').appendChild(d);sd();}
function sd(){const m=document.getElementById('ms');m.scrollTop=m.scrollHeight;}
document.getElementById('ni').addEventListener('keydown',e=>{if(e.key==='Enter')st();});
</script>
</body>
</html>`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/') {
      return new Response(HTML, { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-cache' } });
    }
    if (url.pathname === '/chat' && request.method === 'POST') {
      try {
        const { name, messages } = await request.json();
        const sys = 'You are DeepLi, a friendly AI assistant. The user\'s name is ' + (name||'Friend') + '. Address them by name. Be warm, helpful, concise. Respond in the same language the user uses. Use emojis occasionally.';
        const all = [{ role:'system', content: sys }, ...(messages||[]).map(m=>({ role:m.role==='assistant'?'assistant':'user', content:m.content }))];
        const ai = await env.AI.run('@cf/google/gemma-4-26b-a4b-it', { messages: all, stream: true, max_tokens: 1024 });
        return new Response(ai, { headers: { 'Content-Type':'text/plain; charset=utf-8', 'Cache-Control':'no-cache' } });
      } catch(e) {
        return new Response(JSON.stringify({error:e.message}), { status:500, headers:{'Content-Type':'application/json'} });
      }
    }
    return new Response('Not found', { status:404 });
  }
};
