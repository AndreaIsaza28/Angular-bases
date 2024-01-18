import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public title: string= 'Información de héroe';
  public name: string = 'Iroman';
  public age: number = 30;

    get capitalizeName():string{
      return this.title.toUpperCase();
    }

    getHeroDescription(): string {
        return `${ this.name } - ${ this.age }`
    }

    changeHero(): void {
      this.name = 'Spiderman';
    }

    chageAge(): void {
      this.age = 25;
    }

    resetForm(): void {
      this.name = 'Iroman';
      this.age = 30;

      //document.querySelectorAll('h1')!.forEach( element => { element.innerHTML = '<h1>Desde Angular</h1>'})
    }
}
