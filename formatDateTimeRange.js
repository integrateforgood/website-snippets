import dayjs from 'https://cdn.jsdelivr.net/npm/dayjs@1.11.9/+esm'
function formatDateTimeRange(startDateTime, endDateTime) {
	let formattedString

	const start = dayjs(startDateTime);
	const end = dayjs(endDateTime);

	// if start time is top of the hour, we can output like 4-6:30pm, otherwise we need to output 4:30-6:30pm.
	const startMinute = start.format('m');
	const startOnTheHour = startMinute === '0';

	// if end time is top of the hour, we can output like 4-6pm, otherwise we need to output 4-6:30pm.
	const endMinute = end.format('m');
	const endOnTheHour = endMinute === '0';

	if (start.isSame(end, 'day')) {
		const formattedDate = start.format('dddd, MMMM D, YYYY');
		//compare start and end time (ignoring date), if they are both on the same side of noon, we can output like 4-6:30pm, otherwise we need to output 4pm-6:30pm.
		const startHour = start.format('a');
		const endHour = end.format('a');
		const sameSideOfNoon = (startHour === endHour);
		const startEndTimeEqual = start.isSame(end, 'hour') && start.isSame(end, 'minutes')

		let formattedTime = '';

		if (!startEndTimeEqual) {
			if (sameSideOfNoon) {
				formattedTime = `${start.format(startOnTheHour ? 'h' : 'h:mm')}`;
			} else {
				formattedTime = `${start.format(startOnTheHour ? 'ha' : 'h:mma')}`;
			}
			formattedTime += `－${end.format(endOnTheHour ? 'ha' : 'h:mma')}`
		} else {
			formattedTime = `${start.format(startOnTheHour ? 'ha' : 'h:mma')}`
		}

		formattedString = `${formattedDate}, ${startEndTimeEqual ? 'at' : 'from'} ${formattedTime}`

	}
	else {
		const formattedStartDate = start.format('dddd, MMMM D, YYYY');
		const formattedEndDate = end.format('dddd, MMMM D, YYYY');
		const formattedStartTime = `${start.format(startOnTheHour ? 'ha' : 'h:mma')}`
		const formattedEndTime = `${end.format(endOnTheHour ? 'ha' : 'h:mma')}`
		formattedString = `${formattedStartDate} at ${formattedStartTime} to ${formattedEndDate} at ${formattedEndTime}`;
	}

	// Combine the formatted date and time range
	return formattedString;;
}

export default formatDateTimeRange