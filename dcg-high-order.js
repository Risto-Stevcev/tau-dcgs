var pl
;(function (pl) {
  var name = 'dcg_high_order'

  var code = () => {
    var predicates = {
      'sequence/4': [
        new pl.type.Rule(
          new pl.type.Term('sequence', [
            new pl.type.Var('_1'),
            new pl.type.Var('_2'),
            new pl.type.Var('_3'),
            new pl.type.Var('_4')
          ]),
          new pl.type.Term('sequence_', [
            new pl.type.Var('_2'),
            new pl.type.Var('_1'),
            new pl.type.Var('_3'),
            new pl.type.Var('_4')
          ])
        )
      ],
      'sequence_/4': [
        new pl.type.Rule(
          new pl.type.Term('sequence_', [
            new pl.type.Term('.', [
              new pl.type.Var('_5'),
              new pl.type.Var('_6')
            ]),
            new pl.type.Var('_7'),
            new pl.type.Var('_8'),
            new pl.type.Var('_10')
          ]),
          new pl.type.Term(',', [
            new pl.type.Term('call', [
              new pl.type.Var('_7'),
              new pl.type.Var('_5'),
              new pl.type.Var('_8'),
              new pl.type.Var('_9')
            ]),
            new pl.type.Term('sequence_', [
              new pl.type.Var('_6'),
              new pl.type.Var('_7'),
              new pl.type.Var('_9'),
              new pl.type.Var('_10')
            ])
          ])
        ),
        new pl.type.Rule(
          new pl.type.Term('sequence_', [
            new pl.type.Term('[]', []),
            new pl.type.Var('__11'),
            new pl.type.Var('_12'),
            new pl.type.Var('_12')
          ]),
          new pl.type.Term('true', [])
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

      require('./dcg-basics')(pl)
      var { predicates, exports } = code()
      new pl.type.Module(name, predicates, exports, {
        dependencies: ['dcg_basics']
      })
    }
  } else {
    require('./dcg-basics')(pl)
    var { predicates, exports } = code()
    new pl.type.Module(name, predicates, exports, {
      dependencies: ['dcg_basics']
    })
  }
})(pl)
