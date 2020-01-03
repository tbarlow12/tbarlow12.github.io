---
title: "Design Patterns: Abstract Factory"
date: 2020-1-8
path: abstractfactory
---

## Design Pattern Family

Creational

## What is it?

A specification for how a *factory* should be created (like an interface for factories). For example, if I run a sporting goods company that manufactures and sells balls for all different sports, I'd probably have different factories for golf balls than I would for basketballs. An **abstract factory** would describe the high-level processes that each of those factories would need to perform. These factories could need a step that assembles the skin of the ball, one for stuffing the ball with whatever material, and another for placing the ball in whatever packaging it will need to ship.

## When to use it?

## When *not* to use it?

Abstract factories can become unwieldy if the factories themselves vary widely in the types of tasks they need to perform. This design pattern can become more headache than it is worth if it is difficult to discover the "least common denominator" between the factories, or if that "least common denominator" is extremely general. For example, you might not want to share an abstract factory if you have a factory that creates basketballs, and another that creates basketball players.

## Example