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

function showRaimiTable() {
    $('#raimi-table').DataTable({
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
            ["<a class='custom-link' href='historias/raimiverse/tas1.html'>The Amazing Spider-Man</a>", "Webb-Verse", "Peter Parker (Spider-Man)", "Curt Connors (Lagarto)", "2012"],
            ["<a class='custom-link' href='historias/raimiverse/tas2.html'>The Amazing Spider-Man 2</a>", "Webb-Verse", "Peter Parker (Spider-Man)", "Max Dillon (Electro), Harry Osborn (Duende Verde), Aleksei Sytsevich (Rhino)", "2014"],
            ["<a class='custom-link' href='historias/raimiverse/tas3.html'>The Amazing Spider-Man 3</a>", "Webb-Verse", "Peter Parker (Spider-Man)", "Sergei Kravinoff (Kraven El Cazador), Eddie Brock Jr, Otto Octavius", "2016"],
            ["<a class='custom-link' href='historias/raimiverse/tas3.html'>Venom</a>", "Webb-Verse", "Eddie Brock Jr (Venom)", "Anne Weying", "2017"],
            ["<a class='custom-link' href='historias/raimiverse/sinistersix.html'> Sinister Six </a>", "Webb-Verse", "Ver Proyecto", "Ver Proyecto", "2018"],
            ["<a class='custom-link' href='historias/raimiverse/jackpot.html'> Jackpot </a>", "Webb-Verse", "Ver Proyecto", "Ver Proyecto", "2018"],
            ["<a class='custom-link' href='historias/raimiverse/silk.html'> Silk </a>", "Webb-Verse", "Ver Proyecto", "Ver Proyecto", "2019"],
            ["<a class='custom-link' href='historias/raimiverse/knull.html'> Knull </a>", "Webb-Verse", "Ver Proyecto", "Ver Proyecto", "2020"],
            ["<a class='custom-link' href='historias/raimiverse/venom2.html'> Venom Let it Be Carnage </a>", "Webb-Verse", "Ver Proyecto", "Ver Proyecto", "2021"],
            ["<a class='custom-link' href='historias/raimiverse/morbius.html'> Morbius </a>", "Webb-Verse", "Ver Proyecto", "Ver Proyecto", "2022"],
            ["<a class='custom-link' href='historias/raimiverse/blackcat.html'> Black Cat </a>", "Webb-Verse", "Ver Proyecto", "Ver Proyecto", "2022"],
            ["<a class='custom-link' href='historias/raimiverse/thesandman.html'> The Sandman </a>", "Webb-Verse", "Ver Proyecto", "Ver Proyecto", "2022"],
            ["<a class='custom-link' href='historias/raimiverse/kraventhehunter.html'> Kraven El Cazador </a>", "Webb-Verse", "Ver Proyecto", "Ver Proyecto", "2022"],
            ["<a class='custom-link' href='historias/raimiverse/madameweb.html'> Madame Web </a>", "Webb-Verse", "Ver Proyecto", "Ver Proyecto", "2023"],
            ["<a class='custom-link' href='historias/raimiverse/tigreblanco.html'> Tigre Blanco </a>", "Webb-Verse", "Ver Proyecto", "Ver Proyecto", "2023"],
            ["<a class='custom-link' href='historias/raimiverse/morbius2.html'> Morbius 2 </a>", "Webb-Verse", "Ver Proyecto", "Ver Proyecto", "2023"],
            ["<a class='custom-link' href='historias/raimiverse/electro.html'> Electro </a>", "Webb-Verse", "Ver Proyecto", "Ver Proyecto", "2023"],
            ["<a class='custom-link' href='historias/raimiverse/tas4.html'> The Amazing-Spiderman 4 </a>", "Webb-Verse", "Ver Proyecto", "Ver Proyecto", "2024"],
            ["<a class='custom-link' href='historias/raimiverse/venom3.html'> Venom Toxin Menace </a>", "Webb-Verse", "Ver Proyecto", "Ver Proyecto", "2024"],
            ["<a class='custom-link' href='historias/raimiverse/madameweb2.html'> Madame Web 2 </a>", "Webb-Verse", "Ver Proyecto", "Ver Proyecto", "2024"],
            ["<a class='custom-link' href='historias/raimiverse/spiderwoman.html'> Spider-Woman </a>", "Webb-Verse", "Ver Proyecto", "Ver Proyecto", "2025"],
            ["<a class='custom-link' href='historias/raimiverse/morbius3.html'> Morbius 3 </a>", "Webb-Verse", "Ver Proyecto", "Ver Proyecto", "2025"],
            ["<a class='custom-link' href='historias/raimiverse/tas5.html'> The Amazing Spider-Man 5 </a>", "Webb-Verse", "Ver Proyecto", "Ver Proyecto", "2026"],
            ["<a class='custom-link' href='historias/raimiverse/silversable.html'> Silver Sable </a>", "Webb-Verse", "Ver Proyecto", "Ver Proyecto", "2026"],
            ["<a class='custom-link' href='historias/raimiverse/agentevenom.html'> Agente Venom </a>", "Webb-Verse", "Ver Proyecto", "Ver Proyecto", "2027"],
            ["<a class='custom-link' href='historias/raimiverse/silverblack.html'> Silver & Black </a>", "Webb-Verse", "Ver Proyecto", "Ver Proyecto", "2027"],
            ["<a class='custom-link' href='historias/raimiverse/knull2.html'> Knull 2 </a>", "Webb-Verse", "Ver Proyecto", "Ver Proyecto", "2027"],
            ["<a class='custom-link' href='historias/raimiverse/tasmorales.html'> The Amazing Spider-Man: Miles Morales </a>", "Webb-Verse", "Ver Proyecto", "Ver Proyecto", "2027"],
            ["<a class='custom-link' href='historias/raimiverse/tas6.html'> The Amazing Spider-Man 6 </a>", "Webb-Verse", "Ver Proyecto", "Ver Proyecto", "2028"],
            ["<a class='custom-link' href='historias/raimiverse/madameweb3.html'> Madame Web 3 </a>", "Webb-Verse", "Ver Proyecto", "Ver Proyecto", "2028"],
            ["<a class='custom-link' href='historias/raimiverse/meninblack.html'> Men In Black </a>", "Other Project", "Ver Proyecto", "Ver Proyecto", "1997"],
            ["<a class='custom-link' href='historias/raimiverse/meninblack2.html'> Men In Black 2 </a>", "Other Project", "Ver Proyecto", "Ver Proyecto", "2002"],
            ["<a class='custom-link' href='historias/raimiverse/thepunisher.html'> The Punisher </a>", "Other Project", "Ver Proyecto", "Ver Proyecto", "2004"],
            ["<a class='custom-link' href='historias/raimiverse/ghostrider.html'> Ghost Rider </a>", "Other Project", "Ver Proyecto", "Ver Proyecto", "2007"],
            ["<a class='custom-link' href='historias/raimiverse/thepunisher2.html'> The Punisher 2 </a>", "Other Project", "Ver Proyecto", "Ver Proyecto", "2007"],
            ["<a class='custom-link' href='historias/raimiverse/espectacularspidermanS3.html'> El Espectacular Spider-Man Temporada 3 </a>", "Other Project", "Ver Proyecto", "Ver Proyecto", "2011"],
            ["<a class='custom-link' href='historias/raimiverse/ghostrider2.html'> Ghost Rider Espíritu de Venganza </a>", "Other Project", "Ver Proyecto", "Ver Proyecto", "2012"],
            ["<a class='custom-link' href='historias/raimiverse/espectacularspidermanS4.html'> El Espectacular Spider-Man Temporada 4 </a>", "Other Project", "Ver Proyecto", "Ver Proyecto", "2012"],
            ["<a class='custom-link' href='historias/raimiverse/meninblack3.html'> Men In Black 3 </a>", "Other Project", "Ver Proyecto", "Ver Proyecto", "2012"],
            ["<a class='custom-link' href='historias/raimiverse/spiderman2099.html'> Spider-Man 2099 </a>", "Other Project", "Ver Proyecto", "Ver Proyecto", "2013"],
            ["<a class='custom-link' href='historias/raimiverse/espectacularspidermanS5.html'> El Espectacular Spider-Man Temporada 5 </a>", "Other Project", "Ver Proyecto", "Ver Proyecto", "2013"],
            ["<a class='custom-link' href='historias/raimiverse/spidermannoir.html'> Spider-Man Noir </a>", "Other Project", "Ver Proyecto", "Ver Proyecto", "2014"],
            ["<a class='custom-link' href='historias/raimiverse/spidermanintosv.html'> Spider-Man Into the Spider-Verse </a>", "Other Project", "Ver Proyecto", "Ver Proyecto", "2018"],
            ["<a class='custom-link' href='historias/raimiverse/meinblackinternational.html'> Men In Black International </a>", "Other Project", "Ver Proyecto", "Ver Proyecto", "2019"],
            ["<a class='custom-link' href='historias/raimiverse/spidermanacross-sv.html'> Spider-Man Across the Spider-Verse </a>", "Other Project", "Ver Proyecto", "Ver Proyecto", "2024"],
            ["<a class='custom-link' href='historias/raimiverse/spidermanbeyondsv.html'> Spider-Man Beyond the Spider-Verse </a>", "Other Project", "Ver Proyecto", "Ver Proyecto", "2025"],
            ["<a class='custom-link' href='historias/raimiverse/spidergwen.html'> Spider-Gwen </a>", "Other Project", "Ver Proyecto", "Ver Proyecto", "2026"],
            ["<a class='custom-link' href='historias/raimiverse/spidermenosv.html'> Spider-Men Omega Spider-Verse </a>", "Other Project", "Ver Proyecto", "Ver Proyecto", "2027"],
            ["<a class='custom-link' href='historias/raimiverse/whatifspiderman.html'> What-If Spider-Man Version </a>", "Other Project", "Ver Proyecto", "Ver Proyecto", "2027"],
            ["<a class='custom-link' href='historias/raimiverse/spiderman1vg.html'> Spider-Man 1: El Videojuego </a>", "Videojuegos", "Ver Proyecto", "Ver Proyecto", "2002"],
            ["<a class='custom-link' href='historias/raimiverse/spiderman2vg.html'> Spider-Man 2: El Videojuego </a>", "Videojuegos", "Ver Proyecto", "Ver Proyecto", "2004"],
            ["<a class='custom-link' href='historias/raimiverse/spiderman3vg.html'> Spider-Man 3: El Videojuego </a>", "Videojuegos", "Ver Proyecto", "Ver Proyecto", "2007"],
            ["<a class='custom-link' href='historias/raimiverse/ultimatespidermanvg.html'> Ultimate Spider-Man </a>", "Videojuegos", "Ver Proyecto", "Ver Proyecto", "2008"],
            ["<a class='custom-link' href='historias/raimiverse/spidermansd.html'> Spider-Man Shattered Dimensions </a>", "Videojuegos", "Ver Proyecto", "Ver Proyecto", "2010"],
            ["<a class='custom-link' href='historias/raimiverse/spidermanel.html'> Spider-Man Edge of Life </a>", "Videojuegos", "Ver Proyecto", "Ver Proyecto", "2011"],
            ["<a class='custom-link' href='historias/raimiverse/spidermanwos.html'> Spider-Man Web of Shadows </a>", "Videojuegos", "Ver Proyecto", "Ver Proyecto", "2012"],
            ["<a class='custom-link' href='historias/raimiverse/marvelspiderman.html'> Marvel's Spider-Man </a>", "Videojuegos", "Ver Proyecto", "Ver Proyecto", "2018"],
            ["<a class='custom-link' href='historias/raimiverse/marvelsblackpanther.html'> Marvel's Black Panther </a>", "Videojuegos", "Ver Proyecto", "Ver Proyecto", "2019"],
            ["<a class='custom-link' href='historias/raimiverse/marvelspidermanmiles.html'> Marvel's Spider-Man Miles Morales </a>", "Videojuegos", "Ver Proyecto", "Ver Proyecto", "2019"],
            ["<a class='custom-link' href='historias/raimiverse/marvelsavengers.html'> Marvel's Avengers </a>", "Videojuegos", "Ver Proyecto", "Ver Proyecto", "2020"],
            ["<a class='custom-link' href='historias/raimiverse/marvelsgalaxyguardians.html'> Marvel's Galaxy Guardians </a>", "Videojuegos", "Ver Proyecto", "Ver Proyecto", "2021"],
            ["<a class='custom-link' href='historias/raimiverse/marvelspiderman2.html'> Marvel's Spider-Man 2 </a>", "Videojuegos", "Ver Proyecto", "Ver Proyecto", "2022"],
            ["<a class='custom-link' href='historias/raimiverse/marvelspiderman3.html'> Marvel's Spider-Man 3 </a>", "Videojuegos", "Ver Proyecto", "Ver Proyecto", "2025"],

            // Add more rows as needed
        ],
        "paging": true,
        "lengthMenu": [5, 10, 30, 50, 100],
        "pageLength": 20,
        "order": [[4, 'asc']],
        "displayStart": 0,
        "select": true,
        "columnDefs": [
            {
                "targets": [0],  // Apply select filter to the first column (index 0)
                "searchable": true,
                "orderable": true
            },
            {
                "targets": [1],  // Apply select filter to the second column (index 1)
                "searchable": true,
                "orderable": true
            },

            // Add more columns as needed

        ]
    });
}


function showFoxTable() {
    $('#fox-table').DataTable({
        "responsive": true,
        "data": [
            ["<a class='custom-link' href='historias/foxverse/xmen.html'> X-Men </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2000"],
            ["<a class='custom-link' href='historias/foxverse/daredevil.html'> Daredevil </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2003"],
            ["<a class='custom-link' href='historias/foxverse/x2.html'> X2 </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2003"],
            ["<a class='custom-link' href='historias/foxverse/electea.html'> Electra </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2005"],
            ["<a class='custom-link' href='historias/foxverse/daredevil2.html'> Daredevil 2 </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2005"],
            ["<a class='custom-link' href='historias/foxverse/fantasticfour.html'> Los 4 Fantásticoss </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2005"],
            ["<a class='custom-link' href='historias/foxverse/xmenoriginsgambit.html'> X-Men Orígenes: Gambit </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2006"],
            ["<a class='custom-link' href='historias/foxverse/xmenlaststand.html'> X-Men: The Last Stand </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2006"],
            ["<a class='custom-link' href='historias/foxverse/fantasticfour2.html'> Los 4 Fantásticos Rise of Silver Surfer </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2007"],
            ["<a class='custom-link' href='historias/foxverse/silversurfer.html'> The Silver Surfer </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2008"],
            ["<a class='custom-link' href='historias/foxverse/doctordoom.html'> Doctor Doom </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2009"],
            ["<a class='custom-link' href='historias/foxverse/xmenoriginswolverine.html'> X-Men Origenes: Wolverine </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2009"],
            ["<a class='custom-link' href='historias/foxverse/fantasticfour3.html'> Los 4 Fantástiscos 3 </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2009"],
            ["<a class='custom-link' href='historias/foxverse/xmenfirstclass.html'> X-Men First Class </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2011"],
            ["<a class='custom-link' href='historias/foxverse/thewolverine.html'> The Wolverine </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2013"],
            ["<a class='custom-link' href='historias/foxverse/xmendoftp.html'> X-Men Días del Futuro Pasado </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2014"],
            ["<a class='custom-link' href='historias/foxverse/exiles.html'> Exiles </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2015"],
            ["<a class='custom-link' href='historias/foxverse/deadpool.html'> Deadpool </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2016"],
            ["<a class='custom-link' href='historias/foxverse/x23.html'> X-23 </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2016"],
            ["<a class='custom-link' href='historias/foxverse/xmenapocalyse.html'> X-Men Apocalypse </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2016"],
            ["<a class='custom-link' href='historias/foxverse/xmenfotb.html'> X-Men Fear of the Beast </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2017"],
            ["<a class='custom-link' href='historias/foxverse/logan.html'> Logan </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2017"],
            ["<a class='custom-link' href='historias/foxverse/kittypryde.html'> Kitty Pryde </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2017"],
            ["<a class='custom-link' href='historias/foxverse/xmenoriginsmagneto.html'> X-Men Orígenes: Magneto </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2018"],
            ["<a class='custom-link' href='historias/foxverse/deadpool2.html'> Deadpool 2 </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2018"],
            ["<a class='custom-link' href='historias/foxverse/darkphoenix.html'> Dark Phoenix </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2019"],
            ["<a class='custom-link' href='historias/foxverse/newmutants.html'> New Mutants </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2020"],
            ["<a class='custom-link' href='historias/foxverse/multipleman.html'> The Multiple Man </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2020"],
            ["<a class='custom-link' href='historias/foxverse/newmutantsbrasil.html'> New Mutants In Brasil </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2022"],
            ["<a class='custom-link' href='historias/foxverse/xmenvsfantasticfour.html'> X-Men Vs Los 4 Fantásticos </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2023"],
            ["<a class='custom-link' href='historias/foxverse/newmutantsinferno.html'> New Mutants Infenro </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2024"],
            ["<a class='custom-link' href='historias/foxverse/x4.html'> X4 </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2024"],
            ["<a class='custom-link' href='historias/foxverse/x5.html'> X5 </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2025"],
            ["<a class='custom-link' href='historias/foxverse/xforce.html'> X-Force </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2025"],
            ["<a class='custom-link' href='historias/foxverse/foxcivilwar.html'> Fox Civil War </a>", "Fox-Verse", "Ver Proyecto", "Ver Proyecto", "2026"],

        ],
        "paging": true,
        "lengthMenu": [5, 10, 30, 50, 100],
        "pageLength": 20,
        "order": [[4, 'asc']],
        "displayStart": 0,
        "select": true,
        "columnDefs": [
            {
                "targets": [0],  // Apply select filter to the first column (index 0)
                "searchable": true,
                "orderable": true
            },
            {
                "targets": [1],  // Apply select filter to the second column (index 1)
                "searchable": true,
                "orderable": true
            },

            // Add more columns as needed

        ]
    });
}


function showUniversalTable() {
    $('#universal-table').DataTable({
        "responsive": true,
        "data": [
            ["<a class='custom-link' href='historias/universalverse/hulk.html'> Hulk </a>", "Raimi-Verse", "Ver Proyecto", "Ver Proyecto", "2003"],


        ],
        "paging": true,
        "lengthMenu": [5, 10, 30, 50, 100],
        "pageLength": 20,
        "order": [[4, 'asc']],
        "displayStart": 0,
        "select": true,
        "columnDefs": [
            {
                "targets": [0],  // Apply select filter to the first column (index 0)
                "searchable": true,
                "orderable": true
            },
            {
                "targets": [1],  // Apply select filter to the second column (index 1)
                "searchable": true,
                "orderable": true
            },

            // Add more columns as needed

        ]
    });
}


function showNewLineTable() {
    $('#newline-table').DataTable({
        "responsive": true,
        "data": [
            ["<a class='custom-link' href='historias/raimiverse/spiderman1.html'>Spider-Man 1</a>", "Raimi-Verse", "Peter Parker (Spider-Man)", "Norman Osborn (Duende Verde)", "2002"],
            ["<a class='custom-link' href='historias/raimiverse/spiderman2.html'>Spider-Man 2</a>", "Raimi-Verse", "Peter Parker (Spider-Man)", "Otto Octavius (Doctor Octopus)", "2004"],

        ],
        "paging": true,
        "lengthMenu": [5, 10, 30, 50, 100],
        "pageLength": 20,
        "order": [[4, 'asc']],
        "displayStart": 0,
        "select": true,
        "columnDefs": [
            {
                "targets": [0],  // Apply select filter to the first column (index 0)
                "searchable": true,
                "orderable": true
            },
            {
                "targets": [1],  // Apply select filter to the second column (index 1)
                "searchable": true,
                "orderable": true
            },

            // Add more columns as needed

        ]
    });
}


function showPhase1Table() {
    $('#scu-table').DataTable({
        "responsive": true,
        "data": [
            ["<a class='custom-link' href='historias/scufase1/ironman.html'>Iron Man </a>", "SCU Fase 1 - Película", "Tony Stark (Iron Man)", "Obadiah Stane, Los 10 Anillos (Lider Wong-Chu)", "2008"],
            ["<a class='custom-link' href='historias/scufase1/theincrediblehulk.html'> The Incredible Hulk </a>", "SCU Fase 1 - Película", "Bruce Banner (Hulk)", "General Thunderbolt Ross, Emil Blonsky (Abominación)", "2008"],
            ["<a class='custom-link' href='historias/scufase1/natashaorigins.html'> Orígenes de Natasha </a>", "SCU Fase 1 - Película Corta", "Natasha Romanoff (Black Widow)", "Clint Barton (Hawkeye), Bengal", "2009"],
            ["<a class='custom-link' href='historias/scufase1/ironman2.html'> Iron Man 2 </a>", "SCU Fase 1 - Película", "Tony Stark (Iron Man)", "Ivan Vanko (Whiplash), Justin Hammer", "2010"],
            ["<a class='custom-link' href='historias/scufase1/thor.html'> Thor Dios del Trueno </a>", "SCU Fase 1 - Película", "Thor Odinson", "El Guardían, Laufey, Loki", "2009"],
            ["<a class='custom-link' href='historias/scufase1/capitanamerica.html'> Capitan América El Primer Vengador </a>", "SCU Fase 1 - Película", "Steve Rogers (Capitán América)", "Johann Schmidt (Red Skull), Arnim Zola, Adolf Hitler", "2011"],
            ["<a class='custom-link' href='historias/scufase1/vibraniumforce.html'> Howard Stark - Vibranium Force </a>", "SCU Fase 1 - Serie", "Howard Stark", "Heinrich Zemo", "2011"],
            ["<a class='custom-link' href='historias/scufase1/losvengadores.html'> Los Vengadores </a>", "SCU Fase 1 - Película", "Los Vengadores", "Loki, Chitauri, Thanos", "2012"],
            ["<a class='custom-link' href='historias/scufase1/investigacioneshankpym.html'> Investigaciones Hank Pym  </a>", "SCU Fase 1 - Serie", "Hank Pym (Ant-Man)", "People's Defense Force, Doctor Nemesis", "2012"],
            ["<a class='custom-link' href='historias/scufase1/ancianahechicera.html'> Anciana Hechicera Suprema 1ºTemporada </a>", "SCU Fase 1 - Serie", "La Anciana, Baron Mordo", "Dormmamu, Kaecilius", "2012"],
            ///////////////////////////////////////////////////
            ["<a class='custom-link' href='historias/scufase2/ironman3.html'> Iron Man 3 </a>", "SCU Fase 2 - Película", "Tony Stark (Iron Man)", "Aldrich Killian, El Mandarin (Wenwu en mi versión, Escapa al final)", "2013"],
            ["<a class='custom-link' href='historias/scufase2/mandarin.html'> El Mandarín y la Búsqueda de los 10 Anillos </a>", "SCU Fase 2 - Serie", "Wanwu (Mandarin)", "Ho Lee, Ahau, Fing Fan Foom", "2013"],
            ["<a class='custom-link' href='historias/scufase2/agentsofshield1.html'> Agents of SHIELD 1ºTemporada </a>", "SCU Fase 2 - Serie", "Agente Coulson", "Ver Proyecto", "2013"],
            ["<a class='custom-link' href='historias/scufase2/thor2.html'> Thor El Mundo Oscuro </a>", "SCU Fase 2 - Pelicula", "Thor Odinson", "Malekith y los Elfos Oscuros", "2013"],
            ["<a class='custom-link' href='historias/scufase2/lokiaventuras.html'> Las Aventuras del Poderoso Loki </a>", "SCU Fase 2 - Serie", "Loki Laufeyson", "Bragmir", "2013"],
            ["<a class='custom-link' href='historias/scufase2/capitannamerica2.html'> Capitan America El Soldado del Invierno </a>", "SCU Fase 2 - Película", "Steve Rogers (Capitán América)", "Bucky Burnes (Soldado de Invierno), Crossbones, Alexander Pierce", "2013"],
            ["<a class='custom-link' href='historias/scufase2/agentsofshield2.html'> Agents of SHIELD 2ºTemporada </a>", "SCU Fase 2 - Serie", "Agente Coulson", "Ver Proyecto", "2014"],
            ["<a class='custom-link' href='historias/scufase2/buckyorigins.html'> Origenes de Bucky </a>", "SCU Fase 2 - Pelicula Corta", "Bucky Barnes (Soldado de Invierno)", "Baron Von Strucker, Alexander Lukin", "2014"],
            ["<a class='custom-link' href='historias/scufase2/galaxyguardians.html'> Guardianes de la Galaxia Vol 1 </a>", "SCU Fase 2 - Película", "Guardianes de la Galaxia", "Ronan el Acusador, Nebula", "2014"],
            ["<a class='custom-link' href='historias/scufase2/thanosysushijos.html'> Thanos y sus Hijos </a>", "SCU Fase 2 - Especial", "Thanos El Titán Loco", "Mentor, Star-Fox ", "2014"],
            ["<a class='custom-link' href='historias/scufase2/draxfamilia.html'> Drax y su Familia </a>", "SCU Fase 2 - Especial", "Drax el Destructor", "Thanos el Titán Loco, Orden Oscura", "2014"],
            ["<a class='custom-link' href='historias/scufase2/vengadoresultron.html'> Los Vengadores La Era de Ultrón </a>", "SCU Fase 2 - Película", "Los Vengadores", "Ultrón, Baron Von Strucker", "2014"],
            ["<a class='custom-link' href='historias/scufase2/agentsofshield3.html'> Agents of SHIELD 3ºTemporada </a>", "SCU Fase 2 - Película", "Agente Coulson", "Ver Proyecto", "2015"],
            ["<a class='custom-link' href='historias/scufase2/wanda&quicksilver.html'> Wanda & Quicksilver </a>", "SCU Fase 2 - Serie", "Wanda Maximoff, Pietro Maximoff", "Familia Maximoff, Baron Von Strucker", "2015"],
            ["<a class='custom-link' href='historias/scufase2/agentecarter1.html'> Agente Carter 1ºTemporada </a>", "SCU Fase 2 - Serie", "Peggy Carter", "Ver Proyecto", "2015"],
            ["<a class='custom-link' href='historias/scufase2/daredevil1.html'> Daredevil Abogado Callejero 1ºTemporada </a>", "SCU Fase 2 - Serie", "Matt Murdock (Daredevil)", "Ver Proyecto", "2015"],
            ["<a class='custom-link' href='historias/scufase2/jessicajones1.html'> Jessica Jones 1ºTemporada </a>", "SCU Fase 2 - Serie", "Jessica Jones", "Ver Proyecto", "2015"],
            ["<a class='custom-link' href='historias/scufase2/antman.html'> Ant-Man </a>", "SCU Fase 2 - Película", "Scott Lang (Ant-Man)", "Darren Cross (YellowJacket)", "2015"],
            ["<a class='custom-link' href='historias/scufase1/ancianahechicera2.html'> Anciana Hechicera Suprema 2ºTemporada </a>", "SCU Fase 2 - Serie", "La Anciana, Baron Mordo", "Mister Jip, Zom", "2015"],
            ["<a class='custom-link' href='historias/scufase1/proyectoross.html'> Proyecto R.O.S.S </a>", "SCU Fase 2 - Serie", "Subsecretario Thaddeus Ross", "Hombre Absorvente, Vengadores Huídos", "2015"],

            ///////////////////////////////////////////////////
            ["<a class='custom-link' href='historias/scufase3/capitanamerica3.html'> Capitán América Civil War </a>", "SCU Fase 3 - Película", "Vengadores Desunidos", "Baron Helmut Zemo, Crossbones", "2016"],
            ["<a class='custom-link' href='historias/scufase3/agentecarter2.html'> Agente Carter 2ºTemporada </a>", "SCU Fase 3 - Serie", "Peggy Carter", "Ver Proyecto", "2016"],
            ["<a class='custom-link' href='historias/scufase3/daredevil2.html'> Daredevil 2ºTemporada </a>", "SCU Fase 3 - Serie", "Matt Murdock (Daredevil)", "Ver Proyecto", "2016"],
            ["<a class='custom-link' href='historias/scufase3/nelson1.html'> Nelson </a>", "SCU Fase 3 - Serie", "Foggy Nelson", "Ver Proyecto", "2016"],
            ["<a class='custom-link' href='historias/scufase3/lukecage1.html'> Luke Cage 1ºTemporada </a>", "SCU Fase 3 - Serie", "Luke Cage", "Ver Proyecto", "2016"],
            ["<a class='custom-link' href='historias/scufase3/agenteshield4.html'> Agentes de S.H.I.E.L.D 4ºTemporada </a>", "SCU Fase 3 - Serie", "Ver Proyecto", "Ver Proyecto", "2016"],
            ["<a class='custom-link' href='historias/scufase3/doctorstrange.html'> Doctor Strange </a>", "SCU Fase 3 - Película", "Stephen Strange (Doctor Strange)", "Kaecilius,Dormmamu", "2016"],
            ["<a class='custom-link' href='historias/scufase3/aprendiceshechiceria.html'> Aprendices de Hechicería </a>", "SCU Fase 3 - Serie", "Stephen Strange (Doctor Strange)", "Baron Mordo, Baron Blood (Victor Strange)", "2017"],
            ["<a class='custom-link' href='historias/scufase3/galaxyguardians2.html'> Guardianes de la Galaxia Vol 2 </a>", "SCU Fase 3 - Película", "Guardianes de la Galaxia", "Ego Padre de Star-Lord", "2017"],
            ["<a class='custom-link' href='historias/scufase3/galaxyguardiansego.html'> Guardianes de la Galaxia Ego </a>", "SCU Fase 3 - Especial", "Ego", "Id la Luna", "2017"],
            ["<a class='custom-link' href='historias/scufase3/spidermanhomecoming.html'> Spider-Man Homecoming </a>", "SCU Fase 3 - Película", "Peter Parker (Spider-Man)", "Adrian Toomes (Buitre), Herman Schultz (Shocker), Mac Gargan, Tinkerer", "2017"],
            ["<a class='custom-link' href='historias/scufase3/agenteshield5.html'> Agentes de S.H.I.E.L.D 5ºTemporada </a>", "SCU Fase 3 - Serie", "Ver Proyecto", "Ver Proyecto", "2017"],
            ["<a class='custom-link' href='historias/scufase3/dpcontrol1.html'> Departamento de Control de Daños 1ºTemporada </a>", "SCU Fase 3 - Serie", "Ver Proyecto", "Ver Proyecto", "2017"],
            ["<a class='custom-link' href='historias/scufase3/ironfist1.html'> Iron Fist 1ºTemporada </a>", "SCU Fase 3 - Serie", "Danny Rand (Iron Fist)", "Ver Proyecto", "2017"],
            ["<a class='custom-link' href='historias/scufase3/thor3.html'> Thor Ragnarok </a>", "SCU Fase 3 - Película", "Thor Odinson, Loki Laufeyson, Valkiria", "Hela, Surtur", "2017"],
            ["<a class='custom-link' href='historias/scufase3/odingodfather.html'> Odin El Padre de Todos </a>", "SCU Fase 3 - Serie", "Odin", "Surtur, Hela, Laufey, Ymir, Zeus", "2017"],
            ["<a class='custom-link' href='historias/scufase3/.html'> </a>", "SCU Fase 3 - Serie", "", "", "2017"],















        ],
        "paging": true,
        "lengthMenu": [5, 10, 30, 50, 100],
        "pageLength": 20,
        "order": [[4, 'asc']],
        "displayStart": 0,
        "select": true,
        "columnDefs": [
            {
                "targets": [0],  // Apply select filter to the first column (index 0)
                "searchable": true,
                "orderable": true
            },
            {
                "targets": [1],  // Apply select filter to the second column (index 1)
                "searchable": true,
                "orderable": true
            },

            // Add more columns as needed

        ]
    });
}








/////////////////////////////////////////////////////////////////////////////////////

// Carga Datos Sony-Verse 
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('#phases-submenu a[href="#sonyverse"]').addEventListener("click", function (event) {
        event.preventDefault();
        showRaimiTable();
    });
});

// Carga Datos Fox-Verse

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('#phases-submenu a[href="#foxverse"]').addEventListener("click", function (event) {
        event.preventDefault();
        showFoxTable();
    });
});

// Carga Datos Universal-Verse

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('#phases-submenu a[href="#universalverse"]').addEventListener("click", function (event) {
        event.preventDefault();
        showUniversalTable();
    });
});

// Carga Datos NewLine-Verse


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('#phases-submenu a[href="#newlineverse"]').addEventListener("click", function (event) {
        event.preventDefault();
        showNewLineTable();
    });
});


//Carga Datos Fase 1 MCU

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('#phases-submenu a[href="#scu"]').addEventListener("click", function (event) {
        event.preventDefault();
        showPhase1Table();
    });
});
