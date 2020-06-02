// The this Keyword
const goat = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    },
    diet() {
      console.log(this.dietType);
    }
  };
  
  goat.diet(); 

// Arrow Functions and this
const goat1 = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    },
    diet: () => {
      console.log(this.dietType);
    }
  };
  
  goat1.diet(); // Prints undefined - refactor using function expression

  // Privacy
  const robotPrivacy = {
    _energyLevel: 100,
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };
  robotPrivacy._energyLevel = 'high';
  robotPrivacy.recharge();

  // Getters
  const robotGet = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
      if (typeof this._energyLevel === 'number') {
        return `My current energy level is ${this._energyLevel}`;
      } else {
        return 'System malfunction: cannot retrieve energy level';
      }
    }
  };
  
  console.log(robotGet.energyLevel);

  // Setters
  const robotSet = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num) {
      if (typeof num === 'number' && num >= 0) {
        this._numOfSensors = num;
      } else {
        console.log('Pass in a number that is greater than or equal to 0');
      }
    }
  };
  
  robotSet.numOfSensors = 100;
  console.log(robotSet.numOfSensors);

  // Factory Functions
  const robotFactory = (model, mobile) => {
    return {
      model: model,
      mobile: mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  };
  
  const tinCan = robotFactory('P-500', true);
  tinCan.beep();

  // Property Value Shorthand
  const robotFactory = (model, mobile) => {
    return {
      model,
      mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  // To check that the property value shorthand technique worked:
  const newRobot = robotFactory('P-501', false)
  console.log(newRobot.model)
  console.log(newRobot.mobile)

  // Built-in Object Methods
  const robot = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
  };
  
  // What is missing in the following method call?
  const robotKeys = Object.keys(robot);
  
  console.log(robotKeys);
  
  // Declare robotEntries below this line:
  const robotEntries = Object.entries(robot);
  
  console.log(robotEntries);
  
  // Declare newRobot below this line:
  const target = {
    laserBlaster: true, 
    voiceRecognition: true
  }
  const newRobot = Object.assign(target, robot);
  
  console.log(newRobot);