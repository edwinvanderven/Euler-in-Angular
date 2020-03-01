import { Component } from '@angular/core';
import { PROBLEMS, IProblem } from './app.component.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public title = 'euler-in-angular';
    public problems: IProblem[] = PROBLEMS;

    private showAnswersLookup = {};

    public onHiddenTextClick(i: number) {
        this.showAnswersLookup[i] = true;
    }

    public shouldShowAnswer(i: number) {
        return this.showAnswersLookup[i] === true;
    }
}
