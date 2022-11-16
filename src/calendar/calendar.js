import CalendarDate from "./date";

function Calendar(C = class {}) {
  return class Calendar extends C {
    constructor() {
      super(...arguments);
      this.date = [];
      this.getAllDate = this.getAllDate.bind(this);
      this.prev = this.prev.bind(this);
      this.next = this.next.bind(this);
      this.currentM = new Date().getMonth();
    }
    getAllDate(date = new Date()) {
      let calendarDate = [];
      const year = date.getFullYear();
      const month = date.getMonth();
      const offsetLeft = new Date(year, month, 1).getDay();
      const offsetRight = 7 - new Date(year, month + 1, 1).getDay();
      const total = new Date(year, month + 1, 0).getDate();

      for (let i = -offsetLeft + 1; i <= offsetRight + total; i++) {
        let date = new Date(year, month, i);
        calendarDate.push(
          new CalendarDate({
            date: date,
            text: date.getDate(),
            isValid: i > 0 && i <= total,
          }),
        );
      }
      this.date = calendarDate;
      return this.date;
    }
    prev() {
      const year = new Date().getFullYear();
      this.currentM -= 1;
      return this.getAllDate(new Date(year, this.currentM, 1));
    }
    next() {
      const year = new Date().getFullYear();
      this.currentM += 1;
      return this.getAllDate(new Date(year, this.currentM, 1));
    }
  };
}

export default Calendar;
