/**
 * Created by wyn on 17-7-24.
 */
describe('LCD', () => {
    let inputs = [1 , 1 , 0];
it('should return correct lights', () => {
  spyOn(console, 'log');

    getLights(inputs);
    /*const expectedLights=[
      ['._.','...','._.'],
      ['|_|','..|','|.|'],
      ['..|','..|','|_|']];*/
    const expected= `
... ... ._. 
  |   | |.| 
..| ..| |_| 
`;
expect(console.log).toHaveBeenCalledWith(expected);
    /*for(let i=0;i<expectedLights.length;i++) {
      for(let j=0;j<expectedLights[i].length;j++){
        expected+=(expectedLights[i].[j]+' ');
      }
      expected+='\n';
    }
    expected(testLights).toEqual(console.log(expected));*/
});
});
