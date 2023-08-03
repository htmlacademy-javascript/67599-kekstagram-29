import { renderPictures } from './picture.js';
import { getData, sendData } from './api.js';
import { showAlert } from './util.js';
import { setOnFormSubmit, hideModal } from './forms.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import { setOnFilterClick, turnFilterOn, filterPictures } from './filters.js';

const getDataSuccess = (data) => {
  turnFilterOn(data);
  renderPictures(filterPictures());
  setOnFilterClick(renderPictures);
};

const sendDataSuccess = () => {
  hideModal();
  showSuccessMessage();
};

const onSendDataError = () => {
  showErrorMessage();
};

setOnFormSubmit(async (data) => {
  await sendData(sendDataSuccess, onSendDataError, data);
});

getData(getDataSuccess, showAlert);
