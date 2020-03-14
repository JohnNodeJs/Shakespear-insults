var first_list = [
    "Thou Art A","Thou Look Like A", "Thou", "Ye", "There's No More Faith In Thee Then In A", "Get Out Of Here, Ye",
    "Cover Thy Face, Ye","Thou Art Dumber Than A ","Get Out Of My Sight Ye","Thou Art A Plague Upon This Earth, Ye"
    ,"Thy mother is but a","Your wife Is No More Then A"
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
