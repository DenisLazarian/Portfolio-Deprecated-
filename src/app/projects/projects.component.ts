import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  projectsSearched: any = [];

  ngOnInit(): void {
    this.searchProject();
  }

  searchProject(){
    let search = (<HTMLInputElement>document.getElementById('search')).value;

    this.projectsSearched = [];
    if(search == ""){
      this.projectsSearched = this.projects;
    }else{
      this.projects.forEach((project:any) => {
        for (let y = 0; y < project.lang_tags.length; y++) {
          if(project.lang_tags[y].toLowerCase().includes(search.toLowerCase())){
            this.projectsSearched.push(project);
          }
        }
      });
    }
  }

  projects:any = [
    {
      title: "Daw.ly",
      description: "Se trata de un sistema gestor de links similar a la plataforma web 'bitly', el cual permite acortar links y compartirlos en las redes sociales. El sistema permite gestionar los links acortados, ademas de poder ver las visitas a ese link seleccionando un rango de dias.",
      image: "assets/img/src-img/dawli.JPG",
      url_host: "#",
      url_github: "#",
      lang_tags:[
        "PHP","JavaScript","HTML","Bootstap 5","Codeigniter 4","MySQL", "AJAX", "JQuery"
      ]
    },
    {
      title: "Sistema de Gestión de Proyectos",
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
      title: "Sistema de Gestión de Proyectos",
      description: `Lorem ipsum dolor si veritatis eum in exercitationem, saepe hic voluptate! Natus omnis quod iusto commodi qui veritatis magni porro consequuntur earum corporis!`,
      image: "assets/img/notFoundImage.png",
      url_host: "#",
      url_github: "#",
      lang_tags:[
        "Spring Boot","JavaScript","HTML","CSS","MySQL","API REST"
      ]
    },
    {
      title: "Sistema de Gestión de Proyectos",
      description: `Lorem ipsum dolor si veritatis eum in exercitationem, saepe hic voluptate! Natus omnis quod iusto commodi qui veritatis magni porro consequuntur earum corporis!`,
      image: "assets/img/notFoundImage.png",
      url_host: "#",
      url_github: "#",
      lang_tags:[
        "Java","JavaScript","HTML","CSS","API REST"
      ]
    },
    {
      title: "Sistema de Gestión de Proyectos",
      description: `Lorem ipsum dolor si veritatis eum in exercitationem, saepe hic voluptate! Natus omnis quod iusto commodi qui veritatis magni porro consequuntur earum corporis!`,
      image: "assets/img/notFoundImage.png",
      url_host: "#",
      url_github: "#",
      lang_tags:[
        "Java","API REST"
      ]
    }
    
  ]

}
