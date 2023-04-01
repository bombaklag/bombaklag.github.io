var can,
    ctx,
    tablica = [],
    myszax = 0,
    myszay = 0,
    i = 0,
    mapa = [{x: 400, y: 110}],
    bombaklag = [],
    heros = [],
    pociski = [],
    t,
    td,
    myszaxt,
    myszayt,
    rysowac,
    pieniadze = 400,
    idek = 0,
    spawner = [
        function () {
            heros.push(new boh1(myszaxt - 25, myszayt - 25, bombaklag[0].damage, bombaklag[0].range, bombaklag[0].atkspd));
        },
        function () {
            heros.push(new boh2(myszaxt - 25, myszayt - 25, bombaklag[1].damage, bombaklag[1].range, bombaklag[1].atkspd));
        },
    ];
document.addEventListener("DOMContentLoaded", function () {
    can = document.querySelector(".can");
    ctx = can.getContext("2d");
    can.width = window.innerWidth * 0.7;
    can.height = window.innerHeight * 0.7;
    requestAnimationFrame(rysowanie);

    tablica.push(new potworek(100, 100));
    addEventListener("keydown", function () {
        tablica.push(new potworek(Math.random() * 500, Math.random() * 500));
        tablica.push(new potworek(Math.random() * 500, Math.random() * 500));
        tablica.push(new potworek(Math.random() * 500, Math.random() * 500));
    });

    bombaklag.push(new boh1(100, 100, 10, 100, 0.6));
    bombaklag.push(new boh2(100, 100, 100, 100, 0.6));
    t = document.querySelector("#bombaklag");

    for (let index = 1; index < bombaklag.length + 1; index++) {
        t.innerHTML += '<div><img class="bombaklag" src="prezydentduda.jpg" id="boch:' + index + '"></div>';
    }
    td = document.querySelectorAll(".bombaklag");
    td.forEach((el) => {
        el.addEventListener("click", function () {
            rysowac = !rysowac;
            idek = el.id.split(":")[1];
        });
    });
    console.log(td);
    document.addEventListener("mousemove", function (x) {
        myszaxt = x.x - can.offsetLeft;
        myszayt = x.y - can.offsetTop;
    });

    can.addEventListener("click", function () {
        if (rysowac) {
            for (let index = 0; index < bombaklag.length; index++) {
                if (bombaklag[index].id == idek && pieniadze >= bombaklag[index].koszt) {
                    pieniadze -= bombaklag[index].koszt;
                    spawner[idek - 1].call();
                }
            }
        }
        rysowac = false;
        nacisniecie();
    });
});

class potworek {
    //przeciwnicy
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.hp = 100;
        this.maxyhp = 100;
        this.dotabeli = 0;
    }
    render() {
        ctx.fillStyle = "red";
        ctx.save();
        ctx.translate(this.x, this.y);
        if (mapa[this.dotabeli]) {
            ctx.rotate(Math.atan2(mapa[this.dotabeli]["y"] - this.y, mapa[this.dotabeli]["x"] - this.x));
        }
        ctx.fillRect(-25, -25, 50, 50);
        ctx.restore();
        this.maxhp();
    }
    update() {
        if (mapa[this.dotabeli]) {
            this.chodzenie();
        }
    }

    chodzenie() {
        this.x += Math.cos(Math.atan2(mapa[this.dotabeli]["y"] - this.y, mapa[this.dotabeli]["x"] - this.x)) * 3;
        this.y += Math.sin(Math.atan2(mapa[this.dotabeli]["y"] - this.y, mapa[this.dotabeli]["x"] - this.x)) * 3;
        if (dystans(this.x, this.y, mapa[this.dotabeli]["x"], mapa[this.dotabeli]["y"]) < 3) {
            console.log(Math.ceil(this.x), Math.ceil(this.y));
            this.dotabeli++;
        }
    }
    maxhp() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x - 50, this.y - 50, this.maxyhp, 20);
        ctx.fillStyle = "green";
        if (this.hp <= 0) {
            this.hp = 0;
            pieniadze += 10 + Math.floor(Math.random() * 10);
            tablica.splice(tablica.indexOf(this), 1);
            console.log("SMIERC TYRANOWI");
        }
        ctx.fillRect(this.x - 50, this.y - 50, this.hp, 20);
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
    }
    render() {
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, 50, 50);
    }
    update() {
        this.bijatyka();
    }

    bijatyka() {
        for (let index = 0; index < tablica.length; index++) {
            if (dystans(this.x, this.y, tablica[index].x, tablica[index].y) < this.range) {
                let czas = new Date().getTime();
                if (czas - this.czaszawsze > this.atkspd * 1000) {
                    pociski.push(new strzal(this.x, this.y, index, 6, this));
                    this.czaszawsze = czas;
                }
            }
        }
    }
}
class boh1 extends bohater {
    constructor(x, y, dmg, range, atkspd) {
        super(x, y, dmg, range, atkspd);
        this.id = 1;
        this.koszt = 100;
    }
}
class boh2 extends bohater {
    constructor(x, y, dmg, range, atkspd) {
        super(x, y, dmg, range, atkspd);
        this.id = 2;
        this.koszt = 200;
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
        } else if (dystans(this.x, this.y, tablica[this.cel].x - 25, tablica[this.cel].y - 25) < 60) {
            console.log("trafiony");

            tablica[this.cel].hp -= this.damage;

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
    for (let index = 0; index < heros.length; index++) {
        if (dystans(myszaxt, myszayt, heros[index].x + 10, heros[index].y + 10) < 50) {
            console.log("klik");
        }
    }
}

window.addEventListener("click", function (x) {
    myszax = x.x - can.offsetLeft;
    myszay = x.y - can.offsetTop;
    if (myszax > 0 && myszax < 1310 && myszay > 0 && myszay < 675) {
        mapa.push({
            x: myszax,
            y: myszay,
        });
    }
});
var c = 0;

var staryczas = 0;
//funkcja co rysuje
function rysowanie() {
    var fps = 1000 / (performance.now() - staryczas);
    ctx.clearRect(0, 0, can.width, can.height);
    if (rysowac) {
        ctx.fillRect(myszaxt - 12.5, myszayt - 12.5, 25, 25);
    }
    for (const pojda of tablica) {
        pojda.update();
        pojda.render(); //renderowanie przeciwnika
    }
    for (const pojdowina of mapa) {
        //punkty chodzenia
        ctx.fillStyle = "blue";
        ctx.fillRect(pojdowina.x - 5, pojdowina.y - 5, 10, 10);
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
    staryczas = performance.now();
    ctx.beginPath();
    ctx.font = "50px Titillium Web black";
    ctx.fillStyle = "black";
    ctx.fillText(pieniadze, 10, 60);
    // console.log(fps);
    requestAnimationFrame(rysowanie); //zeby petla byla nieskonczona\
}
function dystans(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)); // pitogaras smiecie
}
