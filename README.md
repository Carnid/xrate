# xrate
A simple angular filter for displaying an exchange rate properly depending on its value
## Getting Started
You can either copy the code from src/xrate.js and add to your directive because a bower package for an angular filter might be overkill or...
### Bower
```
bower install --save angular-xrate
```
and make sure that
```
angular.module('yourAppName', ['xrate']);
```

### Usage
Quite simple, use it as any filter:
```
<h4>{{myController.myExchangeRate | xrate}}<h4> 
```

There are currently no additional options. Formatting follows these rules:

-   &gt;=5000: no decimals
-   &gt;= 80 and < 5000: two decimals
-   &gt;= 20 and < 80: three decimals
-   &gt;=1 and < 20: four decimals
-   < 1: six decimals

These rules are based off of wikipedia, who mentionned this is [how they were traditionally displayed](https://en.wikipedia.org/wiki/Exchange_rate#Quotations). 