const projectsSection = document.querySelector('#proyectos').getBoundingClientRect();
const certificatesSection = document.querySelector('#certificados').getBoundingClientRect();

const detectScroll = () => {
    
    window.onscroll = (e) => {
        if( window.scrollY >= (projectsSection.y - 100)){
            document.getElementById('proyectos').classList.add('show');
        } 
        if(window.scrollY >= (certificatesSection.y + 200)){
            document.getElementById('certificados').classList.add('show');
        }
    }
};

export default detectScroll;