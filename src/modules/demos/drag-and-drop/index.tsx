import { NotSupported } from 'components';

import run, { hasSupport } from '../../apis/drag-and-drop';

function FullScreen() {
  if (!hasSupport()) {
    return <NotSupported />;
  }

  return (
    <div
      className="
        tw-flex
        tw-space-x-4
      "
    >
      <div
        id="js-drag--area-1"
        className="
          tw-flex
          tw-p-2
          tw-w-[100px]
          tw-h-[100px]
          tw-border-2
          tw-border-blue-500
          tw-rounded-xl
          tw-transition
          tw-ease-in
          tw-duration-150
        "
        onDrop={run.onDrop}
        onDragOver={run.onDragOver}
        onDragEnter={run.onDragEnter}
        onDragLeave={run.onDragLeave}
      >
        <div
          id="js-drag--box"
          className="
            tw-flex
            tw-w-full
            tw-h-full
            tw-bg-blue-500
            tw-rounded-lg
            tw-cursor-[grab]
          "
          draggable
          onDragStart={run.onDrag}
        />
      </div>
      <div
        id="js-drag--area-2"
        className="
          tw-flex
          tw-p-2
          tw-w-[100px]
          tw-h-[100px]
          tw-border-2
          tw-border-blue-100
          tw-rounded-xl
          tw-transition
          tw-ease-in
          tw-duration-150
        "
        onDrop={run.onDrop}
        onDragOver={run.onDragOver}
        onDragEnter={run.onDragEnter}
        onDragLeave={run.onDragLeave}
      />
      <div
        id="js-drag--area-3"
        className="
          tw-flex
          tw-p-2
          tw-w-[100px]
          tw-h-[100px]
          tw-border-2
          tw-border-blue-100
          tw-rounded-xl
          tw-transition
          tw-ease-in
          tw-duration-150
        "
        onDrop={run.onDrop}
        onDragOver={run.onDragOver}
        onDragEnter={run.onDragEnter}
        onDragLeave={run.onDragLeave}
      />
      <div
        id="js-drag--area-4"
        className="
          tw-flex
          tw-p-2
          tw-w-[100px]
          tw-h-[100px]
          tw-border-2
          tw-border-blue-100
          tw-rounded-xl
          tw-transition
          tw-ease-in
          tw-duration-150
        "
        onDrop={run.onDrop}
        onDragOver={run.onDragOver}
        onDragEnter={run.onDragEnter}
        onDragLeave={run.onDragLeave}
      />
    </div>
  );
}

export default FullScreen;
