import { Component, createRef } from "react";
import Calendar from "./calendar";

export default class CalendarComponent extends Calendar(Component) {
  constructor() {
    super(...arguments);
    this.canvas = createRef();
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }
  componentDidMount() {
    console.log(this.getAllDate(), "=========");
  }
  handlePrev() {
    console.log(this.prev());
  }
  handleNext() {
    console.log(this.next());
  }
  render() {
    return (
      <>
        <button onClick={this.handlePrev}>Prev</button>
        <button onClick={this.handleNext}>Next</button>
        <canvas ref={this.canvas}></canvas>
      </>
    );
  }
}
