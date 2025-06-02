import * as Phaser from "https://cdn.jsdelivr.net/npm/phaser@3.60.0/dist/phaser.esm.js";
import {
    Boat
} from "./player.js";



const config = {

    type: Phaser.AUTO,
    width: 800,
    height:600,
    physics:{},
    backgroundColor: "#ffffff",
    scene: {
        preload,
        create,
        update,
    }

};

const game = new Phaser.Game(config);

function preload(){
    // to preload img for example
    this.load.image("ship", 'assets/ship.png')
}

function create(){
    // called once at the start
    // the boat yaaay!
    const boat = new Boat(this, "ase", 'ship');



    // input keys
    this.cursors = this.input.keyboard.createCursorKeys();
}

function update(){
    // apparently loops through out the whole game, to verify tps or stuff like that XD
    if (this.cursors.up.isDown) {
        console.log("qsdf")
    }
}