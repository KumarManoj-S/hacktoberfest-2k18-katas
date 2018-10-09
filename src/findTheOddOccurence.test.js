import { findTheOddOccurence } from './findTheOddOccurence';

describe('findTheOddOccurence', () => {
    it('should return 2 for the array [1,2,1]', () => {
        expect(findTheOddOccurence([1, 2, 1])).lastCalledWith.toEqual(2);
    });

    it('should return 3 for the array [1,2,3,4,1,4,2]', () => {
        expect(findTheOddOccurence([1, 2, 3, 4, 1, 4, 2])).lastCalledWith.toEqual(3);
    });

    it('should return 3 for the array [1,2,3,4,1,4,2,4,3,2,3,1,4,1,2]', () => {
        expect(findTheOddOccurence([1, 2, 3, 4, 1, 4, 2, 4, 3, 2, 3, 1, 4, 1, 2])).lastCalledWith.toEqual(3);
    });
});