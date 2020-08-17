import { businessHTML } from "./Business.js"
import { useBusinesses, onlyNYBusinesses, agentArray } from "./BusinessProvider.js"
import { agentsHTML } from "./agents.js"

// Place an article element in your HTML with the class below
const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            const findAgent = agentArray
                //const findBusiness = useBusinesses()
            const foundAgent = findAgent.find(agent => {

                return (agent.firstName.includes(keyPressEvent.target.value) || agent.lastName.includes(keyPressEvent.target.value))
            })

            companySearchResultArticle.innerHTML = `
            <h2>${foundAgent.firstName} ${foundAgent.lastName}</h2>
            <div>${foundAgent.work}</div>
            <div>${foundAgent.number}</div>
            `
                // const foundBusiness = findBusiness.find(business => {
                //     return (business.companyName.includes(keyPressEvent.target.value))
                // })

            /*companySearchResultArticle.innerHTML = `
                    <h2>
                    ${foundBusiness.companyName}
                    </h2>
                    <section>
                    ${foundBusiness.addressFullStreet}

                    </section>
                    <section>
                    ${foundBusiness.addressCity},
                    ${foundBusiness.addressStateCode}
                    ${foundBusiness.addressZipCode}
                    </section>
                `*/
        }
    })


export const businessList = () => {
    const contentTarget = document.querySelector(".business")
    const businessArr = useBusinesses()
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"
    businessArr.forEach(businessObj => {
        contentTarget.innerHTML += businessHTML(businessObj)
    })
}

export const newYorkBusinessList = () => {
    const contentTarget = document.querySelector(".businessList--newYork")
    contentTarget.innerHTML = "<h1>New York Businesses</h1>"
    onlyNYBusinesses.forEach(businessObj => {
        contentTarget.innerHTML += businessHTML(businessObj)
    })
}

export const agentsList = () => {
    const contentTarget = document.querySelector(".agents")
    contentTarget.innerHTML = "<h1>Agents</h1>"
    agentArray.forEach(agentObj => {
        contentTarget.innerHTML += agentsHTML(agentObj)
    })
}