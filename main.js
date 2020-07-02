let coin = {
    state: 0,
    flip: function() {
        this.state = Math.round(Math.random());
    },
    toString: function() {
        return this.state === 0 ? "Heads" : "Tails"
    },
    toHTML: function() {
        let image = document.createElement('img');
        image.src = this.state === 0 ? 
            "https://i.usacoinbook.com/img/225/1/1/7/1583599938aa2842ee477548n.jpg" : 
            "https://i.usacoinbook.com/img/main/1/1/3/1472925688f7919926123f67n.jpg"
        image.style.width = "300px"
        image.style.height = "300px"
        return image
    
    }
};
function display20Flips(){
    for(let i=0; i<20; i++){
        let textBox = document.createElement('p')
        textBox.style.margin = "5px"
        coin.flip()
        textBox.append(coin.toString())
        document.body.append(textBox)
    }
    return console.log("Finished Flipping")
}
function display20Images(){
    for(let i=0; i<20; i++){
        coin.flip()
        document.body.append(coin.toHTML())
    }
    return console.log("Done")
}