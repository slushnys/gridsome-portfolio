---
title: I've started to learn go - and it's different than python
date: 2020-01-27T18:55:10.079Z
description: A true description
---

# What have i learned

Apparently there are a lot of differences between languages I already know.

You can define interfaces with methods that will be accepted and then encapsulate type structures in them in order to call generic functions for each

```go
type geometry interface {
    area() float64
    perim() float64
}
```

_There are no exceptions in Go_

Errors must be returned as a second value from a function. This is a standard in go.

```go
func f1(arg int) (int, error) {
    if arg == 42 {
        // errors.New constructs a basic error value with the given error message.
        return -1, errors.New("can't work with 42")
    }
    // A nil value in the error position indicates that there was no error.
    return arg + 3, nil
}
```

error checks are usually done inline with an if statement.

```go

if r, e := f1(i); e != nil {
            fmt.Println("f1 failed:", e)
        } else {
            fmt.Println("f1 worked:", r)
        }
```

channels

make a channel that would connect concurrent goroutines by:

> messages := make(chan string)
> chan is a reserved keyword i assume
> so you just create a channel of certain type and assign it to a variable to use later.

```go
go func() { messages <- "ping" }()
```

sends a message into a channel

pass a ping string to the messages channel

`msg := <- messages`
does this assign the messages channel to a separate variable?
receives a value from the channel

`fmt.Println(msg)`
print that channel

### goroutines

If the main goroutines have two concurent goroutines then the program will exit because it hit the end of main() function
we can use waitgroups.

### rate limiting

```go
    limiter := time.Tick(200 * time.Millisecond)
    // By blocking on a receive from the limiter channel before serving each request, we limit ourselves to 1 request every 200 milliseconds.

    for req := range requests {
        // this will pause the requests for every certain amount of time.
        <-limiter
        fmt.Println("request", req, time.Now())
    }

```

### atomic counters

atomic counters doesn't let race conditions to fail/distort the calculation/execution of values.
mutexes also can help in preserving the state so in a way this holds the global state of the application, just like Vuex does in vue.

Simple state can be managed by atomic counters, more complex state as mentioned in gobyexample.com is being handled by Mutex in order to safely access data across multiple goroutines.

So to my understanding, data shouldn't be shared normally, but can be read through mutexes.
