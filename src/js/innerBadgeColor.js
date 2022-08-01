


const innerBadgeColor = ( idx, element, tag ) =>{
    const colors = ['primary','secondary','dark','success','warning','info','danger'];
    const rndInt = Math.floor( Math.random() * 7 ); 

    switch( idx ){
        case 0:
            element.innerHTML += `
                <span class="badge bg-${colors[rndInt]}">${tag}</span>
            `;
        break;
        case 1:
            element.innerHTML += `
                <span class="badge bg-${colors[rndInt]}">${tag}</span>
            `;
        break;
        case 2:
            element.innerHTML += `
                <span class="badge bg-${colors[rndInt]}">${tag}</span>
            `;
        break;
        case 3:
            element.innerHTML += `
                <span class="badge bg-${colors[rndInt]}">${tag}</span>
            `;
        break;
        case 4:
            element.innerHTML += `
                <span class="badge bg-${colors[rndInt]}">${tag}</span>
            `;
        break;
        case 5:
            element.innerHTML += `
                <span class="badge bg-${colors[rndInt]}">${tag}</span>
            `;
        break;
        case 6:
            element.innerHTML += `
                <span class="badge bg-${colors[rndInt]}">${tag}</span>
            `;
        break;
        default:
            element.innerHTML += `
                <span class="badge bg-ligth shadow"><p class="text-dark" >${tag}</p></span>
            `;
        
    }
};

export default innerBadgeColor;