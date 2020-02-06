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
