# **CoSN Screentime & Mindfulness Coach — Landing Page Shell Specs**

## **Project Goal**

Build a polished, classy, CoSN-style landing page prototype for a future agentic tool called the **CoSN Screentime & Mindfulness Coach**.

This is a **front-end shell only for now**. The API/agent connection should be intentionally left blank, stubbed, or mocked. The goal is to demonstrate the vision clearly enough that CoSN could later fund a full build with a real AI backend connected to CoSN research, resources, and district-provided context.

The page should feel like a premium CoSN resource: trustworthy, modern, calm, research-backed, and leadership-oriented. It should avoid looking like a generic chatbot, startup SaaS toy, or flashy AI gimmick.

## **Core Pitch**

The page should communicate this idea:

“We do not know your local context like you do. But CoSN can bring research, frameworks, and national guidance together with your district’s knowledge to help you create a practical action plan. Together, we can support students in developing healthy, intentional technology habits and help leaders reshape policy when confronted with screen time limits, bans, or public concern.”

## **Product Name Options**

Use this as the main title unless changed later:

**CoSN Digital Mindfulness Coach**

Possible subtitle:

**Turn screen time concerns into intentional technology action plans.**

Alternative subtitle:

**A research-informed planning assistant for purposeful, balanced, and responsible technology use in schools.**

## **Design Direction**

The design should be classy and institutional, with a modern education-leadership feel.

Use visual inspiration from CoSN’s “Setting Conditions for Success” resource:

* Deep blue foundation  
* Teal/cyan gradients  
* Clean white space  
* Bold typography  
* Subtle orbit lines, arcs, or connected-node motifs  
* Small geometric accents  
* Calm, professional visual energy

Avoid:

* Cartoon robots  
* Neon “AI” clichés  
* Overly playful gradients  
* Stock photos of smiling students with laptops  
* Generic chatbot bubbles as the main brand element  
* Anything that feels like a commercial SaaS landing page more than a CoSN leadership resource

## **Suggested Color Palette**

Use approximate values; adjust for accessibility and contrast.

Primary:

* Deep CoSN Blue: `#003B73`  
* Navy: `#062B49`  
* Bright Blue: `#0077B6`  
* Cyan/Teal: `#23C7D9`  
* Mint Accent: `#A7F3D0`

Supporting:

* White: `#FFFFFF`  
* Off White: `#F7FAFC`  
* Light Blue Gray: `#E6F0F7`  
* Slate Text: `#243447`  
* Muted Gray: `#64748B`

Accent:

* Warm Coral/Orange: `#FF8A5B`  
  Use sparingly for small squares, highlights, or call-to-action accents.

## **Typography**

Use a clean, professional sans-serif stack.

Recommended:

```css
font-family: Inter, Avenir, "Segoe UI", Roboto, Arial, sans-serif;
```

Headlines should be bold, confident, and spacious.

Avoid condensed novelty fonts unless used very sparingly. The page should feel current and executive-ready.

## **Page Structure**

### **1\. Hero Section**

Purpose: Immediately communicate the product vision and value.

Layout:

* Full-width hero with deep blue to teal gradient background.  
* Subtle orbit lines or abstract curved paths in the background.  
* Small geometric accent squares inspired by the exemplar PDF.  
* Left side: headline, subheadline, CTA buttons.  
* Right side: polished mock interface card showing the future tool.

Hero headline:

**Help districts move from screen time debate to intentional technology use.**

Hero subheadline:

**The CoSN Digital Mindfulness Coach is a future-facing planning tool that combines local district context with CoSN research and resources to help teachers and leaders evaluate technology use, protect essential analog learning, and build practical action plans.**

Primary CTA button:  
**Preview the Coach**

Secondary CTA button:  
**Explore the Framework**

Small credibility line under buttons:  
**Prototype shell — AI connection intentionally stubbed for now.**

### **2\. Mock Tool Panel in Hero**

Create a beautiful “product preview” card.

Card title:  
**Digital Mindfulness Review**

Inside the card:

* Textarea placeholder:  
  **Paste a lesson, policy question, or screen time concern…**  
* Small dropdown or toggle:  
  * Teacher Lesson Review  
  * Leader Policy Support  
  * Family Communication  
  * Professional Learning Plan  
* Button:  
  **Generate CoSN-Aligned Feedback**

Since API is not connected, button should trigger a polished mock response or disabled/demo state.

On click, show a mock output panel:

* Purpose: Developing  
* Learning Value: Moderate  
* Analog Balance: Needs attention  
* Safety & Accessibility: Verify locally  
* Suggested Next Step: Add student reflection and identify protected no-screen moments.

Important: The page should make it clear in code comments that this is a placeholder and no real API call is currently happening.

### **3\. “Built for Local Context” Section**

Purpose: Center the humility and partnership message.

Headline:

**CoSN brings the framework. Your district brings the context.**

Body copy:

**No national tool can fully understand a district’s community, policies, staffing, student needs, technology ecosystem, or local pressures. This coach is designed to combine CoSN’s research-informed guidance with the expertise of local educators and leaders. The result is not a generic answer; it is a starting point for better local decisions.**

Add three cards:

Card 1:  
**Local Knowledge**  
District goals, community concerns, board expectations, instructional priorities, and student needs.

Card 2:  
**CoSN Guidance**  
Responsible use, digital citizenship, student safety, accessibility, AI readiness, and balanced technology use.

Card 3:  
**Action Planning**  
Practical next steps for teachers, leaders, families, and policy teams.

### **4\. “What the Coach Could Help With” Section**

Headline:

**Designed for the decisions schools are actually facing**

Use a clean 2x3 grid of cards.

Cards:

1. **Review a Lesson**  
   Evaluate whether technology use is purposeful, active, balanced, accessible, and safe.  
2. **Reduce Low-Value Screen Use**  
   Identify passive or disconnected uses and suggest stronger instructional alternatives.  
3. **Protect Analog Learning**  
   Name where discussion, handwriting, books, manipulatives, labs, movement, or reflection may be the better mode.  
4. **Support Teachers**  
   Provide practical revision suggestions without replacing teacher judgment.  
5. **Guide Leaders**  
   Help leaders respond to proposed screen time limits or bans with balanced, actionable alternatives.  
6. **Communicate with Families**  
   Create clear language that explains how technology supports learning without dismissing parent concerns.

### **5\. “The Framework” Section**

Purpose: Make the thinking visible and grounded.

Headline:

**A simple framework for mindful technology decisions**

Display four vertical or horizontal framework steps:

1. **Purpose**  
   What learning goal does this support?  
2. **Learning Value**  
   Are students consuming, practicing, creating, collaborating, receiving support, or preparing for future work?  
3. **Safety**  
   Is the tool approved, accessible, secure, age-appropriate, and privacy-conscious?  
4. **Reflection**  
   Did the technology deepen learning, or would another mode have worked better?

Add a note:

**The goal is not more technology or less technology. The goal is better decisions.**

### **6\. “Teacher \+ Leader Modes” Section**

Purpose: Tease future agentic capability.

Create split-panel layout.

Left panel:  
**For Teachers**

* Paste a lesson or activity  
* Receive a digital mindfulness snapshot  
* Get revision suggestions  
* Add analog balance  
* Create student-facing rationale

Right panel:  
**For Leaders**

* Describe a policy challenge  
* Review risks of blunt limits or bans  
* Generate action steps  
* Draft family or board language  
* Plan professional learning supports

Add small note:

**Future versions could connect to CoSN resources, district policy documents, approved tool lists, and local implementation plans.**

### **7\. “Prototype Today, Platform Tomorrow” Section**

Purpose: Be transparent about current scope and future funding.

Headline:

**A lightweight prototype now. A scalable CoSN tool later.**

Body copy:

**This page is a front-end concept shell. The AI/API layer is intentionally left blank for this prototype. The next step would be to connect the interface to a CoSN-approved AI workflow that draws from CoSN resources, district-provided context, and clear privacy and governance expectations.**

Add future roadmap cards:

1. **Phase 1: Concept Shell**  
   Landing page, interface mockup, sample outputs, stakeholder feedback.  
2. **Phase 2: Guided GPT Prototype**  
   Test the quality of CoSN-aligned feedback using curated source materials.  
3. **Phase 3: Funded Agentic Tool**  
   Connect secure AI workflows, district context uploads, resource retrieval, and exportable action plans.  
4. **Phase 4: CoSN Member Resource**  
   Offer districts a practical tool for policy response, professional learning, and instructional planning.

### **8\. Sample Output Section**

Purpose: Make the tool feel real.

Headline:

**Example: From basic screen use to mindful learning design**

Before card:  
**Original Activity**  
“Students watch a 35-minute video and answer 10 multiple-choice questions.”

After card:  
**Coach Feedback**

* Purpose is present but could be more explicit.  
* Learning value is mostly passive.  
* Add pauses for discussion, sketching, or partner explanation.  
* Use the form as a brief check for understanding, not the core learning experience.  
* Include one student reflection: “How did the video help your learning, and when did discussion or drawing help more?”

Suggested Revision:  
“Students watch two short video segments, pause to sketch a concept model, discuss with a partner, and complete a brief exit ticket explaining their thinking.”

### **9\. Call to Action Section**

Headline:

**Help shape what responsible, balanced technology support could look like.**

Body copy:

**This prototype is intended to start a conversation. With CoSN support, the Digital Mindfulness Coach could become a practical tool for districts navigating screen time pressure, policy revision, teacher support, AI readiness, and student digital citizenship.**

CTA button:  
**Start Prototype Review**

Secondary:  
**View Sample Action Plan**

Both can be stubbed.

### **10\. Footer**

Footer should feel institutional.

Include:

* CoSN Digital Mindfulness Coach  
* Prototype shell for discussion purposes  
* Built around responsible, balanced, student-centered technology use  
* Optional placeholder for partner logos  
* Small text:  
  **API not connected in this prototype. Future implementation would require CoSN-approved governance, privacy review, and funded development.**

## **Interaction Requirements**

Minimum interactions for prototype:

1. Textarea accepts input.  
2. Dropdown lets user select mode.  
3. Button produces mock output.  
4. Smooth scroll navigation.  
5. Optional tabs for Teacher / Leader.  
6. Optional “copy output” button for mock response.

No real API calls.

Add code comments where the future API call would go:

```javascript
// FUTURE API INTEGRATION:
// Send user input, selected mode, and district context to CoSN-approved AI backend.
// Backend should retrieve relevant CoSN resources, apply the Digital Mindfulness framework,
// and return structured feedback. This is intentionally stubbed for the prototype.
```

## **Suggested Mock Data**

Use this as the default example in the textarea:

“Students will spend 35 minutes watching a video about ecosystems on Chromebooks and then answer 10 multiple-choice questions in Google Forms.”

Mock response:

```json
{
    "purpose": "Developing",
    "learningValue": "Low to Moderate",
    "screenUseType": "Passive consumption + basic assessment",
    "analogBalance": "Needs attention",
    "safetyAccessibility": "Verify locally",
    "summary": "The activity is connected to science content, but most of the student experience is passive. Consider chunking the video, adding discussion, and having students create or revise an ecosystem model.",
    "suggestedRevision": "Students watch two short video segments, pause to sketch an ecosystem model, compare with a partner, and complete a brief exit ticket explaining how one change affects the ecosystem."
}
```

## **Technical Requirements**

The coding agent should build this as a static front-end prototype.

Acceptable stack:

* Plain HTML/CSS/JS  
* React/Vite  
* Next.js static page  
* Tailwind CSS if desired

Preferred if fast:

* React \+ Vite \+ Tailwind  
* Component-based sections  
* Easy to later connect to an API

No backend required.

No authentication.

No database.

No external paid services.

No real OpenAI/ChatGPT/Claude/Gemini API connection yet.

The final project should run locally with:

```shell
npm install
npm run dev
```

Or, if plain HTML/CSS/JS:

```shell
open index.html
```

## **Accessibility Requirements**

* Strong color contrast  
* Keyboard-accessible buttons and controls  
* Clear focus states  
* Semantic HTML  
* Responsive design  
* Text should remain readable on mobile  
* Do not rely only on color to communicate status  
* Include accessible labels for textarea, dropdown, and buttons

## **Visual Quality Bar**

This should look like something CoSN might proudly preview at a task force meeting.

It should feel:

* Trustworthy  
* Research-informed  
* Calm  
* Modern  
* Elegant  
* Executive-ready  
* Practical  
* Not gimmicky

The design should “blow past” a basic PDF-style resource by making the guidance feel interactive, alive, and immediately usable.

## **Copy Bank**

Use these phrases throughout the page as appropriate:

* “Move from screen time debate to intentional technology use.”  
* “The goal is not more screens or fewer screens. The goal is better decisions.”  
* “CoSN brings the framework. Your district brings the context.”  
* “Designed to support teacher judgment, not replace it.”  
* “Reduce low-value screen use while protecting high-value learning.”  
* “Protect essential analog learning.”  
* “Support students in developing purpose, balance, safety, and judgment.”  
* “Respond to limits and bans with a stronger action plan.”  
* “A prototype today. A scalable CoSN resource tomorrow.”

## **Deliverables**

The coding agent should provide:

1. A working landing page prototype.  
2. Clean, commented source code.  
3. Stubbed mock output behavior.  
4. Clear placeholder for future API integration.  
5. Responsive design.  
6. Brief README explaining:  
   * How to run locally  
   * Where the mock response is stored  
   * Where future API integration should be added  
   * What is intentionally not built yet

## **README Note To Include**

This prototype does not connect to an AI model or external API. It is intended to demonstrate the user experience, visual direction, and possible interaction model for a future CoSN-funded Digital Mindfulness Coach. A production version would require approved AI infrastructure, source retrieval, privacy review, authentication decisions, governance policies, and CoSN-approved content curation.

