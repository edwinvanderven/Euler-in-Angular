import { IProblem } from '../../app.component.model';

export class SeventeenthProblem implements IProblem {
  public title = 'Problem 17';
  public description = 'If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.' +
                        '\nIf all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?' +
                        '\nNOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters.' +
                        '\nThe use of "and" when writing out numbers is in compliance with British usage.';

  getAnswer(): string {
    let result = 0;
    const length = 1000;
    for (let i = 1; i <= length; i++) {
      let word = this.humanize(i).replace(/\s+/g, '');
      result += word.length;
    }
    return result.toString();
  }

  humanize(num){
    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
                'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
                'seventeen', 'eighteen', 'nineteen'];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
                'ninety'];
  
    var numString = num.toString();
  
    if (num < 0) throw new Error('Negative numbers are not supported.');
  
    if (num === 0) return 'zero';
  
    //the case of 1 - 20
    if (num < 20) {
      return ones[num];
    }
  
    if (numString.length === 2) {
      return tens[numString[0]] + ' ' + ones[numString[1]];
    }
  
    //100 and more
    if (numString.length == 3) {
      if (numString[1] === '0' && numString[2] === '0')
        return ones[numString[0]] + ' hundred';
      else
        return ones[numString[0]] + ' hundred and ' + this.humanize(+(numString[1] + numString[2]));
    }
  
    if (numString.length === 4) {
      var end = +(numString[1] + numString[2] + numString[3]);
      if (end === 0) return ones[numString[0]] + ' thousand';
      if (end < 100) return ones[numString[0]] + ' thousand and ' + this.humanize(end);
      return ones[numString[0]] + ' thousand ' + this.humanize(end);
    }
  }
}
