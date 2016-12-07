import 'pixi';
import 'p2';
import Phaser from 'phaser';
import React, {Component} from 'react';
import grass from './grass.png';
import football from './football.png';

export default class Game extends Component {
  shouldComponentUpdate() {
    return false;
  }

  preload() {
    this.game.load.image('grass', grass);
    this.game.load.spritesheet('ball', football);
  }

  create() {
    this.game.add.tileSprite(0, 0, window.innerWidth, window.innerHeight, 'grass');
  }

  update() {

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
