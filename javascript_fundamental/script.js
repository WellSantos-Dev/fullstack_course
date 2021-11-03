const url = 'https://jsonplaceholder.typicode.com/posts'

fetch(url, {
    method : "POST",
    body : '{"title" : "JavaScript"}',
    headers : {
        "Content-Type" : "application/json"
    }
})

.then(r => {
    return r.json()
})

.then(r => {
    console.log(r)
})