function convertUnixTime(unixTime) {
  const normalDate = new Date(unixTime * 1000);

  function convertToHours() {
    return normalDate.toTimeString().slice(0, 5);
  }

  function convertToDays() {
    switch (normalDate.toDateString().slice(0, 3)) {
      case 'Mon':
        return 'Monday';

      case 'Tue':
        return 'Tuesday';

      case 'Wed':
        return 'Wednesday';

      case 'Thu':
        return 'Thursday';

      case 'Fri':
        return 'Friday';

      case 'Sat':
        return 'Saturday';

      case 'Sun':
        return 'Sunday';

      default:
        return 'Unknown';
    }
  }

  return { convertToHours, convertToDays };
}

export default convertUnixTime;
