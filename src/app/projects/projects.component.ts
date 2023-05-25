import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  ngOnInit(): void {
    this.searchProject();
  }
  constructor() { }

  // ngAfterContentInit(): void {
  //   this._router.events.subscribe(
  //     (event: any) => {
  //         if(event instanceof NavigationEnd ) {
  //           this.enlargeMainScreen();

  //         }
  //     }
  //   );
  // }


  projectsSearched: any = [];
  

  projectFinded:boolean = false;

  searchProject(){
    let search = (<HTMLInputElement>document.getElementById('search')).value;

    this.projectsSearched = [];
    if(search == ""){
      this.projectsSearched = this.projects;
    }else{
      this.projects.forEach((project:any) => {
        for (let y = 0; y < project.lang_tags.length; y++) {
          if(project.lang_tags[y].toLowerCase().includes(search.toLowerCase()) && !this.projectFinded){
            this.projectsSearched.push(project);
            this.projectFinded = true;
          }
        }
        this.projectFinded = false;
      });
    }
    this.enlargeMainScreen();
  }

  enlargeMainScreen():void{

    let heightScreen = window.innerHeight;

    let mainScreen = document.getElementById('cont')?.offsetHeight;
    let footerScreen = document.getElementById('foot')?.offsetHeight;
    let headScreen = document.getElementById('head')?.offsetHeight;

    console.log(heightScreen+" "+ headScreen+" " +mainScreen+" "+footerScreen);

    let sumaContent = (headScreen || 0) + (mainScreen || 0) +( footerScreen || 0);

    let tag = document.getElementById('main') ;

    // if(heightScreen > sumaContent && tag != null){
    //   console.log( ((mainScreen || 0)+((heightScreen || 0) - (sumaContent ||0)) ) + "");
    //   tag.style.height = ((mainScreen || 0)+((heightScreen || 0) - (sumaContent ||0)) ) + "px";
    // }
  }

  projects:any = [
    {
      title: "Daw.ly",
      description: "Se trata de un sistema gestor de links similar a la plataforma web 'bitly', el cual permite acortar links y compartirlos en las redes sociales. El sistema permite gestionar los links acortados, ademas de poder ver las visitas a ese link seleccionando un rango de dias. Para los usuarios con rol administrador, incluie tambien una seccion de administracion de usuarios, donde se puede ver los usuarios registrados, editarlos, eliminarlos y crear nuevos usuarios.",
      image: "assets/img/src-img/dawli.JPG",
      url_host: "#",
      url_github: "https://github.com/DenisLazarian/CI4-daw.li",
      lang_tags:[
        "PHP","JavaScript","HTML","Bootstap 5","Codeigniter 4","MySQL", "AJAX", "JQuery"
      ]
    },
    {
      title: "Proyecto 1",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate at atque natus reprehenderit eaque molestias excepturi cum necessitatibus modi, iure magni dicta nihil itaque? Sit nemo architecto deleniti optio dicta!
      Natus labore, odio vitae  temporibus, nulla quasi repellendus velit veritatis eum in exercitationem, saepe hic voluptate! Natus omnis quod iusto commodi qui veritatis magni porro consequuntur earum corporis!`,
      image: "assets/img/notFoundImage.png",
      url_host: "#",
      url_github: "#",
      lang_tags:[
        "Java","JavaScript","HTML","CSS","MySQL","API REST"
      ]
    },
    {
      title: "Proyecto 2",
      description: `Lorem ipsum dolor si veritatis eum in exercitationem, saepe hic voluptate! Natus omnis quod iusto commodi qui veritatis magni porro consequuntur earum corporis!`,
      image: "assets/img/notFoundImage.png",
      url_host: "#",
      url_github: "#",
      lang_tags:[
        "Spring Boot","JavaScript","HTML","CSS","MySQL","API REST"
      ]
    },
    {
      title: "Proyecto 3",
      description: `Lorem ipsum dolor si veritatis eum in exercitationem, saepe hic voluptate! Natus omnis quod iusto commodi qui veritatis magni porro consequuntur earum corporis!`,
      image: "assets/img/notFoundImage.png",
      url_host: "#",
      url_github: "#",
      lang_tags:[
        "Java","JavaScript","HTML","CSS","API REST"
      ]
    },
    // {
    //   title: "Ahorcado simple",
    //   description: `Juego del ahorcado simple, con un diccionario de palabras en un archivo de texto, i sus correspondientes funcionalidades a los aciertos o fallos de caracteres segun la palabra seleccionada aleatoriamente. No dispone de limite de fallos, pero si de tiempo, el cual es de 45 segundos. El juego al finalizar la partida se muestra el tiempo que ha tardado en finalizarla, y la palabra que se tenia que adivinar`,
    //   image: "assets/img/src-img/ahorcado_simple.JPG", 
    //   url_host: "#",
    //   url_github: "https://github.com/DenisLazarian/Ahorcado_simple",
    //   lang_tags:[
    //     "JavaScript","HTML","CSS"
    //   ]
    // }
    
  ]

}
