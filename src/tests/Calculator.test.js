import React from "react";
import Calculator from "../containers/Calculator";
import { render, fireEvent } from "@testing-library/react";

describe("Calculator", () => {
  let container;
  // can declare all the variables here, i.e. (below) --> makes it easier to read
  // let button1 = container.getByTestId('number0')
  beforeEach(() => {
    container = render(<Calculator />);
  });

  it("should change running total on number enter", () => {
    const button4 = container.getByTestId("number4");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual("4");
  });

  it("should add 1 and 4 together to get 5", () => {
    const button1 = container.getByTestId("number1");
    // fireEvent.click(button1);
    // expect(runningTotal.textContent).toEqual('5');
    const operator_add = container.getByTestId("operator-add");
    const button4 = container.getByTestId("number4");
    const operator_equals = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button1);
    fireEvent.click(operator_add);
    fireEvent.click(button4);
    fireEvent.click(operator_equals);
    expect(runningTotal.textContent).toEqual("5");
  });

  it("should subtract 4 from 7 and get 3", () => {
    const button7 = container.getByTestId("number7");
    const operator_subtract = container.getByTestId("operator-subtract");
    const button4 = container.getByTestId("number4");
    const operator_equals = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button7);
    fireEvent.click(operator_subtract);
    fireEvent.click(button4);
    fireEvent.click(operator_equals);
    expect(runningTotal.textContent).toEqual("3");
  });

  it("should multiply 3 by 5 and get 15", () => {
    const button3 = container.getByTestId("number3");
    const operator_multiply = container.getByTestId("operator-multiply");
    const button5 = container.getByTestId("number5");
    const operator_equals = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button3);
    fireEvent.click(operator_multiply);
    fireEvent.click(button5);
    fireEvent.click(operator_equals);
    expect(runningTotal.textContent).toEqual("15");
  });
  it("should divide 21 by 7 and get 3", () => {
    const button2 = container.getByTestId("number2");
    const button1 = container.getByTestId("number1");
    const operator_divide = container.getByTestId("operator-divide");
    const button7 = container.getByTestId("number7");
    const operator_equals = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(operator_divide);
    fireEvent.click(button7);
    fireEvent.click(operator_equals);
    expect(runningTotal.textContent).toEqual("3");
  });
  it("should concatenate multiple button clicks", () => {
    const button3 = container.getByTestId("number3");
    const button8 = container.getByTestId("number8");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button3);
    fireEvent.click(button8);
    expect(runningTotal.textContent).toEqual("38");
  });
  it("should chain multiple operations together", () => {
    const button8 = container.getByTestId("number8");
    const operator_divide = container.getByTestId("operator-divide");
    const button4 = container.getByTestId("number4");
    const operator_subtract = container.getByTestId("operator-subtract");
    const button1 = container.getByTestId("number1");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button8);
    fireEvent.click(operator_divide);
    fireEvent.click(button4);
    fireEvent.click(operator_subtract);
    fireEvent.click(button1);
    expect(runningTotal.textContent).toEqual("1");
  });
  it("should clear the running total w/o affecting the calculation", () => {
    const button9 = container.getByTestId("number9");
    const clear = container.getByTestId("clear");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button9);
    fireEvent.click(clear);
    expect(runningTotal.textContent).toEqual("0");
  });

  // new code
  // //
  it("should output postive numbers", () => {
    const button8 = container.getByTestId("number8");
    const operator_add = container.getByTestId("operator-add");
    const button4 = container.getByTestId("number4");
    const operator_equals = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button8);
    fireEvent.click(operator_add);
    fireEvent.click(button4);
    fireEvent.click(operator_equals);
    expect(runningTotal.textContent).toEqual("12");
  });

  it("should output negative number", () => {
    const button1 = container.getByTestId("number1");
    const operator_subtract = container.getByTestId("operator-subtract");
    const button8 = container.getByTestId("number8");
    const operator_equals = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button1);
    fireEvent.click(operator_subtract);
    fireEvent.click(button8);
    fireEvent.click(operator_equals);
    expect(runningTotal.textContent).toEqual("-7");
  });
  it("should be able to output a decimal", () => {
    const button6 = container.getByTestId("number6");
    const operator_divide = container.getByTestId("operator-divide");
    const button4 = container.getByTestId("number4");
    const operator_equals = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button6);
    fireEvent.click(operator_divide);
    fireEvent.click(button4);
    fireEvent.click(operator_equals);
    expect(runningTotal.textContent).toEqual("1.5");
  });

  it("should be able to handle very large numbers", () => {
    const button2 = container.getByTestId("number2");
    const button0 = container.getByTestId("number0");
    const operator_multiply = container.getByTestId("operator-multiply");
    const button4 = container.getByTestId("number4");
    const operator_equals = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button2);
    fireEvent.click(button0);
    fireEvent.click(button0);
    fireEvent.click(button0);
    fireEvent.click(button0);
    fireEvent.click(button0);
    fireEvent.click(button0);
    fireEvent.click(button0);
    fireEvent.click(button0);
    fireEvent.click(operator_multiply);
    fireEvent.click(button4);
    fireEvent.click(button0);
    fireEvent.click(button0);
    fireEvent.click(button0);
    fireEvent.click(button0);
    fireEvent.click(button0);
    fireEvent.click(button0);
    fireEvent.click(button0);
    fireEvent.click(operator_multiply);
    fireEvent.click(button4);
    fireEvent.click(button0);
    fireEvent.click(button0);
    fireEvent.click(button0);
    fireEvent.click(button0);
    fireEvent.click(button0);
    fireEvent.click(button0);
    fireEvent.click(button0);
    fireEvent.click(operator_equals);
    expect(runningTotal.textContent).toEqual("3.2e+23");
  });

  it("can divide by zero", () => {
    const button2 = container.getByTestId("number2");
    const operator_divide = container.getByTestId("operator-divide");
    const button0 = container.getByTestId("number0");
    const operator_equals = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button2);
    fireEvent.click(operator_divide);
    fireEvent.click(button0);
    fireEvent.click(operator_equals);
    expect(runningTotal.textContent).toEqual("Error");
  });
});
