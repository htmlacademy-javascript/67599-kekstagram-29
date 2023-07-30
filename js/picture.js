import { showBigPicture } from './big-picture.js';

const pictureUserTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

picturesContainer.querySelector('.pictures__title').classList.remove('visually-hidden');

const createPicture = (data) => {
  const { url, description, likes, comments } = data;
  const pictureUser = pictureUserTemplate.cloneNode(true);

  pictureUser.querySelector('.picture__img').src = url;
  pictureUser.querySelector('.picture__img').alt = description;
  pictureUser.querySelector('.picture__comments').textContent = comments.length;
  pictureUser.querySelector('.picture__likes').textContent = likes;

  pictureUser.addEventListener('click', () => {
    showBigPicture(data);
  });

  return pictureUser;
};

const renderPictures = (pictures) => {
  picturesContainer.querySelectorAll('.picture').forEach((element) => element.remove());
  const pictureFragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const pictureItem = createPicture(picture);
    pictureFragment.append(pictureItem);
  });

  picturesContainer.append(pictureFragment);
};

export { renderPictures };
