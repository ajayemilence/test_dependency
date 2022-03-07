import sortingResult from './ques';


describe('test Case', () => {
  it('Result as ', () => {
    expect(sortingResult(["a","b"], ["a => b"])).toEqual(["b","a"]);
  });
});