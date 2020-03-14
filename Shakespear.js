var first_list = [
    "Thou art a","Thee behold liketh a", "Thee", "Th're's nay m're faith in thee then in a", "Receiveth out of h're, ye",
    "Cov'r thy face, ye","Thou art dumb'r than a ","Get out of my sight ye","Thou art a beshrew upon this earth, ye"
    ,"Thy mother is but a","Your wife Is nay more then a"
];
var second_list = [
    "Pompous","Poisonous","Bunch-Backed","Wicked","Stewed","Disgusting","Putrid","Vile","Rotten","Bumbling",
    "Leather-Skinned","Spherical","Scabling","Eye-Infecting","Crusty","Greasy","Tottering","Frothy","Vain"
    ,"Donkey-Faced","Ugly"
]
var third_list = [
    "Unable","Wriggling","Dried","Lily-liver'd","Hobby","Bow-legg'd","Stone-Brained","Sodden-Witted","Nearly-Deceased",
    "Three-Inch","Paper-Fac'd","Manure-Gobbling","Fasion-Monging","Hasty-Witted","Rump-Fed","Urchin-Snouted","Swoltery",
    "Flat-faced"
]
var fourth_list = [
    "Toad","Wench","Worm","Fool","Scurvy companion","Prune","Rat","Hog","Rag","Coward","Flesh-Monger","Horse","Clotpole",
    "Beggar","Bugger","Egg","Mutt","Crumpet","Loaf", "Plague Sore","Carbuncle","Weasel","Loon","Goose","Grape","Stockfish"
    ,
]

let A;
console.log("THE SHAKESPEAREAN INSULT MACHINE")
console.log("\n With "+ first_list.length *  second_list.length * third_list.length * fourth_list.length + " Possible Insults")
console.log("\nYour Shakespearian Insult: ")
rand_list(first_list);
rand_list(second_list);
rand_list(third_list);
rand_list(fourth_list);
function rand_list (list_) {
    A = Math.ceil((Math.random() * list_.length)-1)
    console.log(list_[A])
}
