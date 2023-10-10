const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const chart = document.querySelector("#chart").getContext('2d');

menuBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'none';
});


themeToggler.addEventListener('click', () =>{
document.body.classList.toggle('dark-theme-variables');

themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});


// fill order in table

Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
                <td>${order.productName}</td>
                <td>${order.productNumber}</td>
                <td>${order.productStatus}</td>
                <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'pending' ?
                'warning' : 'primary'}" >${order.shipping}</td>
                <td class="primary">Details</td>
                ` ;

                tr.innerHTML = trContent;
                document.querySelector('table tbody').appendChild(tr);
});


// Create a new chart
new Chart(chart, {
    type: 'line',
    data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],

    datasets: [
        {
            label: 'BTC',
            data: [29374, 33537, 49631, 59095, 36684, 33572, 39974, 48847, 48116, 61004],
            borderColor: 'red',
            borderWidth: 2,
        },

        {
            label: 'ETH',
            data: [31500, 41000, 88800, 26000, 46000, 32698, 5000, 3000, 18656, 24832, 36844],
            borderColor: 'blue',
            borderWidth: 2,
        }
    ]
    },
    options: {
        responsive: true
    }
});




