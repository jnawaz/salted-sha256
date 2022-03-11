# salt-sha256

## Inspiration ##

I first used [ salted-sha256 ](https://www.npmjs.com/package/salted-sha256) in a project however the order in which the salt & the data string is hashed wasn't conducive to the format I required and the original repo no longer exists to make a PR.

It was hashing 
```
salt + data
```
however I required

```
data + salt
```

in order to meet the SHA256 of [ this ](https://www.symbionts.de/tools/hash/sha256-hash-salt-generator.html) tool.

This makes it easier to test and verify.
## Installation ##
```
npm i salt-sha256
```

## Usage
```
/ Get salted SHA256.
const saltedHash = saltedSha256('Some data.', 'SUPER-S@LT!');
// Value of "saltedHash": "70dc46430221cdfaddd554e7d1c12d474a2c98e8eaf6ea24d08b1185be1a78d0".
 
// Get salted SHA256 async (as promise). Just set "isAsync" param as "true".
const saltedHashAsync = await saltedSha256('Some data.', 'SUPER-S@LT!', true);
// Value of "saltedHashAsync": "70dc46430221cdfaddd554e7d1c12d474a2c98e8eaf6ea24d08b1185be1a78d0".
```

## License
The MIT License (MIT)

Copyright © 2022 Jamil Nawaz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

