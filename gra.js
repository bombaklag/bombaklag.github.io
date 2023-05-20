var can,
    ctx,
    tablica = [],
    myszax = 0,
    myszay = 0,
    bombaklag = [],
    heros = [],
    pociski = [],
    t,
    staty,
    td,
    nazwachampa,
    statyt,
    udol,
    ugora,
    myszaxt = 0,
    myszayt = 0,
    rysowac,
    pieniadze = 4000,
    idek = 0,
    fala = 0,
    dospawna = [],
    zycie = 20,
    kwadraciok,
    nazwachampa,
    imgdata,
    kolko = new Image();
lewekolko = new Image();
mapar = new Image();
rybal = new Image();
rybap = new Image();
pieniazki = new Image();
serc = new Image();
spawner = [
    function () {
        heros.push(new boh1(myszaxt - 25, myszayt - 25, bombaklag[0].damage, bombaklag[0].range, bombaklag[0].atkspd));
    },
    function () {
        heros.push(new boh2(myszaxt - 25, myszayt - 25, bombaklag[1].damage, bombaklag[1].range, bombaklag[1].atkspd));
    },
    function () {
        heros.push(new boh3(myszaxt - 25, myszayt - 25, bombaklag[2].damage, bombaklag[2].range, bombaklag[2].atkspd));
    },
];
mapa = [
    {x: 1400, y: 363},
    {x: 1308, y: 364},
    {x: 1296, y: 367},
    {x: 1282, y: 370},
    {x: 1266, y: 371},
    {x: 1251, y: 369},
    {x: 1235, y: 365},
    {x: 1217, y: 362},
    {x: 1194, y: 359},
    {x: 1173, y: 360},
    {x: 1151, y: 358},
    {x: 1129, y: 358},
    {x: 1108, y: 360},

    {x: 1039, y: 380},
    {x: 1021, y: 394},
    {x: 1004, y: 400},
    {x: 995, y: 414},

    {x: 977, y: 446},
    {x: 963, y: 486},
    {x: 948, y: 505},
    {x: 938, y: 519},

    {x: 896, y: 547},
    {x: 874, y: 553},
    {x: 846, y: 556},
    {x: 827, y: 552},

    {x: 772, y: 547},
    {x: 750, y: 541},
    {x: 726, y: 531},
    {x: 703, y: 526},
    {x: 680, y: 519},
    {x: 655, y: 506},
    {x: 628, y: 493},

    {x: 528, y: 460},
    {x: 499, y: 449},
    {x: 468, y: 437},
    {x: 443, y: 426},

    {x: 384, y: 403},
    {x: 353, y: 394},
    {x: 323, y: 388},
    {x: 292, y: 389},

    {x: 232, y: 407},
    {x: 204, y: 417},
    {x: 179, y: 419},
    {x: 152, y: 424},
    {x: 126, y: 427},
    {x: 99, y: 428},
    {x: 72, y: 428},
    {x: 52, y: 426},
    {x: 25, y: 426},
    {x: 9, y: 426},
    {x: -20, y: 426},
    {x: -75, y: 426},
];
mapa2 = [
    {x: 910, y: 87},
    {x: 924, y: 118},
    {x: 948, y: 161},
    {x: 966, y: 200},
    {x: 981, y: 251},
    {x: 999, y: 294},
    {x: 1008, y: 342},
    {x: 1005, y: 387},
    {x: 995, y: 429},
    {x: 986, y: 445},
    {x: 977, y: 463},
    {x: 963, y: 486},
    {x: 948, y: 505},
    {x: 938, y: 519},
    {x: 920, y: 532},
    {x: 874, y: 553},
    {x: 846, y: 556},
    {x: 827, y: 552},
    {x: 800, y: 548},
    {x: 772, y: 547},
    {x: 726, y: 531},
    {x: 703, y: 526},
    {x: 655, y: 506},
    {x: 628, y: 493},
    {x: 528, y: 460},
    {x: 499, y: 449},
    {x: 468, y: 437},
    {x: 414, y: 417},
    {x: 384, y: 403},
    {x: 353, y: 394},
    {x: 323, y: 388},
    {x: 292, y: 389},
    {x: 232, y: 407},
    {x: 204, y: 417},
    {x: 179, y: 419},
    {x: 126, y: 427},
    {x: 99, y: 428},
    {x: 72, y: 428},
    {x: 52, y: 426},
    {x: 25, y: 426},
    {x: 9, y: 426},
    {x: -20, y: 426},
    {x: -75, y: 426},
];
falowana = [[], [8, 1], [5, 6], [8, 10]];
document.addEventListener("DOMContentLoaded", function () {
    can = document.querySelector(".can");
    ctx = can.getContext("2d");
    can.width = window.innerWidth * 0.7;
    can.height = window.innerHeight * 0.7;
    requestAnimationFrame(rysowanie);
    bombaklag.push(new boh1(100, 100, 15, 100, 0.5));
    bombaklag.push(new boh2(100, 100, 150, 100, 0.6));
    bombaklag.push(new boh3(100, 100, 50, 100, 0.6));
    t = document.querySelector("#bombaklag");
    for (let index = 1; index < bombaklag.length + 1; index++) {
        t.innerHTML += '<div class="nedypiel"><img class="pojduwina" alt="" src="img/bohater' + index + '.webp" id="boch:' + index + '"><div class="pierzyna"></div></div>';
        staty = document.querySelectorAll(".pierzyna");
        staty[index - 1].innerHTML += '<div><img alt="" class="statuwinki" src="img/mamona.webp"><span class="staty">' + bombaklag[index - 1].koszt + "</span></div>";
        staty[index - 1].innerHTML += '<div><img alt="" class="statuwinki" src="img/damage.webp"><span class="staty">' + bombaklag[index - 1].damage + "</span></div>";
        staty[index - 1].innerHTML += '<div><img alt="" class="statuwinki" src="img/atkspd.webp"><span class="staty">' + bombaklag[index - 1].atkspd + "</span></div>";
        staty[index - 1].innerHTML += '<div><img alt="" class="statuwinki" src="img/range.webp"><span class="staty">' + bombaklag[index - 1].range + "</span></div>";
    }

    td = document.querySelectorAll(".pojduwina");
    td.forEach((el) => {
        el.addEventListener("click", function () {
            kwadraciok = !kwadraciok;
            idek = el.id.split(":")[1];
        });
    });

    document.addEventListener("mousemove", function (x) {
        myszaxt = x.x - can.offsetLeft;
        myszayt = x.y - can.offsetTop;
    });

    can.addEventListener("click", function () {
        if (rysowac) {
            for (let index = 0; index < bombaklag.length; index++) {
                if (bombaklag[index].id == idek && pieniadze >= bombaklag[index].koszt) {
                    if (heros.length == 0 && kolorowy(95, 170, 80, imgdata.data[0], imgdata.data[1], imgdata.data[2]) < 40) {
                        pieniadze -= bombaklag[index].koszt;
                        spawner[idek - 1].call();
                    } else {
                        let dlugo = heros.length;
                        let przejscie = 0;
                        for (let i = 0; i < dlugo; i++) {
                            if (dystans(myszaxt, myszayt, heros[i].x + 25, heros[i].y + 25) > 60) {
                                przejscie++;
                            }
                        }
                        if (przejscie == dlugo && kolorowy(95, 170, 80, imgdata.data[0], imgdata.data[1], imgdata.data[2]) < 40) {
                            pieniadze -= bombaklag[index].koszt;
                            spawner[idek - 1].call();
                        }
                    }
                }
            }
        }
        nacisniecie();
        kwadraciok = false;
    });
    let guzik = document.querySelector("#fala");
    let numerf = document.querySelector("#nfala");
    guzik.addEventListener("click", function () {
        if (tablica.length == 0 && dospawna.length == 0) {
            fala++;
            numerf.innerText = "Numer rundy: " + fala;

            pusfale(falowana[fala]);
        }
    });
    ugora = document.querySelector("#ugora");
    udol = document.querySelector("#udol");
    ugora.addEventListener("click", function () {
        for (let i = 0; i < heros.length; i++) {
            if (heros[i].focused == 1) {
                heros[i].gorneulepszanie();
            }
        }
    });
    udol.addEventListener("click", function () {
        for (let i = 0; i < heros.length; i++) {
            if (heros[i].focused == 1) {
                heros[i].dolneulepszanie();
            }
        }
    });
    nazwachampa = document.querySelector("#postac");
    statyt = document.querySelector("#statyt");
    kolko.src = "img/tusk.webp";
    lewekolko.src = "img/tusklewy.webp";
    mapar.src = "img/mapa.webp";
    rybal.src = "img/ryba.jpg";
    rybap.src = "img/rybap.jpg";
    pieniazki.src = "img/mamona.webp";
    serc.src = "img/serc.webp";
});

class potworek {
    //przeciwnicy
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.hp = 100;
        this.maxyhp = this.hp;
        this.dotabeli = 0;
        this.szybkosc = 1;
        this.bomba = 0;
        this.textp = kolko;
        this.textl = lewekolko;
        this.sciezka = mapa;
        this.armor = 0;
        this.mresist = 0;
    }
    render() {
        ctx.save();
        ctx.translate(this.x, this.y);
        if (this.sciezka[this.dotabeli]) {
            if (Math.floor(Math.atan2(this.sciezka[this.dotabeli]["y"] - this.y, this.sciezka[this.dotabeli]["x"] - this.x) * (180 / Math.PI)) < 90 && Math.floor(Math.atan2(this.sciezka[this.dotabeli]["y"] - this.y, this.sciezka[this.dotabeli]["x"] - this.x) * (180 / Math.PI)) > -90) {
                ctx.drawImage(this.textp, -25, -25, 100, 100);
            } else {
                ctx.drawImage(this.textl, -25, -25, 100, 100);
            }
        }

        ctx.restore();
        this.maxhp();
    }
    update() {
        if (this.sciezka[this.dotabeli]) {
            this.chodzenie();
        }
        this.uszkodzenie();
    }

    maxhp() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x + 25 - this.maxyhp * 0.5, this.y - 50, this.maxyhp, 20);
        ctx.fillStyle = "green";
        if (this.hp <= 0) {
            this.hp = 0;
            pieniadze += 10 + Math.floor(Math.random() * 10);
            tablica.splice(tablica.indexOf(this), 1);
        }
        ctx.fillRect(this.x + 25 - this.maxyhp * 0.5, this.y - 50, this.hp, 20);
    }
    chodzenie() {
        this.x += Math.cos(Math.atan2(this.sciezka[this.dotabeli]["y"] - this.y, this.sciezka[this.dotabeli]["x"] - this.x)) * this.szybkosc;
        this.y += Math.sin(Math.atan2(this.sciezka[this.dotabeli]["y"] - this.y, this.sciezka[this.dotabeli]["x"] - this.x)) * this.szybkosc;
        if (dystans(this.x, this.y, this.sciezka[this.dotabeli]["x"], this.sciezka[this.dotabeli]["y"]) < 3) {
            this.dotabeli++;
        }
    }
    uszkodzenie() {
        if (this.dotabeli == this.sciezka.length) {
            zycie -= this.bomba;
            tablica.splice(tablica.indexOf(this), 1);
        }
    }
}
class zolniez extends potworek {
    constructor(x, y) {
        super(x, y);
        this.hp = 100;
        this.dotabeli = 0;
        this.maxyhp = 100;
        this.szybkosc = 4;
        this.spawn = 1;
        this.bomba = 1;
        this.sciezka = mapa;
        this.armor = 1;
        this.mresist = 1;
    }
}
class ryba extends potworek {
    constructor(x, y) {
        super(x, y);
        this.hp = 250;
        this.dotabeli = 0;
        this.maxyhp = 250;
        this.dotabeli = 0;
        this.szybkosc = 1;
        this.spawn = 1;
        this.bomba = 4;
        this.textl = rybal;
        this.textp = rybap;
        this.sciezka = mapa2;
        this.armor = 0.5;
        this.mresist = 1;
    }
}

//sojusznicy
class bohater {
    constructor(x, y, dmg, range, atkspd) {
        this.x = x;
        this.y = y;
        this.range = range;
        this.atkspd = atkspd;
        this.damage = dmg;
        this.focused = 0;
        this.czaszawsze = new Date().getTime();
        this.ugorny = 0;
        this.udolny = 0;
        this.velocity = 6;
        this.umocny = 0;
        this.penarmora = 0;
    }
    render() {
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, 50, 50);
        if (this.focused == 1) {
            ctx.fillStyle = "rgba(0,0,0,0.5)";
            ctx.beginPath();
            ctx.arc(this.x + 25, this.y + 25, this.range, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
        }
    }
    update() {
        this.bijatyka();
    }

    bijatyka() {
        for (let index = 0; index < tablica.length; index++) {
            if (dystans(this.x, this.y, tablica[index].x, tablica[index].y) < this.range) {
                let czas = new Date().getTime();
                if (czas - this.czaszawsze > this.atkspd * 1000) {
                    pociski.push(new strzal(this.x, this.y, index, this.velocity, this));
                    this.czaszawsze = czas;
                }
            }
        }
    }
    gorneulepszanie() {
        if (this.ugorny == 3) {
            this.ulepszenie4();
        }

        if (this.ugorny == 2 && this.umocny != 2) {
            this.ulepszenie3();
        }
        if (this.ugorny == 1) {
            this.ulepszenie2();
        }
        if (this.ugorny == 0) {
            this.ulepszenie1();
        }
    }

    dolneulepszanie() {
        if (this.udolny == 3) {
            this.ulepszenie4d();
        }
        if (this.udolny == 2 && this.umocny != 1) {
            this.ulepszenie3d();
        }
        if (this.udolny == 1) {
            this.ulepszenie2d();
        }
        if (this.udolny == 0) {
            this.ulepszenie1d();
        }
    }
}
class boh1 extends bohater {
    constructor(x, y, dmg, range, atkspd) {
        super(x, y, dmg, range, atkspd);
        this.id = 1;
        this.koszt = 100;
        this.name = "necoarc";
        this.velocity = 30;
        this.oneshot = 0;
        this.opis = "+10 damage<br>koszt: 200";
        this.opisd = "-0.2 atkspd<br>koszt: 150";
        this.penarmora = 0;
    }
    ulepszenie1() {
        let kosztowanie = 200;
        if (pieniadze >= kosztowanie) {
            pieniadze -= kosztowanie;
            this.damage += 10;
            this.ugorny = 1;
            this.opis = "+50 range<br>koszt: 150";
            ugora.innerHTML = this.opis;
        }
    }
    ulepszenie2() {
        let kosztowanie = 150;
        if (pieniadze >= kosztowanie) {
            pieniadze -= kosztowanie;
            this.range += 50;
            this.ugorny = 2;

            if (this.umocny == 0) {
                this.opis = "+100 damage<br>+0.2 atkspd<br>koszt: 400";
                ugora.innerHTML = this.opis;
            } else {
                this.opis = "maxed";
                ugora.innerHTML = this.opis;
            }
        }
    }

    ulepszenie3() {
        let kosztowanie = 400;
        if (pieniadze >= kosztowanie) {
            pieniadze -= kosztowanie;
            this.damage += 100;
            this.atkspd += 0.2;
            this.ugorny = 3;
            this.umocny = 2;
            this.opis = "+200 damage<br>+0.5 atkspd<br>+100 range<br>+Szansa na zabicie wroga jednym strzałem<br>+40 velocity<br>koszt: 1000";
            ugora.innerHTML = this.opis;
        }
    }
    ulepszenie4() {
        let kosztowanie = 1000;
        if (pieniadze >= kosztowanie) {
            this.damage += 200;
            this.atkspd += 0.5;
            this.range += 100;
            this.velocity += 40;
            this.opis = "maxed";
            ugora.innerText = this.opis;
            this.oneshot = 1;
            this.ugorny = 4;
        }
    }

    ulepszenie1d() {
        let kosztowanie = 200;
        if (pieniadze > kosztowanie) {
            pieniadze -= kosztowanie;
            this.atkspd -= 0.15;
            this.udolny = 1;
            this.opisd = "-5 damage<br>+25 range<br>koszt: 400";
            udol.innerHTML = this.opisd;
        }
    }
    ulepszenie2d() {
        let kosztowanie = 400;
        if (pieniadze >= kosztowanie) {
            pieniadze -= kosztowanie;
            this.range += 25;
            this.damage -= 5;
            this.udolny = 2;
            this.opisd = "-0.1 atkspd<br>+10 damage<br>koszt: 850";
            udol.innerHTML = this.opisd;
        }
    }
    ulepszenie3d() {
        let kosztowanie = 850;
        if (pieniadze >= kosztowanie) {
            pieniadze -= kosztowanie;
            this.atkspd -= 0.1;
            this.atkspd = this.atkspd.toFixed(2);
            this.damage += 10;
            this.umocny = 1;
            this.udolny = 3;
            this.opisd = "+25% penetracji pancerza<br>koszt: 1200";
            udol.innerHTML = this.opisd;
        }
    }
    ulepszenie4d() {
        let kosztowanie = 1200;
        if (pieniadze >= kosztowanie) {
            pieniadze -= kosztowanie;
            this.penarmora = 0.25;
            this.opisd = "maxed";
            udol.innerHTML = this.opisd;
        }
    }
}
class boh2 extends bohater {
    constructor(x, y, dmg, range, atkspd) {
        super(x, y, dmg, range, atkspd);
        this.id = 2;
        this.koszt = 200;
        this.name = "obama";
        this.velocity = 20;
    }
    ulepszenie1() {
        this.damage += 10;
    }
    ulepszenie2() {
        this.damage += 10;
    }
    ulepszenie3() {
        this.damage += 10;
    }
    ulepszenie4() {
        this.damage += 10;
    }
    ulepszenie1d() {}
    ulepszenie2d() {}
    ulepszenie3d() {}
    ulepszenie4d() {}
}
class boh3 extends bohater {
    constructor(x, y, dmg, range, atkspd) {
        super(x, y, dmg, range, atkspd);
        this.id = 3;
        this.koszt = 400;
        this.name = "duda";
    }
    ulepszenie1() {
        this.damage += 10;
        ugora.innerText = "u2";
    }
    ulepszenie2() {
        this.damage += 10;
        ugora.innerText = "u3";
    }
    ulepszenie3() {
        this.damage += 10;
        ugora.innerText = "u4";
    }
    ulepszenie4() {
        this.damage += 10;
        ugora.innerText = "max";
    }
    ulepszenie1d() {}
    ulepszenie2d() {}
    ulepszenie3d() {}
    ulepszenie4d() {}
}

class strzal {
    constructor(x, y, cel, szybkosc, odkogo) {
        this.x = x;
        this.y = y;
        this.damage = odkogo.damage;
        this.cel = cel;
        this.szybkosc = szybkosc;
        this.odkogo = odkogo;
    }
    update() {
        this.bijatyka();
        this.lot();
    }
    render() {
        ctx.fillStyle = "black";
        ctx.save();
        ctx.translate(this.x + 25, this.y + 25);
        if (tablica[this.cel]) {
            ctx.rotate(Math.atan2(tablica[this.cel]["y"] - this.y, tablica[this.cel]["x"] - this.x));
        }
        ctx.fillRect(25, -5, 10, 10);
        ctx.restore();
    }
    bijatyka() {
        if (!tablica[this.cel]) {
            pociski.splice(pociski.indexOf(this), 1);
        } else if (dystans(this.x, this.y, tablica[this.cel].x - 25, tablica[this.cel].y - 25) < 50) {
            if (this.odkogo.oneshot == 1) {
                if (Math.random() * 1 < 0.5) {
                    tablica[this.cel].hp -= tablica[this.cel].hp;
                }
            }
            tablica[this.cel].hp -= this.damage * (tablica[this.cel].armor + this.odkogo.penarmora < 1 ? tablica[this.cel].armor + this.odkogo.penarmora : 1) * tablica[this.cel].mresist;
            pociski.splice(pociski.indexOf(this), 1);
        }
    }
    lot() {
        try {
            this.x += Math.cos(Math.atan2(tablica[this.cel].y - 25 - this.y - 25, tablica[this.cel].x - 25 - this.x - 25)) * this.szybkosc;
            this.y += Math.sin(Math.atan2(tablica[this.cel].y - 25 - this.y - 25, tablica[this.cel].x - 25 - this.x - 25)) * this.szybkosc;
        } catch (error) {}
    }
}
function nacisniecie() {
    let przejscie = 0;
    for (let index = 0; index < heros.length; index++) {
        if (dystans(myszaxt, myszayt, heros[index].x + 25, heros[index].y + 25) < 30) {
            heros[index].focused = 1;
            przejscie = 1;
            nazwachampa.innerText = heros[index].name;
            statyt.innerText = "dmg: " + heros[index].damage + " range: " + heros[index].range + " atkspd: " + heros[index].atkspd;
            nazwachampa.setAttribute("style", "visibility:visible;");
            ugora.setAttribute("style", "visibility:visible;");
            udol.setAttribute("style", "visibility:visible;");
            statyt.setAttribute("style", "visibility:visible;");

            ugora.innerHTML = heros[index].opis;

            udol.innerHTML = heros[index].opisd;
        } else {
            if (przejscie == 0) {
                nazwachampa.setAttribute("style", "visibility:hidden;");
                ugora.setAttribute("style", "visibility:hidden;");
                udol.setAttribute("style", "visibility:hidden;");
                statyt.setAttribute("style", "visibility:hidden;");
            }
            heros[index].focused = 0;
        }
    }
}

function pusfale(a) {
    for (let i = 0; i < a[0]; i++) {
        dospawna.push(new zolniez(1400, 363));
    }
    for (let i = 0; i < a[1]; i++) {
        dospawna.push(new ryba(910, 87));
    }
}
let datas = new Date().getTime();
function exfali() {
    let data = new Date().getTime();
    if (dospawna.length > 0) {
        let i = dospawna.length - 1;
        if (data - datas > 1000 * dospawna[i].spawn) {
            tablica.push(dospawna[i]);
            dospawna.splice(i, 1);
            datas = data;
            i--;
        }
    }
}
window.addEventListener("click", function (x) {
    myszax = x.x - can.offsetLeft;
    myszay = x.y - can.offsetTop;
    // if (myszax > 0 && myszax < 1310 && myszay > 0 && myszay < 675) {
    //     // mapa2.push({
    //     //     x: myszax,
    //     //     y: myszay,
    //     // });
    //     // console.log(mapa2);
    // }
    console.log(myszax, myszay);
});
var c = 0;

var staryczas = 0;

//funkcja co rysuje

function rysowanie() {
    if (performance.now() - staryczas > 1000 / 60) {
        var fps = 1000 / (performance.now() - staryczas);
        ctx.clearRect(0, 0, can.width, can.height);

        ctx.drawImage(mapar, 0, 0, can.width, can.height);
        rysowac = kwadraciok;
        if (rysowac) {
            imgdata = ctx.getImageData(myszaxt, myszayt, 1, 1);
            ctx.fillRect(myszaxt - 12.5, myszayt - 12.5, 25, 25);
        }

        for (const pojda of tablica) {
            pojda.update();
            pojda.render(); //renderowanie przeciwnika
        }

        for (const pojdus of heros) {
            //renderowanie kolegi
            pojdus.update();
            pojdus.render();
        }
        for (const szczlanie of pociski) {
            //strzaly
            szczlanie.update();
            szczlanie.render();
        }

        exfali();
        ctx.beginPath();
        staryczas = performance.now();
        ctx.font = "50px Titillium Web black";
        ctx.fillStyle = "black";
        ctx.drawImage(pieniazki, 10, 20, 50, 50);
        ctx.fillText(pieniadze, 70, 60);
        ctx.drawImage(serc, 190, 20, 50, 50);
        ctx.fillText(zycie, 250, 60);
        ctx.fillText(fps.toFixed(0), 10, 120);
        // console.log(fps);
    }

    requestAnimationFrame(rysowanie); //zeby petla byla nieskonczona\
}
function dystans(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)); // pitogaras smiecie
}
function kolorowy(r1, g1, b1, r2, g2, b2) {
    return Math.sqrt(Math.pow(r1 - r2, 2) + Math.pow(g1 - g2, 2) + Math.pow(b1 - b2, 2));
}
