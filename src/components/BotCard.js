import React from "react";

const BotCard = ({ bot, handleClick, deleteBot, inArmy }) => {
  return (
    <div className="bot-card" onClick={() => handleClick(bot)}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>"{bot.catchphrase}"</p>
      
      {!inArmy && (
        <button onClick={(e) => { e.stopPropagation(); handleClick(bot); }} style={{ background: "blue", color: "white" }}>
          View Details
        </button>
      )}

      <button onClick={(e) => { e.stopPropagation(); deleteBot(bot); }} style={{ background: "red", color: "white" }}>
        X Discharge
      </button>
    </div>
  );
};

export default BotCard;
