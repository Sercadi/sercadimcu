function showSubmenu(submenuId) {
    const submenus = document.querySelectorAll('.submenu');
    submenus.forEach(submenu => {
        submenu.style.display = 'none';
    });
    document.getElementById(submenuId).style.display = 'block';
}

function showSubSubmenu(subsubmenuId) {
    const subsubmenus = document.querySelectorAll('.submenu');
    subsubmenus.forEach(subsubmenu => {
        subsubmenu.style.display = 'none';
    });
    document.getElementById(subsubmenuId).style.display = 'block';
}

// DataTables 

function showFasesTable() {
    $('#fases-table').DataTable({
        "responsive": true,
        "data": [
            ["<a class='custom-link' href='historias/raimiverse/spiderman1.html'>Spider-Man 1</a>", "Sony-Verse", "Peter Parker (Spider-Man)", "Norman Osborn (Duende Verde)", "2002"],
            ["<a class='custom-link' href='historias/raimiverse/spiderman2.html'>Spider-Man 2</a>", "Sony-Verse", "Peter Parker (Spider-Man)", "Otto Octavius (Doctor Octopus)", "2004"],
            // Add more rows as needed
        ],
        "paging": true,
        "lengthMenu": [5, 10, 30, 50, 100],
        "pageLength": 20,
    });
}


// Add this event listener
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('#phases-submenu a[href="#sonyverse"]').addEventListener("click", function (event) {
        event.preventDefault();
        showFasesTable();
    });
});
