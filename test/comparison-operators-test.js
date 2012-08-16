module.exports = [
    { path : '.books[.author.name == "Robert C. Martin"].idx', res : [0, 2]},
    { path : '.books[.author.name == "John Resig"]', res : []},
    { path : '.books[.favorite === true].idx', res : [1]},
    { path : '.books[.idx != "1"].idx', res : [0, 2, 3, 4]},
    { path : '.books[.idx !== "1"].idx', res : [0, 1, 2, 3, 4]},
    { path : '.books[.name ^= "JavaScript"].idx', res : [3, 4]},
    { path : '.books[.name ^= "Javascript"].idx', res : []},
    { path : '.books[.name $= "JavaScript"].idx', res : [1]},
    { path : '.books[.name *= "Javascript"].idx', res : []},
    { path : '.books[.name *= "JavaScript"].idx', res : [1, 3, 4]},
    { path : '.booksCount[@ > 4]', res : [5]},
    { path : '.booksCount[@ > 10]', res : []},
    { path : '.booksCount[@ >= 5]', res : [5]},
    { path : '.booksCount[@ == 5]', res : [5]},
    { path : '.booksCount[@ === "5"]', res : []},
    { path : '.booksCount[@ === 5]', res : [5]},
    { path : '.books[.price > 16].idx', res : [0, 2, 4]},
    { path : '.books[.price > 17.97].idx', res : [2, 4]},
    { path : '.books[.price < 16].idx', res : [1, 3]},
    { path : '.books[.price == 10].idx', res : [1]},
    { path : '.books[.price <= 10].idx', res : [1]},
    { path : '.books[.price >= 10].idx', res : [0, 1, 2, 3, 4]},
    { path : '.books[.oldPrices > .price].idx', res : [1, 4]},
    { path : '.books[.oldPrices === .price].idx', res : [1]},
    { path : '.books[.keywords === "javascript"].idx', res : [1, 3 ,4]}
];
