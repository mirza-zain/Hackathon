document.addEventListener('DOMContentLoaded', () => {
    const show = document.getElementById('show');
    const close = document.getElementById('hide');
    const showskills = document.getElementById('showskills');

    if (show && close && showskills) {
        show.addEventListener('click', () => {
            showskills.style.display = 'block'; 
            show.style.opacity = '50%';
            close.style.opacity = '100%';
        });

        close.addEventListener('click', () => {
            showskills.style.display = 'none';
            close.style.opacity = '50%';
            show.style.opacity = '100%';
        });
    } else {
        console.error('One or more elements not found');
    }
});