/*
  Mock feedback data for the prototype.

  This file is the ONLY source of the "Coach" output. There is no AI model and no
  network request anywhere in this project — the MockToolPanel simply looks up the
  object that matches the selected mode and renders it. Swapping these objects for a
  real API response is where a funded build would begin (see the FUTURE API INTEGRATION
  comment in src/components/MockToolPanel.jsx).

  `level` values map to StatusPill tones: 'good' | 'moderate' | 'attention' | 'verify'.
  Tone is conveyed by icon + label text as well as color, so status never relies on
  color alone (accessibility requirement).
*/

// Default text shown in the textarea — a leader policy concern (matches the default mode).
export const DEFAULT_INPUT =
  'Our school board is considering a districtwide limit on student screen time in response to community concern. How should we respond with a balanced, research-informed plan instead of a blunt ban?'

// Order matters: the first mode is the default selection. Leaders are the primary audience,
// so Leader Policy Support leads.
export const MODES = [
  { value: 'leader-policy', label: 'Leader Policy Support' },
  { value: 'teacher-lesson', label: 'Teacher Lesson Review' },
  { value: 'family-comm', label: 'Family Communication' },
  { value: 'pl-plan', label: 'Professional Learning Plan' },
]

// Mock structured feedback, keyed by mode. Each row renders as a labeled StatusPill.
export const MOCK_RESPONSES = {
  'teacher-lesson': {
    rows: [
      { label: 'Purpose', value: 'Developing', level: 'moderate' },
      { label: 'Learning Value', value: 'Low to Moderate', level: 'attention' },
      { label: 'Screen Use Type', value: 'Passive consumption + basic assessment', level: 'attention' },
      { label: 'Analog Balance', value: 'Needs attention', level: 'attention' },
      { label: 'Safety & Accessibility', value: 'Verify locally', level: 'verify' },
    ],
    summary:
      'The activity is connected to science content, but most of the student experience is passive. Consider chunking the video, adding discussion, and having students create or revise an ecosystem model.',
    suggestedNextStep:
      'Add a student reflection and identify protected no-screen moments.',
    suggestedRevision:
      'Students watch two short video segments, pause to sketch an ecosystem model, compare with a partner, and complete a brief exit ticket explaining how one change affects the ecosystem.',
  },

  'leader-policy': {
    rows: [
      { label: 'Concern Type', value: 'Screen time limits / proposed ban', level: 'moderate' },
      { label: 'Blunt-Limit Risk', value: 'High — may remove high-value uses', level: 'attention' },
      { label: 'Instructional Impact', value: 'Mixed across grade bands', level: 'moderate' },
      { label: 'Stakeholder Alignment', value: 'Needs a shared framework', level: 'attention' },
      { label: 'Governance & Privacy', value: 'Verify locally', level: 'verify' },
    ],
    summary:
      'A blanket limit is simple to communicate but tends to cut purposeful, high-value technology use alongside the low-value use it targets. A clearer path is to define what "good" looks like and reduce low-value screen time while protecting high-value learning.',
    suggestedNextStep:
      'Replace a blunt cap with a purpose-based use agreement plus a small cross-role review team.',
    suggestedRevision:
      'Draft a one-page "intentional use" position that names protected analog time, sets criteria for purposeful technology use, and offers families and the board concrete examples rather than a single number.',
  },

  'family-comm': {
    rows: [
      { label: 'Tone', value: 'Reassuring + transparent', level: 'good' },
      { label: 'Clarity for Families', value: 'Strong', level: 'good' },
      { label: 'Addresses Concern', value: 'Yes — names balance directly', level: 'good' },
      { label: 'Analog Balance', value: 'Explicitly protected', level: 'good' },
      { label: 'Accessibility', value: 'Verify reading level locally', level: 'verify' },
    ],
    summary:
      'Families want to know their concern is heard and that screens are used on purpose, not by default. Clear, specific language that names both the learning goal and the protected analog time builds trust without dismissing the worry.',
    suggestedNextStep:
      'Share a short, plain-language note that pairs each technology use with its learning purpose.',
    suggestedRevision:
      '"We use devices when they help students create, practice, or get feedback — and we protect time for discussion, reading, and hands-on work every day. Here is how that looks in your child\'s classroom this month."',
  },

  'pl-plan': {
    rows: [
      { label: 'Focus', value: 'Mindful technology decisions', level: 'good' },
      { label: 'Teacher Support', value: 'Practical, judgment-respecting', level: 'good' },
      { label: 'Coverage', value: 'Purpose · Value · Safety · Reflection', level: 'good' },
      { label: 'Analog Balance', value: 'Built into the model', level: 'good' },
      { label: 'Measurement', value: 'Verify local indicators', level: 'verify' },
    ],
    summary:
      'A strong professional learning plan helps teachers ask better questions about technology use rather than handing them a checklist. Anchor sessions in the four-part framework and use real lessons teachers bring.',
    suggestedNextStep:
      'Run a short cycle where teachers review one of their own lessons with the framework.',
    suggestedRevision:
      'Three 45-minute sessions: (1) the Purpose / Learning Value / Safety / Reflection framework, (2) teachers revise a real lesson for analog balance, (3) share revisions and agree on a few school-wide "protected analog" moments.',
  },
}
