const test = require('tape')
const pl = require('tau-prolog')

require('tau-prolog/modules/lists')(pl)
require('tau-prolog/modules/promises')(pl)
require('../dcg-basics')(pl)
require('../dcg-high-order')(pl)

let memoSession
const createSession = async () => {
  // Memoized
  if (!memoSession) {
    memoSession = pl.create()
    await memoSession.promiseConsult(`
        :- use_module(library(dcg_basics)).
        :- use_module(library(dcg_high_order)).
    `)
  }
}

const query = async queryString => {
  await createSession()

  try {
    await memoSession.promiseQuery(queryString)

    let result
    for await (let answer of memoSession.promiseAnswers()) {
      result = memoSession.format_answer(answer)
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

test('sequence', async t => {
  const session = pl.create()
  await session.promiseConsult(`
      :- use_module(library(lists)).
      :- use_module(library(dcg_basics)).
      :- use_module(library(dcg_high_order)).
  `)

  await session.promiseQuery(`phrase(sequence(digit, D), "123").`)

  let result = []
  for await (let answer of session.promiseAnswers()) {
    result.push(session.format_answer(answer))
  }

  t.deepEqual(result, ['D = [1,2,3] ;'])

  await session.promiseQuery(`phrase(sequence(digit, D), "123a").`)

  result = []
  for await (let answer of session.promiseAnswers()) {
    result.push(session.format_answer(answer))
  }

  t.deepEqual(result, [])

  await session.promiseQuery(`phrase(sequence(digit, D), "123", L).`)

  result = []
  for await (let answer of session.promiseAnswers()) {
    result.push(session.format_answer(answer))
  }

  t.deepEqual(result, [
    'D = [1,2,3], L = [] ;',
    'D = [1,2], L = [3] ;',
    'D = [1], L = [2,3] ;',
    'D = [], L = [1,2,3].'
  ])
})
