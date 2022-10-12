---
title: "Python Exercises"
date: "2022-09-19"
description: "The solutions to Python Hackerrank questions"
tags: ["career", "python"]
draft: true
---

2.  Python If-Else

Given an integer, `n`, perform the following conditional actions:

-   If `n` is odd, print `Weird`
-   If `n` is even and in the inclusive range of  to , print `Not Weird`
-   If `n` is even and in the inclusive range of  to , print `Weird`
-   If `n` is even and greater than , print `Not Weird`

```python
#!/bin/python3

import math
import os
import random
import re
import sys  
  

if __name__ == '__main__':
    n = int(input().strip())
    if (n % 2 != 0) or (n >= 6 and n <= 20):
        print("Weird")
    else:
        print("Not Weird")
```

3. 

```python
if __name__ == '__main__':

    a = int(input())
    b = int(input())

    print(a + b)
    print(a - b)
    print(a * b)
```

4. loops

```python
if __name__ == '__main__':
    n = int(input())
    for i in range(0, n):
        print(i * i)
```

5. Leap year

```python
def is_leap(year):
    leap = False
    if (year%4 == 0) and (year%100 !=0 or year%400 == 0):
        leap = True
    else:
        leap = False
    return leap

year = int(input())
print(is_leap(year))
```

6. 

```python
if __name__ == '__main__':
    n = int(input())
    list_n = []
    for i in range(1, n+1):
        list_n.append(i)
        
    print(*list_n, sep='')
```