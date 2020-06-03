class Media {
    constructor(title) {
        this._title = title;
        this._isChecketOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isChecketOut;
    }

    get ratings() {
        return this._ratings;
    }

    set isCheckedOut(checkedOut) {
        this._isChecketOut = checkedOut;
    }

    getAverageRating() {
        let ratingSum = this._ratings.reduce((accumulator, currentValue) => accumulator + currentValue);
        const lengthOfArray = this._ratings.length;
        return Math.round((ratingSum / lengthOfArray) * 10) / 10;
    }

    toggleCheckOutStatus() {
        this._isChecketOut = !this._isChecketOut;
    }

    addRating(rating) {
        this._ratings.push(rating);
    }
}

// Book Class
class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

// Movie class
class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runtTime() {
        return this._runTime;
    }
}

// CD class
class CD extends Media {
    constructor(artist, title, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }

    get artist() {
        return this._artist;
    }

    get songs() {
        return this._songs;
    }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());