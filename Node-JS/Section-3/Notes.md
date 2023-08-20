// ============= Video 36 Blocking and Non-Blocking Code ============//
- write file vs write file sync. In sync mode we block other code execution while file operation executes
- too big of a file will make writeFileSync a bad thing.

// ============= Video 37 Looking Behind the Scenes ============//
- Single Thread, Event Loop, and Blocking Code
- Node js only uses a single thread -> How then can it handle multiple request
- Event loop starts automatically when javascript starts
- Event loop handles callbacks that contain fast finishing code
- the fs commands working with files and other long running code will go to a worker pool. This is really detatched from code and works on different threads leveraging operating system
- Although once the worker pool is complete it will trigger callback which will be handled by the event loop to execute.

- The Event Loop
- Handles the callbacks in an order.
- 1. checks timer callbacks (ie. execute setTimeout, setInterval callbacks)
- 2. pending callbacks (Execute I/O related callbacks that were deferred)
- 3. Poll (retrieve new I/O events,executes their callbacks or defer execution back to pending, will also access the timer callbacks ready to execute)
- 4. Check (execute setImmediate() callbacks) - similar to setTimeout but after the open callbacks finished in iteration
- 5. Close callbacks (execute all close event callbacks)
- 6. process.exit refs == 0, every new event listener increments count by one.
