import { NotSupported } from '@/components/NotSupported';
import { useEffect, useState } from 'react';
import { hasSupport } from '../../apis/selection-api';

function SelectionApi() {
  const [selectedText, setSelectedText] = useState('');

  useEffect(() => {
    // Listen to text selection event
    document.onselectionchange = () => {
      setSelectedText(() => (document.getSelection() || '').toString());
    };
    // Disable text selection for entire page
    document.body.classList.add('tw-select-none');

    return () => {
      document.onselectionchange = null;
      document.body.classList.remove('tw-select-none');
    };
  }, [setSelectedText]);

  if (!hasSupport()) {
    return <NotSupported />;
  }

  return (
    <div className="tw-grid tw-gap-4 tw-grid-cols-2">
      <div className="">
        <p className="tw-text-sm tw-text-gray-500">Select the following text</p>
        <p className="tw-mb-2 tw-select-text tw-border tw-p-2 tw-min-h-full">
          Shelfware product market fit so incentivization so get in the
          driver&apos;s seat but please use solutionise instead of solution
          ideas! 😊. Make sure to include in your wheelhouse. Please submit the
          sop and uat files by next monday UI incentivize adoption usabiltiy
          locked and loaded gain traction. Note for the previous submit: the
          devil should be on the left shoulder personal development for
          window-licker, or we need to follow protocol dear hiring manager.
          T-shaped individual we need to future-proof this reinvent the wheel.
          Highlights bake it in but please submit the sop and uat files by next
          monday so incentivization. Net net high-level herding cats when does
          this sunset? <br />
          (•_•)
        </p>
      </div>
      <div className="">
        <div className="tw-text-sm tw-text-gray-500">Your selected text:</div>
        <p className="tw-border tw-p-2 tw-min-h-full"> {selectedText} </p>
      </div>
    </div>
  );
}

export default SelectionApi;
