import * as Phaser from "https://cdn.jsdelivr.net/npm/phaser@3.60.0/dist/phaser.esm.js";

export class Boat{
    constructor(scene, name, imgKey){

        this.scene = scene;
        this.name = name;
        this.coo = [500, 500];

        // img
        console.log(this.scene.textures.exists(imgKey));
        this.scene.textures.get(imgKey).setFilter(Phaser.Textures.FilterMode.NEAREST);
        this.img = this.scene.add.image(this.coo[0], this.coo[1], imgKey);
        this.img.setScale(1);



    }

    inputKeys(leftK, rightK, forwardK, anchorK){
        this.left = leftK
        this.right = rightK
        this.forward = forwardK
        this.anchor = anchorK
    };
}