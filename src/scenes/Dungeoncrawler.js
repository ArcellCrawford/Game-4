class Dungeoncrawler extends Phaser.Scene {
    constructor() {
        super("dungeonCrawler");
    }

    init() {
       
        
    }

    create() {
 
       this.map = this.add.tilemap("Dungeon",526,968);
       
       
      
    }

    update() {
        
    }
}