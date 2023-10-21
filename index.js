function findMatching(names, string) {
    return names.filter((el) => el.toLowerCase().includes(string.toLowerCase()))
}

function fuzzyMatch(names, string) {
    return names.filter((el) => el.toLowerCase().startsWith(string.toLowerCase()))
}

function matchName (names, string) {
    return names.filter(el => el.name === string)
}