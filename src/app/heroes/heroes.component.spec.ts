import { HeroesComponent } from './heroes.component';
import { of } from 'rxjs/internal/observable/of';

describe('HeroComponent',() => {
    let component: HeroesComponent
    let HEROES;
    let mockService;

    beforeEach(() => {
        HEROES = [
            {id:1, name: 'SpiderDude',strength: 8},
            {id:2, name: 'Wonderful woman',strength: 24},
            {id:3, name: 'SuperDude',strength: 55},
        ]

        mockService = jasmine.createSpyObj(['getHeroes','addHero','deleteHero'])

        component = new HeroesComponent(mockService)
    })

    describe('delete',() => {

        it('should remove the indicated hero from the heroes list',() => {
            mockService.deleteHero.and.returnValue(of(true))

            component.heroes = HEROES;

            component.delete(HEROES[2])

            expect(component.heroes.length).toBe(2)            
        })

        it('should call deleteHero',() => {

            mockService.deleteHero.and.returnValue(of(true))
            component.heroes = HEROES;

            component.delete(HEROES[2])

            expect(mockService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
            // test when call it self

        })
    })
})