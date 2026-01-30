// ⭐ BINTANG
for(let i=0;i<80;i++){
    let star=document.createElement("div");
    star.className="star";
    star.style.top=Math.random()*100+"%";
    star.style.left=Math.random()*100+"%";
    star.style.animationDelay=Math.random()*2+"s";
    document.body.appendChild(star);
}

let mode="login";
const audio=document.getElementById("bgm");

// 🎵 Musik setelah interaksi
document.body.addEventListener("click",()=>{
    audio.play().catch(()=>{});
},{once:true});

function toggleMode(){
    mode = mode==="login" ? "register" : "login";
    document.getElementById("title").innerText =
        mode==="login" ? "Login" : "Daftar";
    document.querySelector("button").innerText =
        mode==="login" ? "Masuk" : "Daftar";
    document.querySelector(".toggle").innerText =
        mode==="login" ? "Belum punya akun? Daftar" : "Sudah punya akun? Login";
    document.getElementById("msg").innerText="";
}

function submitForm(){
    const user=document.getElementById("username").value;
    const pass=document.getElementById("password").value;
    const msg=document.getElementById("msg");

    if(!user || !pass){
        msg.innerText="Lengkapi semua data";
        return;
    }

    if(mode==="register"){
        localStorage.setItem("user",user);
        localStorage.setItem("pass",pass);
        msg.innerText="Akun berhasil dibuat 💜";
        toggleMode();
    }else{
        const u=localStorage.getItem("user");
        const p=localStorage.getItem("pass");

        if(user===u && pass===p){
            msg.innerText="Login berhasil ✨";
        }else{
            msg.innerText="Username atau password salah";
        }
    }
}
