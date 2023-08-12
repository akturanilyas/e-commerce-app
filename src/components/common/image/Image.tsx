import BaseView from '@/components/common/base-view/BaseView';
import { FC } from 'react';
import { ImageProps } from '@/components/common/image/Image.interface';
import { twMerge } from 'tailwind-merge';

export const Image: FC<ImageProps> = ({ className, imageClassName, src, width, height }) => {
  const classes = twMerge(`
      items-center justify-center
      ${className}
  `);

  const imageClasses = twMerge(`
  ${imageClassName}
  `);

  return (
    <BaseView className={classes}>
      <img src={src} className={imageClasses} alt={src} width={width} height={height} />
    </BaseView>
  );
};
