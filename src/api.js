const PlayerApi = {
  players: [
    { number: 1, name: "Shikhar Dhawan", style: "Opener" },
    { number: 2, name: "Yuvraj Singh", style: "All-rounder" },
    { number: 3, name: "Rishav Pant", style: "Batsmen" },
    { number: 4, name: "MS Dhoni", style: "Wicket Keeper" },
    { number: 5, name: "jaydev Unadkat", style: "Seamer" },
    { number: 6, name: "Kuldip yadav", style: "Spinner" }
  ],

  all: function() {
    return this.players;
  },

  get: function(id) {
    const isPlayer = p => {
      return p.number === id;
    };
    return this.players.find(isPlayer);
  }
};

export default PlayerApi;
