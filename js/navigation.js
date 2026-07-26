document.addEventListener('DOMContentLoaded',()=>{
  const nav=document.querySelector('.site-nav'),toggle=document.querySelector('.menu-toggle'),links=document.querySelector('.nav-links');
  const setNav=()=>nav?.classList.toggle('scrolled',scrollY>30);setNav();addEventListener('scroll',setNav);toggle?.addEventListener('click',()=>links?.classList.toggle('open'));document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links?.classList.remove('open')));
  document.querySelectorAll('.brand').forEach(b=>b.innerHTML='Northline <span>Constructions</span>');
  document.querySelectorAll('.nav-cta').forEach(a=>a.textContent='Request a quote');
  document.querySelectorAll('.footer-bottom span:first-child').forEach(s=>s.textContent='© 2026 Northline Constructions.');
  const page=location.pathname.split('/').pop()||'index.html';
  const content={
    'about.html':{title:'About Northline Constructions | Road construction specialists',hero:'Engineering stronger connections.',intro:'Northline Constructions has delivered vital road and bridge infrastructure for more than three decades. Our engineers, planners and site teams work together to create routes that safely serve communities and commerce.',story:'Thirty-one years of building better routes.'},
    'services.html':{title:'Road Construction Services | Northline Constructions',hero:'Road construction, delivered.',intro:'From feasibility and earthworks to paving, drainage and maintenance, we bring the capabilities needed to deliver resilient roads.',story:'From groundworks to the final line.'},
    'projects.html':{title:'Road & Bridge Projects | Northline Constructions',hero:'Work that keeps communities moving.',intro:'Explore selected highway, bridge, paving and rehabilitation projects delivered with care for safety, programme and long-term performance.',story:'Routes made real.'},
    'sustainability.html':{title:'Sustainable Roads | Northline Constructions',hero:'Progress with a lighter footprint.',intro:'We reduce impact through material efficiency, lower-carbon asphalt, responsible drainage and long-lasting engineering.',story:'Better roads for the road ahead.'},
    'careers.html':{title:'Careers | Northline Constructions',hero:'Build the routes that matter.',intro:'Join practical problem-solvers building safer connections for communities.',story:'Find your next road forward.'},
    'news.html':{title:'News | Northline Constructions',hero:'News from the road ahead.',intro:'Project updates, engineering insight and the people shaping stronger transport networks.',story:'On the road ahead.'},
    'contact.html':{title:'Request a Quote | Northline Constructions',hero:'Let’s get your project moving.',intro:'Tell us about your road, bridge, paving or drainage project. We will bring the right expertise to the table.',story:'Request a quote.'}
  }[page];
  if(!content)return;
  document.title=content.title;
  const hero=document.querySelector('.page-hero h1');if(hero)hero.textContent=content.hero;
  const heroText=document.querySelector('.page-hero p:last-child');if(heroText)heroText.textContent=content.intro;
  const heading=document.querySelector('main h2');if(heading)heading.textContent=content.story;
  document.querySelectorAll('.text-muted-nova').forEach((p,i)=>{if(i===0)p.textContent=content.intro});
  document.querySelectorAll('a[href^="mailto:hello@northline-constructions"]').forEach(a=>{a.href='mailto:hello@northline-constructions.example';a.textContent='hello@northline-constructions.example'});
});
