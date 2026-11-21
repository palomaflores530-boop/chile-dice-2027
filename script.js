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
const KEY="chile-dice-state-v1";
const freshState=()=>({round:0,teams:["Los Ganadores","Los Invencibles"],scores:[0,0],revealed:[],strikes:0,turn:null,phase:"duel",stealTeam:null,awardedTeam:null,awardedPoints:0,status:"Selecciona quién ganó el duelo inicial para comenzar.",finished:false});
let state=loadState();
let lastPublicStrikes=0;
let lastPublicResultStamp=0;
let publicChannel=null;
function animateErrorFlash(){const el=$("errorFlash");if(!el)return;el.classList.remove("play");void el.offsetWidth;el.classList.add("play");}
function animateStealResult(success){const el=$("resultFlash");if(!el)return;el.innerHTML=success?'<div class="steal-result-card success"><span class="steal-symbol">✓</span><strong>¡ROBO CORRECTO!</strong></div>':'<div class="steal-result-card failure"><span class="steal-symbol">✕</span><strong>¡ROBO FALLIDO!</strong></div>';el.className="result-flash";void el.offsetWidth;el.classList.add("play");setTimeout(()=>el.classList.remove("play"),2700);}
function sendStealResult(success){const event={type:"steal-result",round:state.round,success:!!success,stamp:Date.now()};try{if(publicChannel)publicChannel.postMessage(event);}catch(e){}try{localStorage.setItem("chile-dice-result-event",JSON.stringify(event));}catch(e){}}
function loadState(){try{return JSON.parse(localStorage.getItem(KEY))||freshState()}catch{return freshState()}}
const $=id=>document.getElementById(id);
const isPublic=new URLSearchParams(location.search).get("public")==="1";
function save(){localStorage.setItem(KEY,JSON.stringify(state));render()}
function toast(msg){const el=$("toast");if(!el)return;el.textContent=msg;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),2200)}
function totalRound(){return ROUNDS[state.round].answers.reduce((n,a)=>n+a[1],0)}
function setStatus(s){state.status=s}
function renderBoard(target,publicMode=false){target.innerHTML="";ROUNDS[state.round].answers.forEach((a,i)=>{const shown=state.revealed.includes(i);const card=document.createElement("div");card.className="answer-card "+(shown?"":"hidden-answer");card.innerHTML='<span class="answer-number">'+(shown?i+1:"?")+'</span><div class="answer-content"><div class="answer-text">'+(shown?escapeHtml(a[0]):"RESPUESTA OCULTA")+'</div></div><span class="answer-points">'+(shown?a[1]+" PTS":"—")+'</span>';target.appendChild(card)})}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function render(){if(isPublic){renderPublic();return}
 $("teamALabel").textContent=state.teams[0];$("teamBLabel").textContent=state.teams[1];$("scoreA").textContent=state.scores[0];$("scoreB").textContent=state.scores[1];
 $("roundNumber").textContent=(state.round+1)+" / "+ROUNDS.length;$("roundProgress").style.setProperty("--progress",((state.round+1)/ROUNDS.length*100)+"%");
 $("roundEyebrow").textContent="RONDA "+(state.round+1);$("roundTag").textContent=String(state.round+1).padStart(2,"0");$("questionText").textContent=ROUNDS[state.round].question;
 renderBoard($("answerBoard"));$("strikes").innerHTML=[0,1,2].map(i=>'<span class="'+(i<state.strikes?"active":"")+'">X</span>').join("");
 $("statusMessage").textContent=state.status;
 $("turnA").textContent="Juega "+state.teams[0];$("turnB").textContent="Juega "+state.teams[1];
 const opts='<option value="">Selecciona una respuesta</option>'+ROUNDS[state.round].answers.map((a,i)=>'<option value="'+i+'">'+(i+1)+'. '+escapeHtml(a[0])+' ('+a[1]+' pts)</option>').join("");
 const stealOpts='<option value="">Selecciona una respuesta oculta</option>'+ROUNDS[state.round].answers.map((a,i)=>({a,i})).filter(x=>!state.revealed.includes(x.i)).map(({a,i})=>'<option value="'+i+'">'+(i+1)+'. '+escapeHtml(a[0])+' ('+a[1]+' pts)</option>').join("");
 const availableOpts='<option value="">Selecciona una respuesta disponible</option>'+ROUNDS[state.round].answers.map((a,i)=>({a,i})).filter(x=>!state.revealed.includes(x.i)).map(({a,i})=>'<option value="'+i+'">'+(i+1)+'. '+escapeHtml(a[0])+' ('+a[1]+' pts)</option>').join("");
 $("answerSelect").innerHTML=availableOpts;$("stealSelect").innerHTML=stealOpts;
 $("correctBtn").disabled=state.phase!=="playing";$("wrongBtn").disabled=state.phase!=="playing";$("stealCorrect").disabled=state.phase!=="steal";$("stealWrong").disabled=state.phase!=="steal";
 $("nextRound").disabled=state.finished;$("nextRound").textContent=state.round>=5?"Finalizar partida →":"Siguiente ronda →";
 $("revealAll").disabled=state.phase==="finished-round";
 if(state.finished)showWinner();
}
function renderPublic(){ $("publicTeamA").textContent=state.teams[0];$("publicTeamB").textContent=state.teams[1];$("publicScoreA").textContent=state.scores[0];$("publicScoreB").textContent=state.scores[1];$("publicRound").textContent=(state.round+1)+" / 6";$("publicProgress").style.setProperty("--progress",((state.round+1)/6*100)+"%");$("publicEyebrow").textContent="RONDA "+(state.round+1);$("publicQuestion").textContent=ROUNDS[state.round].question;renderBoard($("publicAnswerBoard"),true);$("publicStrikes").innerHTML=[0,1,2].map(i=>'<span class="'+(i<state.strikes?"active":"")+'">X</span>').join("");$("publicStatus").textContent=state.status;if(state.finished)showWinner()}
function showWinner(){const el=$("winnerOverlay");if(!el)return;el.classList.remove("hidden");let title="¡EMPATE!";if(state.scores[0]>state.scores[1])title="¡GANÓ "+state.teams[0]+"!";if(state.scores[1]>state.scores[0])title="¡GANÓ "+state.teams[1]+"!";$("winnerTitle").textContent=title;$("winnerDescription").textContent=state.scores[0]+" puntos · "+state.scores[1]+" puntos"}
function chooseTurn(team){if(state.phase==="finished-round"||state.phase==="steal"||state.finished)return;state.turn=team;state.phase="playing";setStatus("Está jugando "+state.teams[team]+". ¡Que comience la ronda!");save()}
function selectIndex(id){const v=$(id).value;if(v===""){toast("Selecciona una respuesta primero.");return null}return Number(v)}
function correct(){if(state.phase!=="playing")return;const i=selectIndex("answerSelect");if(i===null)return;if(state.revealed.includes(i)){toast("Esa respuesta ya fue revelada.");return}state.revealed.push(i);const pts=ROUNDS[state.round].answers[i][1];setStatus("¡Correcto! "+state.teams[state.turn]+" encontró una respuesta de "+pts+" puntos. Puntaje de la ronda: "+state.revealed.reduce((n,k)=>n+ROUNDS[state.round].answers[k][1],0)+".");if(state.revealed.length===5)finishRound(state.turn,"¡Todas las respuestas encontradas!");else save()}
function wrong(){if(state.phase!=="playing")return;state.strikes++;try{if(publicChannel)publicChannel.postMessage({type:"strike",round:state.round,strikes:state.strikes});}catch(e){}if(state.strikes>=3){state.phase="steal";state.stealTeam=1-state.turn;setStatus("¡TERCER ERROR! "+state.teams[state.stealTeam]+" tiene la oportunidad de robar todos los puntos.");}else setStatus("¡Respuesta incorrecta! Error "+state.strikes+" de 3.");save()}
function finishRound(team,message){if(state.phase==="finished-round")return;state.awardedTeam=team;state.awardedPoints=totalRound();if(team!==null)state.scores[team]+=state.awardedPoints;state.phase="finished-round";setStatus(message+(team===null?"":" "+state.teams[team]+" gana "+state.awardedPoints+" puntos de la ronda."));save()}
function steal(correctAnswer){
 if(state.phase!=="steal")return;
 if(correctAnswer){
  const i=selectIndex("stealSelect");if(i===null)return;
  if(state.revealed.includes(i)){toast("Esa respuesta ya está revelada.");return}
  state.revealed.push(i);
 }
 state.lastResultEvent={type:"steal-result",round:state.round,success:!!correctAnswer,stamp:Date.now()+"-"+Math.random().toString(36).slice(2)};
 if(correctAnswer){
  finishRound(state.stealTeam,"¡ROBO CORRECTO! "+state.teams[state.stealTeam]+" se lleva los puntos.");
 }else{
  finishRound(state.turn,"¡ROBO FALLIDO! "+state.teams[state.turn]+" conserva los puntos de la ronda.");
 }
}
function resetRound(){if(state.awardedTeam!==null&&state.awardedTeam!==undefined)state.scores[state.awardedTeam]=Math.max(0,state.scores[state.awardedTeam]-state.awardedPoints);state.revealed=[];state.strikes=0;state.turn=null;state.phase="duel";state.stealTeam=null;state.awardedTeam=null;state.awardedPoints=0;state.status="Ronda reiniciada. Selecciona quién ganó el duelo inicial.";state.finished=false;save()}
function nextRound(){if(state.round>=ROUNDS.length-1){state.finished=true;state.status="¡Las 20 rondas han terminado!";save();return}state.round++;state.revealed=[];state.strikes=0;state.turn=null;state.phase="duel";state.stealTeam=null;state.awardedTeam=null;state.awardedPoints=0;state.status="Nueva ronda. Selecciona quién ganó el duelo inicial.";save()}
function resetGame(){if(!confirm("¿Reiniciar toda la partida y borrar los puntajes?"))return;state=freshState();save()}
function openPublic(){const url=new URL(location.href);url.searchParams.set("public","1");window.open(url.toString(),"CHILE_DICE_PUBLICO","width=1200,height=850")}
function init(){try{if("BroadcastChannel" in window){publicChannel=new BroadcastChannel("chile-dice-live");}}catch(e){}if(isPublic){$("hostApp").classList.add("hidden");$("publicApp").classList.remove("hidden");lastPublicStrikes=state.strikes;lastPublicResultStamp=state.lastResultEvent?.stamp||0;renderPublic();if(publicChannel)publicChannel.onmessage=e=>{const m=e.data||{};if(m.type==="strike"&&m.round===state.round){animateErrorFlash();}if(m.type==="steal-result"&&m.round===state.round){animateStealResult(!!m.success);}};window.addEventListener("storage",e=>{if(e.key==="chile-dice-result-event"&&e.newValue){try{const event=JSON.parse(e.newValue);if(event.type==="steal-result"&&event.round===state.round)animateStealResult(!!event.success);}catch(err){}}if(e.key===KEY&&e.newValue){const incoming=JSON.parse(e.newValue);if(incoming.round!==state.round)lastPublicStrikes=0;const newStrike=incoming.strikes>lastPublicStrikes;const resultEvent=incoming.lastResultEvent;const newResult=!!(resultEvent&&resultEvent.stamp&&resultEvent.stamp!==lastPublicResultStamp);state=incoming;renderPublic();if(newStrike)animateErrorFlash();if(newResult){animateStealResult(!!resultEvent.success);lastPublicResultStamp=resultEvent.stamp;}lastPublicStrikes=state.strikes}});window.addEventListener("focus",()=>{const incoming=loadState();if(incoming.round!==state.round)lastPublicStrikes=0;const newStrike=incoming.strikes>lastPublicStrikes;const resultEvent=incoming.lastResultEvent;const newResult=!!(resultEvent&&resultEvent.stamp&&resultEvent.stamp!==lastPublicResultStamp);state=incoming;renderPublic();if(newStrike)animateErrorFlash();if(newResult){animateStealResult(!!resultEvent.success);lastPublicResultStamp=resultEvent.stamp;}lastPublicStrikes=state.strikes});return}
 $("saveTeams").addEventListener("click",()=>{state.teams=[$("teamAInput").value.trim()||"Equipo 1",$("teamBInput").value.trim()||"Equipo 2"];save();toast("Nombres de equipos guardados.")});
 $("turnA").addEventListener("click",()=>chooseTurn(0));$("turnB").addEventListener("click",()=>chooseTurn(1));$("correctBtn").addEventListener("click",correct);$("wrongBtn").addEventListener("click",wrong);$("stealCorrect").addEventListener("click",()=>steal(true));$("stealWrong").addEventListener("click",()=>steal(false));$("revealAll").addEventListener("click",()=>{state.revealed=[0,1,2,3,4];finishRound(null,"Respuestas restantes reveladas. No se suman puntos adicionales.")});$("resetRound").addEventListener("click",resetRound);$("nextRound").addEventListener("click",nextRound);$("resetGame").addEventListener("click",resetGame);$("openPublic").addEventListener("click",openPublic);
 $("teamAInput").value=state.teams[0];$("teamBInput").value=state.teams[1];window.addEventListener("storage",e=>{if(e.key===KEY){toast("La partida se actualizó en otra ventana.")}});render()}
document.addEventListener("DOMContentLoaded",init);
