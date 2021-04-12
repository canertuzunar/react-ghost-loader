function splitAndConverts(data) {
    if(!data){
        throw Error('Value cannot be undefined')
    }

    const [value, type] = data.match(/(\d+)|(\D+$)/g)

    if(!type || !value){
        throw new Error('Value or Value Type cannot be undefined')
    }

     const INTVALUE = parseFloat(value)

    return [INTVALUE, type]
}

export default splitAndConverts