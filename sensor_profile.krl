ruleset sensor_profile {
  meta {
    
    shares  smsNumber, sensorLocation, sensorName, threshold
    provide smsNumber, sensorLocation, sensorName, threshold
  }
  global {
    smsNumber  = function() {
      {"smsNumber" :ent:smsNumber}
    }
    
    sensorLocation  = function() {
      {"sensorLocation" : ent:sensorLocation}
    }
    
    sensorName  = function() {
      {"sensorName" : ent:sensorName}
    }
    
    threshold  = function() {
      {"threshold" : ent:threshold }
    }
    
  }
 
  rule profile_updated {
    select when sensor profile_updated
    pre {
      smsNumber = event:attrs["smsNumber"]
      sensorLocation = event:attrs["sensorLocation"]
      sensorName = event:attrs["sensorName"]
      threshold = event:attrs["threshold"]
    }
    
    always {
      ent:smsNumber := smsNumber;
      ent:sensorLocation := sensorLocation;
      ent:sensorName := sensorName;
      ent:threshold := threshold;
    }
  }
}