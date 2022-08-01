
const listenNav = () => {
    const links = document.querySelectorAll('.nav-link');
    
    links.forEach( link =>  {
        link.addEventListener('click', ()=> {
            document.querySelector('a.active').classList.remove('active');
            link.classList.add('active');
        });
    });
};

export default listenNav;