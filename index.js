// Store state data in an array of objects for easier access
const stateData = [
    {
        region: 'Northern States',
        states: ['Jammu & Kashmir', 'Himachal Pradesh', 'Punjab', 'Uttarakhand', 'Uttar Pradesh', 'Delhi (NCT)', 'Chandigarh (UT)'],
        capitals: ['Srinagar/Jammu', 'Shimla', 'Chandigarh', 'Dehradun', 'Lucknow', 'New Delhi', 'Chandigarh'],
        portals: ['https://jk.gov.in/jammukashmir/', 'https://himachal.nic.in/', 'https://punjab.gov.in/', 'https://uk.gov.in/', 'https://up.gov.in/',
            'https://delhi.gov.in/', 'https://chandigarh.gov.in/']
    },
    {
        region: 'Western States',
        states: ['Rajasthan', 'Gujarat', 'Madhya Pradesh', 'Maharashtra'],
        capitals: ['Jaipur', 'Gandhinagar', 'Bhopal', 'Mumbai'],
        portals: ['https://rajasthan.gov.in/', 'https://gujarat.gov.in/', 'https://mp.gov.in/', 'https://maharashtra.gov.in/']
    },
    {
        region: 'Southern States',
        states: ['Andhra Pradesh', 'Karnataka', 'Kerala', 'Tamil Nadu', 'Telangana', 'Puducherry'],
        capitals: ['Amaravati', 'Bengaluru', 'Thiruvananthapuram', 'Chennai', 'Hyderabad', 'Puducherry'],
        portals: ['https://www.ap.gov.in/#/', 'https://karnataka.gov.in/', 'https://kerala.gov.in/', 'https://www.tn.gov.in/',
            'https://telangana.gov.in/', 'https://www.py.gov.in/']
    },
    {
        region: 'Eastern & North Eastern States',
        states: ['Assam', 'Bihar', 'Chhattisgarh', 'Jharkhand', 'Odisha', 'West Bengal', 'Arunachal Pradesh', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland',
            'Sikkim', 'Tripura', 'Andaman & Nicobar Islands (UT)', 'Dadra & Nagar Haveli and Daman & Diu (UT)', 'Ladakh (UT)', 'Lakshadweep (UT)'],
        capitals: ['Dispur', 'Patna', 'Raipur', 'Ranchi', 'Bhubaneswar', 'Kolkata', 'Itanagar', 'Imphal', 'Shillong', 'Aizawl',
            'Kohima', 'Gangtok', 'Agartala', 'Port Blair', 'Daman', 'Leh', 'Kavaratti'],
        portals: ['https://assam.gov.in/', 'https://bihar.gov.in/', 'https://cgstate.gov.in/', 'https://jharkhand.gov.in/',
            'https://odisha.gov.in/', 'https://wb.gov.in/', 'https://arunachalpradesh.gov.in/', 'https://manipur.gov.in/', 'https://meghalaya.gov.in/', 'https://mizoram.nic.in/',
            'https://nagaland.gov.in/', 'https://sikkim.gov.in/', 'https://tripura.gov.in/', 'https://andaman.nic.in/', 'https://ddd.gov.in/', 'https://ladakh.nic.in/', 'https://lakshadweep.gov.in/']
    }
];


let container = $('.container');
let listContainer = $('.list-content');
let tableContainer = $('.table-content'); // Add the correct selector

// Function to generate the list view of states
function generateListView(regionData) {
    regionData.forEach((region) => {
        // Append region title to the list container
        let regionHeader = $(`<h3>${region.region}</h3>`);
        listContainer.append(regionHeader);

        let olElement = $('<ol></ol>');
        region.states.forEach((state, item) => {
            let liElement = $(`<li>${state}</li>`);
            let ulElement = $('<ul></ul>');
            ulElement.append(`<li>${region.capitals[item]}</li>`);
            ulElement.append(`<li><a href="${region.portals[item]}" target="_blank">${region.portals[item]}</a></li>`);
            liElement.append(ulElement);
            olElement.append(liElement);
        });
        listContainer.append(olElement);
    });
}

// Function to generate the table view of states
function generateTableView(regionData) {
    regionData.forEach((region) => {
        // Append region title to the table container
        let regionHeader = $(`<h3>${region.region}</h3>`);
        tableContainer.append(regionHeader);

        let tableElement = $('<table></table>');
        tableElement.append(`<tr><th>State</th><th>Capital</th><th>Portal Link</th></tr>`);
        region.states.forEach((state, item) => {
            tableElement.append(`
                <tr>
                    <td>${state}</td>
                    <td>${region.capitals[item]}</td>
                    <td><a href="${region.portals[item]}" target="_blank">${region.portals[item]}</a></td>
                </tr>
            `);
        });
        tableContainer.append(tableElement);
    });
}

// Generate both views initially
generateListView(stateData);
generateTableView(stateData);

// Default table content hide
$('.table-content').hide();

// Toggle between views on checkbox click
$('input[type="checkbox"]').on('click', (e) => {
    if (e.target.checked) {
        $('.list-content').hide(); // Hide list view
        $('.table-content').show(); // Show table view
    } else {
        $('.list-content').show(); // Show list view
        $('.table-content').hide(); // Hide table view
    }
});
