import React from 'react'
const UseDate = () => {
  const locale = 'eb';
  const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update

  React.useEffect(() => {
    const timer = setInterval(() => { // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    }
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: 'long' });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;

  const hour = today.getHours();
  const wish = `${(hour < 12 && 'בוקר') || (hour < 17 && 'צהריים') || 'ערב'} טוב `;

  const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });

  return (
    <div>
      {date},
      {time},
      {wish}
    </div>);
};

export default UseDate




