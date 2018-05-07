---
layout: post
title: Joining Microsoft
permalink: /joining-microsoft/
---

## The Interview

I first interviewed with Microsoft in 2015 for a summer internship. When they called me and asked me to fly out for a round of final interviews in Redmond, my wife and I saw it as a free trip to Seattle. In my head, I was nowhere near qualified to work at a place like that and had all but written myself off from the start. The [Imposter Syndrome](https://en.wikipedia.org/wiki/Impostor_syndrome) was as real as ever. But I did promise her earlier that year that I would take us some place out of Utah that summer for an internship of some kind, so I really did want it to work out.

![alt text](/resources/images/Microsoft/sign.jpg)

I didn't feel great about my interviews - a couple of them felt downright terrible. But I did try hard to explain my thought process and walk my interviewers through my solution to the problems they presented. After four hours of interviews, I went to lunch at the Commons with the other candidates, many of whom were from schools like CMU, Harvard, MIT, etc. Not that I'm not proud to be a Ute, because I was and always will be, but at the time there was just something about those big name schools that made me feel so small. We came back from lunch, where the recruiters handed out Microsoft hoodies and swag (pretty much a participation trophy for interviewing, but **score** nonetheless). I was just about to head out the door to go back to the hotel, intent on enjoying the rest of the weekend in Seattle with my sweet wife, when one of the recruiters I had spent some time chatting to pulled me aside.

We went into a nearby conference room, where he explained that they had an offer on the table for me. Shock doesn't begin to describe what I was feeling. He pulled in another recruiter, the one I had first reached out to over a year previous to express my interest. It was cool to see that they were genuinely excited for me. I think they were more excited for me to tell my wife that I came through on my promise. On principle, I wouldn't officially accept anything until I had talked to Kate first, so I told them I would send them an email later that day. I called Kate as soon as I left the building and could barely contain my excitement as I tried to explain what just happened, not really knowing the answer. We spent the night in downtown Seattle, fully able to relax and imagine what our summer would be like in this new place.

![alt text](/resources/images/Microsoft/seattle.jpg)

## A New Intern

The day after I took my last final in May of 2016, we packed up our Highlander with everything we'd need for the summer and made the 12-hour drive to our summer home. Microsoft put us up in an apartment in Redmond, situated just a 10-minute walk away from one of their satelite buildings where I would call for a shuttle every morning to drive me to work. I became friends with many of the shuttle drivers I met that summer and remain very close friends with two of them to this day. I've been to dinner with them, attended funerals of family members, and even stayed in one of their houses while I was looking for a place to stay for my family. Some of the finest people I've ever had the chance to meet.

I spent that first summer in building 109 of Microsoft's campus, working with the WDG Global Services Localization Data Insights team (kind of a mouthful). My project was to automate the process by which our team identified meaningful feedback, particularly when it came to localization issues in Windows. I was able to work with a few teams across Microsoft to create a system that utilized an internal big data platform and natural language processing/machine learning tools to process and identify feedback most likely to be actionable in order to pass it along to developers. 

![alt text](/resources/images/Microsoft/project.jpg)

It solved a critical business need for the team, as they had previously been hiring sub-contractors to _read each piece of feedback, one by one_ and decide which ones were actionable. That may work for a smaller system, but for something like Windows, that's just not scalable. The project was a success, I learned a ton and had a blast doing it. For more detail on this project, check out my [blog post](/Microsoft-Summer2016/) written right after finishing for the summer. Of course, I enjoyed the many intern events and parties held for us... A private Ellie Goulding concert at the Space Needle where they hand out new Surface Books at the end wasn't anything to sneeze at... But the highlight for me was the learning and growing I was able to do, being surrounded by an amazing group of talented individuals that didn't mind taking the time to teach and mentor an intern.

![alt text](/resources/images/Microsoft/team.jpg)

I accepted an offer to return to the same team the following summer. As these things go, there was a massive re-organization within the team, my manager left Microsoft to pursue a personal dream of civic engagement and I would be reporting directly to my previous skip-manager. I was happy with that, as I had gotten to know him well and respected him a great deal. 

## Return of the Intern

Our journey back to Redmond after a long school year was pretty much the same, aside from one major detail - my wife was 6 months pregnant. She was due on August 10th, just 13 days after I was scheduled to finish my internship. Microsoft was _extremely_ accomodating with us. They put us in an apartment just across the freeway in Bellevue, literally a 6-minute bike ride from my office. They told me that if anything came up, I should feel free to take time to be with her and not to worry about work. My recruiters even got me a bag of gifts for the baby from the Microsoft store. We really felt that they had our interests at heart and cared about our little family.

![alt text](/resources/images/Microsoft/baby.jpg)

My project during that summer was very broad, more of a question to answer with no real guidance given on implementation - I was free to take the project however I saw fit. The question was "How do we identify influential communities of Windows users/devices so that we can weight their feedback more heavily?" These communities went much deeper than just "gamers, business users, mobile users, etc." We already knew that. I wanted to find a way to use Windows telemetry to cluster devices together that actually behaved in a similar way, so that we could amplify the voice of Windows Insiders (users that receive Windows versions before they are released to the public) that represented that population.

At a 30,000 foot level, my approach was fairly straight forward: run k-means clustering on Windows devices within a locale (primary language used on device) and assign each device a score proportional to the size of the cluster and inversely proportional the device's distance from the centroid (higher score = big cluster and close to center). The problem became finding ways to run this efficiently on pedabytes of telemetry data and setting it up to run in an automated workflow. The systems we used had a timeout of 2 hours when running a script, so in order to give it time to finish, I was forced to break it up into smaller chunks of data and run many smaller scripts in parallel.

The project went well, and laid a foundation for future work in the area. But as with any probabilistic problem (especially when dealing with unsupervised learning), it's difficult to know when you've found the right approach. Testing your solution can be just as hard as developing it in the first place. When it came down to it, 12 weeks just wasn't a lot of time to understand the problem, map out a solution and implement it - by myself. And when I say "by myself," that's not to say I didn't receive a lot of help and guidance throughout the process. I just mean that no one else was _directly_ working on the project with me. I'm confident that given a few more months, we would have come up with a solid approach to answering this question.

## The Decision

At the end of the summer, I had some difficult decisions to make. I really had enjoyed working with my team for the past two summers. I had learned a lot and was sure there was more to learn from them. But I also felt like broadening my horizons and looking at what other teams/companies had to offer. I had been reaching out to teams throughout Microsoft to see what they were working on and if it was something I could be interested in. They highly encourage this at Microsoft, especially for iterns. 

The company has an internal website where employees can add tags to their profile to indicate what they were working on, and I noticed that a bunch of members of the Partner Catalyst Team had a very diverse set of technologies they were working on. I reached out to the team, set up a couple informationals and ended up deciding to accept an offer as a full-time employee with them. 

I talked with and interviewed with several different companies around the West, 