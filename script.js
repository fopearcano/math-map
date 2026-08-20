const domains = [
  {id:'fondamenti',name:'Fondamenti',symbol:'∴',desc:'Le regole del ragionamento e le strutture su cui si costruisce ogni teoria.',concepts:[['Logica','⊢'],['Insiemi','∈'],['Dimostrazione','Q.E.D.'],['Teoria dei modelli','⊨'],['Categorie','→'],['Computabilità','λ']]},
  {id:'numeri',name:'Numeri',symbol:'ℕ',desc:'Dall’atto del contare alle strutture aritmetiche più profonde.',concepts:[['Naturali','ℕ'],['Interi','ℤ'],['Razionali','ℚ'],['Reali','ℝ'],['Complessi','ℂ'],['Primi','p'],['Teoria dei numeri','mod']]},
  {id:'algebra',name:'Algebra',symbol:'x',desc:'Il linguaggio delle operazioni, delle simmetrie e delle strutture astratte.',concepts:[['Equazioni','='],['Polinomi','P(x)'],['Gruppi','G'],['Anelli','R'],['Campi','𝔽'],['Algebra lineare','Ax'],['Galois','Gal']]},
  {id:'geometria',name:'Geometria',symbol:'△',desc:'Lo studio della forma, dello spazio, delle distanze e delle trasformazioni.',concepts:[['Euclidea','∠'],['Analitica','xy'],['Proiettiva','ℙ'],['Differenziale','κ'],['Topologia','≃'],['Varietà','M'],['Frattali','⌁']]},
  {id:'analisi',name:'Analisi',symbol:'∫',desc:'Limiti, variazioni e processi continui: la matematica del cambiamento.',concepts:[['Limiti','lim'],['Derivate','d/dx'],['Integrali','∫'],['Serie','Σ'],['Equazioni differenziali','∂'],['Analisi complessa','ℂ'],['Analisi funzionale','‖·‖']]},
  {id:'probabilita',name:'Probabilità',symbol:'P',desc:'Gli strumenti per misurare l’incertezza e inferire regolarità dai dati.',concepts:[['Combinatoria','n!'],['Variabili casuali','X'],['Distribuzioni','μ'],['Statistica','x̄'],['Inferenza','P(θ|x)'],['Processi stocastici','Wₜ'],['Informazione','H(X)']]},
  {id:'applicata',name:'Mat. Applicata',symbol:'⚙',desc:'Modelli e metodi matematici per comprendere e progettare il mondo reale.',concepts:[['Ottimizzazione','min'],['Analisi numerica','≈'],['Dinamica','ẋ'],['Controllo','u(t)'],['Ricerca operativa','argmin'],['Finanza','E[R]'],['Fisica matematica','ℏ']]},
  {id:'frontiere',name:'Frontiere',symbol:'∞',desc:'Territori contemporanei in cui nuove connessioni stanno ancora emergendo.',concepts:[['Caos','λ'],['Reti complesse','⎇'],['Crittografia','🔑'],['Machine learning','∇L'],['Teoria dei giochi','N'],['Matematica quantistica','|ψ⟩'],['Problemi aperti','?']]}
];
let selected='all', zoom=1;
const allNodes=domains.flatMap(d=>[{name:d.name,symbol:d.symbol,domain:d.id,isDomain:true,desc:d.desc},...d.concepts.map(c=>({name:c[0],symbol:c[1],domain:d.id,desc:`${c[0]} è un nodo fondamentale del dominio ${d.name.toLowerCase()}, con legami che attraversano l’intero atlante matematico.`}))]);
const tabs=document.getElementById('domainTabs'), map=document.getElementById('knowledgeMap');
tabs.innerHTML=`<button class="domain-tab active" data-domain="all">Tutti</button>`+domains.map(d=>`<button class="domain-tab" data-domain="${d.id}">${d.name}</button>`).join('');

function render(){
  const shown=selected==='all'?domains:domains.filter(d=>d.id===selected);
  let nodes=[], lines=[];
  if(selected==='all'){
    const center={x:50,y:50};
    shown.forEach((d,i)=>{const a=(i/8)*Math.PI*2-Math.PI/2,x=50+32*Math.cos(a),y=50+34*Math.sin(a);nodes.push({...allNodes.find(n=>n.domain===d.id&&n.isDomain),x,y});lines.push([center.x,center.y,x,y]);const c=d.concepts[i%d.concepts.length];const cx=50+43*Math.cos(a),cy=50+43*Math.sin(a);nodes.push({...allNodes.find(n=>n.name===c[0]),x:cx,y:cy});lines.push([x,y,cx,cy])});nodes.push({name:'Matematica',symbol:'∞',domain:'all',isDomain:true,desc:'La scienza delle strutture, delle quantità, dello spazio e del cambiamento.',x:50,y:50});
  } else {
    const d=shown[0], center={x:50,y:50};nodes.push({...allNodes.find(n=>n.domain===d.id&&n.isDomain),...center});d.concepts.forEach((c,i)=>{const a=(i/d.concepts.length)*Math.PI*2-Math.PI/2,x=50+34*Math.cos(a),y=50+35*Math.sin(a);nodes.push({...allNodes.find(n=>n.name===c[0]&&n.domain===d.id),x,y});lines.push([50,50,x,y])});
  }
  map.innerHTML=`<svg class="edge-layer">${lines.map(l=>`<line x1="${l[0]}%" y1="${l[1]}%" x2="${l[2]}%" y2="${l[3]}%"/>`).join('')}</svg>`+nodes.map((n,i)=>`<button class="node ${n.isDomain?'domain':''}" style="left:${n.x}%;top:${n.y}%" data-index="${i}"><span><span class="symbol">${n.symbol}</span><span class="name">${n.name}</span></span></button>`).join('');
  map.querySelectorAll('.node').forEach((el,i)=>el.onclick=()=>openDetail(nodes[i]));
  document.getElementById('mapCaption').textContent=selected==='all'?'PANORAMICA · TUTTI I DOMINI':`DOMINIO · ${shown[0].name.toUpperCase()}`;
}
function openDetail(n){const dlg=document.getElementById('detailDialog');document.getElementById('dialogDomain').textContent=n.isDomain?'GRANDE DOMINIO':domains.find(d=>d.id===n.domain)?.name||'ATLANTE';document.getElementById('dialogSymbol').textContent=n.symbol;document.getElementById('dialogTitle').textContent=n.name;document.getElementById('dialogDescription').textContent=n.desc;const related=allNodes.filter(x=>x.domain===n.domain&&x.name!==n.name).slice(0,4);document.getElementById('dialogConnections').innerHTML=related.map(x=>`<button>${x.symbol} ${x.name}</button>`).join('');dlg.showModal()}
tabs.onclick=e=>{const b=e.target.closest('.domain-tab');if(!b)return;selected=b.dataset.domain;tabs.querySelectorAll('button').forEach(x=>x.classList.toggle('active',x===b));zoom=1;map.style.transform='scale(1)';render()};
document.getElementById('searchInput').oninput=e=>{const q=e.target.value.toLowerCase().trim();map.querySelectorAll('.node').forEach(n=>n.classList.toggle('hidden',q&&!n.textContent.toLowerCase().includes(q)))};
document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key==='k'){e.preventDefault();document.getElementById('searchInput').focus()}if(e.key==='Escape')document.querySelectorAll('dialog[open]').forEach(d=>d.close())});
document.querySelectorAll('.view-switch button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.view-switch button').forEach(x=>x.classList.toggle('active',x===b));document.getElementById('mapShell').classList.toggle('list-mode',b.dataset.layout==='list')});
document.getElementById('zoomIn').onclick=()=>{zoom=Math.min(1.6,zoom+.15);map.style.transform=`scale(${zoom})`};document.getElementById('zoomOut').onclick=()=>{zoom=Math.max(.7,zoom-.15);map.style.transform=`scale(${zoom})`};document.getElementById('resetZoom').onclick=()=>{zoom=1;map.style.transform='scale(1)'};
document.querySelectorAll('.dialog-close').forEach(b=>b.onclick=()=>b.closest('dialog').close());document.getElementById('aboutBtn').onclick=()=>document.getElementById('aboutDialog').showModal();
document.getElementById('conceptCount').textContent=allNodes.length;render();
