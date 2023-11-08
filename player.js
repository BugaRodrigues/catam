class Player { 

        road = 0
        villa = 0
        city = 0

        farm = 0
        stone = 0
        food = 0
        mining = 0
        wood = 0

    constructor() {
        this.road = 1
        this.villa = 1
    }
 
    set farm(farm) {
        this.farm += farm
    }
    get farm() {
        return this.farm
    }
 
    set stone(stone) {
        this.stone += stone
    }
    get stone() {
        return this.stone
    }
 
    set food(food) {
        this.food += food
    }
    get food() {
        return this.food
    }
 
    set mining(mining) {
        this.mining += mining
    }
    get mining() {
        return this.mining
    }
 
    set wood(wood) {
        this.wood += wood
    }
    get wood() {
        return this.wood
    }

    set road(road) {
        this.road += road
    }
    get road() {
        return this.road
    }

    set villa(villa) {
        this.villa += villa
    }
    get villa() {
        return this.villa
    }

    set city(city) {
        this.city += city
    }
    get city() {
        return this.city
    }
 }