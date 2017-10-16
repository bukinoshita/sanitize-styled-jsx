'use strict'

import test from 'ava'
import m from '.'

test(t => {
  const mock = '<h1 className="jsx-3401188675">Hello bu</h1>'
  const expected = '<h1>Hello bu</h1>'

  t.is(m(mock), expected)
})
