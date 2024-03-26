export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }

    this._sqft = sqft;

    if (this.constructor === Building) {
      throw new TypeError('Cannot instantiate from Building directly');
    }

    if (this.evacuationWarningMessage === undefined) {
      throw new TypeError(
        'Class extending Building must override evacuationWarningMessage'
      );
    }
  }

  get sqft() {
    return this._sqft;
  }
}
