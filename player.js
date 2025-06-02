import * as Phaser from "https://cdn.jsdelivr.net/npm/phaser@3.60.0/dist/phaser.esm.js";

export class Boat{
    constructor(scene, name, imgKey){

        this.scene = scene;
        this.name = name;
        this.img = imgKey;
        this.coo = [500, 500];

        console.log("it works");



    }

    inputKeys(leftK, rightK, forwardK, anchorK){

    };
}