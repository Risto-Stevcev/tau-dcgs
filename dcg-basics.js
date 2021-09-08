var pl
;(function (pl) {
  var name = 'dcg_basics'

  var code = () => {
    // Compiled using build.js
    var predicates = {
      'memberchk/2': [
        new pl.type.Rule(
          new pl.type.Term('memberchk', [
            new pl.type.Var('Elem'),
            new pl.type.Var('List')
          ]),
          new pl.type.Term('once', [
            new pl.type.Term('member', [
              new pl.type.Var('Elem'),
              new pl.type.Var('List')
            ])
          ])
        )
      ],
      'string_without/4': [
        new pl.type.Rule(
          new pl.type.Term('string_without', [
            new pl.type.Var('_1'),
            new pl.type.Var('_2'),
            new pl.type.Var('_3'),
            new pl.type.Var('_4')
          ]),
          new pl.type.Term('list_string_without', [
            new pl.type.Var('_1'),
            new pl.type.Var('_2'),
            new pl.type.Var('_3'),
            new pl.type.Var('_4')
          ])
        )
      ],
      'list_string_without/4': [
        new pl.type.Rule(
          new pl.type.Term('list_string_without', [
            new pl.type.Var('_5'),
            new pl.type.Term('.', [
              new pl.type.Var('_6'),
              new pl.type.Var('_7')
            ]),
            new pl.type.Term('.', [
              new pl.type.Var('_6'),
              new pl.type.Var('_9')
            ]),
            new pl.type.Var('_12')
          ]),
          new pl.type.Term(',', [
            new pl.type.Term(',', [
              new pl.type.Term('\\+', [
                new pl.type.Term('memberchk', [
                  new pl.type.Var('_6'),
                  new pl.type.Var('_5')
                ])
              ]),
              new pl.type.Term('=', [
                new pl.type.Var('_9'),
                new pl.type.Var('_10')
              ])
            ]),
            new pl.type.Term(',', [
              new pl.type.Term(',', [
                new pl.type.Term('!', []),
                new pl.type.Term('=', [
                  new pl.type.Var('_10'),
                  new pl.type.Var('_11')
                ])
              ]),
              new pl.type.Term('list_string_without', [
                new pl.type.Var('_5'),
                new pl.type.Var('_7'),
                new pl.type.Var('_11'),
                new pl.type.Var('_12')
              ])
            ])
          ])
        ),
        new pl.type.Rule(
          new pl.type.Term('list_string_without', [
            new pl.type.Var('__13'),
            new pl.type.Term('[]', []),
            new pl.type.Var('_14'),
            new pl.type.Var('_14')
          ]),
          new pl.type.Term('true', [])
        )
      ],
      'string/3': [
        new pl.type.Rule(
          new pl.type.Term('string', [
            new pl.type.Term('[]', []),
            new pl.type.Var('_15'),
            new pl.type.Var('_15')
          ]),
          new pl.type.Term('true', [])
        ),
        new pl.type.Rule(
          new pl.type.Term('string', [
            new pl.type.Term('.', [
              new pl.type.Var('_16'),
              new pl.type.Var('_7')
            ]),
            new pl.type.Term('.', [
              new pl.type.Var('_16'),
              new pl.type.Var('_18')
            ]),
            new pl.type.Var('_19')
          ]),
          new pl.type.Term('string', [
            new pl.type.Var('_7'),
            new pl.type.Var('_18'),
            new pl.type.Var('_19')
          ])
        )
      ],
      'blanks/2': [
        new pl.type.Rule(
          new pl.type.Term('blanks', [
            new pl.type.Var('_20'),
            new pl.type.Var('_23')
          ]),
          new pl.type.Term(',', [
            new pl.type.Term('blank', [
              new pl.type.Var('_20'),
              new pl.type.Var('_21')
            ]),
            new pl.type.Term(',', [
              new pl.type.Term(',', [
                new pl.type.Term('!', []),
                new pl.type.Term('=', [
                  new pl.type.Var('_21'),
                  new pl.type.Var('_22')
                ])
              ]),
              new pl.type.Term('blanks', [
                new pl.type.Var('_22'),
                new pl.type.Var('_23')
              ])
            ])
          ])
        ),
        new pl.type.Rule(
          new pl.type.Term('blanks', [
            new pl.type.Var('_24'),
            new pl.type.Var('_24')
          ]),
          new pl.type.Term('true', [])
        )
      ],
      'code_type/2': [
        new pl.type.Rule(
          new pl.type.Term('code_type', [
            new pl.type.Var('C'),
            new pl.type.Term('space', [])
          ]),
          new pl.type.Term(',', [
            new pl.type.Term('member', [
              new pl.type.Var('X'),
              new pl.type.Term('.', [
                new pl.type.Num(9, false),
                new pl.type.Term('.', [
                  new pl.type.Num(10, false),
                  new pl.type.Term('.', [
                    new pl.type.Num(11, false),
                    new pl.type.Term('.', [
                      new pl.type.Num(12, false),
                      new pl.type.Term('.', [
                        new pl.type.Num(13, false),
                        new pl.type.Term('.', [
                          new pl.type.Num(32, false),
                          new pl.type.Term('.', [
                            new pl.type.Num(133, false),
                            new pl.type.Term('.', [
                              new pl.type.Num(160, false),
                              new pl.type.Term('.', [
                                new pl.type.Num(5760, false),
                                new pl.type.Term('[]', [])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            new pl.type.Term('char_code', [
              new pl.type.Var('C'),
              new pl.type.Var('X')
            ])
          ])
        ),
        new pl.type.Rule(
          new pl.type.Term('code_type', [
            new pl.type.Var('C'),
            new pl.type.Term('digit', [])
          ]),
          new pl.type.Term(',', [
            new pl.type.Term('member', [
              new pl.type.Var('X'),
              new pl.type.Term('.', [
                new pl.type.Num(48, false),
                new pl.type.Term('.', [
                  new pl.type.Num(49, false),
                  new pl.type.Term('.', [
                    new pl.type.Num(50, false),
                    new pl.type.Term('.', [
                      new pl.type.Num(51, false),
                      new pl.type.Term('.', [
                        new pl.type.Num(52, false),
                        new pl.type.Term('.', [
                          new pl.type.Num(53, false),
                          new pl.type.Term('.', [
                            new pl.type.Num(54, false),
                            new pl.type.Term('.', [
                              new pl.type.Num(55, false),
                              new pl.type.Term('.', [
                                new pl.type.Num(56, false),
                                new pl.type.Term('.', [
                                  new pl.type.Num(57, false),
                                  new pl.type.Term('[]', [])
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            new pl.type.Term('char_code', [
              new pl.type.Var('C'),
              new pl.type.Var('X')
            ])
          ])
        )
      ],
      'blank/2': [
        new pl.type.Rule(
          new pl.type.Term('blank', [
            new pl.type.Term('.', [
              new pl.type.Var('_6'),
              new pl.type.Var('_26')
            ]),
            new pl.type.Var('_27')
          ]),
          new pl.type.Term(',', [
            new pl.type.Term(',', [
              new pl.type.Term('nonvar', [new pl.type.Var('_6')]),
              new pl.type.Term('code_type', [
                new pl.type.Var('_6'),
                new pl.type.Term('space', [])
              ])
            ]),
            new pl.type.Term('=', [
              new pl.type.Var('_26'),
              new pl.type.Var('_27')
            ])
          ])
        )
      ],
      'digit/3': [
        new pl.type.Rule(
          new pl.type.Term('digit', [
            new pl.type.Var('_6'),
            new pl.type.Term('.', [
              new pl.type.Var('_6'),
              new pl.type.Var('_29')
            ]),
            new pl.type.Var('_30')
          ]),
          new pl.type.Term(',', [
            new pl.type.Term('code_type', [
              new pl.type.Var('_6'),
              new pl.type.Term('digit', [])
            ]),
            new pl.type.Term('=', [
              new pl.type.Var('_29'),
              new pl.type.Var('_30')
            ])
          ])
        )
      ],
      'eol/2': [
        new pl.type.Rule(
          new pl.type.Term('eol', [
            new pl.type.Term('.', [
              new pl.type.Term('\n', []),
              new pl.type.Var('_32')
            ]),
            new pl.type.Var('_33')
          ]),
          new pl.type.Term(',', [
            new pl.type.Term('!', []),
            new pl.type.Term('=', [
              new pl.type.Var('_32'),
              new pl.type.Var('_33')
            ])
          ])
        ),
        new pl.type.Rule(
          new pl.type.Term('eol', [
            new pl.type.Term('.', [
              new pl.type.Term('\r', []),
              new pl.type.Term('.', [
                new pl.type.Term('\n', []),
                new pl.type.Var('_35')
              ])
            ]),
            new pl.type.Var('_36')
          ]),
          new pl.type.Term(',', [
            new pl.type.Term('!', []),
            new pl.type.Term('=', [
              new pl.type.Var('_35'),
              new pl.type.Var('_36')
            ])
          ])
        ),
        new pl.type.Rule(
          new pl.type.Term('eol', [
            new pl.type.Var('_37'),
            new pl.type.Var('_38')
          ]),
          new pl.type.Term('eos', [
            new pl.type.Var('_37'),
            new pl.type.Var('_38')
          ])
        )
      ],
      'eos/2': [
        new pl.type.Rule(
          new pl.type.Term('eos', [
            new pl.type.Term('[]', []),
            new pl.type.Term('[]', [])
          ]),
          null
        )
      ]
    }

    // Export everything
    var exports = Object.keys(predicates)

    return { predicates, exports }
  }

  // DON'T EDIT
  if (typeof module !== 'undefined') {
    module.exports = function (tau_prolog) {
      pl = tau_prolog

      require('tau-prolog/modules/lists')(pl)
      var { predicates, exports } = code()
      new pl.type.Module(name, predicates, exports, { dependencies: ['lists'] })
    }
  } else {
    require('tau-prolog/modules/lists')(pl)
    var { predicates, exports } = code()
    new pl.type.Module(name, predicates, exports, { dependencies: ['lists'] })
  }
})(pl)
