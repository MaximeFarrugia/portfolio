#!/usr/bin/env node

const parseCSV = require('csv-parse')
const { readFile, writeFile } = require('fs').promises

const load = path => readFile(path, 'utf8')

const parse = data =>
  new Promise((resolve, reject) => {
    // eslint-disable-next-line no-shadow
    parseCSV(data, { delimiter: '\t' }, (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })

const parseAndWrite = async () => {
  const path = process.argv[2]
  if (path) {
    const rawData = await load(path)
    const data = await parse(rawData)

    const formatted = data.map(array => ({
      fr: { singular: array[0], other: array[1] },
      en: { singular: array[2], other: array[3] },
    }))

    const parsedData = JSON.stringify(formatted, null, 2)
    await writeFile('output.json', parsedData)
  } else {
    // eslint-disable-next-line no-console
    console.log('you have to specify a path')
  }
}

parseAndWrite()
