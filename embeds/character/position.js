module.exports.controlled = `
# Controlled Position

**Critical:** You do it with increased effect.

**6:** You do it.

**4/5:** You hesitate. Withdraw and try different approach, or else do it with a minor consequence: a minor **complication** occurs, you have **reduced effect**, you suffer **lesser harm**, you end up in a **risky** position.

**1-3:** You falter. Press on by seizing a **risky** opportunity, or withdraw and try a different approach.
` 

module.exports.risky = `
# Risky Position

**Critical:** You do it with increased effect.

**6:** You do it.

**4/5:** You do it, but there's a consequence: you suffer **harm**, a **complication** occurs, you have **reduced effect**, you end up in a desperate position.

**1-3:** Things go badly. You suffer **harm**, a **complication** occurs, you end up in a **desperate** position, you **lose this opportunity**.
` 

module.exports.desperate = `
# Desperate Position

**Critical:** You do it with increased effect.

**6:** You do it.

**4/5:** You do it, but there's a consequence: you suffer **severe harm**, a **serious complication** occurs, you have **reduced effect**.

**1-3:** It's the worst outcome. You suffer **severe harm**, a **serious complication** occurs, you **lose this opportunity** for action.
` 

module.exports.consequence = module.exports.consequences = `
# Consequences

**Reduced Effect:** -1 effect level.
**Reduced Position:** -1 position (try again if fail)
**Lost Opportunity:** Try again with a new action rating. 
    (if desperate: new action)
**Complication:** Immediate problem
    Minor: 1 tick or +1 heat.
    Normal: 2 ticks or +1 heat.
    Severe: 3 tickes or +2 heat.
**Harm**
    Lesser: Level 1
    Moderate: Level 2
    Severe: Level 3
`

module.exports.position = module.exports.controlled + module.exports.risky + module.exports.desperate + module.exports.consequence;