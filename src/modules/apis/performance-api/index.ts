export interface ResourceData {
  name: string;
  size: number;
  time: number;
}

export interface ResourceMetrics {
  totalLength: number;
  filesSize: string;
  loadTime: string;
}

export interface PaintData {
  firstPaintStartTime: number;
  firstContentfulStartTime: number;
}
export const hasSupport = (): boolean => {
  if ('performance' in window) return true;

  return false;
};

function run() {
  return {
    resources: measureResourcesMetrics(),
    paint: measurePaintMetrics(),
  };
}

function measureResourcesMetrics() {
  const resources = performance.getEntriesByType(
    'resource'
  ) as Array<PerformanceResourceTiming>;

  const resourceData = resources.map(resource => ({
    name: removeDomainAndParams(resource.name),
    size: convertToMegabytes(resource.transferSize),
    time: convertToSeconds(resource.duration),
  }));

  const resourceMetrics = resources.reduce(
    (accumulated, resource) => {
      const asset = resource as PerformanceResourceTiming;
      return {
        totalSize: accumulated.totalSize + asset.transferSize,
        totalFiles: accumulated.totalFiles + 1,
        totalLoadTime: accumulated.totalLoadTime + asset.duration,
      };
    },
    { totalSize: 0, totalFiles: 0, totalLoadTime: 0 }
  );

  return {
    data: resourceData,
    metrics: {
      totalLength: resourceMetrics.totalFiles,
      filesSize: convertToMegabytes(resourceMetrics.totalSize),
      loadTime: convertToSeconds(resourceMetrics.totalLoadTime),
    },
  };
}

function measurePaintMetrics() {
  const paintMetrics = performance.getEntriesByType('paint');

  return {
    firstPaintStartTime: paintMetrics[0].startTime.toFixed(2),
    firstContentfulStartTime: paintMetrics[0].startTime.toFixed(2),
  };
}

function removeDomainAndParams(url: string) {
  const urlInterface = new URL(url);

  return urlInterface.pathname
    .replace('/_next/static/', '/')
    .replace('/webpack/', '/');
}

function convertToSeconds(milliseconds: number) {
  return (milliseconds / 1000).toFixed(2);
}

function convertToMegabytes(size: number) {
  const KB = 1024;

  const sizeInMegabytes = size / (KB * KB);
  const sizeInKilobytes = size / KB;

  if (sizeInMegabytes < 1) return `${sizeInKilobytes.toFixed(2)} KB`;

  return `${sizeInMegabytes.toFixed(2)} MB`;
}

export default run;
