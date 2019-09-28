---
title: Top 5 (unordered) Learnings from PyCon 2019
date: 2019-5-6
path: pycon2019
---

This is a summary of 5 of my favorite talks from PyCon 2019. I learned a ton throughout the conference and felt that the learnings needed to be shared. I've tried to summarize as best as I could from the notes that I took. I believe the talks will be available online soon if they are not already. Big thanks to the speakers for all the effort they put in to make their talks so practical and engaging.

## Black Swans - Keynote from Russell Keith-Magee
  
  This was the first keynote of the conference, and it was **awesome**. Mr. Keith-Magee discussed the [black swan theory](https://en.wikipedia.org/wiki/Black_swan_theory), which, as a very crude summary, are things that seem obvious in hindsight but that no one had thought of previously. 
  
  He tied that to the 1983 America's Cup winning sailing team from Perth, Australia, and their use of the [winged keel](https://en.wikipedia.org/wiki/Winged_keel). This innovation helped their boat move with less resistance. Sailboats had been roughly the same for the previous few decades and teams that failed to innovate were left behind. He invited us to challenge our assumptions and to look for "black swan" innovations, particularly relating to the open-source and Python communities.

## Break the cycle: three excellent python tools to automate repetitive tasks - Thea Flowers

### 1. `tox`
    
One of the most common tools used in Python applications. Used to run tests in multiple environments and even multiple versions of frameworks. For example if you want your app to support multiple versions of Python and multiple versions of Flask, your `.ini` file could look something like (example taken from the `flask-restful` repo):
    
~~~ 
[tox]
envlist=
    py{27,34,35,36,37}-flask{0_10,0_12,10}

deps =
    flask0_10: flask>=0.10,<0.11
    flask0_12: flask>=0.12,<1.0
    flask10:   flask>=1.0,<1.1

[testenv]
usedevelop = true
commands =
    pip install -e .
    nosetests
deps =
    -r{toxinidir}/tests/requirements.txt
~~~ 

When the command `tox` is executed, this would run the test suite **15 times** (cross product of Python environments and Flask versions - `5 x 3 = 15`). As part of that process, it would install the necessary dependencies in virtual environments (according to each version) and run the tests. Pretty cool.

### 2. `nox`
    
Pretty cool to listen to a talk from the original `nox` author. `nox` is very similar to `tox`, but rather than using the `.ini` file, its configuration is done in Python itself. The `nox` equivalent to the `tox.ini` file above would be something like:

~~~ python
@nox.session(python=['2.7', '3.4', '3.5', '3.6', '3.7'])
@nox.parameterize('flask', ['0.10', '0.12', '1.0'])
def tests(session, flask):
    # Install pytest
    session.install('pytest')
    # Install version of flask
    session.install(f'flask=={flask}')
    # Install everything in requirements-dev.txt
    session.install('-r', 'requirements-dev.txt')
    # Install the current package in editable mode.
    session.install('-e', '.')
    # Run pytest. This uses the pytest executable in the virtualenv.
    session.run('pytest')
~~~ 

Also a really cool option, which is helpful if you need something slightly more flexible than `nox` or if you'd rather write config-as-code.

### 3. `invoke`

Invoke is seen as a more flexible automation tool. For example (straight from `invoke`'s docs):

~~~ python
from invoke import task

@task
def clean(c, docs=False, bytecode=False, extra=''):
    patterns = ['build']
    if docs:
        patterns.append('docs/_build')
    if bytecode:
        patterns.append('**/*.pyc')
    if extra:
        patterns.append(extra)
    for pattern in patterns:
        c.run("rm -rf {}".format(pattern))

@task
def build(c, docs=False):
    c.run("python setup.py build")
    if docs:
        c.run("sphinx-build docs docs/_build")
~~~ 

which is run by calling:

~~~ bash
$ invoke clean build
~~~ 

This can be very useful even outside of things like Python testing. Planning on converting some of the scripts I use on my machine to `invoke` commands.

## Wily Python: Writing simpler and more maintainable Python - Anthony Shaw
  
This talk was definitely one of my favorites. We had just talked a lot about code complexity when working on [VoTT](), and not many of us knew exactly how that was calculated. Anthony talked about three different ways to measure code complexity and how all of them play a factor in calculating the "maintainability index".

The first, most crude way of measuring complexity is by **lines of code**. Fewer lines *can* be less complicated, but in a language like Python, you could have a one-liner like this function for the Sieve of Eratosthenes:

~~~ python
def sieve_eratosthenes(n):
    return sorted(set(range(2,n+1)).difference(set((p * f) for p in range(2,int(n**0.5) + 2) for f in range(2,(n/p)+1))))
~~~ 

Another measure is by **cyclomatic complexity**, for which he gave the example of ordering a Big Mac:

~~~ 
CASHIER: What would you like?
ME: I'd like a Big Mac please
CASHIER: Make it a meal?
ME: Sure
CASHIER: Small, large or super size?
ME: Large
CASHIER: What would you like to drink?
ME: Coke
CASHIER: Diet or regular?
ME: Regular
~~~ 
Just in that interaction, the cyclomatic complexity would be **5**, which is basically *the number of decisions that need to be made*. In Python, things like `if`, `elif` and `try` are things that increase cyclomatic complexity.

This is why you might get asked in a code review to "invert `if` statement to reduce nesting." The phrase *"flat is better than nested"* is directly from the Zen of Python (discussed more below) and explained in the famous email to the Python mailing list [Why "flat is better than nested"?](https://mail.python.org/pipermail/python-list/2010-October/590762.html).

Where the code complexity measurement gets more "mathy" is when we start talking about Halstead Complexity measures. I won't go too deep into this, but it involves operators, operands, sums of each and much more.

When you combine these three measurements, you can calculate the `maintainability index` as such:

~~~ 
MI = 171 - 5.2 * ln(Halstead Volume) - 0.23 * (Cyclomatic Complexity) - 16.2 * ln(Lines of Code)
~~~ 

There have been variations of this original formula, which you can read about [here](http://www.projectcodemeter.com/cost_estimation/help/GL_maintainability.htm)

After discussing the theory behind all of this, Mr. Shaw introduced the Python utility he wrote called `wily`, which you can install on pip. `wily` is "A command-line application for tracking, reporting on complexity of Python tests and applications." Definitely planning on using `wily` in my next Python project!

## The Zen of Python Teams - Adrienne Lowe
  
Many people are familiar with "The Zen of Python" as laid out in an email from Tim Peters and described on python.org as "guiding principles for Python's design into 20 aphorisms, only 19 of which have been written down." (meaning the 20th is something for us as a community to fill in for ourselves)

Here are the 19 aphorisms:

~~~ 
Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those! 
~~~ 

(If you didn't know, these are in a Python Easter Egg. Fire up `python` in your terminal and type
    
~~~ 
>>> import this
~~~ 
to see what I mean.)

These sayings are usually applied directly to the code that we write, but Adrienne Lowe discussed how we can take some of these principles and apply them directly to how we work within our teams. Here are a few that she discussed:

### "Beautiful is better than ugly"

We can avoid "acting ugly" with our teammates. "Acting ugly" can come in the form of bitter, cutting code reviews, hoarding information and refusing to collaborate with others.

She referenced Westrum's ["A typology of organisational cultures"](https://qualitysafety.bmj.com/content/13/suppl_2/ii22), which discusses three different types of cultures in a team:

#### 1. Pathological
- Information is a **personal** resource (not to be shared)
- Cooperation is discouraged
- Failure leads to scapegoating
- Accidents lead to blaming

#### 2. Bureaucratic
- Responsibilities are narrow
- Alignment of team takes precedent over mission
- Failure leads to seeking justice
- Novelty leads to problems
- Maintain turf
- Insist on being done by the book - their book
- Inter-team dynamics neglected

This one reminded me immediately of the old cartoon depicting Microsoft's organizational culture-of-old:

![alt text](https://dougbelshaw.com/blog/wp-content/uploads/2013/09/organizational_charts.png)

Thankfully, I can say that in my ~2 years working for Microsoft, I have yet to experience that kind of culture. Things have changed :)

#### 3. Generative (the goal)
- High cooperation
- Risks are shared
- Failure leads to inquiry
- Information flows freely
- How can we accomplish our goal ("we" is expansive and inclusive of all)

### "Explicit is better than implicit"
- We should *always* have playbooks, documents, resources, onboarding guides and steps to take when confused
- Having these in place and other process documentation makes it easier to include others and speeds up the work
- It is better to keep conversations about code in **main channels** of Slack or whatever messaging service you use as opposed to DMs or other private places. Helps everyone benefit from the knowledge being shared
- Documenting process also improves relationship between teams
- We should **document our people**
    - I enjoy working on...
    - I get excited by...
    - I struggle when...
    - I feel appreciated when...
    - I prefer feedback...
    - Ask me for help with...
- Helps with process of working within teams an can be extremely valuable

### "Simple is better than complex"
- We build meaningful relationships with small interactions that increase understanding and trust
- Take time to have coffee with colleagues, catch up on weekend, etc.
- **Remote teams** -> Remote Happy Hours - just jump on a video call to chat about lives
- Build trust and familiarity with colleagues
- Like software, we build relationships with small but meaningful actions

### "Errors should never pass silently"
- If something is wrong with my code, I want to know
- If I do something to hurt someone, I want to know
- We rely on other humans to know that we hurt them
- Feedback is the tool we have to understand our impact on others
- On healthy teams, people should understand what things they need to do to improve
- Be careful about how you respond about mistakes. We all need to be open about mistakes and willing to "share our trash" to the point that we're not self-conscious about getting feedback from others.

### "In the face of ambiguity, refuse the temptation to guess"
- Don't `git blame` and stew about it
- Assume the best and don't guess at motives.
- Ask where they're coming from and try to understand why they did what they did
- Be assertive
- Open issues, comment on PRs
- Challenge directly but care personally
- Don't explain away code... or people
- Especially for managers. Don't guess about how your direct reports are doing. You should know.

### "Now is better than never"
- Take **some** action to move closer to our goal
- "Doing and being wrong is a lot better than not doing at all"
- Everyone benefits from being reminded that they can start where they are
- **Challenge** - Fill in the 20th line of the Zen and share it on social media with `#HereYaGoGuido`


## Type hinting and `mypy` - Bernat Gabor

- Why use types in Python? Why not just use Java/C#?
  - Makes code easier to:
    - understand
    - use
    - maintain
    - debug
    - refactor
  - Creates more accurate code suggestions
  - Does lint checks that find bugs with no tests
  - Improve documentation
  - Built-in data validation
  - Performance increase (sometimes)
    - `mypyc` - Compiles c-extension type hinted code (not full syntax support yet), can lead to 4 to 20x performance improvement (due to the avoidance of hashtable lookups)
- You can *gradually* introduce typings into your code (not all or nothing)
- Typing example:
~~~ python
def greeting(name: str) -> str:
    s: str = name # You can add type annotations inline
    return s
~~~ 
- Gotchas
  - If you have to maintain both Python 2 & 3, this will be difficult
  - If you have mulitple return types, the best way to use typings will be to use the `@overload` decorator and declare the function multiple times
  - Type lookup - looks for type in closest namespace
    - For example, if you have a function named `float` that returns a `float` data type, it will type the return value as the function itself
- Typing packages
  - `mypy` - Reference implementation type checker
  - `pyre` - Facebook
  - `pytype` - Google
  - `pyright` - Microsoft (fun fact - written in TypeScript)

## Conclusion

I hope this summary was of value to someone. Thank you again to the speakers and organizers of PyCon 2019.
