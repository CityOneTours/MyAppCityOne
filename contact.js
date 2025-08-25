 function initMap() {
      const companyLocation = { lat: 25.122319, lng: 55.377324 }; // Palace Tower TI

      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: companyLocation,
      });

      const marker = new google.maps.Marker({
        position: companyLocation,
        map: map,
        title: "1904, Palace Tower TI, Dubai Silicon Oasis, Dubai"
      });
    }