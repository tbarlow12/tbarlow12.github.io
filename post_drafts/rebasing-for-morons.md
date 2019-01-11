---
layout: post
title: Rebasing for Morons (with merge conflicts)
permalink: /git-rebase/
---

Rebasing for me used to be a little like flossing... You always hear that you should, but it's just so easy not to.

![alt text](/images/floss.gif)

Then you finally work up the guts or guilt yourself enough into trying, and WHAM... more merge conflicts than a Los Angeles freeway ramp during rush hour.

A member of my team took time to walk me through the process, so I thought I'd share that knowledge with anyone else who feels stupid for even asking.

## `rebase` vs `merge`

The official [git rebase docs](https://git-scm.com/docs/git-rebase) are actually pretty great, so I'll just try to summarize while blatantly stealing their graphics:

If we start with:

```
          A---B---C topic
         /
    D---E---F---G master
```

**Merge**

`git merge master` - Merges `master` branch into `topic` branch

```
          A---B---C topic
         /       /
    D---E---F---G master
```

**Rebase**

`git rebase master` - Replays `topic`'s commits on top of `master`'s

```
                  A'--B'--C' topic
                 /
    D---E---F---G master
```

*Important to note that the commits are now `A'`, `B'` and `C'`. They are not the *actual* commits from the `topic` branch, they are duplicate commits that are played on top of the master branch.




### Merge Tool

My teammate pointed me to [KDiff3](https://sourceforge.net/projects/kdiff3/) as a merge tool, and I'm sure there are plenty of others out there. We'll use KDiff3 for our example.

#### Setup

1. Download & install the tool
2. Add following to your global `.gitconfig` file
    ```
    [merge]
        tool = kdiff3
    [mergetool "kdiff3"]
        path = "C:\\Program Files\\KDiff3\\kdiff3.exe"
    ```

#### Usage

Now, whenever you have a conflict to resolve, you can run:
```
git mergetool -y
```
and you're off!