# YAAS - Yes As A Service

\#Microservice implementation of [yes](https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/yes.1.html)

## Inspiration:

 * https://twitter.com/LisaQFetterman/status/717804478338961409
 * https://twitter.com/tenderlove/status/494219974467403777

## Usage:

```
GET /
```

### Parameters

| Parameter | Required | Description                          |
| --------- | -------- | ------------------------------------ |
| expletive | No       | *string* to repeat (defaults to `y`) |

### Example
```
curl 'https://yesasaservice.herokuapp.com?expletive=lol' | head -10 | say
```
