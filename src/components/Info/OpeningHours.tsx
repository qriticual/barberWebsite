import React from 'react';

const OpeningHours = () => {
  const days = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'];
  const times = ['1.10:00 - 19:00', '2.10:00 - 19:00', '3.10:00 - 19:00', '4.10:00 - 19:00', '5.10:00 - 18:00', '6.10:00 - 17:00', '7.Stängt'];

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {days.map((day) => (
          <div key={day} style={{ paddingLeft: '10px' }}>
            {day}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {times.map((time) => (
          <div key={time}>
            <span style={{ paddingLeft: '10px' }}>{time.charAt(0).split('.')[1]}</span>
            <span>{time.substring(1).split('.')[1]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpeningHours;