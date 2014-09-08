var Phaser = require( '../lib/phaser' );
var PIXI = require( '../lib/pixi' );
var Game = require( './game' );

var game = new Phaser.Game(
    800,
    600,
    Phaser.AUTO,
    'game',
    {
        preload: Game.preload,
        create: Game.create,
        update: Game.update,
        render: Game.render
    }
);

module.exports = game;
