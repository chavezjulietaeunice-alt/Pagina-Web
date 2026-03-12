function mostrarInfo(artista){

let info = document.getElementById("infoArtista");
let seccion = document.querySelector(".info");

seccion.classList.add("mostrar");

if(artista==="taylor"){
info.innerHTML=`
<h3>🎤 Taylor Swift</h3>
<b>Canciones famosas:</b>
<ul>
<li>Love Story</li>
<li>Shake It Off</li>
<li>Blank Space</li>
</ul>
<b>Premios:</b>
<ul>
<li>14 premios Grammy</li>
</ul>`;
}

if(artista==="dua"){
info.innerHTML=`
<h3>⭐ Dua Lipa</h3>
<b>Canciones famosas:</b>
<ul>
<li>Levitating</li>
<li>New Rules</li>
<li>Don't Start Now</li>
</ul>
<b>Premios:</b>
<ul>
<li>3 premios Grammy</li>
</ul>`;
}

if(artista==="badbunny"){
info.innerHTML=`
<h3>🔥 Bad Bunny</h3>
<b>Canciones famosas:</b>
<ul>
<li>Tití Me Preguntó</li>
<li>Moscow Mule</li>
<li>Callaíta</li>
</ul>
<b>Premios:</b>
<ul>
<li>3 premios Grammy</li>
</ul>`;
}

if(artista==="ed"){
info.innerHTML=`
<h3>🎸 Ed Sheeran</h3>
<b>Canciones famosas:</b>
<ul>
<li>Shape of You</li>
<li>Perfect</li>
<li>Thinking Out Loud</li>
</ul>
<b>Premios:</b>
<ul>
<li>4 premios Grammy</li>
</ul>`;
}

if(artista==="coldplay"){
info.innerHTML=`
<h3>🌈 Coldplay</h3>
<b>Canciones famosas:</b>
<ul>
<li>Yellow</li>
<li>Fix You</li>
<li>Viva La Vida</li>
</ul>
<b>Premios:</b>
<ul>
<li>7 premios Grammy</li>
</ul>`;
}

if(artista==="imagine"){
info.innerHTML=`
<h3>⚡ Imagine Dragons</h3>
<b>Canciones famosas:</b>
<ul>
<li>Believer</li>
<li>Thunder</li>
<li>Radioactive</li>
</ul>
<b>Premios:</b>
<ul>
<li>Billboard Music Awards</li>
</ul>`;
}

if(artista==="billie"){
info.innerHTML=`
<h3>🌙 Billie Eilish</h3>
<b>Canciones famosas:</b>
<ul>
<li>Bad Guy</li>
<li>Happier Than Ever</li>
<li>Ocean Eyes</li>
</ul>
<b>Premios:</b>
<ul>
<li>9 premios Grammy</li>
</ul>`;
}

if(artista==="ariana"){
info.innerHTML=`
<h3>🎶 Ariana Grande</h3>
<b>Canciones famosas:</b>
<ul>
<li>7 Rings</li>
<li>Thank U, Next</li>
<li>Positions</li>
</ul>
<b>Premios:</b>
<ul>
<li>2 premios Grammy</li>
</ul>`;
}

if(artista==="karolg"){
info.innerHTML=`
<h3>💎 Karol G</h3>
<b>Canciones famosas:</b>
<ul>
<li>Tusa</li>
<li>Provenza</li>
<li>Bichota</li>
</ul>
<b>Premios:</b>
<ul>
<li>1 premio Grammy</li>
<li>Latin Grammy</li>
</ul>`;
}

if(artista==="feid"){
info.innerHTML=`
<h3>🟢 Feid</h3>
<b>Canciones famosas:</b>
<ul>
<li>Ferxxo 100</li>
<li>Normal</li>
<li>Hey Mor</li>
</ul>
<b>Premios:</b>
<ul>
<li>Nominaciones a Latin Grammy</li>
</ul>`;
}

if(artista==="rauw"){
info.innerHTML=`
<h3>⚡ Rauw Alejandro</h3>
<b>Canciones famosas:</b>
<ul>
<li>Todo de Ti</li>
<li>Desesperados</li>
<li>Punto 40</li>
</ul>
<b>Premios:</b>
<ul>
<li>Latin Grammy</li>
</ul>`;
}
}