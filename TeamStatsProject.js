const team = {
    _players: [
        {
            firstName: 'Virat',
            lastName: 'Kohli',
            age: 33
        },
        {
            firstName: 'Rohit',
            lastName: 'Sharma',
            age: 34
        },
        {
            firstName: 'Jasprit',
            lastName: 'Bumrah',
            age: 28
        }
    ],
    _games: [
        {
            opponent: 'Australia',
            teamPoints: 298,
            opponentPoints: 250 
        },
        {
            opponent: 'England',
            teamPoints: 270,
            opponentPoints: 268
        },
        {
            opponent: 'South Africa',
            teamPoints: 300,
            opponentPoints: 240
        }
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this.players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
        let game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        };
        this.games.push(game);
    }
};

team.addPlayer('Hardik', 'Pandya', 27);
team.addPlayer('Shreyas', 'Iyer', 24);
team.addPlayer('KL', 'Rahul', '28');

team.addGame('New Zealan', 210, 230);
team.addGame('West Indies', 350, 320);
team.addGame('Sri Lanka', 400, 280);

team.players.forEach(player => console.log(player.firstName + player.lastName));
team.games.forEach(game => console.log(game.opponent + game.teamPoints));
