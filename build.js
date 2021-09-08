const pl = require('tau-prolog')
require('tau-prolog/modules/lists')(pl)
require('tau-prolog/modules/promises')(pl)

const code = `
:- use_module(library(lists)).

memberchk(Elem, List) :- once(member(Elem, List)).

string_without(End, Codes) -->
    list_string_without(End, Codes).

list_string_without(Not, [C|T]) -->
    [C],
    { \\+ memberchk(C, Not)
    }, !,
    list_string_without(Not, T).
list_string_without(_, []) -->
    [].

string([]) -->
    [].
string([H|T]) -->
    [H],
    string(T).

blanks -->
    blank, !,
    blanks.
blanks -->
    [].

code_type(C, space) :-
    member(X, [9, 10, 11, 12, 13, 32, 133, 160, 5760]),
    char_code(C, X).

code_type(C, digit) :-
    member(X, [48, 49, 50, 51, 52, 53, 54, 55, 56, 57]),
    char_code(C, X).

blank -->
    [C],
    { nonvar(C),
      code_type(C, space)
    }.

digit(C) -->
    [C],
    { code_type(C, digit) }.

eol --> "\n", !.
eol --> "\r\n", !.
eol --> eos.

eos([], []).
`

const higherOrderCode = `
sequence(OnElem, List) -->
    sequence_(List, OnElem).

sequence_([H|T], P) -->
    call(P, H),
    sequence_(T, P).
sequence_([], _) -->
    [].
`

;(async () => {
  const session = pl.create()
  await session.promiseConsult(code)
  //await session.promiseConsult(higherOrderCode)

  // NOTE: console.dir prints newline characters explicitly (\n)
  // 1. Generate (`node build.js > foo.js`)
  // 2. Convert string output into regular code
  console.dir(session.compile())
})()
