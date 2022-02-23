export const identity = (data) => data;

export const transformCharacter = ({
    char_id,
    name,
    birthday,
    nickname,
    status,
    portrayed,
    img,
    appearance
  }) => ({
    char_id,
    name,
    birthday,
    nickname,
    status,
    portrayed,
    img,
    dead: status === 'Deceased' ? true : false,
    appearance: appearance.join()
  });

  export const transformDeath = ({
    cause,
    responsible,
    last_words,
    season,
    episode
  }) => ({
    cause,
    responsible,
    last_words,
    season,
    episode
  });