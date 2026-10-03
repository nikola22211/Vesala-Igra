class NewGameView {
  _btnNew = document.querySelector(`.btn_new`);

  newGame(handler) {
    this._btnNew.addEventListener(`click`, function (e) {
      handler();
    });
  }
}

export default new NewGameView();
