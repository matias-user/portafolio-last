
const getImages = async()=> {
    return await fetch( 'src/db/certificates.json' )
                .then( data => data.json() )
};

const insertGallery = async() => {
    const carousel = document.getElementById('carousel-inner2');
    const resulImages = await getImages();

    resulImages.forEach( (image,idx) => {
        const div = document.createElement('div');
        if( idx == 0 ){
            div.className = 'carousel-item active';
        }else{
            div.className = 'carousel-item';
        }
        const img = document.createElement('img');
        img.className = 'certificados__image shadow';
        img.alt = 'imagen de certificado';
        img.src = image.title;
       
        div.append(img);
        carousel.append(div);
    });

};

export default insertGallery;