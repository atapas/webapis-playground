import Link from 'next/link';

import { FaBolt } from 'react-icons/fa';

import { Demo } from 'types/demo';

import { Button } from 'components';

export interface CardProps {
  data: Demo;
}

function Card({ data }: CardProps) {
  return (
    <article
      className="
        tw-flex
        tw-flex-col
        tw-items-center
        tw-py-6
        tw-px-6
        tw-text-center
        tw-border
        tw-border-solid
        tw-border-gray-200
        tw-rounded-lg
        tw-bg-white
      "
    >
      <div
        className="
          tw-text-4xl
          tw-mb-4
        "
      >
        {data.emoji}
      </div>

      <h1
        className="
          tw-mb-2
          tw-text-xl
          tw-font-bold
        "
      >
        {data.title}
      </h1>

      <p
        className="
          tw-mb-8
          tw-text-sm
          tw-text-gray-600
          tw-line-clamp-3
        "
      >
        {data.description}
      </p>

      <Link href={`/demo/${data.id}`} passHref>
        <Button as="a" leftIcon={<FaBolt />}>
          Try it
        </Button>
      </Link>
    </article>
  );
}

export default Card;
