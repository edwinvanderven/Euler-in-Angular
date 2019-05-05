export class Helper {

  /**
   * Returns true if the provided number is a prime
   * @param s {number}
   */
  static isPrime(s: number) : boolean {
    for (let start = 2; start < s; start++) {
      if (s % start === 0) {
        return false;
      }
    }
    return true;
  }
}
