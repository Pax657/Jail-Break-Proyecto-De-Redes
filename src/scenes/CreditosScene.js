import Phaser from 'phaser';

export class CreditosScene extends Phaser.Scene {
    constructor() {
        super('CreditosScene')
    }
    create() {
        const {width, height} = this.scale;

        this.add.rectangle(height/2, width/2, width, height, 0x000000, 0.7);

        this.add.text(width/2, 100, 'Créditos', { fontSize: '128px' }).setOrigin(0.5);

        const creditText1 = this.add.text(width/2, 320, 'Programación: Pablo Cordero, Javier Vázquez', { fontSize: '48px', color: '#00ff00' }).setOrigin(0.5);
        const creditText2 = this.add.text(width/2, 520, 'Arte: Patricia López, Javier Vázquez', { fontSize: '48px', color: '#00ff00' }).setOrigin(0.5);
        const creditText3 = this.add.text(width/2, 720, 'Música y sonido: Javier Vázquez', { fontSize: '48px', color: '#00ff00' }).setOrigin(0.5);
        const creditText4 = this.add.text(width/2, 950, '¡Gracias por jugar!', { fontSize: '72px', color: '#00ff00' }).setOrigin(0.5);

        const menuBtn = this.add.text(width/2 + 750, 1000, 'Menu', { fontSize: '64px', color: '#00ff00' }).setOrigin(0.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerover', () => menuBtn.setStyle({ color: '#ffff00' }))
            .on('pointerout', () => menuBtn.setStyle({ color: '#00ff00' }))
            .on('pointerdown', () => {
                this.scene.stop('CreditosScene');
                this.scene.start('MenuScene');
            });
    }
}