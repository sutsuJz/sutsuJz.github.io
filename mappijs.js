var map;
var marker;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 62.243098775724825, lng: 25.74312693607871 },
        zoom: 15
    });

    // Add click event listener to the map
    map.addListener('click', function (e) {
        // Update latitude and longitude input fields
        document.getElementById('latitude').value = e.latLng.lat();
        document.getElementById('longitude').value = e.latLng.lng();
        
        // Remove previous marker (if exists)
        if (marker) {
            marker.setMap(null);
        }
        
        // Add marker to the clicked location
        marker = new google.maps.Marker({
            position: e.latLng,
            map: map
        });
    });
}

// Function to handle form submission
function submitForm() {
    // Get latitude and longitude values
    var latitude = document.getElementById('latitude').value;
    var longitude = document.getElementById('longitude').value;
    
    // Display submitted data
    document.getElementById('submittedLatitude').textContent = latitude;
    document.getElementById('submittedLongitude').textContent = longitude;
    document.getElementById('submittedData').style.display = 'block';
}
