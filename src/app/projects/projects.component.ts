import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projects:any = [
    
    {
      title: "Sistema de Gestión de Proyectos",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate at atque natus reprehenderit eaque molestias excepturi cum necessitatibus modi, iure magni dicta nihil itaque? Sit nemo architecto deleniti optio dicta!
      Natus labore, odio vitae  temporibus, nulla quasi repellendus velit veritatis eum in exercitationem, saepe hic voluptate! Natus omnis quod iusto commodi qui veritatis magni porro consequuntur earum corporis!`,
      image: "assets/img/notFoundImage.png",
      url_host: "#",
      url_github: "#",

    },
    {
      title: "Sistema de Gestión de Proyectos",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate at atque natus reprehenderit eaque molestias excepturi cum necessitatibus modi, iure magni dicta nihil itaque? Sit nemo architecto deleniti optio dicta!
      Natus labore, odio vitae  temporibus, nulla quasi repellendus velit veritatis eum in exercitationem, saepe hic voluptate! Natus omnis quod iusto commodi qui veritatis magni porro consequuntur earum corporis!`,
      image: "assets/img/notFoundImage.png",
      url_host: "#",
      url_github: "#",

    },
    {
      title: "Sistema de Gestión de Proyectos",
      description: `Lorem ipsum dolor si veritatis eum in exercitationem, saepe hic voluptate! Natus omnis quod iusto commodi qui veritatis magni porro consequuntur earum corporis!`,
      image: "assets/img/notFoundImage.png",
      url_host: "#",
      url_github: "#",

    },
    {
      title: "Sistema de Gestión de Proyectos",
      description: `Lorem ipsum dolor si veritatis eum in exercitationem, saepe hic voluptate! Natus omnis quod iusto commodi qui veritatis magni porro consequuntur earum corporis!`,
      image: "assets/img/notFoundImage.png",
      url_host: "#",
      url_github: "#",

    },
    {
      title: "Sistema de Gestión de Proyectos",
      description: `Lorem ipsum dolor si veritatis eum in exercitationem, saepe hic voluptate! Natus omnis quod iusto commodi qui veritatis magni porro consequuntur earum corporis!`,
      image: "assets/img/notFoundImage.png",
      url_host: "#",
      url_github: "#",

    }
    
  ]

}
