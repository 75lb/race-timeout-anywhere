import sleep from './index.mjs'
import a from 'assert'

async function start () {
  const before = Date.now()
  await sleep(1000)
  const after = Date.now()
  a.ok(after - before >= 1000)
  console.log('OK')
}

start().catch(console.error)
