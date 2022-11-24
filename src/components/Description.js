import React from 'react';

function Description() {
  const text = 'Ici achetez toutes les plantes dont vous avez toujours rêvé';
  const emojis = '🤑🌵🌱🎍🤑';
  return (
    <p>
      {text.slice(0, 30) +
        emojis +
        text.slice(30, 55) +
        text.slice(55, text.length).toUpperCase()}
    </p>
  );
}
export default Description;
