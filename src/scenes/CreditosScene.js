import Phaser from 'phaser';

export class CreditosScene extends Phaser.Scene {
    constructor() {
        super('CreditosScene')
    }
    create() {
        this.add.rectangle(400, 300, 800, 600, 0x000000, 0.7);

        this.add.text(400, 100, 'Créditos', { fontSize: '32px' }).setOrigin(0.5);

        const creditText1 = this.add.text(400, 220, 'Programación: Pablo Cordero, Javier Vázquez', { fontSize: '24px', color: '#00ff00' }).setOrigin(0.5);
        const creditText2 = this.add.text(400, 320, 'Arte: Patricia López, Javier Vázquez', { fontSize: '24px', color: '#00ff00' }).setOrigin(0.5);
        const creditText3 = this.add.text(400, 420, 'Música y sonido: Javier Vázquez', { fontSize: '24px', color: '#00ff00' }).setOrigin(0.5);
        const creditText4 = this.add.text(400, 520, '¡Gracias por jugar!', { fontSize: '32px', color: '#00ff00' }).setOrigin(0.5);

        const menuBtn = this.add.text(700, 550, 'Menu', { fontSize: '32px', color: '#00ff00' }).setOrigin(0.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerover', () => menuBtn.setStyle({ color: '#ffff00' }))
            .on('pointerout', () => menuBtn.setStyle({ color: '#00ff00' }))
            .on('pointerdown', () => {
                this.scene.stop('CreditosScene');
                this.scene.start('MenuScene');
            });
    }
}