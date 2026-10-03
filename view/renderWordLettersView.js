import View from "./view.js";

class RenderWordLettersView extends View {
  _parentElement = document.querySelector(`.container1`);

  _generateMarkup() {
    return this._data
      .map((letter, i, arr) => {
        if (letter === " ") {
          return `</div><div class="rowWord">`;
        }
        return `${i === 0 ? '<div class="rowWord">' : ``}
        <div class="divWord ${letter}x hidden">${letter}</div>
        ${i === arr.length - 1 ? "</div>" : ""}`;
      })
      .join(``);
  }
}
export default new RenderWordLettersView();
