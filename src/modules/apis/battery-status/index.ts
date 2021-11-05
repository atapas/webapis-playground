export const hasSupport = (): boolean => Boolean('getBattery' in navigator);

interface BatteryType {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
  onchargingchange: number | null;
  onchargingtimechange: number | null;
  ondischargingtimechange: number | null;
  onlevelchange: number | null;
}

function getColor(level: number) {
  const statusColors = {
    base: {
      text: '#6B7280',
      background: '#F3F4F6',
    },
    low: {
      text: '#EF4444',
      background: '#FEE2E2',
    },
    medium: {
      text: '#F59E0B',
      background: '#FEF3C7',
    },
    full: {
      text: '#10B981',
      background: '#D1FAE5',
    },
  };

  if (level >= 0 && level <= 20) {
    return statusColors.low;
  }

  if (level > 20 && level <= 60) {
    return statusColors.medium;
  }

  if (level > 60 && level <= 100) {
    return statusColors.full;
  }

  return statusColors.base;
}

function updateUI(battery: BatteryType) {
  const textCharging = document.getElementById(
    'js-battery--charging'
  ) as HTMLElement;
  const textLevel = document.getElementById('js-battery--level') as HTMLElement;

  textCharging.innerText = battery.charging ? 'Yes' : 'No';

  let level = battery.level * 100;

  textLevel.innerText = `${level}%`;
  textLevel.style.color = getColor(level).text;
  textLevel.style.background = getColor(level).background;
}

async function getBattery() {
  try {
    //@ts-ignore
    const battery = await navigator.getBattery();

    updateUI(battery);

    battery.addEventListener('levelchange', updateUI);
    battery.addEventListener('chargingchange', updateUI);
    battery.addEventListener('chargingtimechange', updateUI);
    battery.addEventListener('dischargingtimechange', updateUI);
  } catch (err) {
    console.warn('Your browser not support this feature.');
  }
}

function run() {
  if (hasSupport()) {
    getBattery();
  }
}

export default run;
