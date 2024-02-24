function anaToVori(ana) {

    if (typeof ana !== "number" || ana < 0) {
        return "Plese provide avalid integer number"
    }
    else {
        const vori = ana * 0.0625;
        return vori
    }
}
const atv = anaToVori(48)
console.log(atv);

















