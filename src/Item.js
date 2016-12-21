import React from 'react';
import cn from 'classnames';
import Image from './Image';

const players = count => new Array(count).fill();

export default ({val}) => (
  <div className="table-item">
    <div className={cn("table-wrapper", { warning: val.warning })}>
      <div>
        <Image type={val.type} />
      </div>
      <div className="player">
        <a title="players count">{val.players}</a>
        {players(val.players).map((v, i) => (
          <div className="player-item"></div>
        ))}
        {players(val.maxPlayers - val.players).map((v, i) => (
          <div className="player-free"></div>
        ))}
      </div>
    </div>
  </div>
)