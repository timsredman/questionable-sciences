/* JQS archive: entries are safely inserted as text, not HTML. */
(function(){
 const list=document.getElementById('publication-list');
 if(!list)return;
 fetch('publications.json',{cache:'no-cache'}).then(r=>{if(!r.ok)throw Error('archive unavailable');return r.json()}).then(data=>{
 list.replaceChildren();
 const entries=[...(data.articles||[])].sort((a,b)=>String(b.date).localeCompare(String(a.date))||String(b.reference).localeCompare(String(a.reference)));
 for(const p of entries){
  const article=document.createElement('article');article.className='archive-entry';
  const heading=document.createElement('h3');
  const a=document.createElement('a');a.href=p.article;a.textContent=p.title;heading.append(a);
  const meta=document.createElement('p');meta.className='muted';meta.textContent=`Volume ${p.volume}, Issue ${p.issue} · ${p.date} · ${p.reference} · ${p.discipline}`;
  const desc=document.createElement('p');desc.textContent=p.abstract||'Fictional research article.';
  const pdf=document.createElement('a');pdf.href=p.pdf;pdf.className='text-link';pdf.textContent='Download PDF ↓';
  article.append(heading,meta,desc,pdf);list.append(article);
 }
 }).catch(()=>{list.textContent='The archive is temporarily unavailable. See the featured article above.'});
})();