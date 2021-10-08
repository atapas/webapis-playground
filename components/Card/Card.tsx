import Link from 'next/link';

import { FaBolt } from 'react-icons/fa';

import { Button, Text, Spacer } from 'components';

/**
 *
 * NOTE:
 * I will add the types soon
 */
export interface CardProps {
  data: any;
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
      <Text as="div" size="4xl">
        {data.emoji}
      </Text>

      <Spacer size={4} />

      <Text as="h1" size="xl" bold>
        {data.title}
      </Text>

      <Spacer size={2} />

      <Text as="p" size="sm" color="gray-600" noOfLines={3}>
        {data.desc}
      </Text>

      <Spacer size={8} />

      <Link href={`/demos/${data.path}`} passHref>
        <Button as="a" leftIcon={<FaBolt />}>
          Try it
        </Button>
      </Link>
    </article>
  );
}

export default Card;
