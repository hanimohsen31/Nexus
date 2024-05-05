import { ExcercisesService } from './excercises.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { FooterComponent } from '../footer/footer.component';
import { ExcercisesList } from './excercises';

@Component({
  selector: 'app-fitness',
  standalone: true,
  imports: [FormsModule, CardComponent, FooterComponent],
  templateUrl: './fitness.component.html',
  styleUrl: './fitness.component.scss'
})
export class FitnessComponent {
  currentScreen = 'options'
  currentExcercisesList :any= []
  excercisesList = ExcercisesList
  excercises: any = [
    // 'options',
    'chest',
    'bieceps',
    'back',
    'triceps',
    'buttocks',
    'calf',
    'shoulder',
    'traps',
    'legs',
    'wrist',
  ];
  constructor(private ExcercisesService: ExcercisesService) { }

  ngOnInit() {
    this.ExcercisesService.currentScreen$.subscribe({
      next: res => { 
        this.currentScreen = res; 
        this.currentExcercisesList = this.excercisesList[res] || []
      }
    })
  }

  updateCurrentScreen(screen: string) {
    this.ExcercisesService.updateCurrentScreen(screen)
  }
}
