function checkWin(win){
    return win.result === "W"
}

function superbowlWin(record){
    const result = record.find(checkWin);
    if (!result){
        return undefined
    }
    else{
        return result.year
    }
}