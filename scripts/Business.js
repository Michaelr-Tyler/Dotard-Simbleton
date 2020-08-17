export const businessHTML = (businessObj) => {
    return `
<div class="businessWrapper">
<h2>${businessObj.companyName}</h2>
<div>${businessObj.addressFullStreet}</div>
<div>${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}</div>
</div>
`
}