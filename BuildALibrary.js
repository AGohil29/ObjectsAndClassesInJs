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
        return ratingSum / lengthOfArray;
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
    constructor(author, title, pages, isCheckedOut, ratings) {
        super(title, isCheckedOut, ratings);
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
    constructor(director, title, runTime, isCheckedOut, ratings) {
        super(title, isCheckedOut, ratings);
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
    constructor(artist, title, isCheckedOut, ratings, songs) {
        super(title, isCheckedOut, ratings);
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