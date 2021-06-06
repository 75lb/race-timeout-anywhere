const a = require('assert')
const raceTimeout = require('race-timeout-anywhere')
const sleep = require('sleep-anywhere')

async function start () {
  const before = Date.now()
  try {
    await Promise.race([
      raceTimeout(1000),
      sleep(1500)
    ])
    throw new Error('should not reach here')
  } catch (err) {
    const after = Date.now()
    const elapsed = after - before
    a.ok(elapsed >= 1000 && elapsed < 1100)
    a.ok(/Timeout expired/.test(err.message))
    console.log('OK')
  }
}

start().catch(err => {
  console.error(err)
  process.exitCode = 1
})
