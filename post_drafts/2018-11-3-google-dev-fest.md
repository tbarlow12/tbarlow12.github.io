# Google Dev Fest 2018

## To-Dos
- [ ] [Join GDG](meetup.com/pro/gdg)


## Notes
- Study Jams?
- A little unorganized, rough transitions between events, etc.
  

### Keynote: Actions on Google - Daniel Myers
- Extends google assistant to do things via conversation
- (I need to work on my presentation skills)
- Major shift in computing every 10 years
    - Mainframe -> Desktop -> Internet -> Mobile -> AI/Assistants
- Google assistant + actions + devices w/ assistant built in
- Assistant uses speech to text nlp knowledge graph ml ranking user profile to detect which action to invoke
- Regex just isn't sufficient to parse the text ("It's kind of cold outside, so I'd like something to warm me up like a hot soup)
- Dialog Flow
    - Intent matching
        - Match and categorize utterances to an intent
    - Entity extraction
        - Identify key words and phrases spoken by user
- Can you create a dialog flow with a file for source control? Or is it all GUI? Is there an export?
- System Entities (Time, Speed, Weight, Age, Currency, etc.)
- Custom entities (milk type, protein, etc.)
- Specify follow-up questions if user doesn't specify certain values
- Fulfillment
    - Where you actually write your code
    - Big Json document for the conversations, including original text and what the system derived
- Integrations with almost all major chat services
- github.com/actions-on-google/actions-on-google-nodejs - easiest way to interact with actions on google
- Guide the user (suggestion tips)
- Display basic cards if a screen is available
- Lists, carousels and browsing carousels for selection
- Ask for information (like location)
- Account linking
    - developers.google.com/actions/identity
- Transact with the user
    - Use your payment processor
    - GPay
- Smart Home Device Integration
- Sample Actions
    - Use it as a foundation and expand on it
- Actions on Google Community Program
    - developers.google.com/actions/community


## Mobile Machine Learning (Tensorflow) - Laurence Moroney
- Automatic closed captioning
    - No punctuation at all
- A lot of people afraid of AI progress
- Replacing AI with Demonic Possession ad agency in NY
- Gartner Hype Cycle
    - Tech Trigger -> Inflated expectations -> Trough of disillusionment -> Enlightenment -> Productivity
- If we can "tunnel through the hype" to disillusionment, we can actually progress towards enlightenment
- On-ramp to artificial intelligence is Machine Learning
- Deep learning is Machine Learning using neural networks
- Traditional Programming
    - Rules + Data -> Program -> answers
- ML
    - Answers + Data -> Program -> Rules
- Rules become infeasibly difficult to manage (walk, run, bike, golf)
- Neural network - horribly named technology
    - functions that pass their output to other functions
- Predictions
    - Probability that data is associated with a rule
- Code
    - keras


## Federated Machine Learning - Emily Glanz
- FL, not FML
- Hype Video - Making every phone smarter with federated machine learning
- learn from other devices while keeping your data private
- Privacy is the default, allows device to learn from other users' usage patterns
- What's a device
    - Phone - Average adult is on phone for 10 hours a day in USA
    - IoT/Edge Devices
    - Robots - actively interact/learn from devices


## Growing with Google
- Scholarship program
- Training, tools & events
- Google Developers Training
- Google Developer Scholarship Program
- 