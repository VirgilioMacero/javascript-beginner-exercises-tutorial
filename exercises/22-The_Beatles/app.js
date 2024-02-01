function sing(){

    const song = ["let it be,"," let it be,"," let it be,"," let it be,"," there will be an answer,"," let it be,"," let it be,"," let it be,"," let it be,"," let it be,"," whisper words of wisdom,"," let it be"]
    
    let Singed = ''

    for (let i = 0; i < song.length; i++) {
        
        Singed += song[i]
        
    }

    return Singed

}

//Your code above ^^^

console.log(sing());