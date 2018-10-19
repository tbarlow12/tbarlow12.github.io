---
layout: post
title: Pythonic Adventures
permalink: /pythonic-adventures/
---

Over the last few years, Python has become one of the hottest programming languages on the planet. Many have started with Python as their first programming language because it can almost read like English. It has become ubiquitous in the world of data science and has become the language of choice for many OSS projects.

However, like any language, there are advantages, disadvantages and a lot of people with a lot of strong opinions. For now, I won't dive into any issues relating to performance optimzation or the difference between compiled vs. interpreted language, though those are important things to consider when deciding what language to use for a certain project. This post will be more focused on the cool tips and tricks I've been learning in my limited time using this professionally. 

To start, let's imagine you're reading through a legacy code base (as "legacy" as Python code bases can be) for mathematical operations. You come across this little snippet designed to accept two multi-dimensional arrays, add them together and then multiply the result by 2.

```python
def weird_matrix_operation(a, b):
    a = numpy.array(a)
    b = numpy.array(b)
    return (a + b) * 2
```

![alt text](/images/too-easy.gif)

You are then told that there is a bug in this little one-line nugget of sunshine that uses the [sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) algorithm to return all prime numbers between 2 and `n`:

```python
def sieve_eratosthenes(n):
    return sorted(set(range(2,n)).difference(set((p * f) for p in range(2,int(n**0.5) + 2) for f in range(2,(n/p)+1))))
```
![alt text](/images/snakes.gif)

(10 points to Hufflepuff if you find the bug)


