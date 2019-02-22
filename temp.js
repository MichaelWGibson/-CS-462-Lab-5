const getTemps = async () => {
    var tempList = document.getElementById("temps");
    var violationsList = document.getElementById("violations")
    var currentTempLabel = document.getElementById("currentTemp")
    
    const response = await fetch('http://localhost:8080/sky/cloud/WUHjGzQa22Po6tzVcbQrVi/temperature_store/temperatures');
    const myJson = await response.json(); //extract JSON from the http response
    tempList.innerHTML = ""
    myJson.forEach(element => {
        tempList.insertAdjacentHTML('beforeend', "<li>" + element.timestamp + " -> " + element.temp + "</li>")
    });

    var current = myJson[myJson.length - 1];

    currentTempLabel.innerHTML  = " The current temperature is: " + current.temp;

    const violationList = await fetch('http://localhost:8080/sky/cloud/WUHjGzQa22Po6tzVcbQrVi/temperature_store/threshold_violations');
    const violations = await violationList.json(); //extract JSON from the http response
    violationsList.innerHTML = ""
    violations.forEach(element => {
        violationsList.insertAdjacentHTML('beforeend', "<li>" + element.timestamp + " -> " + element.temp + "</li>")
    });
  }

const getProfile = async() => {
    var sensorNameInput = document.getElementById("sensorName");
    var sensorLocationInput = document.getElementById("sensorLocation")
    var smsNumberInput = document.getElementById("smsNumber");
    var thresholdInput = document.getElementById("threshold")

    fetch('http://localhost:8080/sky/cloud/WUHjGzQa22Po6tzVcbQrVi/sensor_profile/sensorName').then(response => {
        response.json().then( data => {
            sensorNameInput.value = data.sensorName
        })
    })
    fetch('http://localhost:8080/sky/cloud/WUHjGzQa22Po6tzVcbQrVi/sensor_profile/sensorLocation').then(response => {
        response.json().then( data => {
            sensorLocationInput.value = data.sensorLocation
        })
    })
    fetch('http://localhost:8080/sky/cloud/WUHjGzQa22Po6tzVcbQrVi/sensor_profile/smsNumber').then(response => {
        response.json().then( data => {
            smsNumberInput.value = data.smsNumber
        })
    })
    fetch('http://localhost:8080/sky/cloud/WUHjGzQa22Po6tzVcbQrVi/sensor_profile/threshold').then(response => {
        response.json().then( data => {
            thresholdInput.value = data.threshold
        })
    })
}