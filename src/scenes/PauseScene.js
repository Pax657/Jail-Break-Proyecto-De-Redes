import Phaser from 'phaser';

export class PauseScene extends Phaser.Scene {
    constructor() {
        super('PauseScene');
    }

    create() {
        const {width, height} = this.scale;

        this.add.rectangle(width/2, height/2, width, height, 0x000000, 0.7);

        this.add.text(width/2, 200, 'Game Paused', { fontSize: '128px' }).setOrigin(0.5);

        const resumeBtn = this.add.text(width/2, 420, 'Resume', { fontSize: '64px', color: '#00ff00' }).setOrigin(0.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerover', () => resumeBtn.setStyle({ color: '#ffff00' }))
            .on('pointerout', () => resumeBtn.setStyle({ color: '#00ff00' }))
            .on('pointerdown', () => {
                this.scene.stop();
                this.scene.resume('JuegoScene');
            });

        const menuBtn = this.add.text(width/2, 700, 'Menu', { fontSize: '64px', color: '#00ff00' }).setOrigin(0.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerover', () => menuBtn.setStyle({ color: '#ffff00' }))
            .on('pointerout', () => menuBtn.setStyle({ color: '#00ff00' }))
            .on('pointerdown', () => {
                this.scene.stop('JuegoScene');
                this.scene.start('MenuScene');
            });
    }
}
