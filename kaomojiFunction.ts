function getRandom(arr: string[]): string {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  function randomKaomojiGen(): string {
    const eyes: string[] = ['^', 'T', '>', '<', 'ಠ', '≧', '⌐'];
    const mouths: string[] = ['_', 'ω', 'o', 'O', 'v', '∇', 'u', '3'];
    const arms: string[] = ['(', '[', '{', '｢', '｣', '}', ']', ')'];
  
    const leftArm = getRandom(arms);
    const rightArm = getRandom(arms);
    const eye = getRandom(eyes);
    const mouth = getRandom(mouths);
  
    return `${leftArm}${eye}${mouth}${eye}${rightArm}`;
  }
  
  console.log(randomKaomojiGen());
  