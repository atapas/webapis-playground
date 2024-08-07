export interface NetworkInformation {
  effectiveType: string;
  rtt: number;
  downlink: number;
  downlinksMax?: number;
  saveData: boolean;
  type: string;
}
interface Navigator {
  connection?: NetworkInformation;
}

export const hasSupport = (): boolean => 'connection' in window.navigator;

function run() {
  if (hasSupport()) {
    return (window.navigator as Navigator).connection;
  }
  return null;
}

export default run;
