const inviteMoreWomen = require("./code")

describe('inviteMoreWomen function', () => {
    test('should return false if there are equal women to men', () => {
      expect(inviteMoreWomen([1,1,-1-1])).toEqual(true);
    })

    test('should return true if there are less women than men', () => {
      expect(inviteMoreWomen([1,1,1,-1])).toEqual(true);
    })

    test('should return false if there are more women than men', () => {
      expect(inviteMoreWomen([-1,-1,-1, 1])).toEqual(false);
    })

     test('should return true if there are less women than men, when there are no women', () => {
      expect(inviteMoreWomen([1])).toEqual(true);
    })

    test('should return true if there are less women than men, when there are no women', () => {
      expect(inviteMoreWomen([1])).toEqual(true);
    })
  });
