"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import styles from "./intake.module.css";

// Review-only: component memory is the only place answers exist. Never add
// storage, analytics, server actions, API requests, or form submission here.
const services = [
  { group: "Skin", items: ["Microneedling", "Mini Facial", "Customized Facials", "Reiki Facial", "Dermaplaning", "Chemical Peel"] },
  { group: "Brow & Lash", items: ["Eyelash Lift & Tint", "Eyebrow Lamination"] },
  { group: "Waxing", items: ["Eyebrow Wax", "Lip", "Nostrils", "Facial Wax", "Under Arms"] },
  { group: "Healing", items: ["Reiki Body Healing"] },
];
const steps = ["Your visit", "Skin & goals", "Care details", "Review"];
const goalOptions = ["Hydration", "Smoother texture", "A brighter-looking complexion", "Breakouts", "Fine lines", "Relaxation", "Brow or lash definition", "Hair removal", "Something else"];
const answerOptions = ["Yes", "No", "Prefer to discuss with Michelle"];
const careQuestions = [
  { key: "sensitivity", title: "Any allergies or sensitivities you would like Michelle to know about?", hint: "For example, a reaction to a skincare product, fragrance, adhesive, or wax.", followup: "What would you like Michelle to know?" },
  { key: "products", title: "Any medications or active skincare products you would like to discuss?", hint: "Only information relevant to your planned treatment would belong in the final form.", followup: "What would you like to discuss?" },
  { key: "treatments", title: "Any recent skin treatments you would like to mention?", hint: "For example, a peel, waxing, microneedling, or laser treatment.", followup: "Which treatment, and approximately when?" },
] as const;
type CareKey = (typeof careQuestions)[number]["key"];
type Answers = {
  name: string; email: string; phone: string; date: string; service: string;
  goals: string[]; otherGoal: string; routine: string; notes: string;
  sensitivity: string; sensitivityDetail: string;
  products: string; productsDetail: string;
  treatments: string; treatmentsDetail: string;
};
const emptyAnswers: Answers = {
  name: "", email: "", phone: "", date: "", service: "", goals: [], otherGoal: "", routine: "", notes: "",
  sensitivity: "", sensitivityDetail: "", products: "", productsDetail: "", treatments: "", treatmentsDetail: "",
};
const sampleAnswers: Answers = {
  ...emptyAnswers, name: "Alex Example", email: "alex@example.com", phone: "202-555-0123",
  service: "Customized Facials", goals: ["Hydration", "Relaxation"],
  routine: "Sample answer: gentle cleanser, moisturizer, and sunscreen.",
  sensitivity: "Prefer to discuss with Michelle", products: "Prefer to discuss with Michelle", treatments: "No",
  notes: "Sample answer: I would love a calm, relaxing visit.",
};
type Errors = Partial<Record<"name" | "email" | "service", string>>;

function Arrow({ back = false }: { back?: boolean }) {
  return <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d={back ? "M19 12H5m7 7-7-7 7-7" : "M5 12h14m-7-7 7 7-7 7"} /></svg>;
}
function Leaf() {
  return <svg className={styles.leaf} aria-hidden="true" viewBox="0 0 100 140" fill="none"><path d="M43 130C46 91 52 57 69 14M51 83C22 80 14 60 17 40c22 4 36 21 34 43ZM59 57C80 55 90 39 90 22 72 24 60 40 59 57ZM45 111C20 105 10 91 9 74c20 2 35 16 36 37Z" stroke="currentColor" strokeWidth="1.2" /></svg>;
}
function display(value: string) { return value.trim() || "Not provided"; }
function displayDate(value: string) {
  if (!value) return "Not provided";
  return new Date(`${value}T12:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default function IntakePreview() {
  const [answers, setAnswers] = useState<Answers>({ ...emptyAnswers });
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Errors>({});
  const [complete, setComplete] = useState(false);
  const [sampleNotice, setSampleNotice] = useState("");
  const [editing, setEditing] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const previousStep = useRef(0);

  useEffect(() => {
    if (previousStep.current !== step || complete) {
      heading.current?.focus();
      previousStep.current = step;
    }
  }, [step, complete]);

  // Clear component memory if the page enters the browser's back/forward cache.
  useEffect(() => {
    const clear = () => { setAnswers({ ...emptyAnswers }); setStep(0); setComplete(false); setErrors({}); setEditing(false); setSampleNotice(""); };
    window.addEventListener("pagehide", clear);
    return () => window.removeEventListener("pagehide", clear);
  }, []);

  function update<K extends keyof Answers>(key: K, value: Answers[K]) {
    setAnswers(old => ({ ...old, [key]: value }));
    if (key === "name" || key === "email" || key === "service") setErrors(old => ({ ...old, [key]: undefined }));
    setSampleNotice("");
  }
  function chooseCare(key: CareKey, value: string) {
    setAnswers(old => ({ ...old, [key]: value, [`${key}Detail`]: value === "Yes" ? old[`${key}Detail`] : "" }));
  }
  function validate() {
    const nextErrors: Errors = {};
    if (!answers.name.trim()) nextErrors.name = "Enter a sample name to continue.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.email.trim())) nextErrors.email = "Enter a sample email, such as alex@example.com.";
    if (!answers.service) nextErrors.service = "Choose a service, or select ‘Not sure yet’.";
    setErrors(nextErrors);
    const first = Object.keys(nextErrors)[0];
    if (first) { setStep(0); requestAnimationFrame(() => document.getElementById(`intake-${first}`)?.focus()); }
    return !first;
  }
  function next(event: FormEvent) {
    event.preventDefault();
    if ((step === 0 || step === 3) && !validate()) return;
    if (step === 3) { setComplete(true); return; }
    if (editing) { setStep(3); setEditing(false); return; }
    setStep(current => Math.min(3, current + 1));
  }
  function edit(section: number) { setEditing(true); setComplete(false); setStep(section); }
  function reset() {
    setAnswers({ ...emptyAnswers }); setStep(0); setErrors({}); setComplete(false); setEditing(false);
    setSampleNotice("Preview cleared. All answers have been removed.");
    requestAnimationFrame(() => document.getElementById("intake-name")?.focus());
  }
  function loadSample() {
    setAnswers({ ...sampleAnswers, goals: [...sampleAnswers.goals] }); setErrors({});
    setSampleNotice("Fictional sample answers added. You can change any of them.");
  }
  const titles = ["Let’s get to know you.", "What brings you in?", "A little extra care.", "One last look."];
  const descriptions = [
    "A few simple details to make your time with Michelle feel personal, from the very beginning.",
    "Share what you’re hoping for. There is no perfect answer, and every question here is optional.",
    "A place for treatment-relevant details you may want to talk through with Michelle.",
    "See how your answers will look before finishing the demo. You can still change anything.",
  ];

  return (
    <main className={styles.preview}>
      <div className={styles.demoBanner} role="note">
        <span className={styles.demoPill}>REVIEW PREVIEW</span>
        <span><strong>Demo only. Use sample information.</strong> Nothing is sent or saved.</span>
      </div>
      <div className={styles.shell}>
        <aside className={styles.intro}>
          <div className={styles.eyebrow}><span /> BEFORE YOUR VISIT</div>
          <h1>A little about you.<br /><em>A more thoughtful<br className={styles.desktopBreak} /> appointment.</em></h1>
          <p className={styles.introText}>Personalized care begins with a conversation. This is a first look at a gentler way to prepare for your visit.</p>
          <div className={styles.introRule} />
          <ol className={styles.steps} aria-label="Questionnaire progress">
            {steps.map((label, index) => <li key={label} className={index === step && !complete ? styles.activeStep : index < step || complete ? styles.finishedStep : ""} aria-current={index === step && !complete ? "step" : undefined}>
              <span className={styles.stepNumber}>{index < step || complete ? <span aria-hidden="true">✓</span> : `0${index + 1}`}</span>
              <span>{label}</span>
              {index === step && !complete && <span className={styles.currentDot} aria-hidden="true" />}
            </li>)}
          </ol>
          <div className={styles.reviewNote}><Leaf /><p>Made for Michelle.<br /><span>Questions and wording are a draft for her review.</span></p></div>
        </aside>

        <section className={styles.card} aria-labelledby="intake-heading">
          {complete ? <div className={styles.complete}>
            <div className={styles.completeIcon} aria-hidden="true">✓</div>
            <p className={styles.eyebrow}>END OF DEMO</p>
            <h2 ref={heading} tabIndex={-1} id="intake-heading">Preview complete.</h2>
            <p>No questionnaire was submitted, no appointment was booked, and no answers were saved.</p>
            <div className={styles.launchNote}><strong>Before this can go live</strong><p>Michelle needs to approve the questions, and a private intake service needs to be selected and configured for real client information.</p></div>
            <button type="button" className={styles.primaryButton} onClick={() => { setComplete(false); setStep(3); requestAnimationFrame(() => heading.current?.focus()); }}>Return to review <Arrow back /></button>
            <button type="button" className={styles.textButton} onClick={reset}>Clear answers &amp; start again</button>
          </div> : <>
            <div className={styles.cardTop}><span>CLIENT INTAKE · DRAFT</span><span>STEP {step + 1} OF 4</span></div>
            <div className={styles.progressTrack} role="progressbar" aria-label="Intake preview progress" aria-valuemin={1} aria-valuemax={4} aria-valuenow={step + 1} aria-valuetext={`Step ${step + 1} of 4: ${steps[step]}`}><span style={{ width: `${(step + 1) * 25}%` }} /></div>
            <div className={styles.formBody}>
              <h2 ref={heading} tabIndex={-1} id="intake-heading">{titles[step]}</h2>
              <p className={styles.description}>{descriptions[step]}</p>
              <form onSubmit={next} noValidate autoComplete="off">
                {step === 0 && <>
                  <div className={styles.sampleRow}><span>Just exploring the layout?</span><button className={styles.sampleButton} type="button" onClick={loadSample}>Use sample answers <Arrow /></button></div>
                  <p className={styles.requiredNote}>* Required for this demo. Please use fictional details.</p>
                  <div className={styles.field}><label htmlFor="intake-name">Full name <span aria-hidden="true">*</span></label><input id="intake-name" value={answers.name} onChange={e => update("name", e.target.value)} placeholder="Alex Example" maxLength={100} required autoComplete="off" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />{errors.name && <p id="name-error" role="alert" className={styles.error}>{errors.name}</p>}</div>
                  <div className={styles.fieldGrid}>
                    <div className={styles.field}><label htmlFor="intake-email">Email <span aria-hidden="true">*</span></label><input id="intake-email" type="email" value={answers.email} onChange={e => update("email", e.target.value)} placeholder="alex@example.com" maxLength={254} required autoComplete="off" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />{errors.email && <p id="email-error" role="alert" className={styles.error}>{errors.email}</p>}</div>
                    <div className={styles.field}><label htmlFor="intake-phone">Phone <span className={styles.optional}>(optional)</span></label><input id="intake-phone" type="tel" value={answers.phone} onChange={e => update("phone", e.target.value)} placeholder="202-555-0123" maxLength={30} autoComplete="off" /></div>
                  </div>
                  <div className={styles.field}><label htmlFor="intake-service">Your planned service <span aria-hidden="true">*</span></label><select id="intake-service" value={answers.service} onChange={e => update("service", e.target.value)} required aria-invalid={!!errors.service} aria-describedby={errors.service ? "service-error" : undefined}><option value="">Select a service</option>{services.map(group => <optgroup label={group.group} key={group.group}>{group.items.map(service => <option key={service}>{service}</option>)}</optgroup>)}<option value="Not sure yet">Not sure yet · discuss with Michelle</option></select>{errors.service && <p id="service-error" role="alert" className={styles.error}>{errors.service}</p>}</div>
                  <div className={styles.field}><label htmlFor="intake-date">Appointment date <span className={styles.optional}>(if known)</span></label><input id="intake-date" type="date" value={answers.date} onChange={e => update("date", e.target.value)} aria-describedby="date-hint" /><p className={styles.hint} id="date-hint">This questionnaire does not schedule or confirm an appointment.</p></div>
                </>}
                {step === 1 && <>
                  <fieldset className={styles.fieldset}><legend>What would you like to focus on?</legend><p className={styles.hint}>Choose any that feel right, or leave this blank.</p><div className={styles.goalGrid}>{goalOptions.map(goal => <label className={`${styles.choice} ${answers.goals.includes(goal) ? styles.selected : ""}`} key={goal}><input type="checkbox" checked={answers.goals.includes(goal)} onChange={e => { update("goals", e.target.checked ? [...answers.goals, goal] : answers.goals.filter(item => item !== goal)); if (goal === "Something else" && !e.target.checked) update("otherGoal", ""); }} /><span>{goal}</span></label>)}</div></fieldset>
                  {answers.goals.includes("Something else") && <div className={styles.field}><label htmlFor="intake-otherGoal">What else is on your mind? <span className={styles.optional}>(optional)</span></label><textarea id="intake-otherGoal" rows={3} value={answers.otherGoal} onChange={e => update("otherGoal", e.target.value)} maxLength={1000} placeholder="Use a sample answer here…" /></div>}
                  <div className={styles.field}><label htmlFor="intake-routine">Your current skincare routine <span className={styles.optional}>(optional)</span></label><textarea id="intake-routine" rows={4} value={answers.routine} onChange={e => update("routine", e.target.value)} maxLength={1500} placeholder="For example: cleanser, moisturizer, sunscreen…" /><p className={styles.hint}>A simple overview is plenty. Use sample information in this preview.</p></div>
                  <div className={styles.field}><label htmlFor="intake-notes">Anything that would make your visit more comfortable? <span className={styles.optional}>(optional)</span></label><textarea id="intake-notes" rows={3} value={answers.notes} onChange={e => update("notes", e.target.value)} maxLength={1000} placeholder="For example: a quiet, relaxing appointment…" /></div>
                </>}
                {step === 2 && <>
                  <div className={styles.draftNote}><span className={styles.draftTag}>QUESTIONS FOR MICHELLE TO APPROVE</span><p>These optional questions are draft wording only. Use fictional answers or skip them. This preview does not provide medical advice or assess treatment suitability.</p></div>
                  {careQuestions.map(question => <fieldset className={styles.careFieldset} key={question.key}><legend>{question.title} <span className={styles.optional}>(optional)</span></legend><p className={styles.hint} id={`${question.key}-hint`}>{question.hint}</p><div className={styles.radioRow}>{answerOptions.map(option => <label key={option} className={`${styles.choice} ${answers[question.key] === option ? styles.selected : ""}`}><input type="radio" name={`demo-${question.key}`} value={option} checked={answers[question.key] === option} onChange={() => chooseCare(question.key, option)} aria-describedby={`${question.key}-hint`} /><span>{option}</span></label>)}</div>{answers[question.key] === "Yes" && <div className={styles.followup}><label htmlFor={`intake-${question.key}-detail`}>{question.followup} <span className={styles.optional}>(optional)</span></label><textarea id={`intake-${question.key}-detail`} rows={3} maxLength={1000} value={answers[`${question.key}Detail`]} onChange={e => update(`${question.key}Detail`, e.target.value)} placeholder="Sample information only. You may leave this blank." /></div>}</fieldset>)}
                  <p className={styles.hint}>You can leave all of these unanswered and continue to review.</p>
                </>}
                {step === 3 && <>
                  <div className={styles.reviewSection}><div className={styles.reviewHeading}><h3>Your visit</h3><button type="button" className={styles.editButton} onClick={() => edit(0)} aria-label="Edit your visit">Edit <span aria-hidden="true">↗</span></button></div><dl><div><dt>Name</dt><dd>{display(answers.name)}</dd></div><div><dt>Email</dt><dd>{display(answers.email)}</dd></div><div><dt>Phone</dt><dd>{display(answers.phone)}</dd></div><div><dt>Service</dt><dd>{display(answers.service)}</dd></div><div><dt>Appointment</dt><dd>{displayDate(answers.date)}</dd></div></dl></div>
                  <div className={styles.reviewSection}><div className={styles.reviewHeading}><h3>Skin &amp; goals</h3><button type="button" className={styles.editButton} onClick={() => edit(1)} aria-label="Edit skin and goals">Edit <span aria-hidden="true">↗</span></button></div><dl><div><dt>Focus</dt><dd>{answers.goals.length ? answers.goals.join(", ") : "Not provided"}{answers.goals.includes("Something else") && answers.otherGoal.trim() && <p>{answers.otherGoal}</p>}</dd></div><div><dt>Routine</dt><dd>{display(answers.routine)}</dd></div><div><dt>Comfort</dt><dd>{display(answers.notes)}</dd></div></dl></div>
                  <div className={styles.reviewSection}><div className={styles.reviewHeading}><h3>Care details <span className={styles.draftBadge}>DRAFT</span></h3><button type="button" className={styles.editButton} onClick={() => edit(2)} aria-label="Edit care details">Edit <span aria-hidden="true">↗</span></button></div><dl>{careQuestions.map((question, index) => <div key={question.key}><dt>{["Allergies / sensitivities", "Medications / products", "Recent treatments"][index]}</dt><dd>{display(answers[question.key])}{answers[question.key] === "Yes" && answers[`${question.key}Detail`].trim() && <p>{answers[`${question.key}Detail`]}</p>}</dd></div>)}</dl></div>
                  <div className={styles.launchNote}><strong>Secure submission is not connected</strong><p>Finishing only shows the demo’s final screen. Your answers stay in this open page and are cleared on refresh or when you leave.</p></div>
                </>}
                <p className={styles.status} role="status" aria-live="polite">{sampleNotice}</p>
                <div className={styles.actions}>
                  {step > 0 ? <button type="button" className={styles.backButton} onClick={() => { setStep(current => current - 1); setEditing(false); }}><Arrow back /> Back</button> : <span className={styles.smallNote}>A thoughtful start.<br />At your own pace.</span>}
                  <button type="submit" className={styles.primaryButton}>{step === 3 ? "Preview complete" : editing ? "Return to review" : step === 2 ? "Review answers" : "Continue"}<Arrow /></button>
                </div>
                <div className={styles.formFooter}><span>Demo only · Nothing is sent or saved</span><button type="button" className={styles.resetButton} onClick={reset}>Clear answers</button></div>
              </form>
            </div>
          </>}
        </section>
      </div>
      <noscript><div className={styles.noScript}>This interactive preview needs JavaScript. No form is submitted without it.</div></noscript>
    </main>
  );
}
