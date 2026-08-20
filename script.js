const D = [
  { id: "found", name: "Fondamenti", color: "#65ff9a", nodes: [
    ["logic", "Logica formale", "Γ ⊢ φ", "Studia inferenze valide attraverso linguaggi simbolici, sintassi e semantica.", "Antichità → oggi", "Deduzione"],
    ["sets", "Teoria degli insiemi", "A ⊆ B ⇔ ∀x(x∈A ⇒ x∈B)", "Fornisce un linguaggio fondazionale per oggetti, collezioni, relazioni e funzioni.", "Cantor, Zermelo", "Fondazione"],
    ["proof", "Teoria della dimostrazione", "Con(T) ⇏ T ⊢ Con(T)", "Analizza le dimostrazioni come oggetti matematici e i limiti dei sistemi formali.", "Hilbert, Gentzen", "Metamatematica"],
    ["models", "Teoria dei modelli", "𝓜 ⊨ φ", "Studia il rapporto tra formule formali e strutture nelle quali risultano vere.", "Tarski", "Semantica"],
    ["category", "Teoria delle categorie", "F : 𝒞 → 𝒟", "Descrive strutture tramite oggetti, morfismi e trasformazioni naturali.", "Eilenberg–Mac Lane", "Strutture"],
    ["type", "Teoria dei tipi", "x : A ⊢ f(x) : B", "Alternativa fondazionale che associa a ogni termine un tipo e collega logica e programmi.", "Russell → HoTT", "Fondazione"],
    ["computability", "Computabilità", "φₑ(x) ↓", "Classifica i problemi risolvibili da algoritmi e quelli indecidibili.", "Turing, Church", "Algoritmi"],
    ["complexity", "Complessità", "P ?= NP", "Misura le risorse temporali e spaziali necessarie a risolvere problemi computazionali.", "XX secolo", "Calcolo"],
    ["hott", "Homotopy Type Theory", "(A = B) ≃ Equiv(A,B)", "Interpreta uguaglianze come cammini e unisce tipi, omotopia e fondamenti univalenti.", "Voevodsky", "Frontiera"]
  ]},
  { id: "number", name: "Numeri", color: "#ffca68", nodes: [
    ["natural", "Numeri naturali", "ℕ = {0,1,2,…}", "Struttura discreta del contare, descritta dagli assiomi di Peano.", "Antichità", "Aritmetica"],
    ["integer", "Numeri interi", "ℤ = {…,−1,0,1,…}", "Estendono i naturali rendendo sempre possibile la sottrazione.", "Antichità", "Aritmetica"],
    ["rational", "Numeri razionali", "ℚ = {p/q : q ≠ 0}", "Rapporti di interi; formano un campo ordinato denso ma non completo.", "Antichità", "Aritmetica"],
    ["real", "Numeri reali", "ℝ = completion(ℚ)", "Completano la retta numerica: ogni successione di Cauchy converge.", "Dedekind, Cantor", "Analisi"],
    ["complex", "Numeri complessi", "z = a + bi,  i² = −1", "Campo algebricamente chiuso che codifica rotazioni, onde e radici polinomiali.", "XVI secolo", "Algebra"],
    ["prime", "Numeri primi", "p | ab ⇒ p | a ∨ p | b", "Atomi moltiplicativi degli interi, centrali in aritmetica e crittografia.", "Euclide", "Teoria dei numeri"],
    ["congruence", "Aritmetica modulare", "a ≡ b (mod n)", "Studia resti e periodicità; trasforma ℤ in anelli quoziente finiti.", "Gauss", "Teoria dei numeri"],
    ["diophantine", "Equazioni diofantee", "xⁿ + yⁿ = zⁿ", "Equazioni polinomiali delle quali si cercano soluzioni intere o razionali.", "Diofanto → oggi", "Teoria dei numeri"],
    ["analyticnt", "Teoria analitica dei numeri", "ζ(s)=Σ n<sup>−s</sup>", "Usa analisi reale e complessa per studiare la distribuzione dei primi.", "Riemann", "Teoria dei numeri"]
  ]},
  { id: "algebra", name: "Algebra", color: "#f783ac", nodes: [
    ["equation", "Equazioni", "f(x) = 0", "Formalizzano l'uguaglianza tra espressioni e la ricerca dei valori che la soddisfano.", "Antichità", "Algebra elementare"],
    ["polynomial", "Polinomi", "P(x)=Σ aₖxᵏ", "Somme finite di monomi, fondamentali per approssimazione e geometria algebrica.", "Antichità", "Algebra"],
    ["linear", "Algebra lineare", "A𝐱 = 𝐛", "Studia spazi vettoriali, trasformazioni lineari, matrici e autovalori.", "XIX secolo", "Strutture"],
    ["group", "Teoria dei gruppi", "(G,·),  a·a<sup>−1</sup>=e", "Cattura il concetto di simmetria mediante un'operazione associativa e invertibile.", "Galois, Noether", "Algebra astratta"],
    ["ring", "Teoria degli anelli", "(R,+,·)", "Generalizza l'aritmetica combinando un gruppo additivo e una moltiplicazione.", "XIX secolo", "Algebra astratta"],
    ["field", "Teoria dei campi", "𝔽,  a ≠ 0 ⇒ a<sup>−1</sup>∈𝔽", "Studia sistemi numerici nei quali sono possibili le quattro operazioni.", "XIX secolo", "Algebra astratta"],
    ["galois", "Teoria di Galois", "Gal(K/F) = Aut(K/F)", "Collega radici di polinomi e gruppi di simmetria delle estensioni di campo.", "Évariste Galois", "Algebra"],
    ["representation", "Rappresentazioni", "ρ : G → GL(V)", "Traduce strutture astratte in trasformazioni lineari calcolabili.", "Frobenius", "Algebra"],
    ["commutative", "Algebra commutativa", "Spec(R)", "Studia anelli commutativi e ideali; è il linguaggio locale della geometria algebrica.", "Noether, Grothendieck", "Algebra"]
  ]},
  { id: "geometry", name: "Geometria", color: "#69dce7", nodes: [
    ["euclid", "Geometria euclidea", "a² + b² = c²", "Studia figure e distanze nello spazio piatto a partire da assiomi.", "Euclide", "Geometria"],
    ["analyticgeo", "Geometria analitica", "x² + y² = r²", "Rappresenta forme tramite coordinate ed equazioni, unendo algebra e geometria.", "Cartesio, Fermat", "Geometria"],
    ["projective", "Geometria proiettiva", "[x:y:z] ∈ ℙ²", "Studia proprietà invarianti per proiezione e tratta i punti all'infinito.", "XVII–XIX secolo", "Geometria"],
    ["differential", "Geometria differenziale", "ds² = gᵢⱼ dxⁱdxʲ", "Usa il calcolo per studiare curve, superfici e varietà dotate di metrica.", "Gauss, Riemann", "Geometria"],
    ["topology", "Topologia", "X ≃ Y", "Studia continuità e proprietà preservate da deformazioni senza tagli o incollaggi.", "Euler → Poincaré", "Spazi"],
    ["manifold", "Varietà", "M locally ≅ ℝⁿ", "Spazi localmente euclidei che modellano configurazioni, spazio-tempo e dati.", "Riemann", "Geometria"],
    ["algebraicgeo", "Geometria algebrica", "V(I) = {x : f(x)=0 ∀f∈I}", "Studia luoghi di zeri polinomiali con strumenti algebrici e topologici.", "Descartes → Grothendieck", "Geometria"],
    ["fractal", "Geometria frattale", "dim<sub>H</sub>(X) = d", "Descrive strutture autosimili con dimensione spesso non intera.", "Mandelbrot", "Geometria"],
    ["knot", "Teoria dei nodi", "V<sub>K</sub>(t)", "Classifica immersioni di circonferenze nello spazio tramite invarianti topologici.", "XIX secolo → oggi", "Topologia"]
  ]},
  { id: "analysis", name: "Analisi", color: "#a78bfa", nodes: [
    ["limit", "Limiti", "lim<sub>x→a</sub> f(x)=L", "Formalizzano l'avvicinamento e fondano continuità, derivazione e integrazione.", "Cauchy, Weierstrass", "Analisi"],
    ["derivative", "Calcolo differenziale", "f′(x)=lim<sub>h→0</sub> [f(x+h)−f(x)]/h", "Misura variazioni istantanee, pendenze e sensibilità locale.", "Newton, Leibniz", "Calcolo"],
    ["integral", "Calcolo integrale", "∫<sub>a</sub><sup>b</sup> f(x) dx", "Aggrega quantità infinitesime e misura aree, masse e probabilità.", "Newton, Leibniz", "Calcolo"],
    ["series", "Serie infinite", "Σ<sub>n=0</sub><sup>∞</sup> aₙ", "Rappresentano quantità come somme infinite e richiedono criteri di convergenza.", "XVII secolo → oggi", "Analisi"],
    ["ode", "Equazioni differenziali ordinarie", "ẋ(t)=f(t,x)", "Modellano l'evoluzione continua di sistemi con un numero finito di variabili.", "XVII secolo → oggi", "Dinamica"],
    ["pde", "Equazioni alle derivate parziali", "∂ₜu = Δu", "Descrivono campi distribuiti: onde, calore, fluidi e fenomeni quantistici.", "Euler, Fourier", "Analisi"],
    ["complexanalysis", "Analisi complessa", "∮<sub>γ</sub> f(z) dz = 2πi Σ Res(f)", "Studia funzioni olomorfe, notevolmente rigide, e i loro integrali nel piano complesso.", "Cauchy, Riemann", "Analisi"],
    ["measure", "Teoria della misura", "μ(⋃Aₙ)=Σμ(Aₙ)", "Generalizza lunghezza, area e volume e fonda l'integrale di Lebesgue.", "Lebesgue", "Analisi"],
    ["functional", "Analisi funzionale", "T : X → Y,  ‖T‖ < ∞", "Studia spazi di funzioni infinito-dimensionali e operatori continui.", "Hilbert, Banach", "Analisi"]
  ]},
  { id: "probability", name: "Probabilità", color: "#ff8a65", nodes: [
    ["combinatorics", "Combinatoria", "C(n,k)=n!/[k!(n−k)!]", "Conta configurazioni discrete e studia strutture finite, grafi e disegni.", "Antichità → oggi", "Discreta"],
    ["probability", "Teoria della probabilità", "P(A|B)=P(A∩B)/P(B)", "Assegna misure coerenti agli eventi e formalizza l'incertezza.", "Pascal → Kolmogorov", "Probabilità"],
    ["randomvar", "Variabili casuali", "E[X]=∫ X dP", "Trasformano esiti aleatori in valori numerici analizzabili.", "XX secolo", "Probabilità"],
    ["distributions", "Distribuzioni", "X ∼ 𝒩(μ,σ²)", "Descrivono come la probabilità si ripartisce sui valori possibili.", "Gauss → oggi", "Probabilità"],
    ["statistics", "Statistica", "x̄ = (1/n)Σxᵢ", "Estrae informazione dai dati quantificando variabilità ed errore.", "XVIII secolo → oggi", "Dati"],
    ["bayes", "Inferenza bayesiana", "P(θ|x) ∝ P(x|θ)P(θ)", "Aggiorna credenze sui parametri combinando dati osservati e conoscenza precedente.", "Bayes, Laplace", "Inferenza"],
    ["stochastic", "Processi stocastici", "{Xₜ : t∈T}", "Modellano sistemi aleatori che evolvono nel tempo o nello spazio.", "XX secolo", "Probabilità"],
    ["markov", "Catene di Markov", "P(Xₙ₊₁|Xₙ,…)=P(Xₙ₊₁|Xₙ)", "Processi senza memoria usati in dinamica, simulazione e algoritmi.", "Markov", "Probabilità"],
    ["information", "Teoria dell'informazione", "H(X)=−Σ p(x)log₂p(x)", "Quantifica informazione, sorpresa e limiti della compressione e comunicazione.", "Claude Shannon", "Informazione"]
  ]},
  { id: "applied", name: "Applicata", color: "#ffe066", nodes: [
    ["optimization", "Ottimizzazione", "x* = arg min<sub>x∈X</sub> f(x)", "Cerca decisioni che minimizzano costi o massimizzano prestazioni sotto vincoli.", "Antichità → oggi", "Applicata"],
    ["numerical", "Analisi numerica", "|x−x̃| ≤ ε", "Progetta algoritmi stabili per approssimare soluzioni matematiche.", "Newton → oggi", "Calcolo"],
    ["dynamics", "Sistemi dinamici", "xₙ₊₁ = F(xₙ)", "Studiano orbite, equilibri, biforcazioni e comportamento a lungo termine.", "Poincaré → oggi", "Dinamica"],
    ["control", "Teoria del controllo", "ẋ=Ax+Bu", "Progetta ingressi che guidano sistemi dinamici verso comportamenti desiderati.", "XX secolo", "Ingegneria"],
    ["operations", "Ricerca operativa", "min cᵀx  s.t. Ax≤b", "Ottimizza allocazioni, reti, code e decisioni organizzative.", "XX secolo", "Decisioni"],
    ["game", "Teoria dei giochi", "uᵢ(sᵢ*,s₋ᵢ*) ≥ uᵢ(sᵢ,s₋ᵢ*)", "Studia decisioni strategiche di agenti con interessi interdipendenti.", "von Neumann, Nash", "Decisioni"],
    ["mathphysics", "Fisica matematica", "iℏ ∂ₜ|ψ⟩ = Ĥ|ψ⟩", "Formula teorie fisiche con strutture rigorose, dalla meccanica alla relatività.", "Newton → oggi", "Fisica"],
    ["fluid", "Fluidodinamica", "ρ(∂ₜ𝐮+𝐮·∇𝐮)=−∇p+μΔ𝐮", "Descrive il moto di liquidi e gas tramite conservazione e PDE non lineari.", "Euler, Navier–Stokes", "Fisica"],
    ["finance", "Matematica finanziaria", "dSₜ=μSₜdt+σSₜdWₜ", "Applica processi stocastici, arbitraggio e ottimizzazione a prezzi e rischio.", "Bachelier → oggi", "Finanza"]
  ]},
  { id: "frontier", name: "Frontiere", color: "#74c0fc", nodes: [
    ["graph", "Teoria dei grafi", "G=(V,E)", "Studia reti di vertici e archi: connessioni, flussi, percorsi e colorazioni.", "Euler → oggi", "Discreta"],
    ["chaos", "Teoria del caos", "|δx(t)| ≈ e<sup>λt</sup>|δx(0)|", "Analizza dinamiche deterministiche con dipendenza sensibile dalle condizioni iniziali.", "Poincaré, Lorenz", "Dinamica"],
    ["networks", "Reti complesse", "P(k) ∼ k<sup>−γ</sup>", "Studia struttura ed evoluzione di reti reali sociali, biologiche e tecnologiche.", "XXI secolo", "Interdisciplinare"],
    ["crypto", "Crittografia", "c ≡ m<sup>e</sup> (mod n)", "Protegge informazione usando problemi aritmetici e strutture algebriche.", "Antichità → oggi", "Sicurezza"],
    ["ml", "Machine learning", "θ* = arg min<sub>θ</sub> Σℓ(f<sub>θ</sub>(xᵢ),yᵢ)", "Costruisce modelli che apprendono regolarità dai dati tramite ottimizzazione.", "XX–XXI secolo", "Calcolo"],
    ["quantuminfo", "Informazione quantistica", "|ψ⟩=α|0⟩+β|1⟩", "Unisce algebra lineare, probabilità e fisica quantistica per calcolo e comunicazione.", "XX–XXI secolo", "Quantistica"],
    ["tda", "Topological data analysis", "Hₖ(X<sub>ε</sub>)", "Usa omologia persistente per rilevare forma e struttura multiscala nei dati.", "XXI secolo", "Dati"],
    ["inverse", "Problemi inversi", "y=F(x)+η ⇒ x?", "Ricostruisce cause e parametri da osservazioni indirette, spesso mal poste.", "XX secolo → oggi", "Applicata"],
    ["open", "Problemi aperti", "ζ(s)=0 ⇒ Re(s)=1/2 ?", "Questioni irrisolte che delimitano la conoscenza: Riemann, P vs NP, Navier–Stokes e altre.", "Oggi", "Ricerca"]
  ]}
];

const crossLinks = [
  ["logic","proof"],["logic","models"],["sets","topology"],["sets","probability"],["category","algebraicgeo"],["category","hott"],["type","computability"],["computability","complexity"],["complexity","open"],
  ["natural","integer"],["integer","rational"],["rational","real"],["real","complex"],["prime","congruence"],["congruence","crypto"],["diophantine","algebraicgeo"],["analyticnt","complexanalysis"],["analyticnt","open"],
  ["equation","polynomial"],["polynomial","galois"],["linear","representation"],["linear","ml"],["group","galois"],["ring","commutative"],["field","galois"],["commutative","algebraicgeo"],
  ["euclid","analyticgeo"],["analyticgeo","algebraicgeo"],["differential","manifold"],["differential","mathphysics"],["topology","manifold"],["topology","knot"],["topology","tda"],["fractal","chaos"],
  ["limit","derivative"],["derivative","integral"],["integral","measure"],["series","complexanalysis"],["ode","dynamics"],["pde","fluid"],["measure","probability"],["functional","quantuminfo"],["functional","pde"],
  ["combinatorics","graph"],["probability","randomvar"],["randomvar","distributions"],["distributions","statistics"],["statistics","bayes"],["stochastic","markov"],["stochastic","finance"],["information","quantuminfo"],["information","ml"],
  ["optimization","ml"],["optimization","operations"],["numerical","inverse"],["dynamics","chaos"],["control","ode"],["game","probability"],["mathphysics","quantuminfo"],["fluid","open"],
  ["graph","networks"],["networks","markov"],["crypto","prime"],["tda","networks"],["inverse","statistics"],["open","complexity"]
];

const nodes = [];
D.forEach((domain, di) => domain.nodes.forEach((n, ni) => {
  const angle = (di / D.length) * Math.PI * 2 - Math.PI / 2;
  const local = (ni / domain.nodes.length) * Math.PI * 2;
  const radius = 360;
  nodes.push({ id:n[0], title:n[1], equation:n[2], description:n[3], era:n[4], kind:n[5], domain:domain.id, color:domain.color,
    x: 900 + Math.cos(angle) * radius + Math.cos(local) * 150,
    y: 560 + Math.sin(angle) * radius + Math.sin(local) * 120 });
}));
const byId = new Map(nodes.map(n => [n.id, n]));
const links = [];
D.forEach(domain => {
  const ids = domain.nodes.map(n => n[0]);
  for (let i=0; i<ids.length; i++) links.push([ids[i], ids[(i+1)%ids.length]]);
});
crossLinks.forEach(link => links.push(link));
const adjacency = new Map(nodes.map(n => [n.id, new Set()]));
links.forEach(([a,b]) => { adjacency.get(a)?.add(b); adjacency.get(b)?.add(a); });

const wrap = document.getElementById("graphWrap");
const graph = document.getElementById("graph");
const canvas = document.getElementById("edges");
const ctx = canvas.getContext("2d");
let view = { x: 0, y: 0, scale: 1 }, selected = null, domainFilter = "all", dragging = false, dragOrigin;

function renderNodes() {
  graph.innerHTML = nodes.map((n, i) => `<button class="node" id="node-${n.id}" data-id="${n.id}" style="left:${n.x}px;top:${n.y}px;--domain-color:${n.color}"><span class="node-code">${String(i+1).padStart(3,"0")} / ${n.domain.toUpperCase()}</span><strong>${n.title}</strong><span class="mini-eq">${n.equation}</span></button>`).join("");
  graph.querySelectorAll(".node").forEach(el => el.addEventListener("click", e => { e.stopPropagation(); focusNode(el.dataset.id, false); }));
}
function renderFilters() {
  const nav = document.getElementById("domainFilters");
  nav.innerHTML = `<button class="filter active" data-domain="all"><span>00 / ALL_SYSTEMS</span><small>${nodes.length}</small></button>` + D.map((d,i) => `<button class="filter" data-domain="${d.id}"><span>${String(i+1).padStart(2,"0")} / ${d.name.toUpperCase()}</span><small>${d.nodes.length}</small></button>`).join("");
  nav.querySelectorAll(".filter").forEach(b => b.onclick = () => setDomain(b.dataset.domain));
}
function setDomain(id) {
  domainFilter = id;
  document.querySelectorAll(".filter").forEach(b => b.classList.toggle("active", b.dataset.domain === id));
  nodes.forEach(n => document.getElementById(`node-${n.id}`).classList.toggle("dim", id !== "all" && n.domain !== id));
  drawEdges();
  if (id !== "all") fitNodes(nodes.filter(n => n.domain === id));
}
function applyView() {
  graph.style.transform = `translate(${view.x}px,${view.y}px) scale(${view.scale})`;
  drawEdges();
  document.getElementById("coordinates").textContent = `X ${Math.round(-view.x).toString().padStart(4,"0")} / Y ${Math.round(-view.y).toString().padStart(4,"0")} / Z ${view.scale.toFixed(2)}`;
}
function resize() { const r=wrap.getBoundingClientRect(), d=devicePixelRatio||1; canvas.width=r.width*d; canvas.height=r.height*d; canvas.style.width=`${r.width}px`; canvas.style.height=`${r.height}px`; ctx.setTransform(d,0,0,d,0,0); drawEdges(); }
function drawEdges() {
  const r=wrap.getBoundingClientRect(); ctx.clearRect(0,0,r.width,r.height);
  links.forEach(([a,b]) => { const A=byId.get(a), B=byId.get(b); if(!A||!B)return; const active = selected && (a===selected||b===selected); const dim = domainFilter!=="all" && A.domain!==domainFilter && B.domain!==domainFilter; ctx.beginPath(); ctx.moveTo(A.x*view.scale+view.x,A.y*view.scale+view.y); ctx.lineTo(B.x*view.scale+view.x,B.y*view.scale+view.y); ctx.strokeStyle=dim?"rgba(35,52,45,.08)":active?byId.get(selected).color:"rgba(75,105,91,.38)"; ctx.lineWidth=active?1.6:.7; ctx.stroke(); });
}
function fitNodes(group=nodes) {
  const r=wrap.getBoundingClientRect(); const xs=group.map(n=>n.x), ys=group.map(n=>n.y); const minX=Math.min(...xs)-100,maxX=Math.max(...xs)+100,minY=Math.min(...ys)-80,maxY=Math.max(...ys)+80;
  view.scale=Math.min(r.width/(maxX-minX),r.height/(maxY-minY),1.15); view.x=(r.width-(minX+maxX)*view.scale)/2; view.y=(r.height-(minY+maxY)*view.scale)/2; applyView();
}
function focusNode(id, center=true) {
  const n=byId.get(id); if(!n)return; selected=id;
  if(domainFilter!=="all" && domainFilter!==n.domain) setDomain(n.domain);
  document.querySelectorAll(".node").forEach(el=>el.classList.toggle("active",el.dataset.id===id));
  if(center){const r=wrap.getBoundingClientRect();view.x=r.width/2-n.x*view.scale;view.y=r.height/2-n.y*view.scale;applyView();}
  const panel=document.getElementById("infoPanel"), index=nodes.indexOf(n)+1; panel.hidden=false;
  document.getElementById("panelCode").textContent=`NODE_${String(index).padStart(3,"0")}`;
  document.getElementById("panelDomain").textContent=`${D.find(d=>d.id===n.domain).name} / ${n.kind}`;
  document.getElementById("panelTitle").textContent=n.title;
  document.getElementById("panelEquation").innerHTML=n.equation;
  document.getElementById("panelDescription").textContent=n.description;
  document.getElementById("panelMeta").innerHTML=`<dt>PERIODO</dt><dd>${n.era}</dd><dt>CLASSE</dt><dd>${n.kind}</dd><dt>CONNESSIONI</dt><dd>${adjacency.get(id).size}</dd>`;
  document.getElementById("panelRelations").innerHTML=[...adjacency.get(id)].map(x=>`<button class="relation" data-target="${x}">→ ${byId.get(x).title}</button>`).join("");
  document.querySelectorAll(".relation").forEach(b=>b.onclick=()=>focusNode(b.dataset.target,true)); drawEdges();
}
function zoomAt(amount,cx,cy){const old=view.scale;view.scale=Math.max(.25,Math.min(2.2,view.scale*amount));view.x=cx-(cx-view.x)*(view.scale/old);view.y=cy-(cy-view.y)*(view.scale/old);applyView();}
wrap.addEventListener("wheel",e=>{e.preventDefault();const r=wrap.getBoundingClientRect();zoomAt(e.deltaY<0?1.12:.89,e.clientX-r.left,e.clientY-r.top)},{passive:false});
wrap.addEventListener("pointerdown",e=>{if(e.target.closest(".node"))return;dragging=true;wrap.classList.add("dragging");dragOrigin={px:e.clientX,py:e.clientY,x:view.x,y:view.y};wrap.setPointerCapture(e.pointerId)});
wrap.addEventListener("pointermove",e=>{if(!dragging)return;view.x=dragOrigin.x+e.clientX-dragOrigin.px;view.y=dragOrigin.y+e.clientY-dragOrigin.py;applyView()});
wrap.addEventListener("pointerup",()=>{dragging=false;wrap.classList.remove("dragging")});
document.getElementById("zoomIn").onclick=()=>zoomAt(1.2,wrap.clientWidth/2,wrap.clientHeight/2);
document.getElementById("zoomOut").onclick=()=>zoomAt(.8,wrap.clientWidth/2,wrap.clientHeight/2);
document.getElementById("fitButton").onclick=()=>fitNodes(domainFilter==="all"?nodes:nodes.filter(n=>n.domain===domainFilter));
document.getElementById("resetButton").onclick=()=>{setDomain("all");selected=null;document.getElementById("infoPanel").hidden=true;fitNodes()};
const search=document.getElementById("searchInput");
search.oninput=()=>{const q=search.value.toLowerCase().trim();nodes.forEach(n=>{const el=document.getElementById(`node-${n.id}`);const hit=!q||(n.title+" "+n.description+" "+n.kind).toLowerCase().includes(q);el.classList.toggle("dim",!hit);el.classList.toggle("match",!!q&&hit)});drawEdges()};
search.addEventListener("keydown",e=>{if(e.key==="Enter"){const q=search.value.toLowerCase();const hit=nodes.find(n=>(n.title+" "+n.description).toLowerCase().includes(q));if(hit)focusNode(hit.id,true)}});
document.addEventListener("keydown",e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();search.focus()}if(e.key==="Escape")document.getElementById("infoPanel").hidden=true});
document.getElementById("closePanel").onclick=()=>document.getElementById("infoPanel").hidden=true;
const panel=document.getElementById("infoPanel"), handle=document.getElementById("panelHandle"); let moving=false,po;
handle.addEventListener("pointerdown",e=>{if(e.target.closest("button"))return;moving=true;po={x:e.clientX-panel.offsetLeft,y:e.clientY-panel.offsetTop};handle.setPointerCapture(e.pointerId)});
handle.addEventListener("pointermove",e=>{if(!moving||innerWidth<700)return;panel.style.left=`${Math.max(0,Math.min(innerWidth-panel.offsetWidth,e.clientX-po.x))}px`;panel.style.top=`${Math.max(49,Math.min(innerHeight-panel.offsetHeight,e.clientY-po.y))}px`;panel.style.right="auto"});
handle.addEventListener("pointerup",()=>moving=false);
document.getElementById("helpButton").onclick=()=>document.getElementById("help").hidden=false;document.getElementById("closeHelp").onclick=()=>document.getElementById("help").hidden=true;
window.addEventListener("resize",()=>{resize();fitNodes(domainFilter==="all"?nodes:nodes.filter(n=>n.domain===domainFilter))});
document.getElementById("nodeCounter").textContent=`${nodes.length} NODES`;document.getElementById("edgeCounter").textContent=`${links.length} EDGES`;
renderFilters();renderNodes();resize();requestAnimationFrame(()=>fitNodes());
