const NAMES = [
  'Иван',
  'Данил',
  'Мария',
  'Виктор',
  'Алексей',
  'Юлия',
  'Светлана',
  'Сергей'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Когда у тебя настроение летнего праздника, но зима не отступает',
  'Как выглядит моя жизнь, когда я пытаюсь развеселить своих друзей',
  'Даже гроза не может испортить наш настроение на пляже',
  'Будто мы попали в фильм о супергероях, но главный герой явно забыл свой костюм',
  'Когда ты уже устал от зимы и хочешь вернуться на лето',
  'Как выглядеть стильно и защищенно от шторма одновременно',
  'Кто сказал, что на море должно быть только солнечно? Мы готовы к любым погодным условиям',
  'Как заставить всех вокруг чувствовать себя значимыми',
  'Когда у тебя есть лучшие друзья, ты можешь преодолеть любые препятствия',
  'Неважно, какая погода, мы всегда будем самыми крутыми на пляже'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

const createMessage = () =>
  Array.from({ length: getRandomInteger(1, 2) }, () =>
    getRandomArrayElement(COMMENTS)
  ).join(' ');

const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from(
    { length: getRandomInteger(0, 30) },
    (_, commentIndex) => createComment(commentIndex + 1)
  ),
});

const getPictures = () =>
  Array.from({ length: 25 }, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );

getPictures();
