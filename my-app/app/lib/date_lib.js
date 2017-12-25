var dateLib = {
    getDayString: function(date) {
        // Thu  Dec 14
        var day = date.getDay();
        if (day == 0) {
            day = 'Sun';
        } else if (day == 1) {
            day = 'Mon';
        } else if (day == 2) {
            day = 'Tue';
        } else if (day == 3) {
            day = 'Wed';
        } else if (day == 4) {
            day = 'Thu';
        } else if (day == 5) {
            day = 'Fri';
        } else if (day == 6) {
            day = 'Sat';
        }
        var month = date.getMonth();
        if (month == 0) {
            month = 'Jan';
        } else if (month == 1) {
            month = 'Feb';
        } else if (month == 2) {
            month = 'Mar';
        } else if (month == 3) {
            month = 'Apr';
        } else if (month == 4) {
            month = 'May';
        } else if (month == 5) {
            month = 'Jun';
        } else if (month == 6) {
            month = 'Jul';
        } else if (month == 7) {
            month = 'Aug';
        } else if (month == 8) {
            month = 'Sept';
        } else if (month == 9) {
            month = 'Oct';
        } else if (month == 10) {
            month = 'Nov';
        } else if (month == 11) {
            month = 'Dec';
        }
        return day + '  ' + month + ' ' + date.getDate();
    },

    getTimeString: function(date) {
        // 9:15 PM
        var hours = date.getHours();
        var meridian = 'AM';
        if (hours >= 12) {
            meridian = 'PM';
        }
        hours = hours % 12;
        if (hours == 0) {
            hours = 12;
        }
        var minutes = date.getMinutes();
        minutes = minutes < 10 ? '0' + minutes : '' + minutes;
        return hours + ':' + minutes + ' ' + meridian;
    }
};
module.exports = dateLib;
