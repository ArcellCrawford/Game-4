class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload() {
        //sets asset path 
       this.load.setPath("./assets/")
       //gets tiles and json of the map 
       this.load.image("tiles", 'tiles/tiles.png')
       this.load.tilemapTiledJSON("Dungeon", "tiles/Dungeon(1).tmj"); 
       this.load.image("background", "MainMenu.png")
       this.load.atlas('fauna', 'Spritesheet/fauna.png','Spritesheet/fauna.json')
     
    }

    create() {
        //handles the animation frames 
        //Running Animations 
        this.anims.create({
            key: 'rundown',
            frames: this.anims.generateFrameNames('fauna', {
                prefix: "sprites/run-down/run-down-",
                start: 1,
                end: 8,
                suffix: ".png",
                zeroPad: 0
            }),
            frameRate: 15,
            repeat: -1
        });

         this.anims.create({
             key: 'runright',
             frames: this.anims.generateFrameNames('fauna', {
                prefix: "sprites/run-side/run-side-",
                start: 1,
                end: 8,
                suffix: ".png",
                zeroPad: 0
            }),
        });

            this.anims.create({
                key: 'runup',
                frames: this.anims.generateFrameNames('fauna', {
                   prefix: "sprites/run-up/run-up-",
                   start: 1,
                   end: 8,
                   suffix: ".png",
                   zeroPad: 0
               }),
            });
            //this is the reason why flipping when pressing right and left wont work, debug
            this.anims.create({
                key: 'runleft',
                frames: this.anims.generateFrameNames('fauna', {
                   prefix: "sprites/run-side/run-side-",
                   start: 1,
                   end: 8,
                   suffix: ".png",
                   zeroPad: 0,
                  
               }),
               
               
            });

            this.anims.create({
                key: 'idle',
                frames: this.anims.generateFrameNames('fauna', {
                   prefix: "sprites/walk-front-lift/walk-front-lift-",
                   start: 4,
                   end: 4,
                   suffix: ".png",
                   zeroPad: 0,
                  
               }), 

                   
            });

            //  defaultTextureKey: "fauna",
            //  frames: [
            //      { frame: "tile_0000.png" }
            //  ],
             repeat: -1
      

        // this.anims.create({
        //     key: 'jump',
        //     defaultTextureKey: "fauna",
        //     frames: [
        //         { frame: "tile_0001.png" }
        //     ],
        // });
    //starts scene 
    this.scene.start("mainMenu")
    }

    update() {
    }
}