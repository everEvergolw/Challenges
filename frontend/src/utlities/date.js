export const formatDate = (date) => {
    return date.toLocaleDateString('en-GB', {
        day: 'numeric', 
        month: 'short', 
        year: 'numeric' 
    }).replace(/ /g, '-')
}
