import { IProblem } from '../../app.component.model';

export class NineteenthProblem implements IProblem {
  public title = 'Problem 19';
  public description = 'You are given the following information, but you may prefer to do some research for yourself.' +
                        '\n1 Jan 1900 was a Monday.' +
                        '\nThirty days has September,' +
                        '\nApril, June and November.' +
                        '\nAll the rest have thirty-one,' +
                        '\nSaving February alone,' +
                        '\nWhich has twenty-eight, rain or shine.' +
                        '\nAnd on leap years, twenty-nine.' +
                        '\nA leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.' +
                        '\nHow many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?';


  getAnswer(): string {
    let result = 0;
    for (let year = 1901; year <= 2000; year++) {
      for (let month = 1; month <= 12; month++) {
        if (this.isDayOfWeekSunday(year, month, 1)) result++;
      }
    }
    return result.toString();
  }

  private isDayOfWeekSunday(year: number, month: number, day: number) : boolean {
    // 'borrowed' from https://en.wikipedia.org/wiki/Zeller%27s_congruence
    let m = (month - 3 + 4800) % 4800;
    let y = (year + m / 12) % 400;
    let result = (y + y/4 - y/100 + (13 * (m %= 12) + 2) / 5 + day + 2) % 7;
    // make sure to floor the result in case of fractions
    return Math.floor(result) === 0;
  }
}
