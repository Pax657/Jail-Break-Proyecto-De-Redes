import Phaser from 'phaser';

export class MenuScene extends Phaser.Scene {
    constructor() {
        super('MenuScene');
    }

    preload() {
        //load assets
        this.load.audio('menuMusic', 'assets/Sonidos/CancionPonponTororon.mp3');
    }
    create() {
        const {width, height} = this.scale;

        this.music = this.sound.add('menuMusic', { loop: true, volume: 0.3 });
        this.music.play();

        this.add.text(width/2, 200, 'DUNGEON BREAK DEMO', {
            fontSize: '128px',
            color: '#ffffff'
        }).setOrigin(0.5);

        const playBtn = this.add.text(width/2, 500, 'Local Play', {
            fontSize: '72px',
            color: '#00ff00'
        }).setOrigin(0.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerover', () => playBtn.setStyle({ color: '#ffff00' }))
            .on('pointerout', () => playBtn.setStyle({ color: '#00ff00' }))
            .on('pointerdown', () => this.scene.start('JuegoScene'));

        const creditsBtn = this.add.text(width/2 + 750, 1000, 'Créditos', {
            fontSize: '64px',
            color: '#00ff00'
        }).setOrigin(0.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerover', () => creditsBtn.setStyle({ color: '#ffff00' }))
            .on('pointerout', () => creditsBtn.setStyle({ color: '#00ff00' }))
            .on('pointerdown', () => this.scene.start('CreditosScene'));

        //parar música al cambiar    
        this.events.once('shutdown', () => {
            this.music.destroy();
        });
    }
}
