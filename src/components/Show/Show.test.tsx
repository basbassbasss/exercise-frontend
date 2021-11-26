import React from 'react';
import { render, screen } from '@testing-library/react';

import Show, { ShowType } from '.';

describe('components/Show', () => {
  let props: ShowType;

  beforeEach(() => {
    props = {
      id: 'id',
      title: 'Title',
      episodes: 15,
      product_image_url: 'http://image-url',
      isActive: false,
    };
  });

  it('should contain the title', () => {
    props.title = 'Test title';
    render(<Show {...props} />);

    expect(screen.getByText(props.title)).toBeInTheDocument();
  });

  it('should episode count with singular suffix', () => {
    props.episodes = 1;
    render(<Show {...props} />);

    expect(screen.getByText(`${props.episodes} episode`)).toBeInTheDocument();
  });

  it('should episode count with plural suffix', () => {
    props.episodes = 10;
    render(<Show {...props} />);

    expect(screen.getByText(`${props.episodes} episodes`)).toBeInTheDocument();
  });
});
