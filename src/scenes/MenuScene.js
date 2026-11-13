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
        this.music = this.sound.add('menuMusic', { loop: true, volume: 0.3 });
        this.music.play();

        this.add.text(400, 150, 'DUNGEON BREAK DEMO', {
            fontSize: '64px',
            color: '#ffffff'
        }).setOrigin(0.5);

        const playBtn = this.add.text(400, 320, 'Local Play', {
            fontSize: '32px',
            color: '#00ff00'
        }).setOrigin(0.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerover', () => playBtn.setStyle({ color: '#ffff00' }))
            .on('pointerout', () => playBtn.setStyle({ color: '#00ff00' }))
            .on('pointerdown', () => this.scene.start('GameScene'));

        const creditsBtn = this.add.text(700, 550, 'Créditos', {
            fontSize: '24px',
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
