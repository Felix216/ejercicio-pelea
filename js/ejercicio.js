class Character {
    constructor(name, health, damage) {
        this.name = name;
        this.health = health;
        this.maxhealth = health;
        this.damage = damage;
    }

    isAlive() {
        return this.health > 0;
    }

    attack(target) {
        target.health -= this.damage;
        actualizar_vida(enemy,hero);
        actualizar_barras(enemy,hero);
    }
    
    get_vida() {
        return this.health;
    }
  }

const hero = new Character("Heroe", Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 10) + 5);
const enemy = new Character("Limo", Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 10) + 5);

mostrar_vida();

document.addEventListener("keydown", function(event) {
    if (event.key === "x") {
        hero.attack(enemy)
    }
    if (event.key === "n") {
        enemy.attack(hero)
    }
});

function mostrar_vida() {
    var vida_heroe = document.getElementById("vida-heroe");
    var vida_limo = document.getElementById("vida-limo");

    vida_heroe.textContent = hero.get_vida();
    vida_limo.textContent = enemy.get_vida();
}

function actualizar_barras(enemy, hero) {
    var barra_heroe = document.getElementById("barra-de-vida-heroe");
    var barra_limo = document.getElementById("barra-de-vida-limo");

    barra_heroe.style.width = (hero.get_vida() / hero.maxhealth) * 100 + "%";
    barra_limo.style.width = (enemy.get_vida() / enemy.maxhealth) * 100 + "%";
}
function actualizar_vida(enemy, hero) {
    var vida_heroe = document.getElementById("vida-heroe");
    var vida_limo = document.getElementById("vida-limo");

    vida_heroe.textContent = hero.get_vida();
    vida_limo.textContent = enemy.get_vida();
}
