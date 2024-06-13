class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload() {
       this.load.setPath("./assets/")
       this.load.image("tiles", 'Spritesheet/roguelikeDungeon_transparent.png')
       this.load.tilemapTiledJSON("Dungeon", "tiles/dungeon-02.tmj"); 
     
    }

    create() {
    this.scene.start("dungeonCrawler")
    }

    update() {
    }
}