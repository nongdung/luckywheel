import React from 'react';
export const Banner50DataSource = {
  wrapper: { className: 'home-page-wrapper banner5' },
  page: { className: 'home-page banner5-page' },
  childWrapper: {
    className: 'banner5-title-wrapper',
    children: [
      { name: 'title', children: '产品名', className: 'banner5-title' },
      {
        name: 'explain',
        className: 'banner5-explain',
        children: '产品标语介绍',
      },
      {
        name: 'content',
        className: 'banner5-content',
        children: '产品的详细说明，如是什么东西之类的文字',
      },
      {
        name: 'button',
        className: 'banner5-button-wrapper',
        children: {
          href: '#',
          className: 'banner5-button',
          type: 'primary',
          children: '开始使用',
        },
      },
    ],
  },
  image: {
    className: 'banner5-image',
    children:
      'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*-wAhRYnWQscAAAAAAAAAAABkARQnAQ',
  },
};
export const Banner30DataSource = {
  wrapper: { className: 'banner3' },
  textWrapper: {
    className: 'banner3-text-wrapper',
    children: [
      {
        name: 'name',
        className: 'banner3-name',
        children: (
          <span>
            <p>Lucky Wheel</p>
          </span>
        ),
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
        <span>
          ©2022&nbsp;<a href="https://motion.ant.design">Ant Motion</a> All
          Rights Reserved
        </span>
      </span>
    ),
  },
};
