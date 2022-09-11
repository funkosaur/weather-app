function convertUnixTime(unixTime) {
  const normalDate = new Date(unixTime * 1000);

  function convertToHours() {
    return normalDate.toTimeString().slice(0, 5);
  }

  function convertToDays() {
    return `${normalDate.toDateString().slice(0, 3)}day`;
  }

  return { convertToHours, convertToDays };
}

export default convertUnixTime;
