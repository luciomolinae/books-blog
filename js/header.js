document.getElementById("header").innerHTML = `
    <div class="container">
        <nav class="nav_checkbox">
            <a href="#" class="logo"><h2>LOGO</h2></a>
            <input type="checkbox" id="tab-nav" class="tab-nav">
            <label for="tab-nav" class="label">
                <div class="burger"></div>
                <div class="burger"></div>
                <div class="burger"></div>
            </label>
            <ul class="content_nav">
                <li><a href="index.html">HOME</a></li>
                <li><a href="books.html">LIBROS</a></li>
                <li><a href="movies.html">PELÍCULAS</a></li>
                <li><a href="music.html">MÚSICA</a></li>
                <li><a href="form.html">INSCRIBITE</a></li>
            </ul>
        </nav>
                
    </div>
`