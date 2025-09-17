document.querySelectorAll('.cabinet-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.cabinet-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

document.querySelector('.login-banner-link').addEventListener('click', () => {
    document.querySelector('.login-banner').style.display = 'none';
});

document.querySelector('.mobile-menu-toggle').addEventListener('click', () => {
    const menu = document.querySelector('.mobile-menu');
    const toggle = document.querySelector('.mobile-menu-toggle');
    menu.classList.toggle('active');
    toggle.classList.toggle('active');
});
