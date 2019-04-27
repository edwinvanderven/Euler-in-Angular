import { Component, OnInit } from '@angular/core';
import { PROBLEMS, IProblem } from './app.component.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'euler-in-angular';
  public problems: IProblem[];

  ngOnInit() {
    this.problems = PROBLEMS;
  }

  getAnswer(answer: number): string {
    switch (answer) {
      case 1:
        return this.getAnswerFirstQuestion();
      case 2:
        return '2';
      default:
        return 'no answer found';
    }
  }

  private getAnswerFirstQuestion(): string {
    return 'first';
  }
}
