function removeFalsy(data = []) {
    return data.filter((item) => !!item)
}

console.log(removeFalsy([0, 1, false, 2, "", 3]))


module.exports = removeFalsy;

