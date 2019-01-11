//HTTP request
const getData = async (wordCount) =>{
    let response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    
    if (response.status === 200 ) {
        let parsedResponse = await response.json();
            return parsedResponse.puzzle;
        } else{
            throw new Error("Unable to fetch")
        } 
    }