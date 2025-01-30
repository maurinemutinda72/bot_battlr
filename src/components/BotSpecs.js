import React from "react";

const BotSpecs = ({ bot, enlistBot, goBack }) => {
  return (
    <div className="bot-specs">
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>{bot.catchphrase}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={goBack}>Back</button>
      <button onClick={() => enlistBot(bot)}>Enlist</button>
    </div>
  );
};

export default BotSpecs;
