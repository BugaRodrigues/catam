window.onload = () => {
    randomBoard()

    let player_1 = new Player()
    let player_2 = new Player()
    let player_3 = new Player()
    let player_4 = new Player()
}   

function randomBoard() {
    let board = [
        "country", "country", "country", "country", "country", "country",         
        "farm", "farm", "farm", "farm", "farm", "farm",
        "forest", "forest", "forest", "forest", "forest", "forest",
        "desert", "desert", 
        "mountain", "mountain", "mountain", "mountain", "mountain",
        "mining", "mining", "mining", "mining", "mining"
        ]

    for (let i = 1; i <= 30; i++) {
        let iten = Number(Math.floor(Math.random() * board.length))
        let div = document.getElementById('b' + +i)
        div.className = board[iten]
        let img = document.getElementById("i" + +i)
        img.setAttribute("src", "Board/"+board[iten]+".svg") 
        board.splice(iten, 1)
    }
}

function end_turn() {
    document.body.style.opacity = "5%"  
    setTimeout(() => {
        let num = Number(Math.floor(Math.random() * 29))
        
        let div = document.createElement('div')
        div.style.position = "absolute"
        div.style.height = "100px"
        div.style.width = "100px"
        div.style.backgroundColor = "black"
        document.body.appendChild(div)
        div.style.opacity = "100%"
    }, (1 * 1000))

    setTimeout(() => {document.body.style.opacity = "100%"}, (3 * 1000))
}

