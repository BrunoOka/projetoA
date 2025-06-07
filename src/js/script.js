window.onload = function () {
    alert("SEJA BEM VINDO AO GAME");

    let p1 = prompt("Digite seu Nome");
    let p2 = prompt("Digite um PODER que gostaria de ter");
    let p3 = prompt("Digite o nome de um VILÃO");
    let p4 = prompt("Digite um LUGAR que gostaria de estar");

    let msg = document.getElementById('msg');

    msg.innerHTML = `<p>Olá ${p1}, o seu poder é <strong>${p2}</strong>, e você vai enfrentar o(a) <strong>${p3}</strong> em/no <strong>${p4}</strong>.</p>`;
}
