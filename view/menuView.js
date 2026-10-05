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

  showCategory(category) {
    const cat = this._parentElement.querySelector(`.categoryP`);
    cat.textContent = ``;
    const newContent = document.createTextNode(category);
    cat.appendChild(newContent);
  }
}

export default new MenuView();
