class NewGameView {
  _btnNew = document.querySelector(`.btn_new`);

  newGame(handler) {
    console.log(this._btnNew);
    this._btnNew.addEventListener(`click`, function (e) {
      console.log("CLICK");
      handler();
    });
  }
}

export default new NewGameView();
