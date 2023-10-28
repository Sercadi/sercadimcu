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
            ["<a class='custom-link' href='historias/raimiverse/spiderman1.html'>Spider-Man 1</a>", "Raimi-Verse", "Peter Parker (Spider-Man)", "Norman Osborn (Duende Verde)", "2002"],
            ["<a class='custom-link' href='historias/raimiverse/spiderman2.html'>Spider-Man 2</a>", "Raimi-Verse", "Peter Parker (Spider-Man)", "Otto Octavius (Doctor Octopus)", "2004"],
            ["<a class='custom-link' href='historias/raimiverse/spiderman3.html'>Spider-Man 3</a>", "Raimi-Verse", "Peter Parker (Spider-Man)", "Eddie Brock Jr (Venom), Flint Marko (Sandman)", "2007"],
            ["<a class='custom-link' href='historias/raimiverse/spiderman4.html'>Spider-Man 4</a>", "Raimi-Verse", "Peter Parker (Spider-Man)", "Adrian Toomes (Buitre), Alex O'Hirn (Rhino), Curt Connors (Lagarto)", "2011"],
            ["<a class='custom-link' href='historias/raimiverse/doctorstrange.html'>Doctor Strange</a>", "Raimi-Verse", "Stephen Strange (Doctor Strange)", "Baron Mordo, Dormmamu", "2013"],
            ["<a class='custom-link' href='historias/raimiverse/ironman.html'>Iron Man</a>", "Raimi-Verse", "Tony Stark (Iron Man)", "El Mandarín", "2013"],
            ["<a class='custom-link' href='historias/raimiverse/spiderman5.html'>Spider-Man 5</a>", "Raimi-Verse", "Peter Parker (Spider-Man)", "Quentin Beck (Mysterio), Herman Schultz (Shocker), Max Dillon (Electro)", "2014"],



            // Add more rows as needed
        ],
        "paging": true,
        "lengthMenu": [5, 10, 30, 50, 100],
        "pageLength": 20,
        "order": [[4, 'asc']]
    });
}


// Add this event listener
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('#phases-submenu a[href="#sonyverse"]').addEventListener("click", function (event) {
        event.preventDefault();
        showFasesTable();
    });
});
