import 'pixi';
import 'p2';
import Phaser from 'phaser';
import React, {Component} from 'react';
import grass from './grass.png';
import ball from './football.png';
import player from './player.png';

export default class Game extends Component {
  shouldComponentUpdate() {
    return false;
  }

  preload() {
    this.game.load.image('grass', grass);
    this.game.load.spritesheet('ball', ball);
    this.game.load.spritesheet('player', player);
  }

  create() {
    this.game.physics.startSystem(Phaser.Physics.P2JS);

    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.game.add.tileSprite(0, 0, window.innerWidth, window.innerHeight, 'grass');

    this.player = this.game.add.sprite(200, 200, 'player');
    this.game.physics.p2.enable(this.player);

    // this.ball = this.game.add.sprite(50, 50, 'ball');
    // this.game.physics.enable(this.ball, false);
    // this.player.body.collides(ball);
    // var player§ollisionGroup = game.physics.p2.createCollisionGroup();
    // var footballCollisionGroup = game.physics.p2.createCollisionGroup();
  }

  update() {
    const {up, down, left, right} = this.cursors;

    this.player.body.setZeroVelocity();

    if (left.isDown) {
      this.player.body.moveLeft(200);
    } else if (right.isDown) {
      this.player.body.moveRight(200);
    }

    if (up.isDown) {
      this.player.body.moveUp(200);
    } else if (down.isDown) {
      this.player.body.moveDown(200);
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
