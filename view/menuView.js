class MenuView {
  _parentElement = document.querySelector(`.header`);

  pickCategory(handler) {
    this._parentElement.addEventListener(`click`, function (e) {
      const btn = e.target.closest(`.btn_cat`);
      if (!btn) {
        return;
      }
      handler(btn);
    });
  }
}

export default new MenuView();
