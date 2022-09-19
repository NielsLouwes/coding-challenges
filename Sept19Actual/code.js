function inviteMoreWomen(L) {
  const men = L.filter((item) => item > 0);
  const women = L.filter((item) => item < 0);
  if (women.length < men.length) {
      return true;
    }
    return false;
  }

  // shorter solution is to use reduce to add everything up and then if the sum is more than 0, you need more women (-1) to make it even. 
  function shorterInviteMoreWomen(L) {
    return L.reduce((a,b) =>  a + b > 0)
  }

  module.exports =  inviteMoreWomen;

