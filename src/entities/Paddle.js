export class Paddle {

    constructor(scene, id, x, y) {
        this.id = id;
        this.scene = scene;
        this.score = 0;
        this.speed = 300;

        this.sprite = scene.physics.add.sprite(x, y, 'paddle');
        this.sprite.setDisplaySize(20, 100);
        this.sprite.setImmovable(true);
        this.sprite.setCollideWorldBounds(true);
    }
}