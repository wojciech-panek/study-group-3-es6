import 'pixi';
import 'p2';
import Phaser from 'phaser';
import React, {Component} from 'react';

export default class Game extends Component {
  shouldComponentUpdate() {
    return false;
  }

  preload() {

  }

  create() {

  }

  update() {
    
  }

  componentDidMount() {
    const {preload, create, update} = this;
    this.game = new Phaser.Game(800, 600, Phaser.AUTO, this.refs.gameContainer, {preload, create, update});
  }

  render() {
    return <div ref='gameContainer'></div>;
  }
}
