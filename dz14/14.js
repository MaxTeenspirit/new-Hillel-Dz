var Unit = (function() {
    var row = document.getElementById('main_row');
    var id = 0;
    function Unit(type, health, stamina) {
        this.id = id++,
        this.name = 'unit' + id,
        this.type = type,
        this.maxHealth = 100,
        this.health = health,
        this.maxStamina = 100,
        this.stamina = stamina;
        var n = this.name;
        var h = this.health;
        var s = this.stamina;
        var mh = this.maxHealth;
        var ms = this.maxStamina;
        this.el = document.createElement('div');
        var element = this.el;
        var hb = this.healthBar = document.createElement('div');
        var sb = this.staminaBar = document.createElement('div');
        this.typeName = document.createElement('p');
        this.image = document.createElement('div');
        this.buttonsRow = document.createElement('div');
        this.buttonMinHealth = document.createElement('div');
        this.buttonMinStamina = document.createElement('div');
        this.buttonRestore = document.createElement('div');
        var minHel = this.buttonMinHealth;
        var minSt = this.buttonMinStamina;
        var br = this.buttonRestore;
        this.minus = document.createElement('p');
        this.moreMinus = document.createElement('p');
        this.plus = document.createElement('p');

        this.buttonRestore.onclick = function() {
            console.log(n, h, s);
            h = 100;
            s = 100;
            hb.style.width = mh + '%';
            sb.style.width = ms + '%';
            element.classList.remove('gray');
            br.classList.remove('button_restore');
            minHel.classList.remove('d-none');
            minSt.classList.remove('d-none');
        }

        this.buttonMinHealth.onclick = function() {
            console.log(n, h);
            h -= 5;
            hb.style.width = h - 5 + '%';
            if (h <=0) {
                element.classList.add('d-none');
            }
        }

        this.buttonMinStamina.onclick = function() {
            console.log(n, s);
            s -= 5;
            sb.style.width = s - 5 + '%';
            if (s <= 0) {
                element.classList.add('gray');
                br.classList.add('button_restore');
                minHel.classList.add('d-none');
                minSt.classList.add('d-none');
            }

        }

        this.render = function() {
            this.el.className = 'unit col-3';
            this.el.id = this.name;
    
            this.healthBar.style.width = this.health + '%';
            this.healthBar.className = 'health_bar';
    
            this.staminaBar.style.width = this.stamina + '%';
            this.staminaBar.className = 'stamina_bar';
    
            this.typeName.innerText = this.type.toUpperCase();
            this.typeName.className = 'type';
    
            if (this.type === 'air') {
                this.image.className = 'image air_img';
            } else if (this.type === 'water') {
                this.image.className = 'image water_img';
            } else {
                this.image.className = 'image land_img';
            }
    
            this.buttonsRow.className = 'row justify-content-around';
            this.buttonMinHealth.className = 'col-4 minus_health';
            this.buttonMinStamina.className = 'col-4 minus_stamina';
            this.buttonRestore.className = 'col-4 restore';
            this.minus.className = 'minus';
            this.minus.innerText = '-';
            this.moreMinus.className = 'minus';
            this.moreMinus.innerText = '-';
            this.plus.className = 'plus';
            this.plus.innerText = '+';
    
            row.appendChild(this.el);
            this.el.appendChild(this.healthBar);
            this.el.appendChild(this.staminaBar);
            this.el.appendChild(this.typeName);
            this.el.appendChild(this.image);
            this.el.appendChild(this.buttonsRow);
            this.buttonsRow.appendChild(this.buttonMinHealth);
            this.buttonsRow.appendChild(this.buttonRestore);
            this.buttonsRow.appendChild(this.buttonMinStamina);
            this.buttonMinHealth.appendChild(this.minus);
            this.buttonMinStamina.appendChild(this.moreMinus);
            this.buttonRestore.appendChild(this.plus);
        };
    }

    Unit.prototype.restore = function() {
        this.health = this.maxHealth;
        this.stamina = this.maxStamina;
        return this.render();
    }

    return Unit;
}());

var first = new Unit('air', 80, 65);
var second = new Unit('land', 35, 40);
var third = new Unit('water', 60, 70);

first.render();
second.render();
third.render();