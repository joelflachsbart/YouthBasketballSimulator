import Menu from '../src/menu.js'

export default Phaser.Class({
    Extends: Menu,
    
    initialize:
            
    function ActionsMenu(x, y, scene) {
        Menu.call(this, x, y, scene);   
        this.addMenuItem('Encourage');
    },
    confirm: function() {      
        this.scene.events.emit('SelectEnemies');        
    }
    
});