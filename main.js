window.onload = () => {
    randomBoard()
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
