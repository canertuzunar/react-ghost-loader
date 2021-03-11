function splitAndConverts(data) {
    const [value, type] = data.match(/(\d+)|(\D+$)/g)
     const INTVALUE = parseFloat(value)

    return [INTVALUE, type]
}

export default splitAndConverts