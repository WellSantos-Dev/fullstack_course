const containerPersons = document.querySelector('.container')
const url = 'https://jsonplaceholder.typicode.com/posts';

async function getData() {
    const data = {
        method: 'POST',
        body: {title : "JavaScript"},
        Headers: {
            "Content-Type": "application/json"
        }
    }

    await fetch(url)
    .then(r => {
        return r.json()
    })
    .then(r => {
        console.log(r)
        containerPersons.innerHTML += `
        <h1>${r[0].title}</h1>
        `
    })

   

}

getData()