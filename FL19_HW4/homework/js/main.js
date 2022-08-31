const leftBox = document.getElementById('left-block')
const rightBox = document.getElementById('right-block')
const buttonJS = document.getElementById('from-js')
const buttonServer = document.getElementById('from-server')
const load = document.getElementById('load')

function loaded() {

    load.classList.remove('hiden')
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
    xhr.send()
    xhr.onload = () => {
        if (xhr.status !== 200) {
            alert(`Помилка ${xhr.status}: ${xhr.statusText}`);
        } else {
            const parsed = JSON.parse(xhr.response)
            console.log('parsed', parsed)
            for (const iterator of parsed) {
                const p = document.createElement('p')
                p.classList.add('p-left')
                leftBox.append(p)
                p.append(iterator.name)
            }
        }
    }
    load.classList.add('hiden')
}
buttonJS.addEventListener('click', loaded)

function listServer() {
    load.classList.remove('hiden')
    const dataServer = fetch(`https://jsonplaceholder.typicode.com/users`).then((response) => {
        return response.json()
    }
    )
    dataServer.then(arr => {
        arr.forEach((iterator, index) => {
            const boxUserServer = document.createElement('div')
            boxUserServer.id = 'box-user-server'
            rightBox.append(boxUserServer)
            const p1 = document.createElement('p')
            boxUserServer.append(p1)
            p1.append(iterator.name)
            const divButtons = document.createElement('div')
            boxUserServer.append(divButtons)
            divButtons.id = 'blok-button'
            boxUserServer.append(divButtons)
            const buttonsEdit = document.createElement('button')
            buttonsEdit.classList.add('edit')
            buttonsEdit.append('Edit')
            divButtons.append(buttonsEdit)
            const buttonsDelete = document.createElement('button')
            buttonsDelete.classList.add('delete')
            buttonsDelete.append('Delete')
            divButtons.append(buttonsDelete)
            const divInput = document.createElement('div')
            boxUserServer.append(divInput)
            divInput.id = 'blok-input'
            boxUserServer.append(divInput)
            const input = document.createElement('input')
            divInput.append(input)
            const inputBtn = document.createElement('button')
            inputBtn.append('Save')
            divInput.append(inputBtn)

            function saved(method, index, name) {
                load.classList.remove('hiden')
                fetch(`https://jsonplaceholder.typicode.com/users/${index + 1}`, {
                    method: method,
                    body: JSON.stringify(name),
                    headers: { 'Content-Type': 'application/json' }
                }
                ).then(response => {
                    if (response.ok) {
                        if (method === 'DELETE') {
                            alert(`User with id – ${index + 1} was deleted`)
                        }
                        return response.json()
                    }
                    return response.json()
                        .then(() => {
                            'Помилка'
                        }
                        )
                })
                load.classList.add('hiden')
            }
            const body = input.value
            inputBtn.addEventListener('click', () => saved('PUT', body, index))
            buttonsDelete.addEventListener('click', () => saved('DELETE', index))
        }
        )
    }
    )
    load.classList.add('hiden')
}
buttonServer.addEventListener('click', listServer)
