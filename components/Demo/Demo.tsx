import { FiTwitter } from 'react-icons/fi';
import { IconButton } from 'components';

/**
 *
 * NOTE:
 * I will add the types soon
 */
export interface DemoProps {
  data: any;
}

function Demo({ data }: DemoProps) {
  return (
    <div
      className="
      card-group
      tw-flex
        tw-flex-col
      tw-h-card
      tw-bg-base
      tw-rounded-2xl
      tw-border-white
      tw-border-8
      tw-shadow-sm
      hover:tw-transform hover:tw-scale-105
      tw-transition-all
       tw-cursor-pointer
       tw-overflow-hidden
      "
    >
      <div
        className="
       tw-h-48
       tw-m-full
       tw-bg-red-700
       tw-rounded-header
       tw-grid
       tw-bg-header
       tw-bg-gradient-to-bl
       tw-from-bgstart
       tw-to-bgend
       card-group-hover:tw-h-0
      "
      >
        <div
          className="
          tw-text-7xl
          tw-text-white
          tw-flex
          tw-justify-center
          tw-items-center
        "
        >
          {data.icon}
          {/* {data.emoji} */}
        </div>
      </div>
      <div
        className="
        tw-flex
        tw-flex-col
        tw-flex-1
        tw-items-center
        tw-mx-auto
        tw-my-4
      "
      >
        <div
          className="
        tw-text-center
        tw-text-lg
        tw-mb-8
        "
        >
          {data.title}
        </div>
        <div
          className="
        tw-text-center
        tw-text-md
        tw-mb-8
        tw-text-sm
          tw-text-gray-600
          tw-line-clamp-3
        "
        >
          {data.desc}
        </div>
      </div>
      <div
        className="
      tw-flex
      tw-h-12
      tw-border-t-2	
      "
      >
        <div>
          <IconButton
            as="a"
            href={`https://twitter.com/${data.creator.twitter}`}
            rel="noopener noreferrer"
            target="_blank"
            ariaLabel="Share on twitter"
            className="tw-flex-1 tw-font-thin"
            icon={<>{data.creator.name}</>}
          />
        </div>

        <div>
          <IconButton
            as="a"
            href={`https://twitter.com/${data.creator.twitter}`}
            rel="noopener noreferrer"
            target="_blank"
            ariaLabel="Share on twitter"
            icon={<FiTwitter />}
          />
        </div>
      </div>
    </div>
  );
}

export default Demo;
