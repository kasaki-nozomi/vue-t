const fs = require('fs')
const path = require('path')
const xlsx = require('node-xlsx')

const getParams = (argv) => {
    let t = new RegExp(/^--/g)
    const params = {}
    argv.filter((item) => {
        return item.match(t)
    }).forEach((item) => {
        const r = item.replace('--', '').split('=')
        params[r[0]] = r[1]
    })
    return params
}

let params = getParams(process.argv)
let data = xlsx.parse('src/i18n/translate/lang.xlsx')
let table = data.filter((item) => item.name === 'lang')[0].data
for (let j = 2; j < table[0].length; j++) {
    const langCode = table[0][j]
    let obj = ''
    for (let i = 1; i < table.length; i++) {
        if (table[i][0] && table[i][0] !== '') {
            if (table[i][j]) {
                obj += ',"' + table[i][0].replace('"', '') + '":"' + table[i][j].replace(/["]+/gm, "'").replace(/\r|\n/g, '<br/>') + '"'
            }
        }
    }
    const result = '{' + obj.substr(1) + '}'
    fs.writeFile(path.resolve('src/i18n/lang' + (params.game ? `/${params.game}` : '') + '/' + langCode.toUpperCase() + '.json'), result, function (err) {
        if (err) return
        console.log(langCode + ' complete')
    })
}
