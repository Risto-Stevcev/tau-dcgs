const test = require('tape')
const pl = require('tau-prolog')

require('tau-prolog/modules/lists')(pl)
require('tau-prolog/modules/promises')(pl)
require('../dcg-basics')(pl)

let session
const createSession = async () => {
  // Memoized
  if (!session) {
    session = pl.create()
    await session.promiseConsult(`
        :- use_module(library(dcg_basics)).
    `)
  }
}

const query = async queryString => {
  await createSession()

  try {
    await session.promiseQuery(queryString)

    let result
    for await (let answer of session.promiseAnswers()) {
      result = session.format_answer(answer)
    }

    return result
  } catch (err) {
    console.log('Error:')
    console.error(pl.flatten_error(err))
  }
}

test('string_without', async t => {
  const result = await query('phrase(string_without("{", X), "f{oo", L).')
  t.equal(result, 'X = [f], L = [{,o,o].')
})

test('blanks', async t => {
  const result = await query('phrase(blanks, "  foo", L).')
  t.equal(result, 'L = [f,o,o].')
})
