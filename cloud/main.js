//var azure = require('azure');

//var notificationHubService = azure.createNotificationHubService("OneTaxiCabs", "Endpoint=sb://usersidecars.servicebus.windows.net/;SharedAccessKeyName=DefaultListenSharedAccessSignature;SharedAccessKey=JNlMSVdM1L0XR9mhINW8FSPdakSCdz9LIYU8+ds+FJ8=");


Parse.Cloud.define("sendAnnouncement", function(request, response) {
        var name = request.params.senderName;
        var msg = request.params.message;

        Parse.Push.send({
                channels: [ request.params.accountId ],
                data: {
                        title: name,
                        message: msg,
                        action: "com.hello.announcement.sample.SEND_ANNOUNCEMENT",
                        senderId: request.params.senderId,
                        accountId: request.params.accountId
                }
        }, {
                success: function() {
                        // Push was successful
                        response.success("sendAnnouncement sent");
                },
                error: function(error) {
                        // Handle error
                        response.error("error with sendAnnouncement: " + error);
                },
                useMasterKey: true
        });
});

Parse.Cloud.define("driverCancelledNotif", function(request, response) {
        var msg = request.params.msg;
        var passengerNumber = request.params.passengerNumber;

        Parse.Push.send({
                channels: [ request.params.channel ],
                data: {
                        passengerNumber: passengerNumber,
                        msg : msg,
                        action: "onetaxicabs.DRIVERCANCELLEDNOTIF_ANNOUNCEMENT"
                }
        }, {
                success: function() {
                        // Push was successful
//var payload = '<toast><visual><binding template="ToastText01"><text id="1">Sorry Driver Cancelled the fare!</text></binding></visual></toast>';
//notificationHubService.wns.send(null, payload , 'wns/toast', function(error){
//  if(!error){
    // notification sent
//  }
//});
                        response.success("driverCancelledNotif sendAnnouncement sent");
                },
                error: function(error) {
                        // Handle error
                        response.error("error with sendAnnouncement: " + error);
                },
                useMasterKey: true
        });
});


Parse.Cloud.define("declineTodriverNotif", function(request, response) {
        var msg = request.params.msg;
        var phone = request.params.phone;

        Parse.Push.send({
                channels: [ request.params.channel ],
                data: {
                        phone: phone,
                        msg : msg,
                        action: "onetaxicabs.DECLINETODRIVERNOTIF_ANNOUNCEMENT"
                }
        }, {
                success: function() {
//var payload = '<toast><visual><binding template="ToastText01"><text id="1">Sorry Passenger Declined your fare acceptance!</text></binding></visual></toast>';
//notificationHubService.wns.send(null, payload , 'wns/toast', function(error){
//  if(!error){
    // notification sent
//  }
//});
                        // Push was successful
                        response.success("driverCancelledNotif sendAnnouncement sent");
                },
                error: function(error) {
                        // Handle error
                        response.error("error with sendAnnouncement: " + error);
                },
                useMasterKey: true
        });
});


Parse.Cloud.define("passengerCancelledTodriverNotif", function(request, response) {
        var msg = request.params.msg;
        var phone = request.params.phone;

        Parse.Push.send({
                channels: [ request.params.channel ],
                data: {
                        phone: phone,
                        msg : msg,
                        action: "onetaxicabs.PASSENGERCANCELLEDTODRIVERNOTIF_ANNOUNCEMENT"
                }
        }, {
                success: function() {
//var payload = '<toast><visual><binding template="ToastText01"><text id="1">Sorry Passenger Cancelled the fare!</text></binding></visual></toast>';
//notificationHubService.wns.send(null, payload , 'wns/toast', function(error){
//  if(!error){
    // notification sent
//  }
//});
                        // Push was successful
                        response.success("passengerCancelledNotif sendAnnouncement sent");
                },
                error: function(error) {
                        // Handle error
                        response.error("error with sendAnnouncement: " + error);
                },
                useMasterKey: true
        });
});

Parse.Cloud.define("acceptDeclineNotif", function(request, response) {
        var msg = request.params.msg;
        var phone = request.params.phone;
        var username = request.params.username;
        var latitude = request.params.latitude;
        var longitude = request.params.longitude;
        var passlatitude = request.params.passlatitude;
        var passlongitude = request.params.passlongitude;
        var farerecepientphonenumbers = request.params.farerecepientphonenumbers;
        var farerecepientsenderids = request.params.farerecepientsenderids;

        Parse.Push.send({
                channels: [ request.params.channel ],
                data: {
        		phone: phone,
        		username : username,
                        latitude: latitude,
                        longitude: longitude,
                        passlatitude: passlatitude,
                        passlongitude: passlongitude,
                        msg : msg,
                        action: "onetaxicabs.ACCEPTDECLINENOTIF_ANNOUNCEMENT",
        		farerecepientphonenumbers : farerecepientphonenumbers,
        		farerecepientsenderids : farerecepientsenderids
                }
        }, {
                success: function() {
//var payload = '<toast><visual><binding template="ToastText01"><text id="1">You have a New fare!</text></binding></visual></toast>';
//notificationHubService.wns.send(null, payload , 'wns/toast', function(error){
 // if(!error){
    // notification sent
 // }
//});
                        // Push was successful
                        response.success("sendAnnouncement sent");
                },
                error: function(error) {
                        // Handle error
                        response.error("error with sendAnnouncement: " + error);
                },
                useMasterKey: true
        });
});


Parse.Cloud.define("acceptanceToDriverNotif", function(request, response) {
        var msg = request.params.msg;
        var phone = request.params.phone;
        var passengernumber = request.params.passengernumber;
        var latitude = request.params.latitude;
        var longitude = request.params.longitude;
        var passlatitude = request.params.passlatitude;
        var passlongitude = request.params.passlongitude;
        var distance = request.params.distance;
        var username = request.params.username;

        Parse.Push.send({
                channels: [ request.params.channel ],
                data: {
                        phone: phone,
                        username : username,
                        latitude: latitude,
                        longitude: longitude,
                        passlatitude: passlatitude,
                        passlongitude: passlongitude,
                        msg : msg,
        		passengernumber : passengernumber,
                        action: "onetaxicabs.ACCEPTANCETODRIVER_ANNOUNCEMENT",
                        distance : distance
                }
        }, {
                success: function() {
                        // Push was successful
//var payload = '<toast><visual><binding template="ToastText01"><text id="1">Congratulations the passenger accepted to ride with you!</text></binding></visual></toast>';
//notificationHubService.wns.send(null, payload , 'wns/toast', function(error){
//  if(!error){
    // notification sent
//  }
//});
                        response.success("sendAnnouncement sent");
                },
                error: function(error) {
                        // Handle error
                        response.error("error with sendAnnouncement: " + error);
                },
                useMasterKey: true
        });
});


Parse.Cloud.define("acceptanceToPassNotif", function(request, response) {
        var msg = request.params.msg;
        var phone = request.params.phone;
        var passengernumber = request.params.passengernumber;
        var latitude = request.params.latitude;
        var longitude = request.params.longitude;
        var distance = request.params.distance;
        var username = request.params.username;

        Parse.Push.send({
                channels: [ request.params.channel ],
                data: {
                        phone: phone,
                        username : username,
                        latitude: latitude,
                        longitude: longitude,
                        msg : msg,
                        passengernumber : passengernumber,
                        action: "onetaxicabs.ACCEPTANCETOPASS_ANNOUNCEMENT",
                        distance : distance
                }
        }, {
                success: function() {
                        // Push was successful
//var payload = '<toast><visual><binding template="ToastText01"><text id="1">Congratulations a driver accepted your request!</text></binding></visual></toast>';
//notificationHubService.wns.send(null, payload , 'wns/toast', function(error){
//  if(!error){
    // notification sent
//  }
//});
                        response.success("sendAnnouncement sent");
                },
                error: function(error) {
                        // Handle error
                        response.error("error with sendAnnouncement: " + error);
                },
                useMasterKey: true
        });
});

Parse.Cloud.define("notifyOtherDriversNotif", function(request, response) {
        var msg = request.params.msg;
        var phone = request.params.phone;
	var othersList = request.params.othersList;

        Parse.Push.send({
                channels: [ request.params.channel ],
                data: {
                        phone: phone,
                        msg : msg,
			othersList : othersList,
                        action: "onetaxicabs.OTHERDRIVERSNOTIF_ANNOUNCEMENT"
                }
        }, {
                success: function() {
                        // Push was successful
                        response.success("driverCancelledNotif sendAnnouncement sent");
                },
                error: function(error) {
                        // Handle error
                        response.error("error with sendAnnouncement: " + error);
                },
                useMasterKey: true
        });
});

Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});
