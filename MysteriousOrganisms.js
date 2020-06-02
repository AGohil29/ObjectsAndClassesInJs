// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };
  
  // factory function with two params
  const pAequorFactory = (num, dna) => {
    return {
      specimenNum: num,
      dna: dna,
      mutate() {
        const generateRanBaseInd = Math.floor(Math.random() * 15);
        switch (dna[generateRanBaseInd]) {
            case 'A':
                dna[generateRanBaseInd] = 'T';
                break;
            case 'T':
                dna[generateRanBaseInd] = 'C';
                break;
            case 'C':
                dna[generateRanBaseInd] = 'G';
                break;
            case 'G':
                dna[generateRanBaseInd] = 'A';
                break;
        }
        return dna;
      },
      compareDNA(specimen) {
          let commonBase = 0;
          for(let i = 0; i < 15; i++) {
              if(dna[i] === specimen.dna[i]){
                  commonBase += 1;
              }
          }
          const common = Math.round((commonBase * 100) / 15);
          console.log(`${specimen.specimenNum} and ${this.specimenNum} have ${common}% DNA in common.`);
      },
      willLikelySurvive() {
        let survivalChance = 0;
        dna.forEach(element => {
          if(element === 'C' || element === 'G'){
            survivalChance += 1;
          }
        });
        survivalChance = (survivalChance * 100) / 15;
        if(survivalChance >= 60) {
          return true;
        } else {
          return false;
        }
      }
    }
  };

  let instancesOfpAequorSurvives = 30;
  let instancesOfpAequorThatSurvives = [];
  let counter = 1;
  while(instancesOfpAequorSurvives > 0) {
    let pAequor = pAequorFactory(counter, mockUpStrand());
    counter++;
    if(pAequor.willLikelySurvive()){
      instancesOfpAequorSurvives -= 1;
      instancesOfpAequorThatSurvives.push(pAequor);
    }
  }

  instancesOfpAequorThatSurvives.forEach(element => {
    console.log(`${element.specimenNum} - ${element.dna.join('')}`);
  });