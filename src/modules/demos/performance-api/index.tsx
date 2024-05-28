import run, {
  PaintData,
  ResourceData,
  ResourceMetrics,
  hasSupport,
} from '../../apis/performance-api';
import React, { useEffect, useState } from 'react';

function PerformanceApi() {
  const [metrics, setMetrics] = useState<ResourceMetrics>();
  const [resourcesData, setResourcesData] = useState<ResourceData[]>([]);
  const [paint, setPaint] = useState<PaintData>();

  useEffect(() => {
    const performanceDetails = run();
    setMetrics(performanceDetails.resources.metrics);
    setResourcesData(
      performanceDetails.resources.data as unknown as Array<ResourceData>
    );
    setPaint(performanceDetails.paint as unknown as PaintData);
  }, []);

  if (!hasSupport) {
    return <h1>Unsupported</h1>;
  }

  return (
    <div>
      <section className="tw-mb-3">
        <h2 className="tw-text-base md:tw-text-xl tw-font-bold tw-mb-3">
          Paint metrics
        </h2>

        <table
          className="
              tw-w-full
              tw-min-w-full
              tw-divide-y
              tw-divide-gray-200
            "
        >
          <thead className="tw-bg-gray-100">
            <tr>
              <th
                scope="col"
                className="
                    tw-px-6
                    tw-py-3
                    tw-text-left
                    tw-text-xs
                    tw-font-medium
                    tw-text-gray-500
                    tw-uppercase
                    tw-tracking-wider
                  "
              >
                First Paint
              </th>
              <th
                scope="col"
                className="
                    tw-px-6
                    tw-py-3
                    tw-text-left
                    tw-text-xs
                    tw-font-medium
                    tw-text-gray-500
                    tw-uppercase
                    tw-tracking-wider
                  "
              >
                First Contentful-Paint
              </th>
            </tr>
          </thead>
          <tbody
            className="
              tw-bg-white
                tw-divide-y
                tw-divide-gray-200
              "
          >
            <tr>
              <td
                className="
                    tw-px-6
                    tw-py-4
                    tw-whitespace-nowrap
                  "
              >
                <div
                  className="
                      tw-text-sm
                      tw-text-gray-900
                    "
                >
                  {paint?.firstContentfulStartTime} milliseconds
                </div>
              </td>
              <td
                className="
                    tw-px-6
                    tw-py-4
                    tw-whitespace-nowrap
                  "
              >
                <span
                  className="
                      tw-text-sm
                      tw-text-gray-900
                    "
                >
                  {paint?.firstPaintStartTime} milliseconds
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="tw-mb-5">
        <h2 className="tw-text-base md:tw-text-xl tw-font-bold tw-mb-3">
          Resources metrics
        </h2>
        <div
          className="
            tw-shadow
            tw-overflow-hidden
            tw-border-b 
            tw-border-gray-200
            sm:tw-rounded-lg
          "
        >
          <table
            className="
              tw-w-full
              tw-min-w-full
              tw-divide-y
              tw-divide-gray-200
            "
          >
            <thead className="tw-bg-gray-100">
              <tr>
                <th
                  scope="col"
                  className="
                    tw-px-6
                    tw-py-3
                    tw-text-left
                    tw-text-xs
                    tw-font-medium
                    tw-text-gray-500
                    tw-uppercase
                    tw-tracking-wider
                  "
                >
                  Total files
                </th>
                <th
                  scope="col"
                  className="
                    tw-px-6
                    tw-py-3
                    tw-text-left
                    tw-text-xs
                    tw-font-medium
                    tw-text-gray-500
                    tw-uppercase
                    tw-tracking-wider
                  "
                >
                  Total size
                </th>

                <th
                  scope="col"
                  className="
                    tw-px-6
                    tw-py-3
                    tw-text-left
                    tw-text-xs
                    tw-font-medium
                    tw-text-gray-500
                    tw-uppercase
                    tw-tracking-wider
                  "
                >
                  Load time
                </th>
              </tr>
            </thead>
            <tbody
              className="
              tw-bg-white
                tw-divide-y
                tw-divide-gray-200
              "
            >
              <tr>
                <td
                  className="
                    tw-px-6
                    tw-py-4
                    tw-whitespace-nowrap
                  "
                >
                  <div
                    className="
                      tw-text-sm
                      tw-text-gray-900
                    "
                  >
                    {metrics?.totalLength}
                  </div>
                </td>
                <td
                  className="
                    tw-px-6
                    tw-py-4
                    tw-whitespace-nowrap
                  "
                >
                  <span
                    className="
                      tw-text-sm
                      tw-text-gray-900
                    "
                  >
                    {metrics?.filesSize}
                  </span>
                </td>
                <td
                  className="
                    tw-px-6
                    tw-py-4
                    tw-whitespace-nowrap
                  "
                >
                  <div
                    className="
                      tw-text-sm
                      tw-text-gray-900
                    "
                  >
                    {metrics?.loadTime} seconds
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="tw-text-base md:tw-text-xl tw-font-bold tw-mb-3">
          Loaded resources
        </h2>
        <div
          className="
            tw-shadow
            tw-overflow-hidden
            tw-border-b 
            tw-border-gray-200
            sm:tw-rounded-lg
          "
        >
          <table
            className="
              tw-w-full
              tw-min-w-full
              tw-divide-y
              tw-divide-gray-200
            "
          >
            <thead className="tw-bg-gray-100">
              <tr>
                <th
                  scope="col"
                  className="
                    tw-px-6
                    tw-py-3
                    tw-text-left
                    tw-text-xs
                    tw-font-medium
                    tw-text-gray-500
                    tw-uppercase
                    tw-tracking-wider
                  "
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="
                    tw-px-6
                    tw-py-3
                    tw-text-left
                    tw-text-xs
                    tw-font-medium
                    tw-text-gray-500
                    tw-uppercase
                    tw-tracking-wider
                  "
                >
                  Size
                </th>

                <th
                  scope="col"
                  className="
                    tw-px-6
                    tw-py-3
                    tw-text-left
                    tw-text-xs
                    tw-font-medium
                    tw-text-gray-500
                    tw-uppercase
                    tw-tracking-wider
                  "
                >
                  Download time
                </th>
              </tr>
            </thead>
            <tbody
              className="
              tw-bg-white
                tw-divide-y
                tw-divide-gray-200
              "
            >
              {resourcesData.map((resource, index) => (
                <tr key={index}>
                  <td
                    className="
                    tw-px-6
                    tw-py-4
                    tw-whitespace-nowrap
                  "
                  >
                    <div
                      className="
                      tw-text-sm
                      tw-text-gray-900
                    "
                    >
                      {resource.name}
                    </div>
                  </td>
                  <td
                    className="
                    tw-px-6
                    tw-py-4
                    tw-whitespace-nowrap
                  "
                  >
                    <span
                      className="
                      tw-text-sm
                      tw-text-gray-900
                    "
                    >
                      {resource.size}
                    </span>
                  </td>
                  <td
                    className="
                    tw-px-6
                    tw-py-4
                    tw-whitespace-nowrap
                  "
                  >
                    <div
                      className="
                      tw-text-sm
                      tw-text-gray-900
                    "
                    >
                      {resource.time} seconds
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default PerformanceApi;
