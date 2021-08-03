<! DOCTYPE html >
< html  lang = " es " >

< cabeza >
    < meta  charset = " UTF-8 " >
    < meta  http-equiv = " X-UA-Compatible " content = " IE = edge " >
    < meta  name = " viewport " content = " width = device-width, initial-scale = 1.0 " >
    < link  rel = " stylesheet " href = " https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.min.css " >
    < link  href = " https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap " rel = " hoja de estilo " >
    < link  href = " https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap " rel = " hoja de estilo " >
    < link  rel = " stylesheet " href = " css / profile.css " >
    < link  rel = " stylesheet " href = " css / main.css " >
    < link  rel = " stylesheet " href = " css / navbar.css " >
    < script  defer  src = " js / app.js " > </ script >
    < título > Javier Salas </ título >
</ cabeza >

< cuerpo >
    < header  class = " topheader " >
        < nav  class = " topnav " >
            < Un  href = "" clase = " logo " >
                < img  src = " images / foto_perfil.png " alt = " programador " height = " 50px " width = " 50px " >
                < div >
                    Javier Salas < br > {code}
                </ div >
            </ a >
            < button  class = " open_menu " aria-label = " Abrir menú " >
                < img  src = " images / open_menu.svg " alt = " Abrir menú " height = " 40px " >
            </ botón >
            < ul  class = " menú " >
                < button  class = " close_menu " aria-label = " Cerrar menú " >
                    < img  src = " images / close_menu.svg " alt = " Cerrar menú " height = " 30px " width = " 40px " >
                </ botón >
                < Li > < un  href = " #Perfil " clase =" seleccionado " > Perfil </ una > </ li >
                < Li > < un  href = " #Perfil " > Experiencia </ una > </ li >
                < Li > < un  href = " #Perfil " > Habilidades </ una > </ li >
                < Li > < un  href = " #Perfil " > Contacto </ una > </ li >
            </ ul >
        </ nav >
    </ encabezado >


    < div  class = " relleno-horizontal-relleno-vertical " >
        < section  class = " perfil " >
            < div  class = " profile_info " >
                < H1  clase = " profile_tittle " > Hola, soy < br > Javier Salas </ h1 >
                < p  class = " profile_details " > Un Apasionado por la tecnología, el desarrollo y la innovación. Siempre dispuesto a la toma
                de nuevos desafios y retos que en el desarrollo front end pueden presentarse.
                </ p >
                < button  class = " profile_btn " > Descargar cv </ button >
            </ div >
            < span  class = " profile_img_section " >
                < img  class = " img_profile " src = " images / foto_perfil.png " alt = " Programador " width = " 100% " >
                < div  class = " profile_img_line " > </ div >
            </ span >
        </ sección >
    </ div >
</ cuerpo >

</ html >
