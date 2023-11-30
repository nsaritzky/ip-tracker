const url =
  "https://geo.ipify.org/api/v2/country,city?apiKey=at_FK0gDO1X0mAIvvd883AEFV3Ug5LRY";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const map = L.map("map").setView(
      [data.location.lat, data.location.lng],
      13,
    );
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    const icon = L.icon({
      iconUrl: "/ip-tracker/images/icon-location.svg",
    });

    const marker = L.marker([data.location.lat, data.location.lng], {
      icon,
    }).addTo(map);

    document.getElementById("ipAddress").innerText = data.ip;
    document.getElementById(
      "location",
    ).innerText = `${data.location.city}, ${data.location.country}`;
    document.getElementById("timezone").innerText = data.location.timezone;
    document.getElementById("isp").innerText = data.isp;

    const form = document.getElementById("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const ip = document.getElementById("ip").value;
      fetch(url + `&ipAddress=${ip}`)
        .then((response) => response.json())
        .then((data) => {
          map.setView([data.location.lat, data.location.lng], 13);
          marker.setLatLng([data.location.lat, data.location.lng]);
          document.getElementById("ipAddress").innerText = data.ip;
          document.getElementById(
            "location",
          ).innerText = `${data.location.city}, ${data.location.country}`;
          document.getElementById("timezone").innerText =
            data.location.timezone;
          document.getElementById("isp").innerText = data.isp;
        });
    });
  })
  .catch((error) => console.error("Error:", error));
