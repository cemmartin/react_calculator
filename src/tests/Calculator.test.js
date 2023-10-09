import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  xit('should add two numbers together', () => {
    const 
  })

  xit('should subtract')
  xit('should multiply')
  xit('should divide')
  xit('should concatenate')
  xit('should chain multiple operations togerther')
  xit('should clear the running total w/o affecting the calculation')

})

