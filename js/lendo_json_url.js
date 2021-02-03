const url = 'https://jsonplaceholder.typicode.com/todos';

var request = new Request(url, {
    method: 'GET',
    headers: new Headers()
});

fetch(request)
    .then(function(result) {
        console.log(result)
    })
