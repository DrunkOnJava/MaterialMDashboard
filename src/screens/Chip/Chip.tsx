import React from 'react';
import { DetailsByAnima } from './sections/DetailsByAnima/DetailsByAnima';
import { TitlebarByAnima } from './sections/TitlebarByAnima/TitlebarByAnima';

export const Chip = (): JSX.Element => {
  return (
    <>
      <TitlebarByAnima />
      <main className="flex-1 overflow-auto">
        <DetailsByAnima />
        </main>
    </>
  );
};
