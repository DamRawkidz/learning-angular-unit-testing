import { NO_ERRORS_SCHEMA } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser"
import { HeroComponent } from "../hero/hero.component"

describe('Hero component (shallow tests)',() => {
    let fixture: ComponentFixture<HeroComponent>
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ HeroComponent ],
            schemas: [NO_ERRORS_SCHEMA]
        })

      fixture =  TestBed.createComponent(HeroComponent)      
    })


    it('should have the correct hero', () => {
        fixture.componentInstance.hero = { id: 15, name: 'SuperDude', strength: 1}
        fixture.detectChanges()
        expect(fixture.componentInstance.hero.name).toEqual('SuperDude')
    })

    it('should reder the hero name', () => {
        fixture.componentInstance.hero = { id: 15, name: 'SuperDude', strength: 1}
        fixture.detectChanges()

        // expect(fixture.debugElement.query(By.css('a')).nativeElement.textContent).toContain('SuperDude')
        let de = fixture.debugElement.query(By.css('a'))
        expect(de.nativeElement.textContent).toContain('SuperDude')

        // expect(fixture.nativeElement.querySelector('a').textContent).toContain('SuperDude')
    })
})