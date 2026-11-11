import Phaser from 'phaser';
import { GameScene } from './scenes/GameScene.js';
import { MenuScene } from './scenes/MenuScene.js';
import { PauseScene } from './scenes/PauseScene.js';

const config = {
    type: Phaser.AUTO,      // WebGL if available; otherwise, Canvas
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: [MenuScene, GameScene, PauseScene]      // The first scene starts automatically
};

const game = new Phaser.Game(config);
