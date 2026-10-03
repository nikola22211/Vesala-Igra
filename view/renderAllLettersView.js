import View from "./view.js";

class RenderAllLetters extends View {
  _parentElement = document.querySelector(`.container2`);

  _generateMarkup() {
    return this._data
      .map((letter, i, arr) => {
        return `${i % 10 === 0 ? "<div class='row'>" : ""}<button class="btn el-${letter}" 
        data-letter="${letter}">${letter}</button>
        ${i % 10 === 9 || i === arr.length - 1 ? "</div>" : ""}`;
      })
      .join(``);
  }
}

export default new RenderAllLetters();
