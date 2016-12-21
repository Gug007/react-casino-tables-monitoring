import React, { Component } from 'react';
import uuid from 'uuid/v1';
import Item from './Item';

const boards = [
  {name: 'blackjack', maxPlayers: 7},
  {name: 'poker', maxPlayers: 9}
];

const randInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const randBoard = () => {
  const i = randInt(0, boards.length);
  return {
    id: uuid(),
    type: boards[i].name,
    //name: 'string',
    warning: randInt(1, 8) === 1 ? true : false,
    players: randInt(0, boards[i].maxPlayers+1),
    maxPlayers: boards[i].maxPlayers
  }
};

const list = new Array(50).fill().map(randBoard);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {list};
  }
  componentDidMount() {
    const {list} = this.state;
    setInterval(() => {
      this.setState({
        list: list.map(val => {
          const table = randBoard()
          return randInt(1, 20) === 1 ?
            {
              ...val,
              warning: table.warning,
              players: table.players
            } :
            val
        })
      });
      console.log(randInt(1, 20))
    }, 500)
  }
  render() {
    const {list} = this.state;
    return (
      <div className="table">
        {list.map(val => <Item val={val} />)}
      </div>
    );
  }
}

export default App;
