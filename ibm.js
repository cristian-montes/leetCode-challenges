function deviceNamesSystem(devicenames){
    let uniqueDevices = [];
    let aparatos = {};

    for(let i=0; i<devicenames.length; i++){
        if(!aparatos[devicenames[i]]){
            aparatos[devicenames[i]] = 1;
            uniqueDevices.push(devicenames[i]);
        } else {
           let updatedName = devicenames[i] + aparatos[devicenames[i]];
            uniqueDevices.push(updatedName);
            aparatos[devicenames[i]]++
        }
    }

    // console.log('uniqueDevices', uniqueDevices);
    // console.log('aparatos', aparatos);

    return uniqueDevices;
}

devicenames = [ 'switch', 'tv', 'switch', 'tv', 'switch', 'tv'];
deviceNamesSystem(devicenames);