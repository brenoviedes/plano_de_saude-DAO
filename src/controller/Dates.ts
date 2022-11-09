const Dates = (date: string) => {

    const data = date.split('/')
    const dia = parseInt(data[0])
    const mes = parseInt(data[1]) - 1
    const ano = parseInt(data[2])

    const dataFormatada = new Date(ano, mes, dia).getTime() 
    console.log(dataFormatada)
    return dataFormatada
}

export default Dates