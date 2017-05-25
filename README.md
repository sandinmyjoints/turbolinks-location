# turbolinks-location

Adds `Turbolinks-Location` header to responses so Turbolinks can update the
browser URL correctly. See
<https://github.com/turbolinks/turbolinks#following-redirects>.

## Installation

```sh
$ npm install --save turbolinks-location
```

## API

```js
var turbolinksLocation = require('turbolinks-location')

app.use(turbolinksLocation(options))
```

### Options

#### onlyWhenHeader

When `true`, only send `Turbolinks-Location` header when the incoming request
has a header indicating it is a Turbolinks request. Default: `false` (meaning
`Turbolinks-Location` is sent on every response).

Here's how to set such a header:

``` javascript
document.addEventListener("turbolinks:request-start", function(event) {
  var xhr = event.data.xhr
  xhr.setRequestHeader("x-turbolinks-request", "true")
})
```

See also <https://github.com/turbolinks/turbolinks#setting-custom-http-headers>.

#### header

The name of the request header to look for. Default: `x-turbolinks-request`.
