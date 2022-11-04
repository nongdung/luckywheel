import React from 'react';
import LuckyWheel from '../LuckyWheel';
export const Banner30DataSource = {
  wrapper: { className: 'banner3' },
  textWrapper: {
    className: 'banner3-text-wrapper',
    children: [
      /*
      {
        name: 'nameEn',
        className: 'banner3-name-en',
        children: 'Seeking Experience & Engineering Conference',
      },
      {
        name: 'slogan',
        className: 'banner3-slogan',
        children: '首届蚂蚁金服体验科技大会',
        texty: true,
      },
      */
      {
        name: 'name',
        className: 'banner3-name',
        children: (<LuckyWheel />),
      },
    ],
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2022&nbsp;<a href="#">WShop</a>&nbsp;All Rights Reserved<br />
      </span>
    ),
  },
};
