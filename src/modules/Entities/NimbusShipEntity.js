import Phaser from 'phaser';
import Entity from './Entities';

export default class NimbusShip extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprEnemy2', 'NimbusShip');
    this.body.velocity.y = Phaser.Math.Between(50, 100);
  }
}
