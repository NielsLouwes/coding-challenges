function inviteMoreWomen(L) {
  const men = L.filter((item) => item > 0);
  const women = L.filter((item) => item < 0);
  // if women same length or less, don't need to invite more so its false
    if (women.length < men.length) {
      return true;
    }
    return false;
  }

  module.exports =  inviteMoreWomen;

