// random-kaomoji-generator.ts
function getRandomElement(arr: string[]): string {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  function randomKaomojiGenerator(): string {
    const eyes: string[] = ['^', 'T', '>', '<', 'ಠ', '≧', '⌐', '◕', 'ʘ', '╥', '♥', '¬', '◡', '◉', '•', '⊙', 'o', 'O'];
    const mouths: string[] = ['_', 'ω', 'o', 'O', 'v', '∇', 'u', '3', 'ェ', 'ェ', 'ε', '口', '▽', 'A', 'ェ', 'Д', '益', '◇', '‿', '⌣', 'з', '○'];
    const leftArms: string[] = ['(', '[', '{', '｢', 'ヽ', 'ゞ', '乂', '⊂'];
    const armPairs: { [key: string]: string } = {
      '(': ')',
      '[': ']',
      '{': '}',
      '｢': '｣',
      'ヽ': 'ノ',
      'ゞ': 'ゞ',
      '乂': '乂',
      '⊂': '⊃',
    };
  
    const leftArm = getRandomElement(leftArms);
    const rightArm = armPairs[leftArm];
    const eye = getRandomElement(eyes);
    const mouth = getRandomElement(mouths);
  
    return `${leftArm}${eye}${mouth}${eye}${rightArm}`;
  }
  
  console.log(randomKaomojiGenerator());
  