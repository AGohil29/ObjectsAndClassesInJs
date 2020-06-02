const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    }, 
    get appetizers() {
      return this._courses.appetizers;
    },
    set appetizers(appetizerIn) {
  
    },
    get mains() {
      return this._courses.mains;
    },
    set mains(mainIn) {
  
    },
    get desserts() {
      return this._courses.desserts;
    },
    set desserts(dessertIn) {
  
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };

        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this.courses[courseName];
        const randomNo = Math.floor(Math.random() * dishes.length);
        return dishes[randomNo];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;

        return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is ${totalPrice}.`
    }
  };

  menu.addDishToCourse('appetizers', 'tandoori', 4.25);
  menu.addDishToCourse('appetizers', 'salad', 3.15);
  menu.addDishToCourse('appetizers', 'chakli', 1.00);

  menu.addDishToCourse('mains', 'prawns masal', 5.00);
  menu.addDishToCourse('mains', 'steam rice', 3.25);
  menu.addDishToCourse('mains', 'chicken biryani', 5.35);

  menu.addDishToCourse('desserts', 'gulab jamoons', 1);
  menu.addDishToCourse('desserts', 'jalebi', 1);
  menu.addDishToCourse('desserts', 'milkshake', 2);

  const meal = menu.generateRandomMeal();
  console.log(meal);