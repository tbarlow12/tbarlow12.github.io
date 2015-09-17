---
layout: post
title: Test Driven Development - Your Two Hats
---
Never, ever, ever, ever write tests just to fit your code.

Recently in one of my course assignments, we created a Formula Evaluator that took in a mathematical expression and returned its value, using the order of operations. For example,

((5+6) * 3 - 3) / 6 + 5

should come out to 10. It was a fairly simple algorithm that used stacks to contain the operators and operands of the expression. I had written a method to calculate any given expression, with the method header:

private static double calculate(double first, string op, double second)

I wanted it to be able to plug in (5, "+", 1) and get 6. And it worked beautifully.

It was invoked as such, where myDouble is the current number being processed: calculate(myDouble, op, values.pop());

However, one of my tests was testing 3 / 4. I thought the value would come out to 0, since, in the end, the value was being returned as an integer, and casting as (int) simply truncates the values after the decimal point from a double.

My test failed, and it came out to 1. My thought was, "Oh. I guess C# is just rounding it up to 1." And I just CHANGED THE EXPECTED VALUE.

So, of course the test passed. However, in the tests that the professor used to grade our assignments, he tested the value of "16 / 2," and mine was coming out to 0. What I realized that I had made a simple error in my stack. Instead of (myDouble, op, values.Pop()), I should have used (values.Pop(), op, myDouble). Simple FILO (First In Last Out). Since the previous value had been pushed earlier, I should have used it as the "earlier" value in the expression. I switched that ONE statement, and the tests worked just fine.

So, in fine, don't ever, ever, ever, ever, EVERx10^(NEVER) fix your tests just to fit your code. Yes, examine your tests, but once your test reflects what you think your program should be doing, LEAVE IT ALONE. FIX YOUR OWN CODE.
