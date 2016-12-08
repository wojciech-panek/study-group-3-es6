import 'pixi';
import 'p2';
import Phaser from 'phaser';
import React, {Component} from 'react';
import grass from './grass.png';
import ball from './football.png';
import player from './player.png';
import gate from './gate.png';

export default class Game extends Component {
  shouldComponentUpdate() {
    return false;
  }

  preload() {
    this.game.load.image('grass', grass);
    this.game.load.spritesheet('ball', ball);
    this.game.load.spritesheet('player', player);
    this.game.load.spritesheet('gate', gate);
  }

  create() {
    this.game.physics.startSystem(Phaser.Physics.P2JS);
    this.game.physics.p2.defaultRestitution = 0.8;

    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.game.add.tileSprite(0, 0, window.innerWidth, window.innerHeight, 'grass');

    this.player = this.game.add.sprite(window.innerWidth / 2, window.innerHeight - 70, 'player');
    this.game.physics.p2.enable(this.player);
    this.player.body.setZeroDamping();
    this.player.body.fixedRotation = true;

    this.ball = this.game.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'ball');
    this.game.physics.p2.enable(this.ball);

    this.gate = this.game.add.sprite(window.innerWidth / 2, 50, 'gate');
    this.game.physics.p2.enable(this.gate);
    this.gate.body.static = true;
  }

  update() {
    const {up, down, left, right} = this.cursors;

    this.player.body.setZeroVelocity();

    if (left.isDown) {
      this.player.body.moveLeft(300);
    } else if (right.isDown) {
      this.player.body.moveRight(300);
    }

    if (up.isDown) {
      this.player.body.moveUp(300);
    } else if (down.isDown) {
      this.player.body.moveDown(300);
    }
  }

  componentDidMount() {
    const {preload, create, update} = this;

    this.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO,
      this.refs.gameContainer, {preload, create, update});
  }

  render() {
    return <div ref='gameContainer'></div>;
  }
}
