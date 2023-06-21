
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const PICTURE_COUNT = 25;
const COMMENT_COUNT = 30;
const COMMENT_MIN_COUNT = 1;
const COMMENT_MAX_COUNT = 2;
const AVATAR_COUNT = 6;

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
  Array.from({ length: getRandomInteger(COMMENT_MIN_COUNT, COMMENT_MAX_COUNT) }, () =>
    getRandomArrayElement(COMMENTS)
  ).join(' ');

const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from(
    { length: getRandomInteger(0, COMMENT_COUNT) },
    (_, commentIndex) => createComment(commentIndex + 1)
  ),
});

const getPictures = () =>
  Array.from({ length: PICTURE_COUNT }, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );

getPictures();
