import innerBadgeColor from "./innerBadgeColor.js";

const getProjects = async() => {
    let resultProjects = [];
    await fetch( 'src/db/projects.json' )
        .then( data => data.json() )
        .then( result => resultProjects = result );
    return resultProjects;
};

const insertButtonsIndicators = ( arr ) => {
     
    arr.forEach( (val,idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.dataset.bsTarget ='#carousel1';
        btn.dataset.bsSlideTo = idx;
        if( idx == 0 ){
            btn.className = 'active'
        }
        btn.ariaCurrent = 'true';
        btn.ariaLabel = `Slide ${idx + 1}`;
        document.getElementById('carousel-indicators1').appendChild(btn);
    } );
};

const insertItemsCarousel = async() => {
    const result =  await getProjects();
    const carouselInner = document.getElementById('carousel-inner1');
    
    insertButtonsIndicators(result);    

    result.forEach( (project, idx) => {
        const div = document.createElement('div');
        const divCard = document.createElement('div');
        const divBody = document.createElement('div');
        const divFooter = document.createElement('div');
        const img = document.createElement('img');
        img.className = 'card-image-top';
        if( idx == 0 ){
            div.className = 'carousel-item active';
        }else{
            div.className = 'carousel-item';
        }
        divCard.className = 'card mx-auto shadow';
        divBody.className = 'card-body';
        divFooter.className = 'card-footer d-flex';

        img.src = `${project.image}`;
        img.alt = `${project.name} proyecto imagen`;

        divBody.innerHTML = `
            <h4 class="card-title text-decoration-underline">Proyecto: ${project.name}</h4>
        `;
        divBody.innerHTML += `
            <p class="card-text text-center text-md-start">${project.description}</p>
            <hr>
        `;
        divFooter.innerHTML = `
            <a target="__blank" href="${project.url}" class="btn btn-dark ">Ir a proyecto</a>
            <a target="__blank" href="${project.repository}" class="btn btn-outline-dark ms-auto">Repo github</a>
        `;
        project.tags.forEach( ( tag, idx) => {
            innerBadgeColor( idx, divBody, tag);
        } );


        div.append(divCard);
        divCard.append(img);
        divCard.append(divBody);
        divCard.append(divFooter);
        carouselInner.append(div);
    });
};

export default insertItemsCarousel;