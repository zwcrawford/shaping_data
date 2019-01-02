const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"

// forEach does not need to have a number of times specified like a for loop. It just does it for all items. 

// For each business in businesses. Business is a paameter you can name. It represents each item in businesses.
businesses.forEach(business => {
  // Add to innerHTML with +=
  outEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
      ${business.addressFullStreet}
    </section>
  `
  outEl.innerHTML += "<hr/>"
});