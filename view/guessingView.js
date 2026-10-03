class GuessingView {
  _parentElement = document.querySelector(`.container2`);
  guess(handler) {
    this._parentElement.addEventListener(`click`, function (e) {
      const btn = e.target.closest(`.btn`);
      if (!btn) {
        return;
      }
      handler(btn);
    });
  }
}

export default new GuessingView();
