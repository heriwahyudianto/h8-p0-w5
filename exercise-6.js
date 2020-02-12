function meleeRangedGrouping (str) {
    //your code here  
    if (str === '') {
      return [];
    }
    let meleeHero = [], rangeHero = [];
    let heroDash = '', heroName = '';
    for (i = 0; i < str.length; i++) {
      if (str[i] === ',' || i === str.length - 1) {
        for (j = 0; j < heroDash.length; j++) {
          if (heroDash[j] === '-') {
            (heroDash[j + 1] === 'R') 
              ? rangeHero.push(heroName) 
              : meleeHero.push(heroName);
            heroName = '';
            break;
          } else {
            heroName += heroDash[j];
          }
        }
        heroDash = '';
      } else {
        heroDash += str[i]; 
      }
    }
    return [rangeHero, meleeHero];
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []