//Creando nodos en el div
const app = document.getElementById('app');
getImagesFromNASA()
then(function (data) {
    console.log(data)
    data.array.forEach(function (data) {
        const img = document.createElement('img')
        img.src = getImage(data)
        img.alt = data.caption
        app.appendChild(img) //El appendChild cada imagen en el div
    })
})

function getImagesFromNASA() {
    return fetch('https://epic.gsfc.nasa.gov/api/natural') //Sirve para hacer peticiones de manera asincrona
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
        })
        .catch(function (error) {
            console.log(error)
        })

}

function getImage(data) {
    const url = 'https://epic.gsfc.nasa.gov/api/natural'
    const date = data.date
        .substr() //.substr() obtiene los primeros 10 carácteres
        .split('-') //Separa los carácteres por el guion
    return '${url}/${date[0]}/${date[1]}/${date[2]}/png/${data.image.png}'
}