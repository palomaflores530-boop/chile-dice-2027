/* CHILE DICE - Puedes editar las preguntas y respuestas en esta sección. */
const ROUNDS = [
 {question:"¿Qué es lo primero que haces al llegar a tu casa?",answers:[["Sacarse los zapatos",30],["Saludar a la familia",25],["Abrir el refrigerador",20],["Tirarse al sillón",15],["Ir directo al baño",10]]},
 {question:"Nombra algo que nunca falta en una cocina chilena.",answers:[["Pan",25],["Tostador de pan",25],["Tetera",20],["Botella de aceite",15],["Azucarero",15]]},
 {question:"¿Qué haces cuando no puedes dormir?",answers:[["Ver TikTok",30],["Dar vueltas en la cama",25],["Hacer el amor",20],["Ver televisión",15],["Levantarse a comer",10]]},
 {question:"¿Qué cosa se le olvida más a la gente al salir de casa?",answers:[["Las llaves",30],["El celular",25],["La billetera",20],["Cerrar la puerta con llave",15],["La colación",10]]},
 {question:"¿Qué es lo primero que haces cuando recibes tu sueldo?",answers:[["Pagar las cuentas",30],["Pagar las deudas",25],["Comprar mercadería",20],["Darse un gustito",15],["Comprar ropa o zapatillas",10]]},
 {question:"¿Qué actitud hace sospechar que alguien está siendo infiel?",answers:[["Esconde el celular",30],["Cambia la contraseña",25],["Dice que tiene mucho trabajo",20],["Sale más seguido sin explicar",15],["Se arregla más de lo habitual",10]]},
 {question:"Nombra algo que no puede faltar en una fonda chilena.",answers:[["Empanadas",25],["Terremoto",25],["Anticuchos",20],["Banderitas chilenas",15],["Música y cueca",15]]},
 {question:"¿Qué compras cuando vas a la feria?",answers:[["Tomates",25],["Papas",25],["Frutas",20],["Huevos",15],["Bolsas de basura",15]]},
 {question:"¿Qué frase típica dice una mamá chilena?",answers:[["¡Mientras vivas bajo mi techo!",25],["¡A tomar once, que está listo!",25],["¡No me hagas contar hasta tres!",20],["¡Te voy a apagar el WiFi!",15],["¡Cuando tengas tu casa haces lo que quieras!",15]]},
 {question:"¿Por qué pelean los hermanos?",answers:[["Por la ropa",25],["Por el cargador del celular",25],["Por el control remoto",20],["Por quién ocupa el baño",15],["Por el último pedazo de comida",15]]},
 {question:"¿Qué comentario incómodo puede hacer un familiar delante de todos?",answers:[["¡Estás más gordito/a!",30],["¿Y para cuándo el matrimonio?",25],["¿Todavía no tienes pareja?",20],["¡Cuéntales lo que hiciste cuando chico!",15],["¿Y cuánto te costó eso?",10]]},
 {question:"¿Qué objeto de la casa nadie sabe de quién es, pero todos usan?",answers:[["El cargador del celular",25],["La tijera de la cocina",25],["El control remoto",20],["El encendedor",15],["La bolsa llena de bolsas",15]]},
 {question:"¿Qué hace un papá chileno cuando algo se echa a perder?",answers:[["Lo intenta arreglar",25],["Le pega unos golpes",25],["Dice que hay que comprar otro",20],["Llama a alguien que sepa",15],["Lo guarda y nunca lo arregla",15]]},
 {question:"¿Qué cosa da vergüenza hacer en público?",answers:[["Caerse en la calle",25],["Que se te escape un peo",25],["Saludar a alguien que no te saludaba",20],["Que se te rompa el pantalón",15],["Tropezarse y hacerse el desentendido",15]]},
 {question:"¿Qué objeto siempre termina acumulándose en una casa chilena?",answers:[["Bolsas de supermercado",25],["Potes de helado con comida adentro",25],["Botellas retornables",20],["Frascos de vidrio",15],["Cajas de cartón",15]]},
 {question:"¿Qué haces si te encuentras con tu ex en una fiesta?",answers:[["Hacer como que no lo vi",25],["Saludar para quedar bien",25],["Mirar con quién anda",20],["Bailar para demostrar que estoy feliz",15],["Irme para evitar problemas",15]]},
 {question:"¿Qué excusa usa alguien para no tener relaciones íntimas?",answers:[["Me duele la cabeza",30],["Estoy cansado/a",25],["Mañana tengo que levantarme temprano",20],["No están los niños dormidos",15],["No estoy de ánimo",10]]},
 {question:"¿Qué hace una persona cuando está coqueteando?",answers:[["Mirar y sonreír",25],["Tirar indirectas",25],["Tocarse el pelo",20],["Invitar a tomar algo",15],["Pedir el Instagram",15]]},
 {question:"¿Qué es lo primero que hace alguien cuando llega a una fiesta?",answers:[["Buscar algo para tomar",30],["Saludar a los conocidos",25],["Buscar dónde está la comida",20],["Mirar quién está soltero/a",15],["Buscar dónde dejar la chaqueta",10]]},
 {question:"¿Qué dice un chileno cuando se queda sin plata?",answers:[["Ando pato",30],["Estoy más pelado que rodilla de cabro chico",25],["No tengo ni uno",20],["Estoy cortísimo de lucas",15],["Estoy esperando que me paguen",10]]}
];

/* 20 tarjetas adicionales transcritas de las fotografías del usuario */
const PHOTO_ROUNDS = [
{question:"Si te invitaran a narrar un partido, ¿qué deporte elegirías?",answers:[["Fútbol",50],["Vóleibol",19],["Tenis",8],["Atletismo",6],["Básquetbol",5],["Automovilismo",4],["Ajedrez",3]]},
{question:"Además de arena, ¿dónde puedes escribir tu nombre con el dedo?",answers:[["Vidrio empañado",43],["Tierra",18],["Nieve",15],["Auto sucio",6],["Cemento fresco",5],["Barro",4],["Harina",3]]},
{question:"¿Por cuál actividad que te encantaría hacer te gustaría que te pagaran?",answers:[["Dormir",30],["Ver TV / series",15],["Viajar",14],["Cocinar",11],["Comer",10],["Hacer deportes",8],["Tejer / manualidades",6]]},
{question:"Nombra algo que puedes encontrar en el refrigerador.",answers:[["Leche",21],["Mantequilla / margarina",20],["Yogurt",15],["Queso",12],["Cerveza",11],["Verduras",10],["Mayonesa",8]]},
{question:"Si llegas comiendo chicle a un restaurante, ¿dónde lo dejas?",answers:[["Servilleta",36],["Basurero",23],["Boleta / papel",19],["Cartera / billetera",8],["Debajo de la mesa",6],["Lo trago",5],["Lo tiro al piso",2]]},
{question:"Nombra un sándwich que venden en un carrito.",answers:[["Completo",35],["Chacarero",13],["Potito",12],["Barros Luco",11],["Barros Jarpa",10],["Churrasco",9],["Ave mayo",6]]},
{question:"Aparte de barrer, ¿para qué otra cosa puedes ocupar una escoba?",answers:[["Volar",24],["Bailar",19],["Trapear",16],["Cantar",11],["Alcanzar cosas",9],["Matar bichos",8],["De guitarra",7]]},
{question:"Nombra un elemento que necesitas para jugar fútbol.",answers:[["Pelota",38],["Zapatos / zapatillas",14],["Tobillera",13],["Canillera",12],["Camiseta",8],["Arco",7],["Cancha",6]]},
{question:"Completa la frase: «Pero qué día más…»",answers:[["Hermoso / lindo",29],["Largo / agotador",13],["Malo / penca",12],["Feo / horrible",11],["Aburrido / fome",10],["Frío / helado",9],["Caluroso",8]]},
{question:"¿Qué les gusta hacer en un feriado?",answers:[["Dormir",30],["Ver TV / series / películas",29],["Leer",12],["Escuchar música",11],["Descansar",7],["Comer",6],["Deporte",5]]},
{question:"¿Qué usas todos los días?",answers:[["Ropa interior / calcetines",23],["Ropa",19],["Celular",18],["Zapatos / zapatillas",14],["Cepillo / pasta de dientes",9],["Desodorante",7],["Ducha",4]]},
{question:"¿Qué alimento es plano y redondo?",answers:[["Pizza",30],["Tortilla",23],["Galleta",11],["Panqueque",10],["Pan / hallulla",9],["Sopaipilla",8],["Salame",7]]},
{question:"¿Qué objeto de tu casa te gustaría que tuviera alas para que llegara a tu mano sin mayor esfuerzo?",answers:[["Control remoto",37],["Café",27],["Celular",17],["Vasos / platos",6],["Llaves",4],["Cargador",3],["Computador",2]]},
{question:"¿A qué le gritas y no te responde?",answers:[["Mascota",32],["Persona / pareja",20],["Televisión",14],["Automovilistas",12],["Celular",9],["Computador",8],["Muralla",4]]},
{question:"Nombra un deporte que se practica sin pelota.",answers:[["Natación",30],["Atletismo / correr",23],["Ciclismo",17],["Artes marciales",7],["Patinar",6],["Ajedrez",5],["Equitación",4]]},
{question:"¿Cómo te destapas los oídos?",answers:[["Bostezando",31],["Tapando la nariz",22],["Tragando",16],["Inflando la boca",7],["Con contorsiones",6],["Saltando",5],["Mascando chicle",4]]},
{question:"¿Con qué te limpias si estás comiendo una hamburguesa y no tienes servilletas?",answers:[["Mano",31],["Pañuelo",26],["Manga de ropa",14],["Papel higiénico",12],["Mantel / individual",8],["Envoltorio",5],["Lengua",4]]},
{question:"Además de rosa, otro nombre de flor usado en nombre de mujeres.",answers:[["Margarita",39],["Violeta",25],["Azucena",15],["Jazmín",5],["Flor",4],["Iris",4],["Verónica",4]]},
{question:"¿Qué cuenta que pagas todos los meses te gustaría tener gratis para siempre?",answers:[["Internet",30],["Luz",25],["Dividendo",11],["Agua",10],["Plan de celular",9],["Arriendo",7],["Supermercado",4]]},
{question:"¿Qué lugar de Chile debería ser considerado una maravilla del mundo?",answers:[["Torres del Paine",26],["San Pedro de Atacama",21],["Chiloé",18],["Patagonia / Carretera Austral",15],["Isla de Pascua",8],["Salto del Laja",7],["Huilo Huilo",4]]}
];
const ALL_ROUNDS = [...ROUNDS, ...PHOTO_ROUNDS];
const PLAY_ROUND_COUNT = 20;
function shuffledRoundIds(){const ids=ALL_ROUNDS.map((_,i)=>i);for(let i=ids.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[ids[i],ids[j]]=[ids[j],ids[i]];}return ids.slice(0,PLAY_ROUND_COUNT);}
function currentRound(){return ALL_ROUNDS[(state.playRounds||ALL_ROUNDS.map((_,i)=>i))[state.round]]||ALL_ROUNDS[0];}

const KEY="chile-dice-state-v1";
const freshState=()=>({round:0,playRounds:shuffledRoundIds(),questionVisible:false,teams:["Los Ganadores","Los Invencibles"],scores:[0,0],revealed:[],strikes:0,turn:null,phase:"duel",stealTeam:null,awardedTeam:null,awardedPoints:0,status:"Selecciona quién ganó el duelo inicial para comenzar.",finished:false,finalDuel:{active:false,started:false,names:["",""],scores:[0,0],index:0,remaining:20,deadline:null,done:false,tieBreak:false},roundResult:null});
let state=loadState();
if(!Array.isArray(state.playRounds)||state.playRounds.length!==PLAY_ROUND_COUNT){state.playRounds=ALL_ROUNDS.slice(0,PLAY_ROUND_COUNT).map((_,i)=>i);state.questionVisible=true;}
let lastPublicStrikes=0;
let lastPublicResultStamp=0;
let publicChannel=null;

let gameAudioContext=null,gameMusicTimer=null,gameMusicStep=0,gameMusicOn=false;
let customMusicOn=false;
function playCustomSound(name){const el=document.getElementById("audio-"+name);if(!el)return;try{el.pause();el.currentTime=0;const p=el.play();if(p&&p.catch)p.catch(()=>{});}catch(e){}}
function setCustomMusic(on){const el=$("audio-musicafondo");if(!el)return;customMusicOn=!!on;if(customMusicOn){el.loop=true;el.volume=.28;const p=el.play();if(p&&p.catch)p.catch(()=>{customMusicOn=false;});}else{el.pause();}const btn=$("publicMusicToggle");if(btn)btn.textContent=customMusicOn?"♫ MÚSICA: ACTIVADA":"♫ ACTIVAR MÚSICA";}

function getGameAudio(){const C=window.AudioContext||window.webkitAudioContext;if(!C)return null;gameAudioContext=gameAudioContext||new C();if(gameAudioContext.state==="suspended")gameAudioContext.resume();return gameAudioContext}
function gameTone(freq,duration,type,volume,when,detune=0){const ctx=getGameAudio();if(!ctx)return;const osc=ctx.createOscillator(),gain=ctx.createGain();osc.type=type||"sine";osc.frequency.setValueAtTime(freq,when??ctx.currentTime);osc.detune.value=detune;gain.gain.setValueAtTime(.0001,when??ctx.currentTime);gain.gain.exponentialRampToValueAtTime(Math.max(.0002,volume||.04),(when??ctx.currentTime)+.018);gain.gain.exponentialRampToValueAtTime(.0001,(when??ctx.currentTime)+(duration||.16));osc.connect(gain);gain.connect(ctx.destination);osc.start(when??ctx.currentTime);osc.stop((when??ctx.currentTime)+(duration||.16)+.03)}
function playAnswerTick(){const ctx=getGameAudio();if(!ctx)return;const t=ctx.currentTime;gameTone(880,.11,"sine",.11,t);gameTone(1320,.16,"sine",.075,t+.075)}
function animateAnswerReveal(event){
 if(!isPublic||!event||event.round!==state.round)return;
 if(window.lastRevealStamp===event.stamp)return;
 window.lastRevealStamp=event.stamp;
 const overlay=$("answerRevealOverlay");if(!overlay)return;
 $("answerRevealNumber").textContent=String(event.index+1).padStart(2,"0");
 $("answerRevealText").textContent=event.answer||"RESPUESTA";
 $("answerRevealPoints").textContent=String(event.points||0);
 overlay.classList.remove("hidden","play");void overlay.offsetWidth;overlay.classList.add("play");
 playAnswerTick();
 clearTimeout(window.answerRevealTimer);
 window.answerRevealTimer=setTimeout(()=>{overlay.classList.remove("play");overlay.classList.add("hidden")},2400);
}
function sendAnswerReveal(index){
 const answer=currentRound().answers[index];
 const event={type:"answer-reveal",round:state.round,index,answer:answer[0],points:answer[1],stamp:Date.now()+"-"+Math.random().toString(36).slice(2)};
 try{if(publicChannel)publicChannel.postMessage(event)}catch(e){}
 try{localStorage.setItem("chile-dice-answer-event",JSON.stringify(event))}catch(e){}
}
function playWrongX(){const ctx=getGameAudio();if(!ctx)return;const t=ctx.currentTime;gameTone(155,.28,"sawtooth",.10,t);gameTone(92,.32,"square",.065,t+.035)}
function musicBeat(){if(!gameMusicOn)return;const ctx=getGameAudio();if(!ctx)return;const t=ctx.currentTime;const bass=[110,110,146.83,130.81,98,98,130.81,123.47];const melody=[440,523.25,659.25,523.25,392,493.88,587.33,493.88];const i=gameMusicStep%8;gameTone(bass[i],.42,"triangle",.035,t);if(i%2===0)gameTone(melody[i],.22,"sine",.018,t+.03);if(i===0||i===4){gameTone(220,.55,"sine",.012,t);gameTone(261.63,.55,"sine",.01,t)}gameMusicStep++}
function toggleGameMusic(){setCustomMusic(!customMusicOn);}

function animateErrorFlash(){playCustomSound("aparecelaX");const el=$("errorFlash");if(!el)return;el.classList.remove("play");void el.offsetWidth;el.classList.add("play");}
function animateStealResult(success){const el=$("resultFlash");if(!el)return;el.innerHTML=success?'<div class="steal-result-card success"><span class="steal-symbol">✓</span><strong>¡ROBO CORRECTO!</strong></div>':'<div class="steal-result-card failure"><span class="steal-symbol">✕</span><strong>¡ROBO FALLIDO!</strong></div>';el.className="result-flash";void el.offsetWidth;el.classList.add("play");setTimeout(()=>el.classList.remove("play"),2700);}
function sendStealResult(success){const event={type:"steal-result",round:state.round,success:!!success,stamp:Date.now()};try{if(publicChannel)publicChannel.postMessage(event);}catch(e){}try{localStorage.setItem("chile-dice-result-event",JSON.stringify(event));}catch(e){}}
function loadState(){try{return JSON.parse(localStorage.getItem(KEY))||freshState()}catch{return freshState()}}
const $=id=>document.getElementById(id);
const isPublic=new URLSearchParams(location.search).get("public")==="1";
function save(){localStorage.setItem(KEY,JSON.stringify(state));if(!isPublic&&publicChannel){try{publicChannel.postMessage({type:"state-update",state:state})}catch(e){}}render()}
function toast(msg){const el=$("toast");if(!el)return;el.textContent=msg;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),2200)}
function totalRound(){return currentRound().answers.reduce((n,a)=>n+a[1],0)}
function setStatus(s){state.status=s}
function renderBoard(target,publicMode=false){target.innerHTML="";currentRound().answers.forEach((a,i)=>{const shown=state.revealed.includes(i);const card=document.createElement("div");card.className="answer-card "+(shown?"":"hidden-answer");card.innerHTML='<span class="answer-number">'+(shown?i+1:"?")+'</span><div class="answer-content"><div class="answer-text">'+(shown?escapeHtml(a[0]):"RESPUESTA OCULTA")+'</div></div><span class="answer-points">'+(shown?a[1]+" PTS":"—")+'</span>';target.appendChild(card)})}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function render(){if(isPublic){renderPublic();return} if(state.finalDuel?.active){renderFinalAdmin();return}
 $("teamALabel").textContent=state.teams[0];$("teamBLabel").textContent=state.teams[1];$("scoreA").textContent=state.scores[0];$("scoreB").textContent=state.scores[1];
 $("roundNumber").textContent=(state.round+1)+" / "+PLAY_ROUND_COUNT;$("roundProgress").style.setProperty("--progress",((state.round+1)/PLAY_ROUND_COUNT*100)+"%");
 $("roundEyebrow").textContent="RONDA "+(state.round+1);$("roundTag").textContent=String(state.round+1).padStart(2,"0");$("questionText").textContent=currentRound().question;$("showQuestionBtn").disabled=!!state.questionVisible;$("showQuestionBtn").textContent=state.questionVisible?"Pregunta mostrada en TV":"Mostrar pregunta en pantalla TV";
 renderBoard($("answerBoard"));$("strikes").innerHTML=[0,1,2].map(i=>'<span class="'+(i<state.strikes?"active":"")+'">X</span>').join("");
 $("statusMessage").textContent=state.status;
 $("turnA").textContent="Juega "+state.teams[0];$("turnB").textContent="Juega "+state.teams[1];
 const duelBox=$("captainDuelControls");if(duelBox){duelBox.classList.toggle("hidden",state.phase!=="duel-answer");$("captainDuelPrompt").textContent="¿El capitán de "+state.teams[state.turn]+" respondió correctamente?";$("captainDuelCorrect").disabled=state.phase!=="duel-answer";$("captainDuelWrong").disabled=state.phase!=="duel-answer";}
 $("turnA").disabled=state.phase!=="duel";$("turnB").disabled=state.phase!=="duel";
 const opts='<option value="">Selecciona una respuesta</option>'+currentRound().answers.map((a,i)=>'<option value="'+i+'">'+(i+1)+'. '+escapeHtml(a[0])+' ('+a[1]+' pts)</option>').join("");
 const stealOpts='<option value="">Selecciona una respuesta oculta</option>'+currentRound().answers.map((a,i)=>({a,i})).filter(x=>!state.revealed.includes(x.i)).map(({a,i})=>'<option value="'+i+'">'+(i+1)+'. '+escapeHtml(a[0])+' ('+a[1]+' pts)</option>').join("");
 const availableOpts='<option value="">Selecciona una respuesta disponible</option>'+currentRound().answers.map((a,i)=>({a,i})).filter(x=>!state.revealed.includes(x.i)).map(({a,i})=>'<option value="'+i+'">'+(i+1)+'. '+escapeHtml(a[0])+' ('+a[1]+' pts)</option>').join("");
 $("answerSelect").innerHTML=availableOpts;$("stealSelect").innerHTML=stealOpts;
 $("correctBtn").disabled=!(state.phase==="playing"||state.phase==="duel-answer");$("wrongBtn").disabled=!(state.phase==="playing"||state.phase==="duel-answer");$("stealCorrect").disabled=state.phase!=="steal";$("stealWrong").disabled=state.phase!=="steal";
 $("nextRound").disabled=state.finished;$("nextRound").textContent=state.phase==="finished-round"?(state.round>=PLAY_ROUND_COUNT-1?"Continuar al duelo final →":"Continuar a la siguiente ronda →"):"Siguiente ronda →";
 $("revealAll").disabled=state.phase==="finished-round";
 renderRoundResult(false);if(state.finished)showWinner();
}
function renderPublic(){ if(state.finalDuel?.active){renderFinalPublic();return} $("publicTeamA").textContent=state.teams[0];$("publicTeamB").textContent=state.teams[1];$("publicScoreA").textContent=state.scores[0];$("publicScoreB").textContent=state.scores[1];$("publicRound").textContent=(state.round+1)+" / "+PLAY_ROUND_COUNT;$("publicProgress").style.setProperty("--progress",((state.round+1)/PLAY_ROUND_COUNT*100)+"%");$("publicEyebrow").textContent="RONDA "+(state.round+1);$("publicQuestion").textContent=state.questionVisible?currentRound().question:"EL LOCUTOR ESTÁ LEYENDO LA PREGUNTA";$("publicQuestion").classList.toggle("question-announced",!!state.questionVisible);renderBoard($("publicAnswerBoard"),true);$("publicStrikes").innerHTML=[0,1,2].map(i=>'<span class="'+(i<state.strikes?"active":"")+'">X</span>').join("");$("publicStatus").textContent=state.status;renderRoundResult(true);if(state.finished)showWinner()}

let lastRoundResultStamp="";try{lastRoundResultStamp=localStorage.getItem(isPublic?"chile-dice-result-seen-public":"chile-dice-result-seen-host")||""}catch(e){}
let resultSoundContext=null;
function animateResultCount(id,target){
 const el=$(id);if(!el)return;const end=Math.max(0,Number(target)||0),start=performance.now(),duration=1350;
 function tick(now){const p=Math.min(1,(now-start)/duration);el.textContent=String(Math.round(end*(1-Math.pow(1-p,3))));if(p<1)requestAnimationFrame(tick)}
 el.textContent="0";requestAnimationFrame(tick);
}
function playRoundCelebration(){
 try{const Ctx=window.AudioContext||window.webkitAudioContext;if(!Ctx)return;
 resultSoundContext=resultSoundContext||new Ctx();if(resultSoundContext.state==="suspended")resultSoundContext.resume();
 const ctx=resultSoundContext,now=ctx.currentTime;
 [523.25,659.25,783.99,1046.5].forEach((freq,i)=>{const osc=ctx.createOscillator(),gain=ctx.createGain();osc.type="sine";osc.frequency.value=freq;gain.gain.setValueAtTime(.0001,now+i*.12);gain.gain.exponentialRampToValueAtTime(.12,now+i*.12+.025);gain.gain.exponentialRampToValueAtTime(.0001,now+i*.12+.34);osc.connect(gain);gain.connect(ctx.destination);osc.start(now+i*.12);osc.stop(now+i*.12+.36)});
 }catch(e){}
}
function enableResultSound(){playRoundCelebration();toast("Sonido activado para los resultados.");}
function buildResultParticles(id){
 const box=$(id);if(!box||box.dataset.built)return;box.dataset.built="1";
 for(let i=0;i<34;i++){const p=document.createElement("i");p.className="result-particle";p.style.setProperty("--x",Math.round(Math.random()*100)+"%");p.style.setProperty("--delay",(Math.random()*2)+"s");p.style.setProperty("--duration",(2.4+Math.random()*2.2)+"s");p.style.setProperty("--drift",Math.round((Math.random()-.5)*180)+"px");box.appendChild(p)}
}
function paintResult(prefix,isPublicMode){
 const r=state.roundResult;if(!r)return;
 const ids=isPublicMode?{round:"publicResultRoundNo",headline:"publicResultHeadline",nameA:"publicResultTeamNameA",nameB:"publicResultTeamNameB",ptsA:"publicResultRoundPointsA",ptsB:"publicResultRoundPointsB",totalA:"publicResultTotalA",totalB:"publicResultTotalB",cardA:"publicResultTeamCardA",cardB:"publicResultTeamCardB",winner:"publicResultWinnerLabel",particles:"publicResultParticles",overlay:"publicRoundResultOverlay"}:{round:"resultRoundNo",headline:"resultHeadline",nameA:"resultTeamNameA",nameB:"resultTeamNameB",ptsA:"resultRoundPointsA",ptsB:"resultRoundPointsB",totalA:"resultTotalA",totalB:"resultTotalB",cardA:"resultTeamCardA",cardB:"resultTeamCardB",winner:"resultWinnerLabel",particles:"resultParticles",overlay:"roundResultOverlay"};
 const el=id=>$(ids[id]);if(!el("overlay"))return;
 el("overlay").classList.remove("hidden");
 el("round").textContent=String(r.round+1).padStart(2,"0");
 el("headline").textContent=r.winner===null?"RONDA SIN PUNTOS":"¡"+r.teams[r.winner]+" SE LLEVA LA RONDA!";
 el("nameA").textContent=r.teams[0];el("nameB").textContent=r.teams[1];
 el("cardA").classList.toggle("result-champion",r.winner===0);el("cardB").classList.toggle("result-champion",r.winner===1);
 el("ptsA").textContent=r.points[0];el("ptsB").textContent=r.points[1];el("totalA").textContent=r.totals[0];el("totalB").textContent=r.totals[1];
 el("winner").textContent=r.winner===null?"No se asignaron puntos":("GANADOR DE LA RONDA: "+r.teams[r.winner]);
 buildResultParticles(ids.particles);
 if(lastRoundResultStamp!==r.stamp){
  lastRoundResultStamp=r.stamp;try{localStorage.setItem(isPublicMode?"chile-dice-result-seen-public":"chile-dice-result-seen-host",r.stamp)}catch(e){}
  animateResultCount(ids.ptsA,r.points[0]);animateResultCount(ids.ptsB,r.points[1]);animateResultCount(ids.totalA,r.totals[0]);animateResultCount(ids.totalB,r.totals[1]);
  if(isPublicMode)playRoundCelebration();
 }
}
function renderRoundResult(isPublicMode){
 const id=isPublicMode?"publicRoundResultOverlay":"roundResultOverlay",el=$(id);if(!el)return;
 if(state.roundResult){el.classList.remove("hidden");el.style.setProperty("display","grid","important");paintResult("",isPublicMode);}
 else{el.classList.add("hidden");el.style.removeProperty("display");}
}
function continueFromResult(){nextRound()}

function showWinner(){if(!window.chileDiceVictoryPlayed){window.chileDiceVictoryPlayed=true;try{if(publicChannel)publicChannel.postMessage({type:"game-victory"});}catch(e){}}const el=$("winnerOverlay");if(!el)return;el.classList.remove("hidden");let title="¡EMPATE!";if(state.scores[0]>state.scores[1])title="¡GANÓ "+state.teams[0]+"!";if(state.scores[1]>state.scores[0])title="¡GANÓ "+state.teams[1]+"!";$("winnerTitle").textContent=title;$("winnerDescription").textContent=state.scores[0]+" puntos · "+state.scores[1]+" puntos"}
function chooseTurn(team){
 if(state.finished||state.phase==="finished-round"||state.phase==="steal")return;
 if(state.phase==="duel"){state.turn=team;state.duelAttempts=0;state.phase="duel-answer";setStatus("¡"+state.teams[team]+" responde primero! El anfitrión debe marcar si acertó o falló.");save();return}
 if(state.phase==="duel-answer"){toast("Primero marca si el capitán respondió bien o mal.");return}
 state.turn=team;state.phase="playing";setStatus("Está jugando "+state.teams[team]+". ¡Que comience la ronda!");save()
}
function selectIndex(id){const v=$(id).value;if(v===""){toast("Selecciona una respuesta primero.");return null}return Number(v)}
function correct(){
 if(state.phase==="duel-answer"){setStatus("¡Respuesta correcta! "+state.teams[state.turn]+" gana el duelo inicial y comienza jugando.");state.phase="playing";save();return}
 if(state.phase!=="playing")return;const i=selectIndex("answerSelect");if(i===null)return;if(state.revealed.includes(i)){toast("Esa respuesta ya fue revelada.");return}state.revealed.push(i);sendAnswerReveal(i);const pts=currentRound().answers[i][1];setStatus("¡Correcto! "+state.teams[state.turn]+" encontró una respuesta de "+pts+" puntos. Puntaje de la ronda: "+state.revealed.reduce((n,k)=>n+currentRound().answers[k][1],0)+".");if(state.revealed.length===currentRound().answers.length)finishRound(state.turn,"¡Todas las respuestas encontradas!");else save()}
function wrong(){
 if(state.phase==="duel-answer"){
  const failedTeam=state.turn;
  const duelEvent={type:"duel-miss",round:state.round,team:failedTeam,stamp:Date.now()+"-"+Math.random().toString(36).slice(2)};try{if(publicChannel)publicChannel.postMessage(duelEvent);}catch(e){}try{localStorage.setItem("chile-dice-duel-miss",JSON.stringify(duelEvent));}catch(e){}
  state.duelAttempts=(state.duelAttempts||0)+1;
  if(state.duelAttempts===1){state.turn=1-failedTeam;setStatus("¡X! "+state.teams[failedTeam]+" falló. Ahora responde el capitán de "+state.teams[state.turn]+".");}
  else{state.phase="playing";setStatus("¡Ambos capitanes fallaron! Comienza la ronda "+state.teams[state.turn]+".");}
  save();return;
 }
 if(state.phase!=="playing")return;state.strikes++;try{if(publicChannel)publicChannel.postMessage({type:"strike",round:state.round,strikes:state.strikes});}catch(e){}if(state.strikes>=3){state.phase="steal";state.stealTeam=1-state.turn;setStatus("¡TERCER ERROR! "+state.teams[state.stealTeam]+" tiene la oportunidad de robar todos los puntos.");}else setStatus("¡Respuesta incorrecta! Error "+state.strikes+" de 3.");save()}
function finishRound(team,message){
 if(state.phase==="finished-round")return;
 state.awardedTeam=team;state.awardedPoints=team===null?0:totalRound();
 if(team!==null)state.scores[team]+=state.awardedPoints;
 state.phase="finished-round";
 state.roundResult={round:state.round,teams:[...state.teams],winner:team,points:[team===0?state.awardedPoints:0,team===1?state.awardedPoints:0],totals:[...state.scores],stamp:String(Date.now())+"-"+state.round+"-"+Math.random().toString(36).slice(2)};
 setStatus(message+(team===null?"":" "+state.teams[team]+" gana "+state.awardedPoints+" puntos de la ronda."));
 save();
 renderRoundResult(false);
}
function steal(correctAnswer){
 if(state.phase!=="steal")return;
 if(correctAnswer){
  const i=selectIndex("stealSelect");if(i===null)return;
  if(state.revealed.includes(i)){toast("Esa respuesta ya está revelada.");return}
  state.revealed.push(i);
  sendAnswerReveal(i);
 }
 state.lastResultEvent={type:"steal-result",round:state.round,success:!!correctAnswer,stamp:Date.now()+"-"+Math.random().toString(36).slice(2)};
 if(correctAnswer){
  finishRound(state.stealTeam,"¡ROBO CORRECTO! "+state.teams[state.stealTeam]+" se lleva los puntos.");
 }else{
  finishRound(state.turn,"¡ROBO FALLIDO! "+state.teams[state.turn]+" conserva los puntos de la ronda.");
 }
}
function resetRound(){if(state.awardedTeam!==null&&state.awardedTeam!==undefined)state.scores[state.awardedTeam]=Math.max(0,state.scores[state.awardedTeam]-state.awardedPoints);state.roundResult=null;state.revealed=[];state.questionVisible=false;state.strikes=0;state.turn=null;state.phase="duel";state.stealTeam=null;state.awardedTeam=null;state.awardedPoints=0;state.status="Ronda reiniciada. Selecciona quién ganó el duelo inicial.";state.finished=false;save()}
function nextRound(){if(state.phase!=="finished-round"&&!state.finalDuel?.active){toast("Finaliza la ronda antes de continuar.");return}["roundResultOverlay","publicRoundResultOverlay"].forEach(id=>{const el=$(id);if(el){el.classList.add("hidden");el.style.removeProperty("display")}});state.roundResult=null;if(state.round>=PLAY_ROUND_COUNT-1){state.finished=true;state.finalDuel=state.finalDuel||{active:false,started:false,names:["",""],scores:[0,0],index:0,remaining:20,deadline:null,done:false,tieBreak:false};state.finalDuel.active=true;state.status="¡Comienza el duelo final!";save();return}state.round++;state.revealed=[];state.questionVisible=false;state.strikes=0;state.turn=null;state.phase="duel";state.stealTeam=null;state.awardedTeam=null;state.awardedPoints=0;state.status="Nueva ronda. Selecciona quién ganó el duelo inicial.";save()}
function resetGame(){if(!confirm("¿Reiniciar toda la partida y borrar los puntajes?"))return;state=freshState();save()}
function openPublic(){const url=new URL(location.href);url.searchParams.set("public","1");const w=Math.max(1200,screen.availWidth||1200),h=Math.max(800,screen.availHeight||800);const tv=window.open(url.toString(),"CHILE_DICE_PUBLICO",`width=${w},height=${h},left=0,top=0`);if(tv){try{tv.moveTo(0,0);tv.resizeTo(w,h);tv.focus()}catch(e){}}}
function init(){try{if("BroadcastChannel" in window){publicChannel=new BroadcastChannel("chile-dice-live");}}catch(e){}if(isPublic){$("hostApp").classList.add("hidden");$("publicApp").classList.remove("hidden");$("publicContinueRound").addEventListener("click",continueFromResult);$("publicEnableResultSound").addEventListener("click",enableResultSound);$("publicMusicToggle").addEventListener("click",toggleGameMusic);lastPublicStrikes=state.strikes;lastPublicResultStamp=state.lastResultEvent?.stamp||0;renderPublic();if(publicChannel)publicChannel.onmessage=e=>{const m=e.data||{};if(m.type==="state-update"&&m.state){state=m.state;renderPublic();lastPublicStrikes=state.strikes;return}if(m.type==="strike"&&m.round===state.round){playCustomSound("Respuestaincorrecta");animateErrorFlash();playWrongX();}if(m.type==="duel-miss"&&m.round===state.round){playCustomSound("Respuestaincorrecta");animateErrorFlash();playWrongX();}if(m.type==="answer-reveal"&&m.round===state.round){animateAnswerReveal(m);}if(m.type==="steal-result"&&m.round===state.round){playCustomSound(m.success?"roboexitoso":"robofallido");animateStealResult(!!m.success);}if(m.type==="round-finished"&&m.round===state.round){playCustomSound("celebracion");}if(m.type==="game-victory"){playCustomSound("victoria");}};window.addEventListener("storage",e=>{if(e.key==="chile-dice-answer-event"&&e.newValue){try{animateAnswerReveal(JSON.parse(e.newValue));}catch(err){}}if(e.key==="chile-dice-result-event"&&e.newValue){try{const event=JSON.parse(e.newValue);if(event.type==="steal-result"&&event.round===state.round)animateStealResult(!!event.success);}catch(err){}}if(e.key===KEY&&e.newValue){const incoming=JSON.parse(e.newValue);if(incoming.round!==state.round)lastPublicStrikes=0;const newStrike=incoming.strikes>lastPublicStrikes;const resultEvent=incoming.lastResultEvent;const newResult=!!(resultEvent&&resultEvent.stamp&&resultEvent.stamp!==lastPublicResultStamp);state=incoming;renderPublic();if(newStrike)animateErrorFlash();if(newResult){animateStealResult(!!resultEvent.success);lastPublicResultStamp=resultEvent.stamp;}lastPublicStrikes=state.strikes}});window.addEventListener("focus",()=>{const incoming=loadState();if(incoming.round!==state.round)lastPublicStrikes=0;const newStrike=incoming.strikes>lastPublicStrikes;const resultEvent=incoming.lastResultEvent;const newResult=!!(resultEvent&&resultEvent.stamp&&resultEvent.stamp!==lastPublicResultStamp);state=incoming;renderPublic();if(newStrike)animateErrorFlash();if(newResult){animateStealResult(!!resultEvent.success);lastPublicResultStamp=resultEvent.stamp;}lastPublicStrikes=state.strikes});return}
 $("saveTeams").addEventListener("click",()=>{state.teams=[$("teamAInput").value.trim()||"Equipo 1",$("teamBInput").value.trim()||"Equipo 2"];save();toast("Nombres de equipos guardados.")});
 $("turnA").addEventListener("click",()=>chooseTurn(0));$("turnB").addEventListener("click",()=>chooseTurn(1));$("captainDuelCorrect").addEventListener("click",()=>correct());$("captainDuelWrong").addEventListener("click",()=>wrong());$("correctBtn").addEventListener("click",correct);$("wrongBtn").addEventListener("click",wrong);$("stealCorrect").addEventListener("click",()=>steal(true));$("stealWrong").addEventListener("click",()=>steal(false));$("revealAll").addEventListener("click",()=>{state.revealed=currentRound().answers.map((_,i)=>i);finishRound(null,"Respuestas restantes reveladas. No se suman puntos adicionales.")});$("resetRound").addEventListener("click",resetRound);$("nextRound").addEventListener("click",nextRound);$("resetGame").addEventListener("click",resetGame);$("openPublic").addEventListener("click",openPublic);$("showQuestionBtn").addEventListener("click",()=>{state.questionVisible=true;setStatus("Pregunta publicada en la pantalla del público.");save()});$("continueRound").addEventListener("click",continueFromResult);$("enableResultSound").addEventListener("click",enableResultSound);
 $("teamAInput").value=state.teams[0];$("teamBInput").value=state.teams[1];window.addEventListener("storage",e=>{if(e.key===KEY&&e.newValue){state=loadState();render();toast("La partida se actualizó en otra ventana.")}});render()}
document.addEventListener("DOMContentLoaded",init);

const FINAL_QUESTIONS=[{"question":"¿Qué harías si te ganas un viaje con todo pagado?","answers":["Hacer las maletas","Llamar a la familia","Revisar el destino","Sacar fotos","Invitar a alguien"]},{"question":"¿Qué comida chilena elegirías para comer toda una semana?","answers":["Empanadas","Pastel de choclo","Completo","Cazuela","Asado"]},{"question":"¿Qué es lo más extraño que alguien puede encontrar en una cartera?","answers":["Un objeto antiguo","Dulces","Papeles","Maquillaje","Cargadores"]},{"question":"¿Qué harías primero si fueras famoso por un día?","answers":["Publicar en redes","Salir a celebrar","Ayudar a la familia","Ir de compras","Dar entrevistas"]},{"question":"¿Qué frase diría alguien que llega tarde y no quiere dar explicaciones?","answers":["Había mucho tráfico","Se me pasó la hora","No sonó la alarma","Tuve un problema","Ya estoy llegando"]},{"question":"¿Qué elegirías para tener siempre en tu vida?","answers":["Buena salud","Mucho dinero","Tiempo libre","Amor","Viajar"]},{"question":"¿Qué lugar de Chile recomendarías visitar?","answers":["La playa","La montaña","El sur","El desierto","Una isla"]},{"question":"¿Qué harías si encuentras una billetera en la calle?","answers":["Buscar al dueño","Entregarla a Carabineros","Revisar la identificación","Dejarla donde está","Preguntar a las personas"]}];
let finalTimer=null;
function renderFinalAdmin(){
 $("finalAdmin").classList.remove("hidden");$("mainGameLayout").classList.add("hidden");$("setupPanel").classList.add("hidden");
 const d=state.finalDuel;$("finalTeamA").textContent=state.teams[0];$("finalTeamB").textContent=state.teams[1];
 $("repA").value=d.names[0]||"";$("repB").value=d.names[1]||"";
 $("finalAdminPlay").classList.toggle("hidden",!d.started);
 $("finalNameA").textContent=d.names[0];$("finalNameB").textContent=d.names[1];$("finalScoreA").textContent=d.scores[0];$("finalScoreB").textContent=d.scores[1];
 $("finalClock").textContent=d.remaining;$("finalQuestionCount").textContent=d.tieBreak?"MUERTE SÚBITA":"PREGUNTA "+Math.min(d.index+1,5)+" DE 5";$("finalQuestion").textContent=FINAL_QUESTIONS[Math.min(d.index,7)].question;
 $("finalAdminStatus").textContent=d.done?finalWinnerText():"Cada representante tiene 20 segundos para responder. El anfitrión asigna el punto al equipo que acierta.";
 $("startFinal").disabled=d.started;
}
function finalWinnerText(){const d=state.finalDuel;if(d.scores[0]===d.scores[1])return "¡EMPATE! Duelo final igualado.";return "¡CAMPEÓN: "+state.teams[d.scores[0]>d.scores[1]?0:1]+"!";}
function renderFinalPublic(){
 $("publicMainBoard").classList.add("hidden");$("publicFinal").classList.remove("hidden");
 const d=state.finalDuel;$("pubRepA").textContent=d.names[0];$("pubRepB").textContent=d.names[1];$("pubFinalScoreA").textContent=d.scores[0];$("pubFinalScoreB").textContent=d.scores[1];$("pubFinalClock").textContent=d.remaining;$("pubFinalCount").textContent=d.tieBreak?"MUERTE SÚBITA":"PREGUNTA "+Math.min(d.index+1,5)+" DE 5";$("pubFinalQuestion").textContent=FINAL_QUESTIONS[Math.min(d.index,7)].question;
 $("pubFinalStatus").textContent=d.done?"¡DUELO FINALIZADO!":d.started?"¡Representantes, es su turno!":"Preparando el duelo final…";
 $("finalWinner").classList.toggle("hidden",!d.done);$("finalWinner").textContent=d.done?finalWinnerText():"";
}
function startFinal(){
 const a=$("repA").value.trim(),b=$("repB").value.trim();if(!a||!b){toast("Escriban el nombre de ambos representantes.");return}
 state.finalDuel.names=[a,b];state.finalDuel.started=true;state.finalDuel.index=0;state.finalDuel.scores=[0,0];state.finalDuel.remaining=20;state.finalDuel.deadline=Date.now()+20000;state.finalDuel.done=false;save();runFinalClock();
}
function runFinalClock(){
 clearInterval(finalTimer);finalTimer=setInterval(()=>{const d=state.finalDuel;if(!d?.active||!d.started||d.done){clearInterval(finalTimer);return}
 d.remaining=Math.max(0,Math.ceil((d.deadline-Date.now())/1000));if(d.remaining===0){d.deadline=null;d.status="¡Tiempo terminado!";clearInterval(finalTimer)}
 save();
 },250);
}
function awardFinal(team){
 const d=state.finalDuel;if(!d.started||d.done||d.remaining<=0)return;
 d.scores[team]++;d.deadline=null;d.remaining=0;clearInterval(finalTimer);if(d.tieBreak&&d.scores[0]!==d.scores[1])d.done=true;save();
}
function nextFinalQuestion(){
 const d=state.finalDuel;if(d.done)return;
 if(d.index===4&&!d.tieBreak){
  if(d.scores[0]!==d.scores[1]){d.done=true;d.deadline=null;clearInterval(finalTimer);save();return}
  d.tieBreak=true;d.index=5;d.remaining=20;d.deadline=Date.now()+20000;save();runFinalClock();return;
 }
 if(d.tieBreak&&d.index>=7){d.done=true;d.deadline=null;clearInterval(finalTimer);save();return}
 d.index++;d.remaining=20;d.deadline=Date.now()+20000;save();runFinalClock();
}
function finishFinal(){state.finalDuel.done=true;state.finalDuel.deadline=null;clearInterval(finalTimer);save()}
function bindFinalControls(){
 $("startFinal").addEventListener("click",startFinal);$("finalPointA").addEventListener("click",()=>awardFinal(0));$("finalPointB").addEventListener("click",()=>awardFinal(1));$("finalNext").addEventListener("click",nextFinalQuestion);$("finishFinal").addEventListener("click",finishFinal);
 if(state.finalDuel?.started&&!state.finalDuel.done&&state.finalDuel.deadline)runFinalClock();
}
document.addEventListener("DOMContentLoaded",()=>{if(!isPublic)bindFinalControls()});
