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
            ["<a class='custom-link' href='historias/raimiverse/doctorstrange2.html'>Doctor Strange 2</a>", "Raimi-Verse", "Stephen Strange (Doctor Strange),Baron Mordo, Wong", "Nightmare, Shuma-Gorath", "2015"],
            ["<a class='custom-link' href='historias/raimiverse/spiderman6.html'>Spider-Man 6: El Capítulo Final</a>", "Raimi-Verse", "Peter Parker (Spider-Man)", "Seis Siniestros (Los 5 anteriores y Escorpión), Robbie Robertson (HobGoblin), Norman Osborn (Duende Real), Wilson Fisk (Kingpin)", "2016"],
            ["<a class='custom-link' href='historias/raimiverse/venom.html'>Venom</a>", "Raimi-Verse", "Eddie Brock Jr (Venom)", "Peter Parker (Spider-Man), Cletus Kasady, Jack'O Lantern", "2017"],
            ["<a class='custom-link' href='historias/raimiverse/ultimacaceriakraven.html'>La Última Cacería de Kraven </a>", "Raimi-Verse", "Peter Parker (Spider-Man)", "Sergei Kravinoff (Kraven El Cazador), Wilson Fisk (Kingpin)", "2018"],
            ["<a class='custom-link' href='historias/raimiverse/spidermanclonesaga.html'>Spider-Man: La Saga del Clon </a>", "Raimi-Verse", "Peter Parker (Spider-Man)", "Miles Warren, Man-Wolf, Ben Reilly, Escorpión", "2019"],
            ["<a class='custom-link' href='historias/raimiverse/spidermanmaximuncarnage.html'>Spider-Man: Maximun Carnage</a>", "Raimi-Verse", "Peter Parker (Spider-Man), Eddie Brock Jr (Venom)", "Cletus Kasady (Carnage)", "2020"],


            // Add more rows as needed
        ],
        "paging": true,
        "lengthMenu": [5, 10, 30, 50, 100],
        "pageLength": 20,
        "order": [[4, 'asc']],
        "displayStart": 0,
    });
}


// Add this event listener
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('#phases-submenu a[href="#sonyverse"]').addEventListener("click", function (event) {
        event.preventDefault();
        showFasesTable();
    });
});
