export const agentsHTML = (agentObj) => {
    return `
<h2>${agentObj.firstName} ${agentObj.lastName}</h2>
<div>${agentObj.work}</div>
<div>${agentObj.number}</div>
`
}