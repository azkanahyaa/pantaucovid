const baseUrl = `https://indonesia-covid-19.mathdro.id/api`

function getTotalCase() {
    return new Promise((resolve) => {
        fetch(`${baseUrl}`)
          .then((response) => {
              return response.json()
          })
          .then((data) => {
                const totalCase = {
                    lastUpdate: data.lastUpdate,
                    case: {
                        confirmed: data.jumlahKasus,
                        treated: data.perawatan,
                        recovered: data.sembuh,
                        died: data.meninggal
                    }
                }
                resolve(totalCase)
          })
    })
}

function getProvinceCase() {
    return new Promise((resolve) => {
        fetch(`${baseUrl}/provinsi`)
          .then((response) => {
              return response.json()
          })
          .then((result) => {
                const data = result.data
                const provinceCase = {
                    name: data[17].provinsi,
                    case: {
                        confirmed: data[17].kasusPosi,
                        treated: data[17].kasusPosi - data[17].kasusSemb,
                        recovered: data[17].kasusSemb,
                        died: data[17].kasusMeni
                    }
                }
                resolve(provinceCase)
          })
    })
}

export { getTotalCase, getProvinceCase }