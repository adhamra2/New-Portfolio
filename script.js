

// Filter Able ProjectGallery.
window.addEventListener('load', ()=>{
    let allTab = document.querySelectorAll('.tab');
    let allProject = document.querySelectorAll('.project');

    const removeActive=()=> allTab.forEach(tab=>{
        tab.classList.remove('tab-active')
    })
    allTab.forEach(tab=>{
        tab.addEventListener('click', (event)=>{
            removeActive();
            tab.classList.add('tab-active')

            let fillterName = event.target.getAttribute('data-name');

            allProject.forEach(project=>{
                let projectName = project.getAttribute('data-name')
                if((projectName == fillterName) || fillterName == 'All'){
                    project.style.display = '';
                }else{
                    project.style.display = 'none';
                }
            })
        });
    })
});

// Nav Scroll //

window.addEventListener('scroll',()=>{
    let nav = document.querySelector('nav');

    nav.classList.toggle('nav-srcoll', window.scrollY>0);
});

// Typed JS



// Menu Bar Js //

let menuBar = document.querySelector('.menu-bar');
let menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click',()=>{
    menuBar.classList.toggle('menu-none')
})
