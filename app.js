function dados(){
    const ds = [ //vetor
        {id:"1", login:"Ringo", senha:"1234"}, //posição 0
        {id:"2", login:"Paul", senha:"12345"}, // posição 1
        {id:"3", login:"John", senha:"123456"} // posição 2
                ]
    const json = JSON.stringify(ds)

    localStorage.setItem("banco_dados", json)

}

function remover(){
    localStorage.removeItem("banco_dados")
}