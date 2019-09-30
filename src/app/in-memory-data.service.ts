import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Hulk' },
      { id: 12, name: 'Pantera Negra' },
      { id: 13, name: 'Homem de Ferro' },
      { id: 14, name: 'Capitão América' },
      { id: 15, name: 'Dr. Estranho' },
      { id: 16, name: 'Thor' },
      { id: 17, name: 'Mulher Maravilha' },
      { id: 18, name: 'Batman' },
      { id: 19, name: 'Super Homem' },
      { id: 20, name: 'Homem Aranha' }
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
