var elem = document.documentElement;
var lvl;
var m;
var count = 0;
var contador_trash = 0;
var id_micro;
var id_food;
var boat_1_timer;
var boat_2_timer;
var garrafa_timer_1;
var garrafa_falling_1;
var garrafa_timer_2;
var garrafa_falling_2;
var micro_timer;
var food_timer;
var player_timer;
var random;
var character;
var arrayTeclas = [];
var hp;
var barcoLR = false;


var reset;
var reset_2;


window.onload = function () {
    organize();
    document.getElementById('regras').onclick = function () {
        show_regras();
    };
    document.getElementById('audio_on').onclick = function () {
        audio_play();
    };
    document.getElementById('start_btn').onclick = function () {
        choose_character();
    }
};

function organize() {
    document.getElementById('audio_on').style.display = "block";
    document.getElementById('audio_off').style.display = "none";
    document.getElementById('victory').style.display = "none";
    document.getElementById('nextlvl').style.display = "none";
    document.getElementById('defeat').style.display = "none";
    document.getElementById('tryagain').style.display = "none";
    document.getElementById('returntitle').style.display = "none";
    document.getElementById('hud').style.display = "none";
    document.getElementById('surface').style.display = "none";
    document.getElementById('tutorial').style.display = "none";
    document.getElementById('sair').style.display = "none";
    document.getElementById('intro').style.display = "block";
    document.getElementById('regras').style.display = "block";
    document.getElementById('regras_2').style.display = "none";
    document.getElementById('start_1').style.display = "none";
    document.getElementById('game').style.display = "none";
    document.getElementById('play').style.display = "none";
    document.getElementById('start_2').style.display = "none";
    document.getElementById('boat_1').style.display = "none";
    document.getElementById('boat_2').style.display = "none";
    document.getElementById('turtle').style.display = "none";
    document.getElementById('fish').style.display = "none";
    document.getElementById('octupus').style.display = "none";
    document.getElementById('hp').style.display = "none";
    reset = document.getElementById('play').innerHTML;
    reset_2 = document.getElementById('hud').innerHTML;
}

function choose_character() {
    document.getElementById('intro').style.display = "none";
    document.getElementById('start_1').style.display = "block";

    document.getElementById('home_1').onclick = function () {
        document.getElementById('start_1').style.display = "none";
        document.getElementById('intro').style.display = "block";
    };

    document.getElementById('character1').onclick = function () {
        start_btn_character_1();
    };
    document.getElementById('character2').onclick = function () {
        start_btn_character_2();
    };
    document.getElementById('character3').onclick = function () {
        start_btn_character_3();
    }
}

function start_btn_character_1() {
    count = 0;
    character = 1;
    hp = 6;
    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
    document.getElementById('hp').style.display = "block";
    document.getElementById('home_2').onclick = function () {
        document.getElementById('start_1').style.display = "block";
        document.getElementById('start_2').style.display = "none";
    };
    document.getElementById('start_1').style.display = "none";
    document.getElementById('start_2').style.display = "block";
    document.getElementById('regras').style.display = "none";
    document.getElementById('character1start').onclick = function () {
        lvl = 1;
        start_btn_difficulty_1();
    };
    document.getElementById('character2start').onclick = function () {
        lvl = 2;
        start_btn_difficulty_1();
    };
    document.getElementById('character3start').onclick = function () {
        lvl = 3;
        start_btn_difficulty_1();
    }
}

function start_btn_character_2() {
    count = 0;
    character = 2;
    hp = 4;
    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
    document.getElementById('hp').style.display = "block";
    document.getElementById('home_2').onclick = function () {
        document.getElementById('start_1').style.display = "block";
        document.getElementById('start_2').style.display = "none";
    };
    document.getElementById('start_1').style.display = "none";
    document.getElementById('start_2').style.display = "block";
    document.getElementById('regras').style.display = "none";
    document.getElementById('character1start').onclick = function () {
        lvl = 1;
        start_btn_difficulty_2();
    };
    document.getElementById('character2start').onclick = function () {
        lvl = 2;
        start_btn_difficulty_2();
    };
    document.getElementById('character3start').onclick = function () {
        lvl = 3;
        start_btn_difficulty_2();
    }
}

function start_btn_character_3() {
    count = 0;
    character = 3;
    hp = 8;
    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
    document.getElementById('hp').style.display = "block";
    document.getElementById('home_2').onclick = function () {
        document.getElementById('start_1').style.display = "block";
        document.getElementById('start_2').style.display = "none";
    };
    document.getElementById('start_1').style.display = "none";
    document.getElementById('start_2').style.display = "block";
    document.getElementById('regras').style.display = "none";
    document.getElementById('character1start').onclick = function () {
        lvl = 1;
        start_btn_difficulty_3();
    };
    document.getElementById('character2start').onclick = function () {
        lvl = 2;
        start_btn_difficulty_3();
    };
    document.getElementById('character3start').onclick = function () {
        lvl = 3;
        start_btn_difficulty_3();
    };
}

function start_btn_difficulty_1() {

    switch (lvl) {
        case 1:
            document.getElementById('start_2').style.display = "none";
            document.getElementById('game').style.display = 'block';
            document.getElementById('play').style.display = 'block';
            document.getElementById('hud').style.display = 'block';
            openFullscreen();
            document.getElementById('fish').style.display = "none";
            document.getElementById('octupus').style.display = "none";
            break;
        case 2:
            document.getElementById('start_2').style.display = "none";
            document.getElementById('surface').style.display = "block";
            document.getElementById('game').style.display = 'block';
            document.getElementById('play').style.display = 'block';
            document.getElementById('hud').style.display = 'block';
            openFullscreen();
            document.getElementById('fish').style.display = "none";
            document.getElementById('octupus').style.display = "none";
            break;
        case 3:
            document.getElementById('start_2').style.display = "none";
            document.getElementById('surface').style.display = "block";
            document.getElementById('game').style.display = 'block';
            document.getElementById('play').style.display = 'block';
            document.getElementById('hud').style.display = 'block';
            openFullscreen();
            document.getElementById('fish').style.display = "none";
            document.getElementById('octupus').style.display = "none";
            break;

    }
}

function start_btn_difficulty_2() {

    switch (lvl) {
        case 1:
            document.getElementById('start_2').style.display = "none";
            document.getElementById('game').style.display = 'block';
            document.getElementById('play').style.display = 'block';
            document.getElementById('hud').style.display = 'block';
            openFullscreen();
            document.getElementById('turtle').style.display = "none";
            document.getElementById('octupus').style.display = "none";
            break;
        case 2:
            document.getElementById('start_2').style.display = "none";
            document.getElementById('surface').style.display = "block";
            document.getElementById('game').style.display = 'block';
            document.getElementById('play').style.display = 'block';
            document.getElementById('hud').style.display = 'block';
            openFullscreen();
            document.getElementById('turtle').style.display = "none";
            document.getElementById('octupus').style.display = "none";
            break;
        case 3:
            document.getElementById('start_2').style.display = "none";
            document.getElementById('surface').style.display = "block";
            document.getElementById('game').style.display = 'block';
            document.getElementById('play').style.display = 'block';
            document.getElementById('hud').style.display = 'block';
            openFullscreen();
            document.getElementById('turtle').style.display = "none";
            document.getElementById('octupus').style.display = "none";
            break;

    }
}

function start_btn_difficulty_3() {

    switch (lvl) {
        case 1:
            document.getElementById('start_2').style.display = "none";
            document.getElementById('game').style.display = 'block';
            document.getElementById('play').style.display = 'block';
            document.getElementById('hud').style.display = 'block';
            openFullscreen();
            document.getElementById('turtle').style.display = "none";
            document.getElementById('fish').style.display = "none";
            break;
        case 2:
            document.getElementById('start_2').style.display = "none";
            document.getElementById('surface').style.display = "block";
            document.getElementById('game').style.display = 'block';
            document.getElementById('play').style.display = 'block';
            document.getElementById('hud').style.display = 'block';
            openFullscreen();
            document.getElementById('turtle').style.display = "none";
            document.getElementById('fish').style.display = "none";
            break;
        case 3:
            document.getElementById('start_2').style.display = "none";
            document.getElementById('surface').style.display = "block";
            document.getElementById('game').style.display = 'block';
            document.getElementById('play').style.display = 'block';
            document.getElementById('hud').style.display = 'block';
            openFullscreen();
            document.getElementById('turtle').style.display = "none";
            document.getElementById('fish').style.display = "none";
            break;

    }
}

function show_regras() {
    document.getElementById('tutorial').style.display = "block";
    document.getElementById('sair').style.display = "block";
    document.getElementById('regras').style.display = "none";
    document.getElementById('regras_2').style.display = "block";
    document.getElementById('sair').onclick = function () {
        document.getElementById('tutorial').style.display = "none";
        document.getElementById('sair').style.display = "none";
        document.getElementById('regras').style.display = "block";
        document.getElementById('regras_2').style.display = "none";
    };
}

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
    document.getElementById('audio_on').style.display = "none";
    start_game();
}

function start_game() {
    window.onkeydown = function (event) {
        addTecla(event)
    };
    window.onkeyup = function (event) {
        removeTecla(event)
    };

    for (n = 0; n < 51; n++) {
        document.getElementById('play').innerHTML += "<img id='micro" + n + "' class='micro' src='assets/imgs/micro.png'>";
    }

    for (a = 0; a < 21; a++) {
        document.getElementById('play').innerHTML += "<img id='trash" + a + "' class='trash' src='assets/imgs/garrafa.png'>";
    }

    hide_trash();

    switch (lvl) {
        case 1:
            for (z = 0; z < 21; z++) {
                document.getElementById('play').innerHTML += "<img id='food" + z + "' class='food' src='assets/imgs/camarao.png'>";
            }

            hide_food();

            random = setInterval(function () {
                m = parseInt(Math.random() * 19 + 1);
                fade_in();
            }, 2000);

            document.getElementById('hud').innerHTML += "<img id='camarao1' src='assets/imgs/camarao.png'>";
            document.getElementById('hud').innerHTML += "<h1 id='score'>" + count + "/10</h1>";
            break;

        case 2:
            for (z = 0; z < 21; z++) {
                document.getElementById('play').innerHTML += "<img id='food" + z + "' class='food' src='assets/imgs/camarao.png'>";
            }

            hide_food();

            random = setInterval(function () {
                m = parseInt(Math.random() * 19 + 1);
                fade_in();
            }, 1750);

            document.getElementById('boat_1').style.display = "block";
            document.getElementById('hud').innerHTML += "<img id='camarao1' src='assets/imgs/camarao.png'>";
            document.getElementById('hud').innerHTML += "<h1 id='score'>" + count + "/10</h1>";
            break;

        case 3:
            for (z = 0; z < 21; z++) {
                document.getElementById('play').innerHTML += "<img id='food" + z + "' class='food' src='assets/imgs/camarao2.png'>";
            }

            hide_food();

            random = setInterval(function () {
                m = parseInt(Math.random() * 19 + 1);
                fade_in();
            }, 1500);

            document.getElementById('boat_2').style.display = "block";
            document.getElementById('hud').innerHTML += "<img id='camarao1' src='assets/imgs/camarao2.png'>";
            document.getElementById('hud').innerHTML += "<h1 id='score'>" + count + "/15</h1>";
            break;
    }
    game_start();
}

function game_start() {

    switch (lvl) {
        case 1:
            for (n = 0; n < 51; n++) {
                x = parseInt(Math.random() * window.innerWidth);
                y = parseInt(Math.random() * window.innerHeight);
                document.getElementById('micro' + n + '').style.left = x + "px";
                document.getElementById('micro' + n + '').style.top = y + "px";

            }

            for (z = 0; z < 21; z++) {
                x = parseInt(Math.random() * window.innerWidth);
                y = parseInt(Math.random() * window.innerHeight);
                document.getElementById('food' + z + '').style.left = x + "px";
                document.getElementById('food' + z + '').style.top = y + "px";
            }


            break;
        case 2:
            for (n = 0; n < 51; n++) {
                x = parseInt(Math.random() * window.innerWidth);
                y = parseInt(Math.random() * window.innerHeight);
                document.getElementById('micro' + n + '').style.left = x + "px";
                document.getElementById('micro' + n + '').style.top = y + 175 + "px";
            }

            for (z = 0; z < 21; z++) {
                x = parseInt(Math.random() * window.innerWidth);
                y = parseInt(Math.random() * window.innerHeight);
                document.getElementById('food' + z + '').style.left = x + "px";
                document.getElementById('food' + z + '').style.top = y + 175 + "px";
            }

            break;
        case 3:
            for (n = 0; n < 51; n++) {
                x = parseInt(Math.random() * window.innerWidth);
                y = parseInt(Math.random() * window.innerHeight);
                document.getElementById('micro' + n + '').style.left = x + "px";
                document.getElementById('micro' + n + '').style.top = y + 175 + "px";
            }

            for (z = 0; z < 21; z++) {
                x = parseInt(Math.random() * window.innerWidth);
                y = parseInt(Math.random() * window.innerHeight);
                document.getElementById('food' + z + '').style.left = x + "px";
                document.getElementById('food' + z + '').style.top = y + 175 + "px";
            }

            break;
    }

    document.getElementById('turtle').style.left = 100 + "px";
    document.getElementById('turtle').style.top = 540 + "px";
    document.getElementById('fish').style.left = 100 + "px";
    document.getElementById('fish').style.top = 540 + "px";
    document.getElementById('octupus').style.left = 100 + "px";
    document.getElementById('octupus').style.top = 540 + "px";

    switch (character) {
        case 1:
            document.getElementById('turtle').style.display = "block";
            switch (lvl) {
                case 1:
                    micro_timer = setInterval(function () {
                        for (n = 0; n < 51; n++) {
                            if (detecta_colisao("turtle", "micro" + n + "")) {
                                document.getElementById('micro' + n + '').style.display = "none";
                                document.getElementById('micro' + n + '').style.left = "-1000px";
                                document.getElementById('micro' + n + '').style.top = "-1000px";
                                if (hp > 0) {
                                    hp--;
                                    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
                                }
                                if (hp == 0) {
                                    reset_var();
                                    stop_timers();
                                    document.getElementById('hud').style.display = "none";
                                    document.getElementById('defeat').style.display = "block";
                                    document.getElementById('tryagain').style.display = "block";
                                    document.getElementById('returntitle').style.display = "block";
                                    document.getElementById('returntitle').onclick = function () {
                                        organize();
                                        document.getElementById('regras').onclick = function () {
                                            show_regras();
                                        };
                                        document.getElementById('audio_on').onclick = function () {
                                            audio_play();
                                        };
                                        document.getElementById('start_btn').onclick = function () {
                                            choose_character();
                                        }
                                    };
                                    document.getElementById('tryagain').onclick = function () {
                                        reset_var();
                                        stop_timers();
                                        next_level();
                                    };
                                }
                            }
                            document.getElementById('micro' + n + '').style.top = parseInt(document.getElementById('micro' + n + '').style.top) + 1 + "px";
                            if (parseInt(document.getElementById('micro' + n + '').style.top) > window.innerHeight) {
                                document.getElementById('micro' + n + '').style.top = -25 + "px";
                            }
                        }
                    }, 2000 / 60);

                    food_timer = setInterval(function () {
                        for (z = 0; z < 21; z++) {
                            if (document.getElementById("food" + z).style.display == "block" && verificaColisao(document.getElementById("turtle"), 80, 80, document.getElementById("food" + z), 31, 31)) {
                                if (count <= 9) {
                                    count++;
                                    document.getElementById('score').innerText = count + "/10";
                                }
                                if (count == 10) {
                                    reset_var();
                                    stop_timers();
                                    document.getElementById('hud').style.display = "none";
                                    document.getElementById('victory').style.display = "block";
                                    document.getElementById('nextlvl').style.display = "block";
                                    document.getElementById('nextlvl').onclick = function () {
                                        next_level();
                                    };
                                }
                                if (hp < 7) {
                                    hp += 2;
                                    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
                                }
                                if (hp > 6) {
                                    hp = 6;
                                    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
                                }
                                console.log(hp);
                                document.getElementById('food' + z + '').style.display = "none";
                            }

                        }
                    }, 2000 / 60);
                    break;
                case 2:
                    micro_timer = setInterval(function () {
                        for (n = 0; n < 51; n++) {
                            if (detecta_colisao("turtle", "micro" + n + "")) {
                                document.getElementById('micro' + n + '').style.display = "none";
                                document.getElementById('micro' + n + '').style.left = "-1000px";
                                document.getElementById('micro' + n + '').style.top = "-1000px";
                                if (hp > 0) {
                                    hp--;
                                    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
                                }
                                if (hp == 0) {
                                    reset_var();
                                    stop_timers();
                                    document.getElementById('surface').style.display = "none";
                                    document.getElementById('hud').style.display = "none";
                                    document.getElementById('defeat').style.display = "block";
                                    document.getElementById('tryagain').style.display = "block";
                                    document.getElementById('returntitle').style.display = "block";
                                    document.getElementById('returntitle').onclick = function () {
                                        reset_var();
                                        stop_timers();
                                        document.getElementById('hud').style.display = "none";
                                        document.getElementById('victory').style.display = "block";
                                        document.getElementById('nextlvl').style.display = "block";
                                        organize();
                                        document.getElementById('regras').onclick = function () {
                                            show_regras();
                                        };
                                        document.getElementById('audio_on').onclick = function () {
                                            audio_play();
                                        };
                                        document.getElementById('start_btn').onclick = function () {
                                            choose_character();
                                        }
                                    };
                                    document.getElementById('tryagain').onclick = function () {
                                        reset_var();
                                        stop_timers();
                                        next_level();
                                    };
                                }
                            }
                            document.getElementById('micro' + n + '').style.top = parseInt(document.getElementById('micro' + n + '').style.top) + 2 + "px";
                            if (parseInt(document.getElementById('micro' + n + '').style.top) > window.innerHeight) {
                                document.getElementById('micro' + n + '').style.top = 175 + "px";
                            }
                        }
                    }, 2000 / 60);

                    food_timer = setInterval(function () {
                        for (z = 0; z < 21; z++) {
                            if (document.getElementById("food" + z).style.display === "block" && verificaColisao(document.getElementById("turtle"), 80, 80, document.getElementById("food" + z), 31, 31)) {
                                if (count <= 9) {
                                    count++;
                                    document.getElementById('score').innerText = count + "/10";
                                }
                                if (count == 10) {
                                    reset_var();
                                    stop_timers();
                                    document.getElementById('hud').style.display = "none";
                                    document.getElementById('boat_1').style.display = "none";
                                    document.getElementById('surface').style.display = "none";
                                    document.getElementById('victory').style.display = "block";
                                    document.getElementById('nextlvl').style.display = "block";
                                    document.getElementById('nextlvl').onclick = function () {
                                        next_level();
                                    };
                                }
                                if (hp < 7) {
                                    hp += 2;
                                    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
                                }
                                if (hp > 6) {
                                    hp = 6;
                                    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
                                }
                                document.getElementById('food' + z + '').style.display = "none";
                            }
                        }
                    }, 2000 / 60);

                    boat_1_timer = setInterval(function () {
                        if (!barcoLR)
                            document.getElementById('boat_1').style.left = parseFloat(document.getElementById('boat_1').offsetLeft) + 2 + "px";
                        else if (barcoLR)
                            document.getElementById('boat_1').style.left = parseFloat(document.getElementById('boat_1').offsetLeft) - 2 + "px";

                        if (document.getElementById('boat_1').offsetLeft >= window.innerWidth - document.getElementById('boat_1').offsetWidth)
                            barcoLR = true;
                        else if (document.getElementById('boat_1').offsetLeft <= 0)
                            barcoLR = false
                    }, 1000 / 60);

                    garrafa_timer_1 = setInterval(function () {
                        if (contador_trash == 21)
                            contador_trash = 0;
                        console.log(contador_trash);
                        document.getElementById('trash' + contador_trash).style.display = "block";
                        document.getElementById('trash' + contador_trash).style.left = document.getElementById('boat_1').offsetLeft + "px";
                        contador_trash++;
                    }, 4000);

                    garrafa_falling_1 = setInterval(function () {
                        for (i = 0; i < 21; i++) {
                            if (document.getElementById('trash' + i).style.display == "block") {
                                document.getElementById('trash' + i).style.top = parseInt(document.getElementById('trash' + i).offsetTop) + 5 + "px";
                            }

                            if (document.getElementById("trash" + i).style.display == "block" && verificaColisao(document.getElementById("turtle"), 80, 80, document.getElementById("trash" + i), 65, 65)) {
                                document.getElementById('trash' + i).style.display = "none";
                                document.getElementById('micro' + i + '').style.left = "-1000px";
                                document.getElementById('micro' + i + '').style.top = "-1000px";
                                if (hp < 7) {
                                    hp -= 2;
                                    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
                                }
                                if (hp == 0) {
                                    reset_var();
                                    stop_timers();
                                    document.getElementById('surface').style.display = "none";
                                    document.getElementById('hud').style.display = "none";
                                    document.getElementById('defeat').style.display = "block";
                                    document.getElementById('tryagain').style.display = "block";
                                    document.getElementById('returntitle').style.display = "block";
                                    document.getElementById('returntitle').onclick = function () {
                                        reset_var();
                                        stop_timers();
                                        document.getElementById('hud').style.display = "none";
                                        document.getElementById('victory').style.display = "block";
                                        document.getElementById('nextlvl').style.display = "block";
                                        organize();
                                        document.getElementById('regras').onclick = function () {
                                            show_regras();
                                        };
                                        document.getElementById('audio_on').onclick = function () {
                                            audio_play();
                                        };
                                        document.getElementById('start_btn').onclick = function () {
                                            choose_character();
                                        }
                                    };
                                    document.getElementById('tryagain').onclick = function () {
                                        reset_var();
                                        stop_timers();
                                        next_level();
                                    };
                                }
                            }
                        }
                    }, 1000 / 60);
                    break;
                case 3:
                    micro_timer = setInterval(function () {
                        for (n = 0; n < 51; n++) {
                            if (detecta_colisao("turtle", "micro" + n + "")) {
                                document.getElementById('micro' + n + '').style.display = "none";
                                document.getElementById('micro' + n + '').style.left = "-1000px";
                                document.getElementById('micro' + n + '').style.top = "-1000px";
                                if (hp > 0) {
                                    hp--;
                                    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
                                }
                                if (hp == 0) {
                                    reset_var();
                                    stop_timers();
                                    document.getElementById('surface').style.display = "none";
                                    document.getElementById('hud').style.display = "none";
                                    document.getElementById('defeat').style.display = "block";
                                    document.getElementById('tryagain').style.display = "block";
                                    document.getElementById('returntitle').style.display = "block";
                                    document.getElementById('returntitle').onclick = function () {
                                        reset_var();
                                        stop_timers();
                                        document.getElementById('hud').style.display = "none";
                                        document.getElementById('victory').style.display = "block";
                                        document.getElementById('nextlvl').style.display = "block";
                                        organize();
                                        document.getElementById('regras').onclick = function () {
                                            show_regras();
                                        };
                                        document.getElementById('audio_on').onclick = function () {
                                            audio_play();
                                        };
                                        document.getElementById('start_btn').onclick = function () {
                                            choose_character();
                                        }
                                    };
                                    document.getElementById('tryagain').onclick = function () {
                                        reset_var();
                                        stop_timers();
                                        next_level();
                                    };
                                }
                            }
                            document.getElementById('micro' + n + '').style.top = parseInt(document.getElementById('micro' + n + '').style.top) + 3 + "px";
                            if (parseInt(document.getElementById('micro' + n + '').style.top) > window.innerHeight) {
                                document.getElementById('micro' + n + '').style.top = 175 + "px";
                            }
                        }
                    }, 500 / 60);

                    food_timer = setInterval(function () {
                        for (z = 0; z < 21; z++) {
                            if (document.getElementById("food" + z).style.display == "block" && verificaColisao(document.getElementById("turtle"), 80, 80, document.getElementById("food" + z), 31, 31)) {
                                if (count <= 14) {
                                    count++;
                                    document.getElementById('score').innerText = count + "/15";
                                }
                                if (count == 15) {
                                    reset_var();
                                    stop_timers();
                                    document.getElementById('hud').style.display = "none";
                                    document.getElementById('boat_2').style.display = "none";
                                    document.getElementById('surface').style.display = "none";
                                    document.getElementById('victory').style.display = "block";
                                    document.getElementById('nextlvl').style.display = "block";
                                    document.getElementById('nextlvl').onclick = function () {
                                        next_level();
                                    };
                                }
                                if (hp < 7) {
                                    hp += 2;
                                    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
                                }
                                if (hp > 6) {
                                    hp = 6;
                                    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
                                }
                                document.getElementById('food' + z + '').style.display = "none";
                            }
                        }
                    }, 500 / 60);

                    boat_2_timer = setInterval(function () {
                        if (!barcoLR)
                            document.getElementById('boat_2').style.left = parseFloat(document.getElementById('boat_2').offsetLeft) + 2 + "px";
                        else if (barcoLR)
                            document.getElementById('boat_2').style.left = parseFloat(document.getElementById('boat_2').offsetLeft) - 2 + "px";

                        if (document.getElementById('boat_2').offsetLeft >= window.innerWidth - document.getElementById('boat_2').offsetWidth)
                            barcoLR = true;
                        else if (document.getElementById('boat_2').offsetLeft <= 0)
                            barcoLR = false
                    }, 1000 / 60);

                    garrafa_timer_2 = setInterval(function () {
                        if (contador_trash == 21)
                            contador_trash = 0;
                        console.log(contador_trash);
                        document.getElementById('trash' + contador_trash).style.display = "block";
                        document.getElementById('trash' + contador_trash).style.left = document.getElementById('boat_2').offsetLeft + "px";
                        contador_trash++;
                    }, 2000);

                    garrafa_falling_2 = setInterval(function () {
                        for (i = 0; i < 21; i++) {
                            if (document.getElementById('trash' + i).style.display == "block") {
                                document.getElementById('trash' + i).style.top = parseInt(document.getElementById('trash' + i).offsetTop) + 7.5 + "px";
                            }

                            if (document.getElementById("trash" + i).style.display == "block" && verificaColisao(document.getElementById("turtle"), 80, 80, document.getElementById("trash" + i), 65, 65)) {
                                document.getElementById('trash' + i).style.display = "none";
                                document.getElementById('micro' + i + '').style.left = "-1000px";
                                document.getElementById('micro' + i + '').style.top = "-1000px";
                                if (hp < 7) {
                                    hp -= 2;
                                    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
                                }
                                if (hp == 0) {
                                    reset_var();
                                    stop_timers();
                                    document.getElementById('surface').style.display = "none";
                                    document.getElementById('hud').style.display = "none";
                                    document.getElementById('defeat').style.display = "block";
                                    document.getElementById('tryagain').style.display = "block";
                                    document.getElementById('returntitle').style.display = "block";
                                    document.getElementById('returntitle').onclick = function () {
                                        reset_var();
                                        stop_timers();
                                        document.getElementById('hud').style.display = "none";
                                        document.getElementById('victory').style.display = "block";
                                        document.getElementById('nextlvl').style.display = "block";
                                        organize();
                                        document.getElementById('regras').onclick = function () {
                                            show_regras();
                                        };
                                        document.getElementById('audio_on').onclick = function () {
                                            audio_play();
                                        };
                                        document.getElementById('start_btn').onclick = function () {
                                            choose_character();
                                        }
                                    };
                                    document.getElementById('tryagain').onclick = function () {
                                        reset_var();
                                        stop_timers();
                                        next_level();
                                    };
                                }

                            }
                        }
                    }, 1000 / 60);
                    break;
            }
            break;
        case 2:
            document.getElementById('fish').style.display = "block";
            switch (lvl) {
                case 1:
                    micro_timer = setInterval(function () {
                        for (n = 0; n < 51; n++) {
                            if (detecta_colisao("fish", "micro" + n + "")) {
                                document.getElementById('micro' + n + '').style.display = "none";
                                document.getElementById('micro' + n + '').style.left = "-1000px";
                                document.getElementById('micro' + n + '').style.top = "-1000px";
                                if (hp > 0) {
                                    hp--;
                                    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
                                }
                                if (hp == 0) {
                                    reset_var();
                                    stop_timers();
                                    document.getElementById('hud').style.display = "none";
                                    document.getElementById('defeat').style.display = "block";
                                    document.getElementById('tryagain').style.display = "block";
                                    document.getElementById('returntitle').style.display = "block";
                                    document.getElementById('returntitle').onclick = function () {
                                        reset_var();
                                        stop_timers();
                                        document.getElementById('hud').style.display = "none";
                                        document.getElementById('victory').style.display = "block";
                                        document.getElementById('nextlvl').style.display = "block";
                                        organize();
                                        document.getElementById('regras').onclick = function () {
                                            show_regras();
                                        };
                                        document.getElementById('audio_on').onclick = function () {
                                            audio_play();
                                        };
                                        document.getElementById('start_btn').onclick = function () {
                                            choose_character();
                                        }
                                    };
                                    document.getElementById('tryagain').onclick = function () {
                                        reset_var();
                                        stop_timers();
                                        next_level();
                                    };
                                }
                            }
                            document.getElementById('micro' + n + '').style.top = parseInt(document.getElementById('micro' + n + '').style.top) + 1 + "px";
                            if (parseInt(document.getElementById('micro' + n + '').style.top) > window.innerHeight) {
                                document.getElementById('micro' + n + '').style.top = -25 + "px";
                            }
                        }
                    }, 2000 / 60);

                    food_timer = setInterval(function () {
                        for (z = 0; z < 21; z++) {
                            if (document.getElementById("food" + z).style.display == "block" && verificaColisao(document.getElementById("fish"), 80, 80, document.getElementById("food" + z), 31, 31)) {
                                if (count <= 9) {
                                    count++;
                                    document.getElementById('score').innerText = count + "/10";
                                }
                                if (count == 10) {
                                    reset_var();
                                    stop_timers();
                                    document.getElementById('hud').style.display = "none";
                                    document.getElementById('victory').style.display = "block";
                                    document.getElementById('nextlvl').style.display = "block";
                                    document.getElementById('nextlvl').onclick = function () {
                                        next_level();
                                    };
                                }
                                if (hp < 5) {
                                    hp += 2;
                                    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
                                }
                                if (hp > 4) {
                                    hp = 4;
                                    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
                                }
                                document.getElementById('food' + z + '').style.display = "none";
                            }
                        }
                    }, 2000 / 60);

                    break;
                case 2:
                    micro_timer = setInterval(function () {
                        for (n = 0; n < 51; n++) {
                            if (detecta_colisao("fish", "micro" + n + "")) {
                                document.getElementById('micro' + n + '').style.display = "none";
                                document.getElementById('micro' + n + '').style.left = "-1000px";
                                document.getElementById('micro' + n + '').style.top = "-1000px";
                                if (hp > 0) {
                                    hp--;
                                    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
                                }
                                if (hp == 0) {
                                    reset_var();
                                    stop_timers();
                                    document.getElementById('surface').style.display = "none";
                                    document.getElementById('hud').style.display = "none";
                                    document.getElementById('defeat').style.display = "block";
                                    document.getElementById('tryagain').style.display = "block";
                                    document.getElementById('returntitle').style.display = "block";
                                    document.getElementById('returntitle').onclick = function () {
                                        reset_var();
                                        stop_timers();
                                        document.getElementById('hud').style.display = "none";
                                        document.getElementById('victory').style.display = "block";
                                        document.getElementById('nextlvl').style.display = "block";
                                        organize();
                                        document.getElementById('regras').onclick = function () {
                                            show_regras();
                                        };
                                        document.getElementById('audio_on').onclick = function () {
                                            audio_play();
                                        };
                                        document.getElementById('start_btn').onclick = function () {
                                            choose_character();
                                        }
                                    };
                                    document.getElementById('tryagain').onclick = function () {
                                        reset_var();
                                        stop_timers();
                                        next_level();
                                    };
                                }
                            }
                            document.getElementById('micro' + n + '').style.top = parseInt(document.getElementById('micro' + n + '').style.top) + 2 + "px";
                            if (parseInt(document.getElementById('micro' + n + '').style.top) > window.innerHeight) {
                                document.getElementById('micro' + n + '').style.top = 175 + "px";
                            }
                        }
                    }, 1000 / 60);

                    food_timer = setInterval(function () {
                        for (z = 0; z < 21; z++) {
                            if (document.getElementById("food" + z).style.display == "block" && verificaColisao(document.getElementById("fish"), 80, 80, document.getElementById("food" + z), 31, 31)) {
                                if (count <= 9) {
                                    count++;
                                    document.getElementById('score').innerText = count + "/10";
                                }
                                if (count == 10) {
                                    reset_var();
                                    stop_timers();
                                    document.getElementById('hud').style.display = "none";
                                    document.getElementById('boat_1').style.display = "none";
                                    document.getElementById('victory').style.display = "block";
                                    document.getElementById('nextlvl').style.display = "block";
                                    document.getElementById('nextlvl').onclick = function () {
                                        next_level();
                                    };
                                }
                                if (hp < 5) {
                                    hp += 2;
                                    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
                                }
                                if (hp > 4) {
                                    hp = 4;
                                    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
                                }
                                document.getElementById('food' + z + '').style.display = "none";
                            }
                        }
                    }, 2000 / 60);

                    boat_1_timer = setInterval(function () {
                        if (!barcoLR)
                            document.getElementById('boat_1').style.left = parseFloat(document.getElementById('boat_1').offsetLeft) + 2 + "px";
                        else if (barcoLR)
                            document.getElementById('boat_1').style.left = parseFloat(document.getElementById('boat_1').offsetLeft) - 2 + "px";

                        if (document.getElementById('boat_1').offsetLeft >= window.innerWidth - document.getElementById('boat_1').offsetWidth)
                            barcoLR = true;
                        else if (document.getElementById('boat_1').offsetLeft <= 0)
                            barcoLR = false
                    }, 1000 / 60);

                    garrafa_timer_1 = setInterval(function () {
                        if (contador_trash == 21)
                            contador_trash = 0;
                        console.log(contador_trash);
                        document.getElementById('trash' + contador_trash).style.display = "block";
                        document.getElementById('trash' + contador_trash).style.left = document.getElementById('boat_1').offsetLeft + "px";
                        contador_trash++;
                    }, 4000);

                    garrafa_falling_1 = setInterval(function () {
                        for (i = 0; i < 21; i++) {
                            if (document.getElementById('trash' + i).style.display == "block") {
                                document.getElementById('trash' + i).style.top = parseInt(document.getElementById('trash' + i).offsetTop) + 5 + "px";
                            }

                            if (document.getElementById("trash" + i).style.display == "block" && verificaColisao(document.getElementById("fish"), 80, 80, document.getElementById("trash" + i), 65, 65)) {
                                document.getElementById('trash' + i).style.display = "none";
                                document.getElementById('micro' + i + '').style.left = "-1000px";
                                document.getElementById('micro' + i + '').style.top = "-1000px";
                                if (hp < 5) {
                                    hp -= 2;
                                    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
                                }
                                if (hp == 0) {
                                    reset_var();
                                    stop_timers();
                                    document.getElementById('surface').style.display = "none";
                                    document.getElementById('hud').style.display = "none";
                                    document.getElementById('defeat').style.display = "block";
                                    document.getElementById('tryagain').style.display = "block";
                                    document.getElementById('returntitle').style.display = "block";
                                    document.getElementById('returntitle').onclick = function () {
                                        reset_var();
                                        stop_timers();
                                        document.getElementById('hud').style.display = "none";
                                        document.getElementById('victory').style.display = "block";
                                        document.getElementById('nextlvl').style.display = "block";
                                        organize();
                                        document.getElementById('regras').onclick = function () {
                                            show_regras();
                                        };
                                        document.getElementById('audio_on').onclick = function () {
                                            audio_play();
                                        };
                                        document.getElementById('start_btn').onclick = function () {
                                            choose_character();
                                        }
                                    };
                                    document.getElementById('tryagain').onclick = function () {
                                        reset_var();
                                        stop_timers();
                                        next_level();
                                    };
                                }
                            }
                        }
                    }, 1000 / 60);
                case 3:
                    micro_timer = setInterval(function () {
                        for (n = 0; n < 51; n++) {
                            if (detecta_colisao("fish", "micro" + n + "")) {
                                document.getElementById('micro' + n + '').style.display = "none";
                                document.getElementById('micro' + n + '').style.left = "-1000px";
                                document.getElementById('micro' + n + '').style.top = "-1000px";
                                if (hp > 0) {
                                    hp--;
                                    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
                                }
                                if (hp == 0) {
                                    reset_var();
                                    stop_timers();
                                    document.getElementById('surface').style.display = "none";
                                    document.getElementById('hud').style.display = "none";
                                    document.getElementById('defeat').style.display = "block";
                                    document.getElementById('tryagain').style.display = "block";
                                    document.getElementById('returntitle').style.display = "block";
                                    document.getElementById('returntitle').onclick = function () {
                                        reset_var();
                                        stop_timers();
                                        document.getElementById('hud').style.display = "none";
                                        document.getElementById('victory').style.display = "block";
                                        document.getElementById('nextlvl').style.display = "block";
                                        organize();
                                        document.getElementById('regras').onclick = function () {
                                            show_regras();
                                        };
                                        document.getElementById('audio_on').onclick = function () {
                                            audio_play();
                                        };
                                        document.getElementById('start_btn').onclick = function () {
                                            choose_character();
                                        }
                                    };
                                    document.getElementById('tryagain').onclick = function () {
                                        reset_var();
                                        stop_timers();
                                        next_level();
                                    };
                                }
                            }
                            document.getElementById('micro' + n + '').style.top = parseInt(document.getElementById('micro' + n + '').style.top) + 3 + "px";
                            if (parseInt(document.getElementById('micro' + n + '').style.top) > window.innerHeight) {
                                document.getElementById('micro' + n + '').style.top = 175 + "px";
                            }
                        }
                    }, 500 / 60);

                    food_timer = setInterval(function () {
                        for (z = 0; z < 21; z++) {
                            if (document.getElementById("food" + z).style.display == "block" && verificaColisao(document.getElementById("fish"), 80, 80, document.getElementById("food" + z), 31, 31)) {
                                if (count <= 9) {
                                    count++;
                                    document.getElementById('score').innerText = count + "/10";
                                }
                                if (count == 10) {
                                    reset_var();
                                    stop_timers();
                                    document.getElementById('hud').style.display = "none";
                                    document.getElementById('boat_2').style.display = "none";
                                    document.getElementById('victory').style.display = "block";
                                    document.getElementById('nextlvl').style.display = "block";
                                    document.getElementById('nextlvl').onclick = function () {
                                        next_level();
                                    };
                                }
                                if (hp < 5) {
                                    hp += 2;
                                    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
                                }
                                if (hp > 4) {
                                    hp = 4;
                                    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
                                }
                                document.getElementById('food' + z + '').style.display = "none";
                            }
                        }
                    }, 2000 / 60);

                    boat_2_timer = setInterval(function () {
                        if (!barcoLR)
                            document.getElementById('boat_2').style.left = parseFloat(document.getElementById('boat_2').offsetLeft) + 2 + "px";
                        else if (barcoLR)
                            document.getElementById('boat_2').style.left = parseFloat(document.getElementById('boat_2').offsetLeft) - 2 + "px";

                        if (document.getElementById('boat_2').offsetLeft >= window.innerWidth - document.getElementById('boat_2').offsetWidth)
                            barcoLR = true;
                        else if (document.getElementById('boat_2').offsetLeft <= 0)
                            barcoLR = false
                    }, 1000 / 60);

                    garrafa_timer_2 = setInterval(function () {
                        if (contador_trash == 21)
                            contador_trash = 0;
                        console.log(contador_trash);
                        document.getElementById('trash' + contador_trash).style.display = "block";
                        document.getElementById('trash' + contador_trash).style.left = document.getElementById('boat_2').offsetLeft + "px";
                        contador_trash++;
                    }, 2000);

                    garrafa_falling_2 = setInterval(function () {
                        for (i = 0; i < 21; i++) {
                            if (document.getElementById('trash' + i).style.display == "block") {
                                document.getElementById('trash' + i).style.top = parseInt(document.getElementById('trash' + i).offsetTop) + 7.5 + "px";
                            }

                            if (document.getElementById("trash" + i).style.display == "block" && verificaColisao(document.getElementById("fish"), 80, 80, document.getElementById("trash" + i), 65, 65)) {
                                document.getElementById('trash' + i).style.display = "none";
                                document.getElementById('micro' + i + '').style.left = "-1000px";
                                document.getElementById('micro' + i + '').style.top = "-1000px";
                                if (hp < 7) {
                                    hp -= 2;
                                    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
                                }
                                if (hp == 0) {
                                    reset_var();
                                    stop_timers();
                                    document.getElementById('surface').style.display = "none";
                                    document.getElementById('hud').style.display = "none";
                                    document.getElementById('defeat').style.display = "block";
                                    document.getElementById('tryagain').style.display = "block";
                                    document.getElementById('returntitle').style.display = "block";
                                    document.getElementById('returntitle').onclick = function () {
                                        reset_var();
                                        stop_timers();
                                        document.getElementById('hud').style.display = "none";
                                        document.getElementById('victory').style.display = "block";
                                        document.getElementById('nextlvl').style.display = "block";
                                        organize();
                                        document.getElementById('regras').onclick = function () {
                                            show_regras();
                                        };
                                        document.getElementById('audio_on').onclick = function () {
                                            audio_play();
                                        };
                                        document.getElementById('start_btn').onclick = function () {
                                            choose_character();
                                        }
                                    };
                                    document.getElementById('tryagain').onclick = function () {
                                        reset_var();
                                        stop_timers();
                                        next_level();
                                    };
                                }
                            }
                        }
                    }, 1000 / 60);
                    break;

            }
            break;
        case 3:
            document.getElementById('octupus').style.display = "block";
            switch (lvl) {
                case 1:
                    micro_timer = setInterval(function () {
                        for (n = 0; n < 51; n++) {
                            if (detecta_colisao("octupus", "micro" + n + "")) {
                                document.getElementById('micro' + n + '').style.display = "none";
                                document.getElementById('micro' + n + '').style.left = "-1000px";
                                document.getElementById('micro' + n + '').style.top = "-1000px";
                                if (hp > 0) {
                                    hp--;
                                    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
                                }
                                if (hp == 0) {
                                    reset_var();
                                    stop_timers();
                                    document.getElementById('hud').style.display = "none";
                                    document.getElementById('defeat').style.display = "block";
                                    document.getElementById('tryagain').style.display = "block";
                                    document.getElementById('returntitle').style.display = "block";
                                    document.getElementById('returntitle').onclick = function () {
                                        reset_var();
                                        stop_timers();
                                        document.getElementById('hud').style.display = "none";
                                        document.getElementById('victory').style.display = "block";
                                        document.getElementById('nextlvl').style.display = "block";
                                        organize();
                                        document.getElementById('regras').onclick = function () {
                                            show_regras();
                                        };
                                        document.getElementById('audio_on').onclick = function () {
                                            audio_play();
                                        };
                                        document.getElementById('start_btn').onclick = function () {
                                            choose_character();
                                        }
                                    };
                                    document.getElementById('tryagain').onclick = function () {
                                        reset_var();
                                        stop_timers();
                                        next_level();
                                    };
                                }
                            }
                            document.getElementById('micro' + n + '').style.top = parseInt(document.getElementById('micro' + n + '').style.top) + 1 + "px";
                            if (parseInt(document.getElementById('micro' + n + '').style.top) > window.innerHeight) {
                                document.getElementById('micro' + n + '').style.top = -25 + "px";
                            }
                        }
                    }, 2000 / 60);

                    food_timer = setInterval(function () {
                        for (z = 0; z < 21; z++) {
                            if (document.getElementById("food" + z).style.display == "block" && verificaColisao(document.getElementById("fish"), 80, 80, document.getElementById("food" + z), 31, 31)) {
                                if (count <= 9) {
                                    count++;
                                    document.getElementById('score').innerText = count + "/10";
                                }
                                if (count == 10) {
                                    document.getElementById('hud').style.display = "none";
                                    document.getElementById('victory').style.display = "block";
                                    document.getElementById('nextlvl').style.display = "block";
                                    document.getElementById('nextlvl').onclick = function () {
                                        next_level();
                                    };
                                }
                                if (hp < 9) {
                                    hp += 2;
                                    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
                                }
                                if (hp > 8) {
                                    hp = 8;
                                    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
                                }
                                document.getElementById('food' + z + '').style.display = "none";
                            }
                        }
                    }, 2000 / 60);

                    break;
                case 2:
                    micro_timer = setInterval(function () {
                        for (n = 0; n < 51; n++) {
                            if (detecta_colisao("octupus", "micro" + n + "")) {
                                document.getElementById('micro' + n + '').style.display = "none";
                                document.getElementById('micro' + n + '').style.left = "-1000px";
                                document.getElementById('micro' + n + '').style.top = "-1000px";
                                if (hp > 0) {
                                    hp--;
                                    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
                                }
                                if (hp == 0) {
                                    reset_var();
                                    stop_timers();
                                    document.getElementById('surface').style.display = "none";
                                    document.getElementById('hud').style.display = "none";
                                    document.getElementById('defeat').style.display = "block";
                                    document.getElementById('tryagain').style.display = "block";
                                    document.getElementById('returntitle').style.display = "block";
                                    document.getElementById('returntitle').onclick = function () {
                                        reset_var();
                                        stop_timers();
                                        document.getElementById('hud').style.display = "none";
                                        document.getElementById('victory').style.display = "block";
                                        document.getElementById('nextlvl').style.display = "block";
                                        organize();
                                        document.getElementById('regras').onclick = function () {
                                            show_regras();
                                        };
                                        document.getElementById('audio_on').onclick = function () {
                                            audio_play();
                                        };
                                        document.getElementById('start_btn').onclick = function () {
                                            choose_character();
                                        }
                                    };
                                    document.getElementById('tryagain').onclick = function () {
                                        reset_var();
                                        stop_timers();
                                        next_level();
                                    };
                                }
                            }
                            document.getElementById('micro' + n + '').style.top = parseInt(document.getElementById('micro' + n + '').style.top) + 2 + "px";
                            if (parseInt(document.getElementById('micro' + n + '').style.top) > window.innerHeight) {
                                document.getElementById('micro' + n + '').style.top = 175 + "px";
                            }
                        }
                    }, 1000 / 60);

                    food_timer = setInterval(function () {
                        for (z = 0; z < 21; z++) {
                            if (document.getElementById("food" + z).style.display == "block" && verificaColisao(document.getElementById("octupus"), 80, 80, document.getElementById("food" + z), 31, 31)) {
                                if (count <= 9) {
                                    count++;
                                    document.getElementById('score').innerText = count + "/10";
                                }
                                if (count == 10) {
                                    document.getElementById('hud').style.display = "none";
                                    document.getElementById('boat_1').style.display = "none";
                                    document.getElementById('victory').style.display = "block";
                                    document.getElementById('nextlvl').style.display = "block";
                                    document.getElementById('nextlvl').onclick = function () {
                                        next_level();
                                    };
                                }
                                if (hp < 9) {
                                    hp += 2;
                                    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
                                }
                                if (hp > 8) {
                                    hp = 8;
                                    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
                                }
                                document.getElementById('food' + z + '').style.display = "none";
                            }
                        }
                    }, 2000 / 60);

                    boat_1_timer = setInterval(function () {
                        if (!barcoLR)
                            document.getElementById('boat_1').style.left = parseFloat(document.getElementById('boat_1').offsetLeft) + 2 + "px";
                        else if (barcoLR)
                            document.getElementById('boat_1').style.left = parseFloat(document.getElementById('boat_1').offsetLeft) - 2 + "px";

                        if (document.getElementById('boat_1').offsetLeft >= window.innerWidth - document.getElementById('boat_1').offsetWidth)
                            barcoLR = true;
                        else if (document.getElementById('boat_1').offsetLeft <= 0)
                            barcoLR = false
                    }, 1000 / 60);

                    garrafa_timer_1 = setInterval(function () {
                        if (contador_trash == 21)
                            contador_trash = 0;
                        console.log(contador_trash);
                        document.getElementById('trash' + contador_trash).style.display = "block";
                        document.getElementById('trash' + contador_trash).style.left = document.getElementById('boat_1').offsetLeft + "px";
                        contador_trash++;
                    }, 4000);

                    garrafa_falling_1 = setInterval(function () {
                        for (i = 0; i < 21; i++) {
                            if (document.getElementById('trash' + i).style.display == "block") {
                                document.getElementById('trash' + i).style.top = parseInt(document.getElementById('trash' + i).offsetTop) + 5 + "px";
                            }

                            if (document.getElementById("trash" + i).style.display == "block" && verificaColisao(document.getElementById("octupus"), 80, 80, document.getElementById("trash" + i), 65, 65)) {
                                document.getElementById('trash' + i).style.display = "none";
                                document.getElementById('micro' + i + '').style.left = "-1000px";
                                document.getElementById('micro' + i + '').style.top = "-1000px";
                                if (hp < 9) {
                                    hp -= 2;
                                    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
                                }
                                if (hp == 0) {
                                    reset_var();
                                    stop_timers();
                                    document.getElementById('surface').style.display = "none";
                                    document.getElementById('hud').style.display = "none";
                                    document.getElementById('defeat').style.display = "block";
                                    document.getElementById('tryagain').style.display = "block";
                                    document.getElementById('returntitle').style.display = "block";
                                    document.getElementById('returntitle').onclick = function () {
                                        reset_var();
                                        stop_timers();
                                        document.getElementById('hud').style.display = "none";
                                        document.getElementById('victory').style.display = "block";
                                        document.getElementById('nextlvl').style.display = "block";
                                        organize();
                                        document.getElementById('regras').onclick = function () {
                                            show_regras();
                                        };
                                        document.getElementById('audio_on').onclick = function () {
                                            audio_play();
                                        };
                                        document.getElementById('start_btn').onclick = function () {
                                            choose_character();
                                        }
                                    };
                                    document.getElementById('tryagain').onclick = function () {
                                        reset_var();
                                        stop_timers();
                                        next_level();
                                    };
                                }
                            }
                        }
                    }, 1000 / 60);

                    break;
                case 3:
                    micro_timer = setInterval(function () {
                        for (n = 0; n < 51; n++) {
                            if (detecta_colisao("octupus", "micro" + n + "")) {
                                document.getElementById('micro' + n + '').style.display = "none";
                                document.getElementById('micro' + n + '').style.left = "-1000px";
                                document.getElementById('micro' + n + '').style.top = "-1000px";
                                if (hp > 0) {
                                    hp--;
                                    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
                                }
                                if (hp == 0) {
                                    reset_var();
                                    stop_timers();
                                    document.getElementById('surface').style.display = "none";
                                    document.getElementById('hud').style.display = "none";
                                    document.getElementById('defeat').style.display = "block";
                                    document.getElementById('tryagain').style.display = "block";
                                    document.getElementById('returntitle').style.display = "block";
                                    document.getElementById('returntitle').onclick = function () {
                                        reset_var();
                                        stop_timers();
                                        document.getElementById('hud').style.display = "none";
                                        document.getElementById('victory').style.display = "block";
                                        document.getElementById('nextlvl').style.display = "block";
                                        organize();
                                        document.getElementById('regras').onclick = function () {
                                            show_regras();
                                        };
                                        document.getElementById('audio_on').onclick = function () {
                                            audio_play();
                                        };
                                        document.getElementById('start_btn').onclick = function () {
                                            choose_character();
                                        }
                                    };
                                    document.getElementById('tryagain').onclick = function () {
                                        reset_var();
                                        stop_timers();
                                        next_level();
                                    };
                                }
                            }
                            document.getElementById('micro' + n + '').style.top = parseInt(document.getElementById('micro' + n + '').style.top) + 3 + "px";
                            if (parseInt(document.getElementById('micro' + n + '').style.top) > window.innerHeight) {
                                document.getElementById('micro' + n + '').style.top = 175 + "px";
                            }
                        }
                    }, 500 / 60);

                    food_timer = setInterval(function () {
                        for (z = 0; z < 21; z++) {
                            if (document.getElementById("food" + z).style.display == "block" && verificaColisao(document.getElementById("octupus"), 80, 80, document.getElementById("food" + z), 31, 31)) {
                                if (count <= 9) {
                                    count++;
                                    document.getElementById('score').innerText = count + "/10";
                                }
                                if (count == 10) {
                                    document.getElementById('hud').style.display = "none";
                                    document.getElementById('boat_2').style.display = "none";
                                    document.getElementById('victory').style.display = "block";
                                    document.getElementById('nextlvl').style.display = "block";
                                    document.getElementById('nextlvl').onclick = function () {
                                        next_level();
                                    };
                                }
                                if (hp < 9) {
                                    hp += 2;
                                    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
                                }
                                if (hp > 8) {
                                    hp = 8;
                                    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
                                }
                                document.getElementById('food' + z + '').style.display = "none";
                            }
                        }
                    }, 2000 / 60);

                    boat_2_timer = setInterval(function () {
                        if (!barcoLR)
                            document.getElementById('boat_2').style.left = parseFloat(document.getElementById('boat_2').offsetLeft) + 2 + "px";
                        else if (barcoLR)
                            document.getElementById('boat_2').style.left = parseFloat(document.getElementById('boat_2').offsetLeft) - 2 + "px";

                        if (document.getElementById('boat_2').offsetLeft >= window.innerWidth - document.getElementById('boat_2').offsetWidth)
                            barcoLR = true;
                        else if (document.getElementById('boat_2').offsetLeft <= 0)
                            barcoLR = false
                    }, 1000 / 60);

                    garrafa_timer_2 = setInterval(function () {
                        if (contador_trash == 21)
                            contador_trash = 0;
                        console.log(contador_trash);
                        document.getElementById('trash' + contador_trash).style.display = "block";
                        document.getElementById('trash' + contador_trash).style.left = document.getElementById('boat_2').offsetLeft + "px";
                        contador_trash++;
                    }, 2000);

                    garrafa_falling_2 = setInterval(function () {
                        for (i = 0; i < 21; i++) {
                            if (document.getElementById('trash' + i).style.display == "block") {
                                document.getElementById('trash' + i).style.top = parseInt(document.getElementById('trash' + i).offsetTop) + 7.5 + "px";
                            }

                            if (document.getElementById("trash" + i).style.display == "block" && verificaColisao(document.getElementById("octupus"), 80, 80, document.getElementById("trash" + i), 65, 65)) {
                                document.getElementById('trash' + i).style.display = "none";
                                document.getElementById('micro' + i + '').style.left = "-1000px";
                                document.getElementById('micro' + i + '').style.top = "-1000px";
                                if (hp < 9) {
                                    hp -= 2;
                                    document.getElementById('hp').src = "assets/imgs/hp_" + hp + ".png";
                                }
                                if (hp == 0) {
                                    reset_var();
                                    stop_timers();
                                    document.getElementById('surface').style.display = "none";
                                    document.getElementById('hud').style.display = "none";
                                    document.getElementById('defeat').style.display = "block";
                                    document.getElementById('tryagain').style.display = "block";
                                    document.getElementById('returntitle').style.display = "block";
                                    document.getElementById('returntitle').onclick = function () {
                                        reset_var();
                                        stop_timers();
                                        document.getElementById('hud').style.display = "none";
                                        document.getElementById('victory').style.display = "block";
                                        document.getElementById('nextlvl').style.display = "block";
                                        organize();
                                        document.getElementById('regras').onclick = function () {
                                            show_regras();
                                        };
                                        document.getElementById('audio_on').onclick = function () {
                                            audio_play();
                                        };
                                        document.getElementById('start_btn').onclick = function () {
                                            choose_character();
                                        }
                                    };
                                    document.getElementById('tryagain').onclick = function () {
                                        reset_var();
                                        stop_timers();
                                        next_level();
                                    };
                                }
                            }
                        }
                    }, 1000 / 60);

                    break;
            }
            break;
    }
}

player_timer = setInterval(processa_tecla, 1000 / 60);

function processa_tecla() {
    var max2 = window.innerWidth;
    for (var i = 0; i < arrayTeclas.length; i++) {
        switch (character) {
            case 1:
                switch (lvl) {
                    case 1:
                        switch (arrayTeclas[i]) {
                            case "w":
                                document.getElementById('turtle').style.top = parseInt(document.getElementById('turtle').style.top) - 5 + "px";
                                if (parseInt(document.getElementById('turtle').style.top) <= -50) {
                                    document.getElementById('turtle').style.top = -50 + "px";
                                }
                                break;
                            case "s":
                                document.getElementById('turtle').style.top = parseInt(document.getElementById('turtle').style.top) + 5 + "px";
                                if (parseInt(document.getElementById('turtle').style.top) >= 1050) {
                                    document.getElementById('turtle').style.top = 1050 + "px";
                                }
                                break;
                            case "a":
                                document.getElementById('turtle').style.left = parseInt(document.getElementById('turtle').style.left) - 5 + "px";
                                if (parseInt(document.getElementById('turtle').style.left) < -50) {
                                    document.getElementById('turtle').style.left = max2 + "px";
                                }
                                break;
                            case "d":
                                document.getElementById('turtle').style.left = parseInt(document.getElementById('turtle').style.left) + 5 + "px";
                                if (parseInt(document.getElementById('turtle').style.left) > window.innerWidth) {
                                    document.getElementById('turtle').style.left = -50 + "px";
                                }
                                break;
                        }
                        break;
                    case 2:
                        switch (arrayTeclas[i]) {
                            case "w":
                                document.getElementById('turtle').style.top = parseInt(document.getElementById('turtle').style.top) - 5 + "px";
                                if (parseInt(document.getElementById('turtle').style.top) <= 175) {
                                    document.getElementById('turtle').style.top = 175 + "px";
                                }
                                break;
                            case "s":
                                document.getElementById('turtle').style.top = parseInt(document.getElementById('turtle').style.top) + 5 + "px";
                                if (parseInt(document.getElementById('turtle').style.top) >= 1050) {
                                    document.getElementById('turtle').style.top = 1050 + "px";
                                }
                                break;
                            case "a":
                                document.getElementById('turtle').style.left = parseInt(document.getElementById('turtle').style.left) - 5 + "px";
                                if (parseInt(document.getElementById('turtle').style.left) < -50) {
                                    document.getElementById('turtle').style.left = max2 + "px";
                                }
                                break;
                            case "d":
                                document.getElementById('turtle').style.left = parseInt(document.getElementById('turtle').style.left) + 5 + "px";
                                if (parseInt(document.getElementById('turtle').style.left) > window.innerWidth) {
                                    document.getElementById('turtle').style.left = -50 + "px";
                                }
                                break;
                        }
                        break;
                    case 3:
                        switch (arrayTeclas[i]) {
                            case "w":
                                document.getElementById('turtle').style.top = parseInt(document.getElementById('turtle').style.top) - 5 + "px";
                                if (parseInt(document.getElementById('turtle').style.top) <= 175) {
                                    document.getElementById('turtle').style.top = 175 + "px";
                                }
                                break;
                            case "s":
                                document.getElementById('turtle').style.top = parseInt(document.getElementById('turtle').style.top) + 5 + "px";
                                if (parseInt(document.getElementById('turtle').style.top) >= 1050) {
                                    document.getElementById('turtle').style.top = 1050 + "px";
                                }
                                break;
                            case "a":
                                document.getElementById('turtle').style.left = parseInt(document.getElementById('turtle').style.left) - 5 + "px";
                                if (parseInt(document.getElementById('turtle').style.left) < -50) {
                                    document.getElementById('turtle').style.left = max2 + "px";
                                }
                                break;
                            case "d":
                                document.getElementById('turtle').style.left = parseInt(document.getElementById('turtle').style.left) + 5 + "px";
                                if (parseInt(document.getElementById('turtle').style.left) > window.innerWidth) {
                                    document.getElementById('turtle').style.left = -50 + "px";
                                }
                                break;
                        }
                        break;
                }
                break;

            case 2:
                switch (lvl) {
                    case 1:
                        switch (arrayTeclas[i]) {
                            case "w":
                                document.getElementById('fish').style.top = parseInt(document.getElementById('fish').style.top) - 10 + "px";
                                if (parseInt(document.getElementById('fish').style.top) <= -50) {
                                    document.getElementById('fish').style.top = -50 + "px";
                                }
                                break;
                            case "s":
                                document.getElementById('fish').style.top = parseInt(document.getElementById('fish').style.top) + 10 + "px";
                                if (parseInt(document.getElementById('fish').style.top) >= 1050) {
                                    document.getElementById('fish').style.top = 1050 + "px";
                                }
                                break;
                            case "a":
                                document.getElementById('fish').style.left = parseInt(document.getElementById('fish').style.left) - 10 + "px";
                                if (parseInt(document.getElementById('fish').style.left) < -50) {
                                    document.getElementById('fish').style.left = max2 + "px";
                                }
                                break;
                            case "d":
                                document.getElementById('fish').style.left = parseInt(document.getElementById('fish').style.left) + 10 + "px";
                                if (parseInt(document.getElementById('fish').style.left) > window.innerWidth) {
                                    document.getElementById('fish').style.left = -50 + "px";
                                }
                                break;
                        }
                        break;
                    case 2:
                        switch (arrayTeclas[i]) {
                            case "w":
                                document.getElementById('fish').style.top = parseInt(document.getElementById('fish').style.top) - 10 + "px";
                                if (parseInt(document.getElementById('fish').style.top) <= 175) {
                                    document.getElementById('fish').style.top = 175 + "px";
                                }
                                break;
                            case "s":
                                document.getElementById('fish').style.top = parseInt(document.getElementById('fish').style.top) + 10 + "px";
                                if (parseInt(document.getElementById('fish').style.top) >= 1050) {
                                    document.getElementById('fish').style.top = 1050 + "px";
                                }
                                break;
                            case "a":
                                document.getElementById('fish').style.left = parseInt(document.getElementById('fish').style.left) - 10 + "px";
                                if (parseInt(document.getElementById('fish').style.left) < -50) {
                                    document.getElementById('fish').style.left = max2 + "px";
                                }
                                break;
                            case "d":
                                document.getElementById('fish').style.left = parseInt(document.getElementById('fish').style.left) + 10 + "px";
                                if (parseInt(document.getElementById('fish').style.left) > window.innerWidth) {
                                    document.getElementById('fish').style.left = -50 + "px";
                                }
                                break;
                        }
                        break;
                    case 3:
                        switch (arrayTeclas[i]) {
                            case "w":
                                document.getElementById('fish').style.top = parseInt(document.getElementById('fish').style.top) - 10 + "px";
                                if (parseInt(document.getElementById('fish').style.top) <= 175) {
                                    document.getElementById('fish').style.top = 175 + "px";
                                }
                                break;
                            case "s":
                                document.getElementById('fish').style.top = parseInt(document.getElementById('fish').style.top) + 10 + "px";
                                if (parseInt(document.getElementById('fish').style.top) >= 1050) {
                                    document.getElementById('fish').style.top = 1050 + "px";
                                }
                                break;
                            case "a":
                                document.getElementById('fish').style.left = parseInt(document.getElementById('fish').style.left) - 10 + "px";
                                if (parseInt(document.getElementById('fish').style.left) < -50) {
                                    document.getElementById('fish').style.left = max2 + "px";
                                }
                                break;
                            case "d":
                                document.getElementById('fish').style.left = parseInt(document.getElementById('fish').style.left) + 10 + "px";
                                if (parseInt(document.getElementById('fish').style.left) > window.innerWidth) {
                                    document.getElementById('fish').style.left = -50 + "px";
                                }
                                break;
                        }
                        break;
                }

            case 3:
                switch (lvl) {
                    case 1:
                        switch (arrayTeclas[i]) {
                            case "w":
                                document.getElementById('octupus').style.top = parseInt(document.getElementById('octupus').style.top) - 2.5 + "px";
                                if (parseInt(document.getElementById('octupus').style.top) <= -50) {
                                    document.getElementById('octupus').style.top = -50 + "px";
                                }
                                break;
                            case "s":
                                document.getElementById('octupus').style.top = parseInt(document.getElementById('octupus').style.top) + 2.5 + "px";
                                if (parseInt(document.getElementById('octupus').style.top) >= 1050) {
                                    document.getElementById('octupus').style.top = 1050 + "px";
                                }
                                break;
                            case "a":
                                document.getElementById('octupus').style.left = parseInt(document.getElementById('octupus').style.left) - 2.5 + "px";
                                if (parseInt(document.getElementById('octupus').style.left) < -50) {
                                    document.getElementById('octupus').style.left = max2 + "px";
                                }
                                break;
                            case "d":
                                document.getElementById('octupus').style.left = parseInt(document.getElementById('octupus').style.left) + 2.5 + "px";
                                if (parseInt(document.getElementById('octupus').style.left) > window.innerWidth) {
                                    document.getElementById('octupus').style.left = -50 + "px";
                                }
                                break;
                        }
                        break;
                    case 2:
                        switch (arrayTeclas[i]) {
                            case "w":
                                document.getElementById('octupus').style.top = parseInt(document.getElementById('octupus').style.top) - 2.5 + "px";
                                if (parseInt(document.getElementById('octupus').style.top) <= 175) {
                                    document.getElementById('octupus').style.top = 175 + "px";
                                }
                                break;
                            case "s":
                                document.getElementById('octupus').style.top = parseInt(document.getElementById('octupus').style.top) + 2.5 + "px";
                                if (parseInt(document.getElementById('octupus').style.top) >= 1050) {
                                    document.getElementById('octupus').style.top = 1050 + "px";
                                }
                                break;
                            case "a":
                                document.getElementById('octupus').style.left = parseInt(document.getElementById('octupus').style.left) - 2.5 + "px";
                                if (parseInt(document.getElementById('octupus').style.left) < -50) {
                                    document.getElementById('octupus').style.left = max2 + "px";
                                }
                                break;
                            case "d":
                                document.getElementById('octupus').style.left = parseInt(document.getElementById('octupus').style.left) + 2.5 + "px";
                                if (parseInt(document.getElementById('octupus').style.left) > window.innerWidth) {
                                    document.getElementById('octupus').style.left = -50 + "px";
                                }
                                break;
                        }
                        break;
                    case 3:
                        switch (arrayTeclas[i]) {
                            case "w":
                                document.getElementById('octupus').style.top = parseInt(document.getElementById('octupus').style.top) - 2.5 + "px";
                                if (parseInt(document.getElementById('octupus').style.top) <= 175) {
                                    document.getElementById('octupus').style.top = 175 + "px";
                                }
                                break;
                            case "s":
                                document.getElementById('octupus').style.top = parseInt(document.getElementById('octupus').style.top) + 2.5 + "px";
                                if (parseInt(document.getElementById('octupus').style.top) >= 1050) {
                                    document.getElementById('octupus').style.top = 1050 + "px";
                                }
                                break;
                            case "a":
                                document.getElementById('octupus').style.left = parseInt(document.getElementById('octupus').style.left) - 2.5 + "px";
                                if (parseInt(document.getElementById('octupus').style.left) < -50) {
                                    document.getElementById('octupus').style.left = max2 + "px";
                                }
                                break;
                            case "d":
                                document.getElementById('octupus').style.left = parseInt(document.getElementById('octupus').style.left) + 2.5 + "px";
                                if (parseInt(document.getElementById('octupus').style.left) > window.innerWidth) {
                                    document.getElementById('octupus').style.left = -50 + "px";
                                }
                                break;
                        }
                        break;
                }
        }
    }
}

function addTecla(evt) {
    var tecla = evt.key;
    var presente = false;

    for (var i = 0; i < arrayTeclas.length; i++) {
        if (arrayTeclas[i] == tecla) {
            presente = true;
        }
        if (arrayTeclas[i] == "d" && tecla == "a")
            arrayTeclas.splice(i, 1);
        else if (arrayTeclas[i] == "a" && tecla == "d")
            arrayTeclas.splice(i, 1);
    }
    if (presente == false) {
        arrayTeclas.push(tecla);
    }
}

function removeTecla(evt) {
    var tecla = evt.key;
    for (var i = 0; i < arrayTeclas.length; i++) {
        if (arrayTeclas[i] == tecla) {
            arrayTeclas.splice(i, 1);
        }
    }
}

function hide_food() {
    for (z = 0; z < 21; z++) {
        document.getElementById('food' + z + '').style.display = "none";
    }
}

function hide_trash() {
    for (a = 0; a < 21; a++) {
        document.getElementById('trash' + a + '').style.display = "none";
    }
}

function fade_in() {
    var op = 0.1;  // initial opacity
    document.getElementById('food' + m + '').style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        document.getElementById('food' + m + '').style.opacity = op;
        document.getElementById('food' + m + '').style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}


function detecta_colisao(obj1_id, obj2_id) {
    var obj1 = document.getElementById(obj1_id);
    var obj2 = document.getElementById(obj2_id);

    var obj1_left = parseInt(obj1.style.left);
    var obj1_right = obj1_left + obj1.width;
    var obj1_top = (parseInt(obj1.style.top));
    var obj1_bottom = obj1_top + obj1.height;

    var obj2_left = (parseInt(obj2.style.left));
    var obj2_right = obj2_left + obj2.width;
    var obj2_top = (parseInt(obj2.style.top));
    var obj2_bottom = obj2_top + obj2.height;

    if (((obj1_left >= obj2_left && obj1_left <= obj2_right) || (obj1_right <= obj2_right && obj1_right >= obj2_left))
        && ((obj1_top >= obj2_top && obj1_top <= obj2_bottom) || (obj1_bottom <= obj2_bottom && obj1_bottom >= obj2_top))
        || ((obj2_left >= obj1_left && obj2_left <= obj1_right) || (obj2_right <= obj1_right && obj2_right >= obj1_left))
        && ((obj2_top >= obj1_top && obj2_top <= obj1_bottom) || (obj2_bottom <= obj1_bottom && obj2_bottom >= obj1_top))) {
        return true
    } else {
        return false;
    }
}

function verificaColisao(elemento1, elemento1Altura, elemento1Largura, elemento2, elemento2Altura, elemento2Largura) {
    return (parseInt(elemento1.style.top) <= parseInt(elemento2.style.top) + elemento2Altura &&
        parseInt(elemento1.style.top) + elemento1Altura >= parseInt(elemento2.style.top) &&
        parseInt(elemento1.style.left) <= parseInt(elemento2.style.left) + elemento2Largura &&
        parseInt(elemento1.style.left) + elemento1Largura >= parseInt(elemento2.style.left))
}

function next_level() {
    switch (character) {
        case 1:
            document.getElementById('victory').style.display = "none";
            document.getElementById('nextlvl').style.display = "none";
            document.getElementById('game').style.display = "none";
            document.getElementById('hud').style.display = "none";
            document.getElementById('play').style.display = "none";
            start_btn_character_1();
            break;
        case 2:
            document.getElementById('surface').style.display = "none";
            document.getElementById('victory').style.display = "none";
            document.getElementById('nextlvl').style.display = "none";
            document.getElementById('game').style.display = "none";
            document.getElementById('hud').style.display = "none";
            document.getElementById('play').style.display = "none";
            start_btn_character_2();
            break;
        case 3:
            document.getElementById('surface').style.display = "none";
            document.getElementById('victory').style.display = "none";
            document.getElementById('nextlvl').style.display = "none";
            document.getElementById('game').style.display = "none";
            document.getElementById('hud').style.display = "none";
            document.getElementById('play').style.display = "none";
            start_btn_character_3();
            break;
    }
}

function audio_play() {
    document.getElementById('audio_on').style.display = "none";
    document.getElementById('audio_off').style.display = "block";
    document.getElementById('audio_off').onclick = function () {
        document.getElementById('audio_on').style.display = "block";
        document.getElementById('audio_off').style.display = "none";
    };
}

function stop_timers() {
    clearInterval(micro_timer);
    clearInterval(food_timer);
    clearInterval(boat_1_timer);
    clearInterval(boat_2_timer);
    clearInterval(garrafa_timer_1);
    clearInterval(garrafa_timer_2);
    clearInterval(garrafa_falling_1);
    clearInterval(garrafa_falling_2);
    clearInterval(random);
    restart_timers();
}

function restart_timers() {
    document.getElementById('play').innerHTML = "";
    document.getElementById('play').innerHTML = reset;
    document.getElementById('hud').innerHTML = "";
    document.getElementById('hud').innerHTML = reset_2;
    choose_character();
    reorganizar();

}

function reset_var() {
    count = 0;
    contador_trash = 0;
    hp = 0;
}

function reorganizar() {
    document.getElementById('audio_on').style.display = "none";
    document.getElementById('audio_off').style.display = "none";
    document.getElementById('victory').style.display = "none";
    document.getElementById('nextlvl').style.display = "none";
    document.getElementById('defeat').style.display = "none";
    document.getElementById('tryagain').style.display = "none";
    document.getElementById('hud').style.display = "none";
    document.getElementById('surface').style.display = "none";
    document.getElementById('tutorial').style.display = "none";
    document.getElementById('sair').style.display = "none";
    document.getElementById('intro').style.display = "none";
    document.getElementById('regras').style.display = "none";
    document.getElementById('regras_2').style.display = "none";
    document.getElementById('start_1').style.display = "none";
    document.getElementById('game').style.display = "none";
    document.getElementById('play').style.display = "none";
    document.getElementById('start_2').style.display = "none";
    document.getElementById('boat_1').style.display = "none";
    document.getElementById('boat_2').style.display = "none";
    document.getElementById('turtle').style.display = "none";
    document.getElementById('fish').style.display = "none";
    document.getElementById('octupus').style.display = "none";
    document.getElementById('hp').style.display = "none";
}
