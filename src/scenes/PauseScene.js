import Phaser from 'phaser';

export class PauseScene extends Phaser.Scene {
    constructor() {
        super('PauseScene');
    }

    create() {
        this.add.rectangle(400, 300, 800, 600, 0x000000, 0.7);

        this.add.text(400, 200, 'Game Paused', { fontSize: '64px' }).setOrigin(0.5);

        const resumeBtn = this.add.text(400, 320, 'Resume', { fontSize: '32px', color: '#00ff00' }).setOrigin(0.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerover', () => resumeBtn.setStyle({ color: '#ffff00' }))
            .on('pointerout', () => resumeBtn.setStyle({ color: '#00ff00' }))
            .on('pointerdown', () => {
                this.scene.stop();
                this.scene.resume('GameScene');
            });

        const menuBtn = this.add.text(400, 400, 'Menu', { fontSize: '32px', color: '#00ff00' }).setOrigin(0.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerover', () => menuBtn.setStyle({ color: '#ffff00' }))
            .on('pointerout', () => menuBtn.setStyle({ color: '#00ff00' }))
            .on('pointerdown', () => {
                this.scene.stop('GameScene');
                this.scene.start('MenuScene');
            });
    }
}
