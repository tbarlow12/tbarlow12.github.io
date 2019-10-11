---
title: I Wiped Our Entire Azure Subscription...
date: 2019-10-4
path: mistakes
---

Now that I've click-baited you into opening this post, let me just reassure you of a couple things:

1. I still have my job
2. The Azure subscription was just a development subscription, so no $ was lost
3. An irresponsible amount of GIFs will be used in this post.

![alt text](https://media.giphy.com/media/4PT6v3PQKG6Yg/giphy.gif)

## The Discovery

It was a crisp, autumn work-from-home kind of Friday. After having breakfast with my family, I went downstairs to my office and cracked open the laptop to begin another wonderful day of writing code...

The afternoon prior, I had deployed an Azure Function that would be running a [Cloud Custodian](https://cloudcustodian.io/) policy to clean up our Azure Subscription. We had a lot of test resources that needed to be removed, so I asked our team to tag any resource groups with `CreatedBy` and their email address for notifications. They all looked through the subscription and tagged their resource groups accordingly. I told them that early Friday morning, I would run a scrub of all resource groups and delete any that did not have owners, and that was the policy that was deployed... or so I thought.

That morning, to my utter shock and horror, I opened the Azure portal to discover _**one**_ resource group... `cloud-custodian`.

So many questions started racing through my mind. How did this happen? Where did I go wrong? What had caused this lone surviving resource group to cannibalize all of his innocent, appropriately-tagged brothers? Panic had already begun to take over.

I opened up the repository containing the policies I had written, and that's when I saw it. I had neglected to update the test tag I had been using... `CreatorEmail`. I had also been testing a policy that would send a weekly email to the members of my team with a summary of their resource groups, which would enable them to do a quick scan and go remove any they didn't need anymore. In not wanting to spam my team with my testing of the policy, I created a new tag, applied it to the `cloud-custodian` resource group, and got to work. Before the end of the day, I ran a script that deployed all of the policies I was working on. That test tag had been copied and pasted to the other policies had deployed. I did read things through, but clearly not closely enough. I had deployed a rogue agent... I opened the doors wide open and let a monster into our house.

## The Fallout

Clearly, this was not going to be a mistake that would fly under the radar, so I figured the sooner I got in front of this, the less likely my head would end up on a pike outside the Microsoft headquarters. I immediately called my manager to tell him what happened. 

![alt text](https://media.giphy.com/media/sS8YbjrTzu4KI/giphy.gif)

He was in another call, so we chatted online. I told him what had happened. I'm not sure he believed me until he opened the portal and witnessed the devastation for himself. _"You're right... it nuked everything,"_ he responded.

After what seemed an appropriate moment of silence for the fallen resource groups, he was quick to point out that **a)** this is only a dev subscription and **b)** anything in the sub should be easily reproducible. He reminded me that everyone goes through something like this at some point, and this was a pretty low-stakes environment for it to happen. Then, like a mayor of a city ravaged by a natural disaster, he stated, _"We can rebuild."_

After the call with my manager, I called a couple team members to assess the extent of the damages. I called my tech lead and told him what had happened. He laughed. He told me about a time where he had deleted a production database early on in his career and reminded me of some of the same things my manager told me. We then made a plan for restoring some of the lost resource groups that were actually public facing.

I decided it was time to tell the team. I wrote up a long email describing the details of what had happened and posted it in our chat channel as well. I was fully expecting a swift and brutal judgement worthy of my crimes.

![alt text](https://media.giphy.com/media/qiDb8McXyj6Eg/giphy.gif)

But rather than _"How could you?"_, _"How dare you?"_ or other responses you might expect in such a circumstance, every member on the team simply reacted to my message with a single emoji:

💪

as if to say _"Be Strong."_

And that was pretty much it. After some of the initial rawness of the incident had worn off, we were able to laugh about it a little bit. A team member pointed out that until you break production, you're not a real engineer. I countered with the remark that if that was all it took, I would've done this a long time ago. I got to work restoring the damages, reached out to other developers that were using some of our deployed services and helped them get back up to speed.

## Takeaways

### Technical Empathy and a Blameless Culture

One of the surprising parts of this experience was the empathy shown by my colleagues. They were quick to point out times where similar things had happened to them or others and to remind me that it was an honest mistake. 

This kind of "technical empathy" is not only helpful, but essential in building successful, collaborative software teams that trust each other and work together. This is one example where the empathy of my teammates gave me the boost that I needed to get back up and start fixing things rather than wallow in my own self pity.

Technical empathy is also useful in giving (and receiving) code reviews. Rather than belittle team members for making what we perceive to be a mistake in the code, we can try to understand why they felt they had to do what they did. There very well may be an obstacle that we, as reviewers, are unaware of.

In our team at Microsoft, we work with dev teams of other companies to help them solve interesting challenges, usually related to Azure. As a byproduct of that, we get to see _a lot of new codebases_. Every time we crack one open, there's a little bit of apprehension (and even fear) about what we might find. Technical empathy can be applied here too. A popular article titled ["The software engineer’s guide to asserting dominance in the workplace"](https://medium.com/feature-creep/the-software-engineer-s-guide-to-asserting-office-dominance-ddea7b598df7) (satirically) recommends the following strategy for ramping up on a codebase when joining a new team:

_"Spend the rest of the day familiarizing yourself with the team’s codebase. Every five to ten minutes, let out a deep sigh and write something down on a notepad. Maintain a demeanor of mild disgust on your face that gets increasingly more annoyed as you browse through more and more of the code. Mumble words like “refactor” and “rewrite” under your breath. Start drawing random complex architectural diagrams on your whiteboard. By 3 PM you should be visibly angry. Eat some chili peppers to force yourself to sweat. At 4 PM, allow your rage to boil over and throw your last egg at the wall in a fit of rage. Slam your laptop closed and head home early._

It is easy to be critical when you're unaware of the constraints and difficulties encountered by other developers. Often times, on high-performing teams, if you have an idea within the first few seconds of looking at a problem, it's possible that other engineers might have tried the same approach. That's not to say you shouldn't share your ideas on how things could be better, but be hesitant about jumping to the conclusion that you're surrounded by morons and that you are the only one who is truly "one with the code." For more info on the subject, visit [this article on how empathy is a technical skill](https://www.infoq.com/articles/empathy-technical-skill/).

Rather than becoming upset and demanding my immediate dismissal, they responded with _"Sorry that happened, it happens to all of **us**, what do we do to fix it?"_ The phrase "blameless culture" became more than just a line in our team's working agreement.

### Use the Buddy System

For any of you that ever went to any kind of summer camp, you know that one of the first rules they tell you is to never wander off alone. Bring a buddy along with you. If I would have just listened to my camp counselor and followed that simple rule, you wouldn't be reading this blog post right now.

As software engineers, asking others for help or to look over our work isn't always our natural inclination. We often see ourselves as a one-man army, equipped with a mechanical keyboard and multiple monitors, leaving a trail of dead bugs and shattered features in our wake.

![alt text](https://media.giphy.com/media/TBOvwBGkQShnq/giphy.gif)

To counteract that behavioral tendency, we put up quality gates. On our team, in every repository we work with, we establish branch protection policies that prohibit anyone from pushing directly to `master` or even `dev`. We require pull requests that trigger CI pipelines and establish baseline coverage requirements for both the project as a whole and the current diff being submitted. (Side note on code coverage: We recognize that developers can "game the system" when it comes to code coverage, so the tests are reviewed with just as much scrutiny as the application code.) 

These standards are required on every single project that we work on. All of this could have been so easily prevented if I had just asked for even one other pair of eyes to look over these basic policies before I had deployed them. Instead, I ignored the rules, wandered off into the wilderness by myself and got mauled by the proverbial bear of disaster.

UPDATE: Now, these policies are deployed from a central build server via an Azure Pipeline, which is triggered on merges to the master branch of a repository which requires two approvals from members of the team in order to merge.

### Be especially careful with irreversible actions

Part of the tragedy of this episode was its finality. There was no commit to revert, no deployment to roll back. These resource groups were as lost as Black Widow after Endgame.

A lot of what we do as software engineers is set up guard rails and fail-safes so that when things break, we have a quick way to return to the state we were in before the change. When we decide to venture outside the lines and do things that are irreversible, we should do so with care and hopefully, with a buddy ☝.

UPDATE: Currently, in our Cloud Custodian policies, "nuclear" actions (like delete) are given a "grace period" of 7 days before they are enacted. The resources are tagged for the operation and an email is sent to the team member(s) responsible for the resource so that they can cancel the operation if necessary.

### Automate, Automate, Automate

For several members of my team, this loss was almost trivial. Many of the resource groups were just a CLI execution or a pipeline run away from being restored. Sometimes we spend _too_ much time trying to automate tasks when we just need to stand something up and get unblocked, but when possible, use scripts, pipelines and templates to do the dirty work. It will save you (and probably your team) hours of work later on if that work needs to be replicated. It will allow you to focus on solving the cool problems instead of re-figuring out something you've done before.

## Conclusion

Mistakes are part of software engineering and a part of life. I make them every day, and I don't expect that to stop any time soon. But I don't expect to make the same mistake twice. My all-time basketball hero, John Wooden, once said _"Failure is not fatal, but failure to change might be."_ You don't have to let something like this happen to you. In fact, I highly recommend that you don't. Learn from my experience. Ask for another pair of eyes. Be careful if you're doing something irreversible. Set up recovery steps to back up your work. It will save you a lot of heartache and a lot of time someday.
