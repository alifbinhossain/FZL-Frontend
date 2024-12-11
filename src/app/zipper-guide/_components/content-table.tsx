'use client';

import React from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const contents = [
  {
    title: 'Introduction to Zippers',
    href: '/zipper-guide#introduction-to-zippers',
  },

  {
    title: 'Quick Guide to Zippers',
    href: '/zipper-guide#quick-guide-to-zippers',
  },

  {
    title: 'Standard Zipper Parts',
    href: '/zipper-guide#standard-zipper-parts',
  },
  {
    title: 'Types of Zippers',
    href: '/zipper-guide#types-of-zippers',
  },
  {
    title: 'Zipper Sliders',
    href: '/zipper-guide#zipper-sliders',
  },
  {
    title: 'Zipper Chains',
    href: '/zipper-guide#zipper-chains',
  },
  {
    title: 'Zipper Pulls',
    href: '/zipper-guide#zipper-pulls',
  },
  {
    title: 'Tips of the Trade',
    href: '/zipper-guide#tips-of-the-trade',
  },
  {
    title: 'YKK Sizes and Styles',
    href: '/zipper-guide#ykk-sizes-and-styles',
  },
  {
    title: 'Applications Based On Zippers',
    href: '/zipper-guide#applications-based-on-zippers',
  },
  {
    title: 'Common Reasons Zippers Break',
    href: '/zipper-guide#common-reasons-zippers-break',
  },
  {
    title: 'Common Zipper Questions',
    href: '/zipper-guide#common-zipper-questions',
  },
  {
    title: 'Final Notes',
    href: '/zipper-guide#final-notes',
  },
];

const ContentTable = () => {
  return (
    <div className='border'>
      <h4 className='p-2 text-xl text-center bg-secondary text-foreground'>
        Table of Contents
      </h4>

      <ul className='flex flex-col'>
        {contents.map((content) => (
          <li key={content.href}>
            <Link href={content.href}>
              <Button
                variant={'ghost'}
                className={cn(
                  'w-full rounded-none justify-start hover:bg-transparent hover:text-accent'
                )}
              >
                {content.title}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentTable;
