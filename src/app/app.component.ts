import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title:string = 'portafolio';
  fullYear:string = new Date().getFullYear().toString();

  navbarSelectedOption = 'home';

  

  selectedOptionStyleStatus(id: string): void{
    let classItem = 'item-nav-link';
    // this.debugItem(id);
    
    if(id == this.navbarSelectedOption){
      document.getElementById(id)?.classList.add('bg-white');
      document.getElementById(id)?.classList.add('text-muted');

      this.removeStyleStatusSelection(classItem);
    }

  }

  removeStyleStatusSelection(classItem: string){
    let classItems = document.getElementsByClassName(classItem)

    for (let index = 0; index < classItems.length; index++) {
      let element = classItems[index];
      if(element.id != this.navbarSelectedOption){
        element.classList.remove('bg-white');
        element.classList.remove('text-muted');
      }
    }
    
  }



  debugItem(item: string): void{
    console.log(item);
  }
}
