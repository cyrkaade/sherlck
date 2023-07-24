import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useTranslation } from 'next-i18next';

interface DiscreteSliderLabelProps {
  onChange: (value: number) => void;
}

export default function DiscreteSliderLabel({ onChange }: DiscreteSliderLabelProps) {
  const { t } = useTranslation('common');

  const marks = [
    {
      value: 0,
      label: t('very_easy'),
    },
    {
      value: 20,
      label: t('easy')
    },
    {
      value: 50,
      label: t('medium'),
    },
    {
      value: 80,
      label: t('hard'),
    },
    {
      value: 100,
      label: t('extremely_hard'),
    },
  ];

  function valuetext(value: number) {
    return `${value}`;
  }

  return (
    <Box
      sx={{
        width: '100%',
        marginTop: '50px',
        fontSize: '16px', // Default font size
        '@media (max-width: 600px)': {
          fontSize: '14px', // Adjust font size for smaller screens
        },
      }}
    >
      <Slider
        aria-label="Always visible"
        defaultValue={80}
        getAriaValueText={valuetext}
        step={10}
        marks={marks}
        valueLabelDisplay="on"
        color="secondary"
        onChange={(event, value) => onChange(value as number)}
      />
    </Box>
  );
}