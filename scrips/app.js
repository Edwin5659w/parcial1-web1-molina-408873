// Tabs funcionalidad SPA
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function () {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(tc => tc.classList.add('hidden'));
        this.classList.add('active');
        document.getElementById(this.dataset.tab).classList.remove('hidden');
    });
});

// Sidebar links
document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', function (e) {
        document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Post form
document.querySelector('.post-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const input = this.querySelector('.post-input');
    if (input.value.trim()) {
        alert('Publicación: ' + input.value);
        input.value = '';
    }
});
