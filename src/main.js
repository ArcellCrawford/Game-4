let config = {
    parent: 'phaser-game',
    type: Phaser.CANVAS,
    render: {
        pixelArt: true  
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                x:0,
                y: 0
            }
        }
    },
    width: 800,
    height: 800,
    SCALE:{zoom:2},
    scene: [Load,MainMenu,Dungeoncrawler],
    
}

var cursors;
const SCALE = 2.0;
var my = {sprite: {}, text: {}};

const game = new Phaser.Game(config);