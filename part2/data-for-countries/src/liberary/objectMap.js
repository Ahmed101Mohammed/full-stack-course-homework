const objectMap = (changeFunctionality, data)=>
{
    let listOfNewData = []
    for(let item in data)
    {
        listOfNewData.push(changeFunctionality(data[item]))
    }
    return listOfNewData;
}

export default objectMap