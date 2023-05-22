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
    pieniadze = 1000,
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
nekoark = new Image();
sakuya = new Image();
rozbujnik = new Image();
rozbujnikp = new Image();
cirno = new Image();
amogus = new Image();
amogusp = new Image();
czarny = new Image();
czarnyp = new Image();
jajojajo = new Image();
jajojajol = new Image();
joniw = new Image();
joniwl = new Image();
niewiem = new Image();
niewiemp = new Image();
pjonk = new Image();
pjonkp = new Image();
rybson = new Image();
rybsonl = new Image();
rycerzyk = new Image();
rycerzykp = new Image();
wulf = new Image();
wulfp = new Image();
kulaognia = new Image();
pigula = new Image();
noz = new Image();
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
falowana = [[], [5, 0, 0, 0, 0, 0, 0, 0, 0, 0], [4, 1, 0, 0, 0, 0, 0, 0, 0, 0], [6, 2, 1, 1, 0, 3, 0, 2, 0, 0], [3, 3, 2, 0, 0, 0, 0, 0, 0, 0], [4, 5, 1, 1, 4, 1, 1, 1, 0, 0], [5, 9, 2, 1, 2, 3, 1, 1, 0, 0], [9, 2, 3, 3, 7, 2, 1, 1, 1, 1], [2, 8, 1, 1, 5, 6, 3, 5, 2, 2], [10, 2, 5, 7, 3, 2, 2, 2, 2, 2], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], []];
document.addEventListener("DOMContentLoaded", function () {
    can = document.querySelector(".can");
    ctx = can.getContext("2d");
    can.width = window.innerWidth * 0.7;
    can.height = window.innerHeight * 0.7;
    requestAnimationFrame(rysowanie);
    bombaklag.push(new boh1(100, 100, 15, 140, 0.5));
    bombaklag.push(new boh2(100, 100, 30, 130, 0.8));
    bombaklag.push(new boh3(100, 100, 25, 120, 0.4));
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
            if (fala == 10) {
                win.style.visibility = "visible";
                rysowac = false;
                tablica = [];
                heros = [];
                dospawna = [];
                pociski = [];
            } else {
                fala++;
                numerf.innerText = "Numer rundy: " + fala;
                pieniadze += 200;
                pusfale(falowana[fala]);
            }
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
    let koniec = document.querySelector("#koniec");
    let statyfali = document.querySelector("#statyfali");
    let reset = document.querySelector("#reset");
    reset.addEventListener("click", function () {
        koniec.style.visibility = "hidden";
        statyfali.style.visibility = "hidden";

        zycie = 20;
        pieniadze = 1000;
        fala = 0;
        numerf.innerText = "Numer rundy: " + fala;
        tablica = [];
        heros = [];
        dospawna = [];
        pociski = [];
    });
    let win = document.querySelector("#win");
    let winreset = document.querySelector("#winreset");
    winreset.addEventListener("click", function () {
        win.style.visibility = "hidden";
        zycie = 20;
        pieniadze = 1000;
        fala = 0;
        tablica = [];
        heros = [];
        dospawna = [];
        pociski = [];
    });

    mapar.src = "img/mapa.webp";
    pieniazki.src = "img/mamona.webp";
    serc.src = "img/serc.webp";
    nekoark.src = "img/bohater1.webp";
    sakuya.src = "img/sakuya.webp";
    cirno.src = "img/cirno.webp";
    amogus.src = "img/amogus.webp";
    amogusp.src = "img/amogusp.webp";
    rozbujnik.src = "img/bandyta.webp";
    rozbujnikp.src = "img/bandytap.webp";
    czarny.src = "img/czarny.webp";
    czarnyp.src = "img/czarnyp.webp";
    jajojajo.src = "img/jajojajo.webp";
    jajojajol.src = "img/jajojajol.webp";
    joniw.src = "img/joniw.webp";
    joniwl.src = "img/joniwl.webp";
    niewiem.src = "img/niewiem.webp";
    niewiemp.src = "img/niewiemp.webp";
    pjonk.src = "img/pjonk.webp";
    pjonkp.src = "img/pjonkp.webp";
    rybson.src = "img/rybson.webp";
    rybsonl.src = "img/rybsonl.webp";
    rycerzyk.src = "img/rycerzyk.webp";
    rycerzykp.src = "img/rycerzykp.webp";
    wulf.src = "img/wulf.webp";
    wulfp.src = "img/wulf.webp";
    noz.src = "img/nusz.webp";
    kulaognia.src = "img/fireball.webp";
    pigula.src = "img/pigul.webp";
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
        this.bomba = 1;
        this.textp = kolko;
        this.textl = lewekolko;
        this.sciezka = mapa;
        this.armor = 0;
        this.mresist = 0;
        this.drop = 10;
        this.poisoned = 0;
        this.poisonedtime = 0;
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
        this.poison();
    }

    maxhp() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x + 25 - this.maxyhp * 0.5, this.y - 50, this.maxyhp, 20);
        ctx.fillStyle = "green";
        if (this.hp <= 0) {
            this.hp = 0;
            pieniadze += this.drop + Math.floor(Math.random() * 10);
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
            if (zycie <= 0) {
                zycie = 0;
                koniec.style.visibility = "visible";
                statyfali.style.visibility = "visible";
                statyfali.innerText = "Przetrwałeś " + fala + " fal";
                rysowac = false;
                tablica = [];
                heros = [];
                dospawna = [];
                pociski = [];
            }
        }
    }

    poison() {
        if (this.poisoned == 1) {
            let czas = new Date().getTime();
            if (czas - this.poisonedtime > 1000) {
                this.poisonedtime = czas;
                this.hp -= 10;
            }
        }
    }
}
class bandyta extends potworek {
    constructor(x, y) {
        super(x, y);
        this.hp = 100;
        this.maxyhp = 100;
        this.szybkosc = 3;
        this.spawn = 0.5;
        this.sciezka = mapa;
        this.armor = 1;
        this.mresist = 1;
        this.drop = 30;
        this.textp = rozbujnikp;
        this.textl = rozbujnik;
    }
}
class bandytamocniejszy extends potworek {
    constructor(x, y) {
        super(x, y);
        this.hp = 200;
        this.maxyhp = 200;
        this.szybkosc = 2;
        this.bomba = 2;
        this.spawn = 0.7;
        this.sciezka = mapa;
        this.armor = 1;
        this.mresist = 1;
        this.drop = 40;
        this.textp = amogusp;
        this.textl = amogus;
    }
}
class opancerzonylekko extends potworek {
    constructor(x, y) {
        super(x, y);
        this.hp = 150;
        this.maxyhp = 150;
        this.szybkosc = 3;
        this.spawn = 0.5;
        this.sciezka = mapa;
        this.armor = 0.7;
        this.mresist = 1;
        this.drop = 45;
        this.textp = jajojajo;
        this.textl = jajojajol;
    }
}
class opancerzonyciezko extends potworek {
    constructor(x, y) {
        super(x, y);
        this.hp = 200;
        this.maxyhp = 200;
        this.szybkosc = 3;
        this.bomba = 2;
        this.spawn = 1.2;
        this.sciezka = mapa;
        this.armor = 0.4;
        this.mresist = 1;
        this.drop = 60;
        this.textp = rycerzykp;
        this.textl = rycerzyk;
    }
}

class szybcior extends potworek {
    constructor(x, y) {
        super(x, y);
        this.hp = 100;
        this.maxyhp = 100;
        this.szybkosc = 4.5;
        this.spawn = 1;
        this.sciezka = mapa;
        this.armor = 1;
        this.mresist = 0.5;
        this.drop = 40;
        this.textp = wulfp;
        this.textl = wulf;
    }
}
class ryba extends potworek {
    constructor(x, y) {
        super(x, y);
        this.hp = 100;
        this.maxyhp = 100;
        this.szybkosc = 1;
        this.spawn = 0.5;
        this.sciezka = mapa2;
        this.armor = 1;
        this.mresist = 0.6;
        this.drop = 30;
        this.textp = rybson;
        this.textl = rybsonl;
    }
}
class sum extends potworek {
    constructor(x, y) {
        super(x, y);
        this.hp = 250;
        this.maxyhp = 250;
        this.szybkosc = 2;
        this.spawn = 0.5;
        this.sciezka = mapa2;
        this.armor = 0.6;
        this.mresist = 1;
        this.drop = 70;
        this.textp = niewiemp;
        this.textl = niewiem;
    }
}
class pstrag extends potworek {
    constructor(x, y) {
        super(x, y);
        this.hp = 150;
        this.maxyhp = 150;
        this.szybkosc = 4;
        this.spawn = 0.6;
        this.sciezka = mapa2;
        this.armor = 1;
        this.mresist = 1;
        this.drop = 40;
        this.textp = czarnyp;
        this.textl = czarny;
    }
}
class karas extends potworek {
    constructor(x, y) {
        super(x, y);
        this.hp = 300;
        this.maxyhp = 300;
        this.szybkosc = 1;
        this.spawn = 1;
        this.bomba = 3;
        this.sciezka = mapa2;
        this.armor = 0.7;
        this.mresist = 1;
        this.drop = 55;
        this.textp = joniw;
        this.textl = joniwl;
    }
}
class nedyryba extends potworek {
    constructor(x, y) {
        super(x, y);
        this.hp = 250;
        this.maxyhp = 250;
        this.szybkosc = 2;
        this.spawn = 0.5;
        this.bomba = 4;
        this.sciezka = mapa2;
        this.armor = 0.4;
        this.mresist = 0.8;
        this.drop = 100;
        this.textp = pjonkp;
        this.textl = pjonk;
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
        this.magicpen = 1;
        this.specpocisk = 0;
        this.text = nekoark;
    }
    render() {
        ctx.drawImage(this.text, this.x, this.y, 50, 50);
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
        this.name = "Necoarc";
        this.velocity = 30;
        this.oneshot = 0;
        this.opis = "+10 damage<br>koszt: 200";
        this.opisd = "-0.2 atkspd<br>koszt: 150";
        this.penarmora = 0;
        this.text = nekoark;
        this.textatk = pigula;
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
                this.opis = "+80 damage<br>+0.2 atkspd<br>koszt: 600";
                ugora.innerHTML = this.opis;
            } else {
                this.opis = "maxed";
                ugora.innerHTML = this.opis;
            }
            console.log(this.udolny);
        }
    }

    ulepszenie3() {
        let kosztowanie = 600;
        if (pieniadze >= kosztowanie) {
            pieniadze -= kosztowanie;
            this.damage += 80;
            this.atkspd += 0.2;
            this.ugorny = 3;
            this.umocny = 1;
            this.opis = "+120 damage<br>+0.7 atkspd<br>+100 range<br>+Szansa na zabicie wroga jednym strzałem<br>+40 velocity<br>koszt: 1200";
            ugora.innerHTML = this.opis;
            if (this.udolny == 2) {
                this.opisd = "maxed";
                udol.innerHTML = this.opisd;
            }
        }
    }
    ulepszenie4() {
        let kosztowanie = 1200;
        if (pieniadze >= kosztowanie) {
            pieniadze -= kosztowanie;
            this.damage += 120;
            this.atkspd += 0.7;
            this.range += 100;
            this.velocity += 40;
            this.opis = "maxed";
            ugora.innerText = this.opis;
            this.oneshot = 1;
            this.ugorny = 4;
            this.specpocisk = 1;
        }
    }

    ulepszenie1d() {
        let kosztowanie = 150;
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
            if (this.umocny == 0) {
                this.opisd = "-0.1 atkspd<br>+10 damage<br>koszt: 850";
                udol.innerHTML = this.opisd;
            } else {
                this.opisd = "maxed";
                udol.innerHTML = this.opisd;
            }
            console.log(this.opisd);
        }
    }
    ulepszenie3d() {
        let kosztowanie = 850;
        if (pieniadze >= kosztowanie) {
            pieniadze -= kosztowanie;
            this.atkspd -= 0.1;
            this.atkspd = this.atkspd.toFixed(2);
            this.damage += 10;
            this.umocny = 2;
            this.udolny = 3;
            this.opisd = "+25% penetracji pancerza<br>koszt: 1200";
            udol.innerHTML = this.opisd;
            if (this.ugorny == 2) {
                this.opis = "maxed";
                ugora.innerHTML = this.opis;
            }
        }
    }
    ulepszenie4d() {
        let kosztowanie = 1200;
        if (pieniadze >= kosztowanie) {
            pieniadze -= kosztowanie;
            this.penarmora = 0.25;
            this.udolny = 4;
            this.opisd = "maxed";
            udol.innerHTML = this.opisd;
        }
    }
}
class boh2 extends bohater {
    constructor(x, y, dmg, range, atkspd) {
        super(x, y, dmg, range, atkspd);
        this.id = 2;
        this.koszt = 300;
        this.name = "Sakuya";
        this.velocity = 20;
        this.penarmora = 0.2;
        this.velocity = 14;
        this.critchance = 0;
        this.procentowe = 0;
        this.opis = "+15 damage<br>+6 velocity<br>koszt: 200";
        this.opisd = "+5 damage<br>+30 range<br>koszt: 400";
        this.text = sakuya;
        this.textatk = noz;
    }
    ulepszenie1() {
        let kosztowanie = 200;
        if (pieniadze >= kosztowanie) {
            pieniadze -= kosztowanie;
            this.damage += 15;
            this.velocity += 6;
            this.ugorny = 1;
            this.opis = "+10 damage<br>+30 range<br>koszt: 600";
            ugora.innerHTML = this.opis;
        }
    }
    ulepszenie2() {
        let kosztowanie = 600;
        if (pieniadze >= kosztowanie) {
            pieniadze -= kosztowanie;
            this.damage += 10;
            this.range += 30;
            this.ugorny = 2;
            ugora.innerHTML = this.opis;
            if (this.umocny == 0) {
                this.opis = "-0.2 atkspd<br>koszt: 1000";
                ugora.innerHTML = this.opis;
            } else {
                this.opis = "maxed";
                udol.innerHTML = this.opis;
            }
        }
    }
    ulepszenie3() {
        let kosztowanie = 1000;
        if (pieniadze >= kosztowanie) {
            pieniadze -= kosztowanie;
            this.atkspd -= 0.2;
            this.atkspd = this.atkspd.toFixed(1);
            this.ugorny = 3;
            this.umocny = 1;
            this.opis = "-60 damage<br>-0.5 atkspd<br>+40% szansy na trafienie krytyczne<br>koszt: 1500";

            ugora.innerHTML = this.opis;
            if (this.udolny == 2) {
                this.opisd = "maxed";
                udol.innerHTML = this.opisd;
            }
        }
    }
    ulepszenie4() {
        let kosztowanie = 1500;
        if (pieniadze >= kosztowanie) {
            pieniadze -= kosztowanie;
            this.damage -= 55;
            this.atkspd -= 0.3;
            this.opis = "maxed";
            ugora.innerText = this.opis;
            this.critchance = 1;
            this.ugorny = 4;
            this.specpocisk = 1;
        }
    }
    ulepszenie1d() {
        let kosztowanie = 400;
        if (pieniadze >= kosztowanie) {
            pieniadze -= kosztowanie;
            this.damage += 5;
            this.range += 30;
            this.udolny = 1;
            this.opisd = "+5 damage<br>+25 range<br>+0.2 atkspd<br>koszt: 650";
            udol.innerHTML = this.opisd;
        }
    }
    ulepszenie2d() {
        let kosztowanie = 650;
        if (pieniadze >= kosztowanie) {
            pieniadze -= kosztowanie;
            this.damage += 5;
            this.range += 25;
            this.atkspd += 0.2;
            this.udolny = 2;
            udol.innerHTML = this.opisd;
            if (this.umocny == 0) {
                this.opisd = "+15 damage<br>-0.1 atkspd<br>koszt: 1000";
                udol.innerHTML = this.opisd;
            } else {
                this.opisd = "maxed";
                udol.innerHTML = this.opisd;
            }
        }
    }
    ulepszenie3d() {
        let kosztowanie = 1000;
        if (pieniadze >= kosztowanie) {
            pieniadze -= kosztowanie;
            this.atkspd -= 0.1;
            this.damage += 15;
            this.umocny = 2;
            this.udolny = 3;
            this.opisd = "+10% akt. zdrowia celu damage<br>koszt: 1200";
            udol.innerHTML = this.opisd;
            if (this.ugorny == 2) {
                this.opis = "maxed";
                ugora.innerHTML = this.opis;
            }
        }
    }
    ulepszenie4d() {
        let kosztowanie = 1200;
        if (pieniadze >= kosztowanie) {
            pieniadze -= kosztowanie;
            this.procentowe = 1;
            this.udolny = 4;
            this.opisd = "maxed";
            udol.innerHTML = this.opisd;
            this.specpocisk = 1;
        }
    }
}
class boh3 extends bohater {
    constructor(x, y, dmg, range, atkspd) {
        super(x, y, dmg, range, atkspd);
        this.id = 3;
        this.koszt = 400;
        this.name = "Cirno";
        this.velocity = 16;
        this.specpocisk = 0;
        this.poison = 0;
        this.area = 0;
        this.penarmora = 1;
        this.magicpen = 0;
        this.opis = "+40 range<br>koszt: 400";
        this.opisd = "+10 damage<br>koszt: 250";
        this.text = cirno;
        this.textatk = kulaognia;
    }
    ulepszenie1() {
        let kosztowanie = 400;
        if (pieniadze >= kosztowanie) {
            pieniadze -= kosztowanie;
            this.range += 40;
            this.ugorny = 1;
            this.opis = "+15 damage<br>+15 velocity<br>koszt: 600";
            ugora.innerHTML = this.opis;
        }
    }
    ulepszenie2() {
        let kosztowanie = 600;
        if (pieniadze >= kosztowanie) {
            pieniadze -= kosztowanie;
            this.damage += 15;
            this.velocity += 15;
            this.ugorny = 2;

            if (this.umocny == 0) {
                this.opis = "-0.15 atkspd<br>koszt: 950";
                ugora.innerHTML = this.opis;
            } else {
                this.opis = "maxed";
                ugora.innerHTML = this.opis;
            }
            console.log(this.udolny);
        }
    }

    ulepszenie3() {
        let kosztowanie = 950;
        if (pieniadze >= kosztowanie) {
            pieniadze -= kosztowanie;
            this.atkspd -= 0.15;
            this.ugorny = 3;
            this.umocny = 1;
            this.opis = "+25 range<br>+Palenie przeciwników<br>koszt: 1000";
            ugora.innerHTML = this.opis;
            if (this.udolny == 2) {
                this.opisd = "maxed";
                udol.innerHTML = this.opisd;
            }
        }
    }
    ulepszenie4() {
        let kosztowanie = 1000;
        if (pieniadze >= kosztowanie) {
            pieniadze -= kosztowanie;

            this.range += 25;
            this.opis = "maxed";
            ugora.innerText = this.opis;
            this.poison = 1;
            this.ugorny = 4;
            this.specpocisk = 1;
        }
    }

    ulepszenie1d() {
        let kosztowanie = 250;
        if (pieniadze > kosztowanie) {
            pieniadze -= kosztowanie;
            this.damage += 10;
            this.udolny = 1;
            this.opisd = "+20 range<br>+10 damage<br>koszt: 600";
            udol.innerHTML = this.opisd;
        }
    }
    ulepszenie2d() {
        let kosztowanie = 400;
        if (pieniadze >= kosztowanie) {
            pieniadze -= kosztowanie;
            this.range += 20;
            this.damage += 10;
            this.udolny = 2;
            if (this.umocny == 0) {
                this.opisd = "+20 damage<br>+1 atkspd<br>koszt: 1000";
                udol.innerHTML = this.opisd;
            } else {
                this.opisd = "maxed";
                udol.innerHTML = this.opisd;
            }
        }
    }
    ulepszenie3d() {
        let kosztowanie = 1000;
        if (pieniadze >= kosztowanie) {
            pieniadze -= kosztowanie;
            this.atkspd += 1;
            this.atkspd = this.atkspd.toFixed(1);
            this.damage += 20;
            this.umocny = 2;
            this.udolny = 3;
            this.opisd = "+20 damage<br>+Obszarowy atak<br>koszt: 1600";
            udol.innerHTML = this.opisd;
            if (this.ugorny == 2) {
                this.opis = "maxed";
                ugora.innerHTML = this.opis;
            }
        }
    }
    ulepszenie4d() {
        let kosztowanie = 1600;
        if (pieniadze >= kosztowanie) {
            pieniadze -= kosztowanie;
            this.area = 1;
            this.damage += 20;
            this.udolny = 4;
            this.opisd = "maxed";
            udol.innerHTML = this.opisd;
            this.specpocisk = 1;
        }
    }
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
        ctx.save();
        ctx.translate(this.x + 25, this.y + 25);
        if (tablica[this.cel]) {
            ctx.rotate(Math.atan2(tablica[this.cel]["y"] - this.y, tablica[this.cel]["x"] - this.x));
        }
        ctx.drawImage(this.odkogo.textatk, -25, -25, 50, 50);
        ctx.restore();
    }

    bijatyka() {
        if (!tablica[this.cel]) {
            pociski.splice(pociski.indexOf(this), 1);
        } else if (dystans(this.x, this.y, tablica[this.cel].x - 25, tablica[this.cel].y - 25) < 50) {
            if (this.odkogo.specpocisk == 1) {
                if (this.odkogo.oneshot == 1) {
                    if (Math.random() * 1 > 0.7) {
                        tablica[this.cel].hp -= tablica[this.cel].hp;
                    } else {
                        tablica[this.cel].hp -= this.damage * (tablica[this.cel].armor + this.odkogo.penarmora < 1 ? tablica[this.cel].armor + this.odkogo.penarmora : 1) * (tablica[this.cel].mresist + this.odkogo.magicpen < 1 ? tablica[this.cel].mresist + this.odkogo.magicpen : 1);
                    }
                }
                if (this.odkogo.critchance == 1) {
                    if (Math.random() * 1 > 0.6) {
                        tablica[this.cel].hp -= this.damage * (tablica[this.cel].armor + this.odkogo.penarmora < 1 ? tablica[this.cel].armor + this.odkogo.penarmora : 1) * (tablica[this.cel].mresist + this.odkogo.magicpen < 1 ? tablica[this.cel].mresist + this.odkogo.magicpen : 1) * 4;
                    } else {
                        tablica[this.cel].hp -= this.damage * (tablica[this.cel].armor + this.odkogo.penarmora < 1 ? tablica[this.cel].armor + this.odkogo.penarmora : 1) * (tablica[this.cel].mresist + this.odkogo.magicpen < 1 ? tablica[this.cel].mresist + this.odkogo.magicpen : 1);
                    }
                }
                if (this.odkogo.procentowe == 1) {
                    tablica[this.cel].hp -= tablica[this.cel].hp * 0.1 + this.damage * (tablica[this.cel].armor + this.odkogo.penarmora < 1 ? tablica[this.cel].armor + this.odkogo.penarmora : 1) * (tablica[this.cel].mresist + this.odkogo.magicpen < 1 ? tablica[this.cel].mresist + this.odkogo.magicpen : 1);
                }
                if (this.odkogo.poison == 1) {
                    tablica[this.cel].hp -= this.damage * (tablica[this.cel].armor + this.odkogo.penarmora < 1 ? tablica[this.cel].armor + this.odkogo.penarmora : 1) * (tablica[this.cel].mresist + this.odkogo.magicpen < 1 ? tablica[this.cel].mresist + this.odkogo.magicpen : 1);
                    tablica[this.cel].poisoned = 1;
                }
                if (this.odkogo.area == 1) {
                    tablica[this.cel].hp -= this.damage * (tablica[this.cel].armor + this.odkogo.penarmora < 1 ? tablica[this.cel].armor + this.odkogo.penarmora : 1) * (tablica[this.cel].mresist + this.odkogo.magicpen < 1 ? tablica[this.cel].mresist + this.odkogo.magicpen : 1);
                    for (let index = 0; index < tablica.length; index++) {
                        if (dystans(tablica[this.cel].x, tablica[this.cel].y, tablica[index].x, tablica[index].y) < 100 && index != this.cel) {
                            tablica[index].hp -= this.damage * (tablica[index].armor + this.odkogo.penarmora < 1 ? tablica[index].armor + this.odkogo.penarmora : 1) * (tablica[index].mresist + this.odkogo.magicpen < 1 ? tablica[index].mresist + this.odkogo.magicpen : 1);
                        }
                    }
                }

                pociski.splice(pociski.indexOf(this), 1);
            } else {
                tablica[this.cel].hp -= this.damage * (tablica[this.cel].armor + this.odkogo.penarmora < 1 ? tablica[this.cel].armor + this.odkogo.penarmora : 1) * (tablica[this.cel].mresist + this.odkogo.magicpen < 1 ? tablica[this.cel].mresist + this.odkogo.magicpen : 1);
                pociski.splice(pociski.indexOf(this), 1);
            }
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
            nazwachampa.style.visibility = "visible";
            ugora.style.visibility = "visible";
            udol.style.visibility = "visible";
            statyt.style.visibility = "visible";

            ugora.innerHTML = heros[index].opis;

            udol.innerHTML = heros[index].opisd;
        } else {
            if (przejscie == 0) {
                nazwachampa.style.visibility = "hidden";
                ugora.style.visibility = "hidden";
                udol.style.visibility = "hidden";
                statyt.style.visibility = "hidden";
            }
            heros[index].focused = 0;
        }
    }
}

function pusfale(a) {
    for (let i = 0; i < a[0]; i++) {
        dospawna.push(new bandyta(1400, 363));
    }
    for (let i = 0; i < a[1]; i++) {
        dospawna.push(new bandytamocniejszy(1400, 363));
    }
    for (let index = 0; index < a[2]; index++) {
        dospawna.push(new opancerzonylekko(1400, 363));
    }
    for (let index = 0; index < a[3]; index++) {
        dospawna.push(new opancerzonyciezko(1400, 363));
    }
    for (let index = 0; index < a[4]; index++) {
        dospawna.push(new szybcior(1400, 363));
    }
    for (let index = 0; index < a[5]; index++) {
        dospawna.push(new ryba(910, 10));
    }
    for (let index = 0; index < a[6]; index++) {
        dospawna.push(new sum(910, 10));
    }
    for (let index = 0; index < a[7]; index++) {
        dospawna.push(new pstrag(910, 10));
    }
    for (let index = 0; index < a[8]; index++) {
        dospawna.push(new karas(910, 10));
    }
    for (let index = 0; index < a[9]; index++) {
        dospawna.push(new nedyryba(910, 10));
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
            ctx.fillRect(myszaxt - 25, myszayt - 25, 50, 50);
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

        if (fala == 10 && tablica.length == 0) {
            win.style.visibility = "visible";
            rysowac = false;
            tablica = [];
            heros = [];
            dospawna = [];
            pociski = [];
        }

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
