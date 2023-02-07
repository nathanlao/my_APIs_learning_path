## Synchronous JavaScript
- Each command `must complete` before the next command can execute
- **No** two commands can be running **simultaneously**

## Asychronous Javascript
- Code that can be run `out of order`. Allows a lengthy operation to start, but finish at a later time `without blocking` other code from running in the meantime
- JS isn't truly asynchronous, but rather has `callback` mechanisms in place to run commands in a differnent order
- JS is `single-threaded` means only one command can run at a time