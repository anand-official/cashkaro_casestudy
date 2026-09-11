# Original CashKaro APM Assignment — text extraction

> Source: user-provided assignment PDF. The PDF itself is authoritative; this text file is provided for agent/search convenience.

<PARSED TEXT FOR PAGE: 1 / 3>
Making CashKaro part of the shopping habit
This assignment is meant to understand how you think about a product problem and how you turn
that thinking into something worth building. We care equally about both sides.
Due in 3 days (72 hours)  · 50% problem space, 50% solution space
AI encouraged, transcript required
On AI. We encourage you to use AI (ChatGPT, Claude, Gemini, Perplexity, coding tools). Please
include the complete transcript of your AI interactions: what you asked, what you challenged,
what you rejected, and how your thinking changed. AI has made generating a respectable-looking
solution surprisingly cheap. Taste is your moat. Don't let AI dilute it.
01 The problem
CashKaro earns when it becomes part of a shopping journey. For an existing user, every eligible
purchase made directly on a retailer is a missed opportunity: the existing user misses cashback,
and CashKaro misses the affiliate transaction.
The idea is simple. Anyone who is already an existing user of CashKaro should be shopping
more through CashKaro. That is where the opportunity is.
There is one outcome we care about:
Tracked orders per existing user per quarter, on a fixed cohort.
The cohort is fixed so that growth from new user acquisition does not flatter the number.
Whatever you choose to build, define the success metric for it explicitly and show how it
ladders up to this outcome. A metric that only moves your feature, and not this outcome, is not
a success metric.
In our user conversations, however, we repeatedly see that existing users, including ones who
have transacted with us before, still make eligible purchases without going through CashKaro.
Why this happens is deliberately left open: forgetfulness, friction, habit, perceived value, trust,
uncertainty around eligibility, timing, or something else entirely.
Your first job is to understand which part of this problem is actually worth solving, for
whom, and why.
02 How we want you to approach it
Frame the problem. Define what you believe the underlying problem actually is. You do not
have to accept the framing above: challenge assumptions, narrow the segment, or reframe it.
Back it with evidence. Research, competitor products, behavioural reasoning, your own
analysis of CashKaro. Bring whatever evidence is needed to establish that this is, or is not, a
problem worth solving.
Explore the solution space. Don't fall in love with the first feature that comes to mind. More
ideas do not automatically mean better product thinking: ten AI-generated features are still
ten AI-generated features.
Page 1 of 3

<PARSED TEXT FOR PAGE: 2 / 3>
Prioritize. Tell us what you would actually build and, equally importantly, what you would not.
Weigh impact, feasibility, effort, risks and trade-offs. The interesting part isn't telling us
all five ideas are great. It is choosing.
Build the chosen solution. How the experience works, the key flows, what ships first versus
later, how you would measure it, and at a high level how the technology might work.
Wireframes, prototypes or demos where useful.
Think about GTM. Who you would launch to first, how they discover and activate it, your
initial rollout, and what would make you scale, change or kill it. Not a 20-slide marketing
strategy.
03 How we will evaluate this
50% · Understanding the right problem
Problem framing and user understanding
Research and evidence
Segmentation and business understanding
Assumptions made explicit
Breadth of solution exploration
Prioritization and trade-offs
Why you chose this problem over the others
50% · Making the right product decision
Product judgement
UX and execution
Technical feasibility
GTM
Measurement
Your submission should broadly reflect this balance too. Don't spend two pages understanding the
problem and the next fifteen polishing the solution, and don't spend fifteen pages researching
only to give us a feature in two. We want to see both.
04 Some directions we have thought about
Read second. Form your own view first, then read this. What follows is our current thinking. Tell
us where it is wrong. These are starting points, not multiple-choice answers: build on one,
combine them, reject them, or come back with something we haven't considered. Before
choosing the feature, justify the problem. Before building it, justify why you picked it
over the alternatives.
01 · Home-screen widget / quick access
The user remembers CashKaro, but opening the app and restarting the journey feels like
unnecessary effort. A one-tap entry point could reduce it.
What we are not looking for: a widget design. Tell us whether one-tap access actually changes
buying behaviour, which guardrail metrics you would watch since app opens can rise while
transactions do not, and what else might break.
Page 2 of 3

<PARSED TEXT FOR PAGE: 3 / 3>
02 · Browser extension
The user has already started shopping and CashKaro is no longer top of mind. An extension could
surface us at the moment the intent exists.
What we are not looking for: a popup mock. Estimate how much general shopping behaviour in
India happens on desktop and the proxy you used to arrive at that number. In a mobile-first
country, is that enough to move the needle? Then the backend: how the extension knows a site is
eligible, and how that mapping stays current.
03 · Contextual shopping reminders
We depend heavily on users remembering us at exactly the right moment. The problem is not
sending another push notification. It is figuring out when we have earned the right to send one.
What we are not looking for: notification copy. Show a small prototype: which segment, which
trigger, which reminder type, and the intent signal behind it, given we only see click-outs.
04 · Share / deep-link back to CashKaro
The user may remember us only after finding the product or building a cart on a retailer, and
starting again becomes the friction. Could they share that link with CashKaro and continue from
there with cashback active?
What we are not looking for: a share-sheet mock. Think about how much of their context can
actually be preserved, how attribution works, and where platform or technical limitations get in
the way.
05 · Shopping agent / discovery assistant
Perhaps we enter the journey too late. What if CashKaro became useful during discovery itself: "I
need running shoes under ₹5,000", compare the effective value after cashback, guide the
purchase? The question isn't whether we can put an AI chat box in the app. It is whether we can
create enough value during discovery that users choose to begin with us.
What we are not looking for: an AI chat box. Think about how we own discovery and show the
architecture: whether an agent is even needed, where product and price data comes from, the
tool calls, RAG, and the latency and cost per query.
06 · Take your own direction
Treat the five directions above as hints, not as limits. Beyond the problem itself there is no
restriction on the solution space. If your research points somewhere else, go there. Bonus if you
land it well.
What we are not looking for: a variation on the five above with a new name. If you go your own
way the bar is higher, not lower. Show us the evidence that led you there, why the directions
above are the wrong bets, and the same depth on flows, feasibility and measurement.
05 Your submission
There is no mandatory template. Structure it in the way that best communicates your
thinking, with roughly equal depth on problem and solution.
If your solution needs capabilities CashKaro does not have, propose them, and explain how
you would realistically enable them rather than assuming a convenient API already exists.
P.S. As students, you may not have the same volume of AI usage available to you that we do at
CashKaro. Feel free to use accessible tools such as Antigravity, DeepSeek or OpenCode. The tool
matters far less than what you do with it.
Best of luck. And may the Force be with you.
Page 3 of 3