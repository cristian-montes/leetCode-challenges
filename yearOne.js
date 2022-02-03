// Return the name of the company missing a piece in the uniformSet
// if all companies have all the pieces form the uniformSet return N/A

function missingUnits(uniformSet, uniformPieces){

    let obj = {}

    for(let i = 0; i < uniformPieces.length; i++){
        const companyName = uniformPieces[i].split('_')
        if(!obj[companyName[0]]){
            obj[companyName[0]] = []
        }

        obj[companyName[0]] = [ ...obj[companyName[0]] ,companyName[1]]
    }

let incomplete = 'N/A';
    for(proerty in obj){
        let company = obj[proerty];
        for(let k =0; k<company.length; k++){
         let result = company.filter(x => !uniformSet.includes(x)).concat(uniformSet.filter(x => !company.includes(x)));

         let doubleCheck = result.some(piece => uniformSet.includes(piece));

         if(result.length > 0 && doubleCheck)
            incomplete = proerty
        };
       
    };

return incomplete
};


let uniformSet = ['glasses', 'hat']
let uniformPieces = ['company1_glasses', 'company1_hat', 'company2_glasses', 'company2_hat', 'company3_glasses', 'company3_hat', 'company4_glasses', 'company4_shorts']

missingUnits(uniformSet, uniformPieces);