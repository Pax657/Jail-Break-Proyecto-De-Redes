import Phaser from 'phaser';

export class MenuScene extends Phaser.Scene {
    constructor() {
        super('MenuScene');
    }

    preload(){
        //load assets
        this.load.audio('music', 'assets/Sonidos/CancionPonponTororon.mp3');
    }
    create() {
        this.music = this.sound.add('music', {loop: true, volume: 0.3});
        this.music.play();

        this.add.text(400, 150, 'JAILBREAK DEMO', {
            fontSize: '64px',
            color: '#ffffff'
        }).setOrigin(0.5);

        const localBtn = this.add.text(400, 320, 'Local Play', {
            fontSize: '32px',
            color: '#00ff00'
        }).setOrigin(0.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerover', () => localBtn.setStyle({ color: '#ffff00' }))
            .on('pointerout', () => localBtn.setStyle({ color: '#00ff00' }))
            .on('pointerdown', () => this.scene.start('GameScene'));
    }
}
