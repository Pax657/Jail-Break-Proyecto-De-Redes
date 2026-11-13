import Phaser from 'phaser';
import { Paddle } from '../entities/Paddle';

export class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    init() {
        this.players = new Map();
        this.inputMappings = [];
    }

    preload() {
        // Load assets
        this.load.image('paddle', 'assets/images/paddle.png')

        // Hit sound
        this.load.audio('hit', 'assets/audio/hit.mp3');

        // Background music
        this.load.audio('gameMusic', 'assets/audio/music.mp3');
    }

    create() {
        // Looping background music
        this.music = this.sound.add('gameMusic', { loop: true, volume: 0.3 });
        this.music.play();

        // Pause/resume the music with the scene and stop it on exit
        this.events.on('pause', () => this.music.pause());
        this.events.on('resume', () => this.music.resume());
        this.events.once('shutdown', () => {
            this.events.off('pause');
            this.events.off('resume');
            this.music.destroy();
        });

        this.leftGoals = 0;
        this.rightGoals = 0;

        // Add mid line
        for (let i = 0; i < 12; i++) {
            this.add.rectangle(400, i * 50 + 25, 10, 30, 0x666666);
        }

        // Scores
        this.scoreLeft = this.add.text(200, 50, '0', { fontSize: '48px' }).setOrigin(0.5);
        this.scoreRight = this.add.text(600, 50, '0', { fontSize: '48px' }).setOrigin(0.5);

        // Collisions on all sides 
        this.physics.world.setBoundsCollision(false, false, true, true);

        // Create the box
        this.createBall();

        // Launch the ball
        this.resetBall();

        // Setup players
        this.setUpPlayers();

        // Setup collisions
        this.players.forEach(paddle => {
            this.physics.add.collider(this.ball, paddle.sprite, () => {
                this.sound.play('hit');
            });
        });

        // Pause with ESC and show the pause menu on top
        this.input.keyboard.on('keydown-ESC', () => {
            this.scene.pause();
            this.scene.launch('PauseScene');
        });
    }

    setUpPlayers() {
        const player1 = new Paddle(this, 'player1', 50, 300);
        const player2 = new Paddle(this, 'player2', 750, 300);

        this.players.set(player1.id, player1);
        this.players.set(player2.id, player2);

        const Keys = Phaser.Input.Keyboard.KeyCodes;
        this.inputMappings = [
            {paddle: player1, up: Keys.W, down: Keys.S},
            {paddle: player2, up: Keys.UP, down: Keys.DOWN}
        ].map(mapping => ({
            paddle: mapping.paddle,
            upKey: this.input.keyboard.addKey(mapping.up),
            downKey: this.input.keyboard.addKey(mapping.down)
        }));
    }
    
    resetBall() {
        this.ball.setVelocity(0, 0);
        this.ball.setPosition(400, 300);
        this.time.delayedCall(2000, () => this.launchBall());
    }

    launchBall() {
        const angle = Phaser.Math.Between(-30, 30);
        const speed = 400;
        const direction = Math.random() < 0.5 ? 1 : -1;

        const speedX = Math.cos(Phaser.Math.DegToRad(angle)) * speed * direction;
        const speedY = Math.sin(Phaser.Math.DegToRad(angle)) * speed;
        this.ball.setVelocity(
            speedX, speedY
        );
    }

    createBall() {
        const graphics = this.add.graphics();
        graphics.fillStyle(0xffffff);
        graphics.fillCircle(8, 8, 8);
        graphics.generateTexture('ball', 16, 16);
        graphics.destroy();

        this.ball = this.physics.add.image(400, 300, 'ball').setOrigin(0.5);
        this.ball.setCollideWorldBounds(true);
        this.ball.setBounce(1);

    }

    goal() {
        this.scoreRight.setText(this.rightGoals.toString());
        this.scoreLeft.setText(this.leftGoals.toString());

        if (this.leftGoals + this.rightGoals >= 3) {
            const winnerId = this.leftGoals > this.rightGoals ? 'player1' : 'player2';
            this.endGame(winnerId);
        } else {
            this.resetBall();
        }
    }

    endGame(winnerId) {
        this.ball.setVelocity(0, 0);
        this.ball.setPosition(400, 300);
        this.ball.setVisible(false);
        this.players.forEach(paddle => { paddle.sprite.setVelocity(0, 0); });
        this.physics.pause();

        const winnerText = winnerId === 'player1' ? 'Player 1 Wins!' : 'Player 2 Wins!';
        this.add.text(400, 250, winnerText, { fontSize: '48px' }).setOrigin(0.5);

        const menuBtn = this.add.text(400, 350, 'Menu', { fontSize: '32px', color: '#00ff00' }).setOrigin(0.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerover', () => menuBtn.setStyle({ color: '#ffff00' }))
            .on('pointerout', () => menuBtn.setStyle({ color: '#00ff00' }))
            .on('pointerdown', () => this.scene.start('MenuScene'));
    }

    update(time, delta) {

        this.inputMappings.forEach(mapping => {
            const paddle = mapping.paddle;

            if (mapping.upKey.isDown) {
                paddle.sprite.setVelocityY(-paddle.speed);
            } else if (mapping.downKey.isDown) {
                paddle.sprite.setVelocityY(paddle.speed);
            } else {
                paddle.sprite.setVelocityY(0);
            }
        });

        // Game loop
        if (this.ball.x < 0) {
            this.rightGoals += 1;
            this.goal();
        } else if (this.ball.x > 800) {
            this.leftGoals += 1;
            this.goal();
        }
    }
}
