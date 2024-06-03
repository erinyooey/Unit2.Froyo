let user = prompt("Enter a list of comma-separated froyo flavors.",
    "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
)

console.log("user input: ", user) // Testing console log


const froyoFlavors = (flavors) => {

    let arr = user.split(",").map(flavor => flavor.trim()) // get rid of trailing spaces

    console.log("parsed: ", arr)

    const obj = {} // keep count of orders for each flavor
    for(let i=0; i<arr.length; i++){ 
        let flavor = arr[i]
        if(!(flavor in obj)){ // if not in obj
            obj[flavor] = 1
        }
        else{ // else count the occurrence
            obj[flavor] += 1
        }
    }
    return obj
}

console.log(froyoFlavors(user))
