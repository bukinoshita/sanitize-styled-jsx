# sanitize-styled-jsx [![Build Status](https://travis-ci.org/bukinoshita/sanitize-styled-jsx.svg?branch=master)](https://travis-ci.org/bukinoshita/sanitize-styled-jsx)

> Sanitize React components using [styled-jsx](https://github.com/zeit/styled-jsx)


## Install

```
$ yarn add --dev sanitize-styled-jsx
```


## Usage

```js
// Testing with Jest

import React from 'react'
import assertEqualJSX from 'assert-equal-jsx'

import Component from '../src/index'
import sanitize from 'sanitize-styled-jsx'

describe('component', () => {
  it('should create a correct DOM structure', () => {
    const componentMock = <h1>Hello Bu!</h1>
    assertEqualJSX(<Component name="Bu" />, componentMock, { sanitize })
  })
})
```


## API

### sanitize(input)

#### input

Type: `string`<br/>
Required

String to be sanitized


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
