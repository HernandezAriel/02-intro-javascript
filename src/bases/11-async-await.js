
const getImage = async () => {

    try {
        const apiKey = 'mLapJZabKleeZaDZR6IuQaHcMjhYGCNl';
        const httpCall = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await httpCall.json()
        const { url } = data.images.original;
        const img = document.createElement('IMG');
        img.src = url;
        document.body.append(img);

    } catch (error) {
        console.error(error);
    }

}

getImage();


