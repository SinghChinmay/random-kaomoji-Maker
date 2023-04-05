/**
 * Generates a random kaomoji.
 * @see https://en.wikipedia.org/wiki/Emoticon#Kaomoji
 * @see https://en.wikipedia.org/wiki/List_of_emoticons
 * 
 * @example
 * const generator = new RandomKaomojiGenerator();
 * console.log(generator.generate());
 */
class RandomKaomojiGenerator {
  private eyes: string[] = ['^', 'T', '>', '<', 'ಠ', '≧', '⌐'];
  private mouths: string[] = ['_', 'ω', 'o', 'O', 'v', '∇', 'u', '3'];
  private arms: string[] = ['(', '[', '{', '｢', '｣', '}', ']', ')'];

  private getRandomElement(arr: string[]): string {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  generate(): string {
    const leftArm = this.getRandomElement(this.arms);
    const rightArm = this.getRandomElement(this.arms);
    const eye = this.getRandomElement(this.eyes);
    const mouth = this.getRandomElement(this.mouths);

    return `${leftArm}${eye}${mouth}${eye}${rightArm}`;
  }
}

const generator = new RandomKaomojiGenerator();
console.log(generator.generate());
