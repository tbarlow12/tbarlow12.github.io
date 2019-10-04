---
title: I Wiped Our Entire Azure Subscription...
date: 2019-10-4
path: mistakes
---

## The Discovery

It was a crisp, autumn work-from-home kind of Friday. I woke up a little later than usual, due to my toddler son's rough night of sleep. Nonetheless, we had some breakfast, got ready for the day and I went downstairs to my office and cracked open my laptop to begin another wonderful day of writing code...

The afternoon prior, I had deployed an Azure Function that would be running a [Cloud Custodian]() policy to clean up our Azure Subscription. We had a lot of test resources that needed to be removed, so I asked our team to tag any resource groups with `CreatedBy` and their email address for notifications. They all looked through the subscription and tagged their resource groups accordingly. I told them that early Friday morning, I would run a scrub of all resource groups and delete any that did not have owners, and that was the policy that was deployed... or so I thought

To my utter shock and horror, I opened my Azure portal that morning to discover _**one**_ resource group... `cloud-custodian`.

I had also been testing a policy that would send a weekly email to each member of our team with a summary of their Azure resource groups. This would give them a chance to also monitor for things they didn't need anymore. So as to not spam my team in my testing of the policy, I used the tag `CreatorEmail` and placed in on my `cloud-custodian` resource group

## Takeaways