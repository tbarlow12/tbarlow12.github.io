---
title: Joining Microsoft
date: 2018-6-1
path: joiningmicrosoft
---

I've had a few friends ask me what my journey to Microsoft was like and why I chose to work here. Microsoft, like the Yankees and black licorice, is one of those "love it or hate it" kind of things (I fall emphatically into the latter camp for both of those other two). Everyone has reasons or experiences that make them feel one way or the other. As for myself, I've really enjoyed working at Microsoft, so I thought I'd document a little bit of my journey and why I ended up where I did.

## The Interview

I first interviewed with Microsoft in 2015 for a summer internship. When they called me and asked me to fly out for a round of final interviews in Redmond, my wife and I saw it as a free trip to Seattle. In my head, I was nowhere near qualified to work at a place like that and had all but written myself off from the start. The [Imposter Syndrome](https://en.wikipedia.org/wiki/Impostor_syndrome) was as real as ever. But I had promised my wife earlier that year that I would take us some place out of Utah that summer for an internship of some kind, so I really did want it to work out.

![alt text](/resources/images/Microsoft/sign.jpg)

I didn't feel great about my interviews - a couple of them felt downright terrible. But I did try hard to explain my thought process and walk my interviewers through my solutions to the problems they presented. 

After our brains had become sufficiently scrambled through the 4-hour interview process, the recruiters took us to lunch at the Commons. When we came back from lunch, they handed out Microsoft hoodies and swag (pretty much a participation trophy for interviewing, but **score** nonetheless). I was just about to head out the door to go back to the hotel, intent on enjoying the rest of the weekend in Seattle with my sweet wife, when one of the recruiters pulled me aside.

We went into a nearby conference room with one of the other recruiters, where they explained that they had an offer on the table for me. Shock doesn't begin to describe what I was feeling. It was cool to see that they were genuinely excited for me. I think they were even more excited for me to tell my wife. 

On principle, I wouldn't officially accept anything until I had talked to Kate first, so I told them I would send them an email later that day. I called Kate as soon as I left the building and could barely contain my excitement as I tried to explain what just happened, not really knowing the answer myself. We spent the night in downtown Seattle, fully able to relax and imagine what our summer would be like in this new place.

![alt text](/resources/images/Microsoft/seattle.jpg)

## A New Intern

The day after I took my last final in May of 2016, we packed up our Highlander with everything we'd need for the next 3 months and made the 12-hour drive to our summer home. Microsoft put us up in an apartment in Redmond, which was close enough to one of the buildings that I could schedule a shuttle to pick me up and take me to the office. I became friends with many of the shuttle drivers I met that summer and remain very close friends with a few of them to this day. I've been to dinner with them, attended funerals of family members, and even stayed in one of their houses while I was looking for a place to stay for my family. Some of the finest people I've ever had the chance to meet.

I spent that first summer in building 109 of Microsoft's campus, working with the WDG Global Services Localization Data Insights team (kind of a mouthful). My project was to automate the process by which our team identified meaningful feedback, particularly when it came to localization issues in Windows. I was able to work with a few teams across Microsoft to create a system that utilized an internal big data platform and natural language processing/machine learning tools to process and identify feedback most likely to be actionable in order to pass it along to developers. 

![alt text](/resources/images/Microsoft/project.jpg)

It solved a critical business need for the team, as they had previously been hiring sub-contractors to _read each piece of feedback, one by one_ and decide which ones were actionable. That may work for a smaller system, but for something like Windows, that's just not scalable. The project was a success, I learned a ton and had a blast doing it. For more detail on this project, check out my [blog post](/Microsoft-Summer2016/) written right after finishing for the summer. Of course, I enjoyed the many intern events and parties held for us... A private Ellie Goulding concert at the Space Needle where they hand out new Surface Books at the end wasn't anything to sneeze at... But the highlight for me was the learning and growing I was able to do, being surrounded by an amazing group of talented individuals that didn't mind taking the time to teach and mentor an intern.

![alt text](/resources/images/Microsoft/team.jpg)

I accepted an offer to return to the same team the following summer. As these things go, there was a massive re-organization within the team, my manager left Microsoft to pursue a personal dream of civic engagement as the City of Seattle's new Open Data Program Manager, and I would be reporting directly to my previous skip-manager. Although I was very sad to hear my manager would be leaving, I was happy to still be working under someone I knew and respected a great deal. 

## Return of the Intern

Our journey back to Redmond after a long school year was pretty much the same, aside from one major detail - my wife was 6 months pregnant. She was due on August 10th, just 13 days after I was scheduled to finish my internship. Microsoft was _extremely_ accomodating with us. They put us in an apartment that was literally a 6-minute bike ride from building 109. They told me that if anything came up, I should feel free to take time to be with her and not to worry about work. My recruiters even got us a bag of gifts for the baby from the Microsoft store. We really felt that they had our interests at heart and cared about our little family.

![alt text](/resources/images/Microsoft/baby.jpg)

My project during that second summer was very broad, more of a question to answer with no real guidance given on the implementation. I was free to take the project in whatever direction I saw fit. The question was "How do we identify influential communities of Windows users/devices so that we can weight their feedback more heavily?" These communities went much deeper than just "gamers, business users, mobile users, etc." We already knew that for most devices. I wanted to find a way to use Windows telemetry to cluster devices together that actually *behaved* in a similar way, so that we could amplify the voice of Windows Insiders (users that receive Windows versions before they are released to the public) that more accurately represented that population.

At a 30,000 foot level, my approach was fairly straight forward: run k-means clustering on Windows devices within a locale (primary language used on device) and assign each device a score proportional to the size of the cluster and inversely proportional the device's distance from the centroid (higher score = big cluster and close to center). The problem became finding ways to run this efficiently on pedabytes of telemetry data and setting it up to run in an automated workflow. The systems we used had a timeout of 2 hours when running a script, so in order to give it time to finish, I was forced to break it up into smaller chunks of data and run many smaller scripts in parallel.

The project went well, and laid a foundation for future work in the area. But as with any probabilistic problem (especially when dealing with unsupervised learning), it's difficult to know when you've found the right approach. Testing your solution can be just as hard as developing it in the first place. When it came down to it, 12 weeks just wasn't a lot of time to understand the problem, map out a solution, implement it by myself and verify the results. And when I say "by myself," that's not to say I didn't receive a lot of help throughout the process. I just mean that no one else was _directly_ working on the project with me. I'm confident that given a few more months, we would have come up with a solid approach to answer this question.

## The Decision

At the end of the summer, I had some difficult decisions to make - whether or not to stay at Microsoft and, if I did stay, whether or not to stay with my current team. I really had enjoyed working with these people for the past two summers. I had learned a lot and was sure there was more to learn from them. But I also felt like broadening my horizons and looking at what other teams/companies had to offer. Two of the main things I was looking for were opportunities to challenge myself and grow, as well as a family-friendly atmosphere.

Throughout the summer, I had been trying to follow the advice of mentors to keep my options open, so I interviewed with several different companies and had informationals with several teams across Microsoft. In that process, I discovered the Partner Catalyst Team, whose charter was basically to code with Microsoft partners on whatever they were building, which often times included contributing to open-source projects and traveling around the world. I met with a couple of the managers from the team, and even jumped on a Hackathon project with one of them as a little test run of what it would be like to work with them. I had a *great* time and learned a lot in the 3 days we worked together.

We went home for the summer. I was still talking to and interviewing with several different companies around the West, including leaving my poor wife while she was 8.9 months pregnant to fly to Silicon Valley. After weighing a few options, thinking about what was best for our family and where I could grow the most, I chose to stay at Microsoft, but switch to this new team. Both my wife and I thought this was the right call and we were ecstatic.

I went to school and finished my last semester, graduating in December of 2017 and returning to Microsoft on January 8th of 2018. The team had been re-organized and renamed as Commercial Software Engineering (CSE), and I'd be specifically working with the Digital Win Room team within that organization. I spent a week with the team, and then took 2 of the 3 available months of paternal leave, which I was able to use at any time before our new son Jack's birthday in August. I couldn't believe how understanding they were and that the team was happy to let me take that time to get the family moved and spend time together before really starting at work.

I've been officially back for just about 3 months now, and I have had a blast with some really cool projects and fun adventures. I'll do my best to keep the blog updated on the happenings here.

So, there you have it. I joined Microsoft because I felt like it would be a place where I could grow as a Software Engineer and, even more importantly, as a husband and father. I stay because those things are still true. 

If you have any other questions about what it's like to work here, feel free to reach out via any of the communication channels below!