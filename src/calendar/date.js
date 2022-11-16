export default class CalendarDate {
  constructor({
    date = new Date(),
    text = "",
    topInfo = "",
    bottomInfo = "",
    isValid = false,
  } = {}) {
    this.date = date;
    this.text = text;
    this.topInfo = topInfo;
    this.bottomInfo = bottomInfo;
    this.isValid = isValid;
    this.isActive = false;
  }
  toggle() {
    this.isActive = !this.isActive;
  }
  update(name = "", value = "") {
    this[name] = value;
  }
}
