type ResNumb = {
    d: 1
}

type ResString = {
    z: 2
}

function f(val: number): ResNumb
function f(val: string): ResString
function f(val: string | number): ResNumb | ResString{
    if(typeof val === "string"){
        return {z : 2}
    }

    return { d: 1}
} 

